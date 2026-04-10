import { cookies } from "next/headers";
import { findUserById } from "@/lib/data-store";

export const SESSION_COOKIE_NAME = "habby-session";

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export async function getSessionUserId() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value || null;
}

export async function getSessionUser() {
  const userId = await getSessionUserId();

  if (!userId) {
    return null;
  }

  return findUserById(userId);
}
