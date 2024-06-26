import React from "react"
import Recommendation from "../recommendation"
import Stickers from "./stickers"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const VerticalSticker = () => {
  return (
    <ScrollArea className="mt-3">
      <Stickers />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}

export default VerticalSticker
