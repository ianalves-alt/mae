"use client";
import Link from "next/link";

const CATEGORY_COLORS = {
  pilates: "#FFCDD2",
  "pilates-para-iniciantes": "#F8BBD0",
  mobilidade: "#E1BEE7",
  "forca-do-core": "#D1C4E9",
  "vida-saudavel": "#C5CAE9",
  "exercicio-baixo-impacto": "#B3E5FC",
  "prevencao-lesoes": "#B2DFDB",
  postura: "#C8E6C9",
  "pilates-no-mat": "#DCEDC8",
  respiracao: "#FFF9C4",
};

export default function Tag({ category }) {
  const slug = category?.slug;
  const title = category?.title || "—";
  const bgColor = CATEGORY_COLORS[slug] || "#ECEFF1"; // fallback grey

  if (!slug) return null;
  return (
    <Link
      href={`/category/${encodeURIComponent(slug)}`}
      className="inline-block px-4 py-1 rounded-2xl font-semibold cursor-pointer"
      style={{ background: bgColor, color: "#000" }}
    >
      {title}
    </Link>
  );
}
