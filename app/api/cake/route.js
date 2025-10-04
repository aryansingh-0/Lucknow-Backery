import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Cake from "@/models/Cake";

export async function GET() {
  try {
    await connectMongoDB();
    const cakes = await Cake.find();
    return NextResponse.json({success:true,cakes}, { status: 200 })
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
