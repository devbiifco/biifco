import { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      walletAddress: string | null
      onboardingCompleted: boolean
      role: string | null
      roles: string[]
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    walletAddress?: string | null
    onboardingCompleted: boolean
    role: string | null
    roles: string[]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    walletAddress?: string | null
    onboardingCompleted: boolean
    sub: string
    role: string | null
    roles: string[]
  }
}