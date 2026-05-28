import { useState } from "react";

const services = [
  {
    icon: "💻",
    title: "Software Development",
    desc: "Custom web and mobile applications built precisely for your workflows and goals.",
    color: "#00B4D8",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Scalable cloud migration, hosting, and infrastructure management.",
    color: "#0ea5e9",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Robust security frameworks, audits, and 24/7 threat monitoring.",
    color: "#06b6d4",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    desc: "Transform raw data into actionable business intelligence.",
    color: "#0284c7",
  },
  {
    icon: "🌐",
    title: "Network Infrastructure",
    desc: "Design, deploy, and maintain enterprise-grade network systems.",
    color: "#0369a1",
  },
  {
    icon: "🛠️",
    title: "IT Support & MSP",
    desc: "Reliable, responsive managed services keeping you always operational.",
    color: "#00B4D8",
  },
  {
    icon: "🧭",
    title: "IT Consulting",
    desc: "Strategic technology planning and digital transformation roadmaps.",
    color: "#0ea5e9",
  },
  {
    icon: "📣",
    title: "Digital Marketing Tech",
    desc: "Build a powerful, measurable online presence and digital footprint.",
    color: "#06b6d4",
  },
];

const Card = ({ s, i, dark }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glow-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...S.card,
        background: hovered
          ? dark
            ? "rgba(0,180,216,0.07)"
            : "rgba(0,180,216,0.04)"
          : dark
            ? "rgba(255,255,255,0.03)"
            : "#fff",
        borderColor: hovered
          ? "rgba(0,180,216,0.4)"
          : dark
            ? "rgba(255,255,255,0.08)"
            : "rgba(10,31,92,0.1)",
        boxShadow: hovered && !dark ? "0 8px 30px rgba(10,31,92,0.08)" : "none",
        animationDelay: `${i * 0.08}s`,
      }}
    >
      <div style={{ ...S.iconWrap, background: `${s.color}18` }}>
        <span style={S.icon}>{s.icon}</span>
      </div>
      <h3 style={{ ...S.title, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
        {s.title}
      </h3>
      <p style={{ ...S.desc, color: dark ? "#64748b" : "#5c6b7e" }}>{s.desc}</p>
      <div
        style={{ ...S.line, background: s.color, width: hovered ? 64 : 32 }}
      />
    </div>
  );
};

const Services = ({ theme }) => {
  const dark = theme === "dark";

  return (
    <section
      style={{ ...S.section, background: dark ? "#020b1a" : "#f8fafc" }}
      id="services"
    >
      <div style={S.inner}>
        <div style={S.header}>
          <p
            className="section-eyebrow"
            style={{ color: dark ? "#00B4D8" : "#0A1F5C", textAlign: "center" }}
          >
            What We Do
          </p>
          <h2
            className="section-h2"
            style={{ textAlign: "center", color: dark ? "#f1f5f9" : "#0A1F5C" }}
          >
            Our Services
          </h2>
          <p style={{ ...S.subtitle, color: dark ? "#64748b" : "#5c6b7e" }}>
            A full spectrum of ICT services designed to elevate your business.
          </p>
        </div>
        <div style={S.grid}>
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
};

const S = {
  section: { padding: "110px 40px", transition: "background 0.3s ease" },
  inner: { maxWidth: 1100, margin: "0 auto" },
  header: { textAlign: "center", marginBottom: 64 },
  subtitle: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 16,
    maxWidth: 440,
    margin: "0 auto",
    transition: "color 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },
  card: {
    border: "1px solid",
    borderRadius: 16,
    padding: "28px 24px",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  icon: { fontSize: 24 },
  title: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    transition: "color 0.3s ease",
  },
  desc: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    lineHeight: 1.75,
    marginBottom: 20,
    transition: "color 0.3s ease",
  },
  line: { height: 3, borderRadius: 2, transition: "width 0.3s ease" },
};

export default Services;
