import { createDBConn } from "@/lib/createDBConn";
import Blood from "@/schemas/bloodSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await createDBConn();

    const allBloodPosts = await Blood.find({}).exec();

    return NextResponse.json(allBloodPosts);
  } catch (err) {
    console.log(err);
  }
}
