"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'

export default function AuthModal({ open, onClose }: { open: boolean, onClose: () => void }){
  const [mode, setMode] = useState<'login'|'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!open) return null

  async function submit(e:any){
    e.preventDefault()
  setError('')
  // basic validation
  if (!email || !email.includes('@')){ setError('Введите корректный email'); return }
  if (!password || password.length < 6){ setError('Пароль должен быть не менее 6 символов'); return }
    if (mode === 'login'){
      const data = new FormData()
      data.append('username', email)
      data.append('password', password)
      setLoading(true)
      let res
      try{
        res = await fetch('/api/auth/login', { method: 'POST', body: data })
      }catch(e){
        console.error('fetch /token failed', e)
        setError('Сетевая ошибка: не удалось связаться с сервером')
        toast('Сеть: не удалось связаться с сервером')
        setLoading(false)
        return
      }
      if (!res.ok) { setError('Неверные учётные данные'); toast('Неверные учётные данные'); setLoading(false); return }
      const j = await res.json()
      localStorage.setItem('access_token', j.access_token)
      // Merge guest cart into user cart
      try{
        const raw = localStorage.getItem('guest_cart') || '[]'
        const arr = JSON.parse(raw)
        for (const it of arr){
          await fetch('/api/me/cart/add', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${j.access_token}` }, body: JSON.stringify({ product_id: it.product_id, quantity: it.quantity || 1 }) })
        }
        localStorage.removeItem('guest_cart')
  try{ const cnt = (await (await fetch('/api/me/cart', { headers: { Authorization: `Bearer ${j.access_token}` } })).json()).reduce((s:any,i:any)=>s + (i.quantity||0),0); localStorage.setItem('server_cart_count', String(cnt)); window.dispatchEvent(new Event('storage')) }catch(e){}
      }catch(e){ console.error('merge guest cart failed', e) }
  toast('Вход выполнен')
  onClose()
  setLoading(false)
  location.reload()
      return
    }
    // register
  if (password !== confirm){ setError('Пароли не совпадают'); return }
  setLoading(true)
    let res
  try{
    res = await fetch('/api/auth/register', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email, password }) })
  }catch(e){ console.error('fetch /register failed', e); setError('Сетевая ошибка при регистрации'); toast('Сеть: не удалось связаться с сервером'); setLoading(false); return }
    if (!res.ok){ const j = await res.json().catch(()=>({})); setError(j.detail || 'Ошибка'); toast(j.detail || 'Ошибка'); setLoading(false); return }
  // auto-login after successful registration
  try{
    const data = new FormData(); data.append('username', email); data.append('password', password)
  const tokenRes = await fetch('/api/auth/login', { method: 'POST', body: data })
    if (tokenRes.ok){ const jj = await tokenRes.json(); localStorage.setItem('access_token', jj.access_token); toast('Регистрация успешна, вы вошли'); setLoading(false); onClose(); location.reload(); return }
  }catch(e){ console.error(e) }
  setLoading(false)
  setMode('login')
  toast('Регистрация успешна, войдите в систему')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {typeof window !== 'undefined' && window.location.protocol === 'file:' && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 rounded">Вы открыли приложение как файл. Откройте dev-сервер по URL, например http://localhost:3001</div>
      )}
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-card border border-stroke rounded-2xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{mode === 'login' ? 'Вход в аккаунт' : 'Создать аккаунт'}</h3>
          <button onClick={onClose} className="text-muted-foreground text-xl">✕</button>
        </div>
  <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="p-4 rounded-lg bg-muted/60 border border-stroke">
            <h4 className="font-semibold mb-2">Преимущества</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Сохраняйте корзину</li>
              <li>История заказов</li>
              <li>Быстрая оплата</li>
            </ul>
          </div>
          <form onSubmit={submit} className="space-y-3">
            <label className="block">Email
              <input placeholder="you@example.com" className="input w-full mt-2" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
            <label className="block">Пароль
              <input placeholder="••••••••" className="input w-full mt-2" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </label>
            {mode === 'register' && (
              <label className="block">Подтвердите пароль
                <input placeholder="Повторите пароль" className="input w-full mt-2" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
              </label>
            )}
            {error && <div className="text-destructive">{error}</div>}
            <div className="flex gap-2">
              <Button type="submit">{mode === 'login' ? 'Войти' : 'Зарегистрироваться'}</Button>
              <Button variant="ghost" onClick={()=>setMode(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Создать аккаунт' : 'Войти'}</Button>
            </div>
          </form>
        </div>
        <div className="text-xs text-muted-foreground">Вход означает соглашение с пользовательским соглашением и политикой конфиденциальности.</div>
      </div>
    </div>
  )
}
