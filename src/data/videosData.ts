export interface EducationalVideo {
  id: string;
  category: 'oleo' | 'arrefecimento' | 'pneus' | 'bateria' | 'mecanica';
  categoryLabel: string;
  title: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
  safetyWarning?: string;
  thumbnailUrl: string;
  videoUrl?: string; // YouTube embed ID or video url
  isUserAdded?: boolean;
}

export const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  // --- ÓLEO DO MOTOR ---
  {
    id: 'oleo-verificar-nivel',
    category: 'oleo',
    categoryLabel: 'ÓLEO DO MOTOR',
    title: 'Como verificar o nível do óleo do motor corretamente',
    duration: '3 min',
    description: 'Aprenda o método correto de puxar a vareta, limpar e checar entre os marcadores MIN e MAX com o veículo em local plano e o motor desligado há pelo menos 10 minutos.',
    keyTakeaways: [
      'Estacione sempre em terreno plano e nivelado.',
      'Aguarde cerca de 10 minutos após desligar o motor para o óleo descer ao cárter.',
      'Limpe a vareta na primeira retirada e insira até o fim antes de fazer a leitura real.',
      'O nível deve ficar entre as duas marcas, nunca abaixo do MIN e nunca acima do MAX.'
    ],
    thumbnailUrl: '/assets/oleo-verificar-vareta.jpg',
    videoUrl: 'https://www.youtube.com/embed/J_aJrrVNqPA?rel=0'
  },
  {
    id: 'oleo-quando-trocar',
    category: 'oleo',
    categoryLabel: 'ÓLEO DO MOTOR',
    title: 'Quando trocar o óleo: quilometragem ou tempo de uso?',
    duration: '4 min',
    description: 'Entenda a diferença entre uso severo (trânsito urbano anda-e-pára, trajetos curtos) e uso em rodovia, além da importância da viscosidade correta exigida pela montadora (5W30, 0W20, 10W40).',
    keyTakeaways: [
      'O óleo vence por tempo (geralmente 6 a 12 meses) mesmo se você rodar pouco.',
      'Uso severo (cidade, para-e-anda) reduz o intervalo de troca pela metade.',
      'Sempre troque o filtro de óleo junto com o óleo novo.',
      'Nunca misture marcas ou viscosidades diferentes no mesmo cárter.'
    ],
    thumbnailUrl: '/assets/oleo-adesivo-vidro.jpg',
    videoUrl: 'https://www.youtube.com/embed/Esg3UsXjXaA?rel=0'
  },
  {
    id: 'oleo-problemas-lubrificacao',
    category: 'oleo',
    categoryLabel: 'ÓLEO DO MOTOR',
    title: 'Como identificar problemas graves de lubrificação no motor',
    duration: '5 min',
    description:
      'Luz indicadora de pressão do óleo (almotolia/chaleirinha) acendendo no painel, ruído metálico característico de tuchos batendo, formação de borra carbonizada na tampa e perda acentuada de desempenho — como se o motor estivesse perdendo força ou prestes a morrer. Se a luz vermelha da chaleirinha acender, pare e desligue o motor imediatamente e procure serviço especializado: a chance de danificar completamente o motor chega a 99,99%.',
    keyTakeaways: [
      'Se a luz vermelha da almotolia/chaleirinha acender no painel, estacione e desligue o motor imediatamente (risco de 99,99% de dano total se continuar rodando).',
      'Ruído metálico agudo (tec-tec) indica tuchos hidráulicos sem pressão de lubrificação adequada.',
      'Borra espessa sob a tampa de abastecimento denuncia oxidação severa ou óleo contaminado/vencido.',
      'Perda súbita de desempenho e peso no giro do motor são sinais de atrito severo por falha na lubrificação: procure assistência especializada.'
    ],
    safetyWarning:
      'ALERTA CRÍTICO (99,99% DE RISCO DE PERDA TOTAL): Se a luz vermelha da pressão de óleo (chaleirinha) acender, desligue o motor imediatamente e acione serviço especializado.',
    thumbnailUrl: '/assets/oleo-luz-chaleirinha.jpg',
    videoUrl: 'https://www.youtube.com/embed/tOGqWGoK5N0?rel=0'
  },

  // --- SISTEMA DE ARREFECIMENTO ---
  {
    id: 'arrefecimento-reservatorio',
    category: 'arrefecimento',
    categoryLabel: 'SISTEMA DE ARREFECIMENTO',
    title: 'Como verificar o nível de líquido refrigerante (água ou aditivo)',
    duration: '4 min',
    description:
      'Procedimento seguro para inspecionar o nível e o estado do líquido refrigerante (água desmineralizada ou aditivo) no reservatório. Atenção: o sistema opera com aproximadamente 1.5 bar de pressão — não abra a tampa de imediato com o motor quente, pois queimaduras com esses aditivos e água pressurizada são extremamente graves.',
    keyTakeaways: [
      'A inspeção com o motor quente deve ser apenas visual pelas marcas MIN e MAX externas do reservatório.',
      'Lembre-se sempre: o sistema trabalha com aproximadamente 1.5 bar de pressão e alta temperatura — nunca abra a tampa imediatamente.',
      'O líquido deve estar límpido (rosado, verde ou azul), nunca turvo ou marrom como água de barro.',
      'Com o reservatório vazio e motor quente, aguarde o resfriamento completo antes de abrir ou completar.'
    ],
    safetyWarning:
      'AVISO DE SEGURANÇA CRÍTICO: O sistema trabalha sob aproximadamente 1.5 bar de pressão! NÃO abra a tampa de imediato — queimaduras causadas por vapor e aditivos químicos aquecidos são extremamente graves.',
    thumbnailUrl: '/assets/arrefecimento-reservatorio-proibido.jpg',
    videoUrl: 'https://www.youtube.com/embed/rR09zLI3lb8?rel=0'
  },

  // --- PNEUS ---
  {
    id: 'pneus-calibrar',
    category: 'pneus',
    categoryLabel: 'PNEUS',
    title: 'Como calibrar os pneus corretamente para economizar combustível',
    duration: '3 min',
    description: 'Veja onde encontrar a etiqueta de pressão recomendada (porta do motorista ou tampa de combustível) e como calibrar com pneus frios.',
    keyTakeaways: [
      'Calibre sempre com os pneus frios (máximo 2 km rodados até o posto).',
      'Pneu murcho aumenta o consumo de combustível em até 10% e desgasta as bordas.',
      'Não esqueça de calibrar o estepe com 2 a 4 libras a mais.',
      'Considere a carga do veículo: carro lotado exige mais pressão no eixo traseiro.'
    ],
    thumbnailUrl: '/assets/pneus-calibrando-mecanico.jpg',
    videoUrl: 'https://www.youtube.com/embed/Tt8etVThBkM?rel=0'
  }
];

