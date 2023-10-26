import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    return NextResponse.json(
      { error: "GET Method only Allowed" },
      { status: 405 }
    );
  }

  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export { handler as GET };
