"use client"

import Inventory from "@/components/inventory"
import Leaderboard from "@/components/leaderboard"
import PurchaseWithQuantity from "@/components/purchase-and-qty"
import TopNav from "@/components/top-nav"

import React from "react"

const items = [
  { name: "Item 1", imageUrl: "/images/sticker/mock.png", rarity: "Common" },
  { name: "Item 2", imageUrl: "/images/sticker/mock.png", rarity: "Rare" },
  { name: "Item 3", imageUrl: "/images/sticker/mock.png", rarity: "Legendary" },
]

const Page = () => {
  return (
    <>
      <div className="h-auto">
        <TopNav />
        <div className="flex flex-col gap-6">
          <div className="px-4">
            <Inventory items={items} />
          </div>
          {/* Banner */}
          <div className="h-40 w-full bg-red-100"></div>
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
