"use client"
import {useTickets} from "@/features/view-tickets/api/get-tickets";
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import columns from "@/features/view-tickets/components/TicketsTableDefinition";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export default function TicketsTable() {
    const {data: tickets} = useTickets({});
    const table = useReactTable({
        data: tickets ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
    const router = useRouter();
    return (
        <ScrollArea>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.original.id} onClick={() => router.push(`/app/ticket/${row.original.id}`)}
                                  className="cursor-pointer">
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id}>
                                    <Link href={`/app/ticket/${row.original.id}`} key={cell.id} prefetch
                                          className="hidden"/>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
            <div className="flex items-center justify-start space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Anterior
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Siguiente
                </Button>
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>
    )
}
