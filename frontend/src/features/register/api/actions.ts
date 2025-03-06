"use server"
import {z} from "zod";
import {cookies} from "next/headers";
import {ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {serverEnv} from "@/config/env";
import apiClient from "@/config/axios";
import {AxiosError} from "axios";
import {redirect} from "next/navigation";
import Auth from "@/lib/auth";
import {SignUpSchema, SignUpType} from "@/validations/SignUpValidations";

const AuthCookieConfig: Partial<ResponseCookie> = {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: serverEnv('JWT_EXPIRE_TIME') / 1000,
}

const registerUser = async (userData: SignUpType) => {
    return await apiClient.post("/api/auth/register", userData)
}

export async function register({firstName, lastName, email, password, confirmPassword}: z.infer<typeof SignUpSchema>) {
    const result = SignUpSchema.safeParse({firstName, lastName, email, password, confirmPassword});
    if (!result.success) {
        return {errors: result.error.errors};
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        return {error: "Las contraseñas no coinciden"};
    }

    // Call to the API
    try {
        const response = await registerUser({firstName, lastName, email, password, confirmPassword});
        // Set the cookie
        const cookiesStore = await cookies();
        cookiesStore.set('session', JSON.stringify(response.data), AuthCookieConfig);
    } catch (error) {
        if (error instanceof AxiosError) {
            // @ts-expect-error error is an AxiosError
            return {error: error.message, errors: error.errors, code: error.code};
        }
        return {error: "Error desconocido"};
    }
    redirect(Auth.pages.login);
}