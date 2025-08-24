"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'

export default function RegisterPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function submit(e: any){
    e.preventDefault()
    setError('')
    if (!email || !email.includes('@')){ setError('Введите корректный email'); return }
  if (!password || password.length < 8){ setError('Пароль должен быть не менее 8 символов'); return }
    if (password !== confirm){ setError('Пароли не совпадают'); return }
    setLoading(true)
    try{
      let res
  try{ res = await fetch('/api/auth/register', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email, password}) }) }catch(e){ console.error('fetch /register failed', e); setError('Сетевая ошибка'); toast('Сеть: не удалось связаться с сервером'); setLoading(false); return }
      if (!res.ok){
        const j = await res.json().catch(()=>({})); setError(j.detail || 'Ошибка'); toast(j.detail || 'Ошибка'); setLoading(false); return
      }
      // auto-login
      try {
        const tokenRes = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        if (tokenRes.ok) {
          const j = await tokenRes.json();
          localStorage.setItem('access_token', j.access_token);
          toast('Регистрация успешна, вы вошли в систему');
          router.push('/')
        } else {
          toast('Регистрация успешна, войдите в систему');
          router.push('/login')
        }
      } catch(e) {
        console.error('fetch /api/auth/login after register failed', e);
        toast('Регистрация успешна, войдите в систему');
        router.push('/login')
      }
    }catch(e:any){ console.error(e); setError('Ошибка'); toast('Ошибка') }finally{ setLoading(false) }
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Регистрация</h1>
        <form onSubmit={submit} className="max-w-md">
        <label className="block mb-2">Email
          <input placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} className="w-full input" />
        </label>
        <label className="block mb-2">Пароль
          <input placeholder="Минимум 6 символов" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full input" aria-invalid={!!error} aria-describedby="pw-help" />
        </label>
        <label className="block mb-2">Подтвердите пароль
          <input placeholder="Повторите пароль" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} className="w-full input" />
        </label>
        <div id="pw-help" className="text-xs text-muted-foreground mb-2">Пароль должен содержать минимум 6 символов.</div>
  {error && <div className="text-destructive mb-2">{error}</div>}
  <Button type="submit">{loading? 'Сохранение...' : 'Зарегистрироваться'}</Button>
        </form>
      </div>
    </section>
  )
}
