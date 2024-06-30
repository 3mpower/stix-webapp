import { CastFeed } from "@/components/feed/cast-feed"
import Header from "@/components/header"
import { Separator } from "@/components/ui/separator"
import React from "react"
import mockFeed from "@/mocks/feed.json"
import NavigationTab from "@/components/nav-tab"

const Feed = () => {
  return (
    <div className="relative min-h-screen pb-24 text-black">
      <Header />
      <NavigationTab />
    </div>
  )
}

export default Feed
