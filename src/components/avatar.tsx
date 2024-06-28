"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  usePrivy,
  useWallets,
  getEmbeddedConnectedWallet,
} from "@privy-io/react-auth"

const UserAvatar = () => {
  const { logout, user, authenticated } = usePrivy()
  const { ready, wallets } = useWallets()

  // const farcasterAccount = user?.linkedAccounts.find(
  //   (account) => account.type === "farcaster"
  // )

  const embedWallet = getEmbeddedConnectedWallet(wallets)
  if (!authenticated && !ready && !embedWallet) {
    return null
  }

  // const userPfp = user?.farcaster?.pfp

  return (
    <div>
      <Avatar
        onClick={() => {
          logout()
        }}
        className="h-7 w-7 border-2 border-white"
      >
        <AvatarImage src={user?.farcaster?.pfp ?? undefined} />
        <AvatarFallback>
          {user?.farcaster?.username?.substring(0, 1)}
        </AvatarFallback>
      </Avatar>

      <p className="text-white">{`wallet: ${embedWallet?.address}`}</p>
      
    </div>
  )
}

export default UserAvatar
