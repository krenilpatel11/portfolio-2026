"use client";

// Rich SVG mockup illustrations for each project
export function ViewVoiceMockup() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="500" fill="#1a0a3e" rx="0" />
      {/* Top bar */}
      <rect x="0" y="0" width="800" height="52" fill="#150830" />
      <circle cx="26" cy="26" r="7" fill="#ff5f57" />
      <circle cx="46" cy="26" r="7" fill="#febc2e" />
      <circle cx="66" cy="26" r="7" fill="#28c840" />
      <rect x="220" y="16" width="360" height="22" rx="11" fill="#2a1455" />
      <rect x="320" y="22" width="160" height="10" rx="5" fill="#4a2880" />
      {/* Sidebar */}
      <rect x="0" y="52" width="200" height="448" fill="#120728" />
      <rect x="16" y="80" width="120" height="12" rx="6" fill="#6c3ce1" />
      {[120, 152, 184, 216, 248, 280].map((y, i) => (
        <g key={y}>
          <rect x="16" y={y} width="168" height="28" rx="8" fill={i === 0 ? "#6c3ce1" : "transparent"} />
          <rect x="36" y={y + 8} width={[80, 100, 70, 110, 90, 75][i]} height="10" rx="5" fill={i === 0 ? "#ffffff" : "#4a2880"} />
        </g>
      ))}
      {/* Main content */}
      <rect x="200" y="52" width="600" height="448" fill="#1a0a3e" />
      {/* Header */}
      <rect x="220" y="72" width="240" height="18" rx="6" fill="#e0d0ff" />
      <rect x="220" y="96" width="160" height="12" rx="5" fill="#6c3ce1" opacity="0.6" />
      {/* Upload area */}
      <rect x="220" y="130" width="360" height="120" rx="16" fill="#250d52" stroke="#6c3ce1" strokeWidth="1.5" strokeDasharray="8,4" />
      <circle cx="400" cy="175" r="22" fill="#6c3ce1" opacity="0.3" />
      <rect x="388" y="163" width="24" height="24" rx="4" fill="#6c3ce1" />
      <rect x="380" y="200" width="80" height="10" rx="5" fill="#8b5cf6" />
      <rect x="390" y="216" width="60" height="8" rx="4" fill="#6c3ce1" opacity="0.5" />
      {/* Stats cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={220 + i * 128} y={270} width={116} height={70} rx="12" fill="#250d52" />
          <rect x={232 + i * 128} y={284} width={60} height={10} rx="5" fill="#6c3ce1" opacity="0.6" />
          <rect x={232 + i * 128} y={300} width={40} height={18} rx="5" fill="#e0d0ff" />
          <rect x={232 + i * 128} y={324} width={70} height={8} rx="4" fill="#4a2880" />
        </g>
      ))}
      {/* Table */}
      <rect x="220" y="360" width="560" height="30" rx="8" fill="#250d52" />
      {["VENDOR", "DATE", "AMOUNT", "STATUS", "ACCURACY"].map((label, i) => (
        <text key={label} x={236 + i * 110} y={380} fontSize="9" fill="#8b5cf6" fontFamily="monospace" fontWeight="bold">{label}</text>
      ))}
      {[0,1,2].map(row => (
        <g key={row}>
          <rect x="220" y={396 + row * 30} width="560" height="28" rx="4" fill={row % 2 === 0 ? "#1e0942" : "transparent"} />
          <rect x="236" y={405 + row * 30} width="70" height="9" rx="4" fill="#4a2880" />
          <rect x="346" y={405 + row * 30} width="55" height="9" rx="4" fill="#4a2880" />
          <rect x="456" y={405 + row * 30} width="50" height="9" rx="4" fill="#4a2880" />
          <rect x="566" y={404 + row * 30} width="44" height="12" rx="6" fill="#22c55e" opacity="0.2" />
          <rect x="574" y={407 + row * 30} width="28" height="6" rx="3" fill="#22c55e" />
          <rect x="680" y={404 + row * 30} width="50" height="12" rx="6" fill="#6c3ce1" opacity="0.4" />
        </g>
      ))}
      {/* Accuracy badge */}
      <rect x="610" y="72" width="150" height="42" rx="12" fill="#6c3ce1" />
      <text x="625" y="88" fontSize="10" fill="#e0d0ff" fontFamily="sans-serif">Accuracy</text>
      <text x="625" y="105" fontSize="18" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold">95%</text>
    </svg>
  );
}

