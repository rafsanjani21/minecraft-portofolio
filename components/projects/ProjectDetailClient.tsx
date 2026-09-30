'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const getMinecraftItemUrl = (tier: string) => {
  const t = (tier || '').toUpperCase();

  if (t.includes('DIAMOND')) return `/items/diamond.png`;
  if (t.includes('EMERALD')) return `/items/emerald.png`;
  if (t.includes('GOLD')) return `/items/gold.png`;
  if (t.includes('NETHERITE')) return `/items/netherite.png`;
  if (t.includes('REDSTONE')) return `/items/redstone.png`;
  if (t.includes('SLIME')) return `/items/slimeball.png`;
  if (t.includes('IRON')) return `/items/iron.png`;
  if (t.includes('LAPIS')) return `/items/lapislazuli.png`;
  if (t.includes('WOOD')) return `/items/oak.png`;
  if (t.includes('STONE')) return `/items/cobblestone.png`;

  return `/items/diamond.png`;
};

export default function ProjectDetailClient({ project }: { project: any }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // --- DATA FALLBACKS ---
  const metrics = project.metrics || [
    { label: 'THROUGHPUT', icon: 'bolt', val: '10,000+', desc: 'TRANSACTIONS / DAY', subL: 'PEAK SURGE', subR: '420 TX/SEC', color: 'text-primary' },
    { label: 'LATENCY (P99)', icon: 'speed', val: '< 35ms', desc: 'AVERAGE ROUND-TRIP', subL: 'CACHE HIT', subR: '3.8ms REDIS', color: 'text-secondary-fixed' },
    { label: 'LIGHTHOUSE', icon: 'military_tech', val: '99 / 100', desc: 'PERF & ACCESSIBILITY', subL: 'SEO', subR: '100% PERFECT', color: 'text-tertiary' },
    { label: 'SLA RELIABILITY', icon: 'verified_user', val: '99.98%', desc: 'YEAR-TO-DATE UPTIME', subL: 'FAILOVER', subR: '< 1.2 SEC', color: 'text-on-surface' },
  ];

  const challenges = project.challenges || [
    { title: 'RACE CONDITIONS', obs: 'High concurrency traffic causing overlapping requests.', fix: 'Implemented atomic locks and transaction queues.' },
    { title: 'REPORTING BOTTLE', obs: 'Aggregating large datasets took too long on the main thread.', fix: 'Created async background workers and materialized views.' },
    { title: 'OFFLINE DROPS', obs: 'Client connections randomly dropping due to unstable networks.', fix: 'Architected local-first caching with background sync replay.' },
  ];

  const galleryData = project.gallery || [
    { img: project.img, tag: `VIEWPORT_01: ${project.slug.toUpperCase()}_PREVIEW.GUI`, module: 'MODULE: MAIN DASHBOARD & INTERFACE', color: 'bg-primary' },
    { img: null, tag: 'VIEWPORT_02: COMPONENT_TREE.GUI', module: 'MODULE: WAITING FOR CHUNK DATA', color: 'bg-secondary-fixed' },
    { img: null, tag: 'VIEWPORT_03: TELEMETRY_GRAPH.GUI', module: 'MODULE: WAITING FOR CHUNK DATA', color: 'bg-tertiary-fixed' }
  ];

  const nextSlide = () => setCurrentSlideIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlideIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));

  const activeSlide = galleryData[currentSlideIndex];

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. BREADCRUMBS */}
      <section className="w-full bg-surface-container-lowest pixel-border-inset">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 font-pixel text-[9px] md:text-[10px]">
          <div className="flex flex-wrap items-center gap-2 text-outline">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-none">WORLD</Link>
            <span className="text-surface-container-highest">&gt;</span>
            <Link href="/#projects" className="text-on-surface-variant hover:text-primary transition-none">PROJECTS</Link>
            <span className="text-surface-container-highest">&gt;</span>
            <span className="text-secondary-fixed bg-surface-container-high px-2 py-0.5 pixel-border-inset flex items-center gap-1 uppercase">
              <span className="w-2 h-2 bg-secondary-fixed inline-block"></span>
              {project.title}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-label-sm">
            <span className="bg-[#0A2B2A] text-secondary-fixed px-2 py-0.5 pixel-border-outset flex items-center gap-1 font-pixel text-[9px] uppercase">
              <span className="material-symbols-outlined text-[11px] text-secondary-fixed">diamond</span>
              {project.tier || 'DIAMOND TIER'}
            </span>
            <span className="bg-surface-container text-primary px-2 py-0.5 pixel-border-outset font-pixel text-[9px] uppercase">
              TYPE: {project.cat}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 py-8 flex flex-col gap-10">
        
        {/* 2. HERO PROJECT HEADER */}
        <section className="w-full bg-surface-container-high pixel-border-outset p-4 md:p-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="relative shrink-0 mx-auto lg:mx-0">
  <div className="w-32 h-32 md:w-40 md:h-40 bg-surface-container-lowest pixel-border-inset p-2 flex flex-col items-center justify-center relative group">
    <div className="w-full h-full bg-surface-container-high pixel-border-outset flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 animate-pulse z-10"></div>
      
      {/* Render Gambar Item Minecraft Sesuai Tier */}
      <div className="relative w-full h-full z-20 flex items-center justify-center p-4">
        {/* Menggunakan tag <img> standar untuk CDN eksternal & rendering pixelated */}
        <img 
          src={getMinecraftItemUrl(project.tier)} 
          alt={project.tier}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[4px_4px_0_rgba(0,0,0,0.6)]"
          style={{ imageRendering: 'pixelated' }} 
        />
      </div>
      
      <span className="absolute bottom-1 right-1 font-pixel text-[8px] text-tertiary-fixed bg-surface-container-lowest px-1 pixel-border-inset z-30">x64</span>
    </div>
  </div>
  <div className="mt-2 text-center">
    <span className="font-pixel text-[9px] text-outline text-center block">RARITY: 99.4%</span>
  </div>
