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

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { company: true },
    })

    if (!user?.company) {
      return new NextResponse("Company not found", { status: 404 })
    }

    // Create wallet for facility
    const { address: walletAddress, privateKey } = await createWallet()
    const encryptedPrivateKey = encrypt(privateKey)

    const facility = await prisma.facility.create({
      data: {
        name,
        walletAddress,
        walletKey: encryptedPrivateKey,
        company: {
          connect: {
            id: user.company.id,
          },
        },
      },
    })

    // Mark onboarding as completed
    await prisma.user.update({
      where: { email: session.user.email },
      data: { onboardingCompleted: true },
    })

    return NextResponse.json(facility)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}