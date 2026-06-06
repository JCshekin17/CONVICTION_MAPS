import { AdminLayout } from "@/components/layout/admin-layout"
import { FleetTable } from "@/components/dashboard/fleet-table"

export default function FlotaPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gestión de Flota</h1>
        <p className="text-muted-foreground">Administra todos los vehículos y su estado actual.</p>
      </div>
      
      <div className="mt-6">
        <FleetTable />
      </div>
    </AdminLayout>
  )
}
