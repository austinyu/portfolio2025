import Link from "next/link";

const NOTION_BLOG_ID = "1d488b4478e3816d8ecceff35e3fe7af";

export interface Post {
  id: string;
  name: string;
  description: string;
  public: boolean;
  featured: boolean;
  published: string;
  tags: string[];
  lastUpdated: string;
}

export const getAllPosts = async (): Promise<Post[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className="text-2xl font-bold mb-4">
            <Link href={`/blogs/${post.id}`}> 
              {post.name}
            </Link>
            <p className="text-sm text-gray-500">{post.description}</p>
          </h1>
        </div>
      ))}
    </h1>
  );
}
// as={`/blogs/${post.name}`}>