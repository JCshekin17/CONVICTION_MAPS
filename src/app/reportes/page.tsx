"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileSpreadsheet, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import * as XLSX from "xlsx"

// Mock data based on the driver app registration fields
const MOCK_DELIVERIES = [
  {
    id: "ENT-001",
    conductor: "Jorge Ramírez",
    ruta: "#RT-003",
    fecha: "2024-05-15 14:30",
    recibe: "Juan Pérez",
    producto: "Caja de suministros médicos",
    estado: "Entregado Exitosamente",
    observaciones: "Ninguna",
    evidencia: "Sí"
  },
  {
    id: "ENT-002",
    conductor: "Carlos Mendoza",
    ruta: "#RT-004",
    fecha: "2024-05-15 15:10",
    recibe: "María Gómez",
    producto: "Lote de repuestos industriales",
    estado: "Entregado con Novedad (Parcial)",
    observaciones: "Faltó una pieza menor, se reportó a central.",
    evidencia: "Sí"
  },
  {
    id: "ENT-003",
    conductor: "Luis Fernando",
    ruta: "#RT-005",
    fecha: "2024-05-15 16:45",
    recibe: "Almacén Principal",
    producto: "Materiales de oficina",
    estado: "Entregado Exitosamente",
    observaciones: "Dejado en recepción.",
    evidencia: "Sí"
  },
  {
    id: "ENT-004",
    conductor: "Jorge Ramírez",
    ruta: "#RT-003",
    fecha: "2024-05-15 17:00",
    recibe: "Pedro Suárez",
    producto: "Paquete confidencial",
    estado: "Rechazado",
    observaciones: "Cliente no se encontraba en el domicilio.",
    evidencia: "No"
  }
]

export default function ReportesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDeliveries = MOCK_DELIVERIES.filter(delivery => 
    delivery.conductor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    delivery.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
    delivery.ruta.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleExportXLSX = () => {
    // Format data for Excel
    const dataToExport = filteredDeliveries.map(d => ({
      "ID Entrega": d.id,
      "Fecha/Hora": d.fecha,
      "Conductor": d.conductor,
      "Ruta Asignada": d.ruta,
      "Quien Recibe": d.recibe,
      "Producto/Carga": d.producto,
      "Estado de Entrega": d.estado,
      "Observaciones": d.observaciones,
      "Tiene Evidencia/Firma": d.evidencia
    }))

    // Create a new workbook and add the worksheet
    const worksheet = XLSX.utils.json_to_sheet(dataToExport)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Entregas")

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "Reporte_Entregas_Conductores.xlsx")
  }

  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Reportes y Descargas</h1>
            <p className="text-muted-foreground mt-1">
              Módulo para la generación y exportación de reportes operativos.
            </p>
          </div>
        </div>

        <Card className="border-t-4 border-t-primary shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-primary" />
                  Registro de Entregas
                </CardTitle>
                <CardDescription>
                  Historial de legalizaciones y pruebas de entrega (PoD) realizadas por los conductores.
                </CardDescription>
              </div>
              <Button onClick={handleExportXLSX} className="bg-primary hover:bg-primary/90 text-white font-medium flex gap-2">
                <Download className="h-4 w-4" />
                Exportar XLSX
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por conductor, estado, ruta..."
                  className="pl-8 border-primary/20 focus-visible:ring-primary/30"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="rounded-md border border-primary/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Fecha / Hora</TableHead>
                    <TableHead>Conductor</TableHead>
                    <TableHead>Ruta</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Producto</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDeliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.fecha}</TableCell>
                      <TableCell>{delivery.conductor}</TableCell>
                      <TableCell className="font-mono text-xs">{delivery.ruta}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          delivery.estado === 'Entregado Exitosamente' ? 'bg-green-100 text-green-700' :
                          delivery.estado === 'Rechazado' ? 'bg-red-100 text-red-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {delivery.estado}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">
                        {delivery.producto}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredDeliveries.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                        No se encontraron registros de entrega.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
