import Image from "next/image"
import React from "react"
import { AspectRatio } from "./ui/aspect-ratio"

const AdsBanner = () => {
  return (
    <div className="max-w-screen">
        <Image src="/images/banner-1.png" alt="Image" width={500} height={500} objectFit="cover" />
    </div>
  )
}

export default AdsBanner
