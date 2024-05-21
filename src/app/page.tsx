import AdsBanner from "@/components/ads-banner"
import Header from "@/components/header"
import NavigationTab from "@/components/nav-tab"
import React from "react"

export default async function IndexPage() {
  return (
    <div className="relative min-h-screen bg-[#fff] text-black">
        <Header />
        <NavigationTab />
    </div>
  )
}
