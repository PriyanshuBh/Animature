import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Animature",
  description:
    "Featuring scroll-triggered animations, geometric transitions, and engaging video storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
