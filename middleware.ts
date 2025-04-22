import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/types"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is the root path or doesn't start with a locale
  if (pathname === "/" || pathname === "") {
    // Redirect to the default locale (English)
    return NextResponse.redirect(new URL(`/he`, request.url))
  }

  // Check if pathname doesn't start with a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    // Redirect to the default locale (English)
    return NextResponse.redirect(new URL(`/he${pathname}`, request.url))
  }
}

// Only run middleware on pages, not on static files or API routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

