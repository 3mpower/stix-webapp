"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
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

const Recommendation = () => {
  const router = useRouter()

  const handleClick = (name: string) => {
    router.push("/sticker/" + name)
  }

  return (
    <div className="px-5">
      <h1 className="my-2 font-bold">Recommendation Stickers</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
            onClick={() => handleClick(item.name)}
          >
            <Image
              src={item.imageUrl}
              height={300}
              width={200}
              alt={item.name}
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
