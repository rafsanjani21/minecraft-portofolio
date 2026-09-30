'use client';
import { useState } from 'react';
import FadeIn from '../FadeIn';

// Data Tech Stack menggunakan CDN Simple Icons
const SKILLS = [
  { 
    id: 1, 
    name: 'NEXT.JS 14 ENGINE', 
    desc: 'High-impact fullstack applications with ISR, App Router, & optimal SEO rendering.', 
    imgUrl: 'https://cdn.simpleicons.org/nextdotjs/ffffff', // Putih Next.js
    color: '#ffffff' 
  },
  { 
    id: 2, 
    name: 'REACT.JS ECOSYSTEM', 
    desc: 'Dynamic client experiences with robust global state, Tailwind CSS, & interactive UIs.', 
    imgUrl: 'https://cdn.simpleicons.org/react/61DAFB', // Biru React
    color: '#61DAFB' 
  },
  { 
    id: 3, 
    name: 'NODE.JS BACKEND', 
    desc: 'High concurrency servers, RESTful APIs, and efficient event-driven microservices architecture.', 
    imgUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', // Hijau Node
    color: '#5FA04E' 
  },
  { 
    id: 4, 
    name: 'POSTGRESQL DATABASE', 
    desc: 'Advanced relational schemas, query optimization, JSONB processing, and strict ACID transactional safety.', 
    imgUrl: 'https://cdn.simpleicons.org/postgresql/4169E1', // Biru PostgreSQL
    color: '#4169E1' 
  },
  { 
    id: 5, 
    name: 'LINUX SERVER ADMIN', 
    desc: 'System administration, server deployment configuration, log monitoring, and secure shell operations.', 
    imgUrl: 'https://cdn.simpleicons.org/linux/FCC624', // Kuning/Putih Tux
    color: '#FCC624' 
  }
];

export default function Hotbar() {
  const [activeSlot, setActiveSlot] = useState(1);
  const activeSkill = SKILLS.find((s) => s.id === activeSlot);

  return (
    <section id="skills" className="w-full mb-20 scroll-mt-28">
      <FadeIn>
        {/* Header Hotbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#45eae6] border-2 border-black flex justify-center items-center font-pixel text-[10px] text-black">
            </div>
            <h2 className="font-pixel text-lg text-[#e3e2e2] uppercase drop-shadow-[2px_2px_0_#000]">
              ACTIVE INVENTORY
            </h2>
          </div>
          <span className="font-terminal text-xl text-[#8d9382] hidden sm:block">
            [SELECT SLOT TO INSPECT]
          </span>
        </div>

        {/* Panel Hotbar Utama */}
        <div className="mc-panel-dark p-4 md:p-6 pixel-shadow-lg">
          
          {/* Grid 5 Slot Menyesuaikan Jumlah Data */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 max-w-3xl mx-auto">
            {SKILLS.map((skill) => (
              <div 
                key={skill.id} 
                onClick={() => setActiveSlot(skill.id)}
                className={`w-full aspect-square mc-slot flex items-center justify-center relative cursor-pointer hover:bg-[#9e9e9e] transition-colors
                  ${activeSlot === skill.id ? 'mc-slot-selected outline-4 outline-white z-10' : ''}
                `}
              >
                {/* Angka Slot */}
                <span className="absolute top-1 left-1.5 font-pixel text-[8px] text-[#333]">
                  {skill.id}
                </span>
                
                {/* Logo CDN Tech Stack */}
                <img 
                  src={skill.imgUrl} 
                  alt={skill.name}
                  className="w-7 h-7 md:w-10 md:h-10 object-contain drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
                  style={{ imageRendering: 'auto' }} 
                />
              </div>
            ))}
          </div>

          {/* Banner Keterangan */}
          {activeSkill && (
            <div className="mt-6 md:mt-8 bg-[#171717] border-2 border-black p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                
                {/* Kotak Preview Logo */}
                <div className="w-12 h-12 md:w-14 md:h-14 mc-slot flex items-center justify-center shrink-0 bg-[#242424]">
                  <img 
                    src={activeSkill.imgUrl} 
                    alt={activeSkill.name} 
                    className="w-8 h-8 md:w-9 md:h-9 object-contain" 
                    style={{ imageRendering: 'auto' }} 
                  />
                </div>
                
                {/* Teks Deskripsi */}
                <div>
                  <div 
                    className="font-pixel text-[10px] md:text-xs uppercase mb-1 md:mb-0 drop-shadow-[1px_1px_0_#000]" 
                    style={{ color: activeSkill.color }}
                  >
                    EQUIPPED: {activeSkill.name}
                  </div>
                  <div className="font-terminal text-lg md:text-xl text-[#c3c9b6] leading-snug md:leading-normal">
                    {activeSkill.desc}
                  </div>
                </div>

              </div>
              
              <span className="font-pixel text-[9px] text-[#ffbb1e] bg-black px-3 py-1.5 border border-[#bc8700] whitespace-nowrap self-end md:self-center shadow-[2px_2px_0_0_#000]">
                STATUS: READY
              </span>
            </div>
          )}
          
        </div>
      </FadeIn>
    </section>
  );
}