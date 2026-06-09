"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Map, BellRing, User, ShieldAlert } from "lucide-react"

export function DriverLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-primary" : "text-muted-foreground"
  }

  return (
    <div className="flex flex-col h-screen w-full bg-background md:max-w-md md:mx-auto md:border-x shadow-2xl relative">
      {/* Top Header (Status Bar) */}
      <header className="h-14 bg-primary text-primary-foreground flex items-center justify-center shadow-md z-10 shrink-0">
        <h1 className="font-bold tracking-widest text-lg">APP CONDUCTOR</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20 bg-muted/10 relative">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="h-20 bg-card border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] fixed bottom-0 w-full md:max-w-md flex justify-around items-center px-2 z-20 shrink-0">
        <Link href="/app-conductor" className={`flex flex-col items-center gap-1 p-2 ${isActive("/app-conductor")}`}>
          <Map className="h-6 w-6" />
          <span className="text-[10px] font-bold">Mi Ruta</span>
        </Link>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground">
          <BellRing className="h-6 w-6" />
          <span className="text-[10px] font-bold">Alertas</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-destructive hover:text-red-700">
          <ShieldAlert className="h-6 w-6" />
          <span className="text-[10px] font-bold">S.O.S</span>
        </button>
        <Link href="/" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
          <User className="h-6 w-6" />
          <span className="text-[10px] font-bold">Cambiar Perfil</span>
        </Link>
      </nav>
    </div>
  )
}
