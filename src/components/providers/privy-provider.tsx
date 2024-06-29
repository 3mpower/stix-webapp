"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { env } from "env.mjs"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createPublicClient, http } from "viem"
import { baseSepolia } from "viem/chains"
import type { PrivyClientConfig } from "@privy-io/react-auth"
// import { WagmiProvider, createConfig } from "@privy-io/wagmi"

// const queryClient = new QueryClient()

// export const wagmiConfig = createConfig({
//   chains: [baseSepolia],
//   transports: {
//     [baseSepolia.id]: http(),
//   },
// })

export const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
})

const privyConfig: PrivyClientConfig = {
  // Customize Privy's appearance in your app
  appearance: {
    theme: "light",
    accentColor: "#676FFF",
    logo: "/images/vercel.svg",
  },
  loginMethods: ["farcaster"],
  // Create embedded wallets for users who don't have a wallet
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
}

export default function PrivyProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivyProvider appId={env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <WagmiProvider config={wagmiConfig} reconnectOnMount={false}> */}
      {children}
      {/* </WagmiProvider> */}
      {/* </QueryClientProvider> */}
    </PrivyProvider>
  )
}
