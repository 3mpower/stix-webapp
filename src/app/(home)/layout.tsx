import HomeFooter from "@/components/footer/home-footer"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
        <HomeFooter />
      </main>
    </div>
  )
}
