import Leaderboard from "@/components/leaderboard"
import StickerSlider from "@/components/sticker-slider"
import TopNav from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import mockFeed from "@/mocks/feed.json"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import moment from "moment"
import { ConversationConversation } from "@neynar/nodejs-sdk/build/neynar-api/v2"

const FeedIndv = ({
  conversation,
}: {
  conversation: ConversationConversation
}) => {
  // const { feed } = conversation<{ feed: string }>()

  // const specificFeed = mockFeed.casts.find((item) => item.hash === feed)
  var formattedDate = moment(conversation.cast.timestamp).format(
    "MMMM DD, HH:mm"
  )

  return (
    <>
      <div className="h-auto">
        <TopNav />
        <div className="container flex flex-col bg-white p-4  pt-1">
          <div className="flex items-center  space-x-2">
            <Avatar className="h-7 w-7">
              <AvatarImage
                className="object-fit"
                src={conversation.cast.author.pfp_url ?? ""}
                alt={`${conversation.cast.author.username}'s profile`}
              />
              <AvatarFallback>
                {conversation.cast.author.display_name}
              </AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div>
                <p className="font-bold">
                  {conversation.cast.author.display_name}
                </p>
                <p className="text-sm text-gray-500">{`@${conversation.cast.author.username}`}</p>
              </div>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <p className="mt-4 break-words text-sm md:text-base">
            {conversation.cast.text ?? ""}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-end space-x-4">
              <p className="text-sm">
                {conversation.cast.reactions.likes_count} Likes
              </p>
              <p className="text-sm">
                {conversation.cast.reactions.recasts_count} Recasts
              </p>
              <p className="text-sm">
                {conversation.cast.replies.count} Replies
              </p>
            </div>
            <StickerSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedIndv
