import { NextResponse } from 'next/server';
// <root>/middleware.ts
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/blog')) {
      // This logic is only applied to /about
      return NextResponse.redirect('http://localhost:3000/')
  }
}
