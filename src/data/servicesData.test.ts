import test from 'node:test';
import assert from 'node:assert/strict';
import { AUTO_SERVICES } from './servicesData';

test('socorro-24h uses custom night roadside assistance and scanner cover photo', () => {
  const target = AUTO_SERVICES.find((service) => service.id === 'socorro-24h');
  assert.ok(target, 'Expected socorro-24h service entry to exist');
  assert.equal(target.title, 'Plantão Emergencial & Rodovia 24h');
  assert.equal(target.imageUrl, '/assets/socorro-madrugada-scanner.jpg');
});

test('arrefecimento-upgrade uses custom open-hood steaming coolant reservoir cover photo', () => {
  const target = AUTO_SERVICES.find((service) => service.id === 'arrefecimento-upgrade');
  assert.ok(target, 'Expected arrefecimento-upgrade service entry to exist');
  assert.equal(target.title, 'Sistema de Arrefecimento');
  assert.equal(target.imageUrl, '/assets/servico-arrefecimento-vapor.jpg');
});

test('eletrica-injecao uses custom wiring diagram and mechanic with scanner cover photo', () => {
  const target = AUTO_SERVICES.find((service) => service.id === 'eletrica-injecao');
  assert.ok(target, 'Expected eletrica-injecao service entry to exist');
  assert.equal(target.title, 'Elétrica Automotiva & Injeção Eletrônica');
  assert.equal(target.imageUrl, '/assets/servico-eletrica-diagrama.jpg');
});

test('mecanica-geral uses custom workbench engine and mechanic cover photo', () => {
  const target = AUTO_SERVICES.find((service) => service.id === 'mecanica-geral');
  assert.ok(target, 'Expected mecanica-geral service entry to exist');
  assert.equal(target.title, 'Mecânica Geral & Motores');
  assert.equal(target.imageUrl, '/assets/servico-mecanica-motor.jpg');
});

test('revisao-viagem uses custom car lift suspension inspection cover photo', () => {
  const target = AUTO_SERVICES.find((service) => service.id === 'revisao-viagem');
  assert.ok(target, 'Expected revisao-viagem service entry to exist');
  assert.equal(target.title, 'Revisão Preventiva Pré-Viagem');
  assert.equal(target.imageUrl, '/assets/servico-revisao-elevacar.jpg');
});

