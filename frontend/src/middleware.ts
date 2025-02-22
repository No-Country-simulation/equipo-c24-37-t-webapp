import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {serverEnv} from "@/config/env";
import Auth from "@/lib/auth";

const publicPages = [Auth.pages.login, Auth.pages.sign_up];
export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const cookiesStore = await cookies();
    const session = cookiesStore.get(serverEnv('COOKIE_NAME', 'session'))
    if (!publicPages.includes(pathname) && !session) {
        // Redirect to login page if the user is not authenticated
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|Assets).*)',
    ],
};
