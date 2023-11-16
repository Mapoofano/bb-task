import Header from '@/components/Layout/components/Header';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

type TRootLayout = {
    children:ReactNode,
}

export default function RootLayout({children}:TRootLayout) {
  return (
    <main
      dir="rtl"
      className={`flex h-screen w-full flex-col items-center justify-center bg-gray-300 overflow-hidden ${inter.className}`}
    >
      <div className="w-full sm:max-w-sm bg-gray-50 shadow-2xl rounded-sm h-full sm:h-fit">
        <Header title="تکمیل اطلاعات" />
        {children}
      </div>
    </main>
  );
}
