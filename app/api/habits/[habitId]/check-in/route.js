import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { checkInHabit } from "@/lib/data-store";

export async function POST(_request, { params }) {
  try {
    const userId = await getSessionUserId();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { habitId } = await params;
    const habit = await checkInHabit(userId, habitId);

    if (!habit) {
      return NextResponse.json({ error: "Habit not found" }, { status: 404 });
    }

    return NextResponse.json({ habit }, { status: 200 });
  } catch (error) {
    console.error("Habit check-in route failed:", error);

    return NextResponse.json(
      { error: "Failed to update habit" },
      { status: 500 }
    );
  }
}
