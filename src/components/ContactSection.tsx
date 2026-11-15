import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ShieldCheck,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import {
  WORKSHOP_PHONE_DISPLAY,
  PLANTAO_PHONE_DISPLAY,
  MECHANIC_ADDRESS,
  MECHANIC_CITY,
  createWorkshopWhatsAppLink,
  createPlantaoWhatsAppLink
} from '../utils/emergency';

export const ContactSection: React.FC = () => {
  const mapsEmbedUrl =
    'https://www.google.com/maps?q=Rua+Jose+Juvenal+Soares+94+Santo+Antonio+da+Patrulha+RS&output=embed';
  const mapsExternalUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Jose+Juvenal+Soares+94+Santo+Antonio+da+Patrulha+RS';
  const wazeUrl =
    'https://waze.com/ul?q=Rua+Jose+Juvenal+Soares+94+Santo+Antonio+da+Patrulha';

  return (
    <section id="contato" className="py-16 bg-carbon-dark text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-red-600/60 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>LOCALIZAÇÃO E ATENDIMENTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            FALE COM O <span className="text-red-500">MECÂNICO RAFA MORO</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Estamos prontos para lhe atender na oficina ou onde o seu carro estiver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-zinc-950 rounded-2xl border-2 border-red-600/40 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="racing-border pb-3">
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  MECÂNICO RAFA MORO
                </h3>
                <p className="text-xs text-yellow-400 font-semibold uppercase">
                  Mecânica, Elétrica Automotiva & Socorro 24 Horas
                </p>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-600/50 text-red-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-gray-400 block">Endereço da Oficina</span>
                  <p className="text-base font-bold text-white mt-0.5">{MECHANIC_ADDRESS}</p>
                  <p className="text-sm text-yellow-400 font-medium">{MECHANIC_CITY} – Brasil</p>
                </div>
              </div>

              {/* WhatsApp Comercial & Plantão */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-400 block">
                      Oficina — Horário Comercial (WhatsApp)
                    </span>
                    <a
                      href={createWorkshopWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-black font-heading text-white hover:text-yellow-400 transition-colors block mt-0.5"
                    >
                      {WORKSHOP_PHONE_DISPLAY}
                    </a>
                    <p className="text-xs text-gray-400">
                      Segunda a Sexta: 08:30 às 12:00 e 13:30 às 19:00
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-800">
                    <span className="text-xs font-bold uppercase text-red-400 block">
                      Plantão — Fora do Horário Comercial (Tel & WhatsApp)
                    </span>
                    <a
                      href="tel:51994192142"
                      className="text-xl font-black font-heading text-yellow-400 hover:text-white transition-colors block mt-0.5"
                    >
                      {PLANTAO_PHONE_DISPLAY}
                    </a>
                    <p className="text-xs text-gray-400">
                      Após as 19:00 e fora do horário comercial
                    </p>
                  </div>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-yellow-950/80 border border-yellow-500/50 text-yellow-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-gray-400 block">Horário de Funcionamento</span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Oficina Física: Segunda a Sexta, das 08:30 às 12:00 e das 13:30 às 19:00
                  </p>
                  <p className="text-xs text-red-400 font-black uppercase mt-1">
                    🚨 Após as 19:00 e fora do horário comercial: Plantão pelo {PLANTAO_PHONE_DISPLAY}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={createWorkshopWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase py-3.5 px-3 rounded-xl shadow-lg transition-all border border-emerald-400/50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Oficina</span>
                  </a>

                  <a
                    href={createPlantaoWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase py-3.5 px-3 rounded-xl shadow-lg shadow-red-600/30 transition-all border border-yellow-400/50"
                  >
                    <AlertTriangle className="w-4 h-4 text-yellow-300" />
                    <span>WhatsApp Plantão</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={mapsExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-zinc-700 font-bold text-xs uppercase py-2.5 px-3 rounded-lg transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-red-500" />
                    <span>Google Maps</span>
                  </a>

                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-zinc-700 font-bold text-xs uppercase py-2.5 px-3 rounded-lg transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-emerald-400" />
                    <span>Abrir no Waze</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-zinc-950 rounded-2xl border-2 border-zinc-800 overflow-hidden shadow-2xl h-[420px] sm:h-[480px] relative">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização Oficina Mecânico Rafa Moro em Santo Antônio da Patrulha RS"
                className="w-full h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/95 border border-red-600/60 p-3 rounded-xl backdrop-blur-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-yellow-400 font-bold block">Oficina Mecânico Rafa Moro</span>
                  <span className="text-[11px] text-gray-300">Rua José Juvenal Soares, 94 – Sto. Antônio da Patrulha</span>
                </div>
                <a
                  href={mapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase px-3 py-1.5 rounded transition-colors"
                >
                  Traçar Rota
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
