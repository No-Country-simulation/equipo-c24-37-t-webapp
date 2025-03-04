import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarMenuLinks from "@/app/app/_components/SidebarMenuLinks";


export default function AppSidebar() {
    return (
        <Sidebar variant="sidebar" collapsible="offcanvas">
            <SidebarHeader className="mx-auto"><img src="/vercel.svg" alt="logo" className="size-12"/></SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuLinks />
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
