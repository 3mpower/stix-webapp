import FeedIndv from "@/components/feed/feed-indv"
import Replies from "@/components/feed/replies"

export default async function FeedPage() {
  return (
    <div className="relative min-h-screen pb-24 text-black">
      <FeedIndv />
      <Replies />
    </div>
  )
}
