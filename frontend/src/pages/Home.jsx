import NavBar from "../components/NavBar";
import Description from "../components/MyDescription";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <Description />
      <Projects />
      <Footer />
    </div>
  );
}
