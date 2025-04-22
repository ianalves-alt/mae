import { client } from "@/lib/sanity";
import { getPostWithRelated } from "@/lib/queries.js";

import style from "../../../Styles/modules/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import PostCard from "@/Components/Simple/PostCard";
import styles from "@/Styles/modules/categoryPage.module.css";

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url
  }`;
  return await client.fetch(query, { slug });
}
function generateTOC(body) {
  return body
    .filter((block) => block._type === "block" && "h2".includes(block.style))
    .map((block) => {
      const text = block.children.map((child) => child.text).join("");
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return {
        text,
        id,
        level: block.style,
      };
    });
}

export default async function PostPage({ params }) {
  const ParamnsAwait = await params;
  const posts = await getPost(ParamnsAwait.slug);
  if (!posts) return <div>Post not found</div>;
  const toc = generateTOC(posts.body);
  const { slug } = params;

  const { post, related } = await getPostWithRelated(slug);
  const myComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold text-purple-700 mb-4">{children}</h1>
      ),
      h2: ({ children }) => {
        const id = children[0].toLowerCase().replace(/\s+/g, "-");
        return (
          <h2 id={id} className={style.h2}>
            {children}
          </h2>
        );
      },
      h3: ({ children }) => <h3 className={style.h3}>{children}</h3>,
      normal: ({ children }) => <p className={style.p}>{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className={style.ul}>{children}</ul>,
      number: ({ children }) => (
        <ol className="list-decimal list-inside space-y-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className={style.li}>{children}</li>,
      number: ({ children }) => <li className="ml-4">{children}</li>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className="text-blue-600">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-700">{children}</em>
      ),
    },
  };
  return (
    <>
      <div className={style.container}>
        <header>
          <div className={style.flexContainer}>
            <div>
              {posts.categories.map((element, index) => (
                <span className={style.category} key={index}>
                  {element}
                </span>
              ))}
            </div>
            <div className={style.info}>
              Por {posts.author}{" "}
              <div>on {new Date(posts.publishedAt).toLocaleDateString()}</div>
            </div>
          </div>
          <h1 className={style.title}>{posts.title}</h1>
          <div>
            <Image
              width={930}
              height={618}
              alt="Picture of pilates"
              src={posts.mainImage}
              className={style.mainImage}
            />
          </div>
        </header>
        {/* TOC Section */}
      </div>

      <div className={style.br}></div>
      <div className={style.postContent}>
        <nav className={style.toc}>
          <div className={style.conteudoFlex}>
            <div className={style.conteudoBr}></div>

            <h2>Conteúdo</h2>
          </div>
          <ul>
            {toc.map((item, index) => (
              <li key={index} className={style[item.level]}>
                <Link href={`#${item.id}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.content}>
          <PortableText value={post.body} components={myComponents} />
        </div>
      </div>
      {related.length > 0 && (
        <div className={style.relatedContainer}>
          <h2>Você pode se interessar</h2>
          <div className={styles.cardsC}>
            {related.map((p) => (
              <PostCard key={p._id} post={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
