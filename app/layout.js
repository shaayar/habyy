import "./globals.css";

export const metadata = {
  title: "Habby - A Cozy Habit Tracker",
  description: "A cozy habit tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1"
        />
      </head>
      <body
        className="bg-background font-body text-on-surface antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
