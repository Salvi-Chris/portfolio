import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salvation Chigereoka",
  description:
    "Product Manager | Operations Manager | Executive Administrator | Writer and Community Builder",
  openGraph: {
    type: "website",
    url: "https://calebbenjamin.com",
    title: "Caleb Benjamin",
    description:
      "Product Manager | Operations Manager | Executive Administrator | Writer and Community Builder",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1742071730/WhatsApp_Image_2025-03-15_at_21.46.23_fca5f021_ammmlp.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Benjamin",
    description:
      "Product Manager | Operations Manager | Executive Administrator | Writer and Community Builder",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1742071730/WhatsApp_Image_2025-03-15_at_21.46.23_fca5f021_ammmlp.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200 text-zinc-800 py-20`}>
        {children}
      </body>
    </html>
  );
}
