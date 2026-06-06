import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function MapView() {
  return (
    <Card className="col-span-1 lg:col-span-2 flex flex-col">
      <CardHeader>
        <CardTitle>Rastreo en Tiempo Real (Google Maps)</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-[400px]">
        {/* Placeholder para la integración real de Google Maps */}
        <div className="w-full h-full rounded-md bg-muted/30 border border-dashed flex flex-col items-center justify-center relative overflow-hidden">
          {/* Fondo simulando el mapa */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
          
          <MapPin className="h-10 w-10 text-primary mb-4 animate-bounce" />
          <p className="text-muted-foreground">Vista de Mapa Simulada</p>
          <p className="text-xs text-muted-foreground mt-2">Los marcadores en vivo aparecerán aquí</p>

          {/* Vehículos simulados */}
          <div className="absolute top-[20%] left-[30%] flex flex-col items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
            <div className="w-3 h-3 bg-green-500 rounded-full relative z-10" />
            <span className="text-[10px] mt-1 font-semibold text-foreground bg-background/80 px-1 rounded">V-01</span>
          </div>
          
          <div className="absolute top-[60%] left-[70%] flex flex-col items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping absolute" />
            <div className="w-3 h-3 bg-orange-500 rounded-full relative z-10" />
            <span className="text-[10px] mt-1 font-semibold text-foreground bg-background/80 px-1 rounded">V-12</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
