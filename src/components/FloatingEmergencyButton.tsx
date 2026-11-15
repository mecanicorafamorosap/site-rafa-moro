import React from 'react';
import { AlertTriangle, Phone, MessageCircle } from 'lucide-react';
import {
  WORKSHOP_PHONE_DISPLAY,
  PLANTAO_PHONE_DISPLAY,
  isCommercialHours,
  createQuickEmergencyLink,
  createWorkshopWhatsAppLink
} from '../utils/emergency';

interface FloatingEmergencyButtonProps {
  onOpenEmergency: () => void;
}

export const FloatingEmergencyButton: React.FC<FloatingEmergencyButtonProps> = ({ onOpenEmergency }) => {
  const activeChannel = isCommercialHours() ? 'comercial' : 'plantao';

  return (
    <>
      {/* Mobile Fixed Bottom Emergency Bar (always visible while scrolling) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-zinc-950/95 border-t-2 border-red-600 p-2.5 backdrop-blur-md shadow-2xl flex items-center gap-2">
        <button
          onClick={onOpenEmergency}
          className="flex-1 bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase tracking-wider py-2.5 px-2 rounded-xl shadow-lg shadow-red-600/40 border border-yellow-400 flex items-center justify-center gap-1.5"
          aria-label={`Solicitar socorro 24h pelo plantão ${PLANTAO_PHONE_DISPLAY}`}
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-300"></span>
          </span>
          <AlertTriangle className="w-4 h-4 text-yellow-300 shrink-0" />
          <span>SOCORRO 24H • {PLANTAO_PHONE_DISPLAY}</span>
        </button>

        <a
          href={createQuickEmergencyLink(activeChannel)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl shadow-lg border border-emerald-400 flex items-center justify-center shrink-0"
          aria-label="Abrir WhatsApp para atendimento"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        </a>

        <a
          href="tel:51994192142"
          className="bg-zinc-900 hover:bg-zinc-800 text-yellow-400 p-3 rounded-xl border border-zinc-700 flex items-center justify-center shrink-0"
          aria-label={`Ligar diretamente para plantão ${PLANTAO_PHONE_DISPLAY}`}
        >
          <Phone className="w-5 h-5 text-red-500" />
        </a>
      </div>

      {/* Desktop Floating Action Badge */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        <a
          href={createWorkshopWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-full shadow-2xl transition-all transform hover:-translate-x-1 border border-emerald-400/50"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>WhatsApp Oficina: {WORKSHOP_PHONE_DISPLAY}</span>
        </a>

        <button
          onClick={onOpenEmergency}
          className="group relative flex items-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-sm uppercase px-5 py-3.5 rounded-full shadow-2xl shadow-red-600/50 border-2 border-yellow-400 transition-all transform hover:-translate-y-1 hover:scale-105"
          aria-label={`Solicitar socorro 24 horas pelo plantão ${PLANTAO_PHONE_DISPLAY}`}
        >
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
          </span>
          <AlertTriangle className="w-5 h-5 text-yellow-300" />
          <span className="tracking-wide">SOCORRO 24H • {PLANTAO_PHONE_DISPLAY}</span>
        </button>
      </div>
    </>
  );
};
