import {Session} from "@/lib/auth";
import {create} from "zustand/react";

export type SessionStore = {
    session: null | Session,
    setSession: (session: Session) => void,
    clearSession: () => void,
}

export const useSessionStore = create<SessionStore>((set) => ({
    session: null,
    setSession: (session: Session) => set((state) => ({...state, session})),
    clearSession: () => set({session: null}),
}));