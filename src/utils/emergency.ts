export interface EmergencyRequest {
  id: string;
  createdAt: string;
  clientName: string;
  phone: string;
  vehicleModel: string;
  problemType: string;
  locationAddress: string;
  city: string;
  description: string;
  coords?: {
    latitude: number;
    longitude: number;
  };
}

export const WORKSHOP_PHONE_CLEAN = '5551996347460';
export const WORKSHOP_PHONE_DISPLAY = '(51) 99634-7460';
export const WORKSHOP_HOURS_DISPLAY = 'Segunda a Sexta: 08:30 às 12:00 e 13:30 às 19:00';

export const PLANTAO_PHONE_CLEAN = '5551994192142';
export const PLANTAO_PHONE_DISPLAY = '(51) 99419-2142';
export const PLANTAO_HOURS_DISPLAY = 'Após as 19:00 e fora do horário comercial';

// Backwards-compatible aliases for workshop commercial contact
export const MECHANIC_PHONE_CLEAN = WORKSHOP_PHONE_CLEAN;
export const MECHANIC_PHONE_DISPLAY = WORKSHOP_PHONE_DISPLAY;
export const MECHANIC_CITY = 'Santo Antônio da Patrulha – RS';
export const MECHANIC_ADDRESS = 'Rua José Juvenal Soares, 94';

export type ContactChannel = 'comercial' | 'plantao';

export const PROBLEM_TYPES = [
  'Motor não liga / Bateria arriada',
  'Superaquecimento / Vazamento de líquido',
  'Barulho anormal no motor / Câmbio',
  'Pane elétrica / Luzes e painel apagados',
  'Freio / Pedal baixo ou travado',
  'Pneu furado / Roda danificada',
  'Embreagem patinando / Sem marcha',
  'Veículo parou na estrada / Rodovia',
  'Outro problema mecânico',
] as const;

/**
 * Clean phone numbers to numbers only.
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Validate Brazilian phone (10 or 11 digits).
 */
export function isValidPhone(phone: string): boolean {
  const clean = sanitizePhone(phone);
  return clean.length === 10 || clean.length === 11;
}

/**
 * Check if a given Date (in local/Brasilia weekday hours) falls within normal physical workshop hours:
 * Monday–Friday, 08:30–12:00 and 13:30–19:00.
 * Outside those windows is considered Plantão.
 */
export function isCommercialHours(date: Date = new Date()): boolean {
  const day = date.getDay(); // 0 = Sun, 1 = Mon .. 5 = Fri, 6 = Sat
  if (day === 0 || day === 6) return false;

  const minutes = date.getHours() * 60 + date.getMinutes();
  const morningOpen = 8 * 60 + 30;  // 08:30
  const lunchStart = 12 * 60;       // 12:00
  const afternoonOpen = 13 * 60 + 30; // 13:30
  const eveningClose = 19 * 60;     // 19:00

  return (
    (minutes >= morningOpen && minutes < lunchStart) ||
    (minutes >= afternoonOpen && minutes < eveningClose)
  );
}

/**
 * Get the phone number (clean + display) for a specific channel.
 */
export function getPhoneForChannel(channel: ContactChannel): { clean: string; display: string; tel: string } {
  if (channel === 'plantao') {
    return {
      clean: PLANTAO_PHONE_CLEAN,
      display: PLANTAO_PHONE_DISPLAY,
      tel: '51994192142',
    };
  }
  return {
    clean: WORKSHOP_PHONE_CLEAN,
    display: WORKSHOP_PHONE_DISPLAY,
    tel: '51996347460',
  };
}

/**
 * Build Google Maps URL from coordinates.
 */
export function buildMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
}

/**
 * Build WhatsApp dispatch message string.
 */
export function formatEmergencyWhatsAppMessage(req: Partial<EmergencyRequest>): string {
  const lines: string[] = [
    '🚨 *SOLICITAÇÃO DE SOCORRO / PLANTÃO - MECÂNICO RAFA MORO*',
    '',
    'Olá! Preciso de socorro mecânico. Gostaria de solicitar atendimento.',
    '',
  ];

  if (req.clientName) lines.push(`👤 *Nome:* ${req.clientName.trim()}`);
  if (req.phone) lines.push(`📱 *Telefone de Contato:* ${req.phone.trim()}`);
  if (req.vehicleModel) lines.push(`🚗 *Veículo:* ${req.vehicleModel.trim()}`);
  if (req.problemType) lines.push(`⚠️ *Problema:* ${req.problemType.trim()}`);
  if (req.city) lines.push(`📍 *Cidade:* ${req.city.trim()}`);
  if (req.locationAddress) lines.push(`📌 *Local onde o carro está:* ${req.locationAddress.trim()}`);
  if (req.coords) {
    const mapsUrl = buildMapsUrl(req.coords.latitude, req.coords.longitude);
    lines.push(`🗺️ *Localização GPS exata:* ${mapsUrl}`);
  }
  if (req.description) lines.push(`📝 *Detalhes:* ${req.description.trim()}`);

  lines.push('', '⚡ *Aguardo confirmação para atendimento!*');

  return lines.join('\n');
}

/**
 * Create full WhatsApp link with prefilled emergency text targeting either Plantão or Comercial.
 */
export function createWhatsAppEmergencyLink(
  req: Partial<EmergencyRequest>,
  channel: ContactChannel = 'plantao'
): string {
  const text = formatEmergencyWhatsAppMessage(req);
  const { clean } = getPhoneForChannel(channel);
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

/**
 * Standard quick WhatsApp link for Workshop (Commercial Hours).
 */
export function createWorkshopWhatsAppLink(
  customText: string = 'Olá! Gostaria de falar com a oficina Mecânico Rafa Moro.'
): string {
  return `https://wa.me/${WORKSHOP_PHONE_CLEAN}?text=${encodeURIComponent(customText)}`;
}

/**
 * Standard quick WhatsApp link for Plantão (After Hours / Emergency).
 */
export function createPlantaoWhatsAppLink(
  customText: string = 'Olá! Preciso de socorro mecânico pelo plantão. Gostaria de solicitar atendimento.'
): string {
  return `https://wa.me/${PLANTAO_PHONE_CLEAN}?text=${encodeURIComponent(customText)}`;
}

/**
 * Standard quick emergency WhatsApp link (defaults to Plantão).
 */
export function createQuickEmergencyLink(channel: ContactChannel = 'plantao'): string {
  const { clean } = getPhoneForChannel(channel);
  const text = 'Olá! Preciso de socorro mecânico. Gostaria de solicitar atendimento.';
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}
