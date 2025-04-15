import Link from "next/link";

import { getAllPosts, Post } from "@/lib/notion";

export default async function BlogIndex() {
  const posts: Post[] = await getAllPosts();

  return (
    <h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className="text-2xl font-bold mb-4">
            <Link href={`/blogs/${post.id}`}>{post.name}</Link>
            <p className="text-sm text-gray-500">{post.description}</p>
          </h1>
        </div>
      ))}
    </h1>
  );
}
// as={`/blogs/${post.name}`}>
