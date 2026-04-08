import localFont from "next/font/local";
import "./globals.css";

// 1. Configure the local font
const romensDawn = localFont({
  src: "../public/fonts/RomensDawnRegularRegular-5yGnz.ttf",
  src: "../public/fonts/Forfelast-Royalten-DEMO-VERSION-BF65d0c22e0fa49.otf",
  src: "../public/fonts/Heqra-KV8nA.otf",
  src: "../public/fonts/VittasoaRegular-MAe6P.otf",
  src: "../public/fonts/Forfelast-Royalten-Italic-DEMO-VERSION-BF65d0c22e0cbdc.otf",

  variable: "--font-romens",
  variable: "--font-forfelast",
  variable: "--font-forfelast_italic",
  variable: "--font-heqra",
  variable: "--font-vitta",
  // This creates a custom CSS variable
  display: "swap",
});

export const metadata = {
  title: "Habit Tracker",
  description: "Track your daily habits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Apply the CSS variable to the body tag */}
      <body className={`${romensDawn.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}