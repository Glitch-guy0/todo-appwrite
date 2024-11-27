import sendMail from "@/appwrite/auth/sendMail";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const {email} = await request.json();
  try{
    const res = await sendMail(email);
    console.log(`route res: ${res}`);
    return NextResponse.json({status: res}); 
  }catch(err){
    return NextResponse.json({status: false}); 
  }
}