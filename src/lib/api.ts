export const API_BASE = '' // use relative paths; Next will proxy to backend

export async function postJson(path: string, body: any, token?: string) {
  const res = await fetch(`/api${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function getJson(path: string, token?: string) {
  const res = await fetch(`/api${path}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return res.json();
}

export async function addToCart(productId: string | number, quantity = 1, name?: string | null, price?: number | null) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
  if (token) {
    const res = await fetch(`/api/me/cart/add`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ product_id: String(productId), quantity }) })
    try{
      if (res.ok){
        // refresh server cart count and notify header
        try{
          const r = await fetch('/api/me/cart', { headers: { Authorization: `Bearer ${token}` } })
          if (r.ok){ const j = await r.json(); const cnt = Array.isArray(j)? j.reduce((s:any,i:any)=>s + (i.quantity||0),0) : 0; try{ localStorage.setItem('server_cart_count', String(cnt)) }catch(e){}; try{ window.dispatchEvent(new Event('storage')) }catch(e){} }
        }catch(e){}
      }
    }catch(e){}
    return res
  }
  // Guest cart in localStorage
  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem('guest_cart') || '[]'
    let arr = []
    try{ arr = JSON.parse(raw) }catch(e){ arr = [] }
    // use provided snapshot if available, otherwise attempt to resolve product info from server
    let snapshotName:any = name || null
    let snapshotPrice:any = price || null
    if (!snapshotName || !snapshotPrice){
      try{
        const r = await fetch(`/api/products/resolve?name=${encodeURIComponent(String(productId))}`)
        if (r.ok){ const pj = await r.json(); snapshotName = snapshotName || pj.name; snapshotPrice = snapshotPrice || pj.price }
      }catch(e){}
    }
    const existing = arr.find((it:any)=>it.product_id === String(productId))
    if (existing) existing.quantity = (existing.quantity||1) + quantity
    else arr.push({ product_id: String(productId), quantity, name: snapshotName, price: snapshotPrice })
    localStorage.setItem('guest_cart', JSON.stringify(arr))
    window.dispatchEvent(new Event('storage'))
    return { ok: true }
  }
  return { ok: false }
}
