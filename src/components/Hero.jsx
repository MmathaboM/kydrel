import { useEffect, useRef, useState } from "react";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
  size: 2 + Math.random() * 3,
}));

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1800);
          return;
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setSubIndex((s) => s + (deleting ? -1 : 1));
      },
      deleting ? 60 : 100,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="gradient-text" style={{ fontFamily: "'Syne',sans-serif" }}>
      {words[index].substring(0, subIndex)}
      <span
        style={{
          animation: "blink 0.8s infinite",
          marginLeft: 2,
          color: "#00B4D8",
        }}
      >
        |
      </span>
    </span>
  );
};

const Hero = ({ onNav }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 2 + Math.random() * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,180,216,0.5)";
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,180,216,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section style={S.hero} id="hero">
      <canvas ref={canvasRef} style={S.canvas} />

      {/* floating hexagons */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{ ...S.floatHex, ...hexPos[i], animationDelay: `${i * 1.2}s` }}
        />
      ))}

      <div style={S.content}>
        <div className="animate-fade-up" style={S.badge}>
          <span style={S.badgeDot} />
          South Africa's Next-Gen ICT Partner
        </div>

        <h1 style={S.h1} className="animate-fade-up-2">
          We Build
          <br />
          <TypeWriter
            words={[
              "Digital Solutions",
              "Smart Software",
              "Cloud Systems",
              "Secure Networks",
              "Your Future",
            ]}
          />
        </h1>

        <p style={S.sub} className="animate-fade-up-3">
          Kydrel Technologies delivers innovative, reliable, and affordable
          technology services that help your business thrive in an ever-evolving
          digital world.
        </p>

        <div style={S.actions} className="animate-fade-up-4">
          <button
            style={S.btnPrimary}
            onClick={() => onNav("services")}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            Explore Our Services
            <span style={{ marginLeft: 8 }}>→</span>
          </button>
          <button
            style={S.btnOutline}
            onClick={() => onNav("contact")}
            onMouseEnter={(e) => {
              e.target.style.background = "#00B4D820";
              e.target.style.borderColor = "#00B4D8";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(255,255,255,0.25)";
            }}
          >
            Contact Us
          </button>
        </div>

        <div style={S.stats} className="animate-fade-up-4">
          {[
            { val: "100%", label: "Client Focused" },
            { val: "24/7", label: "Support Available" },
            { val: "8+", label: "ICT Services" },
            { val: "SA", label: "Based & Proud" },
          ].map((s) => (
            <div key={s.label} style={S.stat}>
              <span style={S.statVal}>{s.val}</span>
              <span style={S.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={S.scrollHint}>
        <div style={S.scrollDot} />
        <span style={S.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
};

const hexPos = [
  { right: "8%", top: "15%", width: 280, height: 280, animationName: "float" },
  {
    right: "18%",
    top: "52%",
    width: 160,
    height: 160,
    animationName: "floatReverse",
  },
  { right: "2%", top: "60%", width: 100, height: 100, animationName: "float" },
];

const S = {
  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #020b1a 0%, #041228 50%, #020e22 100%)",
    paddingTop: 72,
  },
  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  floatHex: {
    position: "absolute",
    zIndex: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 86' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='50,2 98,26 98,74 50,98 2,74 2,26' fill='none' stroke='%2300B4D8' stroke-width='1.5'/%3E%3C/svg%3E")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    opacity: 0.12,
    animation: "float 6s ease-in-out infinite",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: 900,
    margin: "0 auto",
    padding: "80px 40px 60px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(0,180,216,0.1)",
    border: "1px solid rgba(0,180,216,0.3)",
    borderRadius: 20,
    padding: "7px 18px",
    marginBottom: 32,
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: "#7DD8EC",
    letterSpacing: 0.5,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#00B4D8",
    boxShadow: "0 0 0 3px rgba(0,180,216,0.3)",
    animation: "pulse-ring 2s ease-out infinite",
  },
  h1: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(42px, 6vw, 76px)",
    fontWeight: 800,
    color: "#f1f5f9",
    lineHeight: 1.1,
    margin: "0 0 28px",
    letterSpacing: -2,
  },
  sub: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 17,
    color: "#94a3b8",
    lineHeight: 1.8,
    maxWidth: 560,
    margin: "0 0 40px",
  },
  actions: { display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 },
  btnPrimary: {
    background: "linear-gradient(135deg, #00B4D8, #0090B0)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    fontWeight: 700,
    padding: "14px 32px",
    borderRadius: 10,
    boxShadow: "0 8px 32px rgba(0,180,216,0.35)",
    transition: "transform 0.2s, box-shadow 0.2s",
    letterSpacing: 0.3,
  },
  btnOutline: {
    background: "transparent",
    color: "#e2e8f0",
    border: "1.5px solid rgba(255,255,255,0.25)",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    fontWeight: 600,
    padding: "13px 32px",
    borderRadius: 10,
    transition: "all 0.2s",
    letterSpacing: 0.3,
  },
  stats: { display: "flex", gap: 40, flexWrap: "wrap" },
  stat: { display: "flex", flexDirection: "column", gap: 4 },
  statVal: {
    fontFamily: "'Syne',sans-serif",
    fontSize: 32,
    fontWeight: 800,
    color: "#f1f5f9",
  },
  statLabel: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    color: "#00B4D8",
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  scrollHint: {
    position: "absolute",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    zIndex: 2,
    animation: "fadeIn 1.5s ease 1.5s both",
  },
  scrollDot: {
    width: 24,
    height: 40,
    border: "2px solid rgba(0,180,216,0.4)",
    borderRadius: 12,
    position: "relative",
  },
  scrollText: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    color: "#4a6a80",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
};

export default Hero;
