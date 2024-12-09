"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CameraIcon, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function ProfileImageUpload() {
  const { data: session, update } = useSession()
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB")
      return
    }

    const tempUrl = URL.createObjectURL(file)
    setPreviewUrl(tempUrl)

    try {
      setIsUploading(true)
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload image")
      }

      const data = await response.json()

      // Update session with new image URL
      await update({
        ...session,
        user: {
          ...session?.user,
          image: data.secure_url,
        }
      })

      toast.success("Profile picture updated successfully")
    } catch (error) {
      console.error("Upload error:", error)
      toast.error("Failed to upload image")
      setPreviewUrl(null)
    } finally {
      setIsUploading(false)
      URL.revokeObjectURL(tempUrl)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage 
            src={previewUrl || session?.user?.image || ""} 
            alt={session?.user?.name || ""}
            className="object-cover"
          />
          <AvatarFallback>{session?.user?.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <label 
          htmlFor="avatar-upload" 
          className={cn(
            "absolute bottom-0 right-0 p-1 rounded-full bg-primary hover:bg-primary/90 cursor-pointer",
            isUploading && "pointer-events-none opacity-50"
          )}
        >
          {isUploading ? (
            <Loader2 className="h-4 w-4 text-primary-foreground animate-spin" />
          ) : (
            <CameraIcon className="h-4 w-4 text-primary-foreground" />
          )}
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
            disabled={isUploading}
          />
        </label>
      </div>
      <div>
        <h3 className="text-lg font-medium">Profile Picture</h3>
        <p className="text-sm text-muted-foreground">
          Click the camera icon to upload a new profile picture
        </p>
      </div>
    </div>
  )
}