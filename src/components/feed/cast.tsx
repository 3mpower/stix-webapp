import { Button } from "@/components/ui/button"
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
}
export function Cast({ text, timestamp, author, reactions }: CastProps) {
  return (
    <div className="flex flex-col  bg-white p-4 shadow-md">
      <div className="flex items-center  space-x-2">
        <img
          src={author.pfpUrl}
          alt={`${author.username}'s profile`}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex flex-row items-end gap-2">
          <p className="font-bold">{author.displayName}</p>
          <p className="text-sm text-gray-500">{`@${author.username}`}</p>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      <p className="mt-4">{text}</p>
      <div className="mt-4 flex justify-between">
        <div className="flex items-end space-x-4">
          <p>{reactions.likes_count} Likes</p>
          <p>{reactions.recasts_count} Recasts</p>
          <p>{reactions.replies_count} Replies</p>
          <Button className="bg-indigo-400"> + </Button>
        </div>
      </div>
    </div>
  )
}
