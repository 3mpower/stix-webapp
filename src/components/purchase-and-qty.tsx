"use client"

import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const PurchaseWithQuantity = () => {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handlePurchase = () => {
    router.push("/gachapon/reveal")
  }

  useEffect(() => {
    router.prefetch("/gachapon/reveal")
  }, [])

  return (
    <div className="my-2 flex h-10 w-full gap-4">
      <div className="flex items-center">
        <Button
          onClick={() => decrement()}
          variant="secondary"
          size="icon-round"
          className="text-neutral-200"
        >
          -
        </Button>
        <div className="w-[2.5rem] text-center font-bold text-foreground">
          {quantity}
        </div>
        <Button
          onClick={() => increment()}
          variant="secondary"
          size="icon-round"
          className="text-neutral-200"
        >
          +
        </Button>
      </div>
      <Button
        className="flex flex-1 justify-between uppercase"
        onClick={handlePurchase}
      >
        <div>Purchase</div>
        <div>$100</div>
      </Button>
    </div>
  )
}

export default PurchaseWithQuantity
