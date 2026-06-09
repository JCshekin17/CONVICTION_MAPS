"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Truck, UserCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (role: 'admin' | 'driver') => {
    // Simulamos que el backend guardó la sesión
    localStorage.setItem("userRole", role)
    
    if (role === 'admin') {
      router.push("/dashboard") // Redirige al Dashboard Corporativo
    } else {
      router.push("/app-conductor") // Redirige a la WebApp móvil
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <div className="mb-10 flex flex-col items-center">
        <Image src="/logo.png" alt="Conviction Infinite Logo" width={220} height={220} className="object-contain drop-shadow-md mb-6" />
        <h1 className="text-3xl font-bold tracking-tight text-primary">CONVICTION INFINITE</h1>
        <p className="text-muted-foreground font-medium text-lg">Logistics & Route Management</p>
      </div>

      <Card className="w-full max-w-md shadow-lg border-primary/10">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>
            Selecciona tu perfil de acceso para la demostración.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-4">
          
          <Button 
            onClick={() => handleLogin('admin')} 
            className="h-16 text-lg font-bold bg-primary hover:bg-primary/90 flex items-center gap-3"
          >
            <ShieldAlert className="h-6 w-6" />
            Entrar como Administrador
          </Button>
          
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-muted"></div>
            <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm font-medium">O ingresa como operativo</span>
            <div className="flex-grow border-t border-muted"></div>
          </div>

          <Button 
            onClick={() => handleLogin('driver')} 
            variant="outline" 
            className="h-16 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-primary/5 flex items-center gap-3"
          >
            <Truck className="h-6 w-6 text-primary" />
            Entrar como Conductor
          </Button>
          
        </CardContent>
      </Card>
      
      <p className="mt-8 text-sm text-muted-foreground flex items-center gap-1.5">
        <UserCircle className="h-4 w-4" />
        Sistema de Autenticación RBAC (Mock)
      </p>
    </div>
  )
}
