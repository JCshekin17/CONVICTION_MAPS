"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { UploadCloud, MapPin, Truck, Calendar } from "lucide-react"

export default function CrearRutasPage() {
  const [activeTab, setActiveTab] = useState<'individual' | 'masiva'>('masiva')

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Creación de Rutas</h1>
          <p className="text-muted-foreground">Planifica rutas logísticas de forma individual o carga masiva.</p>
        </div>

        <div className="flex space-x-1 border-b mb-4">
          <button 
            onClick={() => setActiveTab('masiva')}
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'masiva' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Carga Masiva (Excel/CSV)
          </button>
          <button 
            onClick={() => setActiveTab('individual')}
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'individual' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Creación Individual
          </button>
        </div>

        {activeTab === 'masiva' && (
          <Card className="border-dashed border-2">
            <CardHeader className="text-center pb-2">
              <CardTitle>Sube tu archivo de rutas</CardTitle>
              <CardDescription>Soportamos formatos .csv, .xls, .xlsx</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-12">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                <UploadCloud className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Arrastra y suelta tu archivo aquí</h3>
              <p className="text-sm text-muted-foreground mb-6">o haz clic para explorar en tus documentos</p>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 font-medium">
                Seleccionar Archivo
              </button>
              <div className="mt-8 text-xs text-muted-foreground text-center">
                <p>El archivo debe contener las columnas: Origen, Destino, ID_Conductor, Fecha.</p>
                <a href="#" className="text-blue-500 hover:underline">Descargar plantilla de ejemplo</a>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'individual' && (
          <Card>
            <CardHeader>
              <CardTitle>Asignar Nueva Ruta</CardTitle>
              <CardDescription>Completa los datos para asignar una ruta a un operador.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2"><MapPin className="h-4 w-4" /> Origen</label>
                    <input type="text" placeholder="Ej: Mamonal Km 5" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2"><MapPin className="h-4 w-4" /> Destino</label>
                    <input type="text" placeholder="Ej: Puerto de Cartagena" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2"><Truck className="h-4 w-4" /> Operario Asignado</label>
                    <select className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary bg-background">
                      <option value="">Seleccionar operador...</option>
                      <option value="1">Carlos Ruiz</option>
                      <option value="2">Ana Gómez</option>
                      <option value="3">Luis Pérez</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2"><Calendar className="h-4 w-4" /> Fecha de Ejecución</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button type="button" className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 font-medium">
                    Guardar Ruta
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
