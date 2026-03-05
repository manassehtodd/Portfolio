import { useState, useEffect, Suspense } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
const Project = React.lazy(() => import("./components/Project"));
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minDuration = 1000; // 1 second
    const timeout = setTimeout(() => setLoading(false), minDuration);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div style={{ opacity: loading ? 0.5 : 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Suspense fallback={<Loader />}>
          <Project />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;