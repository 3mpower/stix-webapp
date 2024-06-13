"use client"
import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  const handleRevealNext = () => {
    router.refresh()
  }
  return (
    <div className="relative h-screen">
      <div className="absolute bottom-0 flex w-full gap-2 rounded-t-lg bg-card p-4">
        <Button className="w-full">Reveal all</Button>
        <Button className="w-full" onClick={handleRevealNext}>
          Reveal next
        </Button>
      </div>
    </div>
  )
}
