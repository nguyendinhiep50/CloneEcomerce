import { NextRequest, NextResponse } from "next/server"

/**
 * Middleware to handle region selection and onboarding status.
 */
export async function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const isOnboarding = searchParams.get("onboarding") === "true"
  const cartId = searchParams.get("cart_id")
  const checkoutStep = searchParams.get("step")

  const redirectPath =
    request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname

  const queryString = request.nextUrl.search ? request.nextUrl.search : ""

  let redirectUrl = request.nextUrl.href

  // let response = NextResponse.redirect(redirectUrl, 307)

  // // If a cart_id is in the params, we set it as a cookie and redirect to the address step.
  // if (cartId && !checkoutStep) {
  //   redirectUrl = `${redirectUrl}&step=address`
  //   response = NextResponse.redirect(`${redirectUrl}`, 307)
  //   response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
  // }

  // // Set a cookie to indicate that we're onboarding. This is used to show the onboarding flow.
  // if (isOnboarding) {
  //   response.cookies.set("_medusa_onboarding", "true", { maxAge: 60 * 60 * 24 })
  // }

  // return response
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
}
