"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

const facilityFormSchema = z.object({
  name: z.string().min(2, "Facility name must be at least 2 characters"),
})

type FacilityFormValues = z.infer<typeof facilityFormSchema>

interface FacilityCreationProps {
  onComplete: () => void
}

export function FacilityCreation({ onComplete }: FacilityCreationProps) {
  const { update } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FacilityFormValues>({
    resolver: zodResolver(facilityFormSchema),
  })

  async function onSubmit(data: FacilityFormValues) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/onboarding/facility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to create facility")
      }

      // Update session to reflect onboarding completion
      await update({ onboardingCompleted: true })
      
      toast.success("Onboarding completed successfully!")
      onComplete()
    } catch (error) {
      toast.error("Failed to create facility")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facility Name</FormLabel>
              <FormControl>
                <Input {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Complete Setup
        </Button>
      </form>
    </Form>
  )
}