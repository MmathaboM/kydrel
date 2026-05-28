import { useState } from "react";
import { ThemeProvider } from "./contex/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function AppContent() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNav = (section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onNav={handleNav} />
      <Hero onNav={handleNav} />
      <About />
      <Services />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
