import Footer from "@/components/footer/footer"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
        <Footer />
      </main>
    </div>
  )
}
