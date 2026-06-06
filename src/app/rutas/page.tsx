import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RutasPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rutas Asignadas</h1>
        <p className="text-muted-foreground">Control y seguimiento de rutas logísticas.</p>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Módulo en Construcción</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Aquí conectaremos la creación de rutas, asignación de paradas y conexión con los mapas.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
