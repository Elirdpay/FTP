export function toast(msg: string){
  if (typeof window === 'undefined') return
  const id = 'app-toast'
  let el = document.getElementById(id)
  if (!el){
    el = document.createElement('div')
    el.id = id
    el.style.position = 'fixed'
    el.style.right = '20px'
    el.style.bottom = '20px'
    el.style.zIndex = '9999'
    document.body.appendChild(el)
  }
  const t = document.createElement('div')
  t.textContent = msg
  el.appendChild(t)
  // trigger CSS animation
  setTimeout(()=> t.classList.add('show'), 10)
  // remove after timeout with fade
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 300) }, 3000)
}
