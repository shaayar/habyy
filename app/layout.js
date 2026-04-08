import "./globals.css";

export const metadata = {
  title: "Habby - A Cozy Habit Tracker",
  description: "A cozy habit tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-background font-body text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
