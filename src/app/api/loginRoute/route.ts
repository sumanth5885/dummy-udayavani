import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = body?.token;

  if (!token) {
    return NextResponse.json({ error: "Token missing" }, { status: 400 });
  }

  const response = NextResponse.json({ message: "Token set" });

  response.cookies.set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV ===  'production' ? true : false,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
