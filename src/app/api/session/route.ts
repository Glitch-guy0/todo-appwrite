import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  console.log("got requrest")
  return NextResponse.json({ status: true });
}