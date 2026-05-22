import { NextResponse } from "next/server";
import albums from "@/lib/artists";

export async function GET() {
  return NextResponse.json(albums);
}
