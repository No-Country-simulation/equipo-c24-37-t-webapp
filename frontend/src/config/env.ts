import {z} from "zod";

const EnvSchema = z.object({
    API_URL: z.string(),
});

const createEnv = () => {

    const envVars = {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
    }

    const parsedEnv = EnvSchema.safeParse(envVars);

    if (!parsedEnv.success) {
        throw new Error((
            `Invalid environment variables: 
            ${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([key, value]) => ` - ${key}: ${value}`)
                .join('\n')}`
        ))
    }

    return parsedEnv.data ?? {};
}

type EnvKeys = keyof z.infer<typeof EnvSchema>;
const ENV = createEnv();

export const env = (key: EnvKeys) => {
    if (!ENV[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return ENV[key];
}