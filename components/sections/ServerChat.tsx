'use client';
import { useState } from 'react';
import FadeIn from '../FadeIn';

export default function ServerChat() {
  const [messages, setMessages] = useState([
    { sender: 'Server', text: "World loaded in HARDCORE mode.", color: '#888' },
    { sender: 'Rafsanjani', text: "Welcome to my portfolio! Whisper me below.", color: '#ffbb1e' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'Visitor', text: input, color: '#bef28a' }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'System', text: "Transmission pinged to Rafsanjani's beacon!", color: '#45eae6' }]);
    }, 800);
  };

  return (
    <section id="server-chat" className="w-full mb-20 scroll-mt-28">
      <FadeIn>
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#555] border-2 border-black flex items-center justify-center font-pixel text-[10px] text-white shadow-[2px_2px_0_0_#000]">
            <span className="material-symbols-outlined text-[16px]">chat</span>
          </div>
          <h2 className="font-pixel text-lg md:text-xl text-[#e3e2e2] uppercase drop-shadow-[2px_2px_0_#000]">
            MULTIPLAYER SERVER CHAT
          </h2>
        </div>

        {/* Container Flex (Kiri: Chat, Kanan: Social) */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* =========================================
              KOLOM KIRI: SERVER CHAT (ASLI MILIK ANDA)
             ========================================= */}
          <div className="flex-1 w-full bg-black/85 border-4 border-[#373737] p-5 pixel-shadow-lg flex flex-col justify-between min-h-[380px]">
            <div className="flex flex-col gap-2 font-terminal text-xl overflow-y-auto h-64">
              {messages.map((msg, i) => (
                <div key={i} style={{ color: msg.color }}>
                  &lt;{msg.sender}&gt; {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="mt-4 pt-3 border-t-2 border-[#333] flex items-center gap-2">
              <span className="font-terminal text-2xl text-[#80ff20]">&gt;</span>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 bg-[#141414] border-2 border-[#373737] px-3 py-2 text-white font-terminal text-xl focus:outline-none focus:border-[#80ff20]" 
                placeholder="/msg Rafsanjani [your message...]" 
              />
              <button type="submit" className="mc-btn-primary px-4 py-2 font-pixel text-[10px] text-white">SEND</button>
            </form>
          </div>

          {/* =========================================
              KOLOM KANAN: SOCIAL LINKS & DOWNLOAD CV
             ========================================= */}
          <div className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
            
            <div className="bg-[#1f2020] border-2 border-black p-2 pixel-shadow flex items-center gap-2">
              <span className="w-2 h-2 bg-[#80ff20] animate-pulse"></span>
              <span className="font-pixel text-[10px] text-white uppercase">Direct Connections</span>
            </div>

            <div className="flex flex-col gap-2">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/muhammadrafsanjani17" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mc-btn bg-[#242424] border-2 border-[#555] p-3 flex items-center gap-3 hover:bg-[#333] transition-none cursor-pointer"
              >
                <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#0A66C2] border-2 border-black shadow-[2px_2px_0_0_#000]">
                  <span className="font-pixel text-white text-xs font-bold">in</span>
                </span>
                <span className="font-pixel text-[9px] text-[#e3e2e2] uppercase">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/rafsanjani21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mc-btn bg-[#242424] border-2 border-[#555] p-3 flex items-center gap-3 hover:bg-[#333] transition-none cursor-pointer"
              >
                <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-black border-2 border-[#555] shadow-[2px_2px_0_0_#000]">
                  <span className="material-symbols-outlined text-white text-[18px]">code</span>
                </span>
                <span className="font-pixel text-[9px] text-[#e3e2e2] uppercase">GitHub</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:rafsanjani1719@gmail.com" 
                className="mc-btn bg-[#242424] border-2 border-[#555] p-3 flex items-center gap-3 hover:bg-[#333] transition-none cursor-pointer"
              >
                <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#ea4335] border-2 border-black shadow-[2px_2px_0_0_#000]">
                  <span className="material-symbols-outlined text-white text-[16px]">mail</span>
                </span>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-pixel text-[9px] text-[#e3e2e2] uppercase">Email</span>
                  <span className="font-terminal text-[10px] text-[#8d9382] truncate">rafsanjani1719@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Download CV */}
            <div className="mt-2 border-t-2 border-[#343535] pt-4">
              <a 
                href="/MUHAMMAD_RAFSANJANI_CV.pdf" 
                download 
                className="mc-btn-primary w-full py-4 px-2 flex items-center justify-center gap-2 font-pixel text-[10px] text-white uppercase cursor-pointer shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-[2px_2px_0_0_#000]"
              >
                <span className="material-symbols-outlined text-[18px] animate-bounce">download</span>
                DOWNLOAD CV (PDF)
              </a>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}