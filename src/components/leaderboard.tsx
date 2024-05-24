import React from "react"
import { Separator } from "./ui/separator"
import { Icons } from "./icons"

const Leaderboard = () => {
  const users = [
    { rank: 1, name: "User 1", stickers: 69 },
    { rank: 2, name: "User 2", stickers: 50 },
    { rank: 3, name: "User 3", stickers: 42 },
    { rank: 4, name: "User 4", stickers: 12 },
    { rank: 5, name: "User 5", stickers: 10 },
    { rank: 6, name: "User 6", stickers: 59 },
  ]

  return (
    <div className="rounded-t-3xl bg-accent text-accent-foreground">
      <div className="mt-5 px-4 pt-5">
        <h1 className="mb-2 font-bold">Leaderboard</h1>
        <Separator />
        <div className="my-3 flex justify-between">
          <p className="text-xs font-bold">Position</p>
          <p className="text-xs font-bold">Stickers</p>
        </div>
      </div>
      <div className="flex grow flex-col overflow-y-scroll px-4">
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex h-[60px] items-center justify-between px-7 dark:border-t dark:border-primary`}
          >
            <p className="text-sm font-bold">{user.rank}</p>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-muted-primary">
                <Icons.user className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-bold">{user.name}</p>
            </div>
            {user.stickers && (
              <p className="text-sm font-bold">{user.stickers}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard