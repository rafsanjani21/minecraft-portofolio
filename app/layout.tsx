import type { Metadata } from 'next';
import { Press_Start_2P, VT323 } from 'next/font/google';
import './globals.css';
import MinecraftSound from '@/components/MinecraftSound';
import Header from '@/components/Header';
import MobSpawner from '@/components/MobSpawner';
import SplashScreen from '@/components/SplashScreen';

const pressStart2P = Press_Start_2P({
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-pixel', 
  display: 'swap',
});

const vt323 = VT323({
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-terminal', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Rafsanjani | Portfolio',
  description: 'Fullstack & Frontend Developer Portfolio with Minecraft aesthetic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable} dark scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-primary selection:text-[#1c3700]">
        <MinecraftSound />
        <SplashScreen />
        <Header />
        {/* HAPUS max-w-[1280px] dan px-4 di sini agar Hero bisa full 100% */}
        <main className="w-full pt-20 pb-32 min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <MobSpawner />
      </body>
    </html>
  );
}