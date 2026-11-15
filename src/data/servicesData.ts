export interface AutoService {
  id: string;
  title: string;
  category: 'mecanica' | 'eletrica' | 'socorro' | 'arrefecimento' | 'revisao';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export const AUTO_SERVICES: AutoService[] = [
  {
    id: 'socorro-24h',
    title: 'Plantão Emergencial & Rodovia 24h',
    category: 'socorro',
    shortDesc: 'Atendimento emergencial fora do horário comercial pelo plantão (51) 99419-2142 em Santo Antônio da Patrulha e rodovias.',
    fullDesc: 'Pane mecânica, bateria descarregada, superaquecimento ou pneu danificado? Em horário comercial atendemos na oficina pelo (51) 99634-7460 e, após as 19h ou fins de semana, pelo plantão (51) 99419-2142.',
    features: [
      'Oficina física: Seg a Sex (08:30–12:00 e 13:30–19:00)',
      'Plantão após as 19:00 e fins de semana: (51) 99419-2142',
      'Cobertura urbana e rodovias (BR-290 Freeway, RS-030)',
      'Articulação direta com guincho e rede de apoio'
    ],
    imageUrl: '/assets/socorro-madrugada-scanner.jpg',
    badge: 'PLANTÃO 24H'
  },
  {
    id: 'arrefecimento-upgrade',
    title: 'Sistema de Arrefecimento',
    category: 'arrefecimento',
    shortDesc: 'Especialidade Rafa Moro: substituição de cavaletes plásticos frágeis por versões definitivas em alumínio.',
    fullDesc: 'Resolva de uma vez os vazamentos crônicos de água! Trocamos cavaletes de água ressecados, carcaças de válvulas termostáticas de plástico por modelos usinados em alumínio e sensores de alta precisão.',
    features: [
      'Eliminação definitiva de vazamentos crônicos',
      'Substituição de carcaças de plástico para alumínio naval',
      'Troca de válvula termostática e bomba d’água',
      'Limpeza de sistema e aditivo sintético de alta performance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mecanica-geral',
    title: 'Mecânica Geral & Motores',
    category: 'mecanica',
    shortDesc: 'Retífica de cabeçote, troca de correia dentada, bomba de combustível e embreagem.',
    fullDesc: 'Manutenção minuciosa de motores ciclo Otto e Diesel leve. Desmontagem técnica com torquímetro calibrado, substituição preventiva de correias, tensores e juntas automotivas de primeira linha.',
    features: [
      'Troca de correia dentada e tensores',
      'Substituição de kit de embreagem e atuadores',
      'Reparo de cabeçote com junta de aço',
      'Troca de velas de ignição, cabos e bobinas'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eletrica-injecao',
    title: 'Elétrica Automotiva & Injeção Eletrônica',
    category: 'eletrica',
    shortDesc: 'Diagnóstico computadorizado com scanner de última geração, alternadores e baterias.',
    fullDesc: 'Leitura completa de falhas na central eletrônica (ECU), testes de osciloscópio, reparo de alternador, motor de partida, fusíveis, relés e chicotes elétricos.',
    features: [
      'Scanner automotivo multimarca profissional',
      'Teste de carga e saúde de baterias',
      'Revisão e recondicionamento de alternadores',
      'Limpeza e equalização de bicos injetores'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'revisao-viagem',
    title: 'Revisão Preventiva Pré-Viagem',
    category: 'revisao',
    shortDesc: 'Checklist rigoroso de mais de 35 itens antes de pegar a Freeway ou viajar com a família.',
    fullDesc: 'Evite imprevistos na estrada. Inspecionamos suspensão, fluidos, iluminação, pneus, correias, carga de bateria e freios para uma viagem tranquila e segura.',
    features: [
      'Inspeção visual e computadorizada de 35 pontos',
      'Conferência do estado de pneus e estepe',
      'Checagem de arrefecimento e lubrificação',
      'Relatório detalhado para o proprietário'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    badge: 'RECOMENDADO'
  }
];
