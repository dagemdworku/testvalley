import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/app-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Valley - Demo",
  description: "Recreated by dagemdworku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
