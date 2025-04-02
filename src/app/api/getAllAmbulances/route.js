import { createDBConn } from "@/lib/createDBConn";
import Ambulance from "@/schemas/ambulanceSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await createDBConn();

    const ambulances = await Ambulance.find({}).exec();

    return NextResponse.json(ambulances);
  } catch (err) {
    console.log(err);
  }
}
