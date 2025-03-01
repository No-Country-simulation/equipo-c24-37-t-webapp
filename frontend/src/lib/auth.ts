import {login} from "@/features/login/api/actions";
import {getCookieData} from "@/lib/getCookieData";
import {useSessionStore} from "@/lib/stores";

export type AuthConfig = {
    login: typeof login,
    useSetSessionState: ()=>(session: Session)=>void,
    cookieData: typeof getCookieData,
    pages: {
        login: string,
        sign_up: string,
        app: string,
    }
}
export type Session = {
    token: string;
    user: object;
}
const Auth: AuthConfig = {
    login: login,
    useSetSessionState: ()=>useSessionStore((state) => state.setSession),
    cookieData: getCookieData,
    pages: {
        login: '/',
        sign_up: '/sign_up',
        app: '/app',
    }
}

export default Auth;