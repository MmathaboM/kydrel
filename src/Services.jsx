import Icon from "@mdi/react";
import {
  mdiCodeBraces,
  mdiCloud,
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
    desc: "Custom web and mobile applications tailored precisely to your business needs and workflows.",
    color: "#00B4D8",
  },
  {
    icon: mdiCloud,
    title: "Cloud Solutions",
    desc: "Cloud migration, hosting, and infrastructure management for scalable, reliable operations.",
    color: "#0ea5e9",
  },
  {
    icon: mdiChartLine,
    title: "Data Analytics",
    desc: "Turning raw data into actionable business intelligence that drives smarter decisions.",
    color: "#0284c7",
  },
  {
    icon: mdiNetwork,
    title: "Network Infrastructure",
    desc: "Design, implementation, and maintenance of network systems for seamless connectivity.",
    color: "#0369a1",
  },
  {
    icon: mdiHeadCog,
    title: "IT Support & Managed Services",
    desc: "Reliable, responsive technical support keeping your operations running smoothly.",
    color: "#00B4D8",
  },
  {
    icon: mdiMonitorStar,
    title: "IT Consulting",
    desc: "Strategic technology planning and digital transformation guidance for your business goals.",
    color: "#0ea5e9",
  },
  {
    icon: mdiBullhorn,
    title: "Digital Marketing Tech",
    desc: "Helping businesses build a strong, measurable online presence and digital footprint.",
    color: "#06b6d4",
  },
];

const Services = ({ theme }) => {
  const dark = theme === "dark";

  return (
    <section
      style={{
        ...styles.section,
        background: dark
          ? "linear-gradient(180deg, #020b1a 0%, #041228 100%)"
          : "linear-gradient(180deg, #f4f8ff 0%, #eaf6fb 100%)",
      }}
      id="services"
    >
      <div style={styles.inner}>
        <div style={styles.header}>
          {/* Fixed: Better spacing and larger text for "What We Do" */}
          <p
            style={{
              ...styles.eyebrow,
              color: dark ? "#00B4D8" : "#0A1F5C",
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              ...styles.h2,
              color: dark ? "#f1f5f9" : "#0A1F5C",
            }}
          >
            Our <span style={{ color: "#00B4D8" }}>Services</span>
          </h2>
          <p
            style={{
              ...styles.subtitle,
              color: dark ? "#94a3b8" : "#475569",
            }}
          >
            A full spectrum of ICT services designed to take your business to
            the next level.
          </p>
        </div>
        <div style={styles.grid}>
          {services.map((s, index) => (
            <div
              key={s.title}
              style={{
                ...styles.card,
                background: dark ? "rgba(255,255,255,0.03)" : "#fff",
                borderColor: dark ? "rgba(255,255,255,0.08)" : "#ddeeff",
              }}
              className="service-card"
            >
              <div
                style={{
                  ...styles.iconWrap,
                  background: dark ? `${s.color}18` : "#e8f4fd",
                }}
              >
                <Icon path={s.icon} size={1.2} color={s.color} />
              </div>
              <h3
                style={{
                  ...styles.cardTitle,
                  color: dark ? "#f1f5f9" : "#0A1F5C",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  ...styles.cardDesc,
                  color: dark ? "#94a3b8" : "#475569",
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  ...styles.cardLine,
                  background: s.color,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "110px 40px",
    transition: "background 0.3s ease",
    "@media (max-width: 768px)": {
      padding: "60px 20px",
    },
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: 64,
  },
  eyebrow: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 16,
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: 12,
      letterSpacing: 3,
    },
  },
  h2: {
    fontFamily: "'Syne',sans-serif",
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: 800,
    margin: "0 0 20px",
    transition: "color 0.3s ease",
    lineHeight: 1.2,
    "@media (max-width: 768px)": {
      fontSize: "clamp(32px, 8vw, 42px)",
    },
  },
  subtitle: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 17,
    maxWidth: 560,
    margin: "0 auto",
    transition: "color 0.3s ease",
    lineHeight: 1.6,
    "@media (max-width: 768px)": {
      fontSize: 15,
      padding: "0 16px",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    "@media (max-width: 768px)": {
      gap: 16,
    },
  },
  card: {
    borderRadius: 16,
    padding: "32px 28px",
    border: "1px solid",
    transition: "all 0.3s ease",
    cursor: "default",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 40px rgba(0,180,216,0.15)",
    },
    "@media (max-width: 768px)": {
      padding: "24px 20px",
    },
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      width: 48,
      height: 48,
      marginBottom: 16,
    },
  },
  cardTitle: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 18,
    fontWeight: 700,
    margin: "0 0 12px",
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: 16,
    },
  },
  cardDesc: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 14,
    lineHeight: 1.7,
    margin: "0 0 20px",
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: 13,
      lineHeight: 1.6,
    },
  },
  cardLine: {
    height: 3,
    width: 40,
    borderRadius: 2,
    transition: "width 0.3s ease",
  },
};

// Add hover effect for card line
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .service-card:hover div:last-child {
    width: 64px !important;
  }
`;
document.head.appendChild(styleSheet);

export default Services;
