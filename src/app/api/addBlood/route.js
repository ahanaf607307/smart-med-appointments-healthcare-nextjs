import { createDBConn } from "@/lib/createDBConn";
import Blood from "@/schemas/bloodSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await createDBConn();

    const bloodInfo = await req.json();
    const newBloodInfo = new Blood({ ...bloodInfo });
    await newBloodInfo.save();

    return NextResponse.json({
      message: "Blood added successfully",
    });
  } catch (err) {
    console.log(err);
  }
}
