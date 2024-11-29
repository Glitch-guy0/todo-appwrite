import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import AppwriteConnect from './appwrite/account';

 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const account = await AppwriteConnect();
  // console.log( await account?.get())
  if (request.nextUrl.pathname === '/todo') {
  return NextResponse.redirect(new URL('/login', request.url));
  }
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/todo',
}