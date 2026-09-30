"use client";
import { useEffect, useRef, useState } from "react";

export default function MinecraftSound() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Inisialisasi Background Music
    // Pastikan file lagu Anda bernama "bgm_minecraft.mp3" di folder public/sounds/
    bgmRef.current = new Audio("/sounds/bgm_minecraft.mp3");
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.25; // Volume direndahkan menjadi 25% agar nyaman

    // 2. Logika Click Sound Bawaan Anda
    const playClickSound = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer")
      ) {
        const audio = new Audio("/sounds/minecraft_click.mp3");
        audio.volume = 0.5;
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };

    window.addEventListener("click", playClickSound);
    
    return () => {
      window.removeEventListener("click", playClickSound);
      if (bgmRef.current) {
        bgmRef.current.pause();
      }
    };
  }, []);

  // 3. Fungsi untuk menyalakan/mematikan BGM
  const toggleMusic = () => {
    if (bgmRef.current) {
      if (isMusicPlaying) {
        bgmRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        bgmRef.current.play().catch(() => console.log("Autoplay dicegah oleh browser"));
        setIsMusicPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 bg-[#242424] border-t-[3px] border-l-[3px] border-t-[#ffffff] border-l-[#ffffff] border-b-[3px] border-r-[3px] border-b-[#373737] border-r-[#373737] p-3 flex items-center justify-center shadow-[4px_4px_0_0_#000] active:border-t-[#373737] active:border-l-[#373737] active:border-b-[#ffffff] active:border-r-[#ffffff] active:translate-y-1 transition-none"
      title="Toggle Background Music"
    >
      <span className="material-symbols-outlined text-[#e3e2e2] text-[24px]">
        {isMusicPlaying ? 'volume_up' : 'volume_off'}
      </span>
    </button>
  );
}