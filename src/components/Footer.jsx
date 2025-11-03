// src/components/Footer.jsx

function Footer() {
  const brasao = "/ass-brasao-cpl-nascente.png";

  return (
    // 1. O contêiner do rodapé é RELATIVO. Ele se torna a âncora para o brasão.
    <footer className="relative container mx-auto px-4 pt-20 pb-6"> 
      {/* 
        O 'pt-20' (padding-top) cria espaço para o brasão flutuar para dentro, 
        garantindo que o texto de copyright não fique escondido atrás dele.
      */}

      {/* 2. O BRASÃO é ABSOLUTO, posicionado em relação ao footer. */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0">
        {/* 
          - 'left-1/2 -translate-x-1/2' é a técnica padrão para centralizar horizontalmente.
          - 'top-0' o alinha com o topo da área de padding que criamos.
        */}
        <img 
          src={brasao} 
          alt="Brasão Capelania Nascente" 
          className="h-32 w-auto" // Controle de tamanho simples e direto.
        />
      </div>

      {/* 3. O CONTEÚDO do rodapé (copyright) vive no fluxo normal. */}
      <div className="text-center border-t border-white/20 pt-6">
        <p className="font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Penso Logo Creio
        </p>
        <p className="text-sm text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Todos os direitos reservados. © 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
