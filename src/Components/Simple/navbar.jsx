"use client";
import { useEffect, useState } from "react";
import style from "../../Styles/modules/navbar.module.css";

export default function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div
      className={`${style.container} ${
        isScrollingUp ? style.navVisible : style.navHidden
      }`}
    >
      <nav className={style.nav}>
        <div>Pilates</div>
        <ul className={style.ul}>
          <li>home</li>
          <li>About</li>
          <li>Tags</li>
          <li>Sections</li>
        </ul>
      </nav>
    </div>
  );
}
