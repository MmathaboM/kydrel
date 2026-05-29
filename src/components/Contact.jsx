import Icon from "@mdi/react";
import {
  mdiEmailOutline,
  mdiPhoneOutline,
  mdiWhatsapp,
  mdiWeb,
  mdiArrowRight,
} from "@mdi/js";

const contacts = [
  {
    icon: mdiEmailOutline,
    label: "General Email",
    value: "info@kydreltechnologies.co.za",
    href: "mailto:info@kydreltechnologies.co.za",
  },
  {
    icon: mdiPhoneOutline,
    label: "Call Us",
    value: "076 325 3244",
    href: "tel:+27763253244",
  },
  {
    icon: mdiWhatsapp,
    label: "WhatsApp Us",
    value: "076 325 3244",
    href: "https://wa.me/27763253244",
    isWhatsApp: true,
  },
  {
    icon: mdiWeb,
    label: "Website",
    value: "www.kydrel.co.za",
    href: "https://www.kydrel.co.za",
  },
];

const Contact = ({ theme }) => {
  const dark = theme === "dark";

  return (
    <section
      style={{ ...S.section, background: dark ? "#040d1c" : "#f8fafc" }}
      id="contact"
    >
      <div style={{ ...S.bgGlow, opacity: dark ? 1 : 0.4 }} />
      <div style={S.inner}>
        <div style={S.left}>
          <p
            className="section-eyebrow"
            style={{ color: dark ? "#00B4D8" : "#0A1F5C" }}
          >
            Reach Out
          </p>
          <h2
            className="section-h2"
            style={{ color: dark ? "#f1f5f9" : "#0A1F5C" }}
          >
            Let's Build
            <br />
            Something Great
          </h2>
          <p style={{ ...S.body, color: dark ? "#94a3b8" : "#475569" }}>
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
                style={{
                  ...S.card,
                  background: dark ? "rgba(255,255,255,0.03)" : "#fff",
                  borderColor: dark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(10,31,92,0.1)",
                  ...(c.isWhatsApp && {
                    background: dark
                      ? "rgba(37, 211, 102, 0.1)"
                      : "rgba(37, 211, 102, 0.05)",
                    borderColor: dark
                      ? "rgba(37, 211, 102, 0.3)"
                      : "rgba(37, 211, 102, 0.2)",
                  }),
                }}
                className="glow-card"
                onMouseEnter={(e) => {
                  if (c.isWhatsApp) {
                    e.currentTarget.style.borderColor = "#25D366";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  } else {
                    e.currentTarget.style.borderColor = "rgba(0,180,216,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (c.isWhatsApp) {
                    e.currentTarget.style.borderColor = dark
                      ? "rgba(37, 211, 102, 0.3)"
                      : "rgba(37, 211, 102, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  } else {
                    e.currentTarget.style.borderColor = dark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(10,31,92,0.1)";
                  }
                }}
              >
                <Icon
                  path={c.icon}
                  size={1.2}
                  color={
                    c.isWhatsApp ? "#25D366" : dark ? "#00B4D8" : "#0A1F5C"
                  }
                  style={S.cIcon}
                />
                <div>
                  <p
                    style={{
                      ...S.cLabel,
                      color: dark ? "#4a6a80" : "#8a9bb5",
                      ...(c.isWhatsApp && { color: "#25D366" }),
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      ...S.cValue,
                      color: dark ? "#e2e8f0" : "#0A1F5C",
                      ...(c.isWhatsApp && {
                        color: "#25D366",
                        fontWeight: 700,
                      }),
                    }}
                  >
                    {c.value}
                  </p>
                </div>
                {c.isWhatsApp && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 12,
                      color: "#25D366",
                      fontFamily: "'Space Grotesk',sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Click to chat
                    <Icon path={mdiArrowRight} size={0.7} color="#25D366" />
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
        <div style={S.right}>
          <div
            style={{
              ...S.ctaBox,
              background: dark
                ? "linear-gradient(135deg, #0a1f3d, #0d2a50)"
                : "linear-gradient(135deg, #e8f4fd, #d4eaf6)",
              borderColor: dark ? "rgba(0,180,216,0.2)" : "rgba(0,180,216,0.3)",
            }}
          >
            <div style={S.ctaGlow} />
            <p style={S.ctaEye}>Ready to start?</p>
            <h3 style={{ ...S.ctaH, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
              Partner with Kydrel Technologies
            </h3>
            <p style={{ ...S.ctaSub, color: dark ? "#7DD8EC" : "#0090B0" }}>
              Where innovation meets impact — let's transform your business with
              technology built for the future.
            </p>
            <div
              style={{
                ...S.ctaDivider,
                background: dark
                  ? "rgba(0,180,216,0.15)"
                  : "rgba(0,180,216,0.2)",
              }}
            />
            <div style={S.ctaStats}>
              {[
                ["5+", "Services"],
                ["SA", "Based"],
                ["24/7", "Support"],
              ].map(([v, l]) => (
                <div key={l} style={S.ctaStat}>
                  <span
                    style={{
                      ...S.ctaStatV,
                      color: dark ? "#f1f5f9" : "#0A1F5C",
                    }}
                  >
                    {v}
                  </span>
                  <span style={S.ctaStatL}>{l}</span>
                </div>
              ))}
            </div>
            <div style={S.ctaButtons}>
              <a href="mailto:info@kydrel.co.za" style={S.ctaBtn}>
                Send Us An Email
                <Icon
                  path={mdiArrowRight}
                  size={0.8}
                  color="#fff"
                  style={{ marginLeft: 8, verticalAlign: "middle" }}
                />
              </a>
              <a
                href="https://wa.me/27763253244"
                target="_blank"
                rel="noreferrer"
                style={{
                  ...S.ctaBtn,
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  marginLeft: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Chat on WhatsApp
                <Icon path={mdiWhatsapp} size={0.9} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const S = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "110px 40px",
    transition: "background 0.3s ease",
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
    transition: "opacity 0.3s ease",
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
    lineHeight: 1.8,
    marginBottom: 36,
    transition: "color 0.3s ease",
  },
  cards: { display: "flex", flexDirection: "column", gap: 14 },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    border: "1px solid",
    borderRadius: 12,
    padding: "18px 22px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  cIcon: {
    minWidth: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cLabel: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
    transition: "color 0.3s ease",
  },
  cValue: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    fontWeight: 600,
    transition: "color 0.3s ease",
  },
  right: {},
  ctaBox: {
    position: "relative",
    overflow: "hidden",
    border: "1px solid",
    borderRadius: 20,
    padding: "44px 38px",
    transition: "all 0.3s ease",
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
    lineHeight: 1.2,
    marginBottom: 18,
    transition: "color 0.3s ease",
  },
  ctaSub: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    lineHeight: 1.8,
    marginBottom: 28,
    transition: "color 0.3s ease",
  },
  ctaDivider: {
    height: 1,
    marginBottom: 28,
    transition: "background 0.3s ease",
  },
  ctaStats: { display: "flex", gap: 32, marginBottom: 36 },
  ctaStat: { display: "flex", flexDirection: "column", gap: 4 },
  ctaStatV: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 26,
    fontWeight: 800,
    transition: "color 0.3s ease",
  },
  ctaStatL: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 10,
    color: "#00B4D8",
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  ctaButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
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
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    textAlign: "center",
    flex: 1,
  },
};

export default Contact;
