import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { error: "POST Method only Allowed" },
      { status: 405 }
    );
  }

  try {
    const { email, username, password } = await req.json();
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ error: "Email taken" }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name: username,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export { handler as POST };
