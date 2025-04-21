"use client";
import { useState } from "react";
import PostCard from "@/Components/Simple/PostCard.jsx";

export default function CategoryContent({ initialPosts, slug, className }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  const loadMore = async () => {
    setLoading(true);
    const res = await fetch("/api/category-posts", {
      method: "POST",
      body: JSON.stringify({ slug, start: page * limit, limit }),
    });

    const data = await res.json();

    if (data?.posts?.length > 0) {
      setPosts((prev) => [...prev, ...data.posts]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  return (
    <>
      <div className={className}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
}
