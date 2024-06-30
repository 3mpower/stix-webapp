import Inventory from "@/components/inventory"
import Leaderboard from "@/components/leaderboard"
import PurchaseWithQuantity from "@/components/purchase-and-qty"
import TopNav from "@/components/top-nav"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

import React from "react"
// const items = [
//   { name: "Item 1", imageUrl: "/images/sticker/mock.png", rarity: "Common" },
//   { name: "Item 2", imageUrl: "/images/sticker/mock.png", rarity: "Rare" },
//   { name: "Item 3", imageUrl: "/images/sticker/mock.png", rarity: "Legendary" },
// ]

const Page = () => {
  return (
    <>
      <div className="h-auto">
        <TopNav />
        <div className="flex flex-col gap-6">
          <div className="px-4">
            <Inventory />
          </div>
          <AspectRatio ratio={480 / 160}>
            <Image src="/images/banner.png" fill alt="banner" />
          </AspectRatio>
          <div className="px-4">
            <PurchaseWithQuantity />
          </div>
        </div>
        <Leaderboard />
      </div>
    </>
  )
}

export default Page
