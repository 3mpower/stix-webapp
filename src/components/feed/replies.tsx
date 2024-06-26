import Image from "next/image"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type CommentProps = {
  username: string
  userImage: string
  comment: string
  type: "text" | "sticker"
  stickerImage?: string
}

const replies: CommentProps[] = [
  {
    username: "User1",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from User1.",
    type: "text",
  },
  {
    username: "User2",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
  },
  {
    username: "User3",
    userImage: "/images/sticker.png",
    comment: "This is another text comment from User3.",
    type: "text",
  },
  {
    username: "User4",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
  },
  {
    username: "User5",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from User5.",
    type: "text",
  },
  {
    username: "User6",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from User6.",
    type: "text",
  },
  {
    username: "User7",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
  },
]

const Replies = () => {
  return (
    <div className="container ">
      <div className="py-5">
        {replies.map((reply, index) => (
          <div key={index} className="flex items-center space-x-3 space-y-3">
            <Avatar>
              <AvatarImage src={reply.userImage} alt={reply.username} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">{reply.username}</h1>
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
        ))}
      </div>
    </div>
  )
}

export default Replies
