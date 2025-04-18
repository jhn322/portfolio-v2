import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "JS Portfolio",
  description: "JS Portfolio",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
