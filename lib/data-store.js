import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const USERS_FILE_PATH = path.join(process.cwd(), "data", "users.json");
const HABITS_FILE_PATH = path.join(process.cwd(), "data", "habits.json");

const defaultHabitTemplates = [
  {
    title: "Morning Yoga",
    category: "Wellness",
    icon: "self_improvement",
    initialProgress: 70,
    pendingDescription: "70% grown today. Complete the session to reach bloom.",
    completedDescription: "Completed today. Your practice is helping your day bloom.",
    badgeVariant: "yellow",
  },
  {
    title: "Water Plants",
    category: "Garden",
    icon: "opacity",
    initialProgress: 0,
    pendingDescription: "Ready for watering. Tap to nurture your sprout.",
    completedDescription: "Completed today. Your garden is feeling refreshed.",
    badgeVariant: "green",
  },
  {
    title: "Read 20 Pages",
    category: "Intellect",
    icon: "book_2",
    initialProgress: 35,
    pendingDescription: "5 pages left today. Keep growing your mind.",
    completedDescription: "Completed today. Another chapter added to your growth.",
    badgeVariant: "yellow",
  },
  {
    title: "Morning Walk",
    category: "Vitality",
    icon: "task_alt",
    initialProgress: 0,
    pendingDescription: "A fresh walk is waiting for you today.",
    completedDescription: "Fully bloomed today. Nature noticed your consistency.",
    badgeVariant: "secondary",
  },
];

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDateKey(offsetDays = 0) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + offsetDays);
  return formatDateKey(date);
}

function getWeekStartDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const dayOfWeek = date.getDay();
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  date.setDate(date.getDate() + diffToMonday);
  return date;
}

function getWeekDateKeys(startDate) {
  return Array.from({ length: 7 }, (_, index) => {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + index);
    return current;
  });
}

function weekdayLabel(date) {
  return date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
}

function titleCase(value) {
  return value
    .split(/[\s._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

async function readJsonFile(filePath, fallback) {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeJsonFile(filePath, fallback);
      return fallback;
    }

    throw error;
  }
}

async function writeJsonFile(filePath, value) {
  await fs.writeFile(filePath, JSON.stringify(value, null, 2));
}

function normalizeUser(user) {
  return {
    ...user,
    name: user.name?.trim() || titleCase(user.email.split("@")[0]),
  };
}

function normalizeCompletedDates(completedDates = []) {
  return Array.from(new Set(completedDates)).sort();
}

function calculateStreak(completedDates) {
  const completedSet = new Set(normalizeCompletedDates(completedDates));
  let streak = 0;

  while (completedSet.has(getDateKey(-streak))) {
    streak += 1;
  }

  return streak;
}

function decorateHabit(habit) {
  const completedDates = normalizeCompletedDates(habit.completedDates);
  const completedToday = completedDates.includes(getDateKey());
  const streak = calculateStreak(completedDates);

  return {
    ...habit,
    completedDates,
    completed: completedToday,
    streak,
    progress: completedToday ? 100 : habit.initialProgress ?? 0,
    description: completedToday
      ? habit.completedDescription
      : habit.pendingDescription,
  };
}

function createHabitRecord(userId, template) {
  return {
    id: randomUUID(),
    userId,
    ...template,
    completedDates: [],
  };
}

export async function getUsers() {
  const data = await readJsonFile(USERS_FILE_PATH, { users: [] });
  return data.users.map(normalizeUser);
}

export async function getHabitsFile() {
  return readJsonFile(HABITS_FILE_PATH, { habits: [] });
}

export async function saveHabits(habits) {
  await writeJsonFile(HABITS_FILE_PATH, { habits });
}

export async function findUserByEmail(email) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = await getUsers();
  return users.find((user) => user.email.toLowerCase() === normalizedEmail) || null;
}

export async function findUserById(userId) {
  const users = await getUsers();
  return users.find((user) => user.id === userId) || null;
}

