import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { without } from "lodash";

async function handler(req: NextRequest, res: NextResponse) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);
      const { movieId } = await req.json();
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid ID");
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });
      return NextResponse.json(user, { status: 200 });
    }

    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req);
      const { movieId } = await req.json();
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid ID");
      }

      const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);
      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });

      return NextResponse.json(updatedUser, { status: 200 });
    }

    return NextResponse.json({ error: "Invalid method" }, { status: 405 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export { handler as POST, handler as DELETE };
