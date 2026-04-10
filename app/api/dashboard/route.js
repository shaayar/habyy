import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDashboardSnapshot } from "@/lib/data-store";

export async function GET() {
  try {
    const userId = await getSessionUserId();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dashboard = await getDashboardSnapshot(userId);

    if (!dashboard) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(dashboard, { status: 200 });
  } catch (error) {
    console.error("Dashboard route failed:", error);

    return NextResponse.json(
      { error: "Failed to load dashboard" },
      { status: 500 }
    );
  }
}
