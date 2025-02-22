"use client"

import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export type AppProviderProps = {
    children: React.ReactNode
}
export default function AppProvider({
                                        children,
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
    return (
        <>
            <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
        </>
    )
}