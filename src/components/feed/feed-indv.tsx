"use client"
import Leaderboard from "@/components/leaderboard"
import StickerSlider from "@/components/sticker-slider"
import TopNav from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import mockFeed from "@/mocks/feed.json"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"

const FeedIndv = () => {
  const { feed } = useParams<{ feed: string }>()

  const specificFeed = mockFeed.casts.find((item) => item.hash === feed)
  return (
    <>
      <div className="h-auto">
        <TopNav />
        <div className="container flex flex-col bg-white p-4  pt-1">
          <div className="flex items-center  space-x-2">
            <Avatar className="h-7 w-7">
              <AvatarImage
                className="object-fit"
                src={specificFeed?.author.pfp_url ?? ""}
                alt={`${specificFeed?.author.username}'s profile`}
              />
              <AvatarFallback>
                {specificFeed?.author.display_name}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-row items-end gap-2">
              <p className="font-bold">{specificFeed?.author.display_name}</p>
              <p className="text-sm text-gray-500">{`@${specificFeed?.author.username}`}</p>
              <p className="text-sm text-gray-500">{specificFeed?.timestamp}</p>
            </div>
          </div>
          <p className="mt-4 break-words text-sm md:text-base">
            {specificFeed?.text ?? ""}
          </p>
          <div className="mt-2 flex justify-between">
            <div className="flex items-end space-x-4">
              <p className="text-sm">
                {specificFeed?.reactions.likes_count} Likes
              </p>
              <p className="text-sm">
                {specificFeed?.reactions.recasts_count} Recasts
              </p>
              <p className="text-sm">{specificFeed?.replies.count} Replies</p>
              <StickerSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedIndv
