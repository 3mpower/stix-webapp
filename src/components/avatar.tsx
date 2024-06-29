"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  usePrivy,
  useWallets,
  getEmbeddedConnectedWallet,
} from "@privy-io/react-auth"

const UserAvatar = () => {
  const { logout, user } = usePrivy()

  // const farcasterAccount = user?.linkedAccounts.find(
  //   (account) => account.type === "farcaster"
  // )

  // const userPfp = user?.farcaster?.pfp

  return (
    <div>
      <Avatar className="h-7 w-7 border-2 border-white">
        <AvatarImage src={user?.farcaster?.pfp ?? undefined} />
        <AvatarFallback>
          {user?.farcaster?.username?.substring(0, 1)}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserAvatar
