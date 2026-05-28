const About = () => (
  <section style={S.section} id="about">
    <div style={S.inner}>
      <div className="animate-slide-left" style={S.left}>
        <p className="section-eyebrow">Who We Are</p>
        <h2 className="section-h2">
          Built for Africa's
          <br />
          Digital Future
        </h2>
        <p style={S.body}>
          Kydrel Technologies is a dynamic, forward-thinking technology company
          based in South Africa, committed to delivering innovative digital
          solutions that empower businesses and communities across the
          continent.
        </p>
        <p style={S.body}>
          We leverage cutting-edge technology to solve real-world challenges,
          driving growth and efficiency for our clients across diverse
          industries. We believe technology should be accessible, powerful, and
          purpose-built for the African market.
        </p>
        <div style={S.pills}>
          {[
            "Innovation",
            "Integrity",
            "Excellence",
            "Agility",
            "Client First",
          ].map((v) => (
            <span key={v} style={S.pill}>
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="animate-slide-right" style={S.right}>
        <div style={S.bigCard}>
          <div style={S.cardGlow} />
          <div style={S.cardInner}>
            <div style={S.vmGrid}>
              <div style={S.vmCard}>
                <div style={S.vmIcon}>🌍</div>
                <h3 style={S.vmTitle}>Our Vision</h3>
                <p style={S.vmText}>
                  To be a leading technology company in Africa, recognised for
                  delivering transformative digital solutions that improve
                  lives.
                </p>
              </div>
              <div
                style={{
                  ...S.vmCard,
                  borderColor: "rgba(0,180,216,0.3)",
                  background: "rgba(0,180,216,0.05)",
                }}
              >
                <div style={S.vmIcon}>🚀</div>
                <h3 style={{ ...S.vmTitle, color: "#00B4D8" }}>Our Mission</h3>
                <p style={S.vmText}>
                  To provide innovative, reliable, and affordable technology
                  services that help our clients thrive in an ever-evolving
                  digital world.
                </p>
              </div>
            </div>
            <div style={S.techStack}>
              {[
                "Cloud",
                "AI/ML",
                "Cybersecurity",
                "DevOps",
                "Data Analytics",
                "Mobile",
              ].map((t) => (
                <span key={t} style={S.tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const S = {
  section: { background: "#040d1c", padding: "110px 40px" },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 70,
    alignItems: "center",
  },
  left: {},
  body: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    color: "#94a3b8",
    lineHeight: 1.9,
    marginBottom: 18,
  },
  pills: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 },
  pill: {
    background: "rgba(0,180,216,0.1)",
    border: "1px solid rgba(0,180,216,0.25)",
    color: "#7DD8EC",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 16px",
    borderRadius: 20,
    letterSpacing: 0.3,
  },
  right: {},
  bigCard: {
    position: "relative",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    overflow: "hidden",
  },
  cardGlow: {
    position: "absolute",
    top: -80,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  cardInner: { padding: 32 },
  vmGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 24,
  },
  vmCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: "22px 18px",
  },
  vmIcon: { fontSize: 26, marginBottom: 12 },
  vmTitle: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 15,
    fontWeight: 700,
    color: "#f1f5f9",
    marginBottom: 8,
  },
  vmText: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    color: "#64748b",
    lineHeight: 1.7,
  },
  techStack: { display: "flex", flexWrap: "wrap", gap: 8 },
  tag: {
    background: "rgba(0,180,216,0.08)",
    border: "1px solid rgba(0,180,216,0.2)",
    color: "#00B4D8",
    borderRadius: 6,
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 12px",
    letterSpacing: 0.5,
  },
};

export default About;
