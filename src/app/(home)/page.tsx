import Header from "@/components/header"
import NavigationTab from "@/components/nav-tab"
import React from "react"

export default async function IndexPage() {
  return (
    <div className="relative min-h-screen pb-24 text-black">
      <Header />
      <NavigationTab />
    </div>
  )
}
