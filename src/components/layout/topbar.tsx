"use client"

import { useState } from "react"
import { Bell, Search, User, LogOut, Settings, MapPin, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="h-16 border-b bg-card flex items-center justify-between px-6 relative z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar vehículos, conductores o rutas..."
            className="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 relative">
        {/* Notificaciones */}
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => {
              setShowNotifications(!showNotifications)
              setShowProfile(false)
            }}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive animate-pulse" />
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-border shadow-lg rounded-xl overflow-hidden z-50 animate-in slide-in-from-top-2">
              <div className="bg-muted px-4 py-3 border-b border-border flex justify-between items-center">
                <span className="font-bold text-sm">Alertas Recientes</span>
                <span className="text-xs bg-destructive text-white px-2 py-0.5 rounded-full">2 Nuevas</span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                <div className="px-4 py-3 border-b border-border hover:bg-muted/50 cursor-pointer flex gap-3">
                  <div className="mt-1 bg-red-100 p-1.5 rounded-full text-red-600 h-fit">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Tráfico Pesado (TomTom)</p>
                    <p className="text-xs text-muted-foreground">Retraso de 45 min en Zona Industrial Mamonal.</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Hace 2 min</p>
                  </div>
                </div>
                <div className="px-4 py-3 border-b border-border hover:bg-muted/50 cursor-pointer flex gap-3">
                  <div className="mt-1 bg-orange-100 p-1.5 rounded-full text-orange-600 h-fit">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Desvío Detectado</p>
                    <p className="text-xs text-muted-foreground">El vehículo TRK-003 salió de la ruta planificada.</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Hace 15 min</p>
                  </div>
                </div>
              </div>
              <div className="p-2 text-center border-t border-border bg-muted/20">
                <button className="text-xs text-primary font-medium hover:underline">Ver todo el historial</button>
              </div>
            </div>
          )}
        </div>

        {/* Perfil */}
        <div className="relative border-l pl-4 ml-2">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setShowProfile(!showProfile)
              setShowNotifications(false)
            }}
          >
            <div className="flex flex-col items-end text-sm">
              <span className="font-medium">Admin Central</span>
              <span className="text-xs text-muted-foreground">Coordinador</span>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@admin" />
              <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
            </Avatar>
          </div>

          {showProfile && (
            <div className="absolute right-0 mt-4 w-56 bg-white border border-border shadow-lg rounded-xl overflow-hidden z-50 animate-in slide-in-from-top-2">
              <div className="p-4 border-b border-border">
                <p className="font-bold text-sm">Administrador</p>
                <p className="text-xs text-muted-foreground truncate">admin@conviction.com</p>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted text-left">
                  <Settings className="h-4 w-4" />
                  Configuración
                </button>
                <Link href="/" className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-red-50 text-red-600 text-left mt-1 font-medium transition-colors">
                  <LogOut className="h-4 w-4" />
                  Cerrar Sesión
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
