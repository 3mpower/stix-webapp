import Image from "next/image"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "../ui/separator"
import moment from "moment"

type CommentProps = {
  userTag: string
  userImage: string
  comment: string
  type: "text" | "sticker"
  stickerImage?: string
  name: string
  dateTime: string
}

const replies: CommentProps[] = [
  {
    userTag: "@aliceinnwonderland",
    name: "Alice Real",
    userImage: "/images/sticker.png",
    comment:
      "This is a text comment from Alice. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat!",
    type: "text",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
  {
    userTag: "@bob",
    name: "Bob Real",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
  {
    userTag: "@charlie",
    name: "Charlie Real",
    userImage: "/images/sticker.png",
    comment: "This is another text comment from Charlie.",
    type: "text",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
  {
    userTag: "@diana",
    name: "Diana Ross",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
  {
    userTag: "@eve",
    name: "Eve Adams",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from Eve.",
    type: "text",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
  {
    userTag: "@frank",
    name: "Frank Sinatra",
    userImage: "/images/sticker.png",
    comment: "This is a text comment from Frank.",
    type: "text",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
  {
    userTag: "@grace",
    name: "Grace Real",
    userImage: "/images/sticker.png",
    comment: "",
    type: "sticker",
    stickerImage: "/images/sticker/mock.png",
    dateTime: "2024-06-22T07:48:20+07:00",
  },
]
const Replies = () => {
  return (
    <div className="container p-4 pt-0">
      <div className="pt-0">
        {replies.map((reply, index) => (
          <>
            <Separator />
            <div
              key={index}
              className="my-3 flex w-full items-start justify-between"
            >
              <div className="flex">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={reply.userImage} alt={reply.userTag} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="px-2 text-sm">
                  <h1 className="flex items-center font-bold">{reply.name}</h1>
                  <p className="text-sm text-gray-500">{reply.userTag}</p>
                </div>
              </div>
              <p className="text-xs">
                {moment(reply.dateTime).format("MMMM DD, HH:mm")}
              </p>
            </div>
            <div className="m my-2 px-10 text-sm">
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
          </>
        ))}
      </div>
    </div>
  )
}

export default Replies
