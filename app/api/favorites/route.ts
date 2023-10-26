import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Invalid method" }, { status: 405 });
  }

  try {
    const { currentUser } = await serverAuth(req);

    if (!currentUser) {
      throw new Error("User does not exist");
    }

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 422 });
  }
}

export { handler as GET };
