"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { ExecutionResult } from "graphql"
import {
  DnCollectionsDocument,
  DnCollectionsQuery,
  execute,
} from ".graphclient"
import { Skeleton } from "./ui/skeleton"

// const items = [
//   { name: "Item 1", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 2", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 3", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 4", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 1", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 2", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 3", imageUrl: "/images/sticker/mock.png" },
//   { name: "Item 4", imageUrl: "/images/sticker/mock.png" },
// ]

const Recommendation = () => {
  const router = useRouter()

  const [items, setItems] = useState<ExecutionResult<DnCollectionsQuery>>()

  const [loading, setLoading] = useState(true) // Add this line

  useEffect(() => {
    execute(DnCollectionsDocument, {}).then((result) => {
      setItems(result)
      setLoading(false)
    })
  }, [])

  const handleClick = (name: string) => {
    router.push("/sticker/" + name)
  }

  return (
    <div className="px-5">
      <h1 className="my-2 font-bold">Recommended Stickers</h1>
      <div className="grid grid-cols-4 gap-4">
        {loading ? (
          <>
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-full flex rounded-lg">
                  <Skeleton className="h-[120px] w-full" />
                </div>
              ))}
          </>
        ) : (
          <>
            {items?.data?.dncollections.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
                onClick={() => handleClick(item.id)}
              >
                <img
                  src={`/images/sticker/${item.id}.png`}
                  height={300}
                  width={200}
                  alt={item.name}
                  className="mx-auto rounded-lg"
                />
                <p className="mt-2 text-sm">{item.name}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Recommendation
