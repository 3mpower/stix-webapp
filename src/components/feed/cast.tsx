import { Button } from "@/components/ui/button"
import StickerSlider from "../sticker-slider"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
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
  return (
    <div className="container flex flex-col bg-white p-4 pt-1 shadow-md">
      <Link href={`/${hash}`}>
        <div className="flex cursor-pointer items-center space-x-2">
          <Avatar className="h-7 w-7">
            <AvatarImage
              className="object-fit"
              src={author.pfpUrl}
              alt={`${author.username}'s profile`}
            />
            <AvatarFallback>{author.displayName}</AvatarFallback>
          </Avatar>
          <div className="flex flex-row items-end gap-2">
            <p className="font-bold">{author.displayName}</p>
            <p className="text-sm text-gray-500">{`@${author.username}`}</p>
            <p className="text-sm text-gray-500">{timestamp}</p>
          </div>
        </div>
        <p className="mt-4 break-words text-sm md:text-base">{text}</p>
      </Link>
      <div className="mt-2 flex justify-between text-sm">
        <div className="flex items-end space-x-4">
          <Link href={`/${hash}`}>
            <p>{reactions.likes_count} Likes</p>
          </Link>
          <Link className="flex items-end space-x-4" href={`/${hash}`}>
            <p>{reactions.recasts_count} Recasts</p>
          </Link>
          <Link className="flex items-end space-x-4" href={`/${hash}`}>
            <p>{reactions.replies_count} Replies</p>
          </Link>
          <StickerSlider />
        </div>
      </div>
    </div>
  )
}
