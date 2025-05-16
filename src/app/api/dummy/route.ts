import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('authToken'); // Replace 'token' with the actual cookie name
  // Access the cookie's value

    console.log('Cookie Value:', req.headers);


  return NextResponse.json({ message: "Token set" });

}
