import {login} from "@/features/login/api/actions";

export type AuthConfig = {
    login: typeof login,
    pages: {
        login: string,
        sign_up: string,
        app: string,
    }
}
const Auth: AuthConfig = {
    login: login,
    pages: {
        login: '/',
        sign_up: '/sign_up',
        app: '/app',
    }
}

export default Auth;