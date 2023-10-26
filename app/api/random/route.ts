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

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return NextResponse.json(randomMovies[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export { handler as GET };
