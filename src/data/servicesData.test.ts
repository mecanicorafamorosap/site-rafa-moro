import test from 'node:test';
import assert from 'node:assert/strict';
import { AUTO_SERVICES } from './servicesData';

test('socorro-24h uses custom night roadside assistance and scanner cover photo', () => {
  const target = AUTO_SERVICES.find((service) => service.id === 'socorro-24h');
  assert.ok(target, 'Expected socorro-24h service entry to exist');
  assert.equal(target.title, 'Plantão Emergencial & Rodovia 24h');
  assert.equal(target.imageUrl, '/assets/socorro-madrugada-scanner.jpg');
});
