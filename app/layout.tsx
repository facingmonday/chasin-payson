import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chasin Payson | Pro-Led Shakeout Ride",
  description:
    "Pro-led shakeout ride. Line up behind Payson McElveen. May 14, 5PM at Airship @ The Pumphouse, Bentonville.",
  openGraph: {
    title: "Chasin Payson | Pro-Led Shakeout Ride",
    description:
      "Pro-led shakeout ride. Line up behind Payson McElveen. May 14, 5PM at Airship @ The Pumphouse, Bentonville.",
    url: "https://chasinpayson.com",
    images: [
      {
        url: "https://kikits.nyc3.digitaloceanspaces.com/organizations/69a72fb647d530fa9c13f83f/files/1774986666017-ChasinPaysonUpdatePoster.jpg",
        width: 1024,
        height: 576,
        alt: "Chasin Payson pro-led shakeout ride poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chasin Payson | Pro-Led Shakeout Ride",
    description:
      "Pro-led shakeout ride. Line up behind Payson McElveen. May 14, 5PM at Airship @ The Pumphouse, Bentonville.",
    images: [
      "https://kikits.nyc3.digitaloceanspaces.com/organizations/69a72fb647d530fa9c13f83f/files/1774986666017-ChasinPaysonUpdatePoster.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
