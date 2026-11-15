import test from 'node:test';
import assert from 'node:assert/strict';
import {
  EDUCATIONAL_VIDEOS,
  REMOVED_DEFAULT_VIDEO_IDS,
  getVisibleVideoCategories,
  mergeStoredVideos,
} from './videosData';

test('oleo-verificar-nivel uses hood-open dipstick cover photo and YouTube video J_aJrrVNqPA', () => {
  const target = EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-verificar-nivel');
  assert.ok(target, 'Expected oleo-verificar-nivel video entry to exist');
  assert.equal(target.thumbnailUrl, '/assets/oleo-verificar-vareta.jpg');
  assert.equal(target.videoUrl, 'https://www.youtube.com/embed/J_aJrrVNqPA?rel=0');
});

test('oleo-quando-trocar uses windshield sticker image and integrated YouTube video', () => {
  const target = EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-quando-trocar');
  assert.ok(target, 'Expected oleo-quando-trocar video entry to exist');
  assert.equal(target.thumbnailUrl, '/assets/oleo-adesivo-vidro.jpg');
  assert.equal(target.videoUrl, 'https://www.youtube.com/embed/Esg3UsXjXaA?rel=0');
});

test('oleo-problemas-lubrificacao uses technical critical warning, custom art, and YouTube video tOGqWGoK5N0', () => {
  const target = EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-problemas-lubrificacao');
  assert.ok(target, 'Expected oleo-problemas-lubrificacao video entry to exist');
  assert.equal(target.thumbnailUrl, '/assets/oleo-luz-chaleirinha.jpg');
  assert.equal(target.videoUrl, 'https://www.youtube.com/embed/tOGqWGoK5N0?rel=0');
  assert.match(target.description, /99,99%/);
  assert.match(target.description, /chaleirinha|almotolia/i);
  assert.match(target.description, /desempenho/i);
  assert.ok(target.safetyWarning && target.safetyWarning.includes('99,99%'));
});

test('mergeStoredVideos upgrades legacy and previous cached oil video entries', () => {
  const legacyVerificarNivel = {
    ...EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-verificar-nivel')!,
    thumbnailUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  };

  const legacyQuandoTrocar = {
    ...EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-quando-trocar')!,
    thumbnailUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  };

  const previousQuandoTrocar = {
    ...EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-quando-trocar')!,
    videoUrl: 'https://www.youtube.com/embed/rR09zLI3lb8?rel=0',
  };

  const legacyLubrificacao = {
    ...EDUCATIONAL_VIDEOS.find((video) => video.id === 'oleo-problemas-lubrificacao')!,
    thumbnailUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80',
    description:
      'Luz da almotolia acendendo no painel, barulho metálico de tuchos batendo, formação de borra preta na tampa de abastecimento e fumaça azulada no escapamento.',
    safetyWarning: undefined,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  };

  const merged = mergeStoredVideos([
    legacyVerificarNivel,
    legacyQuandoTrocar,
    previousQuandoTrocar,
    legacyLubrificacao,
  ]);
  assert.equal(merged[0].thumbnailUrl, '/assets/oleo-verificar-vareta.jpg');
  assert.equal(merged[0].videoUrl, 'https://www.youtube.com/embed/J_aJrrVNqPA?rel=0');
  assert.equal(merged[1].thumbnailUrl, '/assets/oleo-adesivo-vidro.jpg');
  assert.equal(merged[1].videoUrl, 'https://www.youtube.com/embed/Esg3UsXjXaA?rel=0');
  assert.equal(merged[2].videoUrl, 'https://www.youtube.com/embed/Esg3UsXjXaA?rel=0');
  assert.equal(merged[3].thumbnailUrl, '/assets/oleo-luz-chaleirinha.jpg');
  assert.equal(merged[3].videoUrl, 'https://www.youtube.com/embed/tOGqWGoK5N0?rel=0');
  assert.match(merged[3].description, /99,99%/);
  assert.ok(merged[3].safetyWarning && merged[3].safetyWarning.includes('99,99%'));
});

test('arrefecimento-reservatorio uses 1.5 bar additive burn warning, custom cover art, and YouTube video rR09zLI3lb8', () => {
  const target = EDUCATIONAL_VIDEOS.find((video) => video.id === 'arrefecimento-reservatorio');
  assert.ok(target, 'Expected arrefecimento-reservatorio video entry to exist');
  assert.match(target.title, /líquido refrigerante/i);
  assert.equal(target.thumbnailUrl, '/assets/arrefecimento-reservatorio-proibido.jpg');
  assert.equal(target.videoUrl, 'https://www.youtube.com/embed/rR09zLI3lb8?rel=0');
  assert.match(target.description, /1\.5 bar/);
  assert.ok(target.safetyWarning && target.safetyWarning.includes('1.5 bar'));
});

