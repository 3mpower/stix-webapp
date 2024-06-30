"use client"
// import Image from "next/image"
import React from "react"
import { DrawerClose } from "../ui/drawer"

// const items = [
//   { name: "Item 1", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 2", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 3", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 4", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 5", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 6", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 7", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 8", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 9", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 10", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 11", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 12", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 13", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 14", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 15", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 16", imageUrl: "/images/sticker/mock.png" },
// ]
const Stickers = ({
  items,
  handleStixReply,
}: {
  items: { id: number }[]
  handleStixReply: (stix: string) => void
}) => {
  return (
    <div className="h-[16rem] px-5">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <DrawerClose>
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 rounded text-center"
              onClick={() => {
                handleStixReply(`/images/mock/${item.id % 8}.png`)
              }}
            >
              <img
                src={`/images/mock/${item.id % 8}.png`}
                height={300}
                width={200}
                alt={item.id.toString()}
                className="mx-auto rounded-lg"
              />
              {/* <p className="text-sm">{item.id}</p> */}
            </div>
          </DrawerClose>
        ))}
      </div>
    </div>
  )
}

export default Stickers
