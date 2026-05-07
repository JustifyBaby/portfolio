import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { getPosts } from "@/lib/posts";
import { PostMeta } from "@/types/post.type";
import Link from "next/link";

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        display: "block",
        border: "1px solid var(--border2)",
        padding: "12px",
        background: "rgba(10,10,40,.7)",
        textDecoration: "none",
        transition: "border-color .1s",
      }}
      className="rpg-btn"
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          style={{
            fontSize: "5px",
            color: "var(--gray)",
            border: "1px solid var(--border2)",
            padding: "1px 5px",
          }}
        >
          {post.category}
        </span>
        <span style={{ fontSize: "5px", color: "var(--gray)" }}>
          {post.date}
        </span>
      </div>

      <p
        style={{ fontSize: "8px", color: "var(--rpg-white)", marginBottom: 6 }}
      >
        {post.title}
      </p>

      <div className="flex flex-wrap gap-1">
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "4px",
              color: "var(--gray)",
              border: "1px solid var(--border2)",
              padding: "1px 4px",
              background: "rgba(68,68,204,.1)",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <PageShell>
      <DialogBox
        speaker="▸ BARD"
        message={"【Blog】の書庫へようこそ。\n旅の記録がここに刻まれている。"}
      />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ BLOG</SectionTitle>

        {posts.length === 0 ? (
          <p
            style={{
              fontSize: "6px",
              color: "var(--gray)",
              textAlign: "center",
              padding: 24,
            }}
          >
            <span className="animate-blink">▮</span> 記事がまだありません
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
