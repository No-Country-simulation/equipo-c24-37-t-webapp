"use server"

import {cookies} from "next/headers";
import {serverEnv} from "@/config/env";
import {Session} from "@/lib/auth";

export async function getCookieData(): Promise<Session | null> {
    const cookiesStore = await cookies();
    const session = cookiesStore.get(serverEnv('COOKIE_NAME','session'));
    if(!session){
        return null;
    }
    try {
        return JSON.parse(session.value);
    }catch {
        return null;
    }
}