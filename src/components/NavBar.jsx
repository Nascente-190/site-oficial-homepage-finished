// src/components/NavBar.jsx

import './NavBar.css'; // Crie o arquivo para testes

import React, { useState } from "react";

const navLinks = [
  { title: "INÍCIO", href: "#" },
  { title: "DEVOCIONAL", href: "#devocional" },
  { title: "ESTAÇÃO TEOLÓGICA", href: "#estacao" },
  { title: "SOBRE", href: "#sobre" },
  { title: "CONTATO", href: "#contato" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full z-50">
      <div className="w-full backdrop-blur-lg bg-white/70 rounded-2xl border border-yellow-200/40 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.title}
                href={link.href}
                className="group relative px-6 py-3 transition-all duration-300 ease-out font-semibold uppercase tracking-widest overflow-visible"
                style={{ animation: `slideInDown 0.7s cubic-bezier(.4,1.6,.64,1) ${idx * 0.07}s both` }}
              >
                {/* Efeito dourado irradiando ao hover */}
                <span
                  className="pointer-events-none absolute left-0 top-0 w-full h-full transition-all duration-700 scale-95 opacity-0 group-hover:scale-105 group-hover:opacity-100 rounded-lg"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 80%)",
                    boxShadow: "0 0 48px 0 rgba(212,175,55,0.25)",
                  }}
                />
                {/* Texto branco + dourado com elevação e animação */}
                <span 
                  className="relative z-10 text-lg transition-all duration-500 group-hover:-translate-y-1"
                  style={{
                    color: "#fff",
                    textShadow: idx === 0
                      ? "0 2px 7px rgba(212,175,55,0.85), 0 0 15px rgba(212,175,55,0.62)"
                      : "0 1px 7px rgba(212,175,55,0.15)",
                    letterSpacing: idx === 0 ? "0.17em" : "0.12em",
                  }}
                >
                  {link.title}
                </span>
                {/* Sublinhado dourado animado */}
                <span
                  className="absolute left-1/2 bottom-0 h-0.5 w-0 group-hover:w-3/5 bg-gradient-to-r from-[#FFC700] via-[#D4AF37] to-[#FFFDEE] rounded-full transition-all duration-500 -translate-x-1/2 group-hover:opacity-100 opacity-60 drop-shadow-glow"
                  style={{
                    boxShadow: "0 0 20px 2px rgba(212,175,55,0.7)",
                  }}
                />
                {/* Partículas douradas ao hover */}
                <span className="pointer-events-none absolute inset-0 flex justify-end items-start z-0">
                  <span className={`
                    inline-block w-2 h-2 rounded-full bg-yellow-300/80 
                    opacity-0 group-hover:opacity-100 
                    group-hover:animate-goldshine
                  `}
                  />
                </span>
              </a>
            ))}
          </div>

          {/* Hamburger mobile branco/dourado */}
          <button
            className="lg:hidden p-3 rounded-xl bg-white/80 hover:bg-[#fffbe8] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Menu de navegação"
          >
            <svg
              className={`w-6 h-6 transition-all duration-500 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
              fill="none"
              stroke="#D4AF37"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${isOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile com branco/dourado */}
      {isOpen && (
        <div className="lg:hidden mt-4 backdrop-blur-2xl bg-white/85 rounded-xl border border-yellow-200/40 shadow-2xl animate-fade-in">
          <div className="flex flex-col divide-y divide-yellow-100">
            {navLinks.map((link, idx) => (
              <a
                key={link.title}
                href={link.href}
                className="relative px-6 py-4 transition-all duration-300 group overflow-visible font-semibold uppercase tracking-widest text-[#D4AF37]"
                onClick={() => setIsOpen(false)}
                style={{ animation: `slideInLeft 0.3s cubic-bezier(.4,1.6,.64,1) ${idx * 0.06}s both` }}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg scale-95 group-hover:scale-105 transition-all duration-700"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 100%)",
                    boxShadow: "0 0 32px 0 rgba(212,175,55,0.08)",
                  }}
                />
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Estilos extras para efeito de movimento/partícula */}
      <style>{`
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-14px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-16px);}
          to { opacity: 1; transform: translateX(0);}
        }
        .animate-fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        @keyframes goldshine {
          0%,100%   { opacity: 0; transform: scale(0.6);}
          40%  { opacity: 1; transform: scale(1.2);}
          60%  { opacity: 1; box-shadow: 0 0 18px 10px #FFD70066;}
        }
        .animate-goldshine {
          animation: goldshine 1.1s ease-in-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
