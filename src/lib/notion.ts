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

export const tagColors: Record<string, string> = {
  "Computer Science": "#f7df1e",
  "Travel": "#ff9999",
};
