import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { getPost, getPosts } from "@/lib/posts";
import DialogBoxComponent from "@/components/rpg/DialogBox";
import SkillBar from "@/components/rpg/SkillBar";

// mdx内で使えるコンポーネントを登録
const components = {
  DialogBox: DialogBoxComponent,
  SkillBar,
};

// SSG用にslugを事前生成
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{
    slug: Promise<string>;
  }>;
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(await slug);

  if (!post) {
    console.log(
      (await params).slug,
      `
------------------------
NOT FOUND OF THIS BLOG
------------------------
`,
    );
    notFound();
  }

  return (
    <PageShell>
      <DialogBox
        speaker="▸ BARD"
        message={`【${post.title}】\n${post.date} — ${post.category}`}
      />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>
          <span>{post.title}</span>
          <div className="flex flex-wrap gap-1 mt-1">
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
        </SectionTitle>

        {/* mdxレンダリング */}
        <div className="mdx-content">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
    </PageShell>
  );
}
