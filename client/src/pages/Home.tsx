import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const testimonials = [
    {
      company: "Montserrat Arquitetura Imobiliária",
      text: "Bom dia... Seu vídeo ficou ótimo... a repercussão está incrível.... parabéns pela sua desenvoltura e trabalho.... obrigado.",
      author: "Valdecir"
    },
    {
      company: "Fina Arte Porcelanataria",
      text: "Vc é di maaaaissss 👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾 Nossa ficou muito bom. Nós vamos fechar mais negócios nos próximos dias.",
      author: "Felipe"
    },
    {
      company: "Monteiro Móveis",
      text: "Mulher... Você arrasa!!!!! Em tudo... não é possível hahaha",
      author: "Letícia"
    }
  ];

  const faqs = [
    {
      question: "Sua audiência não é só da minha cidade…",
      answer: "Exato. E isso aumenta sua autoridade localmente. Quando um cliente local vê que sua marca foi validada por uma arquiteta com alcance nacional e milhões de views, a percepção de valor dispara. Você usa o vídeo no site, em reuniões, no WhatsApp. Autoridade não tem fronteira."
    },
    {
      question: "Você grava com celular…",
      answer: "Sim, é proposital. Vídeos com celular: performam melhor no Instagram (algoritmo prioriza nativo), parecem reais, não propaganda (mais engajamento), geram conexão autêntica. Meus 3,5 milhões de views foram com celular. Funciona."
    },
    {
      question: "Como sei se vale o investimento?",
      answer: "Não vendo vendas diretas. Entrego: Material permanente para múltiplos canais, Validação técnica que aumenta percepção de valor, Autoridade que constrói confiança. Se você fechar 1 projeto a mais porque o cliente viu validação técnica, já pagou o serviço."
    },
    {
      question: "Preciso aparecer nos vídeos?",
      answer: "Não. Eu apareço, eu falo, eu valido. Você só me recebe no local."
    },
    {
      question: "E se meu produto não ficar bonito?",
      answer: "Se você vende premium, ele já tem diferenciais técnicos. Meu trabalho é destacá-los estrategicamente. Se necessário, ofereço Ambientação Profissional antes da gravação."
    },
    {
      question: "Posso usar em anúncios pagos?",
      answer: "Sim. Direitos de uso por 1 ano em tráfego pago. Nos demais canais (redes orgânicas, site, WhatsApp), também uso por 1 ano."
    }
  ];

  const packages = [
    {
      title: "Pacote de Conteúdo com Posicionamento",
      subtitle: "Produção de vídeos com posicionamento técnico",
      features: [
        "Leitura estratégica da marca (direcionada para vídeo)",
        "Definição do discurso e dos temas",
        "Produção de vídeos com a Nathalia como rosto",
        "Edição simples e objetiva",
        "Direito de uso por 1 ano (orgânico + tráfego)",
        "Publicação no seu perfil, quando fizer sentido"
      ],
      highlighted: true
    }
  ];

  const videos = [
    {
      id: "m9O5iyVdCV4",
      title: "Monteiro Móveis",
      company: "Monteiro Móveis",
      category: "Móveis"
    },
    {
      id: "3_Bz1ZIo6hA",
      title: "Fina Arte Porcelanataria",
      company: "Fina Arte Porcelanataria",
      category: "Porcelanaria"
    },
    {
      id: "8pFKaXIK1ss",
      title: "Montserrat Arquitetura Imobiliária",
      company: "Montserrat",
      category: "Arquitetura Imobiliária"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ece5d8] via-white to-[#f5f3f0]">
      {/* Header - Luxury */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#bf8c77]/20 shadow-sm">
        <div className="container flex items-center justify-between h-24">
          <img src="/logo.png" alt="Nathalia Gaitkoski" className="h-8 w-auto" />
          <a
            href="https://wa.me/+5545999893299"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-[#ab4c3b] to-[#8b3a2b] text-white rounded-full hover:shadow-lg hover:shadow-[#ab4c3b]/30 transition-all duration-300 font-semibold text-sm tracking-wide"
          >
            Conversar
          </a>
        </div>
      </header>

      {/* Hero Section - Luxury */}
      <section className="py-8 md:py-32">
        <div className="container">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-[#bf8c77]/10 rounded-full mb-2">
                <p className="text-xs uppercase tracking-widest text-[#ab4c3b] font-semibold">Review Arquitetônico Autêntico</p>
              </div>
              <div className="flex justify-center p-2">
                <img
                  src="/nathalia-hero.jpeg"
                  alt="Nathalia Gaitkoski"
                  className="w-full max-w-xs aspect-square rounded-2xl shadow-2xl object-cover object-top"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-light text-[#53503f] leading-tight">
                Pare de competir por <span className="font-bold text-[#ab4c3b]">preço</span>.<br />
                Comece a ser reconhecido por <span className="font-bold text-[#ab4c3b]">autoridade</span>.
              </h1>
              <p className="text-base text-[#53503f]/80 leading-relaxed max-w-md mx-auto">
                Uma arquiteta visita sua loja, analisa tecnicamente seus produtos e cria vídeos estratégicos que posicionam sua marca como referência — sem você precisar aparecer.
              </p>
              <a
                href="https://wa.me/+5545999893299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#ab4c3b] to-[#8b3a2b] text-white rounded-full hover:shadow-lg hover:shadow-[#ab4c3b]/30 transition-all duration-300 font-semibold"
              >
                Solicite seu orçamento
              </a>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#bf8c77]/20 space-y-3 text-left text-sm">
                <p className="font-semibold text-[#53503f]">✦ Arquiteta CAU A183-8687</p>
                <p className="text-[#53503f]/80">✦ +10 mil seguidores | 3,5 milhões de views em um vídeo</p>
                <p className="text-[#53503f]/80">✦ 1,1 milhão de visualizações no perfil em 30 dias</p>
                <p className="text-[#53503f]/80">✦ Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-2 bg-[#bf8c77]/10 rounded-full">
                <p className="text-xs uppercase tracking-widest text-[#ab4c3b] font-semibold">Review Arquitetônico Autêntico</p>
              </div>
              <h1 className="text-6xl font-light text-[#53503f] leading-tight">
                Pare de competir por <span className="font-bold text-[#ab4c3b]">preço</span>.<br />
                Comece a ser reconhecido por <span className="font-bold text-[#ab4c3b]">autoridade</span>.
              </h1>
              <p className="text-lg text-[#53503f]/80 leading-relaxed max-w-lg">
                Uma arquiteta visita sua loja, analisa tecnicamente seus produtos e cria vídeos estratégicos que posicionam sua marca como referência — sem você precisar aparecer.
              </p>
              <a
                href="https://wa.me/+5545999893299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-[#ab4c3b] to-[#8b3a2b] text-white rounded-full hover:shadow-xl hover:shadow-[#ab4c3b]/40 transition-all duration-300 font-semibold text-lg"
              >
                Solicite seu orçamento
              </a>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#bf8c77]/20 space-y-4">
                <p className="font-semibold text-[#53503f]">✦ Arquiteta CAU A183-8687</p>
                <p className="text-[#53503f]/80">✦ +10 mil seguidores | 3,5 milhões de views em um vídeo</p>
                <p className="text-[#53503f]/80">✦ 1,1 milhão de visualizações no perfil em 30 dias</p>
                <p className="text-[#53503f]/80">✦ Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/nathalia-hero.jpeg"
                alt="Nathalia Gaitkoski"
                className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#bf8c77]/30 to-transparent"></div>

      {/* Validation Section - Luxury */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light text-[#53503f] mb-16 text-center max-w-3xl mx-auto">
            Por que <span className="font-bold text-[#ab4c3b]">validação técnica</span> vende mais que propaganda
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-[#53503f]/90 leading-relaxed text-lg">
              <p>
                <strong className="text-[#53503f]">Quando você diz "temos os melhores produtos", soa como autoelogio.</strong> Quando uma arquiteta registrada no CAU diz tecnicamente por que seu produto é superior, o cliente acredita.
              </p>
              <p>
                Essa é a diferença entre marketing genérico e autoridade real.
              </p>
              <p>
                Eu visito sua loja ou projeto, analiso com olhar técnico de arquiteta, crio vídeos estratégicos e publico no meu perfil em colaboração com sua marca.
              </p>
              <p>
                Você recebe todo o material para usar onde quiser: Instagram, site, WhatsApp, apresentações, anúncios.
              </p>
              <p>
                <strong className="text-[#53503f]">E tem mais:</strong> além de ser arquiteta que projeta, tenho uma construtora. Conheço os dois lados: sei o que você quer comunicar e sei como traduzir isso para o cliente final.
              </p>
            </div>
            <div>
              <img
                src="/nathalia-validation.jpeg"
                alt="Nathalia Gaitkoski"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section - Luxury */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#ece5d8]/30 to-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light text-[#53503f] mb-4 text-center">
            Exemplos de <span className="font-bold text-[#ab4c3b]">reviews arquitetônicos</span>
          </h2>
          <p className="text-center text-[#53503f]/70 mb-16 text-lg">Conheça alguns dos projetos que já transformaram marcas em referência</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {videos.map((video) => (
              <div key={video.id} className="group">
                <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-black" style={{ aspectRatio: '9/16' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-[#53503f] text-lg">{video.company}</h3>
                  <p className="text-sm text-[#bf8c77]">{video.category}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#53503f]/70 text-lg max-w-2xl mx-auto">
            Esses vídeos não são feitos para "viralizar por sorte".<br />
            <strong>São feitos para posicionar marcas premium como referência técnica.</strong>
          </p>
        </div>
      </section>

      {/* 5 Steps Section - Luxury */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light text-[#53503f] mb-16 text-center">
            5 passos <span className="font-bold text-[#ab4c3b]">simples</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[
              { num: 1, title: "Briefing", desc: "Conversa rápida para entender sua marca e objetivo" },
              { num: 2, title: "Análise prévia", desc: "Você envia fotos/vídeos. Eu analiso e planejo o roteiro técnico" },
              { num: 3, title: "Visita + gravação", desc: "Vou até sua loja/projeto e gravo" },
              { num: 4, title: "Edição + aprovação", desc: "Você recebe o material editado + 1 rodada de ajustes" },
              { num: 5, title: "Publicação + entrega", desc: "Publico no meu perfil em colab + você usa por 1 ano" }
            ].map((step) => (
              <div key={step.num} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white flex items-center justify-center font-bold mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-xl">
                  {step.num}
                </div>
                <h3 className="font-semibold text-[#53503f] mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-[#53503f]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#53503f]/70 text-sm">
            Prazo de entrega: 7 dias úteis após gravação
          </p>
        </div>
      </section>

      {/* Packages Section - Luxury */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#ece5d8]/20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light text-[#53503f] mb-16 text-center">
            Escolha o formato <span className="font-bold text-[#ab4c3b]">ideal</span>
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-12 rounded-3xl transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white shadow-2xl"
                    : "bg-white text-[#53503f] border-2 border-[#bf8c77]/30"
                }`}
              >
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-[#bf8c77]/20 rounded-full text-xs font-semibold tracking-widest text-[#ab4c3b] mb-4">PREMIUM</span>
                </div>
                <h3 className={`text-3xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-[#53503f]"}`}>
                  {pkg.title}
                </h3>
                <p className={`text-lg mb-8 ${pkg.highlighted ? "text-white/90" : "text-[#53503f]/70"}`}>
                  {pkg.subtitle}
                </p>

                <div className="mb-10">
                  <h4 className={`font-bold mb-6 text-lg ${pkg.highlighted ? "text-white" : "text-[#53503f]"}`}>
                    O que está incluso:
                  </h4>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-4">
                        <span className={`font-bold text-xl mt-1 ${pkg.highlighted ? "text-white" : "text-[#ab4c3b]"}`}>✦</span>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/+5545999893299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg ${
                    pkg.highlighted
                      ? "bg-white text-[#ab4c3b] hover:shadow-lg hover:shadow-white/50"
                      : "bg-gradient-to-r from-[#ab4c3b] to-[#8b3a2b] text-white hover:shadow-lg hover:shadow-[#ab4c3b]/30"
                  }`}
                >
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 border-t-2 border-[#bf8c77]/20">
            <h3 className="text-2xl font-bold text-[#53503f] mb-3">✦ EXTRA: Menção Adicional</h3>
            <p className="text-[#53503f]/70 max-w-2xl mx-auto text-lg">
              Quer mais visibilidade ao longo do tempo?<br />
              +1 menção em reel futuro relacionado ao seu segmento (até 60 dias após entrega)
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials & FAQ Section - Luxury */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light text-[#53503f] mb-16 text-center">
            O que clientes dizem <span className="font-bold text-[#ab4c3b]">+ dúvidas respondidas</span>
          </h2>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-16">
            {/* Testimonials - Mobile */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#53503f] mb-8">Depoimentos</h3>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-8 bg-gradient-to-br from-[#ece5d8] to-white rounded-2xl border border-[#bf8c77]/20 shadow-md">
                  <p className="text-[#53503f] mb-6 italic text-lg">"{testimonial.text}"</p>
                  <p className="text-base font-bold text-[#ab4c3b]">— {testimonial.author}</p>
                  <p className="text-sm text-[#53503f]/70">{testimonial.company}</p>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">3.5M</p>
                  <p className="text-xs mt-2">Views em um vídeo</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">1.3M</p>
                  <p className="text-xs mt-2">Views em 30 dias</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">10k+</p>
                  <p className="text-xs mt-2">Seguidores</p>
                </div>
              </div>
              <p className="text-center text-[#ab4c3b] font-semibold mt-6">Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
            </div>

            {/* FAQ - Mobile */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#53503f] mb-8">Objeções respondidas</h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-2 border-[#bf8c77]/30 rounded-2xl overflow-hidden bg-white">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-6 text-left font-bold text-[#53503f] hover:bg-[#ece5d8]/30 transition-colors duration-300 flex justify-between items-center"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#ab4c3b] text-xl">{expandedFaq === idx ? "−" : "+"}</span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-6 bg-[#ece5d8]/20 text-[#53503f]/80 text-base leading-relaxed border-t-2 border-[#bf8c77]/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout - 3 Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-10 mb-12">
            {/* Column 1: Testimonials */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#53503f] mb-8">Depoimentos</h3>
              <div className="flex-grow space-y-6">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="p-8 bg-gradient-to-br from-[#ece5d8] to-white rounded-2xl border border-[#bf8c77]/20 shadow-md">
                    <p className="text-[#53503f] mb-6 italic">{testimonial.text}</p>
                    <p className="text-base font-bold text-[#ab4c3b]">— {testimonial.author}</p>
                    <p className="text-sm text-[#53503f]/70">{testimonial.company}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Stats */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#53503f] mb-8">Impacto</h3>
              <div className="flex-grow space-y-6 flex flex-col justify-between">
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-8 bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white rounded-2xl shadow-lg">
                    <p className="text-4xl font-bold">3.5M</p>
                    <p className="text-sm mt-2">Views em um vídeo de arquitetura</p>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white rounded-2xl shadow-lg">
                    <p className="text-4xl font-bold">1.3M</p>
                    <p className="text-sm mt-2">Views no perfil em 30 dias</p>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-[#ab4c3b] to-[#8b3a2b] text-white rounded-2xl shadow-lg">
                    <p className="text-4xl font-bold">10k+</p>
                    <p className="text-sm mt-2">Seguidores qualificados</p>
                  </div>
                </div>
                <p className="text-center text-[#ab4c3b] font-semibold text-sm mt-4">Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
              </div>
            </div>

            {/* Column 3: FAQ */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#53503f] mb-8">Objeções respondidas</h3>
              <div className="flex-grow space-y-3 overflow-y-auto">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-2 border-[#bf8c77]/30 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-4 text-left font-bold text-[#53503f] hover:bg-[#ece5d8]/30 transition-colors duration-300 flex justify-between items-center"
                    >
                      <span className="text-sm">{faq.question}</span>
                      <span className="text-[#ab4c3b]">{expandedFaq === idx ? "−" : "+"}</span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-4 bg-[#ece5d8]/20 text-[#53503f]/80 text-xs leading-relaxed border-t-2 border-[#bf8c77]/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Luxury */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#ab4c3b] to-[#8b3a2b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light">
            Sua marca merece ser reconhecida pelo que<br />
            <span className="font-bold">realmente é</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Marcas premium não vendem produto.<br />
            Vendem confiança.
          </p>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            E confiança não vem de propaganda — vem de validação técnica real.
          </p>
          <div className="space-y-4 pt-6">
            <p className="text-white/90 text-lg">
              Você pode continuar competindo por preço.<br />
              Ou pode se posicionar como a escolha óbvia para quem valoriza qualidade.
            </p>
            <p className="text-sm text-white/70">
              As condições especiais de lançamento não vão durar para sempre.
            </p>
          </div>
          <a
            href="https://wa.me/+5545999893299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-[#ab4c3b] rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 font-bold text-lg mt-8"
          >
            Solicite seu orçamento personalizado
          </a>
          <p className="text-sm text-white/70 pt-6">
            Sem compromisso. Sem pressão.<br />
            Apenas uma conversa estratégica entre profissionais que levam marketing a sério.
          </p>
        </div>
      </section>

      {/* Footer - Luxury */}
      <footer className="bg-[#53503f] text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nathalia Gaitkoski</h3>
              <p className="text-white/70 text-base mb-6">
                Arquiteta e Urbanista | CAU A183-8687<br />
                Criadora de conteúdo especializado em Review Arquitetônico Autêntico
              </p>
            </div>
            <div className="space-y-3 text-base text-white/70">
              <p>📍 Cascavel/PR</p>
              <p>📱 WhatsApp: <a href="tel:+5545999893299" className="text-white hover:text-[#bf8c77] transition-colors">(45) 99989-3299</a></p>
              <p>📧 <a href="mailto:parcerias@nathaliagaitkoski.com" className="text-white hover:text-[#bf8c77] transition-colors">parcerias@nathaliagaitkoski.com</a></p>
              <p>📸 <a href="https://instagram.com/nathaliagaitkoski.co" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bf8c77] transition-colors">@nathaliagaitkoski.co</a></p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-12 text-center text-sm text-white/50">
            <p>© 2025 Nathalia Gaitkoski. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
