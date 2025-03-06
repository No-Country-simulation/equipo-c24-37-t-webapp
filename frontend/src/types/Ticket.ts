import type {Message} from "@/types/Message";

export type Priority = 'BAJO' | 'MEDIO' | 'ALTO' | 'CRITICO';
export type Status = 'ABIERTO' | 'EN_PROGRESO' | 'RESUELTO' | 'CERRADO';

export type Ticket = {
    id: number;
    title: string;
    createdBy: string;
    priority: Priority;
    message: string;
    assignedTo: string;
    status: Status;
    startDate: Date;
    endDate: Date;
    messages: Message[];
}