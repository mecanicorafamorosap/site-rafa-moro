import React, { useState } from 'react';
import {
  Play,
  AlertTriangle,
  Clock,
  CheckCircle2,
  X,
  PlusCircle,
  Video,
  ShieldAlert,
  HelpCircle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import {
  EducationalVideo,
  VIDEO_CATEGORIES,
  getVisibleVideoCategories,
  getStoredVideos,
  saveStoredVideos
} from '../data/videosData';
import { MECHANIC_PHONE_CLEAN } from '../utils/emergency';

export const VideosSection: React.FC = () => {
  const [videos, setVideos] = useState<EducationalVideo[]>(() => getStoredVideos());
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [activeVideoModal, setActiveVideoModal] = useState<EducationalVideo | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New video form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<EducationalVideo['category']>('mecanica');
  const [newDesc, setNewDesc] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const categories = getVisibleVideoCategories(videos);
  const allCategories = VIDEO_CATEGORIES;

  const filteredVideos =
    activeCategory === 'todos'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // Convert youtube watch url to embed if needed
    let embedUrl = newUrl;
    if (newUrl.includes('youtube.com/watch?v=')) {
      const vidId = newUrl.split('watch?v=')[1]?.split('&')[0];
      if (vidId) embedUrl = `https://www.youtube-nocookie.com/embed/${vidId}`;
    } else if (newUrl.includes('youtu.be/')) {
      const vidId = newUrl.split('youtu.be/')[1]?.split('?')[0];
      if (vidId) embedUrl = `https://www.youtube-nocookie.com/embed/${vidId}`;
    }

    const created: EducationalVideo = {
      id: `custom-video-${Date.now()}`,
      category: newCategory,
      categoryLabel: allCategories.find((c) => c.id === newCategory)?.label || 'DICA AUTOMOTIVA',
      title: newTitle.trim(),
      duration: 'Dica do Rafa',
      description: newDesc.trim() || 'Vídeo educativo exclusivo gravado pelo Mecânico Rafa Moro.',
      keyTakeaways: [
        'Dica prática gravada na oficina.',
        'Siga as instruções técnicas para preservar seu veículo.',
        'Em caso de dúvidas, consulte nossa equipe via WhatsApp.'
      ],
      thumbnailUrl: '/assets/aistudio/LOGO_RGB_6026b6ff.png',
      videoUrl: embedUrl || undefined,
      isUserAdded: true,
    };

    const updated = [created, ...videos];
    setVideos(updated);
    saveStoredVideos(updated);
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewDesc('');
    setNewUrl('');
  };

  return (
    <section id="videos" className="py-16 bg-carbon text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-400/60 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>CENTRAL EDUCATIVA • DICAS TÉCNICAS DO RAFA MORO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight">
            APRENDA A <span className="text-red-500">CUIDAR DO SEU CARRO!</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Conhecimento prático para você prevenir quebras, economizar combustível e rodar com total segurança pelas ruas e rodovias.
          </p>
        </div>

        {/* CRITICAL SAFETY ALERT REQUIRED BY USER */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-red-950/90 border-2 border-red-600 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-600 text-white rounded-xl shrink-0 mt-0.5 animate-pulse">
              <ShieldAlert className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-black text-yellow-300 uppercase tracking-widest block font-heading">
                ⚠️ AVISO DE SEGURANÇA CRÍTICO E OBRIGATÓRIO
              </span>
              <h3 className="text-lg sm:text-2xl font-black font-heading text-white uppercase leading-snug">
                NUNCA ABRA O RESERVATÓRIO DO SISTEMA DE ARREFECIMENTO COM O MOTOR QUENTE!
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                O sistema de arrefecimento trabalha sob pressurização de aproximadamente 1.5 bar e temperaturas superiores a 90°C. Ao abrir a tampa imediatamente com o motor aquecido, o líquido ferve de forma súbita e espirra vapor e aditivo em alta pressão, provocando queimaduras extremamente graves no rosto e nas mãos. Se notar temperatura alta, estacione no acostamento, desligue o motor e aguarde esfriar totalmente antes de qualquer inspeção!
              </p>
            </div>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-zinc-900 text-gray-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-yellow-400/40 px-3.5 py-2 rounded-lg text-xs font-bold uppercase transition-colors"
          >
            <PlusCircle className="w-4 h-4 text-red-500" />
            <span>Adicionar Meu Vídeo</span>
          </button>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              className="bg-zinc-950 rounded-2xl border border-zinc-800 hover:border-red-600/80 transition-all overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={vid.thumbnailUrl}
                  alt={vid.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                {/* Official Logo Watermark in top-left */}
                <div className="absolute top-2.5 left-2.5">
                  <img
                    src="/assets/aistudio/LOGO_RGB_6026b6ff.png"
                    alt="Logo Rafa Moro"
                    className="h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                  />
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[11px] font-bold text-gray-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-yellow-400" />
                  <span>{vid.duration}</span>
                </div>

                {/* Big Center Play Button */}
                <button
                  onClick={() => setActiveVideoModal(vid)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 transform group-hover:scale-110 transition-all border border-yellow-400/80"
                  aria-label={`Assistir vídeo: ${vid.title}`}
                >
                  <Play className="w-5 h-5 ml-0.5 fill-white" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase text-yellow-400 tracking-wider block mb-1">
                    {vid.categoryLabel}
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-black font-heading text-white uppercase group-hover:text-yellow-300 transition-colors line-clamp-2">
                    {vid.title}
                  </h3>

                  <p className="text-xs text-gray-300 mt-2 line-clamp-2 group-hover:line-clamp-none group-focus-within:line-clamp-none leading-relaxed transition-all duration-300">
                    {vid.description}
                  </p>

                  {/* Specific safety warning if exists */}
                  {vid.safetyWarning && (
                    <div className="mt-3 p-2 rounded bg-red-950/60 border border-red-600/60 text-red-300 text-[11px] font-semibold flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 group-hover:line-clamp-none group-focus-within:line-clamp-none">
                        {vid.safetyWarning}
                      </span>
                    </div>
                  )}
                </div>

                {/* Watch Button */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveVideoModal(vid)}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    <span>ASSISTIR DICA TÉCNICA</span>
                  </button>

                  <a
                    href={`https://wa.me/${MECHANIC_PHONE_CLEAN}?text=${encodeURIComponent(
                      `Olá Rafa Moro! Assisti o vídeo sobre "${vid.title}" e fiquei com uma dúvida sobre meu carro.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors p-1"
                    title="Tirar dúvida no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Video Player with Full Checklist & Tips */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="bg-zinc-950 border-2 border-red-600 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                aria-label="Fechar vídeo"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="racing-border pb-3 mb-4 pr-10">
                <span className="text-xs text-yellow-400 font-bold uppercase block">
                  {activeVideoModal.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
                  {activeVideoModal.title}
                </h3>
              </div>

              {/* Video Player or Embed */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-3 border border-zinc-800">
                {activeVideoModal.videoUrl && activeVideoModal.videoUrl.includes('embed') ? (
                  <iframe
                    src={activeVideoModal.videoUrl}
                    title={activeVideoModal.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-zinc-900">
                    <img
                      src="/assets/aistudio/LOGO_RGB_6026b6ff.png"
                      alt="Logo Rafa Moro"
                      className="h-20 mb-3 object-contain drop-shadow-[0_4px_12px_rgba(220,38,38,0.5)]"
                    />
                    <p className="text-sm font-bold text-yellow-400 uppercase">
                      Vídeo Explicativo e Orientação Técnica da Oficina
                    </p>
                    <p className="text-xs text-gray-300 mt-1 max-w-md">
                      {activeVideoModal.description}
                    </p>
                  </div>
                )}
              </div>

              {activeVideoModal.videoUrl && activeVideoModal.videoUrl.includes('/embed/') && (
                <div className="mb-4 flex justify-end">
                  <a
                    href={`https://youtu.be/${activeVideoModal.videoUrl.split('/embed/')[1]?.split('?')[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir vídeo no YouTube</span>
                  </a>
                </div>
              )}

              {/* Critical safety alert if this is about cooling */}
              {activeVideoModal.safetyWarning && (
                <div className="p-3.5 mb-4 rounded-xl bg-red-950 border border-red-600 text-yellow-300 text-xs font-bold flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                  <span>{activeVideoModal.safetyWarning}</span>
                </div>
              )}

              {/* Technical description & Checklist */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed bg-zinc-900/70 border border-zinc-800 rounded-xl p-3.5">
                  {activeVideoModal.description}
                </p>

                <h4 className="text-sm font-black font-heading text-white uppercase">
                  PASSO A PASSO & RECOMENDAÇÕES DO MECÂNICO RAFA MORO:
                </h4>
                <ul className="space-y-2">
                  {activeVideoModal.keyTakeaways.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${MECHANIC_PHONE_CLEAN}?text=${encodeURIComponent(
                    `Olá Rafa Moro! Gostaria de agendar uma revisão para o meu carro com base no vídeo "${activeVideoModal.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase py-3 px-4 rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 text-yellow-300" />
                  <span>Tirar Dúvidas com Rafa Moro</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveVideoModal(null)}
                  className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-bold text-xs uppercase py-3 px-5 rounded-xl"
                >
                  Fechar
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Modal: Add YouTube Video */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-zinc-950 border-2 border-red-600 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                aria-label="Fechar modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="racing-border pb-3 mb-4">
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  CADASTRAR NOVO VÍDEO
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Adicione o link do seu vídeo do YouTube ou canal da oficina para aparecer na biblioteca.
                </p>
              </div>

              <form onSubmit={handleAddVideo} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Título do Vídeo *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ex: Como trocar o filtro de ar do motor"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Categoria *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as EducationalVideo['category'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="oleo">Óleo do Motor</option>
                    <option value="arrefecimento">Sistema de Arrefecimento</option>
                    <option value="pneus">Pneus & Calibragem</option>
                    <option value="bateria">Bateria & Elétrica</option>
                    <option value="mecanica">Mecânica Geral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Link do Vídeo no YouTube (opcional)
                  </label>
                  <input
                    type="text"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Descrição & Resumo
                  </label>
                  <textarea
                    rows={3}
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Explique os principais cuidados abordados no vídeo..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-bold py-3 px-4 rounded-xl uppercase"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black py-3 px-4 rounded-xl uppercase tracking-wider"
                  >
                    Salvar Vídeo
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