test('mergeStoredVideos upgrades legacy cached arrefecimento-reservatorio entry', () => {
  const legacyCoolant = {
    ...EDUCATIONAL_VIDEOS.find((video) => video.id === 'arrefecimento-reservatorio')!,
    thumbnailUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    title: 'Como verificar o reservatório de expansão com total segurança',
    description: 'O procedimento correto para inspecionar o nível e a transparência do líquido sem correr riscos desnecessários.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  };

  const merged = mergeStoredVideos([legacyCoolant]);
  assert.equal(merged[0].thumbnailUrl, '/assets/arrefecimento-reservatorio-proibido.jpg');
  assert.match(merged[0].title, /líquido refrigerante/i);
  assert.match(merged[0].description, /1\.5 bar/);
  assert.equal(merged[0].videoUrl, 'https://www.youtube.com/embed/rR09zLI3lb8?rel=0');
});

test('removed video cards are excluded from defaults and stripped from cached storage while preserving custom videos', () => {
  const ids = EDUCATIONAL_VIDEOS.map((v) => v.id);
  for (const removedId of REMOVED_DEFAULT_VIDEO_IDS) {
    assert.ok(!ids.includes(removedId), `Expected ${removedId} to be removed from EDUCATIONAL_VIDEOS`);
  }

  assert.deepEqual(ids, [
    'oleo-verificar-nivel',
    'oleo-quando-trocar',
    'oleo-problemas-lubrificacao',
    'arrefecimento-reservatorio',
    'pneus-calibrar',
  ]);

  const legacyCached = [
    ...Array.from(REMOVED_DEFAULT_VIDEO_IDS).map((id) => ({
      id,
      category: 'mecanica' as const,
      categoryLabel: 'MECÂNICA',
      title: `Legacy ${id}`,
      duration: '4 min',
      description: 'Legacy entry',
      keyTakeaways: ['Item'],
      thumbnailUrl: 'https://example.com/a.jpg',
    })),
    EDUCATIONAL_VIDEOS[0],
    {
      id: 'custom-video-123',
      category: 'mecanica' as const,
      categoryLabel: 'Mecânica Geral',
      title: 'Dica extra do Rafa',
      duration: 'Dica do Rafa',
      description: 'Vídeo adicionado pelo usuário',
      keyTakeaways: ['Item'],
      thumbnailUrl: '/assets/aistudio/LOGO_RGB_6026b6ff.png',
      isUserAdded: true,
    },
  ];

  const merged = mergeStoredVideos(legacyCached);
  assert.deepEqual(
    merged.map((v) => v.id),
    ['oleo-verificar-nivel', 'custom-video-123']
  );
});

test('getVisibleVideoCategories hides empty categories and reveals them if a custom video is present', () => {
  const defaultVisible = getVisibleVideoCategories(EDUCATIONAL_VIDEOS).map((c) => c.id);
  assert.deepEqual(defaultVisible, ['todos', 'arrefecimento', 'oleo', 'pneus']);

  const withCustomBateria = [
    ...EDUCATIONAL_VIDEOS,
    {
      id: 'custom-bateria-1',
      category: 'bateria' as const,
      categoryLabel: 'Bateria & Elétrica',
      title: 'Teste de bateria',
      duration: '2 min',
      description: 'Teste rápido',
      keyTakeaways: ['Checar tensão'],
      thumbnailUrl: '/assets/aistudio/LOGO_RGB_6026b6ff.png',
      isUserAdded: true,
    },
  ];
  const visibleWithCustom = getVisibleVideoCategories(withCustomBateria).map((c) => c.id);
  assert.deepEqual(visibleWithCustom, ['todos', 'arrefecimento', 'oleo', 'bateria', 'pneus']);
});

test('pneus-calibrar uses mechanic tire calibration cover photo and YouTube video Tt8etVThBkM', () => {
  const target = EDUCATIONAL_VIDEOS.find((video) => video.id === 'pneus-calibrar');
  assert.ok(target, 'Expected pneus-calibrar video entry to exist');
  assert.equal(target.thumbnailUrl, '/assets/pneus-calibrando-mecanico.jpg');
  assert.equal(target.videoUrl, 'https://www.youtube.com/embed/Tt8etVThBkM?rel=0');
});

test('mergeStoredVideos upgrades legacy cached pneus-calibrar entry', () => {
  const legacyTires = {
    ...EDUCATIONAL_VIDEOS.find((video) => video.id === 'pneus-calibrar')!,
    thumbnailUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  };

  const merged = mergeStoredVideos([legacyTires]);
  assert.equal(merged[0].thumbnailUrl, '/assets/pneus-calibrando-mecanico.jpg');
  assert.equal(merged[0].videoUrl, 'https://www.youtube.com/embed/Tt8etVThBkM?rel=0');
});
