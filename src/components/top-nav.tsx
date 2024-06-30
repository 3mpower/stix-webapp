"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Icons } from "./icons"

const TopNav = () => {
  const router = useRouter()
  return (
    <div className="flex min-h-[48px] items-center justify-between p-2 text-muted-foreground">
      <Button onClick={() => router.back()} variant="ghost" size="icon">
        <Icons.chevronLeft className="size-6" />
      </Button>
      <div className="flex">
        <Button variant="ghost" size="icon">
          <Icons.share className="mx-2 w-5" />
        </Button>
        <Button
          onClick={() => router.push("/store")}
          variant="ghost"
          size="icon"
        >
          <Icons.close className="size-6" />
        </Button>
      </div>
    </div>
  )
}

export default TopNav
