"use client"
import { useEffect, useState } from 'react'
import { toast } from '@/lib/toast'
import { getJson } from '@/lib/api'
import dynamic from 'next/dynamic'
const CheckoutModal = dynamic(()=>import('@/components/cart/checkout-modal'), { ssr: false })
import { Button } from '@/components/ui/button'

export default function CartPage(){
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [singleItem, setSingleItem] = useState<any|null>(null)

  const load = async ()=>{
    const token = localStorage.getItem('access_token')
    let data = []
  if (token) data = await getJson('/me/cart', token)
    else {
      try{ data = JSON.parse(localStorage.getItem('guest_cart')||'[]') }catch(e){ data = [] }
      // guest_cart may contain snapshot { product_id, quantity, name, price }
  const base = ''
      // try to resolve missing name/price via server
      data = await Promise.all(data.map(async (it:any)=>{
        const out = { product_id: it.product_id, name: it.name || it.product_id, price: it.price || 0, quantity: it.quantity }
        if (!out.price || out.price === 0){
          // try resolve by product_id
            try{
            let resp = await fetch(`/api/products/resolve?name=${encodeURIComponent(it.product_id)}`)
            if (resp.ok){ const pj = await resp.json(); out.name = pj.name || out.name; out.price = pj.price || out.price }
            // fallback: try using stored name
            if ((!out.price || out.price === 0) && it.name){
              resp = await fetch(`/api/products/resolve?name=${encodeURIComponent(it.name)}`)
              if (resp.ok){ const pj = await resp.json(); out.name = pj.name || out.name; out.price = pj.price || out.price }
            }
            // fallback: replace underscores with dashes and try last token
            if ((!out.price || out.price === 0) && typeof it.product_id === 'string'){
              const alt = it.product_id.replace(/_/g, '-')
              resp = await fetch(`/api/products/resolve?name=${encodeURIComponent(alt)}`)
              if (resp.ok){ const pj = await resp.json(); out.name = pj.name || out.name; out.price = pj.price || out.price }
              if ((!out.price || out.price === 0)){
                const parts = it.product_id.split('-')
                if (parts.length) {
                  const last = parts[parts.length-1]
                  resp = await fetch(`/api/products/resolve?name=${encodeURIComponent(last)}`)
                  if (resp.ok){ const pj = await resp.json(); out.name = pj.name || out.name; out.price = pj.price || out.price }
                }
              }
            }
          }catch(e){}
        }
        // debug
        try{ console.debug('cart item resolved', out) }catch(e){}
        return out
      }))
    }
    setItems(data)
    // notify header / global listeners about updated cart count
    try{
      const count = Array.isArray(data) ? data.reduce((s:any,i:any)=>s + (i.quantity||0), 0) : 0
  try{ localStorage.setItem('server_cart_count', String(count)) }catch(e){}
  try{ window.dispatchEvent(new Event('storage')) }catch(e){}
    }catch(e){}
  }

  useEffect(()=>{ load() }, [])
  useEffect(()=>{
    const onStorage = (_e:any)=>{ load() }
    window.addEventListener('storage', onStorage)
    return ()=> window.removeEventListener('storage', onStorage)
  }, [])

  async function changeQty(pid:any, delta:number){
    // for guest cart
    const token = localStorage.getItem('access_token')
    if (!token){
      const raw = localStorage.getItem('guest_cart')||'[]'
      let arr = []
      try{ arr = JSON.parse(raw) }catch(e){ arr = [] }
      const it = arr.find((x:any)=>x.product_id==pid)
      if (it){ it.quantity = Math.max(1, (it.quantity||1)+delta); localStorage.setItem('guest_cart', JSON.stringify(arr)); window.dispatchEvent(new Event('storage')); load() }
      return
    }
  // call API to update quantity
  const apiBase = ''
  // find current quantity
  const resp = await fetch(`/api/me/cart`, { headers: { Authorization: `Bearer ${token}` } })
  if (!resp.ok) return
  const items:any[] = await resp.json()
  const it = items.find(x=>String(x.product_id)===String(pid))
  const current = it ? (it.quantity||1) : 1
  const newQ = Math.max(0, current + delta)
  const r = await fetch(`/api/me/cart/update`, { method:'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ product_id: String(pid), quantity: newQ }) })
  const toast = (await import('@/lib/toast')).toast
  if (!r.ok) {
    let msg = 'Ошибка обновления количества'
    try{ const j = await r.json(); if (j && j.detail) msg = (typeof j.detail === 'string' ? j.detail : JSON.stringify(j.detail)) }catch(e){}
    toast(msg)
  }
  else toast('Количество обновлено')
  // refresh and notify
  await load()
  try{ const cnt = (await (await fetch(`/api/me/cart`, { headers: { Authorization: `Bearer ${token}` } })).json()).reduce((s:any,i:any)=>s + (i.quantity||0),0); localStorage.setItem('server_cart_count', String(cnt)); window.dispatchEvent(new Event('storage')) }catch(e){}
  }

  async function removeItem(pid:any){
    const token = localStorage.getItem('access_token')
    if (!token){
      const raw = localStorage.getItem('guest_cart')||'[]'
      let arr = []
      try{ arr = JSON.parse(raw) }catch(e){ arr = [] }
      arr = arr.filter((x:any)=>x.product_id!=pid)
      localStorage.setItem('guest_cart', JSON.stringify(arr))
      window.dispatchEvent(new Event('storage'))
      load()
      return
    }
  try{ await fetch(`/api/me/cart/remove?product_id=${encodeURIComponent(pid)}`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } }) }catch(e){ console.error('fetch /me/cart/remove failed', e); toast('Сеть: не удалось удалить товар'); }
    await load()
    try{ const cnt = (await (await fetch(`/api/me/cart`, { headers: { Authorization: `Bearer ${token}` } })).json()).reduce((s:any,i:any)=>s + (i.quantity||0),0); localStorage.setItem('server_cart_count', String(cnt)); window.dispatchEvent(new Event('storage')) }catch(e){}
  }

  const subtotal = items.reduce((s:any,it:any)=>s + ((it.price||0) * (it.quantity||1)), 0)

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={()=>location.href='/'}>← Вернуться к покупкам</Button>
          <h1 className="text-3xl font-bold">Корзина</h1>
        </div>
        <div className="text-sm text-muted-foreground">Товаров: <span className="font-semibold">{items.reduce((s,i)=>s + (i.quantity||0), 0)}</span></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {items.length === 0 && (
            <div className="p-12 border rounded-lg text-center text-muted-foreground">
              <div className="text-2xl font-bold mb-2">Ваша корзина пуста</div>
              <div className="text-sm">Добавьте товары из каталога — мы сохраним их для вас.</div>
            </div>
          )}

          {items.map((it) => (
            <div key={it.product_id} className="p-4 border rounded-2xl flex gap-4 items-center shadow-sm bg-card">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-2xl font-bold text-primary-foreground overflow-hidden">
                {/* thumbnail placeholder */}
                <div className="w-full h-full flex items-center justify-center text-2xl">{(it.name || '✦')[0]}</div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg truncate">{it.name}</div>
                  {/* show total price on the right (if qty===1 this is the single price) */}
                  <div className="text-lg font-bold text-brand">{new Intl.NumberFormat('ru-RU').format(((it.price || 0) * (it.quantity || 1)))} ₽</div>
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center justify-between">
                  {/* left: per-item price only when quantity >= 2 */}
                  <div className="truncate">
                    {(it.quantity || 1) >= 2 ? (<>{new Intl.NumberFormat('ru-RU').format((it.price || 0))} ₽ / шт</>) : null}
                  </div>
                  {/* right: show a small multiplier text when quantity >= 2, hide when qty === 1 */}
                  <div className="ml-4 text-right">
                    {(it.quantity || 1) >= 2 ? (<>{it.quantity} × {new Intl.NumberFormat('ru-RU').format((it.price || 0))} ₽</>) : null}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button aria-label="decrease" className="px-3 py-1 border rounded" onClick={() => changeQty(it.product_id, -1)}>-</button>
                  <div className="px-3 py-1 border rounded bg-muted">{it.quantity}</div>
                  <button aria-label="increase" className="px-3 py-1 border rounded" onClick={() => changeQty(it.product_id, +1)}>+</button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-sm text-primary-foreground hover:underline" onClick={() => { setSingleItem(it); setShow(true) }}>Оплатить отдельно</button>
                  <button className="text-sm text-destructive hover:underline" onClick={() => removeItem(it.product_id)}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="p-6 border rounded-2xl bg-card shadow-md">
          <div className="text-muted-foreground">Итого</div>
          <div className="text-3xl font-extrabold mt-2 text-card-foreground">{new Intl.NumberFormat('ru-RU').format(subtotal)} ₽</div>
          <div className="text-sm text-muted-foreground mt-2">Баланс будет списан при подтверждении заказа</div>
            <div className="mt-6 flex flex-col gap-3">
            <Button onClick={() => setShow(true)} className="w-full">Перейти к оплате</Button>
            <Button variant={"default"} onClick={() => { localStorage.removeItem('guest_cart'); window.dispatchEvent(new Event('storage')); load() }} className="w-full">Очистить корзину</Button>
          </div>
        </aside>
      </div>
  <CheckoutModal open={show} onClose={()=>{ setShow(false); setSingleItem(null) }} subtotal={ singleItem ? ((singleItem.price||0) * (singleItem.quantity||1)) : subtotal } singleItem={singleItem} />
    </section>
  )
}
