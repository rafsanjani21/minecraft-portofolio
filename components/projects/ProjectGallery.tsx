'use client';
import { useState } from 'react';
import FadeIn from '../FadeIn';

const SLIDES = [
  {
    id: 1,
    tag: 'VIEWPORT_01: MASTER_INVENTORY_MATRIX.GUI',
    tagColor: 'bg-primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPtmE9bo8dRle8msLMGZBG6IIUyFxinnvCOkpJE6DZw2s1_SVevLxtV5x9BLOcXiRRoH5Y8IXt0HyzEhwWXy8al0g0_RQ-K198z1YhxlBz9noSnoZsPgCuasY6H4gCC25Byp23-qIUCYgz_ndfRmxdPmohi0yxqz4yiIn-ltXxoZioDmQtne3bBAZZgNFZFuTZ5OGMEA3l1NT_8UAt5pQH8TpCYAP8yoTtTCUUswKWLoU8oASfUcF4',
    module: 'MODULE: REAL-TIME WAREHOUSE MULTI-LOCATION DISPATCH LEDGER',
    moduleColor: 'text-primary'
  },
  {
    id: 2,
    tag: 'VIEWPORT_02: CASHIER_TOUCH_POS_TERMINAL.GUI',
    tagColor: 'bg-secondary-fixed',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfuH3tE7z-66Tm83mntpJt3MdyWxYsBxwogzlbiZh6gKsssELwBlSfejruAxG-l4lQUzdzD3WyGLL-GpAC0PHbDP3BNWz0_WdUYBGhV51gVBCoRW1yLnVdHVa7pi7Mw1r1SxRXPMFBd66NFIYkSfeFKTqM_VP9TisUt2M0oLE_oMjX4Qns2aIWfBzfetQhBXySf8-Fpo-opYkVurK9R4I8lMEAcjNVF8gMtshGXXdcabR2lEAcUEVa',
    module: 'MODULE: HIGH-SPEED RETAIL CASHIER & BARCODE CHECKOUT GUI',
    moduleColor: 'text-secondary-fixed'
  },
  {
    id: 3,
    tag: 'VIEWPORT_03: TELEMETRY_SUPPLY_CHAIN_GRAPH.GUI',
    tagColor: 'bg-tertiary-fixed',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChX85zzU4T8Smnsqx5sawH2oe34c5TLei41R61ldFepGIKLR7eB8CnOnVzyLT0i9HzC0AO8I-zHWujj0aBGA4gFJL3KlVtVDcs0DeyZ1PPIHb4IBZTJFQi0nfl_JH9pkKGtCqv2Fmgz6WGEBv1KqpgP1zDtKP1df7wni-j3bIlSjEXqxBCjcMTIBYQ5HSxFPcNNNrxqUFPWuL938ZGC-dIhlxS29ZIpLHam6BUYO2K7dEMzVT-kZvB',
    module: 'MODULE: PREDICTIVE STOCK LEVEL TELEMETRY & TAX ACCOUNTING',
    moduleColor: 'text-tertiary'
  }
];

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  const currentSlide = SLIDES[currentIndex];

  return (
    <section className="w-full bg-surface-container pixel-border-outset p-4 md:p-6 flex flex-col gap-4">
      <FadeIn direction="up">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-pixel text-[10px] text-secondary-fixed uppercase">GRAPHICS ENGINE VIEWPORT</span>
            <h2 className="font-pixel text-lg md:text-xl text-on-surface uppercase mt-1">CHUNKS RENDERED: SCREENS</h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-1 font-pixel text-sm">
            <button onClick={prevSlide} className="px-3 py-1 bg-surface-container-high text-on-surface mc-btn cursor-pointer">
              ◀
            </button>
            <span className="bg-surface-container-lowest px-3 py-1 pixel-border-inset text-xs text-tertiary-fixed">
              [ {currentIndex + 1} / {SLIDES.length} ]
            </span>
            <button onClick={nextSlide} className="px-3 py-1 bg-surface-container-high text-on-surface mc-btn cursor-pointer">
              ▶
            </button>
          </div>
        </div>

        {/* Slides Container */}
        <div className="w-full relative mt-4">
          <div className="w-full bg-surface-container-lowest pixel-border-inset p-2">
            <div className="flex items-center justify-between bg-surface-container-high px-2 py-1 pixel-border-outset mb-2">
              <div className="flex items-center gap-2 font-pixel text-[9px] md:text-[10px] text-on-surface">
                <span className={`w-2 h-2 ${currentSlide.tagColor}`}></span>
                <span>{currentSlide.tag}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-surface-container-highest inline-block pixel-border-outset"></span>
                <span className="w-3 h-3 bg-error inline-block pixel-border-outset"></span>
              </div>
            </div>
            <div className="relative w-full h-80 md:h-[450px] overflow-hidden pixel-border-inset bg-surface-dim">
              {/* Using standard img tag for external CDN to avoid next.config.ts setup */}
              <img 
                src={currentSlide.img} 
                alt={currentSlide.tag}
                className="w-full h-full object-cover"
                style={{ imageRendering: 'auto' }} // Keep images smooth!
              />
              <div className={`absolute bottom-2 left-2 bg-surface-container-lowest/90 px-3 py-1 pixel-border-outset font-pixel text-[8px] md:text-[10px] ${currentSlide.moduleColor}`}>
                {currentSlide.module}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}