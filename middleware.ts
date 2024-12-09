import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/signup')
    const isOnboardingPage = req.nextUrl.pathname.startsWith('/onboarding')

    // Redirect authenticated users away from auth pages
    if (isAuthPage && isAuth && token.onboardingCompleted) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Protect dashboard and require onboarding
    if (isAuth && !token.onboardingCompleted && !isOnboardingPage && req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/onboarding', req.url))
    }

    // Prevent access to onboarding if already completed
    if (isAuth && token.onboardingCompleted && isOnboardingPage) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Allow public access to auth pages
        if (req.nextUrl.pathname.startsWith('/login') || 
            req.nextUrl.pathname.startsWith('/signup')) {
          return true
        }
        
        // Require authentication for protected routes
        return !!token
      }
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/settings/:path*',
    '/onboarding/:path*',
    '/login',
    '/signup'
  ]
}