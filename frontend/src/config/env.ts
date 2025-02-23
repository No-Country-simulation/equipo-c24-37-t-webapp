import { z } from "zod";

const ServerEnvSchema = z.object({
    JWT_EXPIRE_TIME: z.coerce.number(),
    COOKIE_NAME: z.string(),
    SECRET: z.string(),
});

const ClientEnvSchema = z.object({
    API_URL: z.string(),
});

type ServerEnvValues = z.infer<typeof ServerEnvSchema>;
type ClientEnvValues = z.infer<typeof ClientEnvSchema>;

function createServerEnv() {
    const serverEnv = {
        JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
        COOKIE_NAME: process.env.COOKIE_NAME,
        SECRET: process.env.SECRET,
    };

    const parsedEnv = ServerEnvSchema.safeParse(serverEnv);
    if (!parsedEnv.success) {
        throw new Error(
            `Invalid server environment variables: 
            ${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([key, value]) => ` - ${key}: ${value}`)
                .join('\n')}`
        );
    }
    return parsedEnv.data;
}

function createClientEnv() {
    const clientEnv = {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
    };

    const parsedEnv = ClientEnvSchema.safeParse(clientEnv);
    if (!parsedEnv.success) {
        throw new Error(
            `Invalid client environment variables: 
            ${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([key, value]) => ` - ${key}: ${value}`)
                .join('\n')}`
        );
    }
    return parsedEnv.data;
}

// Server-side environment utility
const SERVER_ENV = createServerEnv();
export const serverEnv = <K extends keyof ServerEnvValues>(
    key: K,
    fallback?: ServerEnvValues[K]
): ServerEnvValues[K] => {
    if (typeof window !== 'undefined') {
        throw new Error('Server environment variables cannot be accessed on the client side');
    }

    if (!SERVER_ENV[key]) {
        if (fallback === undefined) {
            throw new Error(`Missing server environment variable: ${key}`);
        }
        return fallback;
    }
    return SERVER_ENV[key];
};

// Client-side environment utility
const CLIENT_ENV = createClientEnv();
export const clientEnv = <K extends keyof ClientEnvValues>(
    key: K,
    fallback?: ClientEnvValues[K]
): ClientEnvValues[K] => {
    if (!CLIENT_ENV[key]) {
        if (fallback === undefined) {
            throw new Error(`Missing client environment variable: ${key}`);
        }
        return fallback;
    }
    return CLIENT_ENV[key];
};
