// app/api/admin/route.js
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Cake from "@/models/Cake";

export async function GET() {
  try {
    return NextResponse.json()
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
