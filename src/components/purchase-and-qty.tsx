import React, { useState } from "react"
import { Button } from "./ui/button"

const PurchaseWithQuantity = () => {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="my-2 flex h-10 w-full gap-4">
      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => decrement()}
          className="flex h-8 w-8 items-center justify-center rounded-full  border border-primary bg-button-secondary text-primary-foreground shadow-[1px_2px_0px_0px_#1a202c] dark:text-accent-foreground dark:shadow-[1px_2px_0px_0px_#fff]"
        >
          -
        </Button>
        <div className="w-[2.5rem] text-center font-bold text-foreground">
          {quantity}
        </div>
        <Button
          onClick={() => increment()}
          variant="ghost"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-button-secondary text-primary-foreground shadow-[1px_2px_0px_0px_#1a202c] dark:text-accent-foreground dark:shadow-[1px_2px_0px_0px_#fff]"
        >
          +
        </Button>
      </div>
      <Button className="flex flex-1 justify-between border border-primary bg-button px-3 font-bold uppercase text-button-foreground shadow-[3px_4px_0px_0px_#1a202c] dark:text-foreground ">
        <div>Purchase</div>
        <div>$100</div>
      </Button>
    </div>
  )
}

export default PurchaseWithQuantity
