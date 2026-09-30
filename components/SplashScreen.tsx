'use client';
import { useState, useEffect } from 'react';

// Daftar "Tips" bergaya Minecraft yang akan muncul secara acak
const TIPS = [
  "Tip: You can toggle the background music using the sound icon in the bottom right corner.",
  "Crafting frontend chunks using Next.js and Tailwind CSS...",
  "Summoning backend APIs with Node.js and Express...",
  "Did you know? I built this portfolio to look like a Minecraft GUI.",
  "Optimizing redstone circuits for maximum performance...",
  "Generating world terrain and injecting project data...",
  "You have endless lives, but your items drop to the ground when you die. Hurry back to pick them up!"
];

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [currentTip, setCurrentTip] = useState('');

  useEffect(() => {
    setCurrentTip(TIPS[Math.floor(Math.random() * TIPS.length)]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + Math.floor(Math.random() * 8) + 2;
        
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsVisible(false);
            }, 500);
          }, 1200);
          return 100;
        }
        return nextProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const totalSegments = 20;
  const filledSegments = Math.floor((progress / 100) * totalSegments);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'} p-4 sm:p-8`}
      style={{
        // 1. Warna dasar (cokelat tanah)
        backgroundColor: '#2b1d14', 
        // 2. CSS murni untuk membuat pola kotak-kotak piksel tanpa gambar
        backgroundImage: `
          linear-gradient(45deg, #22160f 25%, transparent 25%, transparent 75%, #22160f 75%, #22160f),
          linear-gradient(45deg, #22160f 25%, transparent 25%, transparent 75%, #22160f 75%, #22160f)
        `,
        // 3. Ukuran setiap "piksel" kotak
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px'
      }}
    >
      {/* Kontainer Utama */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl gap-4 sm:gap-6">
        
        {/* Judul ala Logo Minecraft */}
        <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-widest drop-shadow-[3px_3px_0_#000] sm:drop-shadow-[4px_4px_0_#000] uppercase text-center">
          RAFSANJANI
        </h1>

        {/* Modal Loading */}
        <div className="w-full bg-[#c6c6c6] border-[3px] sm:border-[4px] border-t-white border-l-white border-b-[#555] border-r-[#555] p-1.5 sm:p-2 md:p-3 pixel-shadow sm:pixel-shadow-lg">
          
          <div className="text-center font-pixel text-[#333] text-xs sm:text-sm md:text-base lg:text-lg mb-1.5 sm:mb-2">
            Loading...
          </div>

          <div className="bg-[#141414] border-[3px] sm:border-[4px] border-t-[#373737] border-l-[#373737] border-b-[#8b8b8b] border-r-[#8b8b8b] p-3 sm:p-4 md:p-6 flex flex-col gap-4 sm:gap-6 md:gap-8 shadow-inner">
            
            <p className="font-pixel text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-relaxed min-h-[48px] sm:min-h-[40px] md:min-h-[48px]">
              {currentTip}
            </p>

            <div className="w-full h-3 sm:h-4 md:h-5 bg-black p-0.5 border-[1px] sm:border-2 border-[#373737] flex gap-[1px] sm:gap-[2px]">
              {Array.from({ length: totalSegments }).map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 h-full ${i < filledSegments ? 'bg-[#43b538]' : 'bg-transparent'}`}
                ></div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}