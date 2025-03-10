"use client"
import React from 'react'
import {useParams} from "next/navigation";
import {useTicket} from "@/features/ticket-details/api/get-ticket";
import {Separator} from "@/components/ui/separator";
import {Badge, StatusVariant} from "@/components/ui/badge";

export default function TicketDetails() {

    const {ticket_id} = useParams<{ ticket_id: string }>();

    const {data: ticket} = useTicket({id: Number(ticket_id)});

    if (!ticket) return null;

    return (
        <div className="flex flex-col">
            <h2 className="font-semibold text-xl mt-4">Ticket #{ticket.id} <Badge
                status={ticket.status.toLocaleLowerCase() as StatusVariant}>{ticket.status.replace('_', ' ')}</Badge>
            </h2>
            <Separator className=" my-4"/>
            <div>
                <p><span className="font-semibold text-lg mr-2">Título:</span> {ticket.title}</p>
                <p><span className="font-semibold text-lg mr-2">Detalle:</span> {ticket.message}</p>
            </div>
            <div className="space-y-2">
                <p className="font-semibold text-lg mr-2">Mensajes: </p>
                {ticket.messages.map((message, index) => (
                    <div key={index}
                         className="border rounded-2xl bg-gray-200 border-gray-300 p-2 shadow-lg whitespace-pre-line">
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
            {/*<Button variant='default' size='xl' className="font-semibold w-fit mx-auto my-4 rounded-3xl">Responder</Button>*/}
        </div>
    )
}
