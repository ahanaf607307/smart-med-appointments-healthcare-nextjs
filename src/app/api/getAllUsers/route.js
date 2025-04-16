import { createDBConn } from "@/lib/createDBConn";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await createDBConn();

    const allUsers = await User.find({}).exec();

    return NextResponse.json(allUsers);
  } catch (err) {
    console.log(err);
  }
}