export interface VideoCategoryOption {
  id: 'todos' | EducationalVideo['category'];
  label: string;
}

export const VIDEO_CATEGORIES: VideoCategoryOption[] = [
  { id: 'todos', label: 'Todos os Vídeos' },
  { id: 'arrefecimento', label: 'Arrefecimento (Cuidado!)' },
  { id: 'oleo', label: 'Óleo do Motor' },
  { id: 'bateria', label: 'Bateria & Elétrica' },
  { id: 'pneus', label: 'Pneus & Calibragem' },
  { id: 'mecanica', label: 'Mecânica Geral' },
];

export function getVisibleVideoCategories(videos: EducationalVideo[]): VideoCategoryOption[] {
  const activeCategories = new Set(videos.map((v) => v.category));
  return VIDEO_CATEGORIES.filter(
    (cat) => cat.id === 'todos' || activeCategories.has(cat.id)
  );
}

export const REMOVED_DEFAULT_VIDEO_IDS = new Set([
  'arrefecimento-vazamentos',
  'arrefecimento-superaquecimento',
  'arrefecimento-cuidados-liquido',
  'pneus-desgaste',
  'pneus-quando-trocar',
  'bateria-fraca',
  'bateria-problemas-eletricos',
  'mecanica-barulhos',
  'mecanica-antes-viajar',
  'mecanica-carro-nao-liga',
]);

export const VIDEOS_STORAGE_KEY = 'mecanico_rafa_moro_videos_v1';

