import {Button} from "@/components/ui/button";
import {Bell, ChevronDown, UserCircle} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {SidebarTrigger} from "@/components/ui/sidebar";

export function AppHeader() {
    return (
        <header
            className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2 justify-between w-full">
                <SidebarTrigger className="md:hidden" />
                <h1 className="font-semibold text-2xl">¡Bienvenido!</h1>
                <div className="flex flex-row">
                    <Button variant="ghost"><Bell /></Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex flex-row items-center gap-2">
                                <UserCircle/> Santiago Peralta <ChevronDown/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            Hola
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}