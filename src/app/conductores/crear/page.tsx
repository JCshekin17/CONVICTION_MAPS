"use client"

import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { UserPlus, UploadCloud, Save } from "lucide-react"

export default function CrearConductorPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alta de Operario</h1>
          <p className="text-muted-foreground">Ingresa los datos del nuevo conductor y sus documentos habilitantes.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><UserPlus className="h-5 w-5" /> Formulario de Registro</CardTitle>
            <CardDescription>Completa todos los campos obligatorios (*).</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              {/* Sección Datos Personales */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">1. Datos Personales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombres Completos *</label>
                    <input type="text" placeholder="Ej: Juan Carlos" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Apellidos *</label>
                    <input type="text" placeholder="Ej: Rodríguez Pérez" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cédula de Ciudadanía *</label>
                    <input type="text" placeholder="Ej: 1234567890" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de Sangre</label>
                    <select className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary bg-background">
                      <option value="">Seleccionar...</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Teléfono *</label>
                    <input type="tel" placeholder="Ej: 3001234567" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Correo Electrónico (Opcional)</label>
                    <input type="email" placeholder="Ej: correo@ejemplo.com" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Contacto de Emergencia</label>
                    <input type="text" placeholder="Nombre y número de contacto" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                </div>
              </div>

              {/* Sección Documentos */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">2. Documentos y Licencia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categoría de Licencia *</label>
                    <select className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary bg-background" required>
                      <option value="">Seleccionar...</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="B3">B3</option>
                      <option value="C1">C1</option>
                      <option value="C2">C2</option>
                      <option value="C3">C3</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Fecha Vencimiento Licencia *</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" required />
                  </div>
                </div>
                
                <div className="pt-4">
                  <label className="text-sm font-medium mb-2 block">Cargar Foto y Documentos (PDF, JPG)</label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <UploadCloud className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="text-sm font-medium">Haz clic para subir archivos</span>
                    <span className="text-xs text-muted-foreground">Licencia escaneada, Cédula y Foto de perfil.</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t gap-4">
                <button type="button" className="px-6 py-2 rounded-md font-medium text-sm hover:bg-muted transition-colors border">
                  Cancelar
                </button>
                <button type="button" className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 font-medium flex items-center gap-2">
                  <Save className="h-4 w-4" /> Registrar Conductor
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
