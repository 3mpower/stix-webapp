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

// const replies: CommentProps[] = [
//   {
//     userTag: "@aliceinnwonderland",
//     name: "Alice Real",
//     userImage: "/images/sticker.png",
//     comment:
//       "This is a text comment from Alice. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat!",
//     type: "text",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
//   {
//     userTag: "@bob",
//     name: "Bob Real",
//     userImage: "/images/sticker.png",
//     comment: "",
//     type: "sticker",
//     stickerImage: "/images/sticker/mock.png",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
//   {
//     userTag: "@charlie",
//     name: "Charlie Real",
//     userImage: "/images/sticker.png",
//     comment: "This is another text comment from Charlie.",
//     type: "text",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
//   {
//     userTag: "@diana",
//     name: "Diana Ross",
//     userImage: "/images/sticker.png",
//     comment: "",
//     type: "sticker",
//     stickerImage: "/images/sticker/mock.png",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
//   {
//     userTag: "@eve",
//     name: "Eve Adams",
//     userImage: "/images/sticker.png",
//     comment: "This is a text comment from Eve.",
//     type: "text",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
//   {
//     userTag: "@frank",
//     name: "Frank Sinatra",
//     userImage: "/images/sticker.png",
//     comment: "This is a text comment from Frank.",
//     type: "text",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
//   {
//     userTag: "@grace",
//     name: "Grace Real",
//     userImage: "/images/sticker.png",
//     comment: "",
//     type: "sticker",
//     stickerImage: "/images/sticker/mock.png",
//     dateTime: "2024-06-22T07:48:20+07:00",
//   },
// ]
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
    <div className="container p-4 pt-0">
      <div className="pt-0">
        {replies.map((reply, index) => (
          <div key={index}>
            <Separator />
            <div className="my-3 flex w-full items-start justify-between">
              <div className="flex">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={reply.author.pfp_url}
                    alt={reply.author.username}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="px-2 text-sm">
                  <h1 className="flex items-center font-bold">
                    {reply.author.display_name}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {`@${reply.author.username}`}
                  </p>
                </div>
              </div>
              <p className="text-xs">
                {moment(reply.timestamp).format("MMMM DD, HH:mm")}
              </p>
            </div>
            <div className="my-2 px-2 text-sm">
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
        ))}
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
