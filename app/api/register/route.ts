import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"
import { createWallet } from "@/lib/web3"
import { encrypt } from "@/lib/encryption"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, password } = body

    if (!email || !name || !password) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 })
    }

    // Create wallet and encrypt private key
    const { address: walletAddress, privateKey } = await createWallet()
    const encryptedPrivateKey = encrypt(privateKey)

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        walletAddress,
        walletKey: encryptedPrivateKey,
        roles: [], // Initialize empty roles array
        onboardingCompleted: false,
        subscription: {
          create: {
            plan: "starter",
            status: "active",
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days trial
          }
        }
      }
    })

    // Remove sensitive data before returning
    const { hashedPassword: _, walletKey: __, ...safeUser } = user

    return NextResponse.json(safeUser)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}