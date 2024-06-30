"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "../ui/separator"
import moment from "moment"
import {
  CastWithInteractionsAndConversations,
  ConversationConversation,
  EmbeddedCast,
  EmbedCastId,
  EmbedUrl,
} from "@neynar/nodejs-sdk/build/neynar-api/v2"
import CommentFooter from "../footer/footer-with-replies"
import { Skeleton } from "../ui/skeleton"

// type CommentProps = {
//   userTag: string
//   userImage: string
//   comment: string
//   type: "text" | "sticker"
//   stickerImage?: string
//   name: string
//   dateTime: string
// }

export interface Replies {
  author: {
    display_name?: string | undefined
    username: string
    pfp_url?: string | undefined
  }
  timestamp: string
  text: string
  embeds?: EmbeddedCast[] | undefined
}

const Replies = ({
  conversation,
}: {
  conversation: ConversationConversation
}) => {
  // const replies = conversation.cast.direct_replies ?? []

  // const [replies, setReplies] = useState<
  //   CastWithInteractionsAndConversations[]
  // >(conversation.cast.direct_replies ?? [])

  const [replies, setReplies] = useState<Replies[]>(
    conversation.cast.direct_replies ?? []
  )

  const hash = conversation.cast.hash

  return (
    <div className="pt-0">
      <div className="pt-0">
        {replies.map((reply, index) => {
          const formattedDate = moment(reply.timestamp)
            .fromNow()
            .replace("hours", "h")
            .replace("minutes", "m")
            .replace("ago", "")
          return (
            <div key={index}>
              <Separator className="bg-neutral-200" />
              <div className="my-4 flex w-full items-start justify-between px-4">
                <div className="flex w-full">
                  <Avatar>
                    <AvatarImage
                      src={reply.author.pfp_url}
                      alt={reply.author.username}
                    />
                    <AvatarFallback>
                      <Skeleton className="w-full h-full" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex w-full flex-col px-2 text-sm">
                    <div className="flex items-center">
                      <h1 className="flex items-center font-bold">
                        {reply.author.display_name}
                      </h1>
                      <p className="mx-1 text-muted-foreground">•</p>
                      <p className="text-sm text-gray-500">
                        {`@${reply.author.username}`}
                      </p>
                      <p className="mx-1 text-muted-foreground">•</p>
                      <p className="text-xs text-muted-foreground">
                        {formattedDate}
                      </p>
                    </div>
                    <div className="text-sm">
                      <p>{reply.text}</p>
                      {reply.embeds &&
                        reply.embeds.map((embed, index) => (
                          <div key={index} className="my-2">
                            <img
                              src={(embed as EmbedUrl).url}
                              alt={"stix"}
                              width={200}
                              height={200}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <CommentFooter
        hash={hash}
        parentAuthorId={conversation.cast.author.fid}
        setReplies={setReplies}
      />
    </div>
  )
}

export default Replies
