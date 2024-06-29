"use client"

import PrivyProvider from "./privy-provider"

const buildProvidersTree = (componentsWithProps: any[]) => {
  const initialComponent = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  )
  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      const ProviderWithProps = ({
        children,
      }: {
        children: React.ReactNode
      }) => (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      )
      ProviderWithProps.displayName = `ProviderWithProps(${
        Provider.displayName || Provider.name || "Unknown"
      })`
      return ProviderWithProps
    },
    initialComponent
  )
}

const ProvidersTree = buildProvidersTree([[PrivyProvider]])

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ProvidersTree>{children}</ProvidersTree>
}
