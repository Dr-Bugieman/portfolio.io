export interface CollabItem {
  id: string;
  partner: string;
  partnerType: "Open Source Org" | "Startup" | "Tech Studio" | "Research Team";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export type Max8Colors =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string];

export const PORTFOLIO_DATA = {
  developer: {
    name: "Noel Alejandro Esmeralda Juarez",
    handle: "Dr-Bugieman",
    title: "Desarrollador Web Junior",
    alias: "Dr-Bugieman@portfolio",
    email: "noel.esmeraldaj@gmail.com",
    phone: "+52 33 1569 8466",
    github: "https://github.com/Dr-Bugieman",
    linkedin: "https://www.linkedin.com/in/noelalejandro-esmeralda-juarez1031/",
    twitter: "Inexistente",
    location: "Jalisco, México",
    status: " OPEN TO WEB DEVELOPMENT OPPORTUNITIES",
    CLI_EMOJI: "💻",
    palette: [
      "#0f0f0f",
      "#ef4444",
      "#22c55e",
      "#eab308",
      "#3b82f6",
      "#a855f7",
      "#06b6d4",
      "#f8fafc",
    ],
    bio: "Ingeniero en Software recién egresado con experiencia práctica en desarrollo web frontend y backend, adquirida durante un proyecto real de 400 horas bajo metodología ágil. Proactivo, con capacidad de aprendizaje rápido y motivación constante por investigar y adoptar nuevas herramientas y tecnologías.",
    quote:
      '"El aprendizaje constante es la base del crecimiento profesional."',
    education: "Ingeniería de Software — Universidad Enrique Díaz de León (2021 - 2025) | Promedio: 93.4",
    certifications: [
      "Fundamentos de QA y Pruebas de Software (Quality Assurance)",
      "Programación con Agentes de Inteligencia Artificial",
    ],
    languages: "Español, Inglés",
    asciiBanner: `
 _   _  ___  _____ _
| \ | |/ _ \| ____| |
|  \| | | | |  _| | |
| |\  | |_| | |___| |___
|_| \_|\___/|_____|_____|
`,
    specs: {
      OS: "Web / Multiplataforma",
      Kernel: "Software Engineering",
      Uptime: "Recién egresado",
      Shell: "Frontend & Backend",
      WM: "Metodología ágil",
      Editor: "Documentación técnica",
      CPU: "PHP / JavaScript / Java",
      Memory: "MySQL / Bases relacionales",
      Role: "Desarrollador Web Junior",
      Education: "Ingeniería de Software",
      University: "Universidad Enrique Díaz de León",
      Location: "Guadalajara, Jalisco",
      Phone: "+52 33 1569 8466",
      Languages: "Español / Inglés",
      Availability: "Open to opportunities",
    },
  },

  skills: [
    {
      category: "Desarrollo Web",
      icon: "⚡",
      skills: [
        {
          name: "TypeScript / JavaScript",
          level: 65,
        },
        { name: "Rust", level: 55 },
        {
          name: "Go (Golang)",
          level: 10,
        },
        {
          name: "HTML5 / CSS3 / Tailwind",
          level: 65,
        },
        { name: "Python", level: 50 },
        { name: "SQL & NoSQL", level: 90 },
      ],
    },
    {
      category: "Frameworks & Frontend",
      icon: "🌐",
      skills: [
        { name: "React / Next.js", level: 40 },
        {
          name: "Tailwind CSS v4",
          level: 60,
        },
        {
          name: "Node.js / Hono / Express",
          level: 40,
        },
        { name: "Vue / Nuxt", level: 40 },
        {
          name: "WebAssembly (Wasm)",
          level: 40,
        },
      ],
    },
    {
      category: "DevOps, Cloud & Architecture",
      icon: "☁️",
      skills: [
        {
          name: "Docker / Containerization",
          level: 30,
        },
        {
          name: "Kubernetes & Helm",
          level: 30,
        },
        {
          name: "Linux Administration & Bash",
          level: 45,
        },
        {
          name: "PostgreSQL & Redis",
          level: 40,
        },
        {
          name: "CI/CD GitHub Actions",
          level: 50,
        },
        {
          name: "Cloudflare Edge Workers",
          level: 35,
        },
      ],
    },
  ] as SkillCategory[],

  collabs: [
    {
      id: "experience-unisite",
      partner: "UNISITE",
      partnerType: "Startup",
      title: "Desarrollo de plataforma web",
      role: "Desarrollador Web (Practicante)",
      period: "Guadalajara, Jalisco | Marzo 2025 - Agosto 2025 (400 horas)",
      status: "COMPLETED",
      description:
        "Colaboración en el desarrollo frontend y backend de una plataforma web completa utilizando el patrón MVC.",
      contributions: [
        "Desarrollo backend con PHP y frontend con HTML, CSS, Bootstrap y JavaScript.",
        "Diseño e implementación de una base de datos relacional en MySQL.",
        "Pruebas y validación de funcionalidades antes de la liberación del sistema.",
        "Análisis y documentación de un CRM web heredado, evaluando su viabilidad para mantenimiento o rediseño.",
        "Planeación, seguimiento y ejecución del proyecto bajo metodología ágil.",
        "Elaboración continua de documentación técnica durante el desarrollo.",
        "Presentación de resultados técnicos y propuestas de mejora al director de la empresa.",
        "Despliegue del sistema en el servidor de la empresa y publicación final de la plataforma.",
      ],
      techStack: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "MVC"],
      link: "https://github.com/Dr-Bugieman/TestVocacionalUnisitePublic.git",
      asciiLogo: `+--------------------+
|      UNISITE       |
| [WEB DEVELOPMENT]  |
+--------------------+`,
    },
  ] as CollabItem[],

  commands: [
    {
      name: "help",
      desc: "List all available terminal commands",
      usage: "help",
    },
    {
      name: "about",
      desc: "Display bio, engineering philosophy & summary",
      usage: "about [or cat bio.txt]",
    },
    {
      name: "skills",
      desc: "Display interactive skill proficiency meters",
      usage: "skills [or cat skills.sh]",
    },
    {
      name: "collabs",
      desc: "Display list of team collaborations & partner projects",
      usage: "collabs [or cat collabs.md]",
    },
    {
      name: "neofetch",
      desc: "Display ASCII banner & hardware system specs",
      usage: "neofetch",
    },
    {
      name: "spotify",
      desc: "Display Spotify Now Playing song activity & Audio RPC status",
      usage: "spotify [or np, nowplaying]",
    },
    {
      name: "contact",
      desc: "Display contact info and social handles",
      usage: "contact [or mail]",
    },
    {
      name: "links",
      desc: "Display interactive links to GitHub, LinkedIn, X/Twitter & Email",
      usage: "links [or socials, urls]",
    },
    {
      name: "theme",
      desc: "Switch theme (green, amber, cyan, dracula, mono)",
      usage: "theme <green|amber|cyan|dracula|mono>",
    },
    {
      name: "pong",
      desc: "Play retro 1972 arcade Pong mini-game vs CPU",
      usage: "pong [or game, play, ./pong.sh]",
    },
    {
      name: "snake",
      desc: "Play classic retro Snake arcade mini-game",
      usage: "snake [or playsnake, ./snake.sh]",
    },
    {
      name: "github",
      desc: "Display live GitHub stats, stars, forks, and language metrics",
      usage: "github [or gh, stats]",
    },
    {
      name: "repos",
      desc: "List featured GitHub repositories with star counts and links",
      usage: "repos [or projects]",
    },
    {
      name: "radio",
      desc: "Play retro Lo-Fi/Chiptune radio or stream custom songs from YouTube",
      usage: "radio [play|pause|next|add <url>|vol <n>|list]",
    },
    {
      name: "matrix",
      desc: "Toggle digital rain CRT overlay animation",
      usage: "matrix",
    },
    { name: "crt", desc: "Toggle CRT scanline screen effect", usage: "crt" },
    {
      name: "sfx",
      desc: "Toggle audio feedback keypress sounds",
      usage: "sfx",
    },
    {
      name: "clear",
      desc: "Clear terminal buffer screen",
      usage: "clear [or cls]",
    },
    {
      name: "gui",
      desc: "Switch window layout to TUI Visual Dashboard",
      usage: "gui",
    },
    {
      name: "cli",
      desc: "Switch window layout to Interactive CLI Mode",
      usage: "cli",
    },
  ],
};
