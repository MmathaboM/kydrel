import Logo from "./Logo";

const Footer = () => (
  <footer style={S.footer}>
    <div style={S.topLine} />
    <div style={S.inner}>
      <div style={S.brand}>
        <Logo size={36} dark />
        <p style={S.tagline}>
          Powering Digital Solutions across South Africa and beyond.
        </p>
        <div style={S.socials}>
          {["LinkedIn", "Twitter", "GitHub"].map((s) => (
            <span key={s} style={S.social}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <div style={S.col}>
        <p style={S.colHead}>Navigation</p>
        {["About", "Services", "Values", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} style={S.link}>
            {l}
          </a>
        ))}
      </div>
      <div style={S.col}>
        <p style={S.colHead}>Services</p>
        {[
          "Software Dev",
          "Cloud Solutions",
          "Cybersecurity",
          "Data Analytics",
        ].map((l) => (
          <span key={l} style={{ ...S.link, cursor: "default" }}>
            {l}
          </span>
        ))}
      </div>
      <div style={S.col}>
        <p style={S.colHead}>Contact</p>
        <span style={S.link}>info@kydrel.co.za</span>
        <span style={S.link}>mmathabo@kydrel.co.za</span>
        <span style={S.link}>076 325 3244</span>
        <span style={S.link}>South Africa</span>
      </div>
    </div>
    <div style={S.bottom}>
      <p style={S.copy}>
        © {new Date().getFullYear()} Kydrel Technologies. All rights reserved.
      </p>
      <p style={S.copy}>Built with ❤️ in South Africa</p>
    </div>
  </footer>
);

const S = {
  footer: { background: "#010712", padding: "60px 40px 28px" },
  topLine: {
    height: 1,
    background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
    marginBottom: 56,
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
    color: "#4a6a80",
    marginTop: 14,
    lineHeight: 1.7,
    maxWidth: 240,
  },
  socials: { display: "flex", gap: 12, marginTop: 20 },
  social: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    color: "#00B4D8",
    border: "1px solid rgba(0,180,216,0.3)",
    padding: "4px 12px",
    borderRadius: 6,
    cursor: "pointer",
    letterSpacing: 0.3,
  },
  col: { display: "flex", flexDirection: "column", gap: 10 },
  colHead: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 12,
    fontWeight: 700,
    color: "#f1f5f9",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  link: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    color: "#4a6a80",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  bottom: {
    maxWidth: 1100,
    margin: "0 auto",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    paddingTop: 24,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },
  copy: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 12,
    color: "#2a3a50",
  },
};

export default Footer;
