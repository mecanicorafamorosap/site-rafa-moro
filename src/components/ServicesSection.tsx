import React, { useState } from 'react';
import {
  Wrench,
  Zap,
  Flame,
  Gauge,
  CheckCircle2,
  Phone,
  MessageCircle,
  Shield,
  ArrowRight
} from 'lucide-react';
import { AUTO_SERVICES, AutoService } from '../data/servicesData';
import { MECHANIC_PHONE_CLEAN } from '../utils/emergency';

interface ServicesSectionProps {
  onSelectService?: (service: AutoService) => void;
  onOpenEmergency?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenEmergency }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filtered =
    activeCategory === 'todos'
      ? AUTO_SERVICES
      : AUTO_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-16 bg-carbon text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-red-600 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-red-500" />
            <span>SOLUÇÕES COMPLETAS DE OFICINA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            NOSSOS <span className="text-red-500">SERVIÇOS ESPECIALIZADOS</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Da manutenção preventiva ao socorro emergencial na pista: diagnóstico de precisão, mão de obra experiente e peças certificadas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'todos', label: 'Todos os Serviços' },
            { id: 'socorro', label: '🚨 Socorro 24 Horas' },
            { id: 'arrefecimento', label: 'Sistema de Arrefecimento' },
            { id: 'mecanica', label: 'Mecânica Geral & Motores' },
            { id: 'eletrica', label: 'Elétrica & Injeção' },
            { id: 'revisao', label: 'Revisão Pré-Viagem' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 border border-yellow-400/60'
                  : 'bg-zinc-900/90 text-gray-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-950 rounded-2xl border border-zinc-800 hover:border-red-600/70 transition-all flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white font-black text-xs uppercase px-2.5 py-1 rounded shadow-md tracking-wider font-heading">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black font-heading text-white uppercase group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-zinc-800/80">
                    <span className="text-[11px] font-bold uppercase text-yellow-400 block mb-2">
                      Destaques do Serviço:
                    </span>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <a
                    href={`https://wa.me/${MECHANIC_PHONE_CLEAN}?text=${encodeURIComponent(
                      `Olá Rafa Moro! Gostaria de um orçamento para o serviço: ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg shadow-red-600/30 transition-all border border-yellow-400/40"
                  >
                    <MessageCircle className="w-4 h-4 text-yellow-300" />
                    <span>CONSULTAR OU AGENDAR</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
