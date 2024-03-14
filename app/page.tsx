
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
