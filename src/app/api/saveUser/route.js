import { createDBConn } from "@/lib/createDBConn";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await req.json();
    await createDBConn();

    const newUser = new User({ ...user });
    await newUser.save();

    return NextResponse.json({
      message: "User saved successfully",
    });
  } catch (err) {
    console.log(err);
  }
}
