'use client';
import { useState, useEffect, useRef } from 'react';

// Daftar mob dasar
const MOBS = [
  { id: 'creeper', src: '/mobs/creeper.png', width: 40, height: 80, baseSpeed: 10 },
  { id: 'pig', src: '/mobs/pig.png', width: 50, height: 40, baseSpeed: 14 },
  { id: 'zombie', src: '/mobs/zombie.png', width: 40, height: 80, baseSpeed: 18 },
  { id: 'chicken', src: '/mobs/chicken.png', width: 30, height: 35, baseSpeed: 8 },
];

interface ActiveMob {
  uniqueId: string;
  id: string;
  src: string;
  width: number;
  height: number;
  duration: number; 
  bottom: number;   
  zIndex: number;   
  direction: 'toRight' | 'toLeft'; 
}

export default function MobSpawner() {
  const [mobsOnScreen, setMobsOnScreen] = useState<ActiveMob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const spawnRandomMob = () => {
      const baseMob = MOBS[Math.floor(Math.random() * MOBS.length)];
      const uniqueId = Math.random().toString(36).substring(2, 9);
      
      const speedOffset = (Math.random() * 6) - 3;
      const duration = Math.max(5, baseMob.baseSpeed + speedOffset); 

      const bottom = Math.floor(Math.random() * 60);
      const zIndex = 100 - bottom;

      const direction = Math.random() > 0.5 ? 'toRight' : 'toLeft';

      const newMob: ActiveMob = {
        ...baseMob,
        uniqueId,
        duration,
        bottom,
        zIndex,
        direction,
      };

      setMobsOnScreen(prev => [...prev, newMob]);

      setTimeout(() => {
        setMobsOnScreen(prev => prev.filter(m => m.uniqueId !== uniqueId));
      }, duration * 1000);

      // --- PERUBAHAN FREKUENSI DI SINI ---
      // Mob berikutnya akan muncul secara acak antara 5 detik hingga 12 detik
      const nextSpawnDelay = Math.floor(Math.random() * 7000) + 5000; 
      timerRef.current = setTimeout(spawnRandomMob, nextSpawnDelay);
    };

    // Jeda awal saat web pertama kali dibuka (tunggu 4 detik agar tidak langsung muncul)
    timerRef.current = setTimeout(spawnRandomMob, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (mobsOnScreen.length === 0) return null;

  return (
    <>
      <style>{`
        /* Animasi Kiri ke Kanan */
        @keyframes walkToRight {
          0% { transform: translateX(-150px); }
          100% { transform: translateX(110vw); }
        }
        /* Animasi Kanan ke Kiri */
        @keyframes walkToLeft {
          0% { transform: translateX(110vw); }
          100% { transform: translateX(-150px); }
        }
      `}</style>

      {mobsOnScreen.map((mob) => (
        <div 
          key={mob.uniqueId}
          className="fixed left-0 pointer-events-none"
          style={{ 
            width: mob.width, 
            height: mob.height,
            bottom: `${mob.bottom}px`,
            zIndex: mob.zIndex,
            animation: `${mob.direction === 'toRight' ? 'walkToRight' : 'walkToLeft'} ${mob.duration}s linear forwards`
          }}
        >
          <div 
            className="relative w-full h-full drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]"
            style={{ transform: mob.direction === 'toRight' ? 'scaleX(-1)' : 'scaleX(1)' }}
          >
            <div className="absolute inset-0 bg-green-500 pixel-border-inset opacity-0" />
            <img 
              src={mob.src} 
              alt={mob.id} 
              className="w-full h-full object-contain"
              style={{ imageRendering: 'pixelated' }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
                (e.target as HTMLElement).previousElementSibling?.classList.remove('opacity-0');
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}