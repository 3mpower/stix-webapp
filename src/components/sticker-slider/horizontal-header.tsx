"use client"
import React, { useEffect, useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import { usePrivy } from "@privy-io/react-auth"
import {
  UsrOwnedCollectionsQuery,
  UsrOwnedCollectionsDocument,
  execute,
} from "../../../.graphclient"
import { Button } from "../ui/button"
import { ExecutionResult } from "graphql"

// export interface Artwork {
//   id: number
//   artist: string
//   art: string
// }

// export const works: Artwork[] = [
//   {
//     id: 1,
//     artist: "Ornella Binni",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 2,
//     artist: "Tom Byrom",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 3,
//     artist: "Vladimir Malyavko",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 4,
//     artist: "Ornella Binni",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 5,
//     artist: "Tom Byrom",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 6,
//     artist: "Vladimir Malyavko",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 7,
//     artist: "Ornella Binni",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 8,
//     artist: "Tom Byrom",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 9,
//     artist: "Vladimir Malyavko",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 10,
//     artist: "Ornella Binni",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 11,
//     artist: "Tom Byrom",
//     art: "/images/sticker.png",
//   },
//   {
//     id: 12,
//     artist: "Vladimir Malyavko",
//     art: "/images/sticker.png",
//   },
// ]

const HorizontalSlider = ({
  usrCollections,
}: {
  usrCollections: ExecutionResult<UsrOwnedCollectionsQuery> | undefined
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<number>(1)

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md py-3">
      <div className="flex h-full">
        {usrCollections?.data &&
          usrCollections?.data.user?.ownedCollections.map((artwork) => (
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
                <img
                  src={`/images/sticker/${artwork.id}.png`}
                  alt={`Photo by ${artwork.name}`}
                  className="h-14 w-14 object-cover"
                />
                <figcaption className="text-center text-xs">
                  {artwork.name}
                </figcaption>
              </div>
            </figure>
          ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default HorizontalSlider
