import { createDBConn } from "@/lib/createDBConn";
import Doctor from "@/schemas/doctorSchema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const searchQuery = req.nextUrl.searchParams.get("query") || "";
    const searchRegEx = new RegExp(searchQuery, "i");

    await createDBConn();

    const doctors = await Doctor.find({
      $or: [
        { name: { $regex: searchRegEx } },
        { specialty: { $regex: searchRegEx } },
        { hospital: { $regex: searchRegEx } },
      ],
    }).exec();

    return NextResponse.json(doctors);
  } catch (err) {
    console.log(err);
  }
}
