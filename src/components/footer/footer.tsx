"use client"

import React from "react"
import { Icons } from "../icons"
import UserAvatar from "../avatar"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  getEmbeddedConnectedWallet,
  useLogout,
  usePrivy,
  useWallets,
} from "@privy-io/react-auth"
import { Button } from "../ui/button"
import { copyToClipboard } from "@/utils"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const Footer = () => {
  const { authenticated } = usePrivy()
  const { ready, wallets } = useWallets()
  const router = useRouter()

  const { logout } = useLogout({
    onSuccess: () => {
      console.log("User logged out")
      router.push("/store")
    },
  })

  const handleCopy = async () => {
    try {
      await copyToClipboard(embedWallet?.address || "")
      toast.success("Copied!", {
        position: "bottom-right",
        duration: 1000,
      })
    } catch (error) {
      toast.error("Failed to copy text") // Show error toast
    }
  }

  const embedWallet = getEmbeddedConnectedWallet(wallets)
  if (!authenticated && !ready && !embedWallet) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 flex h-[3.5rem] w-full items-center justify-between border  border-primary bg-popover-secondary px-10">
      <Link
        className="flex flex-col items-center justify-center text-primary"
        href="/"
      >
        <Icons.home className="h-6 w-6 fill-muted dark:fill-none" />
        <div className="text-[9px] text-muted">Home</div>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-primary"
        href="/store"
      >
        <Icons.shop className="h-6 w-6 fill-muted dark:fill-none" />
        <div className="text-[9px] text-muted">Store</div>
      </Link>
      {/* <div className="flex flex-col items-center justify-center text-primary">
        <Icons.pack className="h-7 w-7 fill-muted dark:fill-none" />
        <div className="text-pria text-[9px] text-muted">Buy Pack</div>
      </div> */}

      <Sheet>
        <SheetTrigger>
          <div className="flex flex-col items-center justify-center gap-1 text-primary">
            <UserAvatar />
            <div className="text-pria text-[9px] text-muted">Wallet</div>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-[#818CF8] text-white" side="bottom">
          <SheetHeader>
            <SheetTitle className="text-white">Wallet</SheetTitle>
            <SheetDescription
              onClick={handleCopy}
              className="break-words font-bold text-white hover:cursor-pointer"
            >
              {`${embedWallet?.address}`}
            </SheetDescription>
            <div>
              <Button
                onClick={() => logout()}
                variant="secondary"
                className="mt-5 text-gray-200"
              >
                Logout
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Footer
