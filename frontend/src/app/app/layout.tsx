import {SidebarProvider} from "@/components/ui/sidebar";
import {ReactNode} from "react";
import AppSidebar from "@/app/app/_components/app-sidebar";
import {AppHeader} from "@/app/app/_components/app-header";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function Layout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className="flex h-screen w-full flex-1 flex-col rounded-xl">
                <AppHeader/>
                <ScrollArea className="flex-1">
                    <div className="w-[100vw] h-full p-4 md:w-full">
                        {children}
                    </div>
                </ScrollArea>
            </main>
        </SidebarProvider>
    )
}
