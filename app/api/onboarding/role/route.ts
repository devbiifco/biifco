import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { role } = body

    // Get current user
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { roles: true }
    })

    // Check if role is already assigned
    if (currentUser?.roles.includes(role)) {
      return new NextResponse("Role already assigned", { status: 400 })
    }

    // Update user with new role
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        role, // Set as current active role
        roles: {
          push: role // Add to roles array
        },
        onboardingCompleted: false, // Reset onboarding to ensure company creation
      },
      select: {
        role: true,
        roles: true,
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}