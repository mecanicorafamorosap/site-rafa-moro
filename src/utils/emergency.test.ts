import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizePhone,
  isValidPhone,
  buildMapsUrl,
  formatEmergencyWhatsAppMessage,
  createWhatsAppEmergencyLink,
  createWorkshopWhatsAppLink,
  createPlantaoWhatsAppLink,
  isCommercialHours,
  WORKSHOP_PHONE_CLEAN,
  PLANTAO_PHONE_CLEAN
} from './emergency';

test('sanitizePhone cleans non-digits', () => {
  assert.equal(sanitizePhone('(51) 99634-7460'), '51996347460');
  assert.equal(sanitizePhone('(51) 99419-2142'), '51994192142');
});

test('isValidPhone checks 10 and 11 digits', () => {
  assert.equal(isValidPhone('51996347460'), true);
  assert.equal(isValidPhone('51994192142'), true);
  assert.equal(isValidPhone('5136621234'), true);
  assert.equal(isValidPhone('123'), false);
  assert.equal(isValidPhone(''), false);
});

test('isCommercialHours checks Mon-Fri 08:30-12:00 and 13:30-19:00', () => {
  // Monday 09:00 -> commercial
  assert.equal(isCommercialHours(new Date(2026, 10, 9, 9, 0)), true);
  // Monday 12:30 (lunch break) -> plantao
  assert.equal(isCommercialHours(new Date(2026, 10, 9, 12, 30)), false);
  // Monday 13:30 -> commercial
  assert.equal(isCommercialHours(new Date(2026, 10, 9, 13, 30)), true);
  // Friday 18:59 -> commercial
  assert.equal(isCommercialHours(new Date(2026, 10, 13, 18, 59)), true);
  // Friday 19:00 -> plantao
  assert.equal(isCommercialHours(new Date(2026, 10, 13, 19, 0)), false);
  // Saturday 10:00 -> plantao
  assert.equal(isCommercialHours(new Date(2026, 10, 14, 10, 0)), false);
  // Sunday 15:00 -> plantao
  assert.equal(isCommercialHours(new Date(2026, 10, 15, 15, 0)), false);
});

test('buildMapsUrl returns valid Google Maps coordinate query', () => {
  const url = buildMapsUrl(-29.83152, -50.51864);
  assert.equal(url, 'https://www.google.com/maps?q=-29.831520,-50.518640');
});

test('formatEmergencyWhatsAppMessage includes required text phrase and details', () => {
  const message = formatEmergencyWhatsAppMessage({
    clientName: 'Carlos Silva',
    phone: '51999998888',
    vehicleModel: 'Ford Focus 2.0',
    problemType: 'Superaquecimento / Vazamento de líquido',
    city: 'Santo Antônio da Patrulha',
    locationAddress: 'Km 34 da Freeway BR-290',
    description: 'Fumaça branca saindo do capô e ponteiro de temperatura no vermelho',
    coords: {
      latitude: -29.83,
      longitude: -50.52
    }
  });

  assert.ok(message.includes('Olá! Preciso de socorro mecânico. Gostaria de solicitar atendimento.'));
  assert.ok(message.includes('Carlos Silva'));
  assert.ok(message.includes('Ford Focus 2.0'));
  assert.ok(message.includes('Superaquecimento'));
  assert.ok(message.includes('https://www.google.com/maps?q=-29.830000,-50.520000'));
});

test('WhatsApp links route to commercial or plantao phone correctly', () => {
  const plantaoEmergency = createWhatsAppEmergencyLink({ clientName: 'Ana' }, 'plantao');
  assert.ok(plantaoEmergency.startsWith(`https://wa.me/${PLANTAO_PHONE_CLEAN}?text=`));

  const comercialEmergency = createWhatsAppEmergencyLink({ clientName: 'Ana' }, 'comercial');
  assert.ok(comercialEmergency.startsWith(`https://wa.me/${WORKSHOP_PHONE_CLEAN}?text=`));

  assert.ok(createWorkshopWhatsAppLink().startsWith(`https://wa.me/${WORKSHOP_PHONE_CLEAN}?text=`));
  assert.ok(createPlantaoWhatsAppLink().startsWith(`https://wa.me/${PLANTAO_PHONE_CLEAN}?text=`));
});
