import type { Metadata } from "next";
import { Instrument_Serif, Fira_Code } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const firaCode = Fira_Code({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fresh Garden Restaurant",
  description: "Fresh Garden Restaurant - Mediterranean cuisine in Tirana, Albania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
