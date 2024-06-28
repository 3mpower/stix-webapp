import React from "react"
import Recommendation from "../recommendation"
import Stickers from "./stickers"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const VerticalSticker = ({
  selectedCollection,
  handleStixReply,
}: {
  selectedCollection: any
  handleStixReply: (stix: string) => void
}) => {
  return (
    <ScrollArea className="mt-3">
      <Stickers
        items={selectedCollection.tokens ?? null}
        handleStixReply={handleStixReply}
      />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}

export default VerticalSticker
