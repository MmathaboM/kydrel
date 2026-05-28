const services = [
  { icon: "💻", title: "Software Development", desc: "Custom web and mobile applications tailored precisely to your business needs and workflows." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Cloud migration, hosting, and infrastructure management for scalable, reliable operations." },
  // { icon: "🔒", title: "Cybersecurity", desc: "Protecting your business with robust security frameworks, audits, and 24/7 monitoring." },
  { icon: "📊", title: "Data Analytics", desc: "Turning raw data into actionable business intelligence that drives smarter decisions." },
  { icon: "🌐", title: "Network Infrastructure", desc: "Design, implementation, and maintenance of network systems for seamless connectivity." },
  { icon: "🛠️", title: "IT Support & Managed Services", desc: "Reliable, responsive technical support keeping your operations running smoothly." },
  { icon: "🧭", title: "IT Consulting", desc: "Strategic technology planning and digital transformation guidance for your business goals." },
  { icon: "📣", title: "Digital Marketing Tech", desc: "Helping businesses build a strong, measurable online presence and digital footprint." },
];

const Services = () => (
  <section style={styles.section} id="services">
    <div style={styles.inner}>
      <div style={styles.header}>
        <p style={styles.eyebrow}>What We Do</p>
        <h2 style={styles.h2}>Our Services</h2>
        <p style={styles.subtitle}>
          A full spectrum of ICT services designed to take your business to the next level.
        </p>
      </div>
      <div style={styles.grid}>
        {services.map((s) => (
          <div key={s.title} style={styles.card}>
            <div style={styles.iconWrap}>
              <span style={styles.icon}>{s.icon}</span>
            </div>
            <h3 style={styles.cardTitle}>{s.title}</h3>
            <p style={styles.cardDesc}>{s.desc}</p>
            <div style={styles.cardLine} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    background: "linear-gradient(180deg, #f4f8ff 0%, #eaf6fb 100%)",
    padding: "100px 24px",
  },
  inner: { maxWidth: 1100, margin: "0 auto" },
  header: { textAlign: "center", marginBottom: 60 },
  eyebrow: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 12, fontWeight: 700, color: "#00B4D8",
    letterSpacing: 3, textTransform: "uppercase", marginBottom: 12,
  },
  h2: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: "clamp(28px, 3.5vw, 42px)",
    fontWeight: 800, color: "#0A1F5C",
    margin: "0 0 16px",
  },
  subtitle: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 16, color: "#556", maxWidth: 480, margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  },
  card: {
    background: "#fff", borderRadius: 12,
    padding: "28px 24px",
    border: "1px solid #ddeeff",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  iconWrap: {
    width: 48, height: 48, borderRadius: 12,
    background: "#e8f4fd",
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: 16,
  },
  icon: { fontSize: 22 },
  cardTitle: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 16, fontWeight: 700, color: "#0A1F5C",
    margin: "0 0 10px",
  },
  cardDesc: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 13, color: "#556", lineHeight: 1.7, margin: "0 0 16px",
  },
  cardLine: {
    height: 3, width: 32, background: "#00B4D8", borderRadius: 2,
  },
};

export default Services;
