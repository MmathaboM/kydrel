import { useState, useEffect } from "react";
import Logo from "./Logo";
import Icon from "@mdi/react";
import { mdiWeatherSunny, mdiWeatherNight } from "@mdi/js";

const Navbar = ({ activeSection, onNav, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

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
      <nav
        style={{
          ...styles.nav,
          background: bg,
          borderBottom: border,
        }}
      >
        <Logo dark={dark} size={window.innerWidth < 768 ? 40 : 50} />

        {/* Burger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.menuBtn}
          className="menu-btn"
          aria-label="Toggle menu"
        >
          <span
            style={{
              ...styles.menuBar,
              background: dark ? "#fff" : "#0A1F5C",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />

          <span
            style={{
              ...styles.menuBar,
              background: dark ? "#fff" : "#0A1F5C",
              opacity: menuOpen ? 0 : 1,
            }}
          />

          <span
            style={{
              ...styles.menuBar,
              background: dark ? "#fff" : "#0A1F5C",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>

        {/* Navigation */}
        <ul
          style={{
            ...styles.list,
            display:
              window.innerWidth < 768 ? (menuOpen ? "flex" : "none") : "flex",
          }}
          className="nav-links"
        >
          {links.map((l) => (
            <li key={l}>
              <button
                style={{
                  ...styles.link,
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

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              style={styles.themeBtn}
              className="theme-btn"
            >
              <Icon
                path={dark ? mdiWeatherSunny : mdiWeatherNight}
                size={1}
                color={dark ? "#FFD700" : "#0A1F5C"}
              />
            </button>
          </li>

          {/* CTA */}
          <li>
            <button
              style={styles.cta}
              className="cta-btn"
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
    </>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: 70,
    padding: "0 24px",

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
  },

  menuBar: {
    width: 25,
    height: 2,
    transition: "all 0.3s ease",
  },

  link: {
    background: "none",
    border: "none",

    cursor: "pointer",

    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    fontWeight: 500,

    padding: "8px 14px",
    borderRadius: 10,

    transition: "all 0.2s ease",

    whiteSpace: "nowrap",
  },

  themeBtn: {
    border: "none",
    cursor: "pointer",

    padding: "10px 12px",
    borderRadius: 10,

    background: "transparent",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    transition: "all 0.2s ease",
  },

  cta: {
    background: "linear-gradient(135deg,#00B4D8,#0090B0)",
    color: "#fff",

    border: "none",
    cursor: "pointer",

    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 700,

    padding: "10px 22px",
    borderRadius: 10,

    marginLeft: 8,

    transition: "all 0.2s ease",
  },
};

const responsiveStyles = `
  @media (max-width: 768px) {

    .menu-btn {
      display: flex !important;
    }

    .nav-links {
      position: fixed !important;

      top: 0 !important;
      left: 0 !important;
      left: auto !important;
right: 0 !important;
margin-left: auto !important;
      bottom: 0 !important;

      width: 100vw !important;
      height: 100vh !important;

      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;

      padding: 40px 24px !important;
      gap: 18px !important;

      background: rgba(68, 86, 118, 0.98) !important;
      backdrop-filter: blur(20px) !important;

      z-index: 999 !important;

      border-radius: 0 !important;
      border: none !important;

      overflow: hidden !important;
    }

    .nav-links button {
      width: 100% !important;
      max-width: 320px !important;

      text-align: center !important;

      padding: 16px !important;

      font-size: 18px !important;

      border-radius: 14px !important;
    }

    .theme-btn {
      justify-content: center !important;
    }

    .cta-btn {
      width: 100% !important;

      margin-left: 0 !important;
      margin-top: 12px !important;

      text-align: center !important;
    }
  }
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");

  style.innerHTML = responsiveStyles;

  document.head.appendChild(style);
}

export default Navbar;
