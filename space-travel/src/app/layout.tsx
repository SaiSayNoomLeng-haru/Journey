import type { Metadata } from "next";
import { barlow, belleFair, condensed } from '@/lib/fonts'
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: '%s | Space Tourism',
    default: 'Space Tourism'
  },
  description: "Explore space with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${condensed.variable} ${belleFair.variable}`}
      >
        <Header as="header" />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
