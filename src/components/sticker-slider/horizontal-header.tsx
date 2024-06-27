import React, { useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Button } from "../ui/button"

export interface Artwork {
  id: number
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    id: 1,
    artist: "Ornella Binni",
    art: "/images/sticker.png",
  },
  {
    id: 2,
    artist: "Tom Byrom",
    art: "/images/sticker.png",
  },
  {
    id: 3,
    artist: "Vladimir Malyavko",
    art: "/images/sticker.png",
  },
  {
    id: 4,
    artist: "Ornella Binni",
    art: "/images/sticker.png",
  },
  {
    id: 5,
    artist: "Tom Byrom",
    art: "/images/sticker.png",
  },
  {
    id: 6,
    artist: "Vladimir Malyavko",
    art: "/images/sticker.png",
  },
  {
    id: 7,
    artist: "Ornella Binni",
    art: "/images/sticker.png",
  },
  {
    id: 8,
    artist: "Tom Byrom",
    art: "/images/sticker.png",
  },
  {
    id: 9,
    artist: "Vladimir Malyavko",
    art: "/images/sticker.png",
  },
  {
    id: 10,
    artist: "Ornella Binni",
    art: "/images/sticker.png",
  },
  {
    id: 11,
    artist: "Tom Byrom",
    art: "/images/sticker.png",
  },
  {
    id: 12,
    artist: "Vladimir Malyavko",
    art: "/images/sticker.png",
  },
]

const HorizontalSlider = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number>(1)

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md py-3">
      <div className="flex h-full">
        {works.map((artwork) => (
          <figure
            key={artwork.id}
            className={`shrink-0`}
            onClick={() => setSelectedArtwork(artwork.id)}
          >
            <div
              className={`${
                selectedArtwork === artwork.id
                  ? "bg-accent text-accent-foreground"
                  : ""
              } overflow-y-hidden rounded-md p-2`}
            >
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="h-fit w-fit object-cover"
                width={40}
                height={40}
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default HorizontalSlider
