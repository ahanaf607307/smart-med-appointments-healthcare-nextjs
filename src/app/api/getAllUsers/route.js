<<<<<<< HEAD
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
=======
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
>>>>>>> e501e7d6f0984ab345677cf48e13646a271c5073
