import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopNav } from '@/components/layout/TopNav';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nike Clone',
  description: 'A Nike clone built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <TopNav />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}