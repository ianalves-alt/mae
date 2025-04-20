import style from "../../Styles/modules/intro.module.css";
import Image from "next/image";
import { client } from "@/lib/sanity";
import Link from "next/link";

async function getPosts({ type = "latest", limit = 10 } = {}) {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    "author": author->name,
    "categories": categories[]->{title,slug},
    "mainImage": mainImage.asset->url
  }`;

  const allPosts = await client.fetch(query);

  if (type === "random") {
    const shuffled = allPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  }

  return allPosts
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
}

export default async function Intro() {
  const postsRandom = await getPosts({ type: "random", limit: 10 });
  const postsLatest = await getPosts({ type: "latest", limit: 10 });

  const truncateAfterPeriod = (str) => {
    if (typeof str !== "string") return "";
    const periodIndex = str.indexOf(".");
    if (periodIndex === -1) return str;
    return str.slice(0, periodIndex) + "...";
  };

  const CardLatest = () => (
    <div className={style.cardContainerL}>
      <ul className={style.ulL}>
        {postsLatest.map((post, key) => (
          <li key={key} className={style.cardContainerliL}>
            <div className={style.imageWrapperL}>
              <Image
                width={455}
                height={306}
                alt="picture of pilates"
                src={post.mainImage}
                className={style.imageL}
              />
              <div className={style.authorInfoL}>
                {post.author} {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>
            <div className={style.categoryL}>
              <Link href={`/categories/${post.categories[0].slug.current}`}>
                {post.categories[0].title}
              </Link>
            </div>
            <h2 className={style.postTitleL}>{post.title}</h2>
            <div className={style.descL}>
              {truncateAfterPeriod(post.description)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const CardRandom = () => (
    <div className={style.cardContainer}>
      <ul className={style.ul}>
        {postsRandom.map((post, index) => (
          <li key={index} className={style.cardContainerli}>
            <div className={style.imageWrapper}>
              <Image
                width={930}
                height={618}
                alt="picture of pilates"
                src={post.mainImage}
                className={style.mainImage}
              />
              <div className={style.authorInfo}>
                {post.author}
                <div className={style.circle}></div>
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <h2 className={style.postTitle}>{post.title}</h2>
              <div className={style.desc}>{post.description}</div>
              <div className={style.flex}>
                <button>Continue lendo</button>
                <div>
                  {post.categories.map((category, index) => (
                    <span className={style.category} key={index}>
                      <Link href={`/category/${category.slug.current}`}>
                        {category.title}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className={style.container}>
        <div className={style.intro}>
          Introduction
          <div className={style.introText}>
            Read some of the hottest topics of pilates in recent times.
          </div>
        </div>
      </div>

      <div className={style.contentF}>
        <div>
          <div className={style.containerCards}>
            <CardRandom />
            <CardRandom />
          </div>
          <div>
            <CardLatest />
            <CardLatest />
          </div>
        </div>

        <div className={style.categoriesContainer}>
          <h1 className={style.categoriesSticky}>
            <div className={style.line}></div>Categorias
            <div className={style.line}></div>
          </h1>
          <ul>
            <li>🧘 Pilates</li>
            <li>🪴 Pilates-para-iniciantes</li>
            <li>🌀 Mobilidade</li>
            <li>🎯 Força-do-core</li>
            <li>🌿 Vida-saudável</li>
            <li>🦵 Exercício-de-baixo-impacto</li>
            <li>🛡️ Prevenção-de-lesões</li>
            <li>🧍 Postura</li>
            <li>🧘 Pilates-no-mat</li>
            <li>🌬️ Respiração</li>
          </ul>
        </div>
      </div>

      <div className={style.vejaC}>
        <span className={style.veja}>
          <Link href="/blog">Veja mais...</Link>
        </span>
      </div>
    </>
  );
}
