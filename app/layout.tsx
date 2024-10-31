import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
import "./globals.css";

// Included Poppins font as in the UI design
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const { SITE_NAME } = process.env;
const baseUrl = process.env.ETS_PUBLIC_VERCEL_URL
  ? `https://${process.env.ETS_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

// This is for SEO
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || 'Default Site Name',
    template: `%s | ${SITE_NAME || 'Default Site Name'}`,
  },
  description: 'Enabling power across Rwanda Offering network, Electrical solutions and software applications for your businesses.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}
      style={{ backgroundColor: "white"}}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
     
      </body>
    </html>
  );
}
