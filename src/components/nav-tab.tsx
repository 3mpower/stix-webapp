import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeContent from "./tabs-content/home-content"

const tabItem = [
  {
    id: 1,
    name: "Home",
    disabled: false,
  },
  {
    id: 2,
    name: "Premium",
    disabled: true,
  },
  {
    id: 3,
    name: "Rank",
    disabled: true,
  },
  {
    id: 4,
    name: "New",
    disabled: true,
  },
  {
    id: 5,
    name: "Free",
    disabled: true,
  },
]

const NavigationTab = () => {
  return (
    <Tabs defaultValue="home">
      <div className="px-4">
        <TabsList className="w-full">
          {tabItem.map((item, index) => (
            <TabsTrigger
              className="w-full"
              key={index}
              value={item.name.toLowerCase()}
              disabled={item.disabled}
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value="home">{<HomeContent />}</TabsContent>
    </Tabs>
  )
}

export default NavigationTab
