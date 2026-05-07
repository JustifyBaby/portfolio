import { z } from "zod";

export const PostMetaSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  category: z.string().min(1),
  tags: z.array(z.string()),
  published: z.boolean(),
  slug: z.string().min(1),
});
export const PostSchema = PostMetaSchema.extend({ content: z.string().min(1) });

export type PostMeta = z.infer<typeof PostMetaSchema>;
export type Post = z.infer<typeof PostSchema>;
