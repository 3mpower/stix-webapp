"use client"

import { FeedResponse } from "@neynar/nodejs-sdk/build/neynar-api/v2"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Cast } from "./cast"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export interface CastFeedProps {
  feed: FeedResponse
}

export function CastFeed({ feed }: CastFeedProps) {
  return (
    <>
      {feed.casts.map((cast) => (
        <div key={cast.hash}>
          <Cast
            key={cast.hash}
            hash={cast.hash}
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
          {/* <Separator /> */}
        </div>
      ))}
    </>
  )
}
