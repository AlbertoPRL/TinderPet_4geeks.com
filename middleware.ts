import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isAuthenticated = cookies().get("isAuthenticated");
  const pets = cookies().get("pets");
  const userId = cookies().get("userId");
  const selectedPetid = cookies().get("userSelectedPetId");
  //hola

  if (isAuthenticated) {
    if (!pets || pets.value === "false") {
      console.log("redirecting to onboarding");
      // return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    if (!userId) {
      console.log("redirecting to sign-up");
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
  }

  if (!isAuthenticated && !userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (selectedPetid) {
    console.log("selectedPetid", selectedPetid);
    return NextResponse.redirect(new URL("/tinderpet/petSelector", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tinderpet/:path*"],
};
