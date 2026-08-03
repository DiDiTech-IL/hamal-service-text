import { NextResponse } from "next/server";
import { get, createClient } from "@vercel/edge-config";

export const config = { matcher: "/text" };
export const kv = createClient(process.env.EDGE_CONFIG);
export async function middleware() {
  const waitList = await get("waitList");

  return NextResponse.json(waitList);
}
