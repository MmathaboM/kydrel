import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = ({ activeSection, onNav }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Services", "Values", "Contact"];

  return (
    <nav className="navbar" style={{ background: scrolled ? "rgba(2,11,26,0.95)" : "rgba(2,11,26,0.7)" }}>
      <Logo size={44} dark />
      <ul className="nav-links-list">
        {links.map((l) => (
          <li key={l}>
            <button
              className={`nav-link-btn ${activeSection === l.toLowerCase() ? "active" : ""}`}
              onClick={() => onNav(l.toLowerCase())}
            >
              {l}
            </button>
          </li>
        ))}
        <li>
          <button className="nav-cta" onClick={() => onNav("contact")}>Get In Touch</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;