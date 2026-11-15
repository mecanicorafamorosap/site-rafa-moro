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
    thumbnailUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'oleo-problemas-lubrificacao',
    category: 'oleo',
    categoryLabel: 'ÓLEO DO MOTOR',
    title: 'Como identificar problemas graves de lubrificação no motor',
    duration: '5 min',
    description: 'Luz da almotolia acendendo no painel, barulho metálico de tuchos batendo, formação de borra preta na tampa de abastecimento e fumaça azulada no escapamento.',
    keyTakeaways: [
      'Se a luz do óleo acender no painel, pare o carro imediatamente e desligue o motor.',
      'Ruído tipo tec-tec agudo em marcha lenta indica tuchos secos ou baixa pressão de óleo.',
      'Borra espessa sob a tampa de óleo é sinal de contaminação ou óleo vencido.',
      'Fumaça azulada no escape indica que o óleo está sendo queimado na câmara de combustão.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },

  // --- SISTEMA DE ARREFECIMENTO ---
  {
    id: 'arrefecimento-reservatorio',
    category: 'arrefecimento',
    categoryLabel: 'SISTEMA DE ARREFECIMENTO',
    title: 'Como verificar o reservatório de expansão com total segurança',
    duration: '4 min',
    description: 'O procedimento correto para inspecionar o nível e a transparência do líquido sem correr riscos desnecessários.',
    keyTakeaways: [
      'A inspeção deve ser puramente visual quando o motor estiver quente.',
      'O líquido deve estar rosado, verde ou azul límpido, nunca marrom como água de barro.',
      'Se o reservatório estiver completamente vazio, não adicione água fria com motor quente (risco de trinca de bloco).'
    ],
    safetyWarning: 'AVISO DE SEGURANÇA CRÍTICO: NUNCA abra a tampa do reservatório do sistema de arrefecimento com o motor quente! O sistema trabalha sob alta pressão e o líquido em ebulição causará queimaduras graves.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'arrefecimento-vazamentos',
    category: 'arrefecimento',
    categoryLabel: 'SISTEMA DE ARREFECIMENTO',
    title: 'Como identificar vazamentos ocultos de líquido de arrefecimento',
    duration: '4 min',
    description: 'Aprenda a detectar pequenas gotas no chão da garagem, resíduos brancos ou coloridos nas mangueiras e carcaças de plástico ressecadas.',
    keyTakeaways: [
      'Cheiro adocicado perto do capô após rodar é sinal clássico de aditivo evaporando.',
      'Manchas secas coloridas ao redor do cavalete de água e termostática denunciam trincas.',
      'Em veículos como Ford Focus, Chevrolet e VW, carcaças de plástico costumam empenar com o tempo.'
    ],
    safetyWarning: 'Inspecione mangueiras e conexões com o motor totalmente desligado e resfriado.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'arrefecimento-superaquecimento',
    category: 'arrefecimento',
    categoryLabel: 'SISTEMA DE ARREFECIMENTO',
    title: 'Como perceber superaquecimento antes de fundir o motor',
    duration: '6 min',
    description: 'Saiba quais são os sintomas prévios: ponteiro ultrapassando os 90°C, perda de potência repentina, ventoinha ligada na velocidade máxima direto e vapor d’água.',
    keyTakeaways: [
      'Fique atento ao painel: se o ponteiro de temperatura passar do meio, pare com segurança.',
      'Nunca tente continuar dirigindo "só mais um pouquinho": isso queima a junta do cabeçote.',
      'Em horário comercial chame a oficina no (51) 99634-7460; após as 19h ou fins de semana, ligue para o plantão (51) 99419-2142.'
    ],
    safetyWarning: 'Pare no acostamento, desligue a chave e NUNCA retire a tampa do radiador!',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'arrefecimento-cuidados-liquido',
    category: 'arrefecimento',
    categoryLabel: 'SISTEMA DE ARREFECIMENTO',
    title: 'Cuidados essenciais com o líquido: aditivo sintético vs água de torneira',
    duration: '4 min',
    description: 'Por que usar água de torneira com cloro e minerais corrói a bomba d’água, enferruja o bloco e entope os canais do radiador.',
    keyTakeaways: [
      'Use somente água desmineralizada misturada na proporção correta com aditivo orgânico/híbrido.',
      'O aditivo eleva o ponto de ebulição (evita ferver a 100°C) e previne corrosão galvânica.',
      'Drenagem e limpeza do sistema recomendadas a cada 2 anos.'
    ],
    safetyWarning: 'Manuseie aditivos com luvas e proteção ocular.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'pneus-desgaste',
    category: 'pneus',
    categoryLabel: 'PNEUS',
    title: 'Como identificar desgaste irregular e problemas de alinhamento',
    duration: '4 min',
    description: 'Aprenda a ler os sinais da borracha: desgaste no ombro interno, escamação e vibrações no volante em velocidades de viagem.',
    keyTakeaways: [
      'Desgaste em apenas uma borda indica necessidade urgente de geometria/alinhamento.',
      'Desgaste no centro da banda de rodagem significa excesso de calibragem.',
      'Vibração no volante entre 80 km/h e 100 km/h indica desbalanceamento de rodas.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'pneus-quando-trocar',
    category: 'pneus',
    categoryLabel: 'PNEUS',
    title: 'Quando trocar os pneus: como localizar o indicador TWI e validade DOT',
    duration: '3 min',
    description: 'Entenda os sulcos mínimos legais de 1,6mm pelo marcador TWI e o risco de rodar com pneus ressecados após 5 anos de fabricação.',
    keyTakeaways: [
      'O ressalto TWI dentro do sulco indica o limite máximo de segurança.',
      'Pneus com menos de 3mm já perdem quase metade da aderência em pista molhada (aquaplanagem).',
      'Verifique os 4 números do código DOT na lateral (ex: 2421 = 24ª semana de 2021).'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },

  // --- BATERIA ---
  {
    id: 'bateria-fraca',
    category: 'bateria',
    categoryLabel: 'BATERIA',
    title: 'Como identificar bateria fraca antes de ficar a pé',
    duration: '4 min',
    description: 'Sintomas claros de que a bateria está chegando ao fim da vida útil de 2 a 3 anos: motor de arranque pesado pela manhã, relógio zerando e luz fraca.',
    keyTakeaways: [
      'Dificuldade de dar a partida pela manhã é o primeiro alerta de fim de carga.',
      'Painel piscando ou vidros elétricos subindo com lentidão indicam baixa voltagem.',
      'Em caso de pane na estrada, acione nossa oficina ou o plantão (51) 99419-2142 para orientação e socorro.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'bateria-problemas-eletricos',
    category: 'bateria',
    categoryLabel: 'BATERIA',
    title: 'Sinais de problemas no alternador e chicotes elétricos',
    duration: '5 min',
    description: 'Como saber se o problema é a bateria ou se o alternador parou de gerar os 13,8V a 14,4V necessários para manter o sistema alimentado.',
    keyTakeaways: [
      'Luz da bateria acesa com motor em funcionamento aponta defeito no alternador ou correia.',
      'Zinabre verde/branco nos pólos impede o contato correto e pode ser limpo com água morna.',
      'Cuidado com instalações clandestinas de som ou alarmes que provocam fuga de corrente.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },

  // --- MECÂNICA GERAL ---
  {
    id: 'mecanica-barulhos',
    category: 'mecanica',
    categoryLabel: 'MECÂNICA',
    title: 'Barulhos automotivos que merecem atenção urgente',
    duration: '5 min',
    description: 'Identifique os principais sons: chiado agudo ao pisar no freio, estalos metálicos ao esterçar o volante e zumbidos em velocidade de cruzeiro.',
    keyTakeaways: [
      'Chiado contínuo no freio indica que as pastilhas atingiram a lâmina de aviso.',
      'Estalo ao manobrar esterçando aponta desgaste na junta homocinética.',
      'Zumbido que aumenta com a velocidade geralmente é rolamento de roda desgastado.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'mecanica-antes-viajar',
    category: 'mecanica',
    categoryLabel: 'MECÂNICA',
    title: 'Cuidados mecânicos indispensáveis antes de viajar com a família',
    duration: '6 min',
    description: 'Checklist completo para estradas e serra gaúcha: freios em descida longa, palhetas de limpador, ar-condicionado, fluidos e triângulo/chave de roda.',
    keyTakeaways: [
      'Nunca desça a serra em ponto morto (banguela): utilize sempre o freio motor!',
      'Teste o estado das palhetas do limpador e água do esguicho antes de pegar chuva.',
      'Verifique se o macaco, estepe e chave de roda estão funcionando e acessíveis.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'mecanica-carro-nao-liga',
    category: 'mecanica',
    categoryLabel: 'MECÂNICA',
    title: 'O que fazer quando o carro não liga: primeiros passos sem risco',
    duration: '5 min',
    description: 'Passo a passo calmo para identificar se falta combustível, se o alarme bloqueou a partida ou se o motor de arranque não gira.',
    keyTakeaways: [
      'Verifique se a luz da injeção pisca rapidamente (sinal de chave codificada desprogramada).',
      'Escute o zumbido sutil na traseira ao girar o primeiro estágio da chave (bomba de combustível armando).',
      'Não insista por mais de 5 segundos seguidos na chave para não queimar o motor de partida.',
      'Se não ligar, chame o Rafa Moro no (51) 99634-7460 (comercial) ou (51) 99419-2142 (plantão após 19h).'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const VIDEOS_STORAGE_KEY = 'mecanico_rafa_moro_videos_v1';

export function getStoredVideos(): EducationalVideo[] {
  if (typeof window === 'undefined') return EDUCATIONAL_VIDEOS;
  try {
    const raw = localStorage.getItem(VIDEOS_STORAGE_KEY);
    if (!raw) return EDUCATIONAL_VIDEOS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
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
