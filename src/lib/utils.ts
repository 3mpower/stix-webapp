import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type {
  TransactionReceipt,
  TransactionLegacy,
  TransactionEIP1559,
  TransactionEIP2930,
} from "viem"
import type { GetTransactionData } from "wagmi/query"

import { env } from "@/../env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export const shorten = (address: string | undefined) => {
  if (!address) return ""
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4,
    address.length
  )}`
}

export type AddressString = `0x${string}`

export const stringifyTransaction = (
  tx?:
    | GetTransactionData<any, any>
    | TransactionReceipt
    | TransactionLegacy
    | TransactionEIP1559
    | TransactionEIP2930
) => {
  if (!tx) return "{}"

  return JSON.stringify(
    Object.fromEntries(
      Object.entries(tx).map(([key, val]) => [
        key,
        typeof val === "bigint" ? val.toString() : val,
      ])
    ),
    null,
    2
  )
}
