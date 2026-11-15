import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_COMPLETED_JOBS,
  CompletedJob,
  mergeStoredCompletedJobs,
  getVisibleCompletedJobCategories
} from './completedJobsData';

test('DEFAULT_COMPLETED_JOBS includes authentic daily workshop samples with local assets', () => {
  assert.equal(DEFAULT_COMPLETED_JOBS.length, 4);
  for (const job of DEFAULT_COMPLETED_JOBS) {
    assert.ok(job.imageUrl.startsWith('/assets/trabalho-'), `Expected local job asset for ${job.id}`);
    assert.ok(job.vehicle.length > 0);
    assert.ok(job.highlights.length > 0);
  }
});

test('mergeStoredCompletedJobs preserves user-added daily vehicle jobs ahead of defaults', () => {
  const customJob: CompletedJob = {
    id: 'custom-job-123',
    vehicle: 'Fiat Strada 1.4',
    title: 'Troca de Embreagem e Atuador',
    category: 'mecanica',
    categoryLabel: 'Motor & Mecânica',
    dateLabel: 'Hoje na Oficina',
    description: 'Substituição completa do kit de embreagem.',
    highlights: ['Kit original instalado'],
    imageUrl: '',
    isUserAdded: true
  };

  const merged = mergeStoredCompletedJobs([customJob]);
  assert.equal(merged[0].id, 'custom-job-123');
  assert.equal(merged.length, DEFAULT_COMPLETED_JOBS.length + 1);
});

test('getVisibleCompletedJobCategories returns Todos plus populated categories', () => {
  const visible = getVisibleCompletedJobCategories(DEFAULT_COMPLETED_JOBS);
  const ids = visible.map((c) => c.id);
  assert.deepEqual(ids, ['todos', 'arrefecimento', 'mecanica', 'eletrica', 'suspensao']);
});
