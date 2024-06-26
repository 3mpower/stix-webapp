import Footer from "@/components/footer/footer"

interface StoreLayoutProps {
  children: React.ReactNode
}

export default async function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
        <Footer />
      </main>
    </div>
  )
}
