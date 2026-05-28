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

const Card = ({ s, i }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glow-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...S.card,
        background: hovered ? "rgba(0,180,216,0.07)" : "rgba(255,255,255,0.03)",
        borderColor: hovered ? "rgba(0,180,216,0.4)" : "rgba(255,255,255,0.08)",
        animationDelay: `${i * 0.08}s`,
      }}
    >
      <div style={{ ...S.iconWrap, background: `${s.color}18` }}>
        <span style={S.icon}>{s.icon}</span>
      </div>
      <h3 style={S.title}>{s.title}</h3>
      <p style={S.desc}>{s.desc}</p>
      <div
        style={{ ...S.line, background: s.color, width: hovered ? 64 : 32 }}
      />
    </div>
  );
};

const Services = () => (
  <section style={S.section} id="services">
    <div style={S.inner}>
      <div style={S.header}>
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>
          What We Do
        </p>
        <h2 className="section-h2" style={{ textAlign: "center" }}>
          Our Services
        </h2>
        <p style={S.subtitle}>
          A full spectrum of ICT services designed to elevate your business.
        </p>
      </div>
      <div style={S.grid}>
        {services.map((s, i) => (
          <Card key={s.title} s={s} i={i} />
        ))}
      </div>
    </div>
  </section>
);

const S = {
  section: { background: "#020b1a", padding: "110px 40px" },
  inner: { maxWidth: 1100, margin: "0 auto" },
  header: { textAlign: "center", marginBottom: 64 },
  subtitle: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 16,
    color: "#64748b",
    maxWidth: 440,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },
  card: {
    border: "1px solid rgba(255,255,255,0.08)",
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
    color: "#f1f5f9",
    marginBottom: 10,
  },
  desc: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    color: "#64748b",
    lineHeight: 1.75,
    marginBottom: 20,
  },
  line: { height: 3, borderRadius: 2, transition: "width 0.3s ease" },
};

export default Services;
