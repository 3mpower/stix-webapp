"use client"

import { Icons } from "@/components/icons"
import Inventory from "@/components/inventory"
import Leaderboard from "@/components/leaderboard"
import PurchaseWithQuantity from "@/components/purchase-and-qty"
import RaritySelect from "@/components/rarity-select"
import StackedGachapon from "@/components/stacked-gachapon"
import React, { useState } from "react"

const items = [
  { name: "Item 1", imageUrl: "/images/sticker.png", rarity: "Common" },
  { name: "Item 2", imageUrl: "/images/sticker.png", rarity: "Rare" },
  { name: "Item 4", imageUrl: "/images/sticker.png", rarity: "Legendary" },
  { name: "Item 2", imageUrl: "/images/sticker.png", rarity: "Rare" },
  { name: "Item 4", imageUrl: "/images/sticker.png", rarity: "Legendary" },
]

const users = [
  { rank: 1, name: "User 1", stickers: 69 },
  { rank: 2, name: "User 2", stickers: 50 },
  { rank: 3, name: "User 3", stickers: 42 },
  { rank: 4, name: "User 4", stickers: 12 },
  { rank: 5, name: "User 5", stickers: 10 },
  { rank: 6, name: "User 6", stickers: 59 },
]

const getColor = (rarity: string) => {
  switch (rarity) {
    case "Common":
      return "#D4D4D4"
    case "Rare":
      return "#FDE046"
    case "Legendary":
      return "#D8B4FE"
    default:
      return ""
  }
}

const Page = () => {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <div className="h-auto">
        {/* Header */}
        <div className="flex min-h-[3rem] items-center justify-between px-2">
          <Icons.chevronLeft className="h-6 w-6" />
          <div className="flex">
            <Icons.share className="mx-2 h-5 w-5" />
            <Icons.close className="h-6 w-6" />
          </div>
        </div>
        <Inventory items={items} />
        <div className="mt-5 px-4">
          <StackedGachapon />
          <RaritySelect />
          <PurchaseWithQuantity />
        </div>
        <Leaderboard />
      </div>
    </>
  )
}

export default Page
