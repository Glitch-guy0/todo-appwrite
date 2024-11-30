import createSession from "@/appwrite/auth/createSession";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) { 
  const { userId, secret } = await request.json();
  try{
    const userStatus = await createSession(userId, secret);
    if(userStatus){
      return NextResponse.json({ status: true });
    }else{
      throw new Error();
    }
  }catch(err){
    // console.log("something went wrong");
    return NextResponse.json({ status: false });
  }
}