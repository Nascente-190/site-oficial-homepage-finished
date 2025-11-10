import React from "react";

export default function Footer() {
  const brasao = "/ass-brasao-cpl-nascente.png";

  return (
    <footer
      className="relative z-20 py-10 border-t border-[#D4AF37]/20 bg-black/30 backdrop-blur-sm group overflow-hidden"
      style={{
        position: "relative",
      }}
    >
      {/* --- LUZ DOURADA ANIMADA (hover) --- */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.25), transparent 70%)",
          animation: "moverLuz 6s ease-in-out infinite",
        }}
      ></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 relative z-10">
        {/* Bloco esquerdo */}
        <div>
          <p
            className="text-sm md:text-base font-medium"
            style={{
              color: "#E8E8E8",
              textShadow: "0 0 6px #D4AF37",
            }}
          >
            © 2025 Capelania Nascente. Todos os direitos reservados.
          </p>
          <p
            className="text-xs italic mt-1"
            style={{
              color: "#9f9f9f",
            }}
          >
            Desenvolvido com fé e razão — Penso Logo Creio
          </p>
        </div>

        {/* Bloco direito: brasão */}
        <div className="flex justify-center md:justify-end">
          <img
            src={brasao}
            alt="Brasão Capelania Nascente"
            className="h-14 md:h-16 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0 0 12px rgba(212,175,55,0.6))",
            }}
          />
        </div>
      </div>

      {/* --- ESTILO DA ANIMAÇÃO --- */}
      <style>{`
        @keyframes moverLuz {
          0% {
            transform: translate(-20%, -20%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(20%, 20%) scale(1.4);
            opacity: 0.7;
          }
          100% {
            transform: translate(-20%, -20%) scale(1);
            opacity: 0.4;
          }
        }

        footer:hover img {
          filter: drop-shadow(0 0 18px rgba(212,175,55,0.8));
        }
      `}</style>
    </footer>
  );
}
