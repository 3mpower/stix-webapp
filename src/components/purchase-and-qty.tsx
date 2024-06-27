"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useAccount, useSimulateContract, useWriteContract } from "wagmi"
import { shorten, type AddressString } from "@/lib/utils"
import { DN404ABI } from "@/lib/abis/DN404"

const PurchaseWithQuantity = () => {
  const { chain } = useAccount()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  /// @dev The contract address of the NFT
  const contractAddress: AddressString | undefined =
    "0xc2df00f6030f11373FccEFCEEe88e89552497b71"

  const { data: simulatedContract } = useSimulateContract({
    address: contractAddress,
    abi: DN404ABI,
    functionName: "mint",
    args: [quantity * 1e18],
    value: BigInt(0.00004 * 1e18),
  })

  const { data, isPending, isError, writeContract } = useWriteContract()

  if (!chain) {
    return (
      <div title="useContractWrite">
        <p>Loading...</p>
      </div>
    )
  }

  if (!contractAddress) {
    return (
      <div title="useContractWrite">
        <p>Unsupported network. Please switch to Goerli or Mainnet.</p>
      </div>
    )
  }

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handlePurchase = async () => {
    if (simulatedContract) {
      await writeContract?.(simulatedContract.request)
      router.push("/gachapon/reveal")
    }
  }

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
