import {Metadata} from "next";
import {getQueryClient} from "@/lib/getQueryClient";
import {getTickets} from "@/features/view-tickets/api/get-tickets";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import MostRecentTickets from "@/features/view-tickets/components/MostRecentTickets";
import TicketDetails from "@/features/ticket-details/components/TicketDetails";
import {getTicket} from "@/features/ticket-details/api/get-ticket";

export const metadata: Metadata = {
    title: "Ticket",
    description: "Ticket específico",
};

export default async function Page({params}: { params: Promise<{ ticket_id: string }> }) {

    const queryClient = getQueryClient();
    const {ticket_id} = await params;

    await queryClient.prefetchQuery({
        queryKey: ['tickets', Number(ticket_id)],
        queryFn: () => getTicket(Number(ticket_id)),
    })

    await queryClient.prefetchQuery({
        queryKey: ['tickets'],
        queryFn: () => getTickets(),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <h2 className="font-semibold my-4 text-lg">Tickets</h2>
            <MostRecentTickets/>
            <TicketDetails/>
        </HydrationBoundary>
    )
}
