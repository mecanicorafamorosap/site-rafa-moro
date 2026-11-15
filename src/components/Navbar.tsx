import React, { useState } from 'react';
import { Phone, AlertTriangle, Menu, X, ShieldAlert, MessageCircle, Wrench, MapPin } from 'lucide-react';
import {
  WORKSHOP_PHONE_DISPLAY,
  PLANTAO_PHONE_DISPLAY,
  createWorkshopWhatsAppLink
} from '../utils/emergency';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'socorro', label: 'Socorro 24h', isEmergency: true },
    { id: 'parceiros', label: 'Parceiros' },
    { id: 'trabalhos', label: 'Serviços Já Feitos' },
    { id: 'videos', label: 'Vídeos e Dicas' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090a0d]/95 backdrop-blur-md border-b-2 border-red-600/40 shadow-2xl">
      {/* Top schedule & contact announcement bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-500 text-white text-xs md:text-sm font-bold py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
            </span>
            <span className="tracking-wide uppercase text-[11px] sm:text-xs">
              Oficina: Seg–Sex 08:30–12:00 / 13:30–19:00 • Após 19h: Plantão
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="hidden xl:inline-flex items-center gap-1 text-yellow-100">
              <MapPin className="w-3.5 h-3.5" /> Rua José Juvenal Soares, 94
            </span>
            <a
              href={createWorkshopWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:text-yellow-200 transition-colors bg-black/35 px-2 py-0.5 rounded whitespace-nowrap"
              title="WhatsApp da Oficina (Horário Comercial)"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" /> Oficina: {WORKSHOP_PHONE_DISPLAY}
            </a>
            <a
              href="tel:51994192142"
              className="flex items-center gap-1 text-white hover:text-yellow-200 transition-colors bg-black/45 px-2 py-0.5 rounded whitespace-nowrap border border-yellow-300/40"
              title="Telefone e WhatsApp do Plantão (Fora do Horário Comercial)"
            >
              <Phone className="w-3 h-3 text-yellow-400" /> Plantão: {PLANTAO_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-3 h-20">
          {/* Logo Oficial em Escudo sem recorte */}
          <button
            onClick={() => handleLinkClick('inicio')}
            className="flex items-center gap-2 text-left group focus:outline-none shrink-0"
            aria-label="Página Inicial Mecânico Rafa Moro"
          >
            <img
              src="/assets/aistudio/LOGO_RGB_6026b6ff.png"
              alt="Logo Oficial Mecânico Rafa Moro em Escudo"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_4px_12px_rgba(220,38,38,0.55)] transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block whitespace-nowrap">
              <span className="block text-sm xl:text-base font-black text-white font-heading tracking-wide leading-tight">
                MECÂNICO <span className="text-red-500">RAFA MORO</span>
              </span>
              <span className="block text-[9px] xl:text-[10px] text-yellow-400 font-bold uppercase tracking-wide mt-0.5">
                Oficina Mecânica & Plantão 24h
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 min-w-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-1.5 xl:px-2 py-2 text-[11px] xl:text-xs font-black uppercase tracking-normal xl:tracking-wide transition-all rounded-md relative whitespace-nowrap shrink-0 ${
                  activeSection === item.id
                    ? item.isEmergency
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/40'
                      : 'text-yellow-400 bg-white/5'
                    : item.isEmergency
                    ? 'text-red-400 hover:text-white hover:bg-red-600/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.isEmergency && <span className="inline-block mr-1 animate-pulse">🚨</span>}
                {item.label}
                {activeSection === item.id && !item.isEmergency && (
                  <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-yellow-400" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-1.5 xl:gap-2 shrink-0">
            <button
              onClick={() => handleLinkClick('socorro')}
              className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-[11px] xl:text-xs uppercase tracking-wide px-2.5 xl:px-3 py-2 rounded-md shadow-lg shadow-red-600/30 border border-red-500/50 hover:shadow-red-600/60 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <AlertTriangle className="w-4 h-4 text-yellow-300 animate-bounce shrink-0" />
              <span>SOCORRO 24H</span>
            </button>

            <a
              href={createWorkshopWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] xl:text-xs uppercase tracking-wide px-2.5 xl:px-3 py-2 rounded-md shadow-md transition-all border border-emerald-400/40 whitespace-nowrap shrink-0"
              aria-label="Abrir WhatsApp Comercial Mecânico Rafa Moro"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
              <span className="hidden xl:inline">WHATSAPP</span>
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none bg-zinc-900 border border-zinc-800 rounded-md"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6 text-yellow-400" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-t border-zinc-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-md text-base font-bold uppercase tracking-wider flex items-center justify-between ${
                activeSection === item.id
                  ? item.isEmergency
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-900 text-yellow-400 border-l-4 border-yellow-400'
                  : item.isEmergency
                  ? 'bg-red-950/40 text-red-400 border border-red-900/50'
                  : 'text-gray-300 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <span>
                {item.isEmergency && '🚨 '}
                {item.label}
              </span>
              {item.isEmergency && (
                <span className="text-[11px] bg-red-800 text-white px-2 py-0.5 rounded font-bold uppercase">
                  24 Horas
                </span>
              )}
            </button>
          ))}

          <div className="pt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleLinkClick('socorro')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase py-2.5 px-2 rounded-md flex flex-col items-center justify-center gap-0.5 shadow-lg shadow-red-600/40"
            >
              <span className="flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                SOCORRO 24H
              </span>
              <span className="text-[10px] font-bold text-yellow-200">{PLANTAO_PHONE_DISPLAY}</span>
            </button>
            <a
              href={createWorkshopWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase py-2.5 px-2 rounded-md flex flex-col items-center justify-center gap-0.5"
            >
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                WHATSAPP OFICINA
              </span>
              <span className="text-[10px] font-semibold text-emerald-100">{WORKSHOP_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
