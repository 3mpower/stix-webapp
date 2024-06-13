import React from "react"
import AdsBanner from "../ads-banner"
import Recommendation from "../recommendation"
import Popular from "../popular"
import StackedGachapon from "../stacked-gachapon"

const HomeContent = () => {
  return (
    <div className="w-screen">
      {/* <AdsBanner /> */}
      <StackedGachapon />
      <div className="rounded-t-3xl py-2 text-accent-foreground dark:bg-accent">
        <Recommendation />
      </div>
    </div>
  )
}

export default HomeContent
