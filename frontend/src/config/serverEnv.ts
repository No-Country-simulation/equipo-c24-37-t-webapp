import {z} from "zod";

const ServerEnvSchema = z.object({
    JWT_EXPIRE_TIME: z.coerce.number(),
    COOKIE_NAME: z.string(),
});

type ServerEnvValues = z.infer<typeof ServerEnvSchema>;

function createServerEnv() {
    const serverEnv = {
        JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
        COOKIE_NAME: process.env.COOKIE_NAME,
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