</div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-primary-container text-on-primary-container font-pixel text-[8px] md:text-[9px] px-2 py-0.5 pixel-border-outset uppercase">
                  FLAGSHIP ARTIFACT
                </span>
                <span className="bg-surface-container text-outline-variant font-pixel text-[8px] md:text-[9px] px-2 py-0.5 pixel-border-inset">
                  ARCHITECT: MUHAMMAD RAFSANJANI
                </span>
              </div>
              
              <h1 className="font-pixel text-xl md:text-3xl text-on-surface tracking-wide uppercase">
                {project.title}
              </h1>
              
              <p className="font-terminal text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-3">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-container text-on-primary-container font-pixel text-[10px] uppercase pixel-border-outset hover:brightness-110 flex items-center gap-2 shadow-[2px_2px_0_0_#000]">
                    <span className="material-symbols-outlined text-[16px]">play_arrow</span> LAUNCH LIVE DEMO
                  </a>
                ) : (
                  <button disabled className="px-6 py-3 bg-surface-container-highest text-outline font-pixel text-[10px] uppercase pixel-stone-btn flex items-center gap-2 opacity-60 cursor-not-allowed">
                    <span className="material-symbols-outlined text-[16px]">lock</span> NO DEMO AVAILABLE
                  </button>
                )}
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-surface-container-highest text-on-surface font-pixel text-[10px] uppercase pixel-stone-btn flex items-center gap-2 hover:bg-[#383939] shadow-[2px_2px_0_0_#000]">
                    <span className="material-symbols-outlined text-[16px]">code</span> REPOSITORY GITHUB
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 pixel-border-inset bg-surface-container-lowest p-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full md:w-3/4">
              <span className="font-pixel text-[10px] text-primary font-bold">XP LEVEL 54</span>
              <div className="w-full bg-surface-container-high h-4 pixel-border-inset relative overflow-hidden flex p-0.5">
                <div className="h-full bg-primary" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className="font-pixel text-[8px] text-outline shrink-0">
              PROGRESSION: 2,450 / 2,800 XP TO LEVEL 55
            </div>
          </div>
        </section>

        {/* 3. LIVE BENCHMARKS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric: any, i: number) => (
            <div key={i} className="bg-surface-container-high pixel-border-outset p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-outline font-pixel text-[8px] mb-3">
                <span>STAT: {metric.label}</span>
                <span className={`material-symbols-outlined text-[18px] ${metric.color}`}>{metric.icon}</span>
              </div>
              <div>
                <div className={`font-pixel text-xl md:text-2xl font-bold tracking-tight ${metric.color}`}>{metric.val}</div>
                <div className="font-pixel text-[8px] text-on-surface-variant mt-2 uppercase">{metric.desc}</div>
              </div>
              <div className="mt-3 pt-2 pixel-border-inset bg-surface-container-low px-2 py-1.5 text-[7px] font-pixel text-outline flex items-center justify-between">
                <span>{metric.subL}</span>
                <span className={`${metric.color} font-bold`}>{metric.subR}</span>
              </div>
            </div>
          ))}
        </section>

        {/* 4. CRAFTING RECIPE MATRIX */}
        <section className="w-full bg-surface-container pixel-border-outset p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-6">
            <div>
              <span className="font-pixel text-[10px] text-tertiary uppercase">3x3 CRAFTING BENCH GUI</span>
              <h2 className="font-pixel text-lg md:text-xl text-on-surface mt-1">CRAFTING RECIPE & INGREDIENTS MATRIX</h2>
            </div>
            <div className="font-pixel text-[9px] text-outline bg-surface-container-lowest px-3 py-1.5 pixel-border-inset">
              TABLE TYPE: ADVANCED WORKBENCH
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
            <div className="lg:col-span-6 bg-surface-container-high pixel-border-inset p-4 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="grid grid-cols-3 gap-2 p-2 bg-surface-container-lowest pixel-border-inset">
                {Array.from({ length: 8 }).map((_, i) => {
                  const tech = project.matrix && project.matrix[i];
                  if (tech) {
                    return (
                      <div key={i} className="w-16 h-16 md:w-20 md:h-20 bg-surface-container pixel-border-inset p-1 flex flex-col items-center justify-center text-center relative cursor-pointer hover:bg-surface-container-highest">
                        <span className={`font-pixel text-[10px] md:text-[13px] ${tech.color} truncate max-w-full px-1`}>{tech.name}</span>
                        <span className="font-pixel text-[7px] text-outline mt-1 truncate px-1">{tech.sub}</span>
                        <span className="absolute top-1 left-1.5 font-pixel text-[7px] text-on-surface-variant">{i+1}</span>
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-lowest pixel-border-inset p-1 flex flex-col items-center justify-center opacity-30">
                      <span className="absolute top-1 left-1.5 font-pixel text-[7px] text-outline">{i+1}</span>
                    </div>
                  );
                })}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-lowest pixel-border-inset p-1 flex flex-col items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-outline">add</span>
                  <span className="font-pixel text-[6px] text-outline mt-1">CATALYST</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-tertiary-fixed py-2">
                <span className="material-symbols-outlined text-[36px] md:text-[44px]">arrow_forward</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-surface-container-lowest pixel-border-outset p-2 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#1b1c1c] to-[#0A2B2A]">
                  <span className="material-symbols-outlined text-[48px] text-secondary-fixed animate-pulse">{project.icon || 'deployed_code'}</span>
                  <span className="font-pixel text-[8px] text-tertiary-fixed font-bold mt-2 uppercase text-center">{project.title.substring(0, 10)}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-3 bg-surface-container-lowest pixel-border-inset p-4 md:p-6">
              <div className="flex items-center justify-between font-pixel">
                <span className="text-[10px] md:text-[12px] text-secondary-fixed uppercase">ITEM STATS & ATTRIBUTES</span>
                <span className="text-[8px] text-tertiary bg-surface-container px-2 py-1 pixel-border-inset">TIER 5 SYSTEM</span>
              </div>
              <p className="font-terminal text-lg md:text-xl text-on-surface-variant">
                Crafted using {project.tech}. The architecture ensures maximum efficiency and scalability across distributed network chunks.
              </p>
              <div className="bg-surface-container-high pixel-border-inset p-3 flex flex-col gap-2 font-pixel text-[8px] md:text-[9px]">
                <div className="text-tertiary-fixed flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary-fixed"></span> Enchantment: Clean Architecture</div>
                <div className="text-secondary-fixed flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary-fixed"></span> Enchantment: Component Reusability</div>
                <div className="text-primary flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Enchantment: Responsive Flow</div>
                <div className="text-outline-variant mt-1">DURABILITY: INFINITE</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ENGINEERING CHALLENGES */}
        <section className="w-full flex flex-col gap-6">
          <div>
            <span className="font-pixel text-[10px] text-error uppercase">BOSS FIGHT ENCOUNTERS</span>
            <h2 className="font-pixel text-lg md:text-xl text-on-surface mt-1">ENGINEERING CHALLENGES & REDSTONE FIXES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {challenges.map((chal: any, i: number) => (
              <div key={i} className="bg-surface-container-high pixel-border-outset p-4 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-error font-pixel text-[10px] md:text-[11px]">
                    <span className="w-6 h-6 bg-[#3A0808] flex items-center justify-center pixel-border-inset"></span>
                    <span>{chal.title}</span>
                  </div>
                  <p className="font-terminal text-lg text-on-surface-variant leading-relaxed"><strong>Obstacle:</strong> {chal.obs}</p>
                </div>
                <div className="bg-surface-container-lowest pixel-border-inset p-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-primary font-pixel text-[9px]">
                    <span className="material-symbols-outlined text-[14px]">shield</span> TOTEM SOLUTION:
                  </div>
                  <p className="font-terminal text-lg text-outline">{chal.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. INTERACTIVE PROJECT GALLERY */}
        <section className="w-full bg-surface-container pixel-border-outset p-4 md:p-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-pixel text-[10px] text-secondary-fixed uppercase">GRAPHICS ENGINE VIEWPORT</span>
              <h2 className="font-pixel text-lg md:text-xl text-on-surface uppercase mt-1">CHUNKS RENDERED: SCREENS</h2>
            </div>
            <div className="flex items-center gap-1 font-pixel text-[10px]">
              <button onClick={prevSlide} className="px-3 py-2 bg-surface-container-high text-on-surface pixel-stone-btn active:pixel-border-inset cursor-pointer">◀</button>
              <span className="bg-surface-container-lowest px-4 py-2 pixel-border-inset text-tertiary-fixed">
                [ {currentSlideIndex + 1} / {galleryData.length} ]
              </span>
              <button onClick={nextSlide} className="px-3 py-2 bg-surface-container-high text-on-surface pixel-stone-btn active:pixel-border-inset cursor-pointer">▶</button>
            </div>
          </div>

          <div className="w-full relative">
            <div className="w-full bg-surface-container-lowest pixel-border-inset p-2">
              <div className="flex items-center justify-between bg-surface-container-high px-3 py-1.5 pixel-border-outset mb-2 font-pixel text-[8px] md:text-[10px]">
                <div className="flex items-center gap-2 text-on-surface">
                  <span className={`w-2 h-2 ${activeSlide.color || 'bg-primary'}`}></span>
                  <span className="uppercase">{activeSlide.tag}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-surface-container-highest inline-block pixel-border-outset"></span>
                  <span className="w-3 h-3 bg-error inline-block pixel-border-outset"></span>
                </div>
              </div>

              <div className="relative w-full h-64 md:h-[450px] overflow-hidden pixel-border-inset bg-surface-dim flex items-center justify-center">
                {activeSlide.img ? (
                  <Image 
                    src={activeSlide.img} 
                    alt="Preview" 
                    fill 
                    className="object-cover" 
                    style={{ imageRendering: 'auto' }} 
                  />
                ) : (
                  <div className="text-center font-terminal text-xl md:text-2xl text-outline-variant p-4">
                    [ WAITING FOR CHUNK DATA... ]<br/>
                    <span className="text-sm">Screenshots not available. Add them to lib/projects.ts</span>
                  </div>
                )}
                
                <div className={`absolute bottom-2 left-2 bg-surface-container-lowest/90 px-3 py-1.5 pixel-border-outset font-pixel text-[8px] uppercase ${activeSlide.color ? activeSlide.color.replace('bg-', 'text-') : 'text-primary'}`}>
                  {activeSlide.module}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. NAVIGATION FOOTER */}
        <section className="w-full bg-surface-container-high pixel-border-outset p-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/#projects" className="w-full md:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-pixel text-[10px] md:text-xs uppercase pixel-stone-btn flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0_0_#000]">
              <span className="material-symbols-outlined text-[18px]">inventory_2</span> VIEW ALL INVENTORY (BACK)
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}