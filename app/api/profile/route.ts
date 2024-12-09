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
    const { name, image } = body

    const updateData: any = { name }
    if (image) {
      updateData.image = image
    }

    const user = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: updateData,
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}