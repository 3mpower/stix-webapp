"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import React, { Suspense } from "react"
import Loading from "@/app/loading"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

const SplineComponent = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  const [isMounted, set_isMounted] = useState(false)
    useEffect(() => {
        set_isMounted(true)
    }, [])

  return (
    <>
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
      <div className="h-screen">
        {isMounted && (
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              scene="https://prod.spline.design/nQfb8wq75Ai5HqbF/scene.splinecode"
              onLoad={() => {
                setShow(true)
              }}
            />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default SplineComponent
