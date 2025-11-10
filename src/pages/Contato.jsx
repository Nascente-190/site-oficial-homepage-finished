import React from "react";

export default function Contato() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl font-['Playfair_Display'] text-[#D4AF37] mb-4 animate-fade-in-down">
        Contato
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl animate-fade-in-up">
        Entre em contato conosco para compartilhar ideias, reflexões ou
        colaborações.
      </p>
      <div className="mt-6">
        <a
          href="mailto:contato@pensologocreio.com.br"
          className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/20 transition-all"
        >
          contato@pensologocreio.com.br
        </a>
      </div>
    </section>
  );
}
