"use client"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Page() {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return (
    <div className="relative h-screen">
      {show && (
        <motion.div
          className="absolute bottom-0 flex w-full gap-2 rounded-t-lg bg-card p-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 5, bounce: 0 }}
        >
          <Button className="w-full" onClick={handleBack}>
            Back to stickers
          </Button>
        </motion.div>
      )}
      <div className="h-full">
          <Spline
            onLoad={() => setShow(true)}
            scene="https://prod.spline.design/nQfb8wq75Ai5HqbF/scene.splinecode"
          />
      </div>
    </div>
  )
}
