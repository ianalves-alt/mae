import Link from "next/link";
import Image from "next/image";
import styles from "@/Styles/modules/categoryPage.module.css";
import style from "@/Styles/modules/intro.module.css";

export default function PostCard({ post }) {
  const truncateAfterPeriod = (str) => {
    if (typeof str !== "string") return "";
    const periodIndex = str.indexOf(".");
    if (periodIndex === -1) return str;
    return str.slice(0, periodIndex) + "...";
  };
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.link} href={`/blog/${post.slug.current}`}>
        <div className={styles.ImageContainer}>
          <Image
            src={post.mainImage}
            alt={post.title}
            width={455}
            height={306}
            className={style.image}
          />
          <div className={styles.authorInfo}>
            Raphaella Alves • {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <div className={styles.desc}>
            {truncateAfterPeriod(post.description)}
          </div>
        </div>
      </Link>
    </div>
  );
}
