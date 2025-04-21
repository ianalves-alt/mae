import { client } from "./sanity";

export async function getAllCategories() {
  return await client.fetch(
    `*[_type == "category"]{ _id, title, slug, description }`,
  );
}

export async function getCategoryWithPosts(slug, limit = 10) {
  const categoryQuery = `
    *[_type == "category" && slug.current == $slug][0]{
      title,
      description,
      _id
    }
  `;
  const category = await client.fetch(categoryQuery, { slug });

  if (!category) return null;

  const postsQuery = `
    *[_type == "post" && references($catId)]
    | order(publishedAt desc)
    [0...$limit]{
      _id,
      title,
      slug,
      publishedAt,
      description,
      "mainImage": mainImage.asset->url
    }
  `;

  const posts = await client.fetch(postsQuery, {
    catId: category._id,
    limit,
  });

  return {
    ...category,
    posts,
  };
}
