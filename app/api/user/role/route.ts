import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await request.json()
    const { role } = body

    // Verify user has access to this role
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { roles: true }
    })

    if (!user?.roles.includes(role)) {
      return new NextResponse("Role not assigned to user", { status: 403 })
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { role },
      select: {
        role: true,
        roles: true,
      }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}