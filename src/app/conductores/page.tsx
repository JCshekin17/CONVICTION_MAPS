import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConductoresPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Directorio de Conductores</h1>
        <p className="text-muted-foreground">Gestión de personal e historial de conducción.</p>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Módulo en Construcción</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">En esta vista veremos la tabla de empleados, licencias, horas manejadas y calificación de desempeño.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
