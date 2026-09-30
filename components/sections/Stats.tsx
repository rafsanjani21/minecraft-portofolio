import Image from "next/image";
import FadeIn from "../FadeIn";

export default function Stats() {
  return (
    <section id="stats" className="w-full mb-20 scroll-mt-28">
      <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-[#ffbb1e] border-2 border-black flex items-center justify-center font-pixel text-[10px] text-black">
            !
          </div>
          <h2 className="font-pixel text-lg md:text-xl text-[#e3e2e2] uppercase drop-shadow-[2px_2px_0_#000]">
            PLAYER STATS & INVENTORY
          </h2>
        </div>

        <div className="mc-panel p-6 md:p-8 text-[#222222] pixel-shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* =========================================
              KOLOM KIRI: EQUIPMENT & FOTO KARAKTER
          ========================================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b-2 border-[#555555] pb-2 font-pixel text-xs font-bold text-[#333333]">
              <span>EQUIPMENT HUD</span>
              <span className="text-[10px] text-[#555555]">ID: RAFS-001</span>
            </div>

            {/* PERUBAHAN DISINI: flex-col untuk HP, flex-row untuk SM ke atas */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center">
              
              {/* 4 Armor Slots */}
              {/* PERUBAHAN DISINI: flex-row untuk HP (menyamping di atas foto), flex-col untuk SM ke atas (berderet ke bawah) */}
              <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                {["hardware", "shield", "styler", "roller_skating"].map(
                  (icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 sm:w-14 sm:h-14 mc-slot flex items-center justify-center relative"
                    >
                      <span className="material-symbols-outlined text-[#45eae6] text-[24px] sm:text-[28px] drop-shadow-[1px_1px_0_#000]">
                        {icon}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* Bingkai Foto Karakter */}
              {/* PERUBAHAN DISINI: max-w-full agar tidak meluber di layar HP yang sangat kecil */}
              <div className="w-full max-w-[16rem] sm:w-64 h-auto sm:h-80 mc-slot-dark flex flex-col items-center justify-center p-4 sm:p-2 relative bg-[#171717] shrink-0">
                <div className="absolute top-2 left-2 z-10 font-pixel text-[8px] text-[#80ff20] drop-shadow-[1px_1px_0_#000]">
                  RAFSAN
                </div>

                {/* Kontainer Foto Next.js */}
                <div className="relative w-40 h-48 sm:w-48 sm:h-56 mt-2 border-2 border-[#333333] shadow-[4px_4px_0_0_#000] overflow-hidden bg-[#242424]">
                  <Image
                    src="/foto.webp"
                    alt="Muhammad Rafsanjani Stats"
                    fill
                    className="object-cover"
                    style={{ imageRendering: "auto" }}
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>

                <div className="font-terminal text-[13px] sm:text-[15px] text-[#c3c9b6] mt-4 sm:mt-3">
                  LVL: 2 DEVELOPER
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              KOLOM KANAN: BIO & EXPERIENCE METER
          ========================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-baseline justify-between border-b-2 border-[#555555] pb-2">
                <h3 className="font-pixel text-sm md:text-base font-bold text-[#111111] uppercase tracking-wide">
                  PLAYER: MUHAMMAD RAFSANJANI
                </h3>
                <span className="bg-[#1f2020] text-[#80ff20] font-pixel text-[10px] px-2 py-0.5 border border-black hidden sm:inline-block">
                  ONLINE
                </span>
              </div>

              {/* Gelar & Pendidikan */}
              <div className="mt-4 flex items-center gap-3">
                <span className="w-8 h-8 mc-slot flex items-center justify-center text-[#ffbb1e] font-bold">
                  <span className="material-symbols-outlined text-[20px]">
                    school
                  </span>
                </span>
                <div>
                  <div className="font-pixel text-[10px] md:text-[11px] text-[#222222] uppercase font-bold">
                    B.Eng in Electrical Engineering
                  </div>
                  <div className="font-terminal text-lg md:text-xl text-[#1f2020]">
                    Universitas Lampung • GPA:{" "}
                    <strong className="text-black font-bold">
                      3.78 / 4.00
                    </strong>
                  </div>
                </div>
              </div>

              {/* Bio Deskripsi */}
              <p className="font-terminal text-xl md:text-2xl text-[#1f2020] mt-4 leading-relaxed bg-[#dddddd] p-3 border-2 border-[#aaaaaa] shadow-[inset_0_0_8px_rgba(0,0,0,0.1)]">
                “Fullstack & DevOps Engineer with proven experience in web
                development, mobile applications, and IoT integration. Actively
                building robust systems using React.js, Next.js, Golang, and
                Node.js.”
              </p>
            </div>

            {/* Experience Meter HUD (1-3 Tahun) */}
            <div className="bg-[#242424] p-4 border-2 border-black pixel-shadow">
              <div className="flex justify-between items-center font-pixel text-[10px] md:text-xs text-white mb-2">
                <span className="text-[#80ff20] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    bolt
                  </span>
                  EXPERIENCE LEVEL
                </span>
                <span className="text-[#c3c9b6]">1 - 3 YEARS EXP</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-5 mc-slot-dark p-0.5 relative flex items-center">
                {/* Lebar progress (w-[65%]) mewakili level EXP di kisaran 1-3 tahun */}
                <div className="h-full bg-gradient-to-r from-[#5e8c31] via-[#80ff20] to-[#b6ff69] w-[65%] relative">
                  {/* Highlight putih di atas bar ala Minecraft */}
                  <div className="w-full h-1 bg-white/40 absolute top-0 left-0"></div>
                </div>
              </div>

              {/* Level Indicator Tengah Bar */}
              <div className="text-center -mt-3 relative z-10">
                <span className="inline-block font-pixel text-sm text-[#80ff20] bg-black px-2 py-0.5 border border-[#80ff20] drop-shadow-[2px_2px_0_#000]">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