export function mergeStoredVideos(stored: EducationalVideo[]): EducationalVideo[] {
  const defaultsById = new Map(EDUCATIONAL_VIDEOS.map((v) => [v.id, v]));
  return stored
    .filter((item) => item.isUserAdded || !REMOVED_DEFAULT_VIDEO_IDS.has(item.id))
    .map((item) => {
      const updatedDefault = defaultsById.get(item.id);
      if (!updatedDefault) return item;

    if (item.id === 'oleo-verificar-nivel') {
      const shouldUpgradeThumb =
        !item.thumbnailUrl || item.thumbnailUrl.includes('photo-1619642751034-765dfdf7c58e');
      const shouldUpgradeVideo = !item.videoUrl || item.videoUrl.includes('dQw4w9WgXcQ');

      if (!shouldUpgradeThumb && !shouldUpgradeVideo) return item;
      return {
        ...item,
        thumbnailUrl: shouldUpgradeThumb ? updatedDefault.thumbnailUrl : item.thumbnailUrl,
        videoUrl: shouldUpgradeVideo ? updatedDefault.videoUrl : item.videoUrl,
      };
    }

    if (item.id === 'oleo-quando-trocar') {
      const shouldUpgradeThumb =
        !item.thumbnailUrl || item.thumbnailUrl.includes('photo-1517524008697-84bbe3c3fd98');
      const shouldUpgradeVideo =
        !item.videoUrl ||
        item.videoUrl.includes('dQw4w9WgXcQ') ||
        item.videoUrl.includes('rR09zLI3lb8');

      if (!shouldUpgradeThumb && !shouldUpgradeVideo) return item;
      return {
        ...item,
        thumbnailUrl: shouldUpgradeThumb ? updatedDefault.thumbnailUrl : item.thumbnailUrl,
        videoUrl: shouldUpgradeVideo ? updatedDefault.videoUrl : item.videoUrl,
      };
    }

    if (item.id === 'oleo-problemas-lubrificacao') {
      const shouldUpgradeThumb =
        !item.thumbnailUrl || item.thumbnailUrl.includes('photo-1580273916550-e323be2ae537');
      const shouldUpgradeVideo = !item.videoUrl || item.videoUrl.includes('dQw4w9WgXcQ');
      const shouldUpgradeText =
        !item.description ||
        item.description.includes('fumaça azulada no escapamento') ||
        !item.description.includes('99,99%');

      if (!shouldUpgradeThumb && !shouldUpgradeVideo && !shouldUpgradeText) return item;
      return {
        ...item,
        thumbnailUrl: shouldUpgradeThumb ? updatedDefault.thumbnailUrl : item.thumbnailUrl,
        description: shouldUpgradeText ? updatedDefault.description : item.description,
        keyTakeaways: shouldUpgradeText ? updatedDefault.keyTakeaways : item.keyTakeaways,
        safetyWarning: shouldUpgradeText ? updatedDefault.safetyWarning : item.safetyWarning,
        videoUrl: shouldUpgradeVideo ? updatedDefault.videoUrl : item.videoUrl,
      };
    }

    if (item.id === 'arrefecimento-reservatorio') {
      const shouldUpgradeThumb =
        !item.thumbnailUrl || item.thumbnailUrl.includes('photo-1619642751034-765dfdf7c58e');
      const shouldUpgradeVideo = !item.videoUrl || item.videoUrl.includes('dQw4w9WgXcQ');
      const shouldUpgradeText =
        !item.title ||
        item.title.includes('reservatório de expansão') ||
        !item.description?.includes('1.5 bar');

      if (!shouldUpgradeThumb && !shouldUpgradeVideo && !shouldUpgradeText) return item;
      return {
        ...item,
        thumbnailUrl: shouldUpgradeThumb ? updatedDefault.thumbnailUrl : item.thumbnailUrl,
        title: shouldUpgradeText ? updatedDefault.title : item.title,
        description: shouldUpgradeText ? updatedDefault.description : item.description,
        keyTakeaways: shouldUpgradeText ? updatedDefault.keyTakeaways : item.keyTakeaways,
        safetyWarning: shouldUpgradeText ? updatedDefault.safetyWarning : item.safetyWarning,
        videoUrl: shouldUpgradeVideo ? updatedDefault.videoUrl : item.videoUrl,
      };
    }

    if (item.id === 'pneus-calibrar') {
      const shouldUpgradeThumb =
        !item.thumbnailUrl || item.thumbnailUrl.includes('photo-1578844251758-2f71da64c96f');
      const shouldUpgradeVideo = !item.videoUrl || item.videoUrl.includes('dQw4w9WgXcQ');

      if (!shouldUpgradeThumb && !shouldUpgradeVideo) return item;
      return {
        ...item,
        thumbnailUrl: shouldUpgradeThumb ? updatedDefault.thumbnailUrl : item.thumbnailUrl,
        videoUrl: shouldUpgradeVideo ? updatedDefault.videoUrl : item.videoUrl,
      };
    }

    return item;
  });
}

export function getStoredVideos(): EducationalVideo[] {
  if (typeof window === 'undefined') return EDUCATIONAL_VIDEOS;
  try {
    const raw = localStorage.getItem(VIDEOS_STORAGE_KEY);
    if (!raw) return EDUCATIONAL_VIDEOS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const merged = mergeStoredVideos(parsed);
      return merged.length > 0 ? merged : EDUCATIONAL_VIDEOS;
    }
  } catch (e) {
    console.warn('Failed to load videos, using defaults', e);
  }
  return EDUCATIONAL_VIDEOS;
}

export function saveStoredVideos(videos: EducationalVideo[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(videos));
  } catch (e) {
    console.error('Failed to save videos', e);
  }
}
