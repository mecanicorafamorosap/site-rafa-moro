import React from 'react';
import { Phone, MapPin, MessageCircle, AlertTriangle, ShieldCheck, Clock, Heart } from 'lucide-react';
import {
  WORKSHOP_PHONE_DISPLAY,
  PLANTAO_PHONE_DISPLAY,
  MECHANIC_ADDRESS,
  MECHANIC_CITY,
  createWorkshopWhatsAppLink,
  createPlantaoWhatsAppLink
} from '../utils/emergency';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-gray-400 border-t-4 border-red-600 relative overflow-hidden">
      {/* Background glowing red accent */}
      <div className="absolute top-0 right-1/4 w-80 h-32 bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Logo & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/LOGO_RGB_6026b6ff.png"
                alt="Logo Oficial Mecânico Rafa Moro em Escudo"
                className="h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(220,38,38,0.5)]"
              />
              <div>
                <span className="text-xl font-black font-heading text-white block">
                  MECÂNICO <span className="text-red-500">RAFA MORO</span>
                </span>
                <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider block">
                  Seu carro em boas mãos sempre!
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Oficina mecânica e elétrica automotiva de alta precisão (Seg a Sex, 08:30–12:00 e 13:30–19:00) com plantão fora do horário comercial em Santo Antônio da Patrulha e região.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <span>Confiança • Experiência • Qualidade</span>
            </div>
          </div>

          {/* Col 2: Navegação Rápida */}
          <div>
            <h4 className="text-sm font-black font-heading text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'inicio', label: 'Página Inicial' },
                { id: 'servicos', label: 'Serviços Especializados' },
                { id: 'socorro', label: '🚨 Socorro Emergencial 24h' },
                { id: 'parceiros', label: 'Rede de Parceiros' },
                { id: 'videos', label: 'Vídeos Educativos & Dicas' },
                { id: 'contato', label: 'Localização & Contato' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-yellow-400 transition-colors text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Serviços e Socorro */}
          <div>
            <h4 className="text-sm font-black font-heading text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Atendimento Especializado
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-1.5 text-white font-semibold">
                <span className="text-red-500">✓</span> Plantão & Socorro 24h
              </li>
              <li>
                <span className="text-red-500">✓</span> Sistema de Arrefecimento
              </li>
              <li>
                <span className="text-red-500">✓</span> Elétrica & Injeção Eletrônica
              </li>
              <li>
                <span className="text-red-500">✓</span> Mecânica Geral & Motores
              </li>
              <li>
                <span className="text-red-500">✓</span> Revisão Preventiva Pré-Viagem
              </li>
              <li>
                <span className="text-red-500">✓</span> Acionamento de Guincho Parceiro
              </li>
            </ul>
          </div>

          {/* Col 4: Contato Oficial */}
          <div className="space-y-3">
            <h4 className="text-sm font-black font-heading text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Horários e Contatos
            </h4>
            
            <div className="text-xs space-y-2">
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{MECHANIC_ADDRESS}, {MECHANIC_CITY}</span>
              </p>

              <p className="flex items-start gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Oficina: Seg a Sex, 08:30–12:00 e 13:30–19:00</span>
              </p>

              <p className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Oficina (WhatsApp): {WORKSHOP_PHONE_DISPLAY}</span>
              </p>

              <p className="flex items-center gap-2 text-red-400 font-bold">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>Plantão (após 19h): {PLANTAO_PHONE_DISPLAY}</span>
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 gap-2">
              <a
                href={createWorkshopWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase py-2.5 px-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Oficina</span>
              </a>
              <a
                href={createPlantaoWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase py-2.5 px-3 rounded-lg transition-colors"
              >
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                <span>WhatsApp Plantão (Após 19h)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} MECÂNICO RAFA MORO. Todos os direitos reservados. Santo Antônio da Patrulha – RS.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-gray-400">Desenvolvido com excelência técnica automotiva</span>
            <button
              onClick={() => onNavigate('socorro')}
              className="text-red-500 hover:underline font-bold uppercase"
            >
              Socorro 24H
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
