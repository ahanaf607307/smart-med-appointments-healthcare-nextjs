<<<<<<< HEAD
import { createDBConn } from "@/lib/createDBConn";
import Review from "@/schemas/reviewSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reviewInfo = await req.json();
    const newReview = new Review({ ...reviewInfo });

    await createDBConn();

    await newReview.save();

    return NextResponse.json({ message: "Review added" });
  } catch (err) {
    console.log(err);
  }
}
=======
import { createDBConn } from "@/lib/createDBConn";
import Review from "@/schemas/reviewSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reviewInfo = await req.json();
    const newReview = new Review({ ...reviewInfo });

    await createDBConn();

    await newReview.save();

    return NextResponse.json({ message: "Review added" });
  } catch (err) {
    console.log(err);
  }
}
>>>>>>> e501e7d6f0984ab345677cf48e13646a271c5073
