import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import { createWallet } from "@/lib/web3"
import { encrypt } from "@/lib/encryption"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { name } = body

    // Create wallet for company
    const { address: walletAddress, privateKey } = await createWallet()
    const encryptedPrivateKey = encrypt(privateKey)

    // Create company and update user's onboarding status
    const company = await prisma.company.create({
      data: {
        name,
        walletAddress,
        walletKey: encryptedPrivateKey,
        user: {
          connect: {
            email: session.user.email,
          },
        },
      },
    })

    // Update user's onboarding status
    await prisma.user.update({
      where: { email: session.user.email },
      data: { onboardingCompleted: true },
    })

    return NextResponse.json(company)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}