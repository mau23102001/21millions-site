// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import crypto from 'node:crypto'

export function middleware(req: NextRequest) {
  // --- Redirección a www.21millionspe.com ---
  const url = req.nextUrl.clone()
  const host = req.headers.get('host') || ''
  if (host === '21millionspe.com') {
    url.hostname = 'www.21millionspe.com'
    return NextResponse.redirect(url)
  }

  // --- Respuesta base ---
  const res = NextResponse.next()

  // --- Nonce único por request ---
  const nonce = crypto.randomBytes(16).toString('base64')
  // Lo exponemos en una cabecera interna para leerlo en el layout
  res.headers.set('x-nonce', nonce)

  // --- CSP estricta con nonce (sin 'unsafe-inline') ---
  // strict-dynamic permite que scripts con nonce importen otros scripts seguros.
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,
    `style-src 'self' 'unsafe-inline' https:`,
    `img-src 'self' data: https:`,
    `font-src 'self' data: https:`,
    `connect-src 'self' https:`,
    `frame-ancestors 'self'`,
    `base-uri 'self'`,
    `form-action 'self'`
  ].join('; ')

  res.headers.set('Content-Security-Policy', csp)
  return res
}

// No aplicar middleware a assets estáticos
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.png).*)'
  ]
}
