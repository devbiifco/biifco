import { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      walletAddress?: string | null
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string
    walletAddress?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    walletAddress?: string | null
    picture?: string
  }
}