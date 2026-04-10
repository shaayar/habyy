import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, getSessionCookieOptions } from "@/lib/auth";
import { ensureUserHabits, findUserByEmail } from "@/lib/data-store";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await findUserByEmail(email);

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    await ensureUserHabits(user.id);

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 }
    );

    response.cookies.set(
      SESSION_COOKIE_NAME,
      user.id,
      getSessionCookieOptions()
    );

    return response;
  } catch (error) {
    console.error("Login route failed:", error);

    return NextResponse.json(
      { error: "Failed to log in" },
      { status: 500 }
    );
  }
}
