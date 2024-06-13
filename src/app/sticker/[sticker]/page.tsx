import { Icons } from "@/components/icons"
import TopNav from "@/components/top-nav"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default async function Page() {
  const sticker = "item-1"
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <TopNav />
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/images/sticker/mock.png"
            height={132}
            width={128}
            alt="Item 1"
            className="mx-auto rounded-xl"
          />
          <Badge variant="outline" className="text-muted-foreground">
            USGMEN
          </Badge>
          <div className="text-xl font-bold">Training frog move Sticker</div>
          <div className="flex items-center gap-3">
            <div className="flex text-xs font-semibold">
              <Icons.coins className="mr-1.5 h-3 w-3" />
              100 ($1)
            </div>
            <RarityBadge rarity="common" />
            <RarityBadge rarity="rare" />
            <RarityBadge rarity="legendary" />
          </div>
        </div>
        <div className="flex h-10 w-full grid-cols-3 items-center gap-1 px-3">
          <Button size="icon" variant="secondary">
            <Icons.star className="h-4 w-[95px] border-none fill-gray-300 text-transparent" />
          </Button>
          <Button className="w-full" asChild>
            <Link href={`/gachapon/${sticker}`}>GET THIS STICKER</Link>
          </Button>
        </div>
      </div>
      <div
        id="preview"
        className="fle mt-5 grow rounded-t-3xl border bg-card p-3 px-4 pt-5"
      >
        <div className="text-[10px] text-muted-foreground">
          Stickers included in the set
        </div>
        <div className="mt-2 grid grid-cols-4 gap-3">
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

const RarityBadge = ({
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
        "border border-black px-1 py-[1px] text-[10px] font-bold uppercase shadow-[1px_2px_0px_0px_#000]",
        color[rarity]
      )}
    >
      {rarity}
    </Badge>
  )
}
