import { NotionRenderer } from "react-notion";

import { getAllPosts, Post } from "@/app/blogs/page";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

// export async function getStaticProps({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   // Get all posts again
//   const posts = await getAllPosts();

//   // Find the current blogpost by slug
//   const post = posts.find((t) => t.id === id);

//   const blocks = await fetch(
//     `https://notion-api.splitbee.io/v1/page/${id}`
//   ).then((res) => res.json());

//   return {
//     props: {
//       blocks,
//       post,
//     },
//   };
// }

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts();
  const params = posts.map((post) => ({
    id: String(post.id),
  }));
  return params;
}


export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const posts: Post[] = await getAllPosts();
  // const post = posts.find((p) => p.id === id);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then((res) =>
    res.json()
  );
  const post = posts.find((p) => p.id === id);

  return (
    <div style={{ maxWidth: 768 }}>
      <h1 className="text-3xl">{post?.name}</h1>
      <NotionRenderer blockMap={blocks}/>
    </div>
  );
}