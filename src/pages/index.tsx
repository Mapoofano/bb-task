import SubmitInformation from '@/views/submitInfomation';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      dir="rtl"
      className={`flex h-screen w-full flex-col items-center justify-center bg-gray-300 overflow-hidden ${inter.className}`}
    >
      <SubmitInformation />
    </main>
  );
}
