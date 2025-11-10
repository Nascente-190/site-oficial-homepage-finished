// src/layouts/LayoutPrincipal.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

export default function LayoutPrincipal() {
  const logomarca = "/logo-site-fundo-transparene.png";

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Fundo de luz dourada suave */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-[#2E4632]/10 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* HEADER */}
      <header
        className="relative z-50 py-6 transition-all duration-700 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm border-b border-[#D4AF37]/20"
        style={{ position: "sticky", top: 0 }}
      >
        {/* LOGOMARCA CENTRAL */}
        <div className="flex flex-col items-center justify-center mb-4 group">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <img
              src={logomarca}
              alt="Logomarca Penso Logo Creio"
              className="h-24 md:h-28 transition-all duration-700 ease-in-out group-hover:scale-110"
              style={{
                filter: "drop-shadow(0 0 12px rgba(212,175,55,0.7))",
              }}
            />
            {/* Halo Dourado Animado */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.25), transparent 70%)",
                animation: "giroLuz 8s linear infinite",
              }}
            ></div>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="flex justify-center">
          <NavBar />
        </nav>
      </header>

      {/* CONTEÚDO */}
      <main className="flex-grow relative z-20">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* ESTILOS */}
      <style>{`
        @keyframes giroLuz {
          0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 0.9; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
        }

        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
