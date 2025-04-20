import { client } from "@/lib/sanity";
import Link from "next/link";

async function getPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title
  } | order(publishedAt desc)`;
  return await client.fetch(query);
}
export default async function BlogPage() {
  const posts = await getPosts();
  console.log(posts, "hi");
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2>{post.title}</h2>
              <p>
                By {post.author} on{" "}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
