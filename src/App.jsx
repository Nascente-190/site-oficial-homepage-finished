// src/App.jsx

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import ReflexaoDiaria from "./components/ReflexaoDiaria.jsx";
import { ArticleCard } from "./components/ArticleCard.jsx";
// Importa o Manifesto de Conteúdo (que está na pasta content/index.js)
import { mainPost, secondaryPosts } from "./content/index.js";


function App() {
  const logomarca = "/logo-site-fundo-transparene.png";
  const brasao = "/ass-brasao-cpl-nascente.png";
  const fundoHero = "/Mockup da Homepage.png";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-serif flex flex-col bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      
      {/* Elemento decorativo de fundo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#2E4632]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* HEADER - VERSÃO ESTÁVEL */}
      <header
        className={`relative z-40 container mx-auto px-4 py-8 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"}`}
        style={{ animation: "fadeInDown 0.8s ease-out" }}
      >
        <div className="flex justify-center items-center mx-auto mb-8">
          <div className="relative group">
            <img
              src={logomarca}
              alt="Logomarca Penso Logo Creio"
              className={`logo transition-all duration-500 ${isScrolled ? "h-16" : "h-24"}`}
              style={{ filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.6))" }}
            />
            <div
              className="absolute inset-0 border-2 border-[#D4AF37]/20 rounded-full animate-spin-slow"
              style={{ animationDuration: "15s" }}
            ></div>
          </div>
        </div>
        <div style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}>
          <NavBar />
        </div>
      </header>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden"
        style={{ backgroundImage: `url("${fundoHero}")`, backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
        {/* Partículas */}
        <div className="absolute inset-0 z-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37] rounded-full opacity-0 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float 6s ease-in-out ${i * 1.2}s infinite`,
              }}
            />
          ))}
        </div>
        <div
          className="relative z-30 flex flex-col items-center w-full"
          style={{ transform: "translateY(-40px)" }}
        >
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold mb-3 animate-glow"
            style={{
              color: "#fff",
              textShadow: "0 0 25px rgba(212, 175, 55, 0.8), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 4px #D4AF37",
              animation: "fadeGlow 2.5s cubic-bezier(.31,1.42,.74,.89) 0.25s both",
            }}
          >
            Bem-vindo ao Penso Logo Creio
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-['Inter'] mt-2 mb-3 animate-glow"
            style={{
              color: "#E0E0E0",
              textShadow: "0 0 8px rgba(212, 175, 55, 0.4), 0 1px 2px rgba(0,0,0,0.3)",
              animation: "fadeGlow 2.5s cubic-bezier(.31,1.42,.74,.89) 0.45s both",
            }}
          >
            Um espaço para reflexão sobre fé, vida e teologia.
          </p>
        </div>
        <style>{`
          @keyframes fadeGlow {
            0% { filter: blur(8px) brightness(0.6); opacity: 0.2;}
            55% { filter: blur(2px) brightness(1); opacity: 1;}
            100% { filter: blur(0) brightness(1.05);}
          }
          .animate-glow {
            animation: fadeGlow 2.1s ease both;
          }
        `}</style>
      </div>

      {/* SEÇÃO REFLEXÃO DIÁRIA */}
      <div className="my-16">
        <ReflexaoDiaria />
      </div>

      {/* MAIN CONTENT - Aplica a folga aprovada */}
      <main className="relative z-20 container mx-auto px-4 my-24 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-3 space-y-[6rem]"> {/* FOLGA ENTRE POSTS SECUNDÁRIOS */}
            
            <ArticleCard 
              post={mainPost} 
              isMain={true} 
              delay={0.1} 
            />

            {secondaryPosts.map((post, i) => (
              <ArticleCard 
                key={post.id} 
                post={post} 
                isMain={false} 
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>

          {/* Barra Lateral (Sidebar) */}
          <aside
            className="lg:col-span-1 space-y-12"
            style={{ animation: "slideInRight 0.8s ease-out 0.4s both" }}
          >
            {/* Box "Posts Antigos" */}
            <div
              className="backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-transparent transition-all duration-300"
              style={{ background: "transparent" }}
            >
              <h3 className="text-xl font-['Playfair_Display'] mb-6 font-bold text-[#D4AF37]">
                Posts Antigos
              </h3>
              <ul className="space-y-4 font-['Inter']">
                {["Reflexão sobre a Graça", "O Paradoxo da Fé", "História e Teologia", "Meditações Diárias"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="group font-semibold transition-all duration-300 flex items-center gap-2 link-reflexao"
                      style={{
                        color: "#D4AF37",
                        textShadow: "0 0 10px #d4af37, 0 0 2px #fffba3",
                        transition: "color 0.3s, text-shadow 0.3s",
                      }}
                    >
                      <span
                        className="border-b-2 border-transparent group-hover:border-white group-focus:border-white transition-all"
                        style={{ color: "inherit" }}
                      >
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* BOX "CATEGORIAS" */}
            <div className="backdrop-blur-xl bg-black/30 border border-[#D4AF37]/30 rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-['Playfair_Display'] mb-6 font-bold text-[#D4AF37]">
                Categorias
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Teologia", "Espiritualidade", "Reflexão", "Fé"].map(
                  (cat) => (
                    <span
                      key={cat}
                      className="px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 
                                 text-[#E0E0E0] 
                                 text-xs font-semibold rounded-full 
                                 hover:bg-[#D4AF37]/40 hover:text-white transition-colors cursor-pointer"
                    >
                      {cat}
                    </span>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FOOTER - Redução do Golias */}
      <footer className="relative z-20 py-6 md:py-8 border-t border-white/10 backdrop-blur-sm">
        <div
          className="container mx-auto px-4 flex flex-col items-center text-center space-y-4 md:flex-row md:justify-between md:items-end md:space-y-0"
          style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
        >
          {/* Copyright/Título (Foco no seu nome) */}
          <div className="md:text-left">
            <p
              className="font-normal text-base" 
              style={{
                color: "#fff",
                textShadow: "0 0 8px #fff, 0 0 4px #d4af37",
                fontWeight: "normal",
              }}
            >
              © 2025 Penso Logo Creio | Por Cpl. Nascente
            </p>
          </div>
          
          {/* Brasão - Reduzido o tamanho da imagem */}
          <div>
            <img
              src={brasao}
              alt="Brasão Capelania Nascente"
              className="h-12 md:h-16 filter drop-shadow-lg" 
              style={{
                filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))",
              }}
            />
          </div>
        </div>
      </footer>

      {/* ANIMAÇÕES GLOBAIS + CSS extra para links do aside */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px);}
          to { transform: translateY(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px);}
          to { transform: translateY(0);}
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes float {
          0%, 100% { opacity: 0; transform: translateY(0) translateX(0);}
          50% { opacity: 0.8; transform: translateY(-20px) translateX(10px);}
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg);}
          to { transform: rotate(360deg);}
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite;}
        .delay-1000 { animation-delay: 1000ms;}
        html { scroll-behavior: smooth;}
        @supports (backdrop-filter: blur(1px)) {
          .backdrop-blur-xl { backdrop-filter: blur(20px);}
        }
        .link-reflexao:hover, .link-reflexao:focus {
          color: #fff !important;
          text-shadow: 0 0 18px #fff, 0 0 8px #D4AF37;
        }
      `}</style>
    </div>
  );
}

export default App;