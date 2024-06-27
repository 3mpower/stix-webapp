"use client"
import React, { useEffect, useState } from "react"
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
import { Separator } from "./ui/separator"
import { usePrivy } from "@privy-io/react-auth"
import {
  UsrOwnedCollectionsQuery,
  UsrOwnedCollectionsDocument,
  execute,
} from "@/../../.graphclient"
import { ExecutionResult } from "graphql"
interface StickerSliderProps {
  emoji?: boolean
}

const StickerSlider: React.FC<StickerSliderProps> = ({ emoji }) => {
  const [usrCollections, setUsrCollections] =
    useState<ExecutionResult<UsrOwnedCollectionsQuery>>()

  const [selectedCollectionIndex, setSelectedCollectionIndex] =
    useState<number>(0)
  // usrCollections?.data.user?.ownedCollections

  const { user, ready } = usePrivy()
  const farcasterAccOwner = user?.farcaster?.ownerAddress

  useEffect(() => {
    // console.log(farcasterAccOwner)
    if (ready && farcasterAccOwner) {
      execute(UsrOwnedCollectionsDocument, {
        userAddr: farcasterAccOwner,
        userAddrToken: farcasterAccOwner,
      }).then((result) => {
        setUsrCollections(result)
        // const { data } = result
        // setSelectedCollection(data?.user?.ownedCollections[0])
      })
    }
  }, [ready])
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
          <HorizontalSlider usrCollections={usrCollections} />
          <Separator />
          <VerticalSticker
            selectedCollection={
              usrCollections?.data?.user?.ownedCollections[
                selectedCollectionIndex
              ]
            }
          />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default StickerSlider
