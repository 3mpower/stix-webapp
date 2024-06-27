"use client"
import React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import HorizontalSlider from "./sticker-slider/horizontal-header"
import VerticalSticker from "./sticker-slider/vertical-sticker"
import { Icons } from "./icons"
interface StickerSliderProps {
  emoji?: boolean
}

const StickerSlider: React.FC<StickerSliderProps> = ({ emoji }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {emoji ? (
          <Icons.smile className="mr-5 text-gray-400 hover:text-black" />
        ) : (
          <Button className="bg-indigo-400" size="icon-round">
            {" "}
            +{" "}
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <HorizontalSlider />
          <VerticalSticker />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default StickerSlider
