import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    
    if (!file) {
      return new NextResponse("No file uploaded", { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Image = buffer.toString('base64')
    const dataURI = `data:${file.type};base64,${base64Image}`

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        dataURI,
        {
          folder: "biifco/profiles",
          transformation: [
            { width: 500, height: 500, crop: "fill" },
            { quality: "auto" },
            { fetch_format: "auto" }
          ]
        },
        (error, result) => {
          if (error) reject(error)
          resolve(result)
        }
      )
    })

    // Update user profile with new image URL
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        image: (uploadResult as any).secure_url 
      }
    })

    return NextResponse.json({
      secure_url: (uploadResult as any).secure_url
    })
  } catch (error) {
    console.error("Upload error:", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}