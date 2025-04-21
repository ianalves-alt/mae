import { getCategoryWithPosts, getAllCategories } from "@/lib/queries";
import CategoryList from "@/Components/Simple/CategoryList.jsx";
import style from "@/Styles/modules/categoryPage.module.css";
import CategoryContent from "@/Components/Simple/CategoryContent.jsx";

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const category = await getCategoryWithPosts(slug, 10); // Load only 10
  const categories = await getAllCategories();

  return (
    <div style={{ display: "flex", gap: "30px", padding: "30px" }}>
      <CategoryList current={slug} categories={categories} />

      <div className={style.postsC}>
        {category.title && <h1>{category.title}</h1>}
        {category.description && <p>{category.description}</p>}

        <CategoryContent
          initialPosts={category.posts}
          slug={slug}
          className={style.cardsC}
        />
      </div>
    </div>
  );
}
