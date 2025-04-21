"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/Styles/modules/categoryPage.module.css";

export default function CategoryList({ categories, current }) {
  return (
    <div className={style.listContainer}>
      {categories.map((cat) => (
        <Link
          key={cat._id}
          href={`/category/${cat.slug.current}`}
          className={`${style.categoryLink} ${cat.slug.current === current ? style.active : ""}`}
        >
          {cat.title}
        </Link>
      ))}
    </div>
  );
}
