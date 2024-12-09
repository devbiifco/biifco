import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import { decrypt } from "@/lib/encryption"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { password } = body

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        hashedPassword: true,
        walletKey: true,
      },
    })

    if (!user || !user.hashedPassword || !user.walletKey) {
      return new NextResponse("User not found or wallet not initialized", { status: 404 })
    }

    const isValidPassword = await bcrypt.compare(password, user.hashedPassword)
    if (!isValidPassword) {
      return new NextResponse("Invalid password", { status: 401 })
    }

    const privateKey = decrypt(user.walletKey)

    return NextResponse.json({ privateKey })
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}