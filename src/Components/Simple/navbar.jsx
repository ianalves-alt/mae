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

  return (
    <div
      className={`${style.container} ${
        isScrollingUp ? style.navVisible : style.navHidden
      }`}
    >
      <nav className={style.nav}>
        <div>
          <Link className={style.Pilates} href="/">
            Pilates
          </Link>
        </div>
        <ul className={style.ul}>
          <li>Inicio</li>
          <li>Sobre</li>
          <li
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={style.dropDownTrigger}
          >
            Categorias
            {isHovering && (
              <div
                className={style.dropDown}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className={style.outras}>
                  <h2>Outras Categorias</h2>
                  <div>
                    <ul className={style.ulOutras}>
                      <li>
                        🌀Mobilidade
                        <span>
                          <SVG />
                        </span>
                      </li>
                      <li>
                        🎯Força-do-core
                        <span>
                          <SVG />
                        </span>
                      </li>
                      <li>
                        🌿Vida-saudável
                        <span>
                          <SVG />
                        </span>
                      </li>
                      <li>
                        🌬️Respiração
                        <span>
                          <SVG />
                        </span>
                      </li>
                      <li>
                        🪑Postura
                        <span>
                          <SVG />
                        </span>
                      </li>
                      <li>
                        🧘Pilates-no-mat
                        <span>
                          <SVG />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={style.mais}>
                  <h2>Mais relevantes</h2>
                  <ul className={style.ulMais}>
                    <li>
                      🧘‍♀️Pilates{" "}
                      <span className={style.span2}>
                        <SVG />
                      </span>
                      <span className={style.maisDesc}>
                        O Pilates é um método de condicionamento físico que
                        foca...
                      </span>
                    </li>
                    <li>
                      🧩Pilates-para-iniciantes{" "}
                      <span className={style.span2}>
                        <SVG />
                      </span>
                      <span className={style.maisDesc}>
                        Essa tag reúne conteúdos pensados pra quem está dando os
                        primeiros passos no Pilates.{" "}
                      </span>
                    </li>
                    <li>
                      🦶Baixo-impacto{" "}
                      <span className={style.span2}>
                        <SVG />
                      </span>
                      <span className={style.maisDesc}>
                        O Pilates é conhecido por ser um exercício de baixo
                        impacto...
                      </span>
                    </li>

                    <li>
                      🛡️Prevenção-de-lesões{" "}
                      <span className={style.span2}>
                        <SVG />
                      </span>
                      <span className={style.maisDesc}>
                        Essa tag foca em como o Pilates pode ser usado pra
                        fortalecer áreas frágeis...
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li>Sections</li>
        </ul>
      </nav>
    </div>
  );
}
