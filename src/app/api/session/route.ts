import createSession from "@/appwrite/auth/createSession";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) { 
  const { userId, secret } = await request.json();
  try{
    const userSession = await createSession(userId, secret);
    
    if(userSession){
      const response = NextResponse.json({status: true});
      response.cookies.set("user", userSession, {httpOnly: true, secure: true, maxAge: 30*24*60*60});
      return response;
    }else{
      throw new Error();
    }
  }catch(err){
    // console.log("something went wrong");
    return NextResponse.json({ status: false });
  }
}