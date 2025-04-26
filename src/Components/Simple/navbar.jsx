"use client";
import { useEffect, useState } from "react";
import style from "../../Styles/modules/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(true);

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
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const SVGTwo = () => {
    return <></>;
  };
  return (
    <div
      className={`${style.container} ${
        isScrollingUp ? style.navVisible : style.navHidden
      }`}
    >
      <nav className={style.nav}>
        <div>
          <Link className={`${style.Pilates} ${style.link}`} href="/">
            Pilates
          </Link>
        </div>
        <ul className={style.ul}>
          <li>
            <Link className={style.link} href="/">
              <span className={style.inicio}>Inicio</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link className={style.link} href="/Sobre">
              <span className={style.sobre}>Sobre</span>
            </Link>
          </li>
          <li>
            <Link href={`/category/pilates`} className={style.link}>
              <span className={style.categorias}>Categorias</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
