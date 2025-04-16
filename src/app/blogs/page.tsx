import Link from "next/link";

import { getAllPosts, Post, tagColors } from "@/lib/notion";
import { cn } from "@/lib/utils";

export default async function BlogIndex() {
  const posts: Post[] = await getAllPosts();
  const publishedPosts = posts
    .filter((post) => post.public)
    .sort(
      (a, b) =>
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    );

  return (
    <div>
      <h1 className="text-5xl my-10 text-primary">📚 Blogs </h1>
      {publishedPosts.map((post) => (
        <div key={post.id} className="mb-5">
          <h1 className="text-2xl text-foreground font-bold mb-4 hover:underline">
            <Link href={`/blogs/${post.id}`}>{post.name}</Link>
          </h1>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{ backgroundColor: tagColors[tag] }}
                className={cn(
                  `text-foreground`,
                  "px-3 py-1 rounded-full text-sm font-medium"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl text-foreground">{post.description}</p>
          <hr className="border-t border-gray-300 my-4" />
        </div>
      ))}
    </div>
  );
}
// as={`/blogs/${post.name}`}>