export function SecurityGateMockup() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="500" fill="#0f172a" rx="0" />
      <rect x="0" y="0" width="800" height="52" fill="#0a1020" />
      <circle cx="26" cy="26" r="7" fill="#ff5f57" />
      <circle cx="46" cy="26" r="7" fill="#febc2e" />
      <circle cx="66" cy="26" r="7" fill="#28c840" />
      <rect x="220" y="14" width="360" height="24" rx="12" fill="#1e2a45" />
      <rect x="320" y="20" width="160" height="12" rx="6" fill="#2d3f6e" />
      {/* Sidebar */}
      <rect x="0" y="52" width="220" height="448" fill="#0b1120" />
      <circle cx="110" cy="102" r="28" fill="#1e3a6e" />
      <text x="100" y="108" fontSize="14" fill="#60a5fa" fontFamily="sans-serif" fontWeight="bold">KP</text>
      <rect x="60" y="140" width="100" height="12" rx="6" fill="#e2e8f0" />
      <rect x="75" y="158" width="70" height="10" rx="5" fill="#60a5fa" opacity="0.6" />
      {["Dashboard","Visitors","Security","Residents","Alerts"].map((label, i) => (
        <g key={label}>
          <rect x="12" y={196 + i * 46} width="196" height="38" rx="10" fill={i === 0 ? "#1e3a6e" : "transparent"} />
          <rect x="48" y={211 + i * 46} width={[80, 60, 65, 80, 50][i]} height="10" rx="5" fill={i === 0 ? "#93c5fd" : "#2d3f6e"} />
        </g>
      ))}
      {/* Main */}
      <rect x="220" y="52" width="580" height="448" fill="#0f172a" />
      <rect x="240" y="72" width="200" height="16" rx="6" fill="#e2e8f0" />
      <rect x="240" y="94" width="140" height="10" rx="5" fill="#60a5fa" opacity="0.5" />
      {/* Stat cards */}
      {[
        { label: "Visitors Today", value: "24", color: "#3b82f6" },
        { label: "Active Staff", value: "8", color: "#22c55e" },
        { label: "Alerts", value: "2", color: "#ef4444" },
        { label: "Residents", value: "186", color: "#8b5cf6" },
      ].map((stat, i) => (
        <g key={stat.label}>
          <rect x={240 + (i % 2) * 272} y={120 + Math.floor(i / 2) * 100} width="256" height="88" rx="14" fill="#1e293b" />
          <rect x={258 + (i % 2) * 272} y={138 + Math.floor(i / 2) * 100} width={[100, 80, 55, 90][i]} height="10" rx="5" fill="#475569" />
          <text x={258 + (i % 2) * 272} y={175 + Math.floor(i / 2) * 100} fontSize="26" fill={stat.color} fontFamily="sans-serif" fontWeight="bold">{stat.value}</text>
          <rect x={258 + (i % 2) * 272} y={185 + Math.floor(i / 2) * 100} width="60" height="8" rx="4" fill={stat.color} opacity="0.3" />
        </g>
      ))}
      {/* Visitor log */}
      <rect x="240" y="330" width="540" height="30" rx="8" fill="#1e293b" />
      <rect x="258" y="344" width="50" height="10" rx="5" fill="#60a5fa" opacity="0.7" />
      <rect x="368" y="344" width="60" height="10" rx="5" fill="#60a5fa" opacity="0.7" />
      <rect x="478" y="344" width="55" height="10" rx="5" fill="#60a5fa" opacity="0.7" />
      <rect x="588" y="344" width="60" height="10" rx="5" fill="#60a5fa" opacity="0.7" />
      {[0,1,2,3].map(row => (
        <g key={row}>
          <rect x="240" y={366 + row * 30} width="540" height="26" rx="4" fill={row % 2 === 0 ? "#1a2540" : "transparent"} />
          <circle cx="268" cy={383 + row * 30} r="8" fill={["#3b82f6","#22c55e","#ef4444","#8b5cf6"][row]} opacity="0.3" />
          <rect x="284" y={378 + row * 30} width="55" height="9" rx="4" fill="#334155" />
          <rect x="374" y={378 + row * 30} width="65" height="9" rx="4" fill="#334155" />
          <rect x="484" y={378 + row * 30} width="60" height="9" rx="4" fill="#334155" />
          <rect x="594" y={377 + row * 30} width="50" height="12" rx="6" fill={["#22c55e","#f59e0b","#ef4444","#22c55e"][row]} opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

export function TrainingMockup() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="500" fill="#fafafa" rx="0" />
      <rect x="0" y="0" width="800" height="52" fill="#ffffff" />
      <rect x="0" y="51" width="800" height="1" fill="#e5e7eb" />
      <circle cx="26" cy="26" r="7" fill="#ff5f57" />
      <circle cx="46" cy="26" r="7" fill="#febc2e" />
      <circle cx="66" cy="26" r="7" fill="#28c840" />
      <rect x="0" y="52" width="220" height="448" fill="#f8f9fa" />
      <rect x="0" y="52" width="1" height="448" fill="#e5e7eb" />
      <rect x="16" y="80" width="80" height="14" rx="5" fill="#1f2937" />
      <rect x="16" y="100" width="120" height="10" rx="4" fill="#e11d48" opacity="0.7" />
      {["Overview","My Courses","Progress","Certificates","Settings"].map((label, i) => (
        <g key={label}>
          <rect x="8" y={134 + i * 44} width="204" height="36" rx="8" fill={i === 0 ? "#e11d48" : "transparent"} />
          <rect x="28" y={146 + i * 44} width={[70, 90, 65, 90, 60][i]} height="10" rx="5" fill={i === 0 ? "#fff" : "#9ca3af"} />
        </g>
      ))}
      {/* Main */}
      <rect x="220" y="52" width="580" height="448" fill="#ffffff" />
      <rect x="240" y="74" width="180" height="16" rx="6" fill="#111827" />
      <rect x="240" y="96" width="280" height="10" rx="5" fill="#9ca3af" />
      {/* KPI cards */}
      {[
        { label: "Courses Active", value: "24", pct: "+12%", color: "#e11d48" },
        { label: "Completion Rate", value: "78%", pct: "+5%", color: "#0ea5e9" },
        { label: "Avg Score", value: "84", pct: "+8%", color: "#10b981" },
      ].map((kpi, i) => (
        <g key={kpi.label}>
          <rect x={240 + i * 185} y={120} width="172" height="90" rx="14" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          <rect x={256 + i * 185} y={136} width={[100, 110, 80][i]} height="9" rx="4" fill="#9ca3af" />
          <text x={256 + i * 185} y={172} fontSize="28" fill={kpi.color} fontFamily="sans-serif" fontWeight="bold">{kpi.value}</text>
          <rect x={256 + i * 185} y={182} width="48" height="14" rx="6" fill={kpi.color} opacity="0.12" />
          <rect x={263 + i * 185} y={186} width="34" height="6" rx="3" fill={kpi.color} opacity="0.7" />
        </g>
      ))}
      {/* Progress bars */}
      <rect x="240" y="230" width="540" height="16" rx="6" fill="#111827" />
      <rect x="256" y="238" width="100" height="8" rx="4" fill="#ffffff" />
      {[0,1,2,3,4].map(row => (
        <g key={row}>
          <rect x="240" y={254 + row * 38} width="540" height="32" rx="8" fill={row % 2 === 0 ? "#f9fafb" : "#ffffff"} />
          <rect x="256" y={264 + row * 38} width={[140, 100, 160, 120, 130][row]} height="9" rx="4" fill="#374151" />
          {/* Progress bar */}
          <rect x="420" y={267 + row * 38} width="200" height="10" rx="5" fill="#e5e7eb" />
          <rect x="420" y={267 + row * 38} width={[160, 100, 180, 130, 150][row]} height="10" rx="5" fill="#e11d48" opacity="0.7" />
          <rect x="634" y={264 + row * 38} width="40" height="14" rx="6" fill="#10b981" opacity="0.15" />
          <rect x="639" y={268 + row * 38} width="30" height="6" rx="3" fill="#10b981" />
        </g>
      ))}
      {/* Chart area */}
      <rect x="600" y="120" width="160" height="90" rx="14" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <polyline points="610,196 630,170 650,175 670,150 690,160 710,140 730,148 750,130" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="614" y="130" width="60" height="9" rx="4" fill="#6b7280" />
      <text x="614" y="155" fontSize="20" fill="#10b981" fontFamily="sans-serif" fontWeight="bold">+30%</text>
    </svg>
  );
}

export function LabelFlowMockup() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#1a0533" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6c3ce1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bgGrad)" />
      {/* Nav */}
      <rect x="0" y="0" width="800" height="56" fill="#070707" />
      <circle cx="26" cy="28" r="7" fill="#ff5f57" />
      <circle cx="46" cy="28" r="7" fill="#febc2e" />
      <circle cx="66" cy="28" r="7" fill="#28c840" />
      <rect x="84" y="20" width="480" height="16" rx="8" fill="#1a1a1a" />
      <rect x="184" y="24" width="280" height="8" rx="4" fill="#2a2a2a" />
      {/* Logo area */}
      <rect x="120" y="72" width="160" height="28" rx="6" fill="transparent" />
      <text x="120" y="93" fontSize="22" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold">LabelFlow</text>
      <rect x="290" y="82" width="8" height="8" rx="2" fill="#6c3ce1" />
      {/* Hero headline */}
      <rect x="120" y="118" width="360" height="26" rx="6" fill="#f0e6ff" />
      <rect x="120" y="152" width="300" height="26" rx="6" fill="#f0e6ff" />
      <rect x="120" y="186" width="240" height="26" rx="6" fill="url(#accentGrad)" />
      {/* Hero sub */}
      <rect x="120" y="228" width="280" height="10" rx="5" fill="#6b7280" />
      <rect x="120" y="244" width="220" height="10" rx="5" fill="#6b7280" />
      {/* CTA buttons */}
      <rect x="120" y="272" width="140" height="40" rx="20" fill="url(#accentGrad)" />
      <rect x="136" y="286" width="108" height="10" rx="5" fill="#ffffff" />
      <rect x="272" y="272" width="120" height="40" rx="20" fill="transparent" stroke="#6c3ce1" strokeWidth="1.5" />
      <rect x="288" y="286" width="88" height="10" rx="5" fill="#a78bfa" />
      {/* Right side — project cards */}
      <rect x="520" y="72" width="260" height="170" rx="16" fill="#140926" stroke="#6c3ce1" strokeWidth="0.5" />
      <rect x="536" y="88" width="100" height="12" rx="5" fill="#a78bfa" />
      <rect x="536" y="106" width="228" height="80" rx="10" fill="#1e0d3a" />
      <rect x="552" y="120" width="60" height="8" rx="4" fill="#4a2880" />
      <rect x="552" y="134" width="180" height="6" rx="3" fill="#3a1f6e" />
      <rect x="552" y="146" width="140" height="6" rx="3" fill="#3a1f6e" />
      <rect x="552" y="158" width="160" height="6" rx="3" fill="#3a1f6e" />
      <rect x="536" y="196" width="80" height="10" rx="5" fill="#6c3ce1" />
      <rect x="636" y="196" width="60" height="10" rx="5" fill="#374151" />
      {/* Service cards row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={120 + i * 132} y={330} width={120} height={80} rx="12" fill="#140926" stroke="#2d1b54" strokeWidth="1" />
          <rect x={136 + i * 132} y={348} width="40" height="14" rx="5" fill={["#6c3ce1","#a855f7","#7c3aed"][i]} opacity="0.5" />
          <rect x={136 + i * 132} y={368} width={[80, 70, 75][i]} height="8" rx="4" fill="#6b7280" />
          <rect x={136 + i * 132} y={382} width={[60, 50, 65][i]} height="8" rx="4" fill="#6b7280" opacity="0.5" />
          <rect x={136 + i * 132} y={396} width="36" height="8" rx="4" fill="#6c3ce1" opacity="0.6" />
        </g>
      ))}
      {/* Testimonial strip */}
      <rect x="520" y="260" width="260" height="150" rx="16" fill="#140926" stroke="#6c3ce1" strokeWidth="0.5" />
      <text x="534" y="282" fontSize="28" fill="#6c3ce1" fontFamily="serif">&ldquo;</text>
      <rect x="534" y="290" width="230" height="8" rx="4" fill="#4a2880" />
      <rect x="534" y="304" width="200" height="8" rx="4" fill="#4a2880" />
      <rect x="534" y="318" width="180" height="8" rx="4" fill="#4a2880" />
      <circle cx="546" cy="378" r="14" fill="#6c3ce1" opacity="0.3" />
      <rect x="566" y="370" width="80" height="9" rx="4" fill="#e2e8f0" />
      <rect x="566" y="384" width="110" height="8" rx="4" fill="#6b7280" />
      {/* Footer strip */}
      <rect x="0" y="450" width="800" height="50" fill="#080808" />
      <rect x="120" y="468" width="60" height="10" rx="5" fill="#6c3ce1" />
      {[200,310,420,530,640].map(x => (
        <rect key={x} x={x} y={468} width={[80, 70, 60, 70, 65][Math.floor((x-200)/110)]} height="8" rx="4" fill="#374151" />
      ))}
    </svg>
  );
}

