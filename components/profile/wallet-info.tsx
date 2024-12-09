"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const privateKeyFormSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

type PrivateKeyFormValues = z.infer<typeof privateKeyFormSchema>;

export function WalletInfo() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [privateKey, setPrivateKey] = useState<string | null>(null);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showWalletAddress, setShowWalletAddress] = useState(false);

  const form = useForm<PrivateKeyFormValues>({
    resolver: zodResolver(privateKeyFormSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data: PrivateKeyFormValues) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/wallet/private-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: data.password }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }

      const { privateKey: key } = await response.json();
      setPrivateKey(key);
      form.reset();
    } catch (error) {
      console.error("Failed to get private key:", error);
      toast.error("Invalid password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const walletAddress = session?.user?.walletAddress || "No wallet address available";

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Wallet Information</h3>
      <div className="grid gap-4">
        {/* Wallet Address Section */}
        <div>
          <Label>Your Wallet Address</Label>
          <div className="relative">
            <Input
              value={showWalletAddress ? walletAddress : "••••••••••••••••••••••••••••••••"}
              type="text"
              readOnly
              className="font-mono pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowWalletAddress(!showWalletAddress)}
            >
              {showWalletAddress ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Private Key Section */}
        <div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">View Private Key</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>View Private Key</DialogTitle>
                <DialogDescription>
                  Enter your password to view your private key. Never share your private key with anyone.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {!privateKey ? (
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      {...form.register("password")}
                    />
                    {form.formState.errors.password && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.password.message}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label>Your Private Key</Label>
                    <div className="relative">
                      <Input
                        value={privateKey}
                        type={showPrivateKey ? "text" : "password"}
                        readOnly
                        className="font-mono pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPrivateKey(!showPrivateKey)}
                      >
                        {showPrivateKey ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                <DialogFooter>
                  {!privateKey ? (
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Verifying..." : "View Private Key"}
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.writeText(privateKey!);
                          toast.success("Private key copied to clipboard");
                        }}
                      >
                        Copy Private Key
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setPrivateKey(null);
                          setShowPrivateKey(false);
                          setDialogOpen(false);
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  )}
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
