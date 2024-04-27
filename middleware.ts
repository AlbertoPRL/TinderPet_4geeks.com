import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const isAuthenticated = cookies.get("isAuthenticated")?.value;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/tinderpet/:path*"],
};
