import Image from "next/image"
import React from "react"

const Inventory = ({ items }: { items: any[] }) => {
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

  return (
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
              <div className="text-[8px] text-accent-foreground dark:text-accent">
                x5
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inventory
