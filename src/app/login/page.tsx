"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'
import AuthModal from '@/components/ui/auth-modal'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  async function submit(e: any){
    e.preventDefault()
    setError('')
    if (!email || !email.includes('@')){ setError('Введите корректный email'); return }
    if (!password){ setError('Введите пароль'); return }
    setLoading(true)
    try{
      let res
      try {
        res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
      } catch(e) {
        console.error('fetch /api/auth/login failed', e);
        setError('Сетевая ошибка: не удалось связаться с сервером');
        toast('Сеть: не удалось связаться с сервером');
        setLoading(false);
        return;
      }
      if (!res.ok){
        setError('Неверные учётные данные')
        toast('Неверные учётные данные')
        setLoading(false)
        return
      }
      const json = await res.json()
      localStorage.setItem('access_token', json.access_token)
      // Миграция guest_cart в серверную корзину
      try {
        const guestCartRaw = localStorage.getItem('guest_cart') || '[]';
        const guestCart = JSON.parse(guestCartRaw);
        if (Array.isArray(guestCart) && guestCart.length > 0) {
          for (const item of guestCart) {
            await fetch('/api/me/cart/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${json.access_token}`
              },
              body: JSON.stringify({ product_id: String(item.product_id), quantity: item.quantity || 1 })
            });
          }
          localStorage.removeItem('guest_cart');
        }
      } catch (e) { console.error('Ошибка миграции guest_cart', e); }
      toast('Вход выполнен')
      router.push('/')
    }catch(e:any){
      console.error(e)
      setError('Ошибка')
      toast('Ошибка')
    }finally{ setLoading(false) }
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
      {typeof window !== 'undefined' && window.location.protocol === 'file:' && (
        <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">Вы открыли сайт как файл (file://). Пожалуйста, откройте приложение по адресу dev-сервера, например http://localhost:3001</div>
      )}
      <div className="w-full max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Вход</h1>
        <form onSubmit={submit} className="max-w-md">
        <label className="block mb-2">Email
          <input placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} className="w-full input" />
        </label>
        <label className="block mb-2">Пароль
          <input placeholder="••••••••" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full input" />
        </label>
  {error && <div className="text-destructive mb-2">{error}</div>}
  <Button type="submit">{loading? 'Вход...' : 'Вход'}</Button>
  <div className="mt-3 flex gap-2">
    <Button variant="ghost" type="button" onClick={()=>setOpenModal(true)}>Войти (модал)</Button>
    <Button variant="link" type="button" onClick={()=>router.push('/register')}>Создать аккаунт</Button>
  </div>
        </form>
      </div>
      <AuthModal open={openModal} onClose={()=>setOpenModal(false)} />
    </section>
  )
}
