const contacts = [
  {
    icon: "✉️",
    label: "General Email",
    value: "info@kydrel.co.za",
    href: "mailto:info@kydrel.co.za",
  },
  {
    icon: "👤",
    label: "Direct Contact",
    value: "mmathabo@kydrel.co.za",
    href: "mailto:mmathabo@kydrel.co.za",
  },
  {
    icon: "📱",
    label: "Call / WhatsApp",
    value: "076 325 3244",
    href: "tel:+27763253244",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.kydrel.co.za",
    href: "https://www.kydrel.co.za",
  },
];

const Contact = () => (
  <section style={S.section} id="contact">
    <div style={S.bgGlow} />
    <div style={S.inner}>
      <div style={S.left}>
        <p className="section-eyebrow">Reach Out</p>
        <h2 className="section-h2">
          Let's Build
          <br />
          Something Great
        </h2>
        <p style={S.body}>
          Ready to take your business to the next level with technology that
          works? Reach out — we'd love to hear about your project.
        </p>
        <div style={S.cards}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={S.card}
              className="glow-card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(0,180,216,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
              }
            >
              <span style={S.cIcon}>{c.icon}</span>
              <div>
                <p style={S.cLabel}>{c.label}</p>
                <p style={S.cValue}>{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div style={S.right}>
        <div style={S.ctaBox}>
          <div style={S.ctaGlow} />
          <p style={S.ctaEye}>Ready to start?</p>
          <h3 style={S.ctaH}>Partner with Kydrel Technologies</h3>
          <p style={S.ctaSub}>
            Where innovation meets impact — let's transform your business with
            technology built for the future.
          </p>
          <div style={S.ctaDivider} />
          <div style={S.ctaStats}>
            {[
              ["8+", "Services"],
              ["SA", "Based"],
              ["24/7", "Support"],
            ].map(([v, l]) => (
              <div key={l} style={S.ctaStat}>
                <span style={S.ctaStatV}>{v}</span>
                <span style={S.ctaStatL}>{l}</span>
              </div>
            ))}
          </div>
          <a href="mailto:info@kydrel.co.za" style={S.ctaBtn}>
            Send Us An Email →
          </a>
        </div>
      </div>
    </div>
  </section>
);

const S = {
  section: {
    position: "relative",
    overflow: "hidden",
    background: "#040d1c",
    padding: "110px 40px",
  },
  bgGlow: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 500,
    height: 500,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "start",
  },
  left: {},
  body: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    color: "#94a3b8",
    lineHeight: 1.8,
    marginBottom: 36,
  },
  cards: { display: "flex", flexDirection: "column", gap: 14 },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: "18px 22px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  cIcon: { fontSize: 24 },
  cLabel: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    color: "#4a6a80",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  cValue: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    fontWeight: 600,
    color: "#e2e8f0",
  },
  right: {},
  ctaBox: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0a1f3d, #0d2a50)",
    border: "1px solid rgba(0,180,216,0.2)",
    borderRadius: 20,
    padding: "44px 38px",
  },
  ctaGlow: {
    position: "absolute",
    top: -60,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  ctaEye: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 700,
    color: "#00B4D8",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  ctaH: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 28,
    fontWeight: 800,
    color: "#f1f5f9",
    lineHeight: 1.2,
    marginBottom: 18,
  },
  ctaSub: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    color: "#7DD8EC",
    lineHeight: 1.8,
    marginBottom: 28,
  },
  ctaDivider: {
    height: 1,
    background: "rgba(0,180,216,0.15)",
    marginBottom: 28,
  },
  ctaStats: { display: "flex", gap: 32, marginBottom: 36 },
  ctaStat: { display: "flex", flexDirection: "column", gap: 4 },
  ctaStatV: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 26,
    fontWeight: 800,
    color: "#f1f5f9",
  },
  ctaStatL: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 10,
    color: "#00B4D8",
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  ctaBtn: {
    display: "inline-block",
    background: "linear-gradient(135deg, #00B4D8, #0090B0)",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    fontWeight: 700,
    padding: "13px 28px",
    borderRadius: 10,
    boxShadow: "0 8px 28px rgba(0,180,216,0.3)",
    letterSpacing: 0.3,
  },
};

export default Contact;
