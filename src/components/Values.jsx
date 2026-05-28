import { useState } from "react";

const values = [
  {
    icon: "💡",
    title: "Innovation",
    desc: "We embrace new ideas and continuously seek better solutions.",
    num: "01",
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "Honesty, transparency, and the highest ethical standards — always.",
    num: "02",
  },
  {
    icon: "⭐",
    title: "Excellence",
    desc: "Committed to quality, precision, and exceeding expectations.",
    num: "03",
  },
  {
    icon: "🎯",
    title: "Client Focus",
    desc: "Our clients are at the centre of every decision we make.",
    num: "04",
  },
  {
    icon: "🔗",
    title: "Collaboration",
    desc: "Strong partnerships that achieve shared, lasting success.",
    num: "05",
  },
  {
    icon: "⚡",
    title: "Agility",
    desc: "We adapt quickly to change in a fast-moving digital landscape.",
    num: "06",
  },
];

const Values = () => {
  const [active, setActive] = useState(null);

  return (
    <section style={S.section} id="values">
      <div style={S.bgGlow} />
      <div style={S.inner}>
        <div style={S.header}>
          <p className="section-eyebrow" style={{ justifyContent: "center" }}>
            What Drives Us
          </p>
          <h2 className="section-h2" style={{ textAlign: "center" }}>
            Our Core Values
          </h2>
          <p style={S.subtitle}>
            The principles behind every solution we deliver.
          </p>
        </div>
        <div style={S.grid}>
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glow-card"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                ...S.card,
                borderColor:
                  active === i
                    ? "rgba(0,180,216,0.5)"
                    : "rgba(255,255,255,0.07)",
                background:
                  active === i
                    ? "rgba(0,180,216,0.06)"
                    : "rgba(255,255,255,0.02)",
              }}
            >
              <span style={S.num}>{v.num}</span>
              <span style={S.icon}>{v.icon}</span>
              <h3 style={S.title}>{v.title}</h3>
              <p style={S.desc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const S = {
  section: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #041228 0%, #020b1a 100%)",
    padding: "110px 40px",
  },
  bgGlow: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  inner: { maxWidth: 1100, margin: "0 auto", position: "relative" },
  header: { textAlign: "center", marginBottom: 64 },
  subtitle: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 16,
    color: "#64748b",
    maxWidth: 380,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  card: {
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: "32px 28px",
    position: "relative",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  num: {
    position: "absolute",
    top: 20,
    right: 22,
    fontFamily: "'Syne',sans-serif",
    fontSize: 13,
    fontWeight: 800,
    color: "rgba(0,180,216,0.2)",
    letterSpacing: 1,
  },
  icon: { fontSize: 30, display: "block", marginBottom: 16 },
  title: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 17,
    fontWeight: 700,
    color: "#f1f5f9",
    marginBottom: 10,
  },
  desc: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    color: "#64748b",
    lineHeight: 1.75,
  },
};

export default Values;
