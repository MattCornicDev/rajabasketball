import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raja Basketball — Raja Athletic Club",
  description: "Le site officiel de la section basketball du Raja Athletic Club.",
  icons: {
    icon: '/logo-raja.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
