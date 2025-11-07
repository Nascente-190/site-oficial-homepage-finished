import React from 'react'; // Import React para usar o Fragmento <>

export default function NavBar() {
  const navLinks = [
    { title: "INÍCIO", href: "#" },
    { title: "DEVOCIONAL", href: "#devocional" },
    { title: "ESTAÇÃO TEOLÓGICA", href: "#estacao" },
    { title: "CONTATO", href: "#contato" }
  ];

  return (
    <>
      <style>
        {`
          /* 1. Estilos de cor e sombra (CORRIGIDO) */
          nav a, 
          nav a:visited, 
          nav a:active {
            color: white !important;
            text-shadow: 0 0 10px #D4AF37, 0 0 2px #fffba3 !important;
            transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
          }

          nav a:hover, 
          nav a:focus {
            color: #D4AF37 !important;
            text-shadow: 0 0 18px white, 0 0 8px #D4AF37 !important;
            transform: translateY(-3px);
          }

          /* 2. NOVO: Força o espaçamento entre os itens do menu */
          nav ul li {
            /* Adiciona margens horizontais (lados) e verticais (cima/baixo) */
            /* 1.5rem = 24px (horizontal) | 0.25rem = 4px (vertical) */
            margin: 0.25rem 1.5rem !important; 
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          
          {/* 3. HTML Limpo: Removemos as classes de espaçamento (gap, mx) 
                que não estavam funcionando. */}
          <ul className="flex flex-wrap justify-center items-center">
            
            {navLinks.map((link, idx) => (
              // 4. A classe de margem foi removida daqui
              <li key={idx}>
                <a
                  href={link.href}
                  className="group relative text-base font-semibold tracking-wide
                    px-6 py-2 rounded-md transition-all duration-300 ease-in-out
                    hover:shadow-[0_0_20px_rgba(212,175,55,0.9),0_0_20px_rgba(255,255,255,0.6)]"
                >
                  {link.title}
                  {/* SUBINHADOD ANIMADO REMOVIDO! */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

// O código CSS abaixo (comentário) não estava em NavBar.jsx e foi mantido apenas como nota,
// mas não interfere na execução atual.
/*
navBar.css - para testar se está carregando

a {
  color: gold !important;
  transition: all 0.3s ease !important;
}

a:hover {
  color: white !important;
  text-shadow: 0 0 8px white !important;
  transform: translateY(-3px);
}
*/