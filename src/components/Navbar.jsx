import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = ({ activeSection, onNav, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const dark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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

  return (
    <nav style={{ ...S.nav, background: bg, borderBottom: border }}>
      <Logo dark={dark} size={50} />

      <ul style={S.list}>
        {["About", "Services", "Values", "Contact"].map((l) => (
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
              onClick={() => onNav(l.toLowerCase())}
            >
              {l}
            </button>
          </li>
        ))}

        {/* Theme toggle button */}
        <li>
          <button
            onClick={toggleTheme}
            style={{
              ...S.themeBtn,
              background: dark
                ? "rgba(255,255,255,0.07)"
                : "rgba(10,31,92,0.07)",
            }}
            title="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </li>

        <li>
          <button style={S.cta} onClick={() => onNav("contact")}>
            Get In Touch
          </button>
        </li>
      </ul>
    </nav>
  );
};

const S = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "0 36px",
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backdropFilter: "blur(20px)",
    transition: "background 0.3s, border 0.3s",
  },
  list: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    fontWeight: 500,
    padding: "6px 14px",
    borderRadius: 7,
    transition: "color 0.2s, background 0.2s",
    letterSpacing: 0.3,
  },
  themeBtn: {
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    padding: "6px 10px",
    borderRadius: 8,
    marginLeft: 4,
    transition: "background 0.2s",
    lineHeight: 1,
  },
  cta: {
    background: "linear-gradient(135deg,#00B4D8,#0090B0)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    fontWeight: 700,
    padding: "9px 22px",
    borderRadius: 8,
    marginLeft: 8,
    letterSpacing: 0.5,
    boxShadow: "0 4px 20px rgba(0,180,216,0.3)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
};

export default Navbar;
