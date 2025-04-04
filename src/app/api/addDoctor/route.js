import { createDBConn } from "@/lib/createDBConn";
import Doctor from "@/schemas/doctorSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await createDBConn();

    const doctorInfo = await req.json();
    const newDoctor = new Doctor({ ...doctorInfo });
    await newDoctor.save();

    return NextResponse.json({
      message: "Doctor added successfully",
    });
  } catch (err) {
    console.log(err);
  }
}
