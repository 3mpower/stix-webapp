import { Button } from "@/components/ui/button"
import StickerSlider from "../sticker-slider"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import moment from "moment"
import { Icons } from "../icons"
import { Skeleton } from "../ui/skeleton"
interface CastProps {
  text: string
  timestamp: string
  author: {
    fid: number
    username: string
    displayName: string
    pfpUrl: string | undefined
  }
  reactions: {
    likes_count: number
    recasts_count: number
    replies_count: number
  }
  hash: string
}
export function Cast({ text, timestamp, author, reactions, hash }: CastProps) {
  const formattedDate = moment(timestamp)
    .fromNow()
    .replace("hours", "h")
    .replace("ago", "")
  return (
    <div className="container flex flex-col bg-white p-2 pt-1">
      <Link href={`/${hash}`}>
        <div className="flex cursor-pointer items-start">
          <Avatar>
            <AvatarImage
              className="object-fit"
              src={author.pfpUrl}
              alt={`${author.username}'s profile`}
            />
            <AvatarFallback className="uppercase">
              {/* {author.displayName.substring(0, 2)} */}
              <Skeleton className="w-full h-full" />
            </AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col px-2">
            <div className="flex items-center">
              <p className="text-sm font-bold">{author.displayName}</p>
              <p className="mx-1 text-muted-foreground">•</p>
              <p className="text-sm text-muted-foreground">{`@${author.username}`}</p>
              <p className="mx-1 text-muted-foreground">•</p>
              <p className="text-xs text-muted-foreground">{formattedDate}</p>
            </div>
            <p className="break-words text-sm md:text-base">
              {text.substring(0, 250)}
              {text.length > 250 ? "..." : ""}
            </p>
          </div>
        </div>
      </Link>
      <div className="mx-12 mt-2 flex items-center justify-between text-sm">
        <div className="flex items-end space-x-4 text-muted-foreground">
          <p className="flex items-center text-sm">
            {reactions.likes_count} <Icons.heart className="ml-1 w-4" />
          </p>
          <p className="flex items-center text-sm">
            {reactions.recasts_count} <Icons.recast className="ml-1 w-4" />
          </p>
          <p className="flex items-center text-sm">
            {reactions.replies_count} <Icons.reply className="ml-1 w-4" />
          </p>
        </div>
      </div>
    </div>
  )
}
