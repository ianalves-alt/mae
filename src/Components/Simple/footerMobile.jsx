import style from "@/Styles/modules/footerM.module.css";
export default function FooterM() {
  return (
    <>
      <div className={style.container}>
        <div>
          <div className={style.pilates}>Pilates+</div>
          <div className={style.flex}>
            <div className={style.element1}>
              <div>
                Contato <div className={style.line}></div>
              </div>
              <ul>
                <li>81 9 9774-1830</li>
                <li>R dona magina pontual</li>
                <li>alves111182@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.copy}>
          Todos direitos reservados | Raphaella alves &copy; PilatesMais
        </div>
      </div>
    </>
  );
}
