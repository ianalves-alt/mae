import style from "../../Styles/modules/intro.module.css";

export default function Intro() {
  const playsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
    </svg>
  );

  const Card = ({ title, time, text }) => (
    <div className={style.card}>
      <div className={style.cardTitle}>{title}</div>
      <div className={style.tempo}>Tempo de leitura: {time}</div>
      <div className={style.text}>{text}</div>
      <div className={style.p}>{playsvg}</div>
    </div>
  );

  return (
    <>
      <div className={style.container}>
        <div className={style.intro}>
          Introduction
          <div className={style.introText}>
            Read some of the hottest topics of later of pilates news of times
          </div>
        </div>

        <div className={style.containerCards}>
          {/* Row 1 */}
          <div className={style.rowCards}>
            <Card
              title="Pilates funcional"
              time="12min"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <Card
              title="Importancia de Respirar"
              time="15min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
            <Card
              title="Mat Pilates"
              time="12min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
            <Card
              title="Mat Pilates"
              time="12min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
          </div>
          <div className={style.rowCards}>
            <Card
              title="Pilates funcional"
              time="12min"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <Card
              title="Importancia de Respirar"
              time="15min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
            <Card
              title="Mat Pilates"
              time="12min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
            <Card
              title="Mat Pilates"
              time="12min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
          </div>
          {/* Row 2 */}
          <div className={style.rowCards}>
            <Card
              title="Pilates funcional"
              time="12min"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            />
            <Card
              title="Importancia de Respirar"
              time="15min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
            <Card
              title="Mat Pilates"
              time="12min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
            <Card
              title="Mat Pilates"
              time="12min"
              text="Contrary to popular belief, Lorem ipsum is not simply random text..."
            />
          </div>
        </div>
      </div>
      <div className={style.vejaC}>
        <span className={style.veja}>Veja mais..</span>
      </div>
    </>
  );
}
