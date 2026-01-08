import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs"; // 1. Import ClerkProvider
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MJ Enterprises | Civil, Electrical & Solar Engineering Bangalore",
  description: "Premier engineering firm in Bangalore. GST: 29BFRPH2421B1ZP. Specializing in Solar EPC, Civil Construction, and Electrical works.",
  verification: {
    google: "aGRpfCd8toVvHxXMsDI7CzWGdGCasgIXId3aHmdTgBY", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider> {/* 2. Wrap the entire app */}
      <html lang="en">
        <body className="antialiased bg-white text-slate-900">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}