export interface Partner {
  id: string;
  category: 'guincho' | 'hotel' | 'pousada' | 'lavagem' | 'pneus';
  categoryLabel: string;
  title: string;
  subtitle: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  mapsQuery: string;
  description: string;
  specialOffer?: string;
  pricingOrRate?: string;
  brandsOrServices?: string[];
  imageUrl: string;
  comingSoon?: boolean;
}

export const DEFAULT_PARTNERS: Partner[] = [
  {
    id: 'parceiro-guincho',
    category: 'guincho',
    categoryLabel: 'PARCEIRO 1 — GUINCHO 24H',
    title: 'Guincho & Plataforma de Remoção',
    subtitle: 'Socorro e reboque rápido na BR-290 (Freeway), RS-030 e região',
    phone: '(51) 99634-7460 (Oficina) | (51) 99419-2142 (Plantão)',
    whatsapp: '5551994192142',
    address: 'Base operacional Santo Antônio da Patrulha - RS',
    city: 'Santo Antônio da Patrulha - RS',
    mapsQuery: 'Santo Antônio da Patrulha - RS',
    description: 'Serviço profissional de guincho plataforma para remoção segura de veículos leves, SUVs e utilitários. Se o conserto não puder ser finalizado no local do socorro, o veículo é transportado com todo cuidado até nossa oficina.',
    specialOffer: 'Atendimento integrado com o Mecânico Rafa Moro',
    brandsOrServices: [
      'Remoção de carros leves e utilitários',
      'Plataforma hidráulica rebaixada',
      'Atendimento 24h em rodovias e cidades vizinhas',
      'Transporte direto para a oficina'
    ],
    imageUrl: '/assets/guincho-plataforma.jpg'
  },
  {
    id: 'parceiro-hoteis',
    category: 'hotel',
    categoryLabel: 'PARCEIRO 2 — HOTÉIS',
    title: '[Hotel Parceiro Conveniado]',
    subtitle: 'Hospedagem confortável e segura para você e sua família enquanto cuidamos do seu carro',
    phone: '[A preencher pelo proprietário]',
    whatsapp: '5551996347460',
    address: '[Cadastre o endereço do hotel conveniado]',
    city: 'Santo Antônio da Patrulha - RS',
    mapsQuery: 'Hoteis Santo Antônio da Patrulha RS',
    description: 'Espaço reservado para o hotel conveniado. Quartos climatizados, TV, Wi-Fi de alta velocidade, café da manhã e estacionamento privativo.',
    pricingOrRate: 'Diárias sob consulta (condições especiais para clientes da oficina)',
    brandsOrServices: [
      'Quartos individuais e familiares',
      'Estacionamento fechado',
      'Café da manhã incluso',
      'Check-in facilitado'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parceiro-pousadas',
    category: 'pousada',
    categoryLabel: 'PARCEIRO 3 — POUSADAS',
    title: '[Pousada Parceira]',
    subtitle: 'Acolhimento serrano e tranquilidade em Santo Antônio da Patrulha',
    phone: '[A preencher pelo proprietário]',
    whatsapp: '5551996347460',
    address: '[Cadastre o endereço da pousada]',
    city: 'Santo Antônio da Patrulha - RS',
    mapsQuery: 'Pousadas Santo Antônio da Patrulha RS',
    description: 'Espaço reservado para cadastro de pousada parceira. Ambiente tranquilo, aconchegante e acolhedor para você descansar sem preocupações durante serviços mecânicos mais complexos.',
    pricingOrRate: 'Valores especiais para motoristas em trânsito',
    brandsOrServices: [
      'Ambiente familiar e acolhedor',
      'Café da manhã colonial típico gaúcho',
      'Área verde e descanso',
      'Wi-Fi e comodidades'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parceiro-lavagem',
    category: 'lavagem',
    categoryLabel: 'PARCEIRO 4 — LAVAGEM AUTOMOTIVA',
    title: 'Beck Studio — Estética Automotiva',
    subtitle: 'Lavagem técnica detalhada com cera e cuidado completo para seu veículo',
    phone: '[A preencher pelo proprietário]',
    whatsapp: '5551996347460',
    address: '[Cadastre o endereço da lavagem]',
    city: 'Santo Antônio da Patrulha - RS',
    mapsQuery: 'Beck Studio Estética Automotiva Santo Antônio da Patrulha RS',
    description: 'Lavagem técnica detalhada com cera, limpeza de motor a seco, higienização interna de estofados e estética automotiva. Clientes com serviços acima de R$ 200,00 na oficina ganham 30% de desconto!',
    specialOffer: 'Serviços acima de R$ 200,00 ganham 30% DE DESCONTO na lavagem técnica detalhada com cera!',
    brandsOrServices: [
      'Lavagem técnica detalhada com cera',
      'Higienização interna completa',
      'Limpeza técnica de motor com produtos neutros',
      'Revitalização de plásticos e pneus'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parceiro-pneus',
    category: 'pneus',
    categoryLabel: 'PARCEIRO 5 — PNEUS & GEOMETRIA',
    title: 'Em Breve — Centro Automotivo de Pneus',
    subtitle: 'Nova parceria em andamento para clientes Mecânico Rafa Moro',
    phone: 'Em breve',
    whatsapp: '5551996347460',
    address: 'Em breve — Santo Antônio da Patrulha - RS',
    city: 'Santo Antônio da Patrulha - RS',
    mapsQuery: 'Santo Antônio da Patrulha RS',
    description: 'Estamos preparando uma nova parceria especial para venda de pneus, montagem, balanceamento e geometria com benefícios exclusivos para clientes da oficina.',
    specialOffer: 'EM BREVE — Condições especiais para clientes da oficina',
    brandsOrServices: [
      'Venda de pneus novos e montagem',
      'Geometria e balanceamento computadorizado',
      'Benefícios exclusivos para clientes Rafa Moro'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
    comingSoon: true
  }
];

export const PARTNERS_STORAGE_KEY = 'mecanico_rafa_moro_partners_v1';

export function getStoredPartners(): Partner[] {
  if (typeof window === 'undefined') return DEFAULT_PARTNERS;
  try {
    const raw = localStorage.getItem(PARTNERS_STORAGE_KEY);
    if (!raw) return DEFAULT_PARTNERS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map((p: Partner) => {
        if (
          p.id === 'parceiro-guincho' &&
          p.imageUrl.includes('photo-1580273916550-e323be2ae537')
        ) {
          return { ...p, imageUrl: '/assets/guincho-plataforma.jpg' };
        }
        if (
          p.id === 'parceiro-lavagem' &&
          p.title === 'Estética Automotiva & Lavagem Detalhada'
        ) {
          const updatedLavagem = DEFAULT_PARTNERS.find((d) => d.id === 'parceiro-lavagem');
          return updatedLavagem
            ? {
                ...p,
                title: updatedLavagem.title,
                subtitle: updatedLavagem.subtitle,
                description: updatedLavagem.description,
                specialOffer: updatedLavagem.specialOffer,
                brandsOrServices: updatedLavagem.brandsOrServices,
              }
            : p;
        }
        if (
          p.id === 'parceiro-pneus' &&
          p.title === 'Centro Automotivo de Pneus'
        ) {
          const updatedPneus = DEFAULT_PARTNERS.find((d) => d.id === 'parceiro-pneus');
          return updatedPneus ? updatedPneus : p;
        }
        return p;
      });
    }
  } catch (e) {
    console.warn('Failed to load stored partners, using defaults', e);
  }
  return DEFAULT_PARTNERS;
}

export function saveStoredPartners(partners: Partner[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PARTNERS_STORAGE_KEY, JSON.stringify(partners));
  } catch (e) {
    console.error('Failed to save partners', e);
  }
}

export function calculateCarWashDiscount(originalPrice: number, discountPercentage: number = 30): {
  original: number;
  discount: number;
  finalPrice: number;
} {
  const discount = (originalPrice * discountPercentage) / 100;
  const finalPrice = Math.max(0, originalPrice - discount);
  return {
    original: originalPrice,
    discount: Math.round(discount * 100) / 100,
    finalPrice: Math.round(finalPrice * 100) / 100
  };
}
