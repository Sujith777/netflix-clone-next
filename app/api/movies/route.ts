import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    return NextResponse.json(
      { error: "GET method only allowed" },
      { status: 405 }
    );
  }

  try {
    await serverAuth(req);
    const movies = await prismadb.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export { handler as GET };
