import style from "../../Styles/modules/footer.module.css";

export default function Footer() {
  return (
    <div className={style.wrapper}>
      <svg
        className={style.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,32L120,58.7C240,85,480,139,720,144C960,149,1200,107,1320,85.3L1440,64V320H0Z"
        />
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div className={style.content}>
            <h2 className={style.logo}>Pilates+</h2>

            <div className={style.section}>
              <h2>Contact</h2>
              <ul>
                <li>81 9 9657-3698</li>
                <li>R. Dona Magina Pontual</li>
                <li>alves111182@gmail.com</li>
              </ul>
            </div>

            <div className={style.section}>
              <h3>Site Map</h3>
              <ul>
                <li>Categorias</li>
                <li>Tags</li>
                <li>Contato</li>
                <li>Sobre</li>
              </ul>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
