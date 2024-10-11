import React from "react";
import type {Metadata} from "next";
import Navbar from "@/components/navbar";
import {Poppins} from "next/font/google";
import "./globals.css";

//included poppins font as in the ui design
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const {SITE_NAME} = process.env
const baseUrl = process.env.ETS_PUBLIC_VERCEL_URL
    ? `https://${process.env.ETS_PUBLIC_VERCEL_URL}` :
    'http://localhost:3000';

// this is for SEO
export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: SITE_NAME!,
        template: `$s | ${SITE_NAME}`
    },
    description: 'Enabling power across Rwanda Offering network, Electrical solutions and software applications for your businesses.',
    robots: {
        index: true, // This tells web crawlers that they are allowed to index the page (include in search results)
        follow: true //This allows crawlers to follow links on the page (follow, discover and index other linked pages)
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
        className={`${poppins.className} antialiased`}
      >
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
