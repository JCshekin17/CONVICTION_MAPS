import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const fleetData = [
  {
    id: "V-01",
    driver: "Carlos Méndez",
    vehicle: "Volvo FH16",
    plate: "ABC-123",
    status: "En ruta",
    destination: "Cartagena (Bocagrande)",
  },
  {
    id: "V-02",
    driver: "Luis Torres",
    vehicle: "Scania R500",
    plate: "XYZ-987",
    status: "Disponible",
    destination: "N/A",
  },
  {
    id: "V-03",
    driver: "Andrés Silva",
    vehicle: "Kenworth T880",
    plate: "DEF-456",
    status: "Mantenimiento",
    destination: "Taller Principal",
  },
  {
    id: "V-12",
    driver: "Jorge Ramírez",
    vehicle: "Scania V-12",
    plate: "GHI-789",
    status: "En ruta",
    destination: "Cartagena (Mamonal)",
  },
]

export function FleetTable() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <CardTitle>Gestión de Flota</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Unidad</TableHead>
              <TableHead>Conductor</TableHead>
              <TableHead>Vehículo / Placa</TableHead>
              <TableHead>Destino</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fleetData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.driver}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{item.vehicle}</span>
                    <span className="text-xs text-muted-foreground">{item.plate}</span>
                  </div>
                </TableCell>
                <TableCell>{item.destination}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "En ruta"
                        ? "success"
                        : item.status === "Disponible"
                        ? "secondary"
                        : "warning"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
