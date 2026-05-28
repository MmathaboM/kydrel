const values = [
  { icon: "💡", title: "Innovation", desc: "We embrace new ideas and continuously seek better solutions for our clients." },
  { icon: "🤝", title: "Integrity", desc: "We operate with honesty, transparency, and the highest ethical standards." },
  { icon: "⭐", title: "Excellence", desc: "We are committed to quality, precision, and exceeding client expectations." },
  { icon: "🎯", title: "Client Focus", desc: "Our clients are at the centre of everything we do — always." },
  { icon: "🔗", title: "Collaboration", desc: "We build strong partnerships to achieve shared, lasting success." },
  { icon: "⚡", title: "Agility", desc: "We adapt quickly to change in a fast-moving digital landscape." },
];

const Values = () => (
  <section style={styles.section} id="values">
    <div style={styles.inner}>
      <div style={styles.header}>
        <p style={styles.eyebrow}>What Drives Us</p>
        <h2 style={styles.h2}>Our Core Values</h2>
        <p style={styles.subtitle}>
          These principles guide every decision we make and every solution we deliver.
        </p>
      </div>
      <div style={styles.grid}>
        {values.map((v, i) => (
          <div key={v.title} style={{ ...styles.card, animationDelay: `${i * 0.1}s` }}>
            <span style={styles.icon}>{v.icon}</span>
            <h3 style={styles.title}>{v.title}</h3>
            <p style={styles.desc}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    background: "#0A1F5C", padding: "100px 24px",
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
    fontWeight: 800, color: "#fff",
    margin: "0 0 16px",
  },
  subtitle: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 16, color: "#7DD8EC", maxWidth: 480, margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(0,180,216,0.25)",
    borderRadius: 12, padding: "28px 22px",
    transition: "background 0.2s, border-color 0.2s",
  },
  icon: { fontSize: 28, display: "block", marginBottom: 14 },
  title: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 10px",
  },
  desc: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: 13, color: "#a8c4d8", lineHeight: 1.7, margin: 0,
  },
};

export default Values;
