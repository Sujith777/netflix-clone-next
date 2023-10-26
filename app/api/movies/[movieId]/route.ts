import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Invalid method" }, { status: 405 });
  }

  try {
    await serverAuth(req);
    const movieId = req.nextUrl.pathname.split("/")[3];

    if (!movieId || typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie) {
      throw new Error("Invalid ID");
    }
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export { handler as GET };
