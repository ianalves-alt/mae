import Hero from "../Components/Simple/hero.jsx";
import Intro from "../Components/Simple/introduction.jsx";
import Rapha from "../Components/Simple/Rapha.jsx";
import Footer from "../Components/Simple/footer.jsx";
import "../Styles/global.css";
export default function Page() {
  return (
    <>
      <header>
        <Hero></Hero>
      </header>
      <div>
        <Intro />
        <Rapha />
      </div>
    </>
  );
}
