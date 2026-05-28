import { useEffect, useRef, useState } from "react";

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[index];
    const t = setTimeout(
      () => {
        if (!del && sub === cur.length) {
          setTimeout(() => setDel(true), 1800);
          return;
        }
        if (del && sub === 0) {
          setDel(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setSub((s) => s + (del ? -1 : 1));
      },
      del ? 60 : 100,
    );
    return () => clearTimeout(t);
  }, [sub, del, index, words]);
  return (
    <span className="gradient-text" style={{ fontFamily: "'Syne',sans-serif" }}>
      {words[index].substring(0, sub)}
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

const Hero = ({ onNav, theme }) => {
  const canvasRef = useRef(null);
  const dark = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
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
        ctx.fillStyle = dark ? "rgba(0,180,216,0.5)" : "rgba(10,31,92,0.35)";
        ctx.fill();
      });
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x,
            dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = dark
              ? `rgba(0,180,216,${0.15 * (1 - d / 120)})`
              : `rgba(10,31,92,${0.12 * (1 - d / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  const bg = dark
    ? "linear-gradient(135deg,#020b1a 0%,#041228 50%,#020e22 100%)"
    : "linear-gradient(135deg,#e8f4fd 0%,#f0f8ff 50%,#e4f2fb 100%)";

  return (
    <section style={{ ...S.hero, background: bg }} id="hero">
      <canvas ref={canvasRef} style={S.canvas} />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            ...S.hex,
            ...hexPos[i],
            animationDelay: `${i * 1.2}s`,
            opacity: dark ? 0.12 : 0.08,
          }}
        />
      ))}

      <div style={S.content}>
        <div
          className="animate-fade-up"
          style={{
            ...S.badge,
            background: dark ? "rgba(0,180,216,0.1)" : "rgba(10,31,92,0.06)",
            borderColor: dark ? "rgba(0,180,216,0.3)" : "rgba(10,31,92,0.2)",
            color: dark ? "#7DD8EC" : "#0A1F5C",
          }}
        >
          <span style={S.dot} />
          South Africa's Next-Gen ICT Partner
        </div>

        <h1
          style={{ ...S.h1, color: dark ? "#f1f5f9" : "#0A1F5C" }}
          className="animate-fade-up-2"
        >
          We Build
          <br />
          <TypeWriter
            words={[
              "Digital Solutions",
              "Smart Software",
              // "Cloud Systems",
              "Secure Networks",
              "Your Future",
            ]}
          />
        </h1>

        <p
          style={{ ...S.sub, color: dark ? "#94a3b8" : "#445" }}
          className="animate-fade-up-3"
        >
          Kydrel Technologies delivers innovative, reliable, and affordable
          technology services that help your business thrive in an ever-evolving
          digital world.
        </p>

        <div style={S.actions} className="animate-fade-up-4">
          <button style={S.btnP} onClick={() => onNav("services")}>
            Explore Our Services →
          </button>
          <button
            style={{
              ...S.btnO,
              borderColor: dark
                ? "rgba(255,255,255,0.25)"
                : "rgba(10,31,92,0.3)",
              color: dark ? "#e2e8f0" : "#0A1F5C",
            }}
            onClick={() => onNav("contact")}
          >
            Contact Us
          </button>
        </div>

        <div style={S.stats} className="animate-fade-up-4">
          {[
            ["100%", "Client Focused"],
            ["24/7", "Support"],
            ["8+", "ICT Services"],
            ["SA", "Based & Proud"],
          ].map(([v, l]) => (
            <div key={l} style={S.stat}>
              <span style={{ ...S.statV, color: dark ? "#f1f5f9" : "#0A1F5C" }}>
                {v}
              </span>
              <span style={S.statL}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={S.scroll}>
        <div
          style={{
            ...S.scrollDot,
            borderColor: dark ? "rgba(0,180,216,0.4)" : "rgba(10,31,92,0.3)",
          }}
        />
        <span style={{ ...S.scrollTxt, color: dark ? "#4a6a80" : "#889" }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

const hexPos = [
  { right: "8%", top: "15%", width: 280, height: 280 },
  { right: "18%", top: "52%", width: 160, height: 160 },
  { right: "2%", top: "60%", width: 100, height: 100 },
];

const S = {
  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 72,
  },
  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  hex: {
    position: "absolute",
    zIndex: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 86' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='50,2 98,26 98,74 50,98 2,74 2,26' fill='none' stroke='%2300B4D8' stroke-width='1.5'/%3E%3C/svg%3E")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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
    border: "1px solid",
    borderRadius: 20,
    padding: "7px 18px",
    marginBottom: 32,
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#00B4D8",
    boxShadow: "0 0 0 3px rgba(0,180,216,0.3)",
  },
  h1: {
    fontFamily: "'Syne',sans-serif",
    fontSize: "clamp(42px,6vw,76px)",
    fontWeight: 800,
    lineHeight: 1.1,
    margin: "0 0 28px",
    letterSpacing: -2,
  },
  sub: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 17,
    lineHeight: 1.8,
    maxWidth: 560,
    margin: "0 0 40px",
  },
  actions: { display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 },
  btnP: {
    background: "linear-gradient(135deg,#00B4D8,#0090B0)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15,
    fontWeight: 700,
    padding: "14px 32px",
    borderRadius: 10,
    boxShadow: "0 8px 32px rgba(0,180,216,0.35)",
    transition: "transform 0.2s",
    letterSpacing: 0.3,
  },
  btnO: {
    background: "transparent",
    border: "1.5px solid",
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
  statV: { fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800 },
  statL: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    color: "#00B4D8",
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  scroll: {
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
  scrollDot: { width: 24, height: 40, border: "2px solid", borderRadius: 12 },
  scrollTxt: {
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
};

export default Hero;
