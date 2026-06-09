"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet"
import L from "leaflet"
import { getTrafficIncidents, TrafficIncident } from "@/services/tomtom-traffic"

// Icono de camión personalizado con SVG inline
const truckSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`;

const truckIcon = L.divIcon({
  html: `<div style="background-color: #0f172a; color: white; padding: 6px; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; justify-content: center; align-items: center; width: 34px; height: 34px;">${truckSvg}</div>`,
  className: 'custom-truck-icon',
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -17]
});

export default function RealMapContainer() {
  const [mounted, setMounted] = useState(false)
  const [incidents, setIncidents] = useState<TrafficIncident[]>([])

  useEffect(() => {
    setMounted(true)
    // Cargar incidentes de TomTom (Mock)
    getTrafficIncidents().then(setIncidents)
  }, [])

  if (!mounted) return <div className="w-full h-full bg-muted animate-pulse" />

  // Coordenadas centrales: Colombia (Cartagena de Indias)
  const position: [number, number] = [10.4050, -75.5200]
  const trucks = [
    { id: "V-01", position: [10.4020, -75.5530] as [number, number], name: "Carlos Méndez (Volvo FH16)", status: "En Ruta (Bocagrande)" },
    { id: "V-12", position: [10.3180, -75.4920] as [number, number], name: "Jorge Ramírez (Scania)", status: "Retraso (Zona Industrial Mamonal)" },
  ]

  // Función para obtener color según severidad
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "SEVERE": return "#ef4444" // destructive/red
      case "MODERATE": return "#f97316" // orange
      case "MINOR": return "#eab308" // yellow
      default: return "#64748b" // gray
    }
  }

  return (
    <MapContainer 
      center={position} 
      zoom={11} 
      style={{ height: "100%", width: "100%", borderRadius: "inherit", zIndex: 0 }}
    >
      {/* TileLayer de OpenStreetMap (Gratuito y realista) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {trucks.map((truck) => (
        <Marker key={truck.id} position={truck.position} icon={truckIcon}>
          <Popup>
            <div className="font-sans">
              <p className="font-bold m-0">{truck.id}</p>
              <p className="text-sm text-gray-600 m-0">{truck.name}</p>
              <p className="text-xs font-semibold mt-1 p-1 bg-green-100 text-green-800 rounded inline-block">
                {truck.status}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Renderizar Incidentes de Tráfico */}
      {incidents.map((incident) => (
        <CircleMarker 
          key={incident.id}
          center={incident.location}
          pathOptions={{ 
            color: getSeverityColor(incident.severity), 
            fillColor: getSeverityColor(incident.severity),
            fillOpacity: 0.6,
            weight: 2
          }}
          radius={incident.severity === "SEVERE" ? 12 : 8}
        >
          <Popup>
            <div className="font-sans max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm" style={{ color: getSeverityColor(incident.severity) }}>
                  Alerta TomTom
                </span>
              </div>
              <p className="font-semibold text-xs m-0">{incident.roadName}</p>
              <p className="text-xs text-gray-600 mt-1 mb-1">{incident.description}</p>
              <p className="text-xs font-medium text-red-600 m-0">
                +{Math.round(incident.delayInSeconds / 60)} min retraso
              </p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}
