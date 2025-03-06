import {z} from "zod";

const ClientEnvSchema = z.object({
    API_URL: z.string(),
});
type ClientEnvValues = z.infer<typeof ClientEnvSchema>;

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