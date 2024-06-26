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

const StickerSlider = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-indigo-400"> + </Button>
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
