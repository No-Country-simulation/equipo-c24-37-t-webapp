import { isServer, QueryClient } from '@tanstack/react-query';

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                staleTime: 1000 * 60 * 5,
                refetchOnReconnect: true, // Refetch data when reconnecting to the internet
                retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Delay between retries
                retry: (failureCount) => failureCount < 3, // Retry failed requests up to 3 times
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
    if (isServer) {
        return makeQueryClient();
    }
    if (!browserQueryClient) {
        browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
}
