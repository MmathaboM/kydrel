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

        {/* Navigation - Desktop always visible, Mobile shows based on menuOpen */}
        <ul
          style={{
            ...styles.list,
            display: window.innerWidth < 768 ? "none" : "flex",
          }}
          className="desktop-nav-links"
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
                }}
              >
                {l}
              </button>
            </li>
          ))}

          {/* Theme Toggle - Icon only for desktop */}
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
              }}
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu - Slides from RIGHT side */}
      <div
        className="mobile-menu"
        style={{
          ...styles.mobileMenu,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          backgroundColor: dark
            ? "rgba(2, 11, 26, 0.98)"
            : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={styles.closeBtn}
          className="close-btn"
        >
          <span
            style={{
              ...styles.closeBar,
              background: dark ? "#fff" : "#0A1F5C",
              transform: "rotate(45deg)",
            }}
          />
          <span
            style={{
              ...styles.closeBar,
              background: dark ? "#fff" : "#0A1F5C",
              transform: "rotate(-45deg)",
              position: "absolute",
            }}
          />
        </button>

        <ul style={styles.mobileList}>
          {links.map((l) => (
            <li key={l}>
              <button
                style={{
                  ...styles.mobileLink,
                  color:
                    activeSection === l.toLowerCase()
                      ? "#00B4D8"
                      : dark
                        ? "#f0f0f0"
                        : "#1a2a4f",
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

          {/* Theme Toggle in Mobile Menu */}
          <li>
            <button onClick={toggleTheme} style={styles.mobileThemeBtn}>
              <Icon
                path={dark ? mdiWeatherSunny : mdiWeatherNight}
                size={1.2}
                color={dark ? "#FFD700" : "#0A1F5C"}
              />
              <span style={{ marginLeft: 12 }}>
                {dark ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </li>

          {/* CTA in Mobile Menu */}
          <li>
            <button
              style={styles.mobileCta}
              onClick={() => {
                onNav("contact");
                setMenuOpen(false);
              }}
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div style={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}
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

  // Mobile menu styles
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: "320px",
    zIndex: 1001,
    transition: "transform 0.3s ease-in-out",
    boxShadow: "-5px 0 25px rgba(0,0,0,0.15)",
    overflowY: "auto",
  },

  closeBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    background: "rgba(0,180,216,0.1)",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1002,
  },

  closeBar: {
    width: 20,
    height: 2,
    transition: "all 0.3s ease",
  },

  mobileList: {
    listStyle: "none",
    margin: 0,
    padding: "100px 24px 40px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    height: "100%",
  },

  mobileLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 22,
    fontWeight: 500,
    padding: "12px 0",
    width: "100%",
    textAlign: "left",
    transition: "all 0.2s ease",
    letterSpacing: "-0.02em",
  },

  mobileThemeBtn: {
    background: "rgba(0,180,216,0.1)",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 18,
    fontWeight: 500,
    padding: "14px 20px",
    width: "100%",
    textAlign: "left",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    transition: "all 0.2s ease",
    marginTop: 10,
  },

  mobileCta: {
    background: "linear-gradient(135deg,#00B4D8,#0090B0)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 18,
    fontWeight: 600,
    padding: "16px 24px",
    width: "100%",
    borderRadius: 40,
    marginTop: 20,
    transition: "all 0.2s ease",
    boxShadow: "0 4px 14px rgba(0,180,216,0.3)",
  },

  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .menu-btn {
      display: flex !important;
    }
  }
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = responsiveStyles;
  document.head.appendChild(style);
}

export default Navbar;
