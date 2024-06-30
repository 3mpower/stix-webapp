"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Icons } from "./icons"

const TopNav = () => {
  const router = useRouter()
  return (
    <div className="min-h-12 flex items-center justify-between p-2 text-muted-foreground">
      <Button onClick={() => router.back()} variant="ghost" size="icon">
        <Icons.chevronLeft className="size-6" />
      </Button>
      <div className="flex">
        <Button variant="ghost" size="icon">
          <Icons.share className="size-5 mx-2" />
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
