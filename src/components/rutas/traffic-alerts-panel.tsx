"use client"

import { useEffect, useState } from "react"
import { getTrafficIncidents, TrafficIncident } from "@/services/tomtom-traffic"
import { TriangleAlert, Cone, Clock, CarFront, Radio } from "lucide-react"

export function TrafficAlertsPanel() {
  const [incidents, setIncidents] = useState<TrafficIncident[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTraffic() {
      const data = await getTrafficIncidents()
      setIncidents(data)
      setLoading(false)
    }
    loadTraffic()
  }, [])

  const getIncidentIcon = (type: string) => {
    switch (type) {
      case "ACCIDENT": return <TriangleAlert className="h-5 w-5 text-destructive" />
      case "ROADWORKS": return <Cone className="h-5 w-5 text-yellow-500" />
      case "JAM": return <CarFront className="h-5 w-5 text-orange-500" />
      default: return <TriangleAlert className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "SEVERE": return <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-destructive/10 text-destructive">Grave</span>
      case "MODERATE": return <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-500">Moderado</span>
      case "MINOR": return <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-600">Leve</span>
      default: return null
    }
  }

  return (
    <div className="bg-card rounded-lg border shadow-sm flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between bg-muted/30">
        <div className="flex items-center gap-2">
          <Radio className="h-5 w-5 text-primary animate-pulse" />
          <h3 className="font-bold text-foreground">TomTom Traffic API</h3>
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
          LIVE
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse flex gap-3 p-3 border rounded-md">
                <div className="w-10 h-10 bg-muted rounded-full shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : incidents.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <CarFront className="h-8 w-8 mx-auto mb-2 opacity-20" />
            <p>Vías despejadas</p>
          </div>
        ) : (
          incidents.map((incident) => (
            <div key={incident.id} className="p-3 border rounded-md hover:bg-muted/50 transition-colors flex gap-3">
              <div className="shrink-0 mt-0.5">
                {getIncidentIcon(incident.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm truncate pr-2">{incident.roadName}</h4>
                  {getSeverityBadge(incident.severity)}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {incident.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>+{Math.round(incident.delayInSeconds / 60)} min de retraso</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
