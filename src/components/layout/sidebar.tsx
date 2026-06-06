"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Truck, Map, Settings, Users } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path 
      ? "flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-md"
      : "flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
  }

  return (
    <aside className="w-64 border-r bg-card hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <span className="font-bold text-xl tracking-tight text-primary">Conviction OS</span>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          <li>
            <Link href="/" className={isActive("/")}>
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/flota" className={isActive("/flota")}>
              <Truck className="h-5 w-5" />
              <span className="font-medium">Flota</span>
            </Link>
          </li>
          <li>
            <Link href="/rutas" className={isActive("/rutas")}>
              <Map className="h-5 w-5" />
              <span className="font-medium">Rutas</span>
            </Link>
          </li>
          <li>
            <Link href="/conductores" className={isActive("/conductores")}>
              <Users className="h-5 w-5" />
              <span className="font-medium">Conductores</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Link href="/configuracion" className={isActive("/configuracion")}>
          <Settings className="h-5 w-5" />
          <span className="font-medium">Configuración</span>
        </Link>
      </div>
    </aside>
  )
}
