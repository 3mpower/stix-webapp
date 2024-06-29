"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"

import { ExecutionResult } from "graphql"

import {
  UsrOwnedTokensByCollectionDocument,
  UsrOwnedTokensByCollectionQuery,
  execute,
} from ".graphclient"
import { useParams } from "next/navigation"
import { useWallets, getEmbeddedConnectedWallet } from "@privy-io/react-auth"

const Inventory = () => {
  const { sticker } = useParams<{ sticker: string }>()

  const { ready, wallets } = useWallets()

  const embededWallet = getEmbeddedConnectedWallet(wallets)

  const [items, setItems] =
    useState<ExecutionResult<UsrOwnedTokensByCollectionQuery>>()
  useEffect(() => {
    // console.log({ sticker })
    // console.log(farcasterAccOwner)
    if (embededWallet) {
      console.log({ embededWallet: embededWallet.address, sticker })
      execute(UsrOwnedTokensByCollectionDocument, {
        userAddr: embededWallet?.address,
        collectionAddr: sticker,
      }).then((result) => {
        console.log({ result })
        setItems(result)
        // const { data } = result
        // setSelectedCollection(data?.user?.ownedCollections[0])
      })
    }
  }, [ready])
  const getColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "#D4D4D4"
      case "Rare":
        return "#FDE046"
      case "Legendary":
        return "#D8B4FE"
      default:
        return ""
    }
  }

  return (
    <div>
      <p className="mb-2 text-xs font-bold">My Inventory</p>
      <div className="flex gap-x-[12px]">
        {items &&
          items.data?.user?.ownedTokens.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 text-center`}
              // style={{ borderColor: getColor(item.rarity) }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                alt={item.id}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Inventory
