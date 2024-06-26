import Header from "@/components/header"
import NavigationTab from "@/components/nav-tab"
import { Separator } from "@/components/ui/separator"
import { CastFeed } from "@/components/feed/cast-feed"
import mockFeed from "@/mocks/feed.json"

import React from "react"
import Footer from "@/components/footer/footer"

export default async function HomePage() {
  return (
    <div className="relative min-h-screen pb-24 text-black">
      <Header />
      <Separator />
      {/* export function CastFeed({ feed }: CastFeedProps) { */}
      {/* @ts-ignore */}
      <CastFeed feed={mockFeed} />
      <Footer />
    </div>
  )
}
