'use client';
import { useState } from 'react';
import Image from 'next/image';
import FadeIn from '../FadeIn';
import Link from 'next/link';

export default function Hero() {
  const [isDay, setIsDay] = useState(true);

  return (
    <section 
      id="spawn" 
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black border-b-4 border-[#373737]"
    >
      {/* LAYER 1: BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/night.webp" 
          alt="Minecraft Night Sky"
          fill
          priority
          style={{ imageRendering: 'auto' }} 
          sizes="(max-width: 768px) 256px, 384px"
          className="object-cover object-center"
        />
        <Image 
          src="/day.webp" 
          alt="Minecraft Day Sky"
          fill
          priority
          style={{ imageRendering: 'auto' }}
          sizes="(max-width: 768px) 256px, 384px"
          className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
            isDay ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
      </div>
      
      {/* LAYER 2: KONTEN UTAMA */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <FadeIn direction="down" className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 sm:gap-2 mb-6 md:mb-8 px-4 py-3 sm:py-2 bg-black/60 border-2 border-black font-terminal text-base sm:text-lg md:text-xl text-[#ffbb1e] backdrop-blur-sm shadow-[4px_4px_0_0_#000]">
            <span className="flex items-center gap-2 text-center">
              <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-[#80ff20] animate-pulse"></span>
              SERVER: PLAY.RAFSANJANI.DEV
            </span>
            <button 
              onClick={() => setIsDay(!isDay)} 
              className="w-full sm:w-auto px-3 py-1.5 sm:px-2 sm:py-0.5 bg-[#43493b] border border-white text-[10px] md:text-xs font-pixel uppercase  hover:bg-black transition-colors"
            >
              {isDay ? '☀ SKY: DAY' : '☾ SKY: NIGHT'}
            </button>
          </div>
        </FadeIn>

        <FadeIn className="w-full flex flex-col items-center">
          {/* FOTO TANPA BINGKAI */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative pixel-shadow-lg mb-6 md:mb-8 animate-mc-float mx-auto">
             <div className="absolute -top-3 -right-2 md:-right-3 bg-[#45eae6] text-black font-pixel text-[7px] md:text-[9px] px-1.5 py-1 border-2 border-black font-bold z-30 shadow-[2px_2px_0_0_#000]">
               DIAMOND
             </div>
             
             {/* Hapus border, padding, dan background di container ini */}
             <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/prof.webp" 
                  alt="Muhammad Rafsanjani" 
                  fill
                  style={{ imageRendering: 'auto' }}
                  priority 
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 192px"
                />
             </div>
          </div>

          <h1 className="font-pixel text-[13px] sm:text-base md:text-2xl lg:text-3xl text-white uppercase leading-relaxed max-w-4xl mx-auto drop-shadow-[2px_2px_0_#000000] md:drop-shadow-[4px_4px_0_#000000]">
            WELCOME TO <span className="text-[#ffbb1e] block sm:inline mt-2 sm:mt-0 drop-shadow-[2px_2px_0_#5e4200]">MUHAMMAD RAFSANJANI'S</span> WORLD
          </h1>
          
          <p className="font-terminal text-lg sm:text-xl md:text-3xl text-[#bef28a] mt-4 max-w-3xl mx-auto drop-shadow-[2px_2px_0_#000000] bg-black/50 px-3 py-2 md:px-4 md:py-2 border border-black/50 leading-snug md:leading-normal">
            Fullstack & DevOps Engineer | Leveling up web experiences with scalable architectures.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-5 w-full sm:w-auto justify-center px-4 sm:px-0">
          <a href="#stats" className="w-full sm:w-auto mc-btn-primary px-4 py-3 md:px-6 md:py-4 font-pixel text-[9px] md:text-sm text-white uppercase flex items-center justify-center gap-2 transition-transform active:translate-y-1">
            <span className="material-symbols-outlined text-[18px] md:text-[24px]">play_arrow</span> PRESS START
          </a>
          <Link href="https://drive.google.com/file/d/1VzhFVSYxAFykVNMqQVSzhjNAZeghRj9k/view?usp=drive_link" className="w-full sm:w-auto mc-btn px-4 py-3 md:px-6 md:py-4 font-pixel text-[9px] md:text-sm text-white uppercase flex items-center justify-center gap-2 transition-transform active:translate-y-1">
            <span className="material-symbols-outlined text-[18px] md:text-[24px]">swords</span> VIEW MY CV
          </Link>
        </FadeIn>

      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:flex flex-col items-center">
        <span className="font-pixel text-[8px] text-white/70 mb-2 uppercase">Scroll Down</span>
        <span className="material-symbols-outlined text-white/70">keyboard_arrow_down</span>
      </div>
    </section>
  );
}