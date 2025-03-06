import React from 'react'
import {Metadata} from "next";
import {getQueryClient} from "@/lib/getQueryClient";
import {getTickets} from "@/features/view-tickets/api/get-tickets";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import TicketsTable from "@/features/view-tickets/components/TicketsTable";
import MostRecentTickets from "@/features/view-tickets/components/MostRecentTickets";

export const metadata: Metadata = {
    title: "Tickets",
    description: "Gestiona los tickets de soporte",
};

export default async function Page() {

    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['tickets'],
        queryFn: () => getTickets(),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <h2 className="font-semibold my-4 text-lg">Tickets</h2>
            <MostRecentTickets />
            <h2 className="font-semibold my-4 text-lg">Tickets recientes</h2>
            <TicketsTable />
        </HydrationBoundary>
    )
}
