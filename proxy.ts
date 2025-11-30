import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function proxy(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
        return NextResponse.next()
    } catch (error) {
        console.log("Middleware token verification failed:", error);
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
}

export const config = {
    matcher: '/admin/dashboard/:path*',
}