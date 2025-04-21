"use client";
import style from "../../Styles/modules/intro.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function CardLatest({ postFetch }) {
  const router = useRouter();
  const truncateAfterPeriod = (str) => {
    if (typeof str !== "string") return "";
    const periodIndex = str.indexOf(".");
    if (periodIndex === -1) return str;
    return str.slice(0, periodIndex) + "...";
  };
  return (
    <>
      <div className={style.cardContainerL}>
        <ul className={style.ulL}>
          {postFetch.map((post, key) => (
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
                  {post.author}{" "}
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
              </div>
              <div
                className={style.categoryL}
                onClick={(e) => e.stopPropagation()}
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
    </>
  );
}
