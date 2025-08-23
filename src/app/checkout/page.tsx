"use client"
import { useEffect, useState } from 'react'
import { getJson } from '@/lib/api'
import { Button } from '@/components/ui/button'

export default function CheckoutPage(){
  const [orders, setOrders] = useState<any[]>([])

  useEffect(()=>{
    const token = localStorage.getItem('access_token')
    fetch('/api/me/orders', { headers: { Authorization: `Bearer ${token}` } }).then(r=>r.json()).then(setOrders)
  }, [])

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">История заказов</h1>
      {orders.map(o=> (
        <div key={o.order_id} className="p-4 border rounded mb-4">
          <div className="flex justify-between items-center">
            <div>Заказ #{o.order_id}</div>
            <div className="text-sm text-muted-foreground">{o.status}</div>
          </div>
          <div className="mt-2">
            {o.items.map((it:any, idx:number)=>(<div key={idx}>{it.name} × {it.quantity}</div>))}
          </div>
        </div>
      ))}
    </section>
  )
}
