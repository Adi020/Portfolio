import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import StarsAnimation from "./components/Effects/StarsAnimation";
import PointerDegradient from "./components/Effects/PointerDegradient";
import { isMobile } from "react-device-detect";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <main className="relative bg-black overflow-hidden">
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AnimatePresence>

      <StarsAnimation />

      {isMobile ? null : <PointerDegradient />}
      
      <Footer />
    </main>
  );
}

export default App;
