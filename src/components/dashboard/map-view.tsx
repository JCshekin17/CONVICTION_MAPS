"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Cargamos el mapa de forma dinámica desactivando SSR (Server Side Rendering)
// porque Leaflet necesita acceder al objeto 'window' del navegador.
const RealMap = dynamic(() => import("./map-container"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-md bg-muted/30 border border-dashed flex flex-col items-center justify-center animate-pulse">
      <p className="text-muted-foreground">Cargando mapa interactivo...</p>
    </div>
  )
})

export function MapView() {
  return (
    <Card className="col-span-1 lg:col-span-2 flex flex-col">
      <CardHeader>
        <CardTitle>Rastreo en Tiempo Real</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-[400px] p-0 md:p-6 md:pt-0">
        <div className="w-full h-full min-h-[400px] rounded-md overflow-hidden border">
          <RealMap />
        </div>
      </CardContent>
    </Card>
  )
}
