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
    <div className="min-h-screen bg-[#f8f6f2]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f6f2] border-b border-[#8b6a57]/10 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-20">
          <img src="/logo.png" alt="Nathalia Gaitkoski" className="h-6 w-auto" />
          <a
            href="https://wa.me/+5545999893299"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#8b6a57] text-white rounded-lg hover:bg-[#7a5a48] transition-colors duration-300 font-medium text-sm"
          >
            Conversar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-4 md:py-20">
        <div className="container">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            <div className="text-center space-y-3">
              <h2 className="text-xs uppercase tracking-widest text-[#8b6a57] font-medium">REVIEW ARQUITETÔNICO AUTÊNTICO</h2>
              <div className="flex justify-center p-2">
                <img
                  src="/nathalia-hero.jpeg"
                  alt="Nathalia Gaitkoski"
                  className="w-full max-w-xs aspect-square rounded-lg shadow-lg object-cover object-top"
                />
              </div>
              <h1 className="text-2xl md:text-5xl font-light text-[#533524] leading-tight">
                Pare de competir por <span className="font-medium">preço</span>.<br />
                Comece a ser reconhecido por <span className="font-medium">autoridade</span>.
              </h1>
              <p className="text-sm text-[#533524]/80 leading-relaxed">
                Uma arquiteta visita sua loja, analisa tecnicamente seus produtos e cria vídeos estratégicos que posicionam sua marca como referência — sem você precisar aparecer.
              </p>
              <a
                href="https://wa.me/+5545999893299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#8b6a57] text-white rounded-lg hover:bg-[#7a5a48] transition-colors duration-300 font-medium"
              >
                Solicite seu orçamento
              </a>
              <div className="bg-white p-4 rounded-lg border border-[#8b6a57]/20 space-y-2 text-left text-sm">
                <p className="font-medium text-[#533524]">✓ Arquiteta CAU A183-8687</p>
                <p className="text-[#533524]/80">✓ +10 mil seguidores | 3,5 milhões de views em um vídeo</p>
                <p className="text-[#533524]/80">✓ 1,1 milhão de visualizações no perfil em 30 dias</p>
                <p className="text-[#533524]/80">✓ Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-light text-[#533524] leading-tight">
                Pare de competir por <span className="font-medium">preço</span>.<br />
                Comece a ser reconhecido por <span className="font-medium">autoridade</span>.
              </h1>
              <p className="text-lg text-[#533524]/80 leading-relaxed">
                Uma arquiteta visita sua loja, analisa tecnicamente seus produtos e cria vídeos estratégicos que posicionam sua marca como referência — sem você precisar aparecer.
              </p>
              <a
                href="https://wa.me/+5545999893299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#8b6a57] text-white rounded-lg hover:bg-[#7a5a48] transition-colors duration-300 font-medium text-lg"
              >
                Solicite seu orçamento
              </a>
              <div className="bg-white p-6 rounded-lg border border-[#8b6a57]/20 space-y-3">
                <p className="font-medium text-[#533524]">✓ Arquiteta CAU A183-8687</p>
                <p className="text-[#533524]/80">✓ +10 mil seguidores | 3,5 milhões de views em um vídeo</p>
                <p className="text-[#533524]/80">✓ 1,1 milhão de visualizações no perfil em 30 dias</p>
                <p className="text-[#533524]/80">✓ Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/nathalia-hero.jpeg"
                alt="Nathalia Gaitkoski"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-light text-[#533524] mb-8 text-center">
            Por que <span className="font-medium">validação técnica</span> vende mais que propaganda
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-[#533524]/80 leading-relaxed">
              <p>
                <strong>Quando você diz "temos os melhores produtos", soa como autoelogio.</strong> Quando uma arquiteta registrada no CAU diz tecnicamente por que seu produto é superior, o cliente acredita.
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
                <strong>E tem mais:</strong> além de ser arquiteta que projeta, tenho uma construtora. Conheço os dois lados: sei o que você quer comunicar e sei como traduzir isso para o cliente final.
              </p>
            </div>
            <div>
              <img
                src="/nathalia-validation.jpeg"
                alt="Nathalia Gaitkoski"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 md:py-20 bg-[#F5F1E8]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-light text-[#533524] mb-4 text-center">
            Exemplos de <span className="font-medium">reviews arquitetônicos</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {videos.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-black flex items-center justify-center relative group" style={{ aspectRatio: '9/16' }}>
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
                <div className="p-4 bg-white">
                  <h3 className="font-medium text-[#533524]">{video.company}</h3>
                  <p className="text-sm text-[#533524]/70">{video.category}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#533524]/70 text-sm">
            Esses vídeos não são feitos para "viralizar por sorte".<br />
            São feitos para posicionar marcas premium como referência técnica.
          </p>
        </div>
      </section>

      {/* 5 Steps Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-light text-[#533524] mb-12 text-center">
            5 passos <span className="font-medium">simples</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {[
              { num: 1, title: "Briefing", desc: "Conversa rápida para entender sua marca e objetivo" },
              { num: 2, title: "Análise prévia", desc: "Você envia fotos/vídeos. Eu analiso e planejo o roteiro técnico" },
              { num: 3, title: "Visita + gravação", desc: "Vou até sua loja/projeto e gravo" },
              { num: 4, title: "Edição + aprovação", desc: "Você recebe o material editado + 1 rodada de ajustes" },
              { num: 5, title: "Publicação + entrega", desc: "Publico no meu perfil em colab + você usa por 1 ano" }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#8b6a57] text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-medium text-[#533524] mb-2">{step.title}</h3>
                <p className="text-xs text-[#533524]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#533524]/70 text-sm">
            Prazo de entrega: 7 dias úteis após gravação
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-light text-[#533524] mb-12 text-center">
            Escolha o formato <span className="font-medium">ideal</span>
          </h2>

          <div className="max-w-2xl mx-auto mb-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-[#8b6a57] text-white shadow-lg"
                    : "bg-white text-[#533524] border border-[#8b6a57]/20"
                }`}
              >
                <h3 className={`text-2xl font-medium mb-2 ${pkg.highlighted ? "text-white" : "text-[#533524]"}`}>
                  {pkg.title}
                </h3>
                <p className={`text-base mb-6 ${pkg.highlighted ? "text-white/90" : "text-[#533524]/70"}`}>
                  {pkg.subtitle}
                </p>

                <div className="mb-8">
                  <h4 className={`font-medium mb-4 ${pkg.highlighted ? "text-white" : "text-[#533524]"}`}>
                    O que está incluso:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <span className={`font-bold ${pkg.highlighted ? "text-white" : "text-[#8b6a57]"}`}>✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/+5545999893299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    pkg.highlighted
                      ? "bg-white text-[#8b6a57] hover:bg-white/90"
                      : "bg-[#8b6a57] text-white hover:bg-[#7a5a48]"
                  }`}
                >
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <h3 className="text-lg font-medium text-[#533524] mb-2">EXTRA: Menção Adicional</h3>
            <p className="text-[#533524]/70 mb-4">
              Quer mais visibilidade ao longo do tempo?<br />
              +1 menção em reel futuro relacionado ao seu segmento (até 60 dias após entrega)
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials & FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-light text-[#533524] mb-12 text-center">
            O que clientes dizem <span className="font-medium">+ dúvidas respondidas</span>
          </h2>

          {/* Mobile Layout - Single Column */}
          <div className="md:hidden space-y-12">
            {/* Testimonials - Mobile */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-[#533524] mb-6">Depoimentos</h3>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-6 bg-[#f8f6f2] rounded-lg border border-[#8b6a57]/10">
                  <p className="text-[#533524] mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-medium text-[#8b6a57]">— {testimonial.author}</p>
                  <p className="text-xs text-[#533524]/70">{testimonial.company}</p>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-[#f8f6f2] rounded-lg">
                  <p className="text-2xl font-bold text-[#8b6a57]">3.5M</p>
                  <p className="text-xs text-[#533524]/70">Views em um vídeo de arquitetura</p>
                </div>
                <div className="text-center p-4 bg-[#f8f6f2] rounded-lg">
                  <p className="text-2xl font-bold text-[#8b6a57]">1.3M</p>
                  <p className="text-xs text-[#533524]/70">Views no perfil em 30 dias</p>
                </div>
                <div className="text-center p-4 bg-[#f8f6f2] rounded-lg">
                  <p className="text-2xl font-bold text-[#8b6a57]">10k+</p>
                  <p className="text-xs text-[#533524]/70">Seguidores qualificados</p>
                </div>
              </div>
              <p className="text-center text-[#8b6a57] mt-6">Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
            </div>

            {/* FAQ - Mobile */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-[#533524] mb-6">Objeções respondidas</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-[#8b6a57]/20 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-4 text-left font-medium text-[#533524] hover:bg-[#f8f6f2] transition-colors duration-300 flex justify-between items-center"
                    >
                      <span className="font-bold">{faq.question}</span>
                      <span className="text-[#8b6a57]">{expandedFaq === idx ? "−" : "+"}</span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-4 bg-[#f8f6f2] text-[#533524]/80 text-sm leading-relaxed border-t border-[#8b6a57]/10">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout - 3 Columns with Equal Heights */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {/* Column 1: Testimonials */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-medium text-[#533524] mb-6">Depoimentos</h3>
              <div className="flex-grow space-y-6">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="p-6 bg-[#f8f6f2] rounded-lg border border-[#8b6a57]/10">
                    <p className="text-[#533524] mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-sm font-medium text-[#8b6a57]">— {testimonial.author}</p>
                    <p className="text-xs text-[#533524]/70">{testimonial.company}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Stats Cards */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-medium text-[#533524] mb-6">Impacto</h3>
              <div className="flex-grow space-y-6 flex flex-col justify-between">
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-[#f8f6f2] rounded-lg">
                    <p className="text-2xl font-bold text-[#8b6a57]">3.5M</p>
                    <p className="text-xs text-[#533524]/70">Views em um vídeo de arquitetura</p>
                  </div>
                  <div className="text-center p-4 bg-[#f8f6f2] rounded-lg">
                    <p className="text-2xl font-bold text-[#8b6a57]">1.3M</p>
                    <p className="text-xs text-[#533524]/70">Views no perfil em 30 dias</p>
                  </div>
                  <div className="text-center p-4 bg-[#f8f6f2] rounded-lg">
                    <p className="text-2xl font-bold text-[#8b6a57]">10k+</p>
                    <p className="text-xs text-[#533524]/70">Seguidores qualificados</p>
                  </div>
                </div>
                <p className="text-center text-[#8b6a57] text-sm mt-4">Audiência qualificada: pessoas que constroem, reformam e consomem arquitetura</p>
              </div>
            </div>

            {/* Column 3: FAQ */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-medium text-[#533524] mb-6">Objeções respondidas</h3>
              <div className="flex-grow space-y-3 overflow-y-auto">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-[#8b6a57]/20 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-4 text-left font-medium text-[#533524] hover:bg-[#f8f6f2] transition-colors duration-300 flex justify-between items-center"
                    >
                      <span className="font-bold text-sm">{faq.question}</span>
                      <span className="text-[#8b6a57]">{expandedFaq === idx ? "−" : "+"}</span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-4 bg-[#f8f6f2] text-[#533524]/80 text-xs leading-relaxed border-t border-[#8b6a57]/10">
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

      {/* CTA Section - Updated Background Color */}
      <section className="py-16 md:py-20 bg-[#F5F1E8] text-[#533524]">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light">
            Sua marca merece ser reconhecida pelo que<br />
            <span className="font-medium">realmente é</span>
          </h2>
          <p className="text-base text-[#533524]/80 max-w-2xl mx-auto">
            Marcas premium não vendem produto.<br />
            Vendem confiança.
          </p>
          <p className="text-base text-[#533524]/80 max-w-2xl mx-auto">
            E confiança não vem de propaganda — vem de validação técnica real.
          </p>
          <div className="space-y-4 pt-4">
            <p className="text-[#533524]/80">
              Você pode continuar competindo por preço.<br />
              Ou pode se posicionar como a escolha óbvia para quem valoriza qualidade.
            </p>
            <p className="text-sm text-[#533524]/70">
              As condições especiais de lançamento não vão durar para sempre.
            </p>
          </div>
          <a
            href="https://wa.me/+5545999893299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#8b6a57] text-white rounded-lg hover:bg-[#7a5a48] transition-colors duration-300 font-medium text-lg mt-8"
          >
            Solicite seu orçamento personalizado
          </a>
          <p className="text-sm text-[#533524]/70 pt-4">
            Sem compromisso. Sem pressão.<br />
            Apenas uma conversa estratégica entre profissionais que levam marketing a sério.
          </p>
        </div>
      </section>

      {/* Footer - Updated Background Color */}
      <footer className="bg-[#8B6A57] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Nathalia Gaitkoski</h3>
              <p className="text-white/70 text-sm mb-4">
                Arquiteta e Urbanista | CAU A183-8687<br />
                Criadora de conteúdo especializado em Review Arquitetônico Autêntico
              </p>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p>📍 Cascavel/PR</p>
              <p>📱 WhatsApp: <a href="tel:+5545999893299" className="text-white hover:underline">(45) 99989-3299</a></p>
              <p>📧 <a href="mailto:parcerias@nathaliagaitkoski.com" className="text-white hover:underline">parcerias@nathaliagaitkoski.com</a></p>
              <p>📸 <a href="https://instagram.com/nathaliagaitkoski.co" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@nathaliagaitkoski.co</a></p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2025 Nathalia Gaitkoski. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
