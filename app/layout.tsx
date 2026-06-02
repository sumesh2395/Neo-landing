import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Neo Home - Learn Smarter, Score Higher",
  description: "Kerala's Trusted Online Tuition Platform for CBSE/STATE, JEE & NEET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
