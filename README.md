# Habby 🌱

**Habby** is a cozy, local-first habit tracking web app built with **Next.js** to help users stay consistent through small daily actions.

It is designed around the idea that progress should feel **gentle, visible, and rewarding** instead of stressful or overwhelming.

## ✨ Core Idea

Habby helps users:

- create habits
- track daily completion
- build streaks
- view progress over time
- stay motivated through a calm, friendly experience

The app starts as a **local-first productivity tool**, with plans to support a backend in the future.

---

## 🎯 Project Goals

This project is being built to practice and improve:

- **React / Next.js**
- **component architecture**
- **state management using built-in React tools**
- **localStorage-based persistence**
- **product design thinking**
- **frontend UI/UX implementation**
- future-ready **backend planning**

---

## 🧠 Product Philosophy

Habby is not meant to feel like a harsh productivity app.

It should feel like:

- supportive
- calming
- visually rewarding
- easy to return to daily

The experience is designed around:

> **tiny actions, big becoming**

---

## 🚀 Tech Stack

### Frontend
- **Next.js**
- **React**
- **JavaScript (JSX)**
- **Tailwind CSS**

### Storage (Phase 1)
- **localStorage**

### Planned Future Expansion
- **Supabase**
- authentication
- cloud sync
- analytics storage
- multi-device support

---

## 📦 Core Features (Planned)

### MVP
- Add habit
- Edit habit
- Delete / archive habit
- Mark habit complete for today
- Save habits locally
- Track streaks
- View today’s habits
- Basic progress summary

### Phase 2
- Habit categories
- Colors / icons
- Custom frequencies (daily / selected weekdays)
- Weekly / monthly progress
- Analytics dashboard
- Better habit filtering

### Phase 3
- Export / import data
- Templates
- Reminders
- Better visual insights
- Backend sync with Supabase

---

## 🧱 Data Structure (Planned)

### Habit
Each habit is stored as an object:

```js
{
  id: "123456",
  name: "Drink Water",
  category: "Health",
  color: "blue",
  frequency: "daily",
  targetDays: [],
  createdAt: "2026-04-08T10:00:00.000Z",
  archived: false
}
````

### Habit Log

Habit completion history is stored separately:

```js
{
  id: "log-1",
  habitId: "123456",
  date: "2026-04-08",
  completed: true,
  completedAt: "2026-04-08T11:22:00.000Z"
}
```

This separation helps support:

* streak calculations
* analytics
* history tracking
* future backend migration

---

## 📁 Suggested Folder Structure

```bash
src/
  app/
    page.js
    layout.js
    globals.css
    habits/
      page.js
    analytics/
      page.js
    settings/
      page.js

  components/
    HabitForm.jsx
    HabitCard.jsx
    HabitList.jsx
    ProgressSummary.jsx
    StreakCard.jsx
    Navbar.jsx

  lib/
    storage.js
    date.js
    streaks.js
    analytics.js

  data/
    habitTemplates.js
```

---

## 🛠️ Development Approach

Habby is being built with a **local-first architecture**.

This means:

* all data is stored in the browser first
* the app works without backend dependency
* the data model is designed in a way that can later be migrated to Supabase

To make future backend integration easier:

* localStorage logic should be isolated inside helper files
* UI components should not directly depend on storage APIs
* business logic should be separated into utility files

---

## 🌿 Brand Direction

Habby is designed as a **soft, growth-themed habit tracker**.

### Visual Keywords

* calm
* rounded
* friendly
* breathable
* fresh
* modern

### Emotional Keywords

* progress
* growth
* consistency
* encouragement
* warmth

---

## 🗺️ Roadmap

### v1

* Local-first MVP
* core habit tracking
* streak logic
* clean dashboard

### v2

* analytics
* categories
* habit scheduling
* improved visual feedback

### v3

* Supabase integration
* user accounts
* cloud sync
* multi-device support

---

## 💡 Long-Term Vision

Habby should evolve into a habit app that feels less like a productivity machine and more like a **small daily growth companion**.

The goal is not just to “track habits.”

The goal is to make consistency feel:

* visible
* satisfying
* sustainable

---

## 📌 Status

**Current Phase:** Planning / Early Build
**Storage Mode:** Local-first
**Backend:** Planned for future
