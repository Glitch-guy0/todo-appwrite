import { Database } from "@/appwrite/account";
import { ID, Permission, Role } from "appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = await request.cookies.get("user")?.value;
  const database = Database();
  const tasks = await database?.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );

  const filteredTasks = tasks?.documents.filter((task) => task.User === user);
  return NextResponse.json({ tasks: filteredTasks });
}

// post method
export async function POST(request: NextRequest) {
  const database = Database();
  try {
    const user = await request.cookies.get("user")?.value;
    const body = await request.json();
    const task = await database?.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      ID.unique(),
      {
        Task: body.task,
        User: user,
      }
    );
    console.log(task);
    if (task) {
      return NextResponse.json({ status: true });
    } else {
      throw new Error();
    }
  } catch (err) {
    return NextResponse.json({ status: false });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const database = Database();
    const status = await database?.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      id
    );
    if (await status) {
      return NextResponse.json({ status: true });
    } else {
      throw new Error();
    }
  } catch (_err) {
    return NextResponse.json({ status: false });
  }
}
