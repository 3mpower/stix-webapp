import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Icons } from "./icons"

const RaritySelect = () => {
  return (
    <Tabs defaultValue="random">
      <div className="px-4 mb-5">
        <TabsList className="w-full h-[5rem]">
          <TabsTrigger
            className=" flex w-full h-full items-center gap-2 flex-col data-[state=active]:text-red-400 dark:data-[state=active]:bg-primary"
            value="random"
          >
            <Icons.dice />
            <p className="text-black">Random</p>
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full h-full items-center gap-2 flex-col data-[state=active]:text-muted-foreground dark:data-[state=active]:bg-primary"
            value="common"
          >
            <Icons.star className="fill-gray-200"/>
            <p className="text-black">Common</p>
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full h-full items-center gap-2 flex-col data-[state=active]:text-[#DDAA1E] dark:data-[state=active]:bg-primary"
            value="rare"
          >
            <Icons.star className="fill-[#FDE046]" />
            <p className="text-black">Rare</p>
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full h-full items-center data-[state=active]:text-[#D8B4FE] data-[state=active]:fill-[#D8B4FE] gap-2 flex-col dark:data-[state=active]:bg-primary"
            value="legendary"
          >
            <Icons.star className="fill-[#D8B4FE]" />
            <p className="text-black">Legendary</p>
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  )
}

export default RaritySelect
