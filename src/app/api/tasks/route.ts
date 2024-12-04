import { Database } from "@/appwrite/account";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = await request.cookies.get("user")?.value;
  const database = Database();
  const tasks = await database?.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );

  const filteredTasks = tasks?.documents.filter((task) => task.User === user);
  return NextResponse.json({ tasks: filteredTasks});
}


// post method