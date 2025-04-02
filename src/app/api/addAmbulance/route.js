import { createDBConn } from "@/lib/createDBConn";
import Ambulance from "@/schemas/ambulanceSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const ambulanceData = await req.json();

    await createDBConn();

    const newAmbulance = new Ambulance({ ...ambulanceData });
    await newAmbulance.save();

    return NextResponse.json({ message: "Ambulance info saved successfully" });
  } catch (err) {
    console.log(err);
  }
}
