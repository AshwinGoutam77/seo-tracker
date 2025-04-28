// middleware.js (Next.js 13+)
import { NextResponse } from "next/server";

export function middleware(req) {
    const user = req.cookies.get("seoTrackerUser"); // Check if the user is in cookies (or you could check session, etc.)

    if (!user) {
        // Redirect to login page if user is not authenticated
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next(); // Allow access to the page if the user is authenticated
}
