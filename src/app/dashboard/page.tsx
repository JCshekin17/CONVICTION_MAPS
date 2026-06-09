import { AdminLayout } from "@/components/layout/admin-layout"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { MapView } from "@/components/dashboard/map-view"
import { FleetTable } from "@/components/dashboard/fleet-table"

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Centro de Control</h1>
        <p className="text-muted-foreground">Vista general de la operación logística en tiempo real.</p>
      </div>
      
      <KpiCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MapView />
        <div className="col-span-1 flex flex-col gap-4">
            {/* Espacio para alertas rápidas o panel de control adicional */}
            <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex-1">
              <h3 className="font-semibold leading-none tracking-tight mb-4">Alertas Recientes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 mt-2 rounded-full bg-destructive" />
                  <div>
                    <p className="text-sm font-medium">Retraso en Ruta 45</p>
                    <p className="text-xs text-muted-foreground">Vehículo V-12 reporta tráfico pesado en Vía la Línea.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 mt-2 rounded-full bg-orange-500" />
                  <div>
                    <p className="text-sm font-medium">Mantenimiento Preventivo</p>
                    <p className="text-xs text-muted-foreground">Kenworth T880 (DEF-456) requiere cambio de aceite.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      <FleetTable />
    </AdminLayout>
  )
}
