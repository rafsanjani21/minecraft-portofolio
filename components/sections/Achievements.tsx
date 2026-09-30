'use client';
import { useState } from 'react';
import FadeIn from '../FadeIn';

// ==========================================
// 1. DATA PENDIDIKAN & ORGANISASI
// ==========================================
const EDUCATION_DATA = [
  {
    title: 'B.Eng. Electrical Engineering',
    issuer: 'Universitas Lampung • 2021 - 2025',
    icon: 'school',
    iconColor: '#ffbb1e', 
    tierText: 'GPA',
    badgeText: '[DIAMOND SCHOLAR]',
    badgeBg: '#141414',
    badgeTextCol: '#45eae6',
    badgeBorder: '#45eae6',
    verifyId: 'GPA: 3.78/4.00',
    desc: 'Developed a final engineering drawing of Tarahan Main Substation using AutoCAD. Contributed to real-time Tsunami Buoy monitoring system using PostgreSQL, Express.js, React.js, Node.js, and MQTT.',
    tags: ['AutoCAD', 'IoT / MQTT', 'PERN Stack', 'Research'],
    validity: 'Graduated Jul 2025',
    link: '' 
  },
  {
    title: 'Department of Engineering',
    issuer: 'Himpunan Mahasiswa Elektro • 2022 - 2023',
    icon: 'group',
    iconColor: '#80ff20', 
    tierText: 'ORG',
    badgeText: '[EMERALD LEADER]',
    badgeBg: '#141414',
    badgeTextCol: '#80ff20',
    badgeBorder: '#80ff20',
    verifyId: 'HIMATRO-UNILA',
    desc: 'Secretary for Electrical Goes to School & Village community programs. Coordinator for the National Water Rocket Competition (Electrical Engineering in Action).',
    tags: ['Leadership', 'Event Coordinator', 'Community Tech'],
    validity: 'Completed Tenure',
    link: ''
  },
  {
    title: 'Study Independent Al 4 Jobs',
    issuer: 'PT. Orbit Ventura Indonesia • 2024',
    icon: 'memory',
    iconColor: '#ffb4ab', 
    tierText: 'AI',
    badgeText: '[REDSTONE CIRCUIT]',
    badgeBg: '#141414',
    badgeTextCol: '#ffb4ab',
    badgeBorder: '#ffb4ab',
    verifyId: 'AI-4-JOBS',
    desc: 'Focused on Artificial Intelligence, NLP, and Data Science. Built a chatbot prototype using NLP and designed a responsive frontend interface for an AI project.',
    tags: ['AI / NLP', 'Data Science', 'Chatbot'],
    validity: 'Completed Jun 2024',
    link: ''
  }
];

