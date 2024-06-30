import Header from "@/components/header"
import NavigationTab from "@/components/nav-tab"
import { Separator } from "@/components/ui/separator"
import { CastFeed } from "@/components/feed/cast-feed"
import mockFeed from "@/mocks/feed.json"

import React, { use } from "react"
import Footer from "@/components/footer/footer"
import { neynarClient } from "@/lib/neynarClient"
import { FeedType, FilterType } from "@neynar/nodejs-sdk"

export default async function HomePage() {
  const feed = await neynarClient.fetchFeed(FeedType.Filter, {
    filterType: FilterType.Fids,
    fids: [10041],
  })
  return (
    <div className="relative min-h-screen pb-24 text-black">
      <Header />
      <Separator />
      {/* export function CastFeed({ feed }: CastFeedProps) { */}
      {/* @ts-ignore */}
      <CastFeed feed={feed} />
      <Footer />
    </div>
  )
}
