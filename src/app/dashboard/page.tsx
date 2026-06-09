import { AdminLayout } from "@/components/layout/admin-layout"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { MapView } from "@/components/dashboard/map-view"
import { FleetTable } from "@/components/dashboard/fleet-table"

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Centro de Control</h1>
          <p className="text-muted-foreground">Vista general de la operación logística en tiempo real.</p>
        </div>
        <a 
          href="/reportes" 
          className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          Módulo de Descargas
        </a>
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
