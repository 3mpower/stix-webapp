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
import { Icons } from "../icons"
import { Skeleton } from "../ui/skeleton"

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
          <div className="flex">
            <Avatar>
              <AvatarImage
                className="object-fit"
                src={conversation.cast.author.pfp_url ?? ""}
                alt={`${conversation.cast.author.username}'s profile`}
              />
              <AvatarFallback>
                {/* {conversation.cast.author.display_name} */}
                <Skeleton className="size-full" />
              </AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-col px-2">
              <div className="flex items-center">
                <p className="text-sm font-bold">
                  {conversation.cast.author.display_name}
                </p>
                <p className="mx-1 text-muted-foreground">•</p>
                <p className="text-sm text-muted-foreground">{`@${conversation.cast.author.username}`}</p>
                <p className="mx-1 text-muted-foreground">•</p>
                <p className="text-xs text-muted-foreground">{formattedDate}</p>
              </div>
              <p className="break-words text-sm md:text-base">
                {conversation.cast.text}
              </p>
            </div>
          </div>
          <div className="mx-12 mt-2 flex items-center justify-between text-sm">
            <div className="flex items-end space-x-4 text-muted-foreground">
              <p className="flex items-center text-sm">
                {conversation.cast.reactions.likes_count}{" "}
                <Icons.heart className="ml-1 w-4" />
              </p>
              <p className="flex items-center text-sm">
                {conversation.cast.reactions.recasts_count}{" "}
                <Icons.recast className="ml-1 w-4" />
              </p>
              <p className="flex items-center text-sm">
                {conversation.cast.replies.count}{" "}
                <Icons.reply className="ml-1 w-4" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedIndv
