import Image from "next/image"
import React from "react"

const items = [
  { name: "Item 1", imageUrl: "/images/sticker.png" },
  { name: "Item 2", imageUrl: "/images/sticker.png" },
  { name: "Item 3", imageUrl: "/images/sticker.png" },
  { name: "Item 4", imageUrl: "/images/sticker.png" },
  { name: "Item 1", imageUrl: "/images/sticker.png" },
  { name: "Item 2", imageUrl: "/images/sticker.png" },
  { name: "Item 3", imageUrl: "/images/sticker.png" },
  { name: "Item 4", imageUrl: "/images/sticker.png" },
]

const Popular = () => {
  return (
    <div className="mt-10 px-5">
      <h1 className="my-2 font-bold">Popular Stickers</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={item.imageUrl} height={300} width={200} alt={item.name} className="mx-auto" />
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular