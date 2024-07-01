"use client"
import React, { useEffect, useState } from "react"
import { Icons } from "../icons"
import UserAvatar from "../avatar"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import StickerSlider from "../sticker-slider"
import {
  FarcasterWithMetadata,
  getEmbeddedConnectedWallet,
  useExperimentalFarcasterSigner,
  usePrivy,
  useWallets,
} from "@privy-io/react-auth"
import { ExternalEd25519Signer } from "@standard-crypto/farcaster-js"
import { hubClient } from "@/lib/hubClient"
import { Button } from "../ui/button"
import { CastWithInteractionsAndConversations } from "@neynar/nodejs-sdk/build/neynar-api/v2"
import { Replies } from "../feed/replies"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { copyToClipboard } from "@/utils"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import {useLogout} from '@privy-io/react-auth';

const CommentFooter = ({
  hash,
  parentAuthorId,
  setReplies,
}: {
  hash: string
  parentAuthorId: number
  setReplies: React.Dispatch<React.SetStateAction<Replies[]>>
}) => {
  const [text, setText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const {
    getFarcasterSignerPublicKey,
    signFarcasterMessage,
    requestFarcasterSignerFromWarpcast,
  } = useExperimentalFarcasterSigner()

  const { user, authenticated } = usePrivy()
  const { ready, wallets } = useWallets()
  const router = useRouter();

  const {logout} = useLogout({
    onSuccess: () => {
      console.log('User logged out');
      router.push('/store');
    },
  });

  useEffect(() => {}, [logout])

  if (!user) {
    return null
  }
  const farcasterAccount = user.linkedAccounts.find(
    (account) => account.type === "farcaster"
  )
  const privySigner = new ExternalEd25519Signer(
    signFarcasterMessage,
    getFarcasterSignerPublicKey
  )

  const handleCopy = async () => {
    try {
      await copyToClipboard(embedWallet?.address || '')
      toast.success('Copied!', {
        position: 'bottom-right',
        duration: 1000,
      });
    } catch (error) {
      toast.error('Failed to copy text'); // Show error toast
  };
};

  const embedWallet = getEmbeddedConnectedWallet(wallets)
  if (!authenticated && !ready && !embedWallet) {
    return null
  }

  const handleReply = async () => {
    // const signedComment = await privySigner.signMessage(comment)

    if (!user?.farcaster?.fid) {
      return
    }

    // const { fid, displayName, username, pfp } = user.farcaster

    console.log({ privySigner })

    try {
      setIsLoading(true)
      const res = await hubClient.submitCast(
        {
          text,
          parentCastId: {
            fid: parentAuthorId,
            hash,
          },
        },
        user?.farcaster.fid,
        privySigner
      )
      console.log(res.data)

      setReplies((prev) => [
        ...prev,
        {
          author: {
            display_name: user?.farcaster?.displayName ?? "",
            username: user?.farcaster?.username ?? "",
            pfp_url: user?.farcaster?.pfp ?? "",
          },
          text,
          timestamp: new Date().toISOString(),
        },
      ])
      setText("")
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleStixReply = async (stix: string) => {
    if (!user?.farcaster?.fid) {
      return
    }

    try {
      setIsLoading(true)
      const res = await hubClient.submitCast(
        {
          text: "",
          embeds: [
            {
              url: stix,
            },
          ],
          parentCastId: {
            fid: parentAuthorId,
            hash,
          },
        },
        user.farcaster.fid,
        privySigner
      )

      console.log(res.data)
      setReplies((prev) => [
        ...prev,
        {
          author: {
            display_name: user?.farcaster?.displayName ?? "",
            username: user?.farcaster?.username ?? "",
            pfp_url: user?.farcaster?.pfp ?? "",
          },
          text: "",
          embeds: [{ url: stix }],
          timestamp: new Date().toISOString(),
        },
      ])
      setText("")
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 flex w-screen flex-col border border-primary  bg-popover-secondary">
      <div className="flex w-full items-center justify-between p-2">
        {!farcasterAccount ||
        (farcasterAccount as FarcasterWithMetadata).signerPublicKey ===
          undefined ? (
          <Button
            variant="default"
            className="w-full bg-neutral-200 text-slate-900 opacity-100"
            onClick={() => requestFarcasterSignerFromWarpcast()}
            // Prevent requesting a Farcaster signer if a user has not already linked a Farcaster account
            // or if they have already requested a signer
          >
            Authorize my Farcaster signer from Warpcast
          </Button>
        ) : (
          <div className="flex w-full items-center justify-between gap-3 rounded-full bg-white">
            <Input
              placeholder="Reply to @ownerOfThisComment"
              className="w-full rounded-l-full border-none pl-5"
              onChange={(e) => setText(e.target.value)}
              value={text}
              disabled={isLoading}
            />
            <Button
              variant="ghost"
              className="text-sm text-indigo-600"
              onClick={() => handleReply()}
            >
              Reply
            </Button>
            <StickerSlider emoji handleStixReply={handleStixReply} />
          </div>
        )}
      </div>
      <div className="flex min-h-[3rem] w-full items-center justify-between rounded-t-3xl border  border-primary bg-popover-secondary px-10">
        <Link
          className="flex flex-col items-center justify-center text-primary"
          href="/"
        >
          <Icons.home className="h-6 w-6 fill-muted dark:fill-none" />
          <div className="text-[9px] text-muted">Home</div>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-primary"
          href="/store"
        >
          <Icons.shop className="h-6 w-6 fill-muted dark:fill-none" />
          <div className="text-[9px] text-muted">Store</div>
        </Link>
        {/* <div className="flex flex-col items-center justify-center text-primary">
        <Icons.pack className="h-7 w-7 fill-muted dark:fill-none" />
        <div className="text-pria text-[9px] text-muted">Buy Pack</div>
      </div> */}
        <Sheet>
          <SheetTrigger>
            <div className="flex flex-col items-center justify-center gap-1 text-primary">
              <UserAvatar />
              <div className="text-pria text-[9px] text-muted">Wallet</div>
            </div>
          </SheetTrigger>
          <SheetContent className="bg-[#818CF8] text-white" side="bottom">
            <SheetHeader>
              <SheetTitle className="text-white">Wallet</SheetTitle>
              <SheetDescription onClick={handleCopy} className="text-white break-words font-bold hover:cursor-pointer">
                {`${embedWallet?.address}`}
              </SheetDescription>
              <div>
                <Button
                  onClick={() => logout()}
                  variant="secondary"
                  className="mt-5 text-gray-200"
                >
                  Logout
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default CommentFooter
