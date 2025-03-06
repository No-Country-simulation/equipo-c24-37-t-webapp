"use client"

import { QueryClientProvider} from "@tanstack/react-query";
import Auth, {Session} from "@/lib/auth";
import {Toaster} from "@/components/ui/sonner";
import {getQueryClient} from "@/lib/getQueryClient";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export type AppProviderProps = {
    children: React.ReactNode
    session: null | Session
}
export default function AppProvider({
                                        children,
                                        session
                                    }: AppProviderProps) {

    const queryClient = getQueryClient();

    const setSession = Auth.useSetSessionState();
    if (session) {
        setSession(session);
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
                <Toaster richColors/>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    )
}