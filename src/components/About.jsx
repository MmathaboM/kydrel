const About = ({ theme }) => {
  const dark = theme === "dark";

  return (
    <section
      style={{ ...S.section, background: dark ? "#040d1c" : "#f8fafc" }}
      id="about"
    >
      <div style={S.inner}>
        <div className="animate-slide-left" style={S.left}>
          <p
            className="section-eyebrow"
            style={{ color: dark ? "#00B4D8" : "#0A1F5C" }}
          >
            Who We Are
          </p>
          <h2
            className="section-h2"
            style={{ color: dark ? "#f1f5f9" : "#0A1F5C" }}
          >
            Built for Africa's
            <br />
            Digital Future
          </h2>
          <p style={{ ...S.body, color: dark ? "#94a3b8" : "#475569" }}>
            Kydrel Technologies is a dynamic, forward-thinking technology
            company based in South Africa, committed to delivering innovative
            digital solutions that empower businesses and communities across the
            continent.
          </p>
          <p style={{ ...S.body, color: dark ? "#94a3b8" : "#475569" }}>
            We leverage cutting-edge technology to solve real-world challenges,
            driving growth and efficiency for our clients across diverse
            industries. We believe technology should be accessible, powerful,
            and purpose-built for the African market.
          </p>
          <div style={S.pills}>
            {[
              "Innovation",
              "Integrity",
              "Excellence",
              "Agility",
              "Client First",
            ].map((v) => (
              <span
                key={v}
                style={{
                  ...S.pill,
                  background: dark
                    ? "rgba(0,180,216,0.1)"
                    : "rgba(10,31,92,0.08)",
                  borderColor: dark
                    ? "rgba(0,180,216,0.25)"
                    : "rgba(10,31,92,0.15)",
                  color: dark ? "#7DD8EC" : "#0A1F5C",
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-slide-right" style={S.right}>
          <div
            style={{
              ...S.bigCard,
              background: dark
                ? "rgba(255,255,255,0.03)"
                : "rgba(10,31,92,0.03)",
              borderColor: dark
                ? "rgba(255,255,255,0.08)"
                : "rgba(10,31,92,0.1)",
            }}
          >
            <div style={S.cardGlow} />
            <div style={S.cardInner}>
              <div style={S.vmGrid}>
                <div
                  style={{
                    ...S.vmCard,
                    background: dark ? "rgba(255,255,255,0.03)" : "#fff",
                    borderColor: dark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(10,31,92,0.1)",
                  }}
                >
                  <div style={S.vmIcon}>🌍</div>
                  <h3
                    style={{
                      ...S.vmTitle,
                      color: dark ? "#f1f5f9" : "#0A1F5C",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    style={{ ...S.vmText, color: dark ? "#64748b" : "#5c6b7e" }}
                  >
                    To be a leading technology company in Africa, recognised for
                    delivering transformative digital solutions that improve
                    lives.
                  </p>
                </div>
                <div
                  style={{
                    ...S.vmCard,
                    borderColor: dark
                      ? "rgba(0,180,216,0.3)"
                      : "rgba(0,180,216,0.2)",
                    background: dark
                      ? "rgba(0,180,216,0.05)"
                      : "rgba(0,180,216,0.03)",
                  }}
                >
                  <div style={S.vmIcon}>🚀</div>
                  <h3 style={{ ...S.vmTitle, color: "#00B4D8" }}>
                    Our Mission
                  </h3>
                  <p
                    style={{ ...S.vmText, color: dark ? "#64748b" : "#5c6b7e" }}
                  >
                    To provide innovative, reliable, and affordable technology
                    services that help our clients thrive in an ever-evolving
                    digital world.
                  </p>
                </div>
              </div>

              {/* Simple Tech Stack - like it was originally */}
              <div style={S.techStack}>
                {[
                  // "Cloud",
                  // "System Development",
                  "E-commerce Solutions",
                  "Software Development",
                  "CRM Solutions",
                  "Data Analytics",
                  // "Mobile",

                  // "Data Analytics",
                  // "Network Infrastructure",
                  // "IT Support Services",
                  "Technology Consulting",
                  "Digital Marketing",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      ...S.tag,
                      background: dark
                        ? "rgba(0,180,216,0.08)"
                        : "rgba(0,180,216,0.1)",
                      borderColor: dark
                        ? "rgba(0,180,216,0.2)"
                        : "rgba(0,180,216,0.3)",
                      color: "#00B4D8",
                    }}
                  >
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
};

const S = {
  section: { padding: "110px 40px", transition: "background 0.3s ease" },
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
    lineHeight: 1.9,
    marginBottom: 18,
    transition: "color 0.3s ease",
  },
  pills: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 },
  pill: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 16px",
    borderRadius: 20,
    letterSpacing: 0.3,
    transition: "all 0.3s ease",
  },
  right: {},
  bigCard: {
    position: "relative",
    borderRadius: 20,
    border: "1px solid",
    overflow: "hidden",
    transition: "all 0.3s ease",
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
    border: "1px solid",
    borderRadius: 12,
    padding: "22px 18px",
    transition: "all 0.3s ease",
  },
  vmIcon: { fontSize: 26, marginBottom: 12 },
  vmTitle: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 8,
    transition: "color 0.3s ease",
  },
  vmText: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    lineHeight: 1.7,
    transition: "color 0.3s ease",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  tag: {
    border: "1px solid",
    borderRadius: 6,
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    padding: "4px 12px",
    letterSpacing: 0.5,
    transition: "all 0.3s ease",
  },
};

export default About;
