"use client"
import { useEffect, useState } from 'react'
import { getJson } from '@/lib/api'
import { Button } from '@/components/ui/button'

export default function AccountPage(){
  const [profile, setProfile] = useState<any>(null)

  useEffect(()=>{
    const token = localStorage.getItem('access_token')
    getJson('/me/profile', token || undefined).then(setProfile)
  }, [])

  if (!profile) return <section className="container py-12">Loading...</section>

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Личный кабинет</h1>
      <div className="p-4 border rounded max-w-md">
        <div><strong>Email:</strong> {profile.email}</div>
        <div><strong>Баланс:</strong> {profile.balance}</div>
        <div><strong>Текущая корзина:</strong> {profile.cart_id || 'нет'}</div>
      </div>
      <div className="mt-6">
        <Button onClick={()=>{ localStorage.removeItem('access_token'); location.href='/'}}>Выйти</Button>
      </div>
    </section>
  )
}
