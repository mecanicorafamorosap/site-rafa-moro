import React from 'react';
import { AlertTriangle, MessageCircle, ShieldCheck, Award, ThumbsUp, Wrench, Clock, MapPin, Zap } from 'lucide-react';
import {
  WORKSHOP_PHONE_DISPLAY,
  PLANTAO_PHONE_DISPLAY,
  createWorkshopWhatsAppLink,
  createPlantaoWhatsAppLink
} from '../utils/emergency';

interface HeroProps {
  onOpenEmergency: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEmergency, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-carbon text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-zinc-800">
      {/* Background automotive accents and red/yellow brush glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-yellow-500/15 blur-3xl pointer-events-none" />
      
      {/* Dynamic diagonal racing lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_24px)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-600/60 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-yellow-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                Santo Antônio da Patrulha • RS • Brasil
              </span>
            </div>

            {/* Main Brand Title & Taglines */}
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-zinc-300 uppercase font-heading">
                OFICINA & SOCORRO MECÂNICO
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight uppercase leading-[0.9] mt-1 text-white">
                MECÂNICO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-yellow-400">RAFA MORO</span>
              </h1>
            </div>

            {/* Emergency Ribbon Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 border-l-8 border-red-600 border-y border-r border-zinc-800 shadow-2xl">
              <div className="flex items-center gap-2 text-yellow-400 font-black text-xl sm:text-2xl md:text-3xl uppercase font-heading tracking-wide">
                <AlertTriangle className="w-7 h-7 text-yellow-400 shrink-0" />
                <span>OFICINA & PLANTÃO DE EMERGÊNCIA</span>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black italic tracking-wide text-white uppercase font-heading mt-1">
                ESTAMOS ONDE VOCÊ PRECISA!
              </p>
              <p className="text-sm sm:text-base text-gray-300 font-medium mt-2 leading-relaxed">
                Mecânica e elétrica automotiva com atendimento profissional. Oficina física de segunda a sexta (08:30–12:00 e 13:30–19:00) e plantão após as 19h para você não ficar na mão.
              </p>
            </div>

            {/* 2 Big Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                onClick={onOpenEmergency}
                className="group relative inline-flex flex-col items-center justify-center gap-0.5 px-6 py-3.5 rounded-xl text-white font-black uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-600 hover:to-red-500 shadow-xl shadow-red-700/40 border-2 border-yellow-400/80 hover:border-yellow-300 transform hover:-translate-y-1 transition-all"
                aria-label={`Solicitar Socorro 24h pelo Plantão ${PLANTAO_PHONE_DISPLAY}`}
              >
                <span className="flex items-center gap-2 text-base sm:text-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-300 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="drop-shadow-md">SOLICITAR SOCORRO 24H</span>
                </span>
                <span className="text-xs font-extrabold text-yellow-300 tracking-wide">
                  Plantão: {PLANTAO_PHONE_DISPLAY}
                </span>
              </button>

              <a
                href={createWorkshopWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex flex-col items-center justify-center gap-0.5 px-6 py-3.5 rounded-xl text-white font-black uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 shadow-xl shadow-emerald-700/30 border-2 border-emerald-400/60 transform hover:-translate-y-1 transition-all"
                aria-label={`WhatsApp da Oficina Horário Comercial ${WORKSHOP_PHONE_DISPLAY}`}
              >
                <span className="flex items-center gap-2 text-base sm:text-lg">
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform shrink-0" />
                  <span>WHATSAPP DA OFICINA</span>
                </span>
                <span className="text-xs font-extrabold text-emerald-100 tracking-wide">
                  Horário Comercial: {WORKSHOP_PHONE_DISPLAY}
                </span>
              </a>
            </div>

            {/* Trust Badges: CONFIANÇA | EXPERIÊNCIA | QUALIDADE */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <ShieldCheck className="w-6 h-6 text-yellow-400 mb-1" />
                <span className="text-xs sm:text-sm font-black font-heading text-white uppercase tracking-wider">
                  CONFIANÇA
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 hidden sm:inline">
                  Transparência total
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Wrench className="w-6 h-6 text-red-500 mb-1" />
                <span className="text-xs sm:text-sm font-black font-heading text-white uppercase tracking-wider">
                  EXPERIÊNCIA
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 hidden sm:inline">
                  Mecânica & Elétrica
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Award className="w-6 h-6 text-yellow-400 mb-1" />
                <span className="text-xs sm:text-sm font-black font-heading text-white uppercase tracking-wider">
                  QUALIDADE
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 hidden sm:inline">
                  Peças de 1ª Linha
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Shield Logo & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 via-yellow-500/20 to-red-700/30 rounded-3xl blur-2xl transform scale-95" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-zinc-950/90 border-2 border-red-600/50 p-6 sm:p-8 shadow-2xl text-center backdrop-blur-sm">
                
                {/* Official Shield Logo */}
                <div className="mb-4 flex justify-center">
                  <img
                    src="/assets/aistudio/LOGO_RGB_6026b6ff.png"
                    alt="Logo Mecânico Rafa Moro Oficial em Escudo"
                    className="max-h-56 sm:max-h-64 w-auto object-contain drop-shadow-[0_10px_28px_rgba(220,38,38,0.65)]"
                  />
                </div>

                {/* Subtitle Badge */}
                <div className="racing-border pb-3 mb-4">
                  <p className="text-lg sm:text-xl font-black font-heading text-white uppercase tracking-wide">
                    SEU CARRO EM BOAS MÃOS SEMPRE!
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-400 font-semibold uppercase mt-0.5">
                    Oficina Física & Plantão Emergencial
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
                    <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-bold uppercase">
                      <Clock className="w-3.5 h-3.5" /> Oficina (Seg–Sex)
                    </div>
                    <p className="text-xs sm:text-sm font-black text-white mt-0.5">08:30–12:00</p>
                    <p className="text-xs sm:text-sm font-black text-white">13:30–19:00</p>
                  </div>

                  <div className="bg-zinc-900/80 p-3 rounded-lg border border-red-900/60">
                    <div className="flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase">
                      <Zap className="w-3.5 h-3.5" /> Plantão
                    </div>
                    <p className="text-xs sm:text-sm font-black text-white mt-0.5">Após 19:00</p>
                    <p className="text-[10px] text-gray-400">Fora do horário comercial</p>
                  </div>
                </div>

                {/* Direct Contact buttons */}
                <div className="mt-4 space-y-2">
                  <a
                    href={createWorkshopWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-emerald-400 font-black text-xs sm:text-sm uppercase py-2.5 px-4 rounded-lg border border-emerald-500/40 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>OFICINA (COMERCIAL): {WORKSHOP_PHONE_DISPLAY}</span>
                  </a>

                  <a
                    href={createPlantaoWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-red-950/70 hover:bg-red-900/80 text-yellow-400 font-black text-xs sm:text-sm uppercase py-2.5 px-4 rounded-lg border border-red-500/50 transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4 text-red-500 shrink-0" />
                    <span>PLANTÃO (APÓS 19H): {PLANTAO_PHONE_DISPLAY}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
    </svg>
  );
}
