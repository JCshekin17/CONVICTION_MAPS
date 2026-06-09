import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, FileText, Activity, AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ConductorProfile({ params }: { params: { id: string } }) {
  // En un entorno real, buscaríamos los datos por params.id
  const driver = {
    id: params.id,
    name: "Carlos Ruiz",
    license: "C2 - Vigente",
    expiration: "2026-05-10",
    status: "Activo",
    phone: "+57 300 123 4567",
    email: "carlos.ruiz@example.com",
    address: "Calle 45 # 12-34, Cartagena",
    bloodType: "O+",
    emergencyContact: "María Ruiz - +57 300 987 6543",
    rating: 4.8,
    totalRoutes: 145,
    incidents: 1
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Link href="/conductores/listado" className="p-2 hover:bg-accent rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hoja de Vida: {driver.name}</h1>
            <p className="text-muted-foreground">ID del sistema: {driver.id}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Columna Izquierda - Info Personal */}
          <Card className="md:col-span-1 h-fit">
            <CardHeader className="flex flex-col items-center justify-center text-center pb-2">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>{driver.name}</CardTitle>
              <span className={`px-2 py-1 mt-2 rounded-full text-xs ${
                driver.status === 'Activo' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {driver.status}
              </span>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-semibold text-muted-foreground block">Teléfono</span>
                  <span>{driver.phone}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground block">Email</span>
                  <span>{driver.email}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground block">Dirección</span>
                  <span>{driver.address}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground block">Tipo de Sangre</span>
                  <span>{driver.bloodType}</span>
                </div>
                <div className="pt-4 border-t">
                  <span className="font-semibold text-muted-foreground block text-xs">Contacto de Emergencia</span>
                  <span>{driver.emergencyContact}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Columna Derecha - Documentos y Desempeño */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <FileText className="h-5 w-5 mr-2 text-blue-500" />
                <CardTitle>Documentación Legal</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded-md">
                    <span className="text-xs text-muted-foreground block">Categoría de Licencia</span>
                    <span className="font-medium text-lg">{driver.license}</span>
                  </div>
                  <div className="p-3 border rounded-md">
                    <span className="text-xs text-muted-foreground block">Fecha de Vencimiento</span>
                    <span className="font-medium text-lg">{driver.expiration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Activity className="h-5 w-5 mr-2 text-green-500" />
                <CardTitle>Desempeño e Historial</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <span className="text-2xl font-bold">{driver.rating} / 5.0</span>
                    <span className="text-xs text-muted-foreground block mt-1">Calificación Promedio</span>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <span className="text-2xl font-bold">{driver.totalRoutes}</span>
                    <span className="text-xs text-muted-foreground block mt-1">Rutas Completadas</span>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <span className="text-2xl font-bold text-amber-500">{driver.incidents}</span>
                    <span className="text-xs text-muted-foreground block mt-1">Incidentes Reportados</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                <CardTitle>Últimos Incidentes</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-sm border-l-2 border-amber-500 pl-4 py-2">
                  <span className="font-semibold block">Frenada brusca detectada (Telemetría)</span>
                  <span className="text-muted-foreground">15 Mar 2026 - Ruta RT-089 (Bocagrande)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
