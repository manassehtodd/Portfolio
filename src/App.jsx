import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkIndex from "./components/WorkIndex";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Header />
      <main id="top">
        <Hero />
        <WorkIndex />
        <About />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
