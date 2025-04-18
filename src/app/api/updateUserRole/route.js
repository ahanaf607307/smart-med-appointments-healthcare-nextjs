import { createDBConn } from "@/lib/createDBConn";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id, userType } = await req.json();

    await createDBConn();

    console.log("From server: ", { id, userType });

    await User.findByIdAndUpdate(id, { userType });
    return NextResponse.json({ message: "User status updated" });
  } catch (err) {
    console.log(err);
  }
}
