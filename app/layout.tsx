import type { Metadata } from "next";
import { inter, manrope } from "@/lib/fonts";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Johan S - Portfolio",
  description: "Johan S - Portfolio",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
