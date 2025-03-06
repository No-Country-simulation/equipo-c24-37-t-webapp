import apiClient from "@/config/axios";
import {Ticket} from "@/types/Ticket";
import {queryOptions, useQuery} from "@tanstack/react-query";
import {QueryConfig} from "@/lib/react-query";

export const getTickets = async () => {
    return (await apiClient.get<Ticket[]>('/api/tickets/dashboard')).data;
}

export const getTicketsQueryOptions = () => {
    return queryOptions({
        queryKey: ['tickets'],
        queryFn: () => getTickets(),
    })
}

type UseTicketsOptions = {
    queryConfig?: QueryConfig<typeof getTicketsQueryOptions>;
}

export const useTickets = ({queryConfig = {}}: UseTicketsOptions) => {
    return useQuery({
        ...getTicketsQueryOptions(),
        ...queryConfig,
    });
}