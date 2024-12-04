import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const isUser = await request.cookies.get("user");
  if (request.nextUrl.pathname === "/todo" || request.nextUrl.pathname === "/") {
    if (await isUser) {
      return NextResponse.redirect(new URL("/todo", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/todo", "/"],
};
