import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/general/Footer";
import Progress from "@/components/general/Progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vicfams | Cleaning & Laundry Hire Services",
  description:
    "Vicfams is your trusted company for professional cleaning and laundry hire services. We deliver spotless spaces and fresh laundry solutions with reliability and care.",
  keywords: [
    "cleaning services",
    "laundry services",
    "house cleaning",
    "office cleaning",
    "laundry hire",
    "professional cleaners",
    "Vicfams cleaning",
    "Vicfams laundry",
  ],
  openGraph: {
    title: "Vicfams | Cleaning & Laundry Hire Services",
    description:
      "Experience top-notch cleaning and laundry hire services with Vicfams. We ensure spotless homes, fresh laundry, and reliable service every time.",
    url: "https://www.vicfams.com", // Update this to your actual website URL
    siteName: "Vicfams",
    images: [
      {
        url: "https://www.vicfams.com/og-image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Vicfams Cleaning & Laundry Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicfams | Cleaning & Laundry Hire Services",
    description:
      "Trusted cleaning and laundry hire services. Spotless spaces. Fresh laundry. Reliable professionals.",
    images: ["https://www.vicfams.com/og-image.png"], // Replace with your image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Progress />
        {children}
        <Footer />
      </body>
    </html>
  );
}
