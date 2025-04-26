import style from "../../Styles/modules/intro.module.css";
import Image from "next/image";
import { client } from "@/lib/sanity";
import Link from "next/link";
import CardLatest from "./Card.jsx";
import CardRandom from "./CardRandom.jsx";

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
  const SVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right-icon lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  };
  /*const CardLatest = () => (
    <div className={style.cardContainerL}>
      <ul className={style.ulL}>
        {postsLatest.map((post, key) => (
          <li
            key={post._id}
            className={style.cardContainerliL}
            onClick={() => router.push(`/blog/${post.slug.current}`)}
            style={{ cursor: "pointer" }}
          >
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
            <div
              className={style.categoryL}
              onClick={(e) => e.stopPropagation()} // prevent parent click
            >
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

  */

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
            <CardRandom postFetch={postsRandom} />
            <CardRandom postFetch={postsRandom} />
          </div>

          <div>
            <h2 className={style.recent}>Mais Recentes</h2>
            <CardLatest postFetch={postsLatest} />
          </div>
        </div>

        <div className={style.categoriesContainer}>
          <div className={style.stickyContainer}>
            <h1 className={style.categoriesSticky}>
              <div className={style.line}></div>Categorias
              <div className={style.line}></div>
            </h1>
            <ul>
              <li>
                <Link href="/category/pilates" className={style.link2}>
                  🧘 Pilates
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/category/pilates-para-iniciantes"
                  className={style.link2}
                >
                  🪴 Pilates-para-iniciantes
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/mobilidade" className={style.link2}>
                  🌀 Mobilidade
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/forca-do-core" className={style.link2}>
                  🎯 Força-do-core
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/vida-saudavel" className={style.link2}>
                  🌿 Vida-saudável
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/category/exercicio-de-baixo-impacto"
                  className={style.link2}
                >
                  🦵 Exercício-baixo-impacto
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/forca-do-core" className={style.link2}>
                  🛡️ Prevenção-de-lesões
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/postura" className={style.link2}>
                  🧍 Postura
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/pilates-no-mat" className={style.link2}>
                  🧘 Pilates-no-mat
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/respiracao" className={style.link2}>
                  🌬️ Respiração
                  <span>
                    <SVG />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
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
