import type {Ticket} from "@/types/Ticket";

export type Message = {
    id: number;
    content: string;
    sender: string;
    time: Date;
    ticket: Ticket;
}