export function SportMockup() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="sportBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#0f1f0a" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#sportBg)" />
      <rect x="0" y="0" width="800" height="52" fill="#050505" />
      <circle cx="26" cy="26" r="7" fill="#ff5f57" />
      <circle cx="46" cy="26" r="7" fill="#febc2e" />
      <circle cx="66" cy="26" r="7" fill="#28c840" />
      <rect x="180" y="14" width="440" height="24" rx="12" fill="#0f1f0a" />
      <rect x="280" y="19" width="240" height="14" rx="7" fill="#1a3a0a" />
      {/* Nav */}
      <rect x="0" y="52" width="800" height="50" fill="#0a0a0a" />
      <rect x="80" y="66" width="80" height="20" rx="5" fill="url(#greenGrad)" />
      {["HOME","SPORTS","TEAMS","SCORES","SCHEDULE"].map((item, i) => (
        <rect key={item} x={200 + i * 110} y={70} width={[55, 65, 55, 65, 80][i]} height="12" rx="5" fill="#374151" />
      ))}
      <rect x="700" y="65" width="60" height="24" rx="12" fill="url(#greenGrad)" />
      {/* Hero area */}
      <rect x="0" y="102" width="500" height="260" fill="#050505" />
      <rect x="500" y="102" width="300" height="260" fill="#0d1a0a" />
      {/* Big score */}
      <text x="60" y="200" fontSize="80" fill="#16a34a" fontFamily="sans-serif" fontWeight="bold" opacity="0.15">SPORT</text>
      <rect x="60" y="130" width="220" height="22" rx="6" fill="#4ade80" />
      <rect x="60" y="160" width="300" height="22" rx="6" fill="#f0fdf4" />
      <rect x="60" y="188" width="260" height="22" rx="6" fill="#f0fdf4" />
      <rect x="60" y="224" width="160" height="16" rx="5" fill="#6b7280" />
      <rect x="60" y="250" width="120" height="38" rx="19" fill="url(#greenGrad)" />
      <rect x="196" y="250" width="100" height="38" rx="19" fill="transparent" stroke="#16a34a" strokeWidth="1.5" />
      {/* Sports figures silhouette */}
      <ellipse cx="650" cy="310" rx="100" ry="40" fill="#16a34a" opacity="0.1" />
      {/* Score cards */}
      <rect x="0" y="362" width="800" height="138" fill="#080808" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={16 + i * 195} y={378} width="182" height="104" rx="14" fill="#0f1a0a" stroke="#16a34a" strokeWidth="0.5" strokeOpacity="0.4" />
          <rect x={28 + i * 195} y={394} width="80" height="10" rx="5" fill="#374151" />
          <rect x={28 + i * 195} y={412} width={[120,100,130,110][i]} height="18" rx="5" fill={i === 0 ? "#4ade80" : "#1f2937"} />
          <rect x={28 + i * 195} y={438} width="50" height="10" rx="5" fill="#6b7280" />
          <rect x={90 + i * 195} y={438} width="40" height="10" rx="5" fill="#16a34a" opacity="0.6" />
          <rect x={28 + i * 195} y={456} width="158" height="6" rx="3" fill="#1f2937" />
          <rect x={28 + i * 195} y={456} width={[140,90,120,80][i]} height="6" rx="3" fill="#16a34a" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

export function GenericMockup({ index }: { index: number }) {
  const colors = [
    { bg: "#1a0a3e", accent: "#6c3ce1", light: "#a78bfa" },
    { bg: "#0f172a", accent: "#3b82f6", light: "#93c5fd" },
    { bg: "#fafafa", accent: "#e11d48", light: "#fda4af" },
    { bg: "#0a0a0a", accent: "#6c3ce1", light: "#a78bfa" },
    { bg: "#050505", accent: "#16a34a", light: "#4ade80" },
  ];
  const c = colors[index % colors.length];
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="500" fill={c.bg} />
      <rect x="60" y="60" width="680" height="380" rx="20" fill={c.accent} opacity="0.08" stroke={c.accent} strokeWidth="1" strokeOpacity="0.3" />
      <rect x="120" y="120" width="200" height="20" rx="8" fill={c.light} opacity="0.6" />
      <rect x="120" y="150" width="320" height="14" rx="6" fill={c.accent} opacity="0.4" />
    </svg>
  );
}
