export type CompletedJobCategory = 'arrefecimento' | 'mecanica' | 'eletrica' | 'suspensao';

export interface CompletedJob {
  id: string;
  vehicle: string;
  title: string;
  category: CompletedJobCategory;
  categoryLabel: string;
  dateLabel: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  isUserAdded?: boolean;
}

export const COMPLETED_JOBS_STORAGE_KEY = 'rafa_moro_completed_jobs_v1';

export const COMPLETED_JOB_CATEGORIES: { id: 'todos' | CompletedJobCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os Trabalhos' },
  { id: 'arrefecimento', label: 'Arrefecimento' },
  { id: 'mecanica', label: 'Motor & Mecânica' },
  { id: 'eletrica', label: 'Elétrica & Injeção' },
  { id: 'suspensao', label: 'Suspensão & Freios' }
];

export const DEFAULT_COMPLETED_JOBS: CompletedJob[] = [
  {
    id: 'job-gol-arrefecimento',
    vehicle: 'Volkswagen Gol G6 1.6',
    title: 'Conversão para Cavalete em Alumínio & Limpeza Completa',
    category: 'arrefecimento',
    categoryLabel: 'Sistema de Arrefecimento',
    dateLabel: 'Atendimento na Oficina',
    description:
      'Substituição definitiva do cavalete plástico ressecado por carcaça usinada em alumínio, limpeza pressurizada de todo o circuito, reservatório novo e aditivo orgânico na proporção correta.',
    highlights: [
      'Cavalete e válvula termostática em alumínio',
      'Teste de estanqueidade sob 1.5 bar sem vazamentos',
      'Reservatório novo + fluido desmineralizado com aditivo'
    ],
    imageUrl: '/assets/trabalho-gol-arrefecimento.jpg'
  },
  {
    id: 'job-picape-suspensao',
    vehicle: 'Picape 4x4 Turbo Diesel',
    title: 'Revisão de Suspensão Dianteira & Conjunto de Freios',
    category: 'suspensao',
    categoryLabel: 'Suspensão & Freios',
    dateLabel: 'Revisão Pré-Viagem',
    description:
      'Inspeção completa no elevador com troca de amortecedores dianteiros, verificação de folgas em pivôs e terminais de direção, além da conferência minuciosa de discos e pinças de freio.',
    highlights: [
      'Troca do par de amortecedores e batentes',
      'Conferência de buchas de bandeja e bieletas',
      'Limpeza e inspeção de pinças e pastilhas'
    ],
    imageUrl: '/assets/trabalho-hilux-suspensao.jpg'
  },
  {
    id: 'job-sedan-eletrica',
    vehicle: 'Sedan Flex • Injeção Direta',
    title: 'Diagnóstico com Osciloscópio & Troca de Bobinas',
    category: 'eletrica',
    categoryLabel: 'Elétrica & Injeção',
    dateLabel: 'Diagnóstico Avançado',
    description:
      'Veículo chegou com falhas intermitentes em aceleração. Mapeamento via scanner automotivo e osciloscópio nos sinais de ignição, substituição do conjunto de bobinas e chicote revisado.',
    highlights: [
      'Análise de sinal primário/secundário no osciloscópio',
      'Leitura completa de parâmetros da central (ECU)',
      'Substituição de bobinas de ignição e velas'
    ],
    imageUrl: '/assets/trabalho-eletrica-osciloscopio.jpg'
  },
  {
    id: 'job-vw-motor-correia',
    vehicle: 'Volkswagen TSI • Ciclo Otto',
    title: 'Troca de Correia Dentada, Tensores & Junta da Tampa',
    category: 'mecanica',
    categoryLabel: 'Motor & Mecânica',
    dateLabel: 'Manutenção Preventiva',
    description:
      'Desmontagem técnica com ferramentas de fasagem e torquímetro calibrado para substituição preventiva do kit de distribuição, correia auxiliar e vedação superior livre de vazamentos.',
    highlights: [
      'Kit de distribuição e tensionador instalados no ponto',
      'Aperto controlado com torquímetro calibrado',
      'Limpeza técnica completa do cofre pós-montagem'
    ],
    imageUrl: '/assets/trabalho-vw-motor.jpg'
  }
];

export function mergeStoredCompletedJobs(stored: CompletedJob[]): CompletedJob[] {
  const defaultIds = new Set(DEFAULT_COMPLETED_JOBS.map((j) => j.id));
  const userAdded = stored.filter((j) => j.isUserAdded && !defaultIds.has(j.id));
  const defaultsMap = new Map(DEFAULT_COMPLETED_JOBS.map((j) => [j.id, j]));

  const mergedDefaults = DEFAULT_COMPLETED_JOBS.map((defJob) => {
    const existing = stored.find((s) => s.id === defJob.id);
    if (!existing) return defJob;
    return {
      ...defJob,
      ...existing,
      imageUrl: defJob.imageUrl
    };
  });

  // Preserve custom order: user-added entries appear first
  const sanitizedUserAdded = userAdded.map((j) => ({
    ...j,
    highlights: Array.isArray(j.highlights) && j.highlights.length > 0 ? j.highlights : ['Serviço executado na oficina Mecânico Rafa Moro']
  }));

  void defaultsMap;
  return [...sanitizedUserAdded, ...mergedDefaults];
}

export function getStoredCompletedJobs(): CompletedJob[] {
  if (typeof window === 'undefined') return DEFAULT_COMPLETED_JOBS;
  try {
    const raw = window.localStorage.getItem(COMPLETED_JOBS_STORAGE_KEY);
    if (!raw) return DEFAULT_COMPLETED_JOBS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return mergeStoredCompletedJobs(parsed as CompletedJob[]);
    }
  } catch {
    // fallback to defaults
  }
  return DEFAULT_COMPLETED_JOBS;
}

export function saveStoredCompletedJobs(jobs: CompletedJob[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(COMPLETED_JOBS_STORAGE_KEY, JSON.stringify(jobs));
  } catch {
    // ignore storage quota errors
  }
}

export function getVisibleCompletedJobCategories(jobs: CompletedJob[]) {
  const presentCategories = new Set(jobs.map((j) => j.category));
  return COMPLETED_JOB_CATEGORIES.filter(
    (cat) => cat.id === 'todos' || presentCategories.has(cat.id)
  );
}
