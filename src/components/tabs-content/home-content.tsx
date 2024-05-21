import React from "react"
import AdsBanner from "../ads-banner"
import Recommendation from "../recommendation"
import Popular from "../popular"

const HomeContent = () => {
  return (
    <div className="w-screen">
      <AdsBanner />
      <Recommendation />
      <Popular />
    </div>
  )
}

export default HomeContent
