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

export async function getPostWithRelated(slug) {
  const postQuery = `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      categories[]->{
        _id,
        title
      }
    }
  `;
  const post = await client.fetch(postQuery, { slug });

  if (!post || !post.categories) return { post: null, related: [] };

  const categoryIds = post.categories.map((c) => c._id);

  const relatedQuery = `
    *[_type == "post" && references($categoryIds) && slug.current != $slug] {
      _id,
      title,
      slug,
      "mainImage": mainImage.asset->url,
      publishedAt,
      description,
      categories[]->{
        _id,
        title
      }
    }
  `;

  const pool = await client.fetch(relatedQuery, {
    categoryIds,
    slug,
  });

  const shuffled = pool.sort(() => 0.5 - Math.random());
  const related = shuffled.slice(0, 10);

  return { post, related };
}
