import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import WhatsAppChat from "@/components/WhatsAppChat"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KICA",
  description: "Kingdom Impact Coaching Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Header /> */}
        {children}
        <WhatsAppChat
        // phone="+2348012345678"           
        welcome="Hi! brethren ✝️  — I welcome you in the name of our lord's JESUS CHRIST.
        How may i help you today ?"
        ctaText="Chat on WhatsApp"
        // presetText="Hello! I’d like to speak with support."
      />
      </body>
    </html>
  );
}
