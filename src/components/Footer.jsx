export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-[#D4AF37]/20 mt-24">

      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid 3 colunas: Brasão | Info | Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Coluna 1: Brasão */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <img
                src="/ass-brasao-cpl-nascente.png"
                alt="Brasão Capelania Nascente"
                className="h-24 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
              />
              {/* Glow ao hover */}
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Coluna 2: Informações Centrais */}
          <div className="text-center space-y-4">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#D4AF37]">
              Penso Logo Creio
            </h3>
            <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
              Um espaço para reflexão sobre fé, vida e teologia.
              Conduzindo vidas à luz de Cristo, o Farol da Razão Pura.
            </p>
            <div className="pt-4">
              <p className="text-xs text-gray-500 font-['Inter']">
                © {new Date().getFullYear()} Capelania Nascente. Todos os direitos reservados.
              </p>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <p className="text-xs tracking-widest text-[#D4AF37] uppercase font-semibold mb-2">
              Navegação
            </p>
            {['Início', 'Devocional', 'Estação Teológica', 'Sobre', 'Contato'].map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-['Inter']"
              >
                {link}
              </a>
            ))}
          </div>

        </div>

        {/* Linha Decorativa Final */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-xs text-gray-600 font-['Inter']">
            Desenvolvido com fé e razão · {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}
