import {SidebarProvider} from "@/components/ui/sidebar";
import {ReactNode} from "react";
import AppSidebar from "@/app/app/_components/app-sidebar";
import {AppHeader} from "@/app/app/_components/app-header";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function Layout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className="mx-auto flex h-screen w-full max-w-7xl flex-1 flex-col rounded-xl">
                <AppHeader/>
                <ScrollArea className="flex-1 p-4">
                    {children}
                </ScrollArea>
            </main>
        </SidebarProvider>
    )
}
