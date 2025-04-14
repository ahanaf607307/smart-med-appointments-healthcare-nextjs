import { createDBConn } from "@/lib/createDBConn";
import Doctor from "@/schemas/doctorSchema";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const doctorID = req.nextUrl.searchParams.get("query") || "";

    await createDBConn();

    await Doctor.findByIdAndDelete(doctorID);

    return NextResponse.json("Doctor deleted successfully");
  } catch (err) {
    console.log(err);
  }
}
