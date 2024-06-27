import { NextRequest } from "next/server"
import { authMiddleware } from "./auth-middleware"

export const publicPages = ["/"]

export default function middleware(req: NextRequest) {
  if (!publicPages.includes(req.nextUrl.pathname)) {
    // If it's not, execute authMiddleware
    return authMiddleware(req)
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
