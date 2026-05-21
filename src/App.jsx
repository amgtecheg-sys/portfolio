import "./App.css";
import Aboutme from "./Components/Aboutme";
import ScrollToTop from "./Components/buttonScroll";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Aboutme />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
