// src/services/tomtom-traffic.ts

export type TrafficIncident = {
  id: string;
  type: "ACCIDENT" | "JAM" | "ROADWORKS" | "HAZARD";
  severity: "MINOR" | "MODERATE" | "SEVERE" | "UNKNOWN";
  location: [number, number]; // [lat, lng]
  delayInSeconds: number;
  magnitudeOfDelay: number; // 0 to 4 (TomTom scale)
  description: string;
  roadName: string;
};

// Coordenadas base de Cartagena de Indias (10.4000, -75.5000)
export const mockTrafficIncidents: TrafficIncident[] = [
  {
    id: "tt-inc-001",
    type: "ACCIDENT",
    severity: "SEVERE",
    location: [10.3800, -75.5350], // Manga / Puente Román
    delayInSeconds: 2400, // 40 minutos
    magnitudeOfDelay: 4,
    description: "Accidente grave múltiple, carril derecho bloqueado.",
    roadName: "Puente Román",
  },
  {
    id: "tt-inc-002",
    type: "JAM",
    severity: "MODERATE",
    location: [10.3350, -75.4800], // Zona Industrial Mamonal
    delayInSeconds: 900, // 15 minutos
    magnitudeOfDelay: 2,
    description: "Tráfico denso por salida de personal.",
    roadName: "Corredor de Carga",
  },
  {
    id: "tt-inc-003",
    type: "ROADWORKS",
    severity: "MINOR",
    location: [10.4250, -75.5450], // Av. Santander / Crespo
    delayInSeconds: 300, // 5 minutos
    magnitudeOfDelay: 1,
    description: "Mantenimiento de vía, velocidad reducida.",
    roadName: "Avenida Santander",
  },
];

/**
 * Fetch simulated traffic incidents (Mocks TomTom Traffic API)
 * In production, this will fetch from: 
 * `https://api.tomtom.com/traffic/services/5/incidentDetails...`
 */
export async function getTrafficIncidents(): Promise<TrafficIncident[]> {
  // Simular retraso de red
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTrafficIncidents);
    }, 800);
  });
}
