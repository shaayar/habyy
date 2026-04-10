import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, getSessionCookieOptions } from "@/lib/auth";
import { createUser } from "@/lib/data-store";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const user = await createUser({ name, email, password });

    const response = NextResponse.json(
      {
        message: "User created successfully!",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );

    response.cookies.set(
      SESSION_COOKIE_NAME,
      user.id,
      getSessionCookieOptions()
    );

    return response;
  } catch (error) {
    if (error.message === "USER_EXISTS") {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    console.error("Register route failed:", error);

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
