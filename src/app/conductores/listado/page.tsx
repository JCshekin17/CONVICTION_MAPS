import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Search } from "lucide-react"

const mockDrivers = [
  { id: "1", name: "Carlos Ruiz", license: "C2", expiration: "2026-05-10", status: "Activo", phone: "+57 300 123 4567" },
  { id: "2", name: "Ana Gómez", license: "C3", expiration: "2025-11-20", status: "Activo", phone: "+57 311 987 6543" },
  { id: "3", name: "Luis Pérez", license: "C2", expiration: "2024-08-15", status: "Inactivo", phone: "+57 320 456 7890" },
];

export default function ConductoresListado() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Listado de Operarios</h1>
            <p className="text-muted-foreground">Consulta el directorio de conductores y accede a sus hojas de vida.</p>
          </div>
          <Link href="/conductores/crear" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            Añadir Conductor
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Directorio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4 border rounded-md px-3 py-2 bg-background w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <input type="text" placeholder="Buscar por nombre o licencia..." className="bg-transparent outline-none w-full text-sm" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Licencia</th>
                    <th className="px-6 py-3">Vencimiento</th>
                    <th className="px-6 py-3">Estado</th>
                    <th className="px-6 py-3">Teléfono</th>
                    <th className="px-6 py-3">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDrivers.map((driver) => (
                    <tr key={driver.id} className="border-b last:border-0 hover:bg-muted/20">
                      <td className="px-6 py-4 font-medium">{driver.name}</td>
                      <td className="px-6 py-4">{driver.license}</td>
                      <td className="px-6 py-4">{driver.expiration}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          driver.status === 'Activo' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {driver.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{driver.phone}</td>
                      <td className="px-6 py-4">
                        <Link href={`/conductores/${driver.id}`} className="text-blue-600 hover:underline">
                          Ver Perfil (CV)
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
