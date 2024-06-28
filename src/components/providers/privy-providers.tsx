"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { env } from "env.mjs"

export default function PrivyProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivyProvider
      appId={env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
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
      }}
    >
      {children}
    </PrivyProvider>
  )
}
