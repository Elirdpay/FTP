"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from '@/lib/toast'
import { API_BASE } from '@/lib/api'

export default function AuthDialog({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [mode, setMode] = useState<'login'|'register'>('login')
  return (
    <div className={open ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60" : "hidden"}>
      <div className="bg-card border border-stroke rounded-2xl p-8 w-full max-w-md mx-auto relative animate-fade-in">
        <button aria-label="close" className="absolute top-4 right-4 text-xl text-muted-foreground hover:text-foreground" onClick={onClose}>×</button>
        <div className="flex justify-center mb-6 bg-muted/40 rounded-lg p-1">
          <button className={`px-4 py-2 rounded-l-lg pill ${mode==='login'?'bg-muted text-foreground border border-stroke':'bg-transparent text-muted-foreground'}`} onClick={()=>setMode('login')}>Вход</button>
          <button className={`px-4 py-2 rounded-r-lg pill ${mode==='register'?'bg-muted text-foreground border border-stroke':'bg-transparent text-muted-foreground'}`} onClick={()=>setMode('register')}>Регистрация</button>
        </div>
        {mode==='login' ? <LoginForm onSuccess={onClose}/> : <RegisterForm onSuccess={onClose}/>} 
      </div>
    </div>
  )
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  async function handleLogin(e: any) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      let res
      try{ res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) }) }catch(e){ console.error('fetch /api/auth/login failed', e); setError('Сеть: не удалось связаться с сервером'); setLoading(false); return }
      let j:any = null
      try{ j = await res.json() }catch(e){ j = null }
      if (!res.ok) {
        // try to get text fallback
        let text = null
        try{ text = await res.text() }catch(e){}
        const msg = (j && j.detail) ? j.detail : (text && text.length>0? text : (res.statusText || 'Неверные данные'))
        setError(msg)
        setLoading(false)
        return
      }
      if (j.access_token) {
        localStorage.setItem('access_token', j.access_token)
      }
      toast('Вход выполнен')
      onSuccess()
      // reload to refresh UI/auth state
      try{ location.reload() }catch(e){}
    } catch (e) {
      console.error(e)
      setError('Ошибка')
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <label className="block">
        Email
        <input type="email" className="input w-full mt-1" value={email} onChange={e=>setEmail(e.target.value)} required autoFocus />
      </label>
      <label className="block">
        Пароль
        <input type="password" className="input w-full mt-1" value={password} onChange={e=>setPassword(e.target.value)} required />
      </label>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Вход...' : 'Войти'}</Button>
    </form>
  )
}

function RegisterForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [strength, setStrength] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  function checkStrength(pw: string) {
    let s = 0
    if (pw.length >= 8) s++
    if (/[A-Z]/.test(pw)) s++
    if (/[0-9]/.test(pw)) s++
    if (/[^A-Za-z0-9]/.test(pw)) s++
    setStrength(s)
  }
  async function handleRegister(e: any) {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Пароли не совпадают'); return }
    setLoading(true)
    try {
      let res
  try{ res = await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) }) }catch(e){ console.error('fetch /api/auth/register failed', e); setError('Сеть: не удалось связаться с сервером'); setLoading(false); return }
      let j:any = null
      try{ j = await res.json() }catch(e){ j = null }
      if (!res.ok) { let text=null; try{text=await res.text()}catch(e){}; const msg = (j && j.detail) ? j.detail : (text&&text.length>0?text:(res.statusText || 'Ошибка регистрации')); setError(msg); setLoading(false); return }
      toast('Регистрация успешна')
      // попытка авто-логина
      try{
  const lr = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
        const lj = await lr.json().catch(()=>({}))
        if (lr.ok && lj.access_token){ localStorage.setItem('access_token', lj.access_token); toast('Вы автоматически вошли'); try{ location.reload() }catch(e){}; return }
      }catch(e){ console.error('auto-login after register failed', e) }
      onSuccess()
    } catch (e) {
      console.error(e)
      setError('Ошибка')
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <label className="block">
        Email
        <input type="email" className="input w-full mt-1" value={email} onChange={e=>setEmail(e.target.value)} required autoFocus />
      </label>
      <label className="block">
        Пароль
        <input type="password" className="input w-full mt-1" value={password} onChange={e=>{setPassword(e.target.value); checkStrength(e.target.value)}} required />
      </label>
      <div className="h-2 w-full bg-gray-200 rounded">
        <div className={`h-2 rounded ${strength===0?'bg-gray-200':strength<3?'bg-red-400':strength===3?'bg-yellow-400':'bg-green-500'}`} style={{width: `${strength*25}%`}}></div>
      </div>
      <label className="block">
        Подтвердите пароль
        <input type="password" className="input w-full mt-1" value={confirm} onChange={e=>setConfirm(e.target.value)} required />
      </label>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Регистрация...' : 'Зарегистрироваться'}</Button>
    </form>
  )
}
