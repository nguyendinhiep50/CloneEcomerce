import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * Middleware to handle region selection and onboarding status.
 */
export async function middleware(request: NextRequest) {
  const cookie = (await cookies()).get("session")?.value;
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
