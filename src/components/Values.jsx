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

const Values = ({ theme }) => {
  const [active, setActive] = useState(null);
  const dark = theme === "dark";

  return (
    <section
      style={{
        ...S.section,
        background: dark
          ? "linear-gradient(180deg, #041228 0%, #020b1a 100%)"
          : "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 100%)",
      }}
      id="values"
    >
      <div style={S.bgGlow} />
      <div style={S.inner}>
        <div style={S.header}>
          <p
            className="section-eyebrow"
            style={{ color: dark ? "#00B4D8" : "#0A1F5C", textAlign: "center" }}
          >
            What Drives Us
          </p>
          <h2
            className="section-h2"
            style={{ textAlign: "center", color: dark ? "#f1f5f9" : "#0A1F5C" }}
          >
            Our Core Values
          </h2>
          <p style={{ ...S.subtitle, color: dark ? "#64748b" : "#5c6b7e" }}>
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
                    : dark
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(10,31,92,0.1)",
                background:
                  active === i
                    ? dark
                      ? "rgba(0,180,216,0.06)"
                      : "rgba(0,180,216,0.03)"
                    : dark
                      ? "rgba(255,255,255,0.02)"
                      : "#fff",
                boxShadow:
                  active === i && !dark
                    ? "0 8px 30px rgba(10,31,92,0.08)"
                    : "none",
              }}
            >
              <span
                style={{
                  ...S.num,
                  color: dark ? "rgba(0,180,216,0.2)" : "rgba(10,31,92,0.15)",
                }}
              >
                {v.num}
              </span>
              <span style={S.icon}>{v.icon}</span>
              <h3 style={{ ...S.title, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
                {v.title}
              </h3>
              <p style={{ ...S.desc, color: dark ? "#64748b" : "#5c6b7e" }}>
                {v.desc}
              </p>
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
    padding: "110px 40px",
    transition: "background 0.3s ease",
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
    maxWidth: 380,
    margin: "0 auto",
    transition: "color 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  card: {
    border: "1px solid",
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
    letterSpacing: 1,
    transition: "color 0.3s ease",
  },
  icon: { fontSize: 30, display: "block", marginBottom: 16 },
  title: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 10,
    transition: "color 0.3s ease",
  },
  desc: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    lineHeight: 1.75,
    transition: "color 0.3s ease",
  },
};

export default Values;
