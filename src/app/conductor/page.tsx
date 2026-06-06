"use client"

import { useState } from "react"
import { MapPin, Navigation, CheckCircle, AlertOctagon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ConductorPage() {
  const [rutaIniciada, setRutaIniciada] = useState(false)
  const [estadoRuta, setEstadoRuta] = useState<"pendiente" | "en_ruta" | "entregado" | "novedad">("pendiente")

  const handleIniciarRuta = () => {
    setRutaIniciada(true)
    setEstadoRuta("en_ruta")
  }

  const handleEntregar = () => {
    setEstadoRuta("entregado")
    setRutaIniciada(false)
  }

  const handleNovedad = () => {
    setEstadoRuta("novedad")
  }

  return (
    <div className="flex flex-col h-screen w-full bg-background md:max-w-md md:mx-auto md:border-x">
      {/* Header Conductor */}
      <header className="flex items-center justify-between p-4 border-b bg-card">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Carlos Méndez</h1>
            <p className="text-xs text-muted-foreground">Placa: ABC-123 (Volvo FH16)</p>
          </div>
        </div>
        <Badge variant={
          estadoRuta === "en_ruta" ? "success" : 
          estadoRuta === "entregado" ? "secondary" : 
          estadoRuta === "novedad" ? "destructive" : "default"
        }>
          {estadoRuta === "en_ruta" ? "En Ruta" :
           estadoRuta === "entregado" ? "Finalizado" :
           estadoRuta === "novedad" ? "Alerta" : "Pendiente"}
        </Badge>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {/* Info de la Ruta Asignada */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground uppercase tracking-wider">Ruta de Hoy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center mt-1">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <div className="w-0.5 h-8 bg-border" />
                <div className="h-3 w-3 rounded-full border-2 border-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="font-bold">Centro Logístico (Bogotá)</p>
                  <p className="text-xs text-muted-foreground">Salida: 08:00 AM</p>
                </div>
                <div>
                  <p className="font-bold">Bodega Principal (Medellín)</p>
                  <p className="text-xs text-muted-foreground">Llegada est.: 04:30 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mapa / GPS Simulado */}
        <Card className="overflow-hidden">
          <div className="h-48 bg-muted/30 relative flex flex-col items-center justify-center border-b">
            {rutaIniciada ? (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background animate-pulse" />
                <Navigation className="h-12 w-12 text-primary animate-pulse" />
                <p className="mt-2 font-medium text-primary">Transmitiendo GPS...</p>
              </>
            ) : (
              <>
                <MapPin className="h-10 w-10 text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">GPS inactivo</p>
              </>
            )}
          </div>
        </Card>

      </main>

      {/* Botones de Acción Fijos al inferior */}
      <footer className="p-4 border-t bg-card space-y-3">
        {!rutaIniciada && estadoRuta === "pendiente" && (
          <Button 
            className="w-full h-14 text-lg font-bold" 
            size="lg"
            onClick={handleIniciarRuta}
          >
            <Navigation className="mr-2 h-6 w-6" />
            Iniciar Ruta
          </Button>
        )}

        {rutaIniciada && (
          <>
            <Button 
              className="w-full h-14 text-lg font-bold bg-green-600 hover:bg-green-700 text-white" 
              size="lg"
              onClick={handleEntregar}
            >
              <CheckCircle className="mr-2 h-6 w-6" />
              Reportar Entrega
            </Button>
            
            <Button 
              className="w-full h-14 text-lg font-bold" 
              variant="destructive" 
              size="lg"
              onClick={handleNovedad}
            >
              <AlertOctagon className="mr-2 h-6 w-6" />
              Reportar Novedad
            </Button>
          </>
        )}

        {estadoRuta === "entregado" && (
          <div className="text-center p-4 text-green-500 font-bold bg-green-500/10 rounded-lg">
            ¡Ruta completada con éxito!
          </div>
        )}

        {estadoRuta === "novedad" && (
          <div className="text-center p-4 text-destructive font-bold bg-destructive/10 rounded-lg">
            Novedad reportada a central. Espere instrucciones.
          </div>
        )}
      </footer>
    </div>
  )
}
