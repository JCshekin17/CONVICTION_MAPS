import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfiguracionPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuración del Sistema</h1>
        <p className="text-muted-foreground">Preferencias y ajustes de la cuenta empresarial.</p>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Módulo en Construcción</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Aquí se administrarán las credenciales de Supabase, alertas, perfiles de administrador y temas de color.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
