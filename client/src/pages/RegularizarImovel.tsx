import { useEffect, useState, useRef } from 'react';
import { useLocation } from '@/hooks/useLocation';
import HeadManager from '@/components/HeadManager';
import { StructuredData, localBusinessSchema } from '@/components/StructuredData';
import {
  Shield,
  FileCheck,
  Home,
  MessageCircle,
  AlertTriangle,
  Scale,
  Clock,
  ArrowRight,
  BookOpen,
  Check,
  Building,
  HelpCircle,
  Sparkles,
  TrendingUp,
  FileText,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function RegularizarImovel() {
  const location = useLocation();
  const [isLpMenuOpen, setIsLpMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: 'Início', href: '#lp-hero' },
    { label: 'Problemas', href: '#lp-problems' },
    { label: 'Valorização', href: '#lp-value' },
    { label: 'Serviços', href: '#lp-services' },
    { label: 'Comparativo', href: '#lp-comparison' },
    { label: 'Como Funciona', href: '#lp-process' },
    { label: 'Dúvidas', href: '#lp-faq' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Hero Entrance Animations
      gsap.fromTo('.lp-hero-animate', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      // Hero image zoom transition
      gsap.fromTo('.animate-kenburns',
        { scale: 1.15 },
        { scale: 1, duration: 2.5, ease: 'power2.out' }
      );

      // 2. Pain Points Cards (ScrollTrigger)
      gsap.fromTo('.lp-problem-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#lp-problems',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Benefits Section Column contents (ScrollTrigger)
      gsap.fromTo('.lp-benefit-img',
        { opacity: 0, scale: 0.9, x: -50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#lp-value',
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo('.lp-benefit-content',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#lp-value',
            start: 'top 75%'
          }
        }
      );

      // 4. Services Section Cards (ScrollTrigger)
      gsap.fromTo('.lp-service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#lp-services',
            start: 'top 80%'
          }
        }
      );

      // 5. Comparison Cards (ScrollTrigger)
      gsap.fromTo('.lp-comparison-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#lp-comparison',
            start: 'top 80%'
          }
        }
      );

      // 6. Process Step Items (ScrollTrigger)
      gsap.fromTo('.lp-process-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#lp-process',
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo('.lp-process-img',
        { opacity: 0, scale: 0.9, x: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#lp-process',
            start: 'top 75%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const phoneNumber = '5511943825880';
  const defaultMsg = encodeURIComponent(
    `Olá! Vim através da página de regularização e gostaria de realizar uma avaliação sobre o meu imóvel em ${location.city} - ${location.state}.`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMsg}`;

  // Seções de problemas de imóvel irregular
  const painPoints = [
    {
      title: 'Contrato de Gaveta',
      desc: 'O contrato de compra e venda particular não transmite a propriedade oficial. Juridicamente, o imóvel ainda pertence ao antigo dono registrado na matrícula.',
    },
    {
      title: 'Falta de Escritura/Registro',
      desc: 'Quem não registra não é dono. A falta do registro no Cartório de Registro de Imóveis (RGI) impede que você seja legalmente reconhecido como proprietário.',
    },
    {
      title: 'Imóvel de Herança (Sem Inventário)',
      desc: 'Bens de familiares falecidos que não passaram por processo de inventário ficam bloqueados para venda, transferência ou financiamento.',
    },
    {
      title: 'Construção sem Habite-se',
      desc: 'Casas ou prédios construídos sem a devida averbação da obra junto à Prefeitura e ao Registro de Imóveis ficam em situação irregular.',
    },
    {
      title: 'Área com Metragem Incorreta',
      desc: 'Divergências entre a área física real do terreno e o que está descrito no documento da matrícula (exige Retificação de Área).',
    },
    {
      title: 'Loteamento Irregular',
      desc: 'Terrenos subdivididos sem a devida aprovação municipal ou registro no RGI, o que impede a obtenção de matrículas individuais.',
    },
  ];

  // Serviços oferecidos
  const services = [
    {
      icon: Home,
      title: 'Usucapião Extrajudicial',
      desc: 'Regularize a posse do seu imóvel diretamente em cartório, de forma muito mais ágil e sem a necessidade de um processo judicial demorado.',
    },
    {
      icon: Scale,
      title: 'Usucapião Judicial',
      desc: 'Ação judicial recomendada para casos onde há conflito de interesses, herdeiros desconhecidos ou falta de documentação mínima exigida em cartório.',
    },
    {
      icon: FileCheck,
      title: 'Averbação de Construção e Habite-se',
      desc: 'Procedimento para incluir a área construída na matrícula do imóvel, regularizando a situação fiscal e urbana junto à Prefeitura e ao RGI.',
    },
    {
      icon: BookOpen,
      title: 'Inventário e Partilha de Bens',
      desc: 'Assessoria jurídica para realização de inventários judiciais ou extrajudiciais em cartório, visando a transferência legal dos imóveis aos herdeiros.',
    },
    {
      icon: Building,
      title: 'Retificação de Registro e Área',
      desc: 'Correção de erros de metragem, limites ou dados de proprietários que constam de forma incorreta na matrícula do imóvel.',
    },
    {
      icon: Shield,
      title: 'Regularização via REURB',
      desc: 'Regularização Fundiária Urbana para núcleos urbanos informais, permitindo a obtenção do título de propriedade de forma simplificada.',
    },
  ];

  // Processo passo a passo
  const steps = [
    {
      num: '1',
      title: 'Diagnóstico Jurídico Gratuito',
      desc: 'Analisamos a documentação disponível do seu imóvel para entender a real situação e identificar os problemas jurídicos.',
    },
    {
      num: '2',
      title: 'Definição da Rota (Cartório ou Judicial)',
      desc: 'Definimos a estratégia mais rápida e econômica. Sempre priorizamos a via extrajudicial (cartório), que é muito mais rápida.',
    },
    {
      num: '3',
      title: 'Montagem do Processo e Laudos',
      desc: 'Organizamos a cadeia de documentos, laudos técnicos, certidões e assinaturas necessárias para dar entrada no pedido.',
    },
    {
      num: '4',
      title: 'Obtenção da Matrícula no Seu Nome',
      desc: 'Acompanhamos o andamento até o registro final. Você recebe a matrícula atualizada do imóvel, constando você como proprietário definitivo.',
    },
  ];

  // FAQ perguntas frequentes
  const faqs = [
    {
      q: 'Quanto custa para regularizar um imóvel?',
      a: 'Os custos variam de acordo com a complexidade do caso. Envolvem taxas municipais, impostos (como o ITBI ou ITCMD), emolumentos de cartório e os honorários advocatícios. Em nossa consulta inicial, nós estruturamos uma proposta com todos os custos detalhados e transparentes.',
    },
    {
      q: 'Qual a diferença entre a regularização em cartório (extrajudicial) e judicial?',
      a: 'A extrajudicial é feita direto no Cartório de Registro de Imóveis, sendo muito mais rápida e simples. Ela exige que todos os envolvidos estejam de acordo e que haja documentação mínima. A judicial é necessária quando há conflitos de herdeiros, vizinhos discordando de limites de área, ou falta grave de provas de posse.',
    },
    {
      q: 'É possível vender ou financiar um imóvel sem escritura?',
      a: 'Os bancos não aceitam financiar imóveis sem matrícula ou com pendências graves de registro. Além disso, imóveis sem escritura regularizada sofrem uma desvalorização de até 40% no mercado imobiliário. Regularizar o imóvel é o único caminho para vendê-lo pelo valor real de mercado ou utilizá-lo como garantia financeira.',
    },
    {
      q: 'Tenho apenas o Contrato de Gaveta. Posso perder o meu imóvel?',
      a: 'Sim, há riscos. Perante a lei, "só é dono quem registra". Se o antigo proprietário sofrer processos judiciais ou execuções fiscais, o imóvel (que ainda consta no nome dele) pode ser penhorado ou bloqueado pela Justiça. A regularização da transferência na matrícula é urgente nesses casos.',
    },
  ];

  return (
    <>
      <HeadManager
        title={`Advogado para Regularizar Imóvel em ${location.city} - ${location.state} | PP Advogados`}
        description={`Precisa regularizar seu imóvel em ${location.city}? Conte com advogado imobiliário especialista para regularização de imóveis, usucapião e inventário em ${location.city} - ${location.state}. Consulta imediata.`}
        keywords={`regularizar imovel ${location.city}, advogado imobiliário ${location.city}, usucapião ${location.city}, inventario ${location.city}, regularização de imóveis SP`}
        url={`https://regularizar.ppadv.com.br?cidade=${location.city}`}
      />
      <StructuredData type="LocalBusiness" data={localBusinessSchema} />

      {/* Custom Keyframes injection for animation effects */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        @keyframes kenburns {
          0% { transform: scale(1) translate(0px, 0px); }
          50% { transform: scale(1.08) translate(1%, 0.5%); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
        .animate-kenburns {
          animation: kenburns 24s ease-in-out infinite;
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(37, 211, 102, 0.3), 0 4px 6px -2px rgba(37, 211, 102, 0.1); }
          50% { transform: scale(1.04); box-shadow: 0 20px 25px -5px rgba(37, 211, 102, 0.5), 0 10px 10px -5px rgba(37, 211, 102, 0.2); }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.5s ease-in-out infinite;
        }
        .bg-animated-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(26,58,92,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(26,58,92,0.03) 1px, transparent 1px);
        }
      `}} />

      <div ref={containerRef} className="min-h-screen bg-white text-slate-800 selection:bg-[#7a8a9e] selection:text-[#0a1428] font-sans overflow-x-hidden">
        
        {/* Simple Landing Page Header (Light Theme) with Section Menu */}
        <header id="lp-header" className="sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm transition-all duration-300">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <a href="https://ppadv.com.br" className="flex items-center" aria-label="Ir para o site institucional PP Advogados">
                <img src="/logo-pp-adv-cropped.png" alt="Pelegrinelli & Padoan Advogados" className="h-16 w-auto sm:h-20 transition-all duration-300" />
              </a>

              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center gap-6">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-[#1a3a5c] hover:text-[#7a8a9e] transition-colors duration-300 text-sm font-semibold tracking-wide"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 bg-[#1a3a5c] hover:bg-[#122b46] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg shadow-[#1a3a5c]/25"
                  id="lp-nav-cta"
                >
                  <MessageCircle size={18} />
                  Avaliação Gratuita
                </a>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsLpMenuOpen(!isLpMenuOpen)}
                  className="lg:hidden text-[#1a3a5c] p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                  aria-label="Menu"
                >
                  {isLpMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isLpMenuOpen && (
              <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 space-y-2 pb-2 animate-slide-down">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsLpMenuOpen(false)}
                    className="block text-[#1a3a5c] hover:text-[#7a8a9e] transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-50 text-sm font-semibold"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsLpMenuOpen(false)}
                    className="flex sm:hidden items-center justify-center gap-2 bg-[#1a3a5c] hover:bg-[#122b46] text-white px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 w-full"
                  >
                    <MessageCircle size={18} />
                    Avaliação Gratuita
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section with Signature Background Image (Ken Burns & Clear Overlay) */}
        <section id="lp-hero" className="relative py-20 lg:py-32 bg-slate-100 overflow-hidden min-h-[600px] flex items-center">
          
          {/* Background image with Ken Burns motion */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/hero_regularizar.jpg" 
              alt="Assinatura de regularização de imóvel" 
              className="w-full h-full object-cover object-center animate-kenburns"
            />
          </div>

          {/* Mask overlay (White on left to keep text ultra-clear, transparent on right to expose signing image) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 to-white/40 md:to-white/20 lg:to-transparent"></div>
          
          {/* Animated decorative blur */}
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#7a8a9e]/8 rounded-full blur-[100px] pointer-events-none z-10 animate-float-slow"></div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              
              {/* Left Column: Core Content */}
              <div className="lg:col-span-7 space-y-8 text-left">
                
                {/* Floating Badge */}
                <div className="lp-hero-animate inline-flex items-center gap-2 bg-[#1a3a5c]/10 border border-[#1a3a5c]/20 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1a3a5c] backdrop-blur-sm">
                  <Sparkles size={13} className="text-[#7a8a9e]" />
                  <span>Segurança Patrimonial & Imobiliária</span>
                </div>

                {/* Dynamic Location Title */}
                <h1 className="lp-hero-animate text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#1a3a5c] leading-[1.15] tracking-tight">
                  Advogado para Regularizar Imóvel em <br />
                  <span className="relative inline-block text-[#7a8a9e] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[6px] after:bg-[#7a8a9e]/20 after:-z-10">
                    {location.city} - {location.state}
                  </span>
                </h1>

                <p className="lp-hero-animate text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl bg-white/60 p-3 rounded-2xl border border-white/50 shadow-sm backdrop-blur-md">
                  Dê segurança jurídica ao seu patrimônio. Regularize contratos de gaveta, escrituras ausentes, inventários parados ou construções sem Habite-se. Proteja o seu direito de propriedade e evite riscos de perda.
                </p>

                {/* CTAs */}
                <div className="lp-hero-animate flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebe55] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    id="lp-hero-cta"
                  >
                    <MessageCircle size={22} className="fill-white text-[#25d366]" />
                    Falar com Advogado no WhatsApp
                  </a>
                </div>

                {/* Trust Elements */}
                <div className="lp-hero-animate grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-lg">
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a3a5c]">15+ anos</p>
                    <p className="text-xs text-slate-500 font-medium">Experiência Jurídica</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a3a5c]">Atendimento</p>
                    <p className="text-xs text-slate-500 font-medium">Em Todo Território Nacional</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a3a5c]">Consultoria</p>
                    <p className="text-xs text-slate-500 font-medium">Judicial e Extrajudicial</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Floating badges only (exposing background image) */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-6 min-h-[300px]">
                
                {/* Floating badge 1: Top Right */}
                <div className="lp-hero-animate absolute top-10 right-4 md:right-10 bg-white/95 border border-slate-200/50 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-float-medium backdrop-blur-sm">
                  <div className="bg-[#1a3a5c]/10 p-1.5 rounded-lg text-[#1a3a5c]">
                    <TrendingUp size={16} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-700 leading-tight">
                    +40% de<br />Valorização
                  </div>
                </div>

                {/* Floating badge 2: Center */}
                <div className="lp-hero-animate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 border border-slate-200/50 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float-slow backdrop-blur-sm">
                  <div className="bg-[#1a3a5c]/10 p-1.5 rounded-lg text-[#1a3a5c]">
                    <Building size={18} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-700 leading-tight">
                    Regularização<br />Sem Burocracia
                  </div>
                </div>

                {/* Floating badge 3: Bottom Left */}
                <div className="lp-hero-animate absolute bottom-10 left-4 md:left-10 bg-[#1a3a5c]/95 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-float-slow backdrop-blur-sm" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-white/10 p-1.5 rounded-lg text-[#7a8a9e]">
                    <FileText size={16} />
                  </div>
                  <div className="text-[10px] font-bold leading-tight">
                    Escritura Pública<br />Registrada
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Pain Points Section (Light Theme) */}
        <section id="lp-problems" className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a3a5c]">
                Seu imóvel se encontra em alguma <br />
                <span className="text-[#7a8a9e]">dessas situações?</span>
              </h2>
              <div className="h-1 w-20 bg-[#7a8a9e] mx-auto"></div>
              <p className="text-slate-600">
                Imóveis em situação irregular perdem valor de mercado, não podem ser financiados por bancos e correm risco constante de perda de posse em disputas de herança ou processos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {painPoints.map((pain, idx) => (
                <div
                  key={idx}
                  className="lp-problem-card bg-slate-50 border border-slate-100/80 p-8 rounded-2xl hover:border-[#1a3a5c]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-[#1a3a5c]/10 p-2.5 rounded-xl inline-block mb-5 text-[#1a3a5c]">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{pain.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{pain.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Benefits Section (Light Theme) */}
        <section id="lp-value" className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Image with elegant border/shadow */}
              <div className="lp-benefit-img lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square max-w-md mx-auto">
                  <img
                    src="/titulo_propriedade.png"
                    alt="Título de propriedade com chaves do imóvel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
              </div>

              {/* Right Column: Text and benefits */}
              <div className="lp-benefit-content lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
                <div className="space-y-3">
                  <span className="text-[#7a8a9e] text-xs font-semibold tracking-widest uppercase block">Valorização & Segurança</span>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a3a5c]">
                    Por que você deve regularizar o seu imóvel hoje?
                  </h3>
                  <div className="h-1 w-20 bg-[#7a8a9e]"></div>
                </div>
                
                <ul className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  <li className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-[#1a3a5c]/25 transition-all">
                    <Check className="text-[#7a8a9e] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Valorização Imediata:</strong> Propriedades registradas valorizam até 40% a mais na hora da venda por atrair compradores com financiamento.</span>
                  </li>
                  <li className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-[#1a3a5c]/25 transition-all">
                    <Check className="text-[#7a8a9e] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Financiamento e Garantia:</strong> Apenas imóveis escriturados podem ser financiados ou usados como garantia em empréstimos.</span>
                  </li>
                  <li className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-[#1a3a5c]/25 transition-all">
                    <Check className="text-[#7a8a9e] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Herança:</strong> Facilite a sucessão, seus filhos merecem receber a propriedade de forma legal, rápida e com menor custos e impostos.</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>

        {/* Services Section (Light Theme) */}
        <section id="lp-services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a3a5c]">
                Como nossa equipe atua para <br />
                <span className="text-[#7a8a9e]">regularizar seu imóvel</span>
              </h2>
              <div className="h-1 w-20 bg-[#7a8a9e] mx-auto"></div>
              <p className="text-slate-600">
                Oferecemos assessoria jurídica ponta a ponta junto a prefeituras e cartórios de registro para garantir a legalidade do seu bem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="lp-service-card bg-white border border-slate-100 p-8 rounded-2xl hover:border-[#1a3a5c]/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-[#1a3a5c]/10 p-3 rounded-xl inline-block mb-6 border border-[#1a3a5c]/10 text-[#1a3a5c]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">{svc.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Comparison Table (Light Theme) */}
        <section id="lp-comparison" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a3a5c]">
                Extrajudicial vs. Judicial: <br />
                <span className="text-[#7a8a9e]">Qual a rota ideal para o seu caso?</span>
              </h2>
              <div className="h-1 w-20 bg-[#7a8a9e] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Extrajudicial (Cartório) - Light Card */}
              <div className="lp-comparison-card bg-white border border-[#1a3a5c]/20 p-8 rounded-2xl space-y-6 shadow-sm hover:shadow-md transition-all">
                <div className="space-y-2">
                  <div className="bg-[#7a8a9e] text-[#0a1428] px-3 py-1 rounded-full text-[10px] font-bold inline-block uppercase tracking-wider">
                    Mais Rápido e Barato
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-[#1a3a5c]">Extrajudicial (Em Cartório)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Todo o procedimento ocorre diretamente no Cartório de Registro de Imóveis. Ideal para quando há documentação mínima de posse e consenso de herdeiros ou vizinhos.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex gap-2">
                    <Check className="text-[#7a8a9e] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Sem necessidade de abrir processo na justiça.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#7a8a9e] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Averbação de divórcio, partilha ou retificação consensual.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#7a8a9e] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Custos tributários e cartoriais significativamente menores.</span>
                  </li>
                </ul>
              </div>

              {/* Judicial (Na Justiça) - Light Card */}
              <div className="lp-comparison-card bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm hover:shadow-md transition-all">
                <div className="space-y-2">
                  <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold inline-block uppercase tracking-wider">
                    Casos Complexos
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-slate-800">Processo Judicial</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Necessário quando há desentendimento entre herdeiros/vizinhos, ausência de documentos essenciais que comprovem a posse ou quando o cartório recusa o registro.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex gap-2">
                    <Check className="text-[#7a8a9e] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Exige que um Juiz de Direito autorize a emissão do registro.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#7a8a9e] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Usado em conflitos de limites territoriais de terrenos.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#7a8a9e] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Adjudicação compulsória litigiosa com antigo proprietário sumido.</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="text-center pt-10">
              <p className="text-slate-500 mb-4 text-sm font-medium">
                Após nossa análise inicial, indicamos a opção com menor custo e maior chance de aprovação.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1a3a5c] hover:text-[#7a8a9e] font-bold text-sm transition-colors"
                id="lp-compare-link"
              >
                Fazer avaliação do meu caso agora
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </section>

        {/* Process Step by Step (Light Theme) */}
        <section id="lp-process" className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a3a5c]">
                Entenda o fluxo prático de <br />
                <span className="text-[#7a8a9e]">regularização do seu imóvel</span>
              </h2>
              <div className="h-1 w-20 bg-[#7a8a9e] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Timeline Steps */}
              <div className="lg:col-span-7 relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-10 order-2 lg:order-1">
                {steps.map((step, idx) => (
                  <div key={idx} className="lp-process-item relative pl-8 md:pl-12 group">
                    {/* Step Number Badge */}
                    <div className="absolute -left-[21px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1a3a5c] text-white font-bold text-lg border-4 border-white shadow-md">
                      {step.num}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-[#1a3a5c]">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Elegant Image showcase */}
              <div className="lp-process-img lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto">
                  <img
                    src="/assessoria_imobiliaria.png"
                    alt="Reunião com advogado especialista em direito imobiliário"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FAQ Accordion Section (Light Theme) */}
        <section id="lp-faq" className="py-24 bg-[#f8fafc] border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
            
            <div className="text-center space-y-4 mb-16">
              <HelpCircle className="w-10 h-10 text-[#1a3a5c] mx-auto" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a3a5c]">
                Perguntas <span className="text-[#7a8a9e]">Frequentes</span>
              </h2>
              <div className="h-1 w-20 bg-[#7a8a9e] mx-auto"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-slate-200 rounded-xl px-6 bg-white shadow-sm hover:shadow transition-shadow"
                >
                  <AccordionTrigger className="text-left text-slate-800 font-bold hover:text-[#1a3a5c] py-4 hover:no-underline text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 border-t border-slate-100 pt-3">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </section>

        {/* Final CTA Banner (with background image) */}
        <section 
          id="lp-final-cta" 
          className="py-20 text-center relative overflow-hidden text-white border-t border-[#1a3a5c] mt-16"
          style={{
            backgroundImage: "url('/footer_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        >
          {/* Lighter gradient overlay to show background details */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051428]/95 via-[#051428]/90 to-[#051428]/45 z-0"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7a8a9e]/5 rounded-full blur-[100px] pointer-events-none z-10"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
              Garanta a escritura e matrícula no seu nome. <br />
              <span className="text-[#7a8a9e]">Proteja o seu patrimônio.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-350 max-w-2xl mx-auto">
              Inicie agora uma consulta de documentação com nossa equipe. Avaliaremos o caminho mais rápido (extrajudicial) para regularizar seu imóvel de forma segura.
            </p>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe55] text-white px-10 py-4.5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] shadow-lg animate-pulse-scale"
                id="lp-final-cta-btn"
              >
                <MessageCircle size={24} className="fill-white text-[#25d366]" />
                Iniciar Pré-Diagnóstico no WhatsApp
              </a>
            </div>
            
            <p className="text-[11px] text-slate-400">
              *A análise inicial não gera custos. Sigilo profissional e proteção de dados garantidos conforme a LGPD.
            </p>
          </div>
        </section>

        {/* Simplified Footer (Solid Dark Theme) */}
        <footer id="lp-footer" className="py-12 bg-[#051428] border-t border-[#1a3a5c]/50 text-center text-xs text-slate-300 space-y-4 relative z-10">
          <div className="container mx-auto px-4 max-w-3xl space-y-2">
            <p className="font-semibold text-white text-sm">Pelegrinelli & Padoan Advogados</p>
            <p className="text-slate-300">Rua Joseph Zarzour, 123 - Centro, Guarulhos - SP, CEP 07020-081</p>
            <p className="text-slate-300">CNPJ: 12.345.678/0001-90 | OAB/SP sob nº 12.345</p>
            
            {/* Social Media Links */}
            <div className="flex justify-center gap-4 py-3">
              <a href="https://www.facebook.com/pelegrinelliepadoan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors animate-fade-in" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/pelegrinelliepadoan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors animate-fade-in" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://bit.ly/ppadv_youtube" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors animate-fade-in" title="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://linkedin.com/company/pelegrinelliepadoan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors animate-fade-in" title="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>

            <p className="pt-2 text-[10px] text-slate-400">
              Aviso: As informações apresentadas nesta página são informativas e não configuram aconselhamento jurídico formal sem consulta individualizada.
            </p>
            <p className="pt-2 text-[10px] text-slate-400">
              &copy; {new Date().getFullYear()} Pelegrinelli & Padoan Advogados. Todos os direitos reservados.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
