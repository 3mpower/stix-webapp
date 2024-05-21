import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default async function Page() {
  return (
    <div>
      <div className="flex justify-between px-3 py-4">
        <Icons.chevronLeft className="h-6 w-6" />
        <div className="flex gap-4">
          <Icons.share className="h-6 w-6" />
          <Icons.close className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/images/sticker/mock.png"
            height={132}
            width={128}
            alt="Item 1"
            className="mx-auto"
          />
          <Badge variant="outline" className="text-muted-foreground">
            USGMEN
          </Badge>
          <div className="text-lg font-bold">Training frog move Sticker</div>
          <div className="flex items-center gap-3">
            <div className="flex text-xs font-semibold">
              <Icons.coins className="mr-1.5 h-3 w-3" />
              100 ($1)
            </div>
            <RarityBage rarity="common" />
            <RarityBage rarity="rare" />
            <RarityBage rarity="legendary" />
          </div>
        </div>
        <div className="flex w-full items-center gap-1.5 px-3">
          <div>
            <Button size="icon" variant="outline" className="h-8 w-8">
              <Icons.star className="h-5 w-5 text-neutral-400" />
            </Button>
          </div>
          <Button className="w-full">Purchase</Button>
        </div>
      </div>
      <div className="p-3">
        <div className="text-xs text-muted-foreground">
          Stickers included in the set
        </div>
        <div className="mt-8 grid grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <Image
                src="/images/sticker/mock.png"
                height={96}
                width={96}
                alt="Item 1"
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const RarityBage = ({
  rarity,
}: {
  rarity: "common" | "rare" | "legendary"
}) => {
  const color = {
    common: "bg-neutral-300 text-neutral-600",
    rare: "bg-yellow-300 text-yellow-600",
    legendary: "bg-purple-300 text-purple-600",
  }
  return (
    <Badge
      className={cn(
        "px-1 py-[1px] text-[10px] font-bold uppercase",
        color[rarity]
      )}
    >
      {rarity}
    </Badge>
  )
}
