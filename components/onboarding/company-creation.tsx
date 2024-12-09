"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
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

const companyFormSchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
})

type CompanyFormValues = z.infer<typeof companyFormSchema>

interface CompanyCreationProps {
  onComplete: () => void
}

export function CompanyCreation({ onComplete }: CompanyCreationProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
  })

  async function onSubmit(data: CompanyFormValues) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/onboarding/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to create company")
      }

      onComplete()
    } catch (error) {
      toast.error("Failed to create company")
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
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Company
        </Button>
      </form>
    </Form>
  )
}