// ==========================================
// 2. DATA SERTIFIKASI & PENGHARGAAN (LENGKAP)
// ==========================================
const CERTIFICATIONS = [
  {
    title: 'Assistant Web Developer',
    issuer: 'BNSP • Issued 2026',
    icon: 'code',
    iconColor: '#ffdea7', 
    tierText: 'BNSP',
    badgeText: '[IRON BADGE]',
    badgeBg: '#141414',
    badgeTextCol: '#ffdea7',
    badgeBorder: '#ffdea7',
    verifyId: 'BNSP-2026',
    desc: 'National competency certification covering standard practices in web architecture, interface design, and secure deployment pipelines.',
    tags: ['Web Arch', 'UI Slicing', 'Deployment'],
    validity: 'Active Credential',
    link: 'https://drive.google.com/file/d/1c9ULWnZRL53T65d_KYlfj69f6b8dF40u/view?usp=drive_link' 
  },
  {
    title: 'DevOps Engineering',
    issuer: 'Digital Skola • Issued 2026',
    icon: 'dns',
    iconColor: '#45eae6', 
    tierText: 'OPS',
    badgeText: '[DIAMOND CREST]',
    badgeBg: '#141414',
    badgeTextCol: '#45eae6',
    badgeBorder: '#45eae6',
    verifyId: 'DS-DEVOPS-26',
    desc: 'Comprehensive training in CI/CD automation, containerization strategies (Docker), and cloud infrastructure provisioning.',
    tags: ['CI/CD Pipelines', 'Docker', 'Cloud Hosting'],
    validity: 'Active Credential',
    link: 'https://drive.google.com/file/d/1W2RmdMi9jJU3vap1zL7zyiT7mhynW4P1/view?usp=drive_link' 
  },
  {
    title: 'Front-End Developer',
    issuer: 'dibimbing.id • Issued 2025',
    icon: 'web',
    iconColor: '#61DAFB', 
    tierText: 'FE',
    badgeText: '[LAPIS LAZULI]',
    badgeBg: '#141414',
    badgeTextCol: '#61DAFB',
    badgeBorder: '#61DAFB',
    verifyId: 'DIBIMBING-FE-25',
    desc: 'Intensive training in modern frontend development focusing on HTML, CSS, JavaScript, and React.js frameworks with responsive design principles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    validity: 'Lifetime Access',
    link: 'https://drive.google.com/file/d/12D4pgRT6jQuGGkGoXBJIFDGHnZTDO92N/view?usp=drive_link' 
  },
  {
    title: 'Fullstack Dev Journey',
    issuer: 'Rakamin Academy • Issued 2025',
    icon: 'layers',
    iconColor: '#ffbb1e', 
    tierText: 'FS',
    badgeText: '[GOLD TIER]',
    badgeBg: '#141414',
    badgeTextCol: '#ffbb1e',
    badgeBorder: '#ffbb1e',
    verifyId: 'RAKAMIN-FS-25',
    desc: 'Comprehensive fullstack development program covering end-to-end web application architecture from database to client-side routing.',
    tags: ['Fullstack', 'Web Apps', 'API Design'],
    validity: 'Lifetime Access',
    link: 'https://drive.google.com/file/d/1pbeHpBjek95IuroEbXI8hiV6cqblt3Us/view?usp=drive_link' 
  },
  {
    title: 'Fullstack Web Dev Bootcamp',
    issuer: 'Udemy • Issued 2025',
    icon: 'terminal',
    iconColor: '#ffbb1e', 
    tierText: 'FS',
    badgeText: '[GOLD TIER]',
    badgeBg: '#141414',
    badgeTextCol: '#ffbb1e',
    badgeBorder: '#ffbb1e',
    verifyId: 'UDEMY-FS-25',
    desc: 'Intensive frontend and backend journey covering React.js, PHP, JQuery, Node.js, and complex relational database architectures.',
    tags: ['React.js', 'PHP', 'Node.js', 'Databases'],
    validity: 'Lifetime Access',
    link: 'https://drive.google.com/file/d/1HSpPKgVrDSgtgLf4pryh_mh9PQRCafFk/view?usp=drive_link' 
  },
  {
    title: 'Intro to Cybersecurity',
    issuer: 'Cisco Networking Academy • Issued 2024',
    icon: 'security',
    iconColor: '#ffb4ab', 
    tierText: 'SEC',
    badgeText: '[REDSTONE SHIELD]',
    badgeBg: '#141414',
    badgeTextCol: '#ffb4ab',
    badgeBorder: '#ffb4ab',
    verifyId: 'CISCO-SEC-24',
    desc: 'Foundational knowledge in network defense, threat mitigation, and data privacy principles in enterprise environments.',
    tags: ['Cybersecurity', 'Network Defense', 'Privacy'],
    validity: 'Lifetime Credential',
    link: 'https://drive.google.com/file/d/1UcxS4inL2NGBQn_kfJGBHxZj9fKmz8y2/view?usp=drive_link' 
  },
  {
    title: 'SCOMOA (Modern Optics)',
    issuer: 'InOS/HOI • Issued 2023',
    icon: 'lens',
    iconColor: '#bef28a', 
    tierText: 'SCI',
    badgeText: '[SLIME ORB]',
    badgeBg: '#141414',
    badgeTextCol: '#bef28a',
    badgeBorder: '#bef28a',
    verifyId: 'SCOMOA-23',
    desc: 'International Summer Course on Modern Optics. Covered advanced topics in applied physics and modern optical engineering.',
    tags: ['Modern Optics', 'Physics', 'Research'],
    validity: 'Lifetime Credential',
    link: 'https://drive.google.com/file/d/1DWI0ohtP6dXWZg6D3CuiiATlyfJj3vZ1/view?usp=drive_link' 
  },
  {
    title: 'Finalist - Digital Innovation',
    issuer: 'Digital Education Technology • 2023',
    icon: 'emoji_events',
    iconColor: '#80ff20', 
    tierText: 'WIN',
    badgeText: '[EMERALD AWARD]',
    badgeBg: '#141414',
    badgeTextCol: '#80ff20',
    badgeBorder: '#80ff20',
    verifyId: 'INNOVATION-23',
    desc: 'National Finalist. Developed learning applications based on Progressive Web Apps (PWA) with expert system integration and blockchain tech.',
    tags: ['PWA', 'Blockchain', 'Expert System'],
    validity: 'National Finalist',
    link: 'https://drive.google.com/file/d/1W2DcsnU1Syag_uryfTyqbhutWFMXkCxN/view?usp=drive_link' 
  }
];

