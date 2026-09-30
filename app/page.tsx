import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Hotbar from '@/components/sections/Hotbar';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import ServerChat from '@/components/sections/ServerChat';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero dibiarkan di luar agar bisa fullscreen 100% */}
      <Hero />
      
      {/* Section sisanya dibungkus agar lebarnya rapi (max 1280px) dan berada di tengah */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-20 mt-20">
        <Stats />
        <Hotbar />
        <Projects />
        <Achievements />
        <ServerChat />
      </div>
    </div>
  );
}