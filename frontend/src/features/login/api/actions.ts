"use server"
import {LoginSchema, LoginType} from "@/validations/LoginValidation";
import {z} from "zod";
import {cookies} from "next/headers";
import {ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {serverEnv} from "@/config/env";
import apiClient from "@/config/axios";
import {AxiosError} from "axios";
import {redirect} from "next/navigation";
import Auth from "@/lib/auth";

const AuthCookieConfig: Partial<ResponseCookie> = {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: serverEnv('JWT_EXPIRE_TIME') / 1000,
}
const requestToken = async (credentials: LoginType) => {
    return await apiClient.post("/auth/login", credentials)
}

export async function login({email, password}: z.infer<typeof LoginSchema>) {
    const result = LoginSchema.safeParse({email, password});
    if (!result.success) {
        return {error: result.error.errors};
    }

    // Call to the API
    try {
        const response = await requestToken({email, password});
        // fetch user data
        // Set the cookie
        const cookiesStore = await cookies();
        cookiesStore.set('session', JSON.stringify(response.data), AuthCookieConfig);
        // Redirect to the dashboard
        redirect(Auth.pages.app);
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response) {
                return {error: error.response.data};
            } else {
                // @ts-expect-error error is an AxiosError
                return {error: error.message, errors: error.errors, code: error.code};
            }
        }
        return {error: error};
    }
}