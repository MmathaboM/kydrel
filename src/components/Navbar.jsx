import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = ({ activeSection, onNav, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const bg = dark
    ? scrolled
      ? "rgba(2,11,26,0.97)"
      : "rgba(2,11,26,0.75)"
    : scrolled
      ? "rgba(255,255,255,0.97)"
      : "rgba(255,255,255,0.85)";

  const border = dark
    ? "1px solid rgba(0,180,216,0.15)"
    : "1px solid rgba(10,31,92,0.1)";

  const links = ["About", "Services", "Values", "Contact"];

  return (
    <>
      <nav style={{ ...S.nav, background: bg, borderBottom: border }}>
        <Logo dark={dark} size={window.innerWidth < 768 ? 40 : 50} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={S.menuBtn}
          aria-label="Toggle menu"
        >
          <span
            style={{
              ...S.menuBar,
              background: dark ? "#fff" : "#0A1F5C",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              ...S.menuBar,
              background: dark ? "#fff" : "#0A1F5C",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              ...S.menuBar,
              background: dark ? "#fff" : "#0A1F5C",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>

        {/* Desktop Menu */}
        <ul
          style={{
            ...S.list,
            display:
              window.innerWidth < 768 ? (menuOpen ? "flex" : "none") : "flex",
          }}
          className="nav-links"
        >
          {links.map((l) => (
            <li key={l}>
              <button
                style={{
                  ...S.link,
                  color:
                    activeSection === l.toLowerCase()
                      ? "#00B4D8"
                      : dark
                        ? "#94a3b8"
                        : "#445",
                  background:
                    activeSection === l.toLowerCase()
                      ? "rgba(0,180,216,0.08)"
                      : "transparent",
                }}
                onClick={() => {
                  onNav(l.toLowerCase());
                  setMenuOpen(false);
                }}
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} style={S.themeBtn}>
              {dark ? "☀️" : "🌙"}
            </button>
          </li>
          <li>
            <button
              style={S.cta}
              onClick={() => {
                onNav("contact");
                setMenuOpen(false);
              }}
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </nav>

      {/* Overlay when menu is open */}
      {menuOpen && <div style={S.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
};

const S = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "0 24px",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backdropFilter: "blur(20px)",
    transition: "all 0.3s ease",
  },
  list: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    listStyle: "none",
    margin: 0,
    padding: 0,
    "@media (max-width: 768px)": {
      position: "fixed",
      top: 70,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "column",
      background: "inherit",
      backdropFilter: "blur(20px)",
      padding: "30px 20px",
      gap: "16px",
      borderBottom: "1px solid rgba(0,180,216,0.15)",
      zIndex: 999,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
    },
  },
  menuBtn: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
    zIndex: 1001,
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  menuBar: {
    width: 25,
    height: 2,
    transition: "all 0.3s",
  },
  link: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    fontWeight: 500,
    padding: "8px 14px",
    borderRadius: 7,
    transition: "all 0.2s",
    whiteSpace: "nowrap",
    "@media (max-width: 768px)": {
      width: "100%",
      textAlign: "center",
      padding: "14px",
      fontSize: "16px",
    },
  },
  themeBtn: {
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    padding: "8px 12px",
    borderRadius: 8,
    transition: "all 0.2s",
    background: "transparent",
    "@media (max-width: 768px)": {
      width: "100%",
      padding: "12px",
    },
  },
  cta: {
    background: "linear-gradient(135deg,#00B4D8,#0090B0)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    fontWeight: 700,
    padding: "10px 22px",
    borderRadius: 8,
    marginLeft: 8,
    transition: "all 0.2s",
    "@media (max-width: 768px)": {
      width: "100%",
      marginLeft: 0,
      marginTop: 8,
      padding: "12px",
    },
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 998,
    backdropFilter: "blur(4px)",
    "@media (min-width: 769px)": {
      display: "none",
    },
  },
};

export default Navbar;
