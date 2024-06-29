import Image from "next/image"
import React from "react"

const Loading = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-[#6466F1] text-white">
      <Image
        src="/images/stix-logo.png"
        alt="Stix Logo"
        width={100}
        height={100}
      />
      <h1>Loading....</h1>
    </div>
  )
}

export default Loading
