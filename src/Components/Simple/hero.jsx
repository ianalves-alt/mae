import styles from "../../Styles/modules/hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>lorem ipsum sit amet dolor</div>
        <div className={styles.pilates}>Pilates</div>
        <div className={styles.bottom}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque tortor neque
        </div>
        <div className={styles.fill}></div>
        <div className={styles.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-big-down-dash-icon lucide-arrow-big-down-dash"
          >
            <path d="M15 5H9" />
            <path d="M15 9v3h4l-7 7-7-7h4V9z" />
          </svg>
        </div>
      </div>
    </>
  );
}
