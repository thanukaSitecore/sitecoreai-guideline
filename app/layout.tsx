import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ExerciseNav from "@/components/ExerciseNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SitecoreAI Workshop",
  description: "Interactive SitecoreAI learning workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-learning-charcoal">
        <Navbar />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
        <ExerciseNav />
      </body>
    </html>
  );
}
