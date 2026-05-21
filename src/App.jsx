import Navbar from "./Components/Header";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import ScrollToTop from "./Components/buttonScroll";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
