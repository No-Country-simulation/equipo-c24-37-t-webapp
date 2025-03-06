import {login} from "@/features/login/api/actions";
import {getCookieData} from "@/lib/getCookieData";
import {useSessionStore} from "@/lib/stores";
import {register} from "@/features/register/api/actions";

export type AuthConfig = {
    login: typeof login,
    register: typeof register,
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
    register: register,
    useSetSessionState: ()=>useSessionStore((state) => state.setSession),
    cookieData: getCookieData,
    pages: {
        login: '/',
        sign_up: '/Registro',
        app: '/app',
    }
}

export default Auth;