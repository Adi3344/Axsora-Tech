import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Axsora Tech - Transform Your Ideas Into Reality",
  description: "Social Media Management, Marketing, Web Development, AI Automations, and Mobile App Development services",
  keywords: ["social media management", "marketing", "web development", "AI automations", "mobile app development"],
  robots: "index, follow",
  openGraph: {
    title: "Axsora Tech - Transform Your Ideas Into Reality",
    description: "Comprehensive digital solutions for your business growth",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${montserrat.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
