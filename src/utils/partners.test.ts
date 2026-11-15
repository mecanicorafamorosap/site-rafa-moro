import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_PARTNERS,
  calculateCarWashDiscount
} from './partners';

test('DEFAULT_PARTNERS includes all 5 required partner categories', () => {
  const categories = DEFAULT_PARTNERS.map(p => p.category);
  assert.ok(categories.includes('guincho'));
  assert.ok(categories.includes('hotel'));
  assert.ok(categories.includes('pousada'));
  assert.ok(categories.includes('lavagem'));
  assert.ok(categories.includes('pneus'));
});

test('calculateCarWashDiscount correctly computes 30% discount', () => {
  const result = calculateCarWashDiscount(100, 30);
  assert.equal(result.original, 100);
  assert.equal(result.discount, 30);
  assert.equal(result.finalPrice, 70);

  const result75 = calculateCarWashDiscount(75, 30);
  assert.equal(result75.original, 75);
  assert.equal(result75.discount, 22.5);
  assert.equal(result75.finalPrice, 52.5);
});

test('parceiro-lavagem reflects Beck Studio and R$ 200+ 30% wax wash rule', () => {
  const lavagem = DEFAULT_PARTNERS.find((p) => p.id === 'parceiro-lavagem');
  assert.ok(lavagem);
  assert.match(lavagem.title, /Beck Studio/i);
  assert.match(lavagem.specialOffer ?? '', /200/);
  assert.match(lavagem.specialOffer ?? '', /30%/);
  assert.match(lavagem.specialOffer ?? '', /cera/i);
  assert.equal(lavagem.imageUrl, '/assets/beck-studio-estetica.jpg');
});

test('parceiro-pneus is marked as Em Breve', () => {
  const pneus = DEFAULT_PARTNERS.find((p) => p.id === 'parceiro-pneus');
  assert.ok(pneus);
  assert.equal(pneus.comingSoon, true);
  assert.match(pneus.title, /Em Breve/i);
  assert.match(pneus.specialOffer ?? '', /EM BREVE/i);
});

test('parceiro-hoteis and parceiro-pousadas are marked as Aguardando Materiais Em Breve', () => {
  const hotel = DEFAULT_PARTNERS.find((p) => p.id === 'parceiro-hoteis');
  assert.ok(hotel);
  assert.equal(hotel.comingSoon, true);
  assert.equal(hotel.imageUrl, '/assets/hotel-aguardando.jpg');
  assert.match(hotel.title, /Aguardando Materiais/i);

  const pousada = DEFAULT_PARTNERS.find((p) => p.id === 'parceiro-pousadas');
  assert.ok(pousada);
  assert.equal(pousada.comingSoon, true);
  assert.equal(pousada.imageUrl, '/assets/pousada-aguardando.jpg');
  assert.match(pousada.title, /Aguardando Materiais/i);
});
