import { NotionRenderer } from "react-notion";
import { notFound } from "next/navigation";
import {BackToBlogsButton} from "@/components/Buttons";
import { getAllPosts, Post, tagColors } from "@/lib/notion";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts();
  const params = posts.map((post) => ({
    id: String(post.id),
  }));
  return params;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const posts: Post[] = await getAllPosts();

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${id}`
  ).then((res) => res.json());
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="text-2xl">
      <h1 className="text-6xl font-bold text-center text-primary my-10">
        {post?.name}
      </h1>
      <hr className="my-8 border-t border-gray-300" />
      <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-col flex-1">
          {/* Back to Blog Index Button */}
          <BackToBlogsButton
            className="px-4 py-2 text-foreground rounded hover:underline"
          />
          {/* Tags Section */}
          <div className="flex flex-col items-start">
            <h2>Tags: </h2>
            <div className="flex flex-col gap-2 mb-4">
              {post?.tags?.map((tag) => (
                <span
                  key={tag}
                  style={{ backgroundColor: tagColors[tag] }}
                  className="px-3 py-1 text-sm font-medium text-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-3">
          <NotionRenderer blockMap={blocks} />
        </div>
      </div>
    </div>
  );
}
