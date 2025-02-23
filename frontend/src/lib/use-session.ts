import {useSessionStore} from "@/lib/stores";

export default function useSession(){
    return useSessionStore((state) => state.session);
}