"use client"

import { Icons } from "@/components/icons"
import RaritySelect from "@/components/rarity-select"
import StackedGachapon from "@/components/stacked-gachapon"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
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
        {/* Inventory */}
        <div className="px-4">
          <p className="mb-2 text-xs font-bold">Inventory</p>
          <div className="flex gap-x-[12px]">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-lg border-2 text-center`}
                style={{ borderColor: getColor(item.rarity) }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div
                  className={`absolute -bottom-2 -left-2 flex h-4 w-4 items-center justify-center rounded-full text-xs`}
                  style={{ backgroundColor: getColor(item.rarity) }}
                >
                  <div className="text-[8px] text-accent-foreground dark:text-accent">x5</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Gachapon effect */}
        <div className="mt-5 px-4">
          {/* <div className="h-[174px] w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={"/images/gachapon.png"}
                alt="gachapon"
                width={406}
                height={174}
                objectFit="cover"
                className="absolute"
              />
            </AspectRatio>
          </div> */}
            <StackedGachapon />
            <RaritySelect />

          {/* Purchase and Quantity */}
          <div className="my-2 flex h-10 w-full gap-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => decrement()}
                className="flex h-8 w-8 items-center justify-center rounded-full  border border-primary bg-button-secondary text-primary-foreground shadow-[1px_2px_0px_0px_#1a202c] dark:shadow-[1px_2px_0px_0px_#fff] dark:text-accent-foreground"
              >
                -
              </Button>
              <div className="w-[2.5rem] text-center font-bold text-foreground">
                {quantity}
              </div>
              <Button
                onClick={() => increment()}
                variant="ghost"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-button-secondary text-primary-foreground shadow-[1px_2px_0px_0px_#1a202c] dark:shadow-[1px_2px_0px_0px_#fff] dark:text-accent-foreground"
              >
                +
              </Button>
            </div>
            <Button className="dark:text-foreground font-bold flex flex-1 justify-between border border-primary bg-button px-3 text-button-foreground shadow-[3px_4px_0px_0px_#1a202c] ">
              <div>Purchase</div>
              <div>$100</div>
            </Button>
          </div>
          {/* LeaderBoard */}
        </div>
        <div className="rounded-t-3xl bg-accent text-accent-foreground">
            <div className="mt-5 px-4 pt-5">
              <h1 className="mb-2 font-bold">Leaderboard</h1>
              <Separator />
              <div className="my-3 flex justify-between">
                <p className="text-xs font-bold">Position</p>
                <p className="text-xs font-bold">Stickers</p>
              </div>
            </div>
            <div className="flex grow flex-col overflow-y-scroll px-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className={`flex h-[60px] dark:border-primary dark:border-t items-center justify-between px-7`}
                >
                  <p className="text-sm font-bold">{user.rank}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-muted-primary">
                      <Icons.user className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-bold">{user.name}</p>
                  </div>
                  {user.stickers && (
                    <p className="text-sm font-bold">{user.stickers}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default Page
