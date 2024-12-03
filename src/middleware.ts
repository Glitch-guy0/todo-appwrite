import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const isUser = request.cookies.get("user");
  // console.log( await account?.get())
  if (request.nextUrl.pathname === '/todo') {
    if(isUser) {return NextResponse.next()}
  return NextResponse.redirect(new URL('/login', request.url));
  }
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/todo',
}