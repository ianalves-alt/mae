"use client";
import style from "../../Styles/modules/CategoryBox.module.css";
import { useState } from "react";
import Link from "next/link";
export default function CategoryBox() {
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
  return (
    <>
      <h1 className={style.categoryTitle}>Categorias</h1>
      <li
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={style.dropDownTrigger}
      >
        <Link href={`/category/pilates`} className={style.link}>
          Categorias
          <span className={style.arrow}></span>
        </Link>
        <div className={style.dropDown}>
          <div className={style.outras}>
            <h2>Outras Categorias</h2>
            <div>
              <ul className={style.ulOutras}>
                <li>
                  <Link href="/category/mobilidade" className={style.link2}>
                    🌀Mobilidade
                    <span>
                      <SVG />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/forca-do-core" className={style.link2}>
                    🎯Força-do-core
                    <span>
                      <SVG />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/vida-saudavel" className={style.link2}>
                    🌿Vida-saudável
                    <span>
                      <SVG />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/respiracao" className={style.link2}>
                    🌬️Respiração
                    <span>
                      <SVG />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/postura" className={style.link2}>
                    🪑Postura
                    <span>
                      <SVG />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/pilates-no-mat" className={style.link2}>
                    🧘Pilates-no-mat
                    <span>
                      <SVG />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.mais}>
            <h2>Mais relevantes</h2>
            <ul className={style.ulMais}>
              <li>
                <Link href="/category/pilates" className={style.link2}>
                  🧘‍♀️Pilates{" "}
                  <span className={style.span2}>
                    <SVG />
                  </span>
                  <span className={style.maisDesc}>
                    O Pilates é um método de condicionamento físico que foca...
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/category/pilates-para-iniciantes"
                  className={style.link2}
                >
                  🧩Pilates-para-iniciantes{" "}
                  <span className={style.span2}>
                    <SVG />
                  </span>
                  <span className={style.maisDesc}>
                    Essa tag reúne conteúdos pensados pra quem está dando os
                    primeiros passos no Pilates.{" "}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/baixo-impacto" className={style.link2}>
                  🦶Baixo-impacto{" "}
                  <span className={style.span2}>
                    <SVG />
                  </span>
                  <span className={style.maisDesc}>
                    O Pilates é conhecido por ser um exercício de baixo
                    impacto...
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/category/prevencao-de-lesoes"
                  className={style.link2}
                >
                  🛡️Prevenção-de-lesões{" "}
                  <span className={style.span2}>
                    <SVG />
                  </span>
                  <span className={style.maisDesc}>
                    Essa tag foca em como o Pilates pode ser usado pra
                    fortalecer áreas frágeis...
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
