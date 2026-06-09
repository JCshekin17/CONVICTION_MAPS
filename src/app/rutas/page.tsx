import { AdminLayout } from "@/components/layout/admin-layout"
import { MapView } from "@/components/dashboard/map-view"
import { RouteStatusPanel } from "@/components/rutas/route-status-panel"
import { TrafficAlertsPanel } from "@/components/rutas/traffic-alerts-panel"
import Link from "next/link"

export default function RutasPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Módulo de Visualización de Rutas</h1>
            <p className="text-muted-foreground">Monitoreo en tiempo real de trayectos y alertas viales (TomTom).</p>
          </div>
          <Link href="/rutas/crear" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 flex items-center gap-2">
            Planificar Rutas
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-2 h-[600px]">
          <MapView />
          <RouteStatusPanel />
          <TrafficAlertsPanel />
        </div>
      </div>
    </AdminLayout>
  )
}
