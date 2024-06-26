"use client"
import Leaderboard from "@/components/leaderboard"
import StickerSlider from "@/components/sticker-slider"
import TopNav from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import mockFeed from "@/mocks/feed.json"
import { useParams } from "next/navigation"

const FeedIndv = () => {
  const { feed } = useParams<{ feed: string }>()

  const specificFeed = mockFeed.casts.find((item) => item.hash === feed)
  return (
    <>
      <div className="h-auto">
        <TopNav />
        <div className="flex flex-col  bg-white p-4 shadow-md">
          <div className="flex items-center  space-x-2">
            <img
              src={specificFeed?.author.pfp_url ?? ""}
              alt={`${specificFeed?.author.username}'s profile`}
              className="h-8 w-8 rounded-full"
            />
            <div className="flex flex-row items-end gap-2">
              <p className="font-bold">{specificFeed?.author.display_name}</p>
              <p className="text-sm text-gray-500">{`@${specificFeed?.author.username}`}</p>
              <p className="text-sm text-gray-500">{specificFeed?.timestamp}</p>
            </div>
          </div>
          <p className="mt-4">{specificFeed?.text ?? ""}</p>
          <div className="mt-4 flex justify-between">
            <div className="flex items-end space-x-4">
              <p>{specificFeed?.reactions.likes_count} Likes</p>
              <p>{specificFeed?.reactions.recasts_count} Recasts</p>
              <p>{specificFeed?.replies.count} Replies</p>
              <StickerSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedIndv
