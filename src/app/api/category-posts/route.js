import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { slug, start = 0, limit = 10 } = await req.json();

  const category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]{ _id }`,
    { slug },
  );

  if (!category?._id) return NextResponse.json({ posts: [] });

  const posts = await client.fetch(
    `*[_type == "post" && references($catId)]
     | order(publishedAt desc)
     [${start}...${start + limit}]{
       _id,
       title,
       slug,
       publishedAt,
       "mainImage": mainImage.asset->url,
       description
     }`,
    { catId: category._id },
  );

  return NextResponse.json({ posts });
}
