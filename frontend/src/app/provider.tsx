"use client"

import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Auth, {Session} from "@/lib/auth";
import {useSessionStore} from "@/lib/stores";

export type AppProviderProps = {
    children: React.ReactNode
    session: null | Session
}
export default function AppProvider({
                                        children,
                                        session
                                    }: AppProviderProps) {
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    retry: true,
                    refetchOnWindowFocus: true,
                },
            },
        });
    })

    const setSession = Auth.useSetSessionState();
    if (session) {
        setSession(session);
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>
    )
}