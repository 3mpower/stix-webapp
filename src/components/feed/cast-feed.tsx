// import {
//   NeynarAPIClient,
//   FeedType,
//   FilterType,
//   FeedResponse,
// } from "@neynar/nodejs-sdk"
import { FeedResponse } from "@neynar/nodejs-sdk/build/neynar-api/v2"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Cast } from "./cast"
import { Separator } from "@/components/ui/separator"
// const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY)

export interface CastFeedProps {
  feed: FeedResponse
}

export function CastFeed({ feed }: CastFeedProps) {
  return (
    <ScrollArea>
      {feed.casts.map((cast) => (
        <div>
          <Cast
            key={cast.hash}
            text={cast.text}
            timestamp={cast.timestamp}
            author={{
              fid: cast.author.fid,
              username: cast.author.username,
              displayName: cast.author.display_name ?? "",
              pfpUrl: cast.author.pfp_url,
            }}
            reactions={{
              likes_count: cast.reactions.likes_count,
              recasts_count: cast.reactions.recasts_count,
              replies_count: cast.replies.count,
            }}
          />
          <Separator />
        </div>
      ))}
    </ScrollArea>
  )
}
