import FeedIndv from "@/components/feed/feed-indv"
import Replies from "@/components/feed/replies"
import CommentFooter from "@/components/footer/footer-with-replies"
import { neynarClient } from "@/lib/neynarClient"

export default async function FeedPage({
  params,
}: {
  params: { feed: string }
}) {
  const data = await neynarClient.lookupCastConversation(params.feed, "hash", {
    replyDepth: 1,
    limit: 10,
  })
  return (
    <div className="relative min-h-screen pb-24 text-black">
      <FeedIndv conversation={data.conversation} />
      <Replies conversation={data.conversation} />
      {/* <CommentFooter
        hash={params.feed}
        parentAuthorId={castAndCoversation.conversation.cast.author.fid}
      /> */}
    </div>
  )
}
