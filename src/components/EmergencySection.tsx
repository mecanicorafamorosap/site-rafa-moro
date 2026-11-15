import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  MapPin,
  Navigation,
  Send,
  MessageCircle,
  Clock,
  Shield,
  Truck,
  Hotel,
  CheckCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import {
  EmergencyRequest,
  PROBLEM_TYPES,
  WORKSHOP_PHONE_DISPLAY,
  PLANTAO_PHONE_DISPLAY,
  ContactChannel,
  isCommercialHours,
  createWhatsAppEmergencyLink,
  createWorkshopWhatsAppLink,
  createPlantaoWhatsAppLink,
  buildMapsUrl
} from '../utils/emergency';

export const EmergencySection: React.FC = () => {
  const [formData, setFormData] = useState<Partial<EmergencyRequest>>({
    clientName: '',
    phone: '',
    vehicleModel: '',
    problemType: PROBLEM_TYPES[0],
    locationAddress: '',
    city: 'Santo Antônio da Patrulha',
    description: '',
  });

  const [channel, setChannel] = useState<ContactChannel>(() =>
    isCommercialHours() ? 'comercial' : 'plantao'
  );
  const [geoStatus, setGeoStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [geoErrorMsg, setGeoErrorMsg] = useState('');
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  // Handle GPS location capture
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus('error');
      setGeoErrorMsg('Geolocalização não é suportada pelo seu navegador. Por favor, digite o ponto de referência.');
      return;
    }

    setGeoStatus('loading');
    setGeoErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        setFormData((prev) => ({
          ...prev,
          coords,
          locationAddress: prev.locationAddress
            ? prev.locationAddress
            : `Coordenadas GPS: ${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`,
        }));
        setGeoStatus('success');
      },
      (err) => {
        setGeoStatus('error');
        setGeoErrorMsg(
          err.code === 1
            ? 'Permissão de localização negada. Digite seu endereço ou ponto de referência manualmente.'
            : 'Não foi possível obter o sinal de GPS. Digite o ponto de referência.'
        );
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = createWhatsAppEmergencyLink(formData, channel);
    setSubmittedLink(link);
    // Open WhatsApp in new tab
    window.open(link, '_blank');
  };

  const steps = [
    {
      num: 'ETAPA 1',
      title: 'Cliente solicita atendimento',
      desc: 'Você envia sua solicitação via formulário ou WhatsApp com o modelo do carro e localização onde está parado.',
      icon: MessageCircle,
      color: 'border-red-600 text-red-500',
    },
    {
      num: 'ETAPA 2',
      title: 'Mecânico Rafa Moro recebe a solicitação',
      desc: 'O mecânico analisa a gravidade da pane, avalia ferramentas necessárias e confirma o deslocamento com você.',
      icon: Shield,
      color: 'border-yellow-500 text-yellow-400',
    },
    {
      num: 'ETAPA 3',
      title: 'Atendimento no local',
      desc: 'Deslocamento rápido até o local da pane na rodovia ou atendimento direto na oficina para diagnóstico e solução imediata.',
      icon: Navigation,
      color: 'border-red-600 text-red-500',
    },
    {
      num: 'ETAPA 4',
      title: 'Se não for possível resolver no local, acionar o parceiro de guincho',
      desc: 'Caso a falha exija elevador ou desmontagem pesada, o parceiro de guincho conveniado é acionado.',
      icon: Truck,
      color: 'border-yellow-500 text-yellow-400',
    },
    {
      num: 'ETAPA 5',
      title: 'Transporte do veículo até a oficina',
      desc: 'O carro é transportado em plataforma rebaixada com total segurança até a oficina Rafa Moro para reparo completo.',
      icon: CheckCircle,
      color: 'border-red-600 text-red-500',
    },
    {
      num: 'ETAPA 6',
      title: 'Se necessário, orientar sobre hospedagem nos hotéis e pousadas parceiros',
      desc: 'Para motoristas em trânsito ou famílias em viagem, orientamos acomodação nos hotéis e pousadas conveniados.',
      icon: Hotel,
      color: 'border-yellow-500 text-yellow-400',
    },
  ];

  return (
    <section id="socorro" className="py-16 bg-carbon text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Alert */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950 border-2 border-red-600 text-yellow-300 font-black text-sm uppercase tracking-wider mb-4 animate-pulse">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span>ATENDIMENTO EMERGENCIAL 24 HORAS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading uppercase text-white tracking-tight leading-tight">
            FICOU NA ESTRADA? NÃO SE PREOCUPE!{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              ESTAMOS AQUI PARA AJUDAR.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Socorro rápido em Santo Antônio da Patrulha, Freeway (BR-290), RS-030 e cidades vizinhas.
          </p>

          {/* Direct Quick WhatsApp & Phone Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={createPlantaoWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-sm sm:text-base uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-xl shadow-red-700/40 border-2 border-yellow-400 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 text-yellow-300" />
              <span>PLANTÃO (APÓS 19H): {PLANTAO_PHONE_DISPLAY}</span>
            </a>

            <a
              href={createWorkshopWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-xl shadow-emerald-700/40 border-2 border-emerald-400 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>OFICINA (SEG–SEX): {WORKSHOP_PHONE_DISPLAY}</span>
            </a>

            <a
              href="tel:51994192142"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 font-black text-sm sm:text-base uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-lg border border-yellow-400/40 transition-all"
            >
              <Phone className="w-5 h-5 text-red-500" />
              <span>LIGAR PLANTÃO: {PLANTAO_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Emergency Form Box & GPS Sharer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-zinc-950/95 rounded-2xl border-2 border-red-600/70 p-6 sm:p-8 shadow-2xl relative">
            <div className="racing-border pb-4 mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
                  FORMULÁRIO DE SOCORRO RÁPIDO
                </h3>
                <p className="text-xs text-yellow-400 font-semibold mt-0.5">
                  Preencha para enviar os dados completos direto para o WhatsApp do mecânico
                </p>
              </div>
              <span className="bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded uppercase shrink-0">
                {channel === 'plantao' ? 'PLANTÃO' : 'COMERCIAL'}
              </span>
            </div>

            {/* Channel Selector */}
            <div className="mb-5">
              <span className="block text-xs font-bold uppercase text-gray-300 mb-2">
                Destino do Atendimento *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setChannel('plantao')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    channel === 'plantao'
                      ? 'bg-red-950/90 border-yellow-400 text-white shadow-lg shadow-red-900/40'
                      : 'bg-zinc-900/70 border-zinc-700 text-gray-300 hover:border-zinc-500'
                  }`}
                >
                  <span className="block text-xs font-black uppercase text-yellow-400">
                    🚨 Plantão (Fora do Horário)
                  </span>
                  <span className="block text-[11px] text-gray-300 mt-0.5">
                    Após 19:00 e FDS • {PLANTAO_PHONE_DISPLAY}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setChannel('comercial')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    channel === 'comercial'
                      ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-lg shadow-emerald-900/30'
                      : 'bg-zinc-900/70 border-zinc-700 text-gray-300 hover:border-zinc-500'
                  }`}
                >
                  <span className="block text-xs font-black uppercase text-emerald-400">
                    🔧 Oficina (Horário Comercial)
                  </span>
                  <span className="block text-[11px] text-gray-300 mt-0.5">
                    Seg–Sex 08:30–12h / 13:30–19h • {WORKSHOP_PHONE_DISPLAY}
                  </span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                    Telefone com WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(51) 99999-9999"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                    Modelo do Veículo (Ano/Versão) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    placeholder="Ex: Ford Focus 2.0 / Gol G5 / Hilux"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                    Problema Apresentado *
                  </label>
                  <select
                    value={formData.problemType}
                    onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-red-500 text-sm"
                  >
                    {PROBLEM_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Santo Antônio da Patrulha"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                    Localização Onde o Veículo Está Parado *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={formData.locationAddress}
                      onChange={(e) => setFormData({ ...formData, locationAddress: e.target.value })}
                      placeholder="Ex: Km 38 da Freeway BR-290 sentido litoral / Posto..."
                      className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleGetLocation}
                      disabled={geoStatus === 'loading'}
                      className="px-3.5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-yellow-400 border border-yellow-400/40 text-xs font-bold uppercase flex items-center gap-1.5 shrink-0 transition-colors"
                      title="Usar coordenadas do meu GPS"
                    >
                      <Navigation className={`w-4 h-4 ${geoStatus === 'loading' ? 'animate-spin' : ''}`} />
                      <span>{geoStatus === 'loading' ? 'Obtendo...' : 'GPS'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Geo Status notification */}
              {geoStatus === 'success' && formData.coords && (
                <div className="p-2.5 rounded bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs flex items-center justify-between">
                  <span>📍 GPS capturado: {formData.coords.latitude.toFixed(5)}, {formData.coords.longitude.toFixed(5)}</span>
                  <a
                    href={buildMapsUrl(formData.coords.latitude, formData.coords.longitude)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-yellow-300 font-bold"
                  >
                    Ver no Maps
                  </a>
                </div>
              )}
              {geoStatus === 'error' && (
                <div className="p-2.5 rounded bg-red-950/80 border border-red-600 text-red-300 text-xs">
                  {geoErrorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                  Descrição do Problema (O que aconteceu?) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Ex: O motor começou a falhar, subiu fumaça branca do capô e acendeu a luz da temperatura..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-base uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl shadow-red-700/50 border-2 border-yellow-400 flex items-center justify-center gap-3 transition-transform transform active:scale-98"
                >
                  <Send className="w-5 h-5 text-yellow-300" />
                  <span>ENVIAR SOLICITAÇÃO & ABRIR NO WHATSAPP</span>
                </button>
              </div>

              <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>
                  Ao clicar, você será redirecionado para o WhatsApp {channel === 'plantao' ? `do Plantão (${PLANTAO_PHONE_DISPLAY})` : `da Oficina (${WORKSHOP_PHONE_DISPLAY})`} com a mensagem pronta.
                </span>
              </div>

              {submittedLink && (
                <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between gap-2">
                  <span>Mensagem preparada para {channel === 'plantao' ? PLANTAO_PHONE_DISPLAY : WORKSHOP_PHONE_DISPLAY}.</span>
                  <a
                    href={submittedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-yellow-300 shrink-0"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* Right: Emergency Advice & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 shadow-xl">
              <h4 className="text-lg font-black font-heading text-white uppercase flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                <span>O QUE FAZER ENQUANTO AGUARDA:</span>
              </h4>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <span>Estacione em local seguro no acostamento ou refúgio e ligue o pisca-alerta imediatamente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <span>Posicione o triângulo de sinalização a pelo menos 30 metros da traseira do carro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <span className="text-red-400 font-semibold">
                    Se houver fumaça ou superaquecimento, NUNCA abra a tampa do radiador ou reservatório!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <span>Permaneça em local seguro (fora da pista, preferencialmente atrás da defensa metálica).</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer box as explicitly instructed: no automatic tow dispatch */}
            <div className="bg-red-950/40 rounded-xl border border-red-800/80 p-5 text-xs text-gray-300 space-y-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase text-xs">
                <Info className="w-4 h-4 text-red-500 shrink-0" />
                <span>AVISO IMPORTANTE SOBRE O ATENDIMENTO</span>
              </div>
              <p className="leading-relaxed">
                Todo atendimento e eventual acionamento de guincho parceiro depende de confirmação humana direta entre o Mecânico Rafa Moro e o cliente. Não existe despacho automático de serviços ou cobranças sem o prévio alinhamento de detalhes e orçamento.
              </p>
            </div>

            {/* Direct Phone box */}
            <div className="bg-gradient-to-r from-red-900/40 to-zinc-900 rounded-xl border border-red-600/50 p-5 space-y-3">
              <div className="text-center border-b border-zinc-800 pb-3">
                <p className="text-xs text-red-400 font-bold uppercase">
                  Plantão (Após 19:00 e Fins de Semana)
                </p>
                <a
                  href="tel:51994192142"
                  className="mt-1 block text-2xl font-black font-heading text-yellow-400 hover:text-white transition-colors"
                >
                  {PLANTAO_PHONE_DISPLAY}
                </a>
                <p className="text-[11px] text-gray-400">Telefone e WhatsApp de Plantão</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-emerald-400 font-bold uppercase">
                  Oficina Física (Seg–Sex 08:30–12h / 13:30–19h)
                </p>
                <a
                  href={createWorkshopWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-xl font-black font-heading text-white hover:text-yellow-400 transition-colors"
                >
                  {WORKSHOP_PHONE_DISPLAY}
                </a>
                <p className="text-[11px] text-gray-400">WhatsApp Horário Comercial • Sto. Antônio da Patrulha</p>
              </div>
            </div>

          </div>

        </div>

        {/* Section: 6 ETAPAS DO ATENDIMENTO */}
        <div className="mt-16 pt-12 border-t border-zinc-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-1">
              PROCESSO TRANSPARENTE E SEGURO
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white">
              COMO FUNCIONA O SOCORRO MECÂNICO (6 ETAPAS)
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Saiba exatamente o que acontece desde a sua ligação até a resolução completa do problema.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st) => {
              const IconComp = st.icon;
              return (
                <div
                  key={st.num}
                  className="bg-zinc-950/80 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-red-600/60 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-yellow-400 font-heading tracking-wider">
                        {st.num}
                      </span>
                      <IconComp className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-lg font-black font-heading text-white uppercase mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
