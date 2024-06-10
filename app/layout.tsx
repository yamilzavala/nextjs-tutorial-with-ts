import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import {Inter} from 'next/font/google'

type TRootLayout = {
  children: React.ReactNode
}

//font
const inter = Inter({subsets:['latin']})

//metadata - improved SEO
export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({children}: TRootLayout) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='max-w-3xl mx-auto py-10'>
          {children}
        </main>
      </body>
    </html>
  );
}
