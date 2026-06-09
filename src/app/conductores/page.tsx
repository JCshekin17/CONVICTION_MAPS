import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Truck, UserCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ConductoresDashboard() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Panel de Operarios</h1>
          <p className="text-muted-foreground">Vista general del estado de los conductores y acceso rápido a la gestión.</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conductores</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">+4 añadidos este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En Ruta Activa</CardTitle>
              <Truck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">35% de la flota</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
              <UserCheck className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <p className="text-xs text-muted-foreground">En descanso o reserva</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas (Vencimientos)</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Licencias por expirar</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="hover:bg-accent/50 transition-colors">
            <Link href="/conductores/listado" className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Listado y Hojas de Vida</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">Busca operadores, revisa sus historiales, incidentes, vigencia de licencias y perfiles completos.</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:bg-accent/50 transition-colors">
            <Link href="/conductores/crear" className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Añadir Nuevo Operario</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">Registra un nuevo conductor, sube su documentación y asígnale credenciales para la App Móvil.</p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
