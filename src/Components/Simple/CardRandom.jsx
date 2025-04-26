"use client";
import { useRouter } from "next/navigation";
import style from "../../Styles/modules/intro.module.css";
import Image from "next/image";
import Link from "next/link";
export default function CardRandom({ postFetch }) {
  const router = useRouter();
  const truncateAfterPeriod = (str) => {
    if (typeof str !== "string") return "";
    const periodIndex = str.indexOf(".");
    if (periodIndex === -1) return str;
    return str.slice(0, periodIndex) + "...";
  };
  return (
    <>
      <div className={style.cardContainer}>
        <ul className={style.ul}>
          {postFetch.map((post, index) => (
            <li
              onClick={() => router.push(`/blog/${post.slug.current}`)}
              key={post._id}
              className={style.cardContainerli}
              style={{ cursor: "pointer" }}
            >
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
                  <span className={style.dot}>•</span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <h2 className={style.postTitle}>{post.title}</h2>
                <div className={style.desc}>{post.description}</div>
                <div className={style.flex}>
                  <button>Continue lendo</button>
                  <div>
                    {post.categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/category/${category.slug.current}`}
                        className={style.linkCategory}
                      >
                        <span className={style.category}>
                          {" "}
                          {category.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
