import Footer from "@/components/footer/footer"

interface FeedLayoutProps {
  children: React.ReactNode
}

export default async function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
        <Footer />
      </main>
    </div>
  )
}
