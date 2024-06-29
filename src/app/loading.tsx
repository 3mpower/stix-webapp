"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#6466F1] text-white">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/face.png"
          alt="Face Loading"
          width={100}
          height={100}
        />
      </motion.div>
    </div>
  )
}

export default Loading
