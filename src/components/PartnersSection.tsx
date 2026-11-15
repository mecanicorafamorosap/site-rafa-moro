import React, { useState } from 'react';
import {
  Truck,
  Hotel,
  Home,
  Sparkles,
  Disc,
  Phone,
  MessageCircle,
  MapPin,
  Edit3,
  Percent,
  CheckCircle2,
  ExternalLink,
  Save,
  X,
  AlertCircle
} from 'lucide-react';
import {
  Partner,
  DEFAULT_PARTNERS,
  getStoredPartners,
  saveStoredPartners,
  calculateCarWashDiscount
} from '../utils/partners';

export const PartnersSection: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>(() => getStoredPartners());
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  
  // Quick test state for the 30% car wash discount calculator
  const [washBasePrice, setWashBasePrice] = useState<number>(80);
  const discountCalculation = calculateCarWashDiscount(washBasePrice, 30);

  const handleEditClick = (p: Partner) => {
    setEditingPartner({ ...p });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner) return;
    const updated = partners.map((p) => (p.id === editingPartner.id ? editingPartner : p));
    setPartners(updated);
    saveStoredPartners(updated);
    setEditingPartner(null);
  };

  const getCategoryIcon = (category: Partner['category']) => {
    switch (category) {
      case 'guincho':
        return <Truck className="w-6 h-6 text-red-500" />;
      case 'hotel':
        return <Hotel className="w-6 h-6 text-yellow-400" />;
      case 'pousada':
        return <Home className="w-6 h-6 text-red-400" />;
      case 'lavagem':
        return <Sparkles className="w-6 h-6 text-yellow-300" />;
      case 'pneus':
        return <Disc className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="parceiros" className="py-16 bg-carbon-dark text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-red-600/60 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>REDE INTEGRADA DE APOIO AO MOTORISTA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            REDE DE PARCEIROS <span className="text-red-500">MECÂNICO RAFA MORO</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Tranquilidade total enquanto cuidamos do seu veículo: guincho 24h, hotéis, pousadas, estética com desconto exclusivo e centro de pneus em Santo Antônio da Patrulha.
          </p>
        </div>

        {/* Special 30% Promo Highlight for Lavagem */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950 via-zinc-950 to-sky-950/50 border-2 border-yellow-400/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-yellow-400 text-black font-black text-xs uppercase tracking-wider">
                <Percent className="w-4 h-4" /> PROMOÇÃO EXCLUSIVA DE PARCERIA
              </div>

              {/* Parceria de Logos: Mecânico Rafa Moro + Beck Studio */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-black/55 border border-zinc-800/90 rounded-xl px-4 py-3 sm:px-5 sm:py-4 w-fit">
                <img
                  src="/assets/aistudio/LOGO_RGB_6026b6ff.png"
                  alt="Logo Mecânico Rafa Moro"
                  className="h-16 sm:h-20 w-auto object-contain shrink-0"
                />
                <div className="flex flex-col items-center justify-center px-1">
                  <span className="text-yellow-400 font-black font-heading text-lg sm:text-xl leading-none">+</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Parceria</span>
                </div>
                <img
                  src="/assets/beck-studio-logo.png"
                  alt="Logo Beck Studio Estética Automotiva"
                  className="h-16 sm:h-20 w-auto object-contain shrink-0"
                />
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-heading text-white uppercase leading-tight">
                SERVIÇOS ACIMA DE <span className="text-yellow-400">R$ 200,00</span> GANHAM{' '}
                <span className="text-yellow-400">30% DE DESCONTO!</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Realizou serviço mecânico acima de <strong className="text-yellow-300">R$ 200,00</strong> na oficina{' '}
                <strong className="text-white">Mecânico Rafa Moro</strong>? Você ganha{' '}
                <strong className="text-yellow-300">30% de desconto na lavagem técnica detalhada com cera</strong> na{' '}
                <strong className="text-sky-300">Beck Studio Estética Automotiva</strong>!
              </p>
            </div>

            {/* Quick interactive calculator */}
            <div className="lg:col-span-4 bg-zinc-950/90 p-4 sm:p-5 rounded-xl border border-zinc-800 text-center space-y-2.5">
              <span className="text-[11px] font-bold text-gray-300 uppercase block">
                Simule sua economia (30% OFF):
              </span>
              <span className="text-[10px] font-semibold text-yellow-400/90 uppercase block">
                Lavagem técnica detalhada com cera
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-gray-400">Valor Lavagem: R$</span>
                <input
                  type="number"
                  min="30"
                  max="500"
                  step="10"
                  value={washBasePrice}
                  onChange={(e) => setWashBasePrice(Number(e.target.value) || 0)}
                  className="w-20 bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-center font-bold text-white text-sm"
                />
              </div>
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-around">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Desconto</span>
                  <span className="text-sm font-bold text-red-400">- R$ {discountCalculation.discount.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-yellow-400 block uppercase font-bold">Você Paga</span>
                  <span className="text-xl font-black font-heading text-yellow-400">R$ {discountCalculation.finalPrice.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 pt-1">
                *Válido para serviços na oficina acima de R$ 200,00.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-zinc-950 rounded-2xl border border-zinc-800 hover:border-red-600/70 transition-all flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              {/* Partner Card Image & Tag */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={partner.imageUrl}
                  alt={partner.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    partner.comingSoon && !partner.imageHasStatusBanner ? 'opacity-65 grayscale-[35%]' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />
                
                {/* Category label */}
                <div className="absolute top-3 left-3 bg-red-600 text-white font-black text-xs uppercase px-2.5 py-1 rounded shadow-md flex items-center gap-1.5 font-heading">
                  {getCategoryIcon(partner.category)}
                  <span>{partner.categoryLabel}</span>
                </div>

                {/* EM BREVE badge (only when image doesn't already have its own notice banner) */}
                {partner.comingSoon && !partner.imageHasStatusBanner && (
                  <div className="absolute bottom-3 left-3 bg-yellow-400 text-black font-black text-xs uppercase px-3 py-1 rounded-md shadow-lg tracking-wider font-heading">
                    {partner.comingSoonLabel || '⏳ EM BREVE'}
                  </div>
                )}

                {/* Edit Button for Owner */}
                <button
                  onClick={() => handleEditClick(partner)}
                  className="absolute top-3 right-3 bg-zinc-900/90 hover:bg-yellow-500 hover:text-black text-gray-300 p-2 rounded-lg border border-zinc-700 transition-colors shadow-md text-xs flex items-center gap-1 font-bold"
                  title="Editar dados cadastrais deste parceiro"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase">Editar</span>
                </button>
              </div>

              {/* Partner Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black font-heading text-white uppercase group-hover:text-yellow-400 transition-colors">
                    {partner.title}
                  </h3>
                  <p className="text-xs text-yellow-400 font-semibold mt-0.5">
                    {partner.subtitle}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 line-clamp-3">
                    {partner.description}
                  </p>

                  {/* Special Offer badge if present */}
                  {partner.specialOffer && (
                    <div className="mt-3 p-2 rounded bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 text-xs font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      <span>{partner.specialOffer}</span>
                    </div>
                  )}

                  {/* Rate / Pricing if present */}
                  {partner.pricingOrRate && (
                    <div className="mt-2 text-xs text-gray-300">
                      <span className="font-bold text-white">Tarifa: </span>
                      <span>{partner.pricingOrRate}</span>
                    </div>
                  )}

                  {/* Services / Brands List */}
                  {partner.brandsOrServices && partner.brandsOrServices.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {partner.brandsOrServices.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-red-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Location & Contact Details */}
                <div className="pt-3 border-t border-zinc-800 space-y-2 text-xs text-gray-400">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{partner.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span className="font-semibold text-white">{partner.phone}</span>
                  </div>

                  {/* Contact Action Buttons */}
                  {partner.comingSoon ? (
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${partner.whatsapp}?text=${encodeURIComponent(
                          `Olá! Gostaria de saber novidades sobre a parceria ${partner.categoryLabel} do Mecânico Rafa Moro.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-yellow-400/50 font-bold text-xs uppercase py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Em Breve • Falar com a Oficina</span>
                      </a>
                    </div>
                  ) : (
                    <div className="pt-2 grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/${partner.whatsapp}?text=${encodeURIComponent(
                          `Olá! Sou cliente da oficina Mecânico Rafa Moro e gostaria de informações sobre ${partner.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase py-2 px-2.5 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          partner.address + ', Santo Antônio da Patrulha RS'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-zinc-700 font-bold text-xs uppercase py-2 px-2.5 rounded-lg transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Ver no Mapa</span>
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Editing Partner Information (as requested by user) */}
        {editingPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-zinc-950 border-2 border-red-600 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setEditingPartner(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                aria-label="Fechar formulário de edição"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="racing-border pb-3 mb-6">
                <span className="text-xs text-yellow-400 font-bold uppercase block">
                  {editingPartner.categoryLabel}
                </span>
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  EDITAR DADOS DO PARCEIRO
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Personalize o nome fantasia, telefone real, endereço ou preços deste parceiro. Ficará salvo no navegador!
                </p>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Nome / Razão Social do Estabelecimento
                  </label>
                  <input
                    type="text"
                    required
                    value={editingPartner.title}
                    onChange={(e) => setEditingPartner({ ...editingPartner, title: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Subtítulo / Especialidade
                  </label>
                  <input
                    type="text"
                    value={editingPartner.subtitle}
                    onChange={(e) => setEditingPartner({ ...editingPartner, subtitle: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Telefone para Contato
                    </label>
                    <input
                      type="text"
                      value={editingPartner.phone}
                      onChange={(e) => setEditingPartner({ ...editingPartner, phone: e.target.value })}
                      placeholder="(51) 99999-9999"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      WhatsApp (somente números)
                    </label>
                    <input
                      type="text"
                      value={editingPartner.whatsapp}
                      onChange={(e) => setEditingPartner({ ...editingPartner, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="5551996347460"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Endereço Completo (com ponto de referência)
                  </label>
                  <input
                    type="text"
                    value={editingPartner.address}
                    onChange={(e) => setEditingPartner({ ...editingPartner, address: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Tarifas, Valores ou Descontos
                  </label>
                  <input
                    type="text"
                    value={editingPartner.pricingOrRate || ''}
                    onChange={(e) => setEditingPartner({ ...editingPartner, pricingOrRate: e.target.value })}
                    placeholder="Ex: Diárias a partir de R$ 120 / 30% OFF na lavagem"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Descrição Detalhada do Serviço
                  </label>
                  <textarea
                    rows={3}
                    value={editingPartner.description}
                    onChange={(e) => setEditingPartner({ ...editingPartner, description: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={Boolean(editingPartner.comingSoon)}
                    onChange={(e) => setEditingPartner({ ...editingPartner, comingSoon: e.target.checked })}
                    className="rounded border-zinc-600 bg-zinc-900 text-red-600 focus:ring-red-500"
                  />
                  <span>Exibir selo &quot;Em Breve&quot; neste parceiro</span>
                </label>

                <div className="pt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingPartner(null)}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-bold py-3 px-4 rounded-xl uppercase transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black py-3 px-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/40"
                  >
                    <Save className="w-4 h-4 text-yellow-300" />
                    <span>Salvar Alterações</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
