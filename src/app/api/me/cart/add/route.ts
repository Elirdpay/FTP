import { NextRequest, NextResponse } from 'next/server'

const BACKEND = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'

export async function POST(req: NextRequest){
  try{
    const auth = req.headers.get('authorization')
    const body = await req.text()
    const r = await fetch(`${BACKEND}/me/cart/add`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': auth || '' }, body })
    const text = await r.text()
    return new NextResponse(text, { status: r.status, headers: { 'Content-Type': r.headers.get('content-type') || 'application/json' } })
  }catch(e){ console.error('proxy /api/me/cart/add error', e); return NextResponse.json({ detail: 'Proxy error' }, { status: 502 }) }
}
