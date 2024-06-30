"use client"

import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
// import { useRouter } from "next/navigation"
// import { useAccount, useSimulateContract, useWriteContract } from "wagmi"
import { type AddressString } from "@/lib/utils"
import { DN404ABI } from "@/lib/abis/DN404"
import {
  createWalletClient,
  custom,
  formatEther,
  parseEther,
  parseGwei,
} from "viem"
import { baseSepolia } from "viem/chains"
import {
  usePrivy,
  useWallets,
  getEmbeddedConnectedWallet,
} from "@privy-io/react-auth"

import { publicClient } from "./providers/privy-provider"
import { useRouter } from "next/navigation"

const PurchaseWithQuantity = () => {
  // const { chain } = useAccount()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const { wallets, ready } = useWallets()
  // const { sendTransaction, ready } = usePrivy()

  const embedWallet = getEmbeddedConnectedWallet(wallets)

  /// @dev The contract address of the NFT
  const contractAddress: AddressString | undefined =
    "0xC56aAada39F4F7776aae1C7B1a724A1c6ff9B4E6"

  const price = "0.000001"
  // console.log("simulatedPending", simulatedPending)
  // console.log("simulatedContract", simulatedContract)
  // console.log("simulatedError", simulatedError)

  // const { data, isPending, isError, writeContract } = useWriteContract()

  // if (!chain) {
  //   return (
  //     <div title="useContractWrite">
  //       <p>Loading...</p>
  //     </div>
  //   )
  // }

  // if (!contractAddress) {
  //   return (
  //     <div title="useContractWrite">
  //       <p>Unsupported network. Please switch to Goerli or Mainnet.</p>
  //     </div>
  //   )
  // }

  // useEffect(() => {
  //   // console.log("useEffect", embedWallet)
  //   async function switchChain() {
  //     if (ready && embedWallet) {
  //       await embedWallet.switchChain(baseSepolia.id)
  //     }
  //   }
  //   switchChain()
  // }, [])

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handlePurchase = async () => {
    if (!embedWallet) {
      return
    }

    await embedWallet.switchChain(baseSepolia.id)

    const provider = await embedWallet.getEthereumProvider()

    const walletClient = createWalletClient({
      chain: baseSepolia,
      transport: custom(provider),
    })

    const amountVal = parseEther("0.000001") * BigInt(quantity)

    const { request } = await publicClient.simulateContract({
      account: `0x${embedWallet.address.split("0x")[1]}`,
      address: contractAddress,
      abi: DN404ABI,
      args: [embedWallet.address, parseEther(quantity.toString())],
      value: amountVal,
      functionName: "mint",
    })

    if (!request) {
      return
    }

    const res = await walletClient.writeContract(request)
    router.push("/gachapon/reveal")
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
        <div className="w-10 text-center font-bold text-foreground">
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
        {!ready ? null : (
          <div>{`${formatEther(parseEther(price) * BigInt(quantity))}eth`}</div>
        )}
      </Button>
    </div>
  )
}

export default PurchaseWithQuantity
