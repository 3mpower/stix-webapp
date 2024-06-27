import React from "react"
import Recommendation from "../recommendation"
import Stickers from "./stickers"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const VerticalSticker = ({
  selectedCollection,
}: {
  selectedCollection: any
}) => {
  return (
    <ScrollArea className="mt-3">
      <Stickers items={selectedCollection.tokens ?? null} />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}

export default VerticalSticker
