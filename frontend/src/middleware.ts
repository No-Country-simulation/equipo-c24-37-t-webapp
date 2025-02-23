import {NextRequest, NextResponse} from "next/server";
import Auth from "@/lib/auth";

const publicPages = [Auth.pages.login, Auth.pages.sign_up];
export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const session = await Auth.cookieData();
    if (!publicPages.includes(pathname) && !session) {
        // Redirect to login page if the user is not authenticated
        return NextResponse.redirect(new URL(Auth.pages.login,request.url));
    }
    if(publicPages.includes(pathname) && session) {
        // Redirect to dashboard if the user is authenticated
        return NextResponse.redirect(new URL(Auth.pages.app,request.url));
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
