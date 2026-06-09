"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, TriangleAlert, CheckCircle, Navigation } from "lucide-react"

type RouteStatus = "En tránsito" | "Completada" | "Retrasada" | "Re-enrutado";

interface RouteData {
  id: string;
  driver: string;
  status: RouteStatus;
  progress: string;
  destination: string;
  delayNotice?: boolean;
}

export function RouteStatusPanel() {
  const [routes, setRoutes] = useState<RouteData[]>([
    { id: "RT-001", driver: "Carlos Ruiz", status: "En tránsito", progress: "65%", destination: "Bocagrande" },
    { id: "RT-002", driver: "Ana Gómez", status: "Completada", progress: "100%", destination: "Mamonal" },
    { id: "RT-003", driver: "Luis Pérez", status: "Retrasada", progress: "30%", destination: "Centro Histórico", delayNotice: true },
  ]);

  const handleReroute = (id: string) => {
    setRoutes(prev => prev.map(route => {
      if (route.id === id) {
        return {
          ...route,
          status: "Re-enrutado",
          progress: "45%",
          delayNotice: false,
        }
      }
      return route;
    }));
  }

  const getStatusClasses = (status: RouteStatus) => {
    switch (status) {
      case "En tránsito": return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200';
      case "Re-enrutado": return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200';
      case "Completada": return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200';
      case "Retrasada": return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200';
    }
  }

  const getProgressColor = (status: RouteStatus) => {
    switch (status) {
      case "En tránsito": return 'bg-blue-500';
      case "Re-enrutado": return 'bg-teal-500';
      case "Completada": return 'bg-green-500';
      case "Retrasada": return 'bg-red-500';
    }
  }

  return (
    <Card className="col-span-1 flex flex-col h-[500px] lg:h-auto border shadow-sm">
      <CardHeader className="pb-3 border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5 text-primary" />
          Estado de Rutas
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {routes.map((route) => (
            <div key={route.id} className={`flex flex-col space-y-2 p-4 border rounded-xl bg-card shadow-sm transition-all duration-300 ${route.delayNotice ? 'border-destructive/50 shadow-destructive/10' : ''}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-base flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {route.id}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getStatusClasses(route.status)}`}>
                  {route.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs">Operario</span>
                  <span className="font-medium">{route.driver}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Destino</span>
                  <span className="font-medium truncate block" title={route.destination}>{route.destination}</span>
                </div>
              </div>

              {route.delayNotice && (
                <div className="mt-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20 animate-in fade-in zoom-in duration-300">
                  <div className="flex gap-2 items-start mb-3">
                    <TriangleAlert className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-destructive">Alerta de Colisión Frontal</p>
                      <p className="text-xs text-muted-foreground">El camión se dirige hacia un accidente múltiple en Puente Román. Retraso estimado: +40 min.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleReroute(route.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm py-2 px-3 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Navigation className="h-4 w-4" />
                    Aplicar Desvío (Ahorra 35 min)
                  </button>
                </div>
              )}

              {route.status === "Re-enrutado" && (
                <div className="mt-2 text-xs font-medium text-teal-600 flex items-center gap-1.5 bg-teal-50 p-2 rounded-md border border-teal-100">
                  <CheckCircle className="h-4 w-4" />
                  <span>Nueva ruta enviada al GPS de {route.driver}.</span>
                </div>
              )}

              <div className="w-full bg-secondary/50 rounded-full h-2 mt-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(route.status)}`}
                  style={{ width: route.progress }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
