import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Axsora Tech - Transform Your Ideas Into Reality",
  description: "Social Media Management, Marketing, Web Development, AI Automations, and Mobile App Development services",
  keywords: ["social media management", "marketing", "web development", "AI automations", "mobile app development"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Axsora Tech - Transform Your Ideas Into Reality",
    description: "Comprehensive digital solutions for your business growth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
