import style from "../../Styles/modules/rapha.module.css";
import Image from "next/image";
export default function Rapha() {
  return (
    <>
      <div className={style.container}>
        <div className={style.rapha}>Raphaella Alves</div>
        <div className={style.flexContainer}>
          <Image
            width={300}
            height={300}
            alt="Picture of the author"
            src="/image (1).png"
            className={style.raphaFoto}
          ></Image>
          <div className={style.text}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </div>
        </div>
      </div>
    </>
  );
}
