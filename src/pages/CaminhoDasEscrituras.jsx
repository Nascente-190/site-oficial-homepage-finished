import React from "react";

export default function CaminhoDasEscrituras() {
  const imagemLateral = "/public/img/livro-sagrado.jpg"; // substitua pela imagem desejada

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black text-[#E8E8E8] leading-relaxed pt-32">
      {/* HERO */}
      <section className="relative py-20 text-center px-6 md:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">
          Caminho das Escrituras
        </h1>
        <p className="italic text-lg md:text-xl text-[#cfcfcf] max-w-3xl mx-auto">
          “A Palavra não é um mapa — é o caminho em si. E nela, quem lê também é lido.”
        </p>
      </section>

      {/* BLOCO DE CONTEÚDO PRINCIPAL */}
      <section className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-8 px-6 md:px-10 py-16 bg-black/40 rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.08)] backdrop-blur-md border border-[#D4AF37]/10">
        {/* BLOCO DE TEXTO */}
        <div className="flex-1 space-y-8">
          <p className="text-justify indent-8">
            O <strong>“Caminho das Escrituras”</strong> não é apenas uma categoria de leitura, mas uma jornada espiritual.
            É aqui que o texto sagrado se revela como espelho e lâmina — refletindo o íntimo de quem lê e cortando as ilusões
            que o mundo fabrica sobre o que é fé.
          </p>

          <blockquote className="p-5 bg-[#d4af37]/10 border-l-4 border-[#D4AF37] italic rounded-lg shadow-[inset_0_0_12px_rgba(212,175,55,0.3)] text-center text-[#FFD700]">
            “Examinai as Escrituras, porque vós cuidais ter nelas a vida eterna, e são elas que de mim testificam.”  
            <br />
            <span className="text-sm text-[#bfa861]">(João 5:39)</span>
          </blockquote>

          <p className="text-justify indent-8">
            Aqui, o visitante encontrará uma leitura ordenada das Escrituras — livro por livro, tema por tema —
            mas com um coração devocional e reflexivo. Este não é um estudo frio, nem um comentário técnico; é um retorno
            à Palavra como alimento, como verbo que sustenta e não apenas informa.
          </p>

          <p className="text-justify indent-8">
            Cada meditação publicada nesta seção será guiada pela busca de coerência entre <em>o que cremos</em> e{" "}
            <em>como vivemos</em>. A Bíblia será, sempre, o ponto de partida e o ponto de chegada.
          </p>

          <p className="text-justify indent-8">
            Há um tipo de leitura que apenas coleta dados, e outro que desperta almas. O primeiro enche a mente, o segundo
            acende o espírito. Este espaço se propõe a cultivar a segunda: a leitura que não busca dominar a Escritura,
            mas ser dominada por ela.
          </p>

          <div className="py-8 border-t border-b border-[#D4AF37]/25 text-center">
            <p className="text-2xl font-semibold text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] mb-5">
              “Caminhar com a Palavra é caminhar com Deus.”
            </p>
            <p className="text-[#c8c8c8] italic max-w-2xl mx-auto px-4">
              Que este espaço seja um lembrete de que estudar a Escritura não é um exercício de vaidade intelectual,
              mas um ato de adoração. O texto é vivo — e todo aquele que o lê com humildade, é lido pelo Espírito.
            </p>
            <p className="text-[#cfcfcf] italic mt-5">
              “Lâmpada para os meus pés é a Tua palavra, e luz para o meu caminho.”  
              <span className="text-sm text-[#9f9f9f]">(Salmo 119:105)</span>
            </p>
          </div>
        </div>

        {/* BLOCO DE IMAGEM / ILUSTRAÇÃO */}
        <aside className="w-full md:w-[35%] flex justify-center items-start md:mt-4">
          <div className="relative">
            <img
              src={imagemLateral}
              alt="Imagem representando o Caminho das Escrituras"
              className="rounded-2xl shadow-[0_0_18px_rgba(212,175,55,0.3)] border border-[#D4AF37]/30 w-full md:w-80 object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </aside>
      </section>

      {/* RESPIRO */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
}
