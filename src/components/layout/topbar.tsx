import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Topbar() {
  return (
    <header className="h-16 border-b bg-card flex items-center justify-between px-6">
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
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
        </Button>
        <div className="flex items-center gap-2 border-l pl-4 ml-2">
          <div className="flex flex-col items-end text-sm">
            <span className="font-medium">Admin Central</span>
            <span className="text-xs text-muted-foreground">Coordinador</span>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@admin" />
            <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
