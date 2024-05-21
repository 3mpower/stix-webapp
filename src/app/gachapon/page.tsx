import { Icons } from "@/components/icons"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import React from "react"

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
                  className="mx-auto"
                />
                <div
                  className={`absolute bottom-[-10px] left-[-5px] flex items-center justify-center rounded-full p-1`}
                  style={{ backgroundColor: getColor(item.rarity) }}
                >
                  <p className="text-[8px] font-bold">x5</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Gachapon effect */}
        <div className="mt-5 px-4">
          <div className="h-[174px] w-full">
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
          </div>
          {/* Purchase and Quantity */}
          <div className="flex my-2 h-10 w-full">
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-black"
              >
                -
              </Button>
              <div className="px-5 text-center text-gray-500">1</div>
              <Button
                variant="ghost"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-black"
              >
                +
              </Button>
            </div>
            <Button className="ml-5 flex flex-1 justify-between px-5">
              <div>Purchase</div>
              <div>$100</div>
            </Button>
          </div>
          {/* LeaderBoard */}
          <div className="mt-5">
            <h1 className="mb-2">Leaderboard</h1>
            <Separator />
            <div className="my-3 flex justify-between">
              <p className="text-xs font-bold">Position</p>
              <p className="text-xs font-bold">Stickers</p>
            </div>
          </div>
        </div>
        <div className="flex grow flex-col overflow-y-scroll">
          {users.map((user, index) => (
            <div
              key={index}
              className={`flex h-[60px] items-center justify-between px-7 ${
                index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
              }`}
            >
              <p className="text-sm font-bold">{user.rank}</p>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-300">
                  <Icons.user className="h-4 w-4" />
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
    </>
  )
}

export default Page
