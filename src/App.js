import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  const handleNav = (section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        onNav={handleNav}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero onNav={handleNav} theme={theme} />
      <About theme={theme} />
      <Services theme={theme} />
      <Values theme={theme} />
      <Contact theme={theme} />
      
      <Footer />
    </div>
  );
}

export default App;
