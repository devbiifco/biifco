"use client"

interface ProfileHeaderProps {
  title: string
  description: string
}

export function ProfileHeader({ title, description }: ProfileHeaderProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}