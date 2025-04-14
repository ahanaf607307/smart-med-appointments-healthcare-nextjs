import { createDBConn } from "@/lib/createDBConn";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const loginInfo = await req.json();
    await createDBConn();

    const user = await User.findOne(
      { email: loginInfo.email, password: loginInfo.password },
      "email displayName userType"
    ).exec();
    console.log(user);
    if (user?.email && user?.userType) {
      return NextResponse.json({
        acknowledged: true,
        message: "Login successfull",
        email: user?.email,
        displayName: user?.displayName,
        userType: user?.userType,
      });
    }

    return NextResponse.json({ acknowledged: false, message: "Login failed" });
  } catch (err) {
    console.log(err);
  }
}
