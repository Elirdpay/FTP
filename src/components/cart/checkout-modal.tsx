"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'

export default function CheckoutModal({ open, onClose, subtotal, singleItem }: { open: boolean, onClose: ()=>void, subtotal: number, singleItem?: any }){
  const [balance, setBalance] = useState<number|null>(null)
  const [loading, setLoading] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [success, setSuccess] = useState(false)
  useEffect(()=>{
    async function load(){
      const token = localStorage.getItem('access_token')
      if (!token){ setBalance(null); return }
      try{
        const res = await fetch('/api/me/profile', { headers:{ Authorization: `Bearer ${token}` } })
        if (!res.ok) { setBalance(null); return }
        const j = await res.json()
  setBalance(Number(j.balance || 0))
      }catch(e){ console.error('fetch /me/profile failed', e); setBalance(null); toast('Сеть: не удалось получить профиль') }
    }
    if (open) load()
  },[open])

  async function payWithBalance(){
    const token = localStorage.getItem('access_token')
    if (!token){ toast('Пожалуйста, войдите в аккаунт для оплаты с баланса'); return }
    // show confirmation buttons first
    setConfirming(true)
  }

  async function doConfirm(){
    const token = localStorage.getItem('access_token')
    if (!token){ toast('Пожалуйста, войдите в аккаунт для оплаты с баланса'); return }
    setLoading(true)
    try{
      let res
      if (singleItem){
  res = await fetch('/api/me/checkout/item', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ product_id: String(singleItem.product_id), quantity: singleItem.quantity || 1 }) })
      } else {
        res = await fetch('/api/me/checkout', { method: 'POST', headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ server: 'Auto', uid: '', nickname: '' }) })
      }
      if (!res.ok){ const j = await res.json().catch(()=>({})); toast(j.detail || 'Ошибка оплаты'); setLoading(false); setConfirming(false); return }
      const j = await res.json()
      toast('Оплата проведена, заказ #' + j.order_id)
      // update server cart count from server
      try{
        const rc = await fetch('/api/me/cart', { headers: { Authorization: `Bearer ${token}` } })
        if (rc.ok){ const cj = await rc.json(); const cnt = Array.isArray(cj)? cj.reduce((s:any,i:any)=>s + (i.quantity||0),0) : 0; try{ localStorage.setItem('server_cart_count', String(cnt)) }catch(e){}; try{ window.dispatchEvent(new Event('storage')) }catch(e){} }
      }catch(e){}
      if (singleItem){
        // show success panel with choices
        setSuccess(true)
        setConfirming(false)
        setLoading(false)
        return
      }
      // full-cart flow: close and redirect to account
      onClose()
      location.href = '/account'
    }catch(e){ console.error('fetch /me/checkout failed', e); toast('Сеть: не удалось выполнить оплату') }finally{ setLoading(false); setConfirming(false) }
  }

  function cancelConfirm(){
    setConfirming(false)
    // remain in cart (close modal keeps user on cart page)
  }

  function payDirect(){
    toast('Перенаправление на платёжный шлюз (симуляция)')
    // in real app redirect to external payment provider
    onClose()
    location.href = '/checkout'
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-card border border-stroke rounded-2xl p-6 w-full max-w-2xl shadow-xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Оформление заказа</h3>
          <button onClick={onClose} className="text-muted-foreground text-xl">✕</button>
        </div>
        {success ? (
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Успех!</h3>
            <p className="text-sm text-muted-foreground mb-6">Покупка успешно оформлена. Перейдите в личный кабинет для активации покупок.</p>
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <Button onClick={()=>{ try{ location.href='/account' }catch(e){} }} className="w-full brand-gradient brand-glow">Перейти в личный кабинет</Button>
              <Button variant="outline" onClick={()=>{ try{ localStorage.setItem('server_cart_count','0'); window.dispatchEvent(new Event('storage')) }catch(e){}; setSuccess(false); onClose(); }} className="w-full">Остаться в корзине</Button>
            </div>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm text-muted-foreground">Итоговая сумма</h4>
            <div className="text-3xl font-extrabold mt-2">{new Intl.NumberFormat('ru-RU').format(subtotal)} ₽</div>
            <div className="mt-4 text-sm text-muted-foreground">Проверьте сервер, UID и никнейм на следующем шаге.</div>
          </div>
          <div>
            <h4 className="text-sm text-muted-foreground">Баланс аккаунта</h4>
            <div className="text-2xl font-bold mt-2">{balance !== null ? new Intl.NumberFormat('ru-RU').format(balance) + ' ₽' : '—'}</div>
              <div className="mt-4 flex flex-col gap-3">
              {!confirming ? (
                <>
                  <Button onClick={payWithBalance} disabled={loading || (balance !== null && balance < subtotal)} className="w-full brand-gradient brand-glow">Оплатить с баланса</Button>
                  <Button variant="outline" onClick={payDirect} className="w-full">Оплатить напрямую</Button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Button onClick={doConfirm} disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Подтвердить</Button>
                  <Button variant="outline" onClick={cancelConfirm} className="w-full border-red-600 text-red-600 hover:bg-red-50">Отменить</Button>
                </div>
              )}
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
