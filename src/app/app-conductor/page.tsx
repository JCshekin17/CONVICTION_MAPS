"use client"

import { useState, useRef } from "react"
import { DriverLayout } from "@/components/layout/driver-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation, MapPin, TriangleAlert, Clock, PlayCircle, ShieldAlert, CheckCircle, Camera, PenTool, X } from "lucide-react"
import SignatureCanvas from 'react-signature-canvas'

export default function AppConductorPage() {
  const [routeActive, setRouteActive] = useState(false);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [deliverySuccess, setDeliverySuccess] = useState(false);
  const sigCanvas = useRef<any>(null);

  const handleSaveDelivery = () => {
    // Aquí iría la lógica de guardado al backend
    setShowDeliveryForm(false);
    setRouteActive(false);
    setDeliverySuccess(true);
    
    // Ocultar mensaje de éxito después de 3 segundos
    setTimeout(() => setDeliverySuccess(false), 3000);
  }

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  }

  return (
    <DriverLayout>
      <div className="p-4 space-y-4">
        
        {deliverySuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
            <CheckCircle className="h-6 w-6" />
            <div>
              <p className="font-bold">¡Entrega Legalizada!</p>
              <p className="text-sm">El comprobante ha sido enviado a central.</p>
            </div>
          </div>
        )}

        {/* Encabezado del Conductor */}
        <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-primary text-lg">Hola, Jorge Ramírez</h2>
            <p className="text-sm text-muted-foreground font-medium">Vehículo: Scania V-12</p>
          </div>
          <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            JR
          </div>
        </div>

        {/* Tarjeta de Ruta Asignada */}
        <Card className="shadow-sm border-t-4 border-t-primary">
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                RUTA ASIGNADA
              </span>
              <span className="font-mono text-sm font-bold text-muted-foreground">#RT-003</span>
            </div>
            
            <div className="space-y-4 relative">
              <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-muted"></div>
              
              <div className="flex gap-4 relative">
                <div className="bg-white border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center z-10 shrink-0">
                  <div className="bg-primary w-2 h-2 rounded-full"></div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Origen</p>
                  <p className="font-bold text-foreground">Base Logística (Mamonal)</p>
                </div>
              </div>
              
              <div className="flex gap-4 relative">
                <div className="bg-white border-2 border-destructive w-6 h-6 rounded-full flex items-center justify-center z-10 shrink-0">
                  <MapPin className="h-3 w-3 text-destructive" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Destino</p>
                  <p className="font-bold text-foreground">Centro Histórico</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold text-sm">Tiempo Est.</span>
              </div>
              <span className="font-bold text-lg text-primary">45 min</span>
            </div>
          </CardContent>
        </Card>

        {/* Botones de Acción */}
        <div className="space-y-3 mt-6">
          {!routeActive ? (
            <Button 
              onClick={() => setRouteActive(true)}
              className="w-full h-16 text-lg font-bold bg-primary hover:bg-primary/90 flex gap-2 shadow-lg"
            >
              <PlayCircle className="h-6 w-6" />
              INICIAR RUTA
            </Button>
          ) : (
            <div className="space-y-3">
              <Button 
                onClick={() => setShowDeliveryForm(true)}
                className="w-full h-16 text-lg font-bold bg-green-600 hover:bg-green-700 text-white flex gap-2 shadow-lg animate-pulse"
              >
                <CheckCircle className="h-6 w-6" />
                REGISTRAR ENTREGA
              </Button>
              <Button 
                onClick={() => setRouteActive(false)}
                variant="outline"
                className="w-full h-12 text-sm font-bold border-primary text-primary flex gap-2 shadow-sm bg-white"
              >
                <Navigation className="h-4 w-4" />
                VER MAPA EN CURSO
              </Button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 border-orange-200 text-orange-700 hover:bg-orange-50 bg-white">
              <TriangleAlert className="h-5 w-5" />
              <span className="text-xs font-bold">Reportar Tráfico</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 border-destructive text-destructive hover:bg-destructive/10 bg-white">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs font-bold">Emergencia</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal / Overlay del Formulario PoD */}
      {showDeliveryForm && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col animate-in slide-in-from-bottom-full duration-300">
          <div className="h-14 bg-primary text-white flex items-center justify-between px-4 shrink-0 shadow-md">
            <h2 className="font-bold text-lg">Prueba de Entrega (PoD)</h2>
            <button onClick={() => setShowDeliveryForm(false)} className="p-2 bg-white/20 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-24">
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground">Nombre de quien recibe</label>
              <Input placeholder="Ej. Juan Pérez" className="h-12 border-primary/30" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground">Producto que entrega</label>
              <Textarea placeholder="Descripción del paquete o carga" className="border-primary/30" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground">Estado de la entrega</label>
              <select className="flex h-12 w-full items-center justify-between rounded-md border border-primary/30 bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option>Entregado Exitosamente</option>
                <option>Entregado con Novedad (Parcial)</option>
                <option>Rechazado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground">Observaciones</label>
              <Textarea placeholder="Comentarios adicionales" className="border-primary/30" />
            </div>

            {/* Captura de Foto Mock */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground">Fotografía de Evidencia</label>
              <div className="h-32 border-2 border-dashed border-primary/40 rounded-xl bg-primary/5 flex flex-col items-center justify-center gap-2 text-primary cursor-pointer hover:bg-primary/10 transition-colors">
                <Camera className="h-8 w-8" />
                <span className="text-sm font-bold">Tomar Foto</span>
              </div>
            </div>

            {/* Canvas de Firma */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-muted-foreground">Firma del Cliente</label>
                <button onClick={clearSignature} className="text-xs text-primary font-bold hover:underline">
                  Limpiar
                </button>
              </div>
              <div className="border-2 border-primary/30 rounded-xl bg-white overflow-hidden shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                  <PenTool className="h-20 w-20" />
                </div>
                <SignatureCanvas 
                  ref={sigCanvas}
                  penColor="#0f172a"
                  canvasProps={{className: 'w-full h-40'}} 
                />
              </div>
            </div>
            
            <div className="pt-4 pb-8">
              <Button onClick={handleSaveDelivery} className="w-full h-14 text-lg font-bold shadow-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                CONFIRMAR ENTREGA
              </Button>
            </div>
          </div>
        </div>
      )}
    </DriverLayout>
  )
}
