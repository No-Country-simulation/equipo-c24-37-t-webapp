import {ColumnDef} from "@tanstack/table-core";
import {Ticket} from "@/types/Ticket";
import {formatDate} from "@/utils/date";
import {Badge, PriorityVariant, StatusVariant} from "@/components/ui/badge";

const columns: ColumnDef<Ticket>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'createdBy',
        header: 'Solicitado por',
    },
    {
        accessorKey: 'title',
        header: 'Título',
    },
    {
        accessorKey: 'assignedTo',
        header: 'Asignado',
    },
    {
        accessorKey: 'priority',
        header: 'Prioridad',
        cell: ({row}) =>
            <Badge
                priority={row.original.priority.toLocaleLowerCase() as PriorityVariant}>{row.original.priority.replace('_', ' ')}</Badge>
    },
    {
        accessorKey: 'status',
        header: 'Estado',
        cell: ({row}) =>
            <Badge
                status={row.original.status.toLocaleLowerCase() as StatusVariant}>{row.original.status.replace('_', ' ')}</Badge>
    },
    {
        accessorKey: 'startDate',
        header: 'Fecha de inicio',
        cell: ({row}) => formatDate({date: row.original.startDate}),
    },
]

export default columns;