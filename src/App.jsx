import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Cursor />

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
