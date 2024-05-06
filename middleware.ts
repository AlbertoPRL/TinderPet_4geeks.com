import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isAuthenticated = cookies().get("isAuthenticated")?.value;
  const pets = cookies().get("pets")?.value;
  const userId = cookies().get("userId")?.value;


  if (request.nextUrl.pathname.startsWith("/tinderpet")) {
    if (isAuthenticated === "true" && pets === "false" && userId !== "") {
      console.log("redirecting to onboarding");
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    if (isAuthenticated && !userId && !pets) {
      console.log("redirecting to sign in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (!isAuthenticated && !userId && !pets) {
      console.log("redirecting to sign up");
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }

    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/onboarding")) {
    if (isAuthenticated && !userId && !pets) {
      console.log("redirecting to sign in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (!isAuthenticated && !userId && !pets) {
      console.log("redirecting to sign up");
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }

    return NextResponse.next();
  }
}

// export const config = {
//   matcher: ["/tinderpet/:path*"],
// };
