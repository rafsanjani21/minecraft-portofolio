'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../FadeIn';
import { PROJECTS_DATA } from '@/lib/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false); // State untuk kontrol tombol Show All

  const categories = ['all', 'frontend', 'fullstack', 'backend', 'iot', 'mobile'];
  
  // Fungsi untuk mengganti filter dan me-reset status Show All
  const handleFilterChange = (f: string) => {
    setFilter(f);
    setShowAll(false);
  };

  const filtered = filter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.cat === filter);
  
  // Tentukan data yang akan dirender (6 pertama, atau semuanya jika showAll true)
  const displayedProjects = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="w-full mb-20 scroll-mt-28">
      <FadeIn>
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#6f9e41] border-2 border-black flex items-center justify-center font-pixel text-[10px] text-white shadow-[2px_2px_0_0_#000]"></div>
            <h2 className="font-pixel text-lg md:text-xl text-[#e3e2e2] uppercase drop-shadow-[2px_2px_0_#000]">CRAFTING TABLE (PROJECTS)</h2>
          </div>
          <div className="flex flex-wrap gap-2 font-pixel text-[9px] max-w-lg justify-start md:justify-end">
            {categories.map(f => (
              <button 
                key={f} 
                onClick={() => handleFilterChange(f)} 
                className={`mc-btn px-3 py-1.5 text-white uppercase cursor-pointer transition-none ${filter === f ? 'bg-[#555] outline outline-2 outline-white z-10' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        
        {/* GRID PROJECTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map(proj => (
            <div key={proj.slug} className="mc-panel flex flex-col pixel-shadow-lg group">
              <div className="bg-[#373737] text-white px-3 py-2 flex items-center justify-between border-b-2 border-black">
                <div className="flex gap-2 items-center truncate">
                  <span className="material-symbols-outlined text-[18px]" style={{ color: proj.color }}>{proj.icon}</span>
                  <span className="font-pixel text-[10px] uppercase truncate">{proj.title}</span>
                </div>
              </div>

              <div className="w-full aspect-video bg-[#121414] border-b-2 border-black relative overflow-hidden p-1">
                <div className="relative w-full h-full border-2 border-[#333]">
                  <Image src={proj.img} alt={proj.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ imageRendering: 'auto' }} sizes="(max-width: 768px) 100vw, 33vw"/>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between gap-4 bg-[#c6c6c6]">
                <p className="font-terminal text-lg text-[#222] leading-snug line-clamp-3">
                  {proj.desc}
                </p>
                
                {/* ACTION BUTTONS */}
                <div className="flex flex-col gap-2 pt-2 border-t-2 border-[#8b8b8b]">
                  {/* Tombol Utama: Ke Halaman Detail */}
                  <Link href={`/projects/${proj.slug}`}>
                    <button className="mc-btn-primary w-full py-2 font-pixel text-[9px] text-white uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0_0_#000]">
                      <span className="material-symbols-outlined text-[14px]">auto_stories</span> VIEW DETAILS
                    </button>
                  </Link>

                  {/* Tombol Sekunder: Code & Demo */}
                  <div className="flex gap-2">
                    {proj.demo ? (
                      <Link href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="mc-btn w-full py-1.5 font-pixel text-[8px] text-white uppercase flex items-center justify-center gap-1 cursor-pointer"><span className="material-symbols-outlined text-[12px]">play_arrow</span> DEMO</button>
                      </Link>
                    ) : (
                      <button disabled className="flex-1 bg-[#7d7d7d] border-2 border-[#555] py-1.5 font-pixel text-[8px] text-[#333] uppercase flex items-center justify-center gap-1 opacity-60 cursor-not-allowed"><span className="material-symbols-outlined text-[12px]">lock</span> NO DEMO</button>
                    )}
                    <Link href={proj.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="mc-btn w-full py-1.5 font-pixel text-[8px] text-white uppercase flex items-center justify-center gap-1 cursor-pointer"><span className="material-symbols-outlined text-[12px]">code</span> CODE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TOMBOL SHOW ALL / SHOW LESS */}
        {filtered.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="mc-btn-primary px-8 py-3 w-full md:w-auto font-pixel text-[10px] text-white uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] transition-transform active:translate-y-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {showAll ? 'expand_less' : 'expand_more'}
              </span>
              {showAll ? 'SHOW LESS PROJECTS' : `SHOW ALL (${filtered.length}) PROJECTS`}
            </button>
          </div>
        )}

      </FadeIn>
    </section>
  );
}