export default function Achievements() {
  // State untuk mengontrol jumlah sertifikat yang ditampilkan
  const [showAllCerts, setShowAllCerts] = useState(false);

  // Menentukan data yang dirender (4 pertama, atau semuanya)
  const displayedCerts = showAllCerts ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 4);

  return (
    <section className="w-full mb-20 scroll-mt-28" id="advancements">
      
      {/* Header Section */}
      <FadeIn direction="up">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#ffbb1e] border-2 border-black flex items-center justify-center font-pixel text-[10px] text-black">
              ★
            </div>
            <h2 className="font-pixel text-lg md:text-xl text-[#e3e2e2] uppercase tracking-wider drop-shadow-[2px_2px_0_#000]">
              ADVANCEMENTS & LORE (ACHIEVEMENTS)
            </h2>
          </div>
          <span className="font-terminal text-xl text-[#8d9382] hidden md:inline-block">[VERIFIED ACADEMIC & CLOUD CREDENTIALS]</span>
        </div>
      </FadeIn>

      {/* Main Grid: Dua Kolom */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* KOLOM KIRI: EDUKASI & ORGANISASI */}
        <div className="mc-panel-dark p-5 md:p-6 pixel-shadow-lg flex flex-col gap-4 h-fit">
          <span className="font-pixel text-[10px] text-[#ffbb1e] border-b-2 border-[#343535] pb-2 uppercase">
            ACADEMIC BACKGROUND & ORGANIZATIONS
          </span>
          <div className="flex flex-col gap-5">
            {EDUCATION_DATA.map((ach, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className="bg-[#1f2020] border-2 border-black p-4 pixel-shadow flex flex-col justify-between relative group hover:-translate-y-1 transition-transform cursor-pointer h-full">
                  
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-3 border-b-2 border-[#373737] pb-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 shrink-0 mc-slot flex items-center justify-center relative bg-[#242424]">
                        <span className="material-symbols-outlined text-[26px] drop-shadow-[1px_1px_0_#000]" style={{ color: ach.iconColor }}>{ach.icon}</span>
                        <span className="absolute bottom-0.5 right-1 font-pixel text-[7px] font-bold" style={{ color: ach.iconColor }}>{ach.tierText}</span>
                      </div>
                      <div>
                        <span className="font-pixel text-[8px] px-2 py-0.5 border inline-block uppercase mb-1" style={{ backgroundColor: ach.badgeBg, color: ach.badgeTextCol, borderColor: ach.badgeBorder }}>
                          {ach.badgeText}
                        </span>
                        <h3 className="font-pixel text-xs md:text-sm text-white uppercase font-bold leading-snug">{ach.title}</h3>
                        <div className="font-terminal text-base text-[#bef28a]">{ach.issuer}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Middle */}
                  <div>
                    <p className="font-terminal text-lg text-[#c3c9b6] mb-3 leading-snug">{ach.desc}</p>
                    <div className="bg-[#141414] p-2 border border-[#373737] mb-3 flex flex-wrap gap-1.5 font-pixel text-[8px]">
                      {ach.tags.map((tag, i) => (
                        <span key={i} className="bg-[#26170d] px-1.5 py-0.5 border border-[#7a5330]" style={{ color: ach.iconColor }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Card Bottom */}
                  <div className="flex items-end justify-between pt-3 border-t border-[#373737] mt-auto">
                    <div className="flex flex-col gap-1">
                      <span className="font-terminal text-base text-[#80ff20] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span> {ach.validity}
                      </span>
                      <span className="font-terminal text-sm text-[#8d9382]">ID: {ach.verifyId}</span>
                    </div>
                    {ach.link && (
                      <a href={ach.link} target="_blank" rel="noopener noreferrer" className="mc-btn px-3 py-1.5 font-pixel text-[8px] text-white uppercase flex items-center gap-1 shrink-0">
                        <span className="material-symbols-outlined text-[12px]">open_in_new</span> VERIFY
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: SERTIFIKASI & PENGHARGAAN */}
        <div className="mc-panel-dark p-5 md:p-6 pixel-shadow-lg flex flex-col gap-4">
          <span className="font-pixel text-[10px] text-[#45eae6] border-b-2 border-[#343535] pb-2 uppercase flex items-center justify-between">
            <span>CERTIFICATIONS & AWARDS</span>
            <span className="text-[#8d9382]">[{CERTIFICATIONS.length} TOTAL]</span>
          </span>
          
          <div className="flex flex-col gap-5">
            {displayedCerts.map((ach, index) => (
              <FadeIn key={ach.verifyId} delay={index * 0.05} direction="up">
                <div className="bg-[#1f2020] border-2 border-black p-4 pixel-shadow flex flex-col justify-between relative group hover:-translate-y-1 transition-transform cursor-pointer h-full">
                  
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-3 border-b-2 border-[#373737] pb-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 shrink-0 mc-slot flex items-center justify-center relative bg-[#242424]">
                        <span className="material-symbols-outlined text-[26px] drop-shadow-[1px_1px_0_#000]" style={{ color: ach.iconColor }}>{ach.icon}</span>
                        <span className="absolute bottom-0.5 right-1 font-pixel text-[7px] font-bold" style={{ color: ach.iconColor }}>{ach.tierText}</span>
                      </div>
                      <div>
                        <span className="font-pixel text-[8px] px-2 py-0.5 border inline-block uppercase mb-1" style={{ backgroundColor: ach.badgeBg, color: ach.badgeTextCol, borderColor: ach.badgeBorder }}>
                          {ach.badgeText}
                        </span>
                        <h3 className="font-pixel text-xs md:text-sm text-white uppercase font-bold leading-snug">{ach.title}</h3>
                        <div className="font-terminal text-base text-[#bef28a]">{ach.issuer}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Middle */}
                  <div>
                    <p className="font-terminal text-lg text-[#c3c9b6] mb-3 leading-snug">{ach.desc}</p>
                    <div className="bg-[#141414] p-2 border border-[#373737] mb-3 flex flex-wrap gap-1.5 font-pixel text-[8px]">
                      {ach.tags.map((tag, i) => (
                        <span key={i} className="bg-[#26170d] px-1.5 py-0.5 border border-[#7a5330]" style={{ color: ach.iconColor }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Card Bottom */}
                  <div className="flex items-end justify-between pt-3 border-t border-[#373737] mt-auto">
  <div className="flex flex-col gap-1">
    <span className="font-terminal text-base text-[#80ff20] flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">verified</span> {ach.validity}
    </span>
    <span className="font-terminal text-sm text-[#8d9382]">ID: {ach.verifyId}</span>
  </div>
  {ach.link && (
    <a 
      href={ach.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mc-btn px-2 sm:px-3 py-1.5 font-pixel text-[8px] text-white uppercase flex items-center gap-1 shrink-0"
    >
      <span className="material-symbols-outlined text-[12px]">open_in_new</span> 
      <span className="hidden sm:inline">VERIFY</span>
    </a>
  )}
</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Tombol Show All / Show Less */}
          {CERTIFICATIONS.length > 4 && (
            <button 
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="mt-4 mc-btn-primary w-full py-3 font-pixel text-[10px] text-white uppercase flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#000] transition-transform active:translate-y-1"
            >
              <span className="material-symbols-outlined text-[18px]">
                {showAllCerts ? 'expand_less' : 'expand_more'}
              </span>
              {showAllCerts ? 'SHOW LESS ACHIEVEMENTS' : `SHOW ALL (${CERTIFICATIONS.length}) ACHIEVEMENTS`}
            </button>
          )}

        </div>

      </div>
    </section>
  );
}