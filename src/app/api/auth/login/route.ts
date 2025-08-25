import { NextRequest, NextResponse } from 'next/server'

const BACKEND = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'

export async function POST(req: NextRequest) {
  try{
    const body = await req.json()
    const r = await fetch(`${BACKEND}/auth/login`, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(body) })
    const text = await r.text()
    return new NextResponse(text, { status: r.status, headers: { 'Content-Type': r.headers.get('content-type') || 'application/json' } })
  }catch(e){
    console.error('proxy /api/auth/login error', e)
    return NextResponse.json({ detail: 'Proxy error' }, { status: 502 })
  }
}
