"use client"

import { Card } from "@/components/ui/card"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileImageUpload } from "@/components/profile/profile-image-upload"
import { ProfileForm } from "@/components/profile/profile-form"
import { WalletInfo } from "@/components/profile/wallet-info"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <ProfileHeader 
        title="Profile" 
        description="Manage your account settings and profile information" 
      />

      <Card className="p-6">
        <div className="space-y-6">
          <ProfileImageUpload />
          <ProfileForm />
        </div>
      </Card>

      <Card className="p-6">
        <WalletInfo />
      </Card>
    </div>
  )
}

