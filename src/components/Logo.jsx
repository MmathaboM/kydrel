const Logo = ({ size = 60 }) => {
  const scale = size / 144;
  const w = 380 * scale;
  const h = 144 * scale;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 380 144"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon body */}
      <polygon points="72,18 112,0 152,18 152,62 112,84 72,62" fill="#0A1F5C" />
      <polygon
        points="72,18 112,0 152,18 152,62 112,84 72,62"
        fill="none"
        stroke="#00B4D8"
        strokeWidth="2.5"
      />

      {/* K letterform */}
      <rect x="93" y="22" width="7" height="42" fill="#FFFFFF" />
      <polygon points="100,22 126,22 113,43 100,43" fill="#FFFFFF" />
      <polygon points="100,43 113,43 128,64 108,64" fill="#00B4D8" />

      {/* Circuit dots on corners */}
      <circle cx="72" cy="18" r="3.5" fill="#00B4D8" />
      <circle cx="112" cy="0" r="3.5" fill="#00B4D8" />
      <circle cx="152" cy="18" r="3.5" fill="#00B4D8" />
      <circle cx="152" cy="62" r="3.5" fill="#7DD8EC" />
      <circle cx="112" cy="84" r="3.5" fill="#7DD8EC" />
      <circle cx="72" cy="62" r="3.5" fill="#7DD8EC" />

      {/* Circuit lines */}
      <line x1="72" y1="18" x2="52" y2="6" stroke="#00B4D8" strokeWidth="1.5" />
      <circle cx="52" cy="6" r="2.5" fill="#00B4D8" />
      <line
        x1="112"
        y1="0"
        x2="112"
        y2="-14"
        stroke="#00B4D8"
        strokeWidth="1.5"
      />
      <circle cx="112" cy="-10" r="2.5" fill="#00B4D8" />
      <line
        x1="152"
        y1="18"
        x2="172"
        y2="6"
        stroke="#7DD8EC"
        strokeWidth="1.5"
      />
      <circle cx="172" cy="6" r="2.5" fill="#7DD8EC" />

      {/* Wordmark */}
      <text
        x="178"
        y="52"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill="#0A1F5C"
        letterSpacing="4"
      >
        KYDREL
      </text>
      <text
        x="181"
        y="70"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="11"
        fontWeight="400"
        fill="#00B4D8"
        letterSpacing="5"
      >
        TECHNOLOGIES
      </text>

      {/* Underline */}
      <rect x="179" y="76" width="185" height="2" rx="1" fill="#00B4D8" />

      {/* Tagline */}
      <text
        x="180"
        y="94"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="9"
        fill="#888"
        letterSpacing="2"
      >
        POWERING DIGITAL SOLUTIONS
      </text>
    </svg>
  );
};

export default Logo;
