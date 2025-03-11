import apiClient from "@/config/axios";
import {Ticket} from "@/types/Ticket";
import {queryOptions, useQuery} from "@tanstack/react-query";
import {QueryConfig} from "@/lib/react-query";

export const getTicket = async (id: number) => {
    return (await apiClient.get<Ticket>(`/api/tickets/${id}`)).data;
}

export const getTicketQueryOptions = (id: number) => {
    return queryOptions({
        queryKey: ['tickets',id],
        queryFn: () => getTicket(id),
    })
}

type UseTicketsOptions = {
    id: number;
    queryConfig?: QueryConfig<typeof getTicketQueryOptions>;
}

export const useTicket = (options: UseTicketsOptions) => {
    return useQuery({
        ...getTicketQueryOptions(options.id),
        ...options.queryConfig,
    });
}
