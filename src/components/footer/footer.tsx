import React from "react"
import { Icons } from "../icons"
import UserAvatar from "../avatar"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-[4.375rem] w-full items-center justify-between rounded-t-3xl border  border-primary bg-popover-secondary px-10">
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
      <div className="flex flex-col items-center justify-center gap-1 text-primary">
        <UserAvatar />
        <div className="text-pria text-[9px] text-muted">Profile</div>
      </div>
    </div>
  )
}

export default Footer
