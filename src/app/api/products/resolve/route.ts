import { NextRequest, NextResponse } from 'next/server'

const BACKEND = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'

export async function GET(req: NextRequest){
  try{
    const url = new URL(req.url)
    const qs = url.search
    const r = await fetch(`${BACKEND}/products/resolve${qs}`)
    const text = await r.text()
    return new NextResponse(text, { status: r.status, headers: { 'Content-Type': r.headers.get('content-type') || 'application/json' } })
  }catch(e){ console.error('proxy /api/products/resolve error', e); return NextResponse.json({ detail: 'Proxy error' }, { status: 502 }) }
}
