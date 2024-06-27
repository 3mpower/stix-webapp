"use client"
import React from "react"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  const pageNames: { [key: string]: string } = {
    "/": "Home",
    "/store": "Store",
    // Add more pathnames here as needed
  }

  const pageName = pageNames[pathname] || pathname.split("/").pop()

  return (
    <div className="flex h-[3.2rem] items-center justify-center font-bold text-accent-foreground">
      {pageName}
    </div>
  )
}

export default Header
