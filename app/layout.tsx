import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Matt Hall - Full Stack Software Developer",
  description: "Professional portfolio site for Matt Hall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
