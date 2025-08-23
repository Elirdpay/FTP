"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function CheckoutForm(){
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [server, setServer] = useState('Asia')
  const [loading, setLoading] = useState(false)
  const [subtotal, setSubtotal] = useState<number | null>(null)

  async function pay(e:any){
    e.preventDefault()
    setLoading(true)
    const token = localStorage.getItem('access_token')
  const res = await fetch('/api/me/checkout', { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type':'application/json' }, body: JSON.stringify({ server, uid: address, nickname: name }) })
    setLoading(false)
    if (!res.ok) {
  const toast = (await import('@/lib/toast')).toast
  toast('Ошибка оплаты')
      return
    }
    const j = await res.json()
  const toast = (await import('@/lib/toast')).toast
  toast('Оплата прошла. Заказ #'+j.order_id)
    location.href = '/checkout'
  }

  useEffect(()=>{
    async function loadTotal(){
    const token = localStorage.getItem('access_token')
    const base = ''
      try{
        if (token){
      const res = await fetch('/api/me/cart', { headers: { Authorization: `Bearer ${token}` } })
          if (res.ok){ const items = await res.json(); const s = items.reduce((a:any,it:any)=>a + ((it.price||0) * (it.quantity||1)), 0); setSubtotal(s); return }
        }
        // guest
        const raw = localStorage.getItem('guest_cart')||'[]'
        let arr = []
        try{ arr = JSON.parse(raw) }catch(e){ arr = [] }
        // try resolve prices via server
        const resolved = await Promise.all(arr.map(async (it:any)=>{
          try{ const r = await fetch(`/api/products/resolve?name=${encodeURIComponent(it.product_id)}`); if (r.ok){ const pj=await r.json(); return { price: pj.price || 0, qty: it.quantity||1 } } }catch(e){}
          return { price: 0, qty: it.quantity||1 }
        }))
        const s = resolved.reduce((a:any,it:any)=>a + (it.price * it.qty), 0)
        setSubtotal(s)
      }catch(e){ setSubtotal(0) }
    }
    loadTotal()
  }, [])

  return (
    <section className="container py-12">
      <div className="max-w-3xl mx-auto bg-card border rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-4">Оформление заказа</h1>
        <p className="text-sm text-muted-foreground mb-6">Пожалуйста, проверьте информацию и подтвердите оплату. Сумма будет списана с вашего баланса.</p>

        <form onSubmit={pay} className="grid grid-cols-1 gap-4">
          <label className="block">
            <div className="text-sm font-medium mb-2">Server</div>
            <select className="input w-full" value={server} onChange={e=>setServer(e.target.value)}>
              <option value="Asia">Asia</option>
              <option value="America">America</option>
              <option value="Europe">Europe</option>
              <option value="Taiwan">Taiwan</option>
            </select>
          </label>

          <label className="block">
            <div className="text-sm font-medium mb-2">UID</div>
            <input className="input w-full" value={address} onChange={e=>setAddress(e.target.value)} />
          </label>

          <label className="block">
            <div className="text-sm font-medium mb-2">Никнейм</div>
            <input className="input w-full" value={name} onChange={e=>setName(e.target.value)} />
          </label>

          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-muted-foreground">Оплата будет списана с баланса пользователя</div>
            <div className="text-lg font-bold text-brand">{subtotal !== null ? new Intl.NumberFormat('ru-RU').format(subtotal) + ' ₽' : '— ₽'}</div>
          </div>

          <div className="flex gap-3 mt-4">
            <Button type="submit" disabled={loading}>{loading? 'Оплата...' : 'Оплатить'}</Button>
            <Button type="button" variant="default" onClick={()=>location.href='/'}>Вернуться к покупкам</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
