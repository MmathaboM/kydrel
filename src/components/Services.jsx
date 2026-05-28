import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiCodeBraces,
  mdiChartLine,
  mdiNetwork,
  mdiHeadCog,
  mdiMonitorStar,
  mdiBullhorn,
} from "@mdi/js";

const services = [
  {
    icon: mdiCodeBraces,
    title: "Software Development",
    desc: "Custom web and mobile applications built precisely for your workflows and goals.",
    color: "#00B4D8",
  },
  {
    icon: mdiChartLine,
    title: "Data Analytics",
    desc: "Transform raw data into actionable business intelligence.",
    color: "#00B4D8",
  },
  {
    icon: mdiNetwork,
    title: "Network Infrastructure",
    desc: "Design, deploy, and maintain enterprise-grade network systems.",
    color: "#00B4D8",
  },
  {
    icon: mdiHeadCog,
    title: "IT Support & MSP",
    desc: "Reliable, responsive managed services keeping you always operational.",
    color: "#00B4D8",
  },
  {
    icon: mdiMonitorStar,
    title: "IT Consulting",
    desc: "Strategic technology planning and digital transformation roadmaps.",
    color: "#00B4D8",
  },
  {
    icon: mdiBullhorn,
    title: "Digital Marketing Tech",
    desc: "Build a powerful, measurable online presence and digital footprint.",
    color: "#00B4D8",
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
      <div style={{ ...S.iconWrap, background: dark ? "rgba(255,255,255,0.05)" : "#e8f4fd" }}>
        <Icon path={s.icon} size={1.2} color={dark ? "#94a3b8" : "#5c6b7e"} />
      </div>
      <h3 style={{ ...S.title, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
        {s.title}
      </h3>
      <p style={{ ...S.desc, color: dark ? "#64748b" : "#5c6b7e" }}>{s.desc}</p>
      <div
        style={{ 
          ...S.line, 
          background: hovered ? s.color : (dark ? "rgba(255,255,255,0.2)" : "#ddeeff"), 
          width: hovered ? 64 : 32 
        }}
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
          <h1
            className="section-h2"
            style={{
              textAlign: "center", marginTop: 10,
              marginBottom:15, color: dark ? "#f1f5f9" : "#0A1F5C"
            }}
          >
            Our Services
          </h1>
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
  section: { 
    padding: "110px 40px", 
    transition: "background 0.3s ease",
    "@media (max-width: 768px)": {
      padding: "60px 20px",
    },
  },
  inner: { maxWidth: 1100, margin: "0 auto" },
  header: { textAlign: "center", marginBottom: 64 },
  subtitle: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 16,
    maxWidth: 440,
    margin: "0 auto",
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: 14,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
    "@media (max-width: 768px)": {
      gap: 16,
    },
  },
  card: {
    border: "1px solid",
    borderRadius: 20,
    padding: "32px 28px",
    transition: "all 0.3s ease",
    cursor: "default",
    "@media (max-width: 768px)": {
      padding: "24px 20px",
      textAlign: "center",
    },
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      marginLeft: "auto",
      marginRight: "auto",
      width: 60,
      height: 60,
    },
  },
  title: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 12,
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: 17,
    },
  },
  desc: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    lineHeight: 1.7,
    marginBottom: 20,
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: 13,
      textAlign: "center",
    },
  },
  line: { 
    height: 3, 
    borderRadius: 2, 
    transition: "width 0.3s ease, background 0.3s ease",
    "@media (max-width: 768px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
};

export default Services;