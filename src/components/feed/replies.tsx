import Image from "next/image"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "../ui/separator"

type CommentProps = {
  username: string
  userImage: string
  comment: string
  type: "text" | "sticker"
  stickerImage?: string
}

const replies: CommentProps[] = [
  {
    username: "Alice",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from Alice.",
    type: "text",
  },
  {
    username: "Bob",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
  },
  {
    username: "Charlie",
    userImage: "/images/sticker.png",
    comment: "This is another text comment from Charlie.",
    type: "text",
  },
  {
    username: "Diana",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
  },
  {
    username: "Eve",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from Eve.",
    type: "text",
  },
  {
    username: "Frank",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from Frank.",
    type: "text",
  },
  {
    username: "Grace",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
  },
]
const Replies = () => {
  return (
    <div className="container p-4 pt-0">
      <div className="pt-0">
        {replies.map((reply, index) => (
          <>
            <Separator />
            <div key={index} className="my-3 flex items-start">
              <Avatar className="h-9 w-9">
                <AvatarImage src={reply.userImage} alt={reply.username} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="px-2">
                <h1 className="flex h-9 w-9 items-center font-bold">
                  {reply.username}
                </h1>
                {reply.type === "text" ? (
                  <p>{reply.comment}</p>
                ) : (
                  <Image
                    src={reply.stickerImage!}
                    alt="Sticker"
                    width={100}
                    height={100}
                  />
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Replies
