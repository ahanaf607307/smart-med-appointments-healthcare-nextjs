import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log("middleware is running");
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("middleware session token:", token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

    const { pathname } = request.nextUrl;
    const role = token.userType;

  //   if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  // if (pathname.startsWith("/dashboard/user") && role !== "general") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  //   if (pathname.startsWith("/dashboard/doctor") && role !== "doctor") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/user/:path*",
    "/dashboard/admin/:path*",
    "/dashboard/doctor/:path*",
  ],
};
