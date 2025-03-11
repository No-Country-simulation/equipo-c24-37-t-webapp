"use client"
import {useTickets} from "@/features/view-tickets/api/get-tickets";
import {useMemo} from "react";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {formatDate} from "@/utils/date";
import {Badge, StatusVariant} from "@/components/ui/badge";

export default function MostRecentTickets() {
    const {data: tickets} = useTickets({});
    const mostRecentTickets = useMemo(() => {
        if (!tickets) return [];
        return tickets.slice(0, 4);
    }, [tickets]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mostRecentTickets.map(ticket => (
                <Card key={ticket.id} className="relative w-full">
                    <Link href={`/app/tickets/${ticket.id}`} className="absolute right-2 top-2" prefetch><ExternalLink/></Link>
                    <CardHeader className="p-2">
                        <p className="text-md">ID: #{ticket.id}</p>
                        <Separator/>
                        <CardTitle>{ticket.title}</CardTitle>
                        <Separator/>
                        <CardDescription>{ticket.assignedTo ? ticket.assignedTo : "-"}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-2 flex-row justify-between">
                        <Badge status={ticket.status.toLocaleLowerCase() as StatusVariant}>{ticket.status.replace('_', ' ')}</Badge>
                        <p>{formatDate({date: ticket.startDate})}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
