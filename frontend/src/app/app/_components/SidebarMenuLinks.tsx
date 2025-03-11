"use client"

import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Archive, HelpCircle, History, Home, Search, Ticket} from "lucide-react";

const items = [
    {
        title: 'Inicio',
        url: '/app',
        icon: Home,
    },
    {
        title: 'Tickets Abiertos',
        url: '/app/tickets',
        icon: Ticket,
    },
    {
        title: 'Búsqueda Avanzada',
        url: '/app/search',
        icon: Search,
    },
    {
        title: 'Historial',
        url: '/app/history',
        icon: History,
    },
    {
        title: 'Tickets Cerrados',
        url: '/app/closed-tickets',
        icon: Archive,
    },
    {
        title: 'Ayuda',
        url: '/app/help',
        icon: HelpCircle,
    }
]
export default function SidebarMenuLinks() {
    const pathname = usePathname();
    return (
        <>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                        <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </>
    )
}
