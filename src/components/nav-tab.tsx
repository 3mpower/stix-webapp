import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeContent from "./tabs-content/home-content"

const tabItem = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Premium",
  },
  {
    id: 3,
    name: "Rank",
  },
  {
    id: 4,
    name: "New",
  },
  {
    id: 5,
    name: "Free",
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
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value="home">
        <HomeContent />
      </TabsContent>
    </Tabs>
  )
}

export default NavigationTab
