"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Map, BellRing, User, ShieldAlert, LogOut, X, AlertTriangle } from "lucide-react"

export function DriverLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [showAlerts, setShowAlerts] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "text-primary" : "text-muted-foreground"
  }

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    router.push("/")
  }

  return (
    <div className="flex flex-col h-screen w-full bg-background md:max-w-md md:mx-auto md:border-x shadow-2xl relative overflow-hidden">
      {/* Top Header */}
      <header className="h-14 bg-primary text-primary-foreground flex items-center justify-center shadow-md z-10 shrink-0">
        <h1 className="font-bold tracking-widest text-lg">APP CONDUCTOR</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20 bg-muted/10 relative">
        {children}
      </main>

      {/* Menú de Alertas (Bottom Sheet) */}
      {showAlerts && (
        <div className="absolute inset-0 z-30 flex flex-col justify-end bg-black/50 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl h-[60%] flex flex-col animate-in slide-in-from-bottom-full duration-300 shadow-2xl">
            <div className="p-4 border-b flex justify-between items-center shrink-0">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <BellRing className="h-5 w-5 text-primary" /> 
                Notificaciones (1)
              </h2>
              <button onClick={() => setShowAlerts(false)} className="p-2 bg-muted rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-red-700 text-sm">Alerta de Tráfico TomTom</h3>
                  <p className="text-xs text-red-600 mt-1">Tráfico denso reportado en su ruta hacia Mamonal. Considere desvío por Variante Mamonal-Gambote.</p>
                  <p className="text-[10px] text-red-400 mt-2 font-medium">Hace 5 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menú de Perfil / Logout (Bottom Sheet) */}
      {showProfile && (
        <div className="absolute inset-0 z-30 flex flex-col justify-end bg-black/50 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl h-auto flex flex-col animate-in slide-in-from-bottom-full duration-300 shadow-2xl pb-6">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> 
                Perfil del Conductor
              </h2>
              <button onClick={() => setShowProfile(false)} className="p-2 bg-muted rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="font-bold text-primary">Jorge Ramírez</p>
                <p className="text-sm text-muted-foreground">Scania V-12 (GHI-789)</p>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <LogOut className="h-5 w-5" />
                CERRAR SESIÓN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="h-20 bg-card border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] fixed bottom-0 w-full md:max-w-md flex justify-around items-center px-2 z-40 shrink-0">
        <Link 
          href="/app-conductor" 
          onClick={() => { setShowAlerts(false); setShowProfile(false); }}
          className={`flex flex-col items-center gap-1 p-2 ${isActive("/app-conductor")}`}
        >
          <Map className="h-6 w-6" />
          <span className="text-[10px] font-bold">Mi Ruta</span>
        </Link>
        <button 
          onClick={() => { setShowAlerts(!showAlerts); setShowProfile(false); }}
          className={`flex flex-col items-center gap-1 p-2 relative ${showAlerts ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          <BellRing className="h-6 w-6" />
          <span className="absolute top-2 right-3 h-2.5 w-2.5 rounded-full bg-destructive border-2 border-background animate-pulse" />
          <span className="text-[10px] font-bold">Alertas</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-destructive hover:text-red-700">
          <ShieldAlert className="h-6 w-6" />
          <span className="text-[10px] font-bold">S.O.S</span>
        </button>
        <button 
          onClick={() => { setShowProfile(!showProfile); setShowAlerts(false); }}
          className={`flex flex-col items-center gap-1 p-2 ${showProfile ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          <User className="h-6 w-6" />
          <span className="text-[10px] font-bold">Perfil</span>
        </button>
      </nav>
    </div>
  )
}
