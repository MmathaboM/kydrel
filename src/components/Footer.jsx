import Logo from "./Logo";

const Footer = ({ theme }) => {
  const dark = theme === "dark";

  return (
    <footer style={{ ...S.footer, background: dark ? "#010712" : "#f0f4f8" }}>
      <div
        style={{
          ...S.topLine,
          background: dark
            ? "linear-gradient(90deg, transparent, #00B4D8, transparent)"
            : "linear-gradient(90deg, transparent, #00B4D8, transparent)",
        }}
      />
      <div style={S.inner}>
        <div style={S.brand}>
          <Logo size={90} dark={dark} />
          <p
            style={{
              ...S.tagline,
              color: dark ? "#4a6a80" : "#5c6b7e",
              marginLeft: 40,
            }}
          >
            Powering Digital Solutions across South Africa and beyond.
          </p>
          <div style={S.socials}>
            {["LinkedIn", "Twitter", "GitHub"].map((s) => (
              <span
                key={s}
                style={{
                  ...S.social,
                  color: "#00B4D8",
                  borderColor: dark
                    ? "rgba(0,180,216,0.3)"
                    : "rgba(0,180,216,0.4)",
                  background: dark ? "transparent" : "rgba(0,180,216,0.05)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div style={S.col}>
          <p style={{ ...S.colHead, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
            Navigation
          </p>
          {["About", "Services", "Values", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                ...S.link,
                color: dark ? "#4a6a80" : "#5c6b7e",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00B4D8")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = dark ? "#4a6a80" : "#5c6b7e")
              }
            >
              {l}
            </a>
          ))}
        </div>
        <div style={S.col}>
          <p style={{ ...S.colHead, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
            Services
          </p>
          {[
            "Software Development",
            "Digital Markerting",
            "Technology Consulting",
            "Data Analytics",
          ].map((l) => (
            <span
              key={l}
              style={{
                ...S.link,
                color: dark ? "#4a6a80" : "#5c6b7e",
                cursor: "default",
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <div style={S.col}>
          <p style={{ ...S.colHead, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
            Contact
          </p>
          <span style={{ ...S.link, color: dark ? "#4a6a80" : "#5c6b7e" }}>
            info@kydreltechnologies.co.za
          </span>
          {/* <span style={{ ...S.link, color: dark ? "#4a6a80" : "#5c6b7e" }}>
            mmathabo@kydrel.co.za
          </span> */}
          <span style={{ ...S.link, color: dark ? "#4a6a80" : "#5c6b7e" }}>
            076 325 3244
          </span>
          <span style={{ ...S.link, color: dark ? "#4a6a80" : "#5c6b7e" }}>
            South Africa
          </span>
        </div>
      </div>
      <div
        style={{
          ...S.bottom,
          borderTopColor: dark
            ? "rgba(255,255,255,0.05)"
            : "rgba(10,31,92,0.1)",
        }}
      >
        <p style={{ ...S.copy, color: dark ? "#2a3a50" : "#8a9bb5" }}>
          © {new Date().getFullYear()} Kydrel Technologies. All rights reserved.
        </p>
        {/* <p style={{ ...S.copy, color: dark ? "#2a3a50" : "#8a9bb5" }}>
          Built with ❤️ in South Africa
        </p> */}
      </div>
    </footer>
  );
};

const S = {
  footer: { padding: "60px 40px 28px", transition: "background 0.3s ease" },
  topLine: {
    height: 1,
    marginBottom: 56,
    transition: "background 0.3s ease",
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: 40,
    marginBottom: 48,
  },
  brand: {},
  tagline: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    marginTop: 14,
    lineHeight: 1.7,
    maxWidth: 240,
    transition: "color 0.3s ease",
  },
  socials: { display: "flex", gap: 12, marginTop: 20, marginLeft: 30 },
  social: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 6,
    cursor: "pointer",
    letterSpacing: 0.3,
    transition: "all 0.2s ease",
  },
  col: { display: "flex", flexDirection: "column", gap: 10 },
  colHead: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 6,
    transition: "color 0.3s ease",
  },
  link: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  bottom: {
    maxWidth: 1100,
    margin: "0 auto",
    borderTop: "1px solid",
    paddingTop: 24,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    transition: "border-color 0.3s ease",
  },
  copy: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 12,
    transition: "color 0.3s ease",
  },
};

export default Footer;
