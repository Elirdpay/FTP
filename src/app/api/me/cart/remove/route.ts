import { NextRequest, NextResponse } from 'next/server'

const BACKEND = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'

export async function POST(req: NextRequest){
  try{
    const auth = req.headers.get('authorization')
    // forward querystring as-is
    const url = new URL(req.url)
    const q = url.search
    const r = await fetch(`${BACKEND}/me/cart/remove${q}`, { method: 'POST', headers: { 'Authorization': auth || '' } })
    const text = await r.text()
    return new NextResponse(text, { status: r.status, headers: { 'Content-Type': r.headers.get('content-type') || 'application/json' } })
  }catch(e){ console.error('proxy /api/me/cart/remove error', e); return NextResponse.json({ detail: 'Proxy error' }, { status: 502 }) }
}
