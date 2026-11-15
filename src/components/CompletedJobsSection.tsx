import React, { useState } from 'react';
import {
  Wrench,
  CheckCircle2,
  PlusCircle,
  X,
  MessageCircle,
  Camera,
  Trash2,
  Eye,
  Car
} from 'lucide-react';
import {
  CompletedJob,
  CompletedJobCategory,
  COMPLETED_JOB_CATEGORIES,
  getStoredCompletedJobs,
  saveStoredCompletedJobs,
  getVisibleCompletedJobCategories
} from '../data/completedJobsData';
import { MECHANIC_PHONE_CLEAN } from '../utils/emergency';

export const CompletedJobsSection: React.FC = () => {
  const [jobs, setJobs] = useState<CompletedJob[]>(() => getStoredCompletedJobs());
  const [activeCategory, setActiveCategory] = useState<'todos' | CompletedJobCategory>('todos');
  const [selectedJob, setSelectedJob] = useState<CompletedJob | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Add form state
  const [newVehicle, setNewVehicle] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<CompletedJobCategory>('mecanica');
  const [newDateLabel, setNewDateLabel] = useState('Recente na Oficina');
  const [newDescription, setNewDescription] = useState('');
  const [newHighlightsText, setNewHighlightsText] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const categories = getVisibleCompletedJobCategories(jobs);

  const filteredJobs =
    activeCategory === 'todos'
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setNewImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVehicle.trim() || !newTitle.trim()) return;

    const categoryLabel =
      COMPLETED_JOB_CATEGORIES.find((c) => c.id === newCategory)?.label || 'Oficina Geral';

    const parsedHighlights = newHighlightsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const created: CompletedJob = {
      id: `custom-job-${Date.now()}`,
      vehicle: newVehicle.trim(),
      title: newTitle.trim(),
      category: newCategory,
      categoryLabel,
      dateLabel: newDateLabel.trim() || 'Recente na Oficina',
      description:
        newDescription.trim() ||
        'Manutenção realizada na oficina Mecânico Rafa Moro com peças de qualidade e inspeção final.',
      highlights:
        parsedHighlights.length > 0
          ? parsedHighlights
          : ['Diagnóstico completo e execução técnica', 'Revisão final entregue ao proprietário'],
      imageUrl: newImageUrl.trim(),
      isUserAdded: true
    };

    const updated = [created, ...jobs];
    setJobs(updated);
    saveStoredCompletedJobs(updated);
    setActiveCategory('todos');
    setIsAddModalOpen(false);
    setNewVehicle('');
    setNewTitle('');
    setNewDateLabel('Recente na Oficina');
    setNewDescription('');
    setNewHighlightsText('');
    setNewImageUrl('');
  };

  const handleRemoveCustomJob = (jobId: string) => {
    const updated = jobs.filter((j) => j.id !== jobId);
    setJobs(updated);
    saveStoredCompletedJobs(updated);
    if (selectedJob?.id === jobId) {
      setSelectedJob(null);
    }
  };

  return (
    <section id="trabalhos" className="py-16 bg-[#0d0f14] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-red-600/60 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-red-500" />
            <span>DIÁRIO DA OFICINA • RESULTADO REAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase text-white tracking-tight text-balance">
            SERVIÇOS <span className="text-red-500">JÁ FEITOS</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Acompanhe uma amostra dos veículos e manutenções executadas no dia a dia da oficina Mecânico Rafa Moro.
          </p>
        </div>

        {/* Category Filters & Register New Job */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 ${
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
            className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-yellow-400/40 px-3.5 py-2 rounded-lg text-xs font-bold uppercase transition-colors whitespace-nowrap shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-red-500" />
            <span>Adicionar Veículo / Serviço</span>
          </button>
        </div>

        {/* Completed Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.map((job) => {
            const hasValidImage = Boolean(job.imageUrl) && !failedImages[job.id];
            return (
              <article
                key={job.id}
                className="bg-zinc-950 rounded-2xl border border-zinc-800 hover:border-red-600/70 transition-colors overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                {/* Media Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-900">
                  {hasValidImage ? (
                    <img
                      src={job.imageUrl}
                      alt={`${job.vehicle} — ${job.title}`}
                      referrerPolicy="no-referrer"
                      onError={() => setFailedImages((prev) => ({ ...prev, [job.id]: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-red-950/30 p-6 text-center">
                      <Car className="w-12 h-12 text-red-500 mb-2" />
                      <span className="text-sm font-black font-heading uppercase text-white">
                        {job.vehicle}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        Mecânico Rafa Moro • Serviço Concluído
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />

                  {job.isUserAdded && (
                    <button
                      type="button"
                      onClick={() => handleRemoveCustomJob(job.id)}
                      className="absolute top-3 right-3 bg-zinc-950/90 hover:bg-red-600 text-gray-300 hover:text-white p-2 rounded-lg border border-zinc-700 transition-colors"
                      aria-label={`Remover registro: ${job.vehicle}`}
                      title="Remover este registro"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Card Body (Clean Unboxed Metadata with Separator) */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400 mb-1.5">
                      <span>{job.vehicle}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="text-gray-400">{job.categoryLabel}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="text-red-400">{job.dateLabel}</span>
                    </div>

                    <h3 className="text-xl font-black font-heading text-white uppercase group-hover:text-yellow-400 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                      {job.description}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-zinc-800/80 space-y-1.5">
                      {job.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl border border-zinc-700 transition-colors whitespace-nowrap"
                    >
                      <Eye className="w-4 h-4 text-yellow-400" />
                      <span>Ver Detalhes</span>
                    </button>

                    <a
                      href={`https://wa.me/${MECHANIC_PHONE_CLEAN}?text=${encodeURIComponent(
                        `Olá Rafa Moro! Vi o serviço "${job.title}" (${job.vehicle}) em Serviços Já Feitos e gostaria de fazer um orçamento para o meu carro.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl border border-yellow-400/40 transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 text-yellow-300" />
                      <span>Orçamento</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Detail Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="bg-zinc-950 border-2 border-red-600 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                aria-label="Fechar detalhes do serviço"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="pr-10 pb-3 mb-4 border-b border-zinc-800">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-yellow-400 mb-1">
                  <span>{selectedJob.vehicle}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="text-gray-400">{selectedJob.categoryLabel}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
                  {selectedJob.title}
                </h3>
              </div>

              {selectedJob.imageUrl && !failedImages[selectedJob.id] && (
                <div className="rounded-xl overflow-hidden border border-zinc-800 mb-4 bg-black">
                  <img
                    src={selectedJob.imageUrl}
                    alt={`${selectedJob.vehicle} — ${selectedJob.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-80 object-cover"
                  />
                </div>
              )}

              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                {selectedJob.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400 mb-2">
                  Etapas Executadas no Veículo:
                </h4>
                <ul className="space-y-2">
                  {selectedJob.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800">
                <a
                  href={`https://wa.me/${MECHANIC_PHONE_CLEAN}?text=${encodeURIComponent(
                    `Olá Rafa Moro! Vi o trabalho feito no "${selectedJob.vehicle}" (${selectedJob.title}) e quero agendar uma avaliação.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase py-3 px-4 rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 text-yellow-300" />
                  <span>Agendar Serviço Parecido</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-bold text-xs uppercase py-3 px-5 rounded-xl"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Register New Daily Workshop Job */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-zinc-950 border-2 border-red-600 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                aria-label="Fechar cadastro de serviço"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="pb-3 mb-4 border-b border-zinc-800 pr-10">
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  ADICIONAR SERVIÇO REALIZADO
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Cadastre um veículo atendido no dia a dia para exibir na galeria da oficina.
                </p>
              </div>

              <form onSubmit={handleAddJob} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Veículo / Modelo *
                    </label>
                    <input
                      type="text"
                      required
                      value={newVehicle}
                      onChange={(e) => setNewVehicle(e.target.value)}
                      placeholder="Ex: Fiat Toro 2.0 Diesel"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Categoria *
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as CompletedJobCategory)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="mecanica">Motor & Mecânica</option>
                      <option value="arrefecimento">Arrefecimento</option>
                      <option value="eletrica">Elétrica & Injeção</option>
                      <option value="suspensao">Suspensão & Freios</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Serviço Executado *
                    </label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Ex: Troca de Correia e Bomba"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Etiqueta / Período
                    </label>
                    <input
                      type="text"
                      value={newDateLabel}
                      onChange={(e) => setNewDateLabel(e.target.value)}
                      placeholder="Ex: Hoje na Oficina"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Foto do Veículo (arquivo ou link opcional)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <label className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-yellow-400 font-bold text-xs uppercase px-3 py-2.5 rounded-lg cursor-pointer shrink-0">
                      <Camera className="w-4 h-4" />
                      <span>Escolher Foto</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="sr-only"
                      />
                    </label>
                    <input
                      type="text"
                      value={newImageUrl.startsWith('data:') ? 'Imagem carregada do dispositivo' : newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Ou cole a URL da imagem..."
                      className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Descrição do Trabalho
                  </label>
                  <textarea
                    rows={2}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Explique o problema identificado e a solução aplicada..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold uppercase mb-1">
                    Itens Executados (1 por linha)
                  </label>
                  <textarea
                    rows={2}
                    value={newHighlightsText}
                    onChange={(e) => setNewHighlightsText(e.target.value)}
                    placeholder={"Ex: Troca do kit completo\nTeste de pressão e rodagem"}
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
                    Publicar Serviço
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
