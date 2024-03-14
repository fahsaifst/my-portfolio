import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { AOSInit } from './aos'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahsai Thanyakan",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <AOSInit />
      <body className={`${inter.className} bg-yellow-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#ccfbf1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
                          rounded-full blur-[10rem] sm:w-[68.75rem]">
        </div>
        <div className="bg-[#ede9fe] absolute top-[-3rem] -z-10 right-[0rem]  h-[31.25rem] w-[50rem] 
                          rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-30rem] lg:left-[-28rem]
                          xl:left-[-15rem] 2xl:left-[-5rem] ">
        </div>
        <Navbar/>
        {children}</body>
    </html>
  );
}
