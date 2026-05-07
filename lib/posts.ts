import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Post, PostMeta, PostMetaSchema, PostSchema } from "@/types/post.type";
import z from "zod";

const POSTS_DIR = path.join(process.cwd(), "posts");

export async function getPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(POSTS_DIR);

  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
      const { data } = matter(raw);
      const slug = path.basename(f, ".mdx"); // "slug" is named in FINE_NAME
      const result = PostMetaSchema.safeParse({ ...data, slug });
      if (!result.success) {
        console.warn(
          `Invalid frontmatter in ${f}:`,
          z.treeifyError(result.error),
        );
        return null;
      }
      return result.data;
    })
    .filter((p): p is PostMeta => p !== null)
    .filter((p) => p.published);
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    console.log("FILE IS NOT FOUND", slug);
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const result = PostSchema.safeParse({ ...data, slug, content });
  if (!result.success) {
    console.warn(z.treeifyError(result.error));
    return null;
  }

  if (!result.data.published) return null;

  return result.data;
}
