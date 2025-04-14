import Navbar from "../Components/Simple/navbar.jsx";
import Hero from "../Components/Simple/hero.jsx";
import Intro from "../Components/Simple/introduction.jsx";
import Rapha from "../Components/Simple/Rapha.jsx";
import Aprenda from "../Components/Simple/Aprenda.jsx";
import Footer from "../Components/Simple/footer.jsx";
import "../Styles/global.css";
export default function Page() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Hero></Hero>
      </header>
      <div>
        <Intro />
        <Rapha />
        <Aprenda />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
