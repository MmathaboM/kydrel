import { useState } from "react";
import Logo from "./Logo";

const Navbar = ({ activeSection, onNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Services", "Values", "Contact"];

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Logo size={50} />
        <ul style={{ ...styles.links, display: menuOpen ? "flex" : undefined }} className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <button
                style={{
                  ...styles.link,
                  color: activeSection === l.toLowerCase() ? "#00B4D8" : "#0A1F5C",
                  borderBottom: activeSection === l.toLowerCase() ? "2px solid #00B4D8" : "2px solid transparent",
                }}
                onClick={() => { onNav(l.toLowerCase()); setMenuOpen(false); }}
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <button style={styles.cta} onClick={() => { onNav("contact"); setMenuOpen(false); }}>
              Get In Touch
            </button>
          </li>
        </ul>
        <button style={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span style={{ ...styles.bar, transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: "rgba(255,255,255,0.97)",
    borderBottom: "1px solid #e8eef8",
    backdropFilter: "blur(8px)",
    boxShadow: "0 2px 20px rgba(10,31,92,0.08)",
  },
  inner: {
    maxWidth: 1100, margin: "0 auto", padding: "0 24px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    height: 70,
  },
  links: {
    display: "flex", alignItems: "center", gap: 8, listStyle: "none",
    margin: 0, padding: 0,
  },
  link: {
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'Segoe UI', Arial, sans-serif", fontSize: 14,
    fontWeight: 600, padding: "4px 12px", letterSpacing: 0.5,
    transition: "color 0.2s",
  },
  cta: {
    background: "#0A1F5C", color: "#fff", border: "none", cursor: "pointer",
    fontFamily: "'Segoe UI', Arial, sans-serif", fontSize: 13,
    fontWeight: 600, padding: "8px 20px", borderRadius: 6,
    letterSpacing: 0.5, marginLeft: 8,
    transition: "background 0.2s",
  },
  burger: {
    display: "none", flexDirection: "column", gap: 5,
    background: "none", border: "none", cursor: "pointer", padding: 4,
  },
  bar: {
    display: "block", width: 24, height: 2,
    background: "#0A1F5C", borderRadius: 2, transition: "all 0.3s",
  },
};

export default Navbar;