export async function createUser({ name, email, password }) {
  const data = await readJsonFile(USERS_FILE_PATH, { users: [] });
  const normalizedEmail = email.trim().toLowerCase();

  const userExists = data.users.some(
    (user) => user.email.toLowerCase() === normalizedEmail
  );

  if (userExists) {
    throw new Error("USER_EXISTS");
  }

  const newUser = normalizeUser({
    id: Date.now().toString(),
    name,
    email: normalizedEmail,
    password,
  });

  data.users.push(newUser);
  await writeJsonFile(USERS_FILE_PATH, data);
  await ensureUserHabits(newUser.id);

  return newUser;
}

export async function ensureUserHabits(userId) {
  const data = await getHabitsFile();
  const existingHabits = data.habits.filter((habit) => habit.userId === userId);

  if (existingHabits.length > 0) {
    return existingHabits;
  }

  const seededHabits = defaultHabitTemplates.map((template) =>
    createHabitRecord(userId, template)
  );

  data.habits.push(...seededHabits);
  await saveHabits(data.habits);

  return seededHabits;
}

export async function getHabitsForUser(userId) {
  await ensureUserHabits(userId);
  const data = await getHabitsFile();

  return data.habits
    .filter((habit) => habit.userId === userId)
    .map(decorateHabit);
}

function buildWeeklyBloom(habits) {
  const currentWeekStart = getWeekStartDate();
  const previousWeekStart = new Date(currentWeekStart);
  previousWeekStart.setDate(currentWeekStart.getDate() - 7);

  const currentWeekDates = getWeekDateKeys(currentWeekStart);
  const previousWeekDates = getWeekDateKeys(previousWeekStart);

  const countCompletedForDate = (dateKey) =>
    habits.filter((habit) => habit.completedDates.includes(dateKey)).length;

  const days = currentWeekDates.map((date) => {
    const dateKey = formatDateKey(date);
    const completedCount = countCompletedForDate(dateKey);

    return {
      label: weekdayLabel(date),
      dateKey,
      completedCount,
      isActive: completedCount > 0,
    };
  });

  const currentWeekTotal = days.reduce(
    (sum, day) => sum + day.completedCount,
    0
  );
  const previousWeekTotal = previousWeekDates.reduce(
    (sum, date) => sum + countCompletedForDate(formatDateKey(date)),
    0
  );

  const changeFromLastWeek =
    previousWeekTotal === 0
      ? currentWeekTotal > 0
        ? 100
        : 0
      : Math.round(
          ((currentWeekTotal - previousWeekTotal) / previousWeekTotal) * 100
        );

  return {
    days,
    currentWeekTotal,
    changeFromLastWeek,
  };
}

function buildGardenStats(habits, weeklyBloom) {
  const totalHabits = habits.length;
  const completedToday = habits.filter((habit) => habit.completed).length;
  const vitalityPercentage =
    totalHabits === 0 ? 0 : Math.round((completedToday / totalHabits) * 100);

  return {
    totalHabits,
    completedToday,
    vitalityPercentage,
    changeFromLastWeek: weeklyBloom.changeFromLastWeek,
  };
}

function buildFocusItems(habits) {
  const pendingHabits = habits.filter((habit) => !habit.completed).slice(0, 2);

  if (pendingHabits.length === 0) {
    return ["Today's habits are fully bloomed"];
  }

  return pendingHabits.map((habit) => habit.title);
}

export async function getDashboardSnapshot(userId) {
  const user = await findUserById(userId);

  if (!user) {
    return null;
  }

  const habits = await getHabitsForUser(userId);
  const weeklyBloom = buildWeeklyBloom(habits);
  const stats = buildGardenStats(habits, weeklyBloom);

  return {
    user,
    habits,
    stats,
    weeklyBloom,
    focusItems: buildFocusItems(habits),
  };
}

export async function checkInHabit(userId, habitId) {
  const data = await getHabitsFile();
  const habitIndex = data.habits.findIndex(
    (habit) => habit.id === habitId && habit.userId === userId
  );

  if (habitIndex === -1) {
    return null;
  }

  const today = getDateKey();
  const habit = data.habits[habitIndex];
  const completedDates = normalizeCompletedDates(habit.completedDates);

  if (!completedDates.includes(today)) {
    completedDates.push(today);
  }

  data.habits[habitIndex] = {
    ...habit,
    completedDates: normalizeCompletedDates(completedDates),
  };

  await saveHabits(data.habits);

  return decorateHabit(data.habits[habitIndex]);
}
