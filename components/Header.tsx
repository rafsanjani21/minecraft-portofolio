'use client';
import { useState } from 'react';
import Link from 'next/link'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Spawn', id: 'spawn' },
    { name: 'Stats', id: 'stats' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Advancements', id: 'advancements' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d0e0f]/95 backdrop-blur-md border-b-4 border-[#343535] shadow-[0_4px_0_0_#000000]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="h-20 flex items-center justify-between gap-4 py-2">
          
          {/* Logo / Title Kiri */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 bg-[#292a2a] pixel-border-inset flex items-center justify-center text-[#a2d571] group-hover:bg-[#343535] transition-colors shrink-0">
              <span className="material-symbols-outlined text-[24px]">deployed_code</span>
            </div>
            <div>
              <div className="font-pixel text-xs text-white flex items-center gap-2 uppercase">
                <span>RAFSAN.DEV</span>
                <span className="bg-[#343535] px-1 border border-[#43493b] text-[#a2d571] text-[10px] hidden sm:inline-block">v1.20</span>
              </div>
              <div className="font-terminal text-sm text-[#c3c9b6] truncate">FULLSTACK DEVELOPER</div>
            </div>
          </Link>

          {/* Navigasi Kanan (Mode Desktop) */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                href={`/#${item.id}`} 
                className="px-3 py-1.5 uppercase font-pixel text-[10px] pixel-border-outset bg-[#343535] text-[#c3c9b6] hover:bg-[#383939] hover:text-white transition-transform active:translate-y-0.5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tombol Hamburger (Mode Mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden mc-btn p-2 flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-white text-[20px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          
        </div>
      </div>

      {/* Dropdown Menu (Mode Mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1b1c1c] border-b-4 border-[#343535] pixel-shadow-lg flex flex-col p-4 gap-3 shadow-xl">
          {navItems.map((item) => (
            <Link 
              key={item.id} 
              href={`/#${item.id}`} 
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-4 py-3 uppercase font-pixel text-[10px] text-center pixel-border-outset bg-[#343535] text-[#c3c9b6] hover:bg-[#383939] hover:text-white active:translate-y-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}