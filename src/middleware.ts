import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const isUser = await request.cookies.get("user");
  if (await isUser) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/todo", request.url));
    }
    if (request.nextUrl.pathname === "/todo") {
      return NextResponse.next();
    }
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/todo", "/"],
};
