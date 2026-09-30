// lib/projects.ts

// ==========================================
// 1. DEFINISI TIPE DATA (INTERFACES)
// ==========================================

export type ProjectCategory = "frontend" | "backend" | "fullstack" | "iot" | "mobile" | "cms";

export interface ProjectMetric {
  label: string;
  icon: string;
  val: string;
  desc: string;
  subL: string;
  subR: string;
  color: string;
}

export interface ProjectMatrix {
  name: string;
  sub: string;
  color: string;
}

export interface ProjectChallenge {
  title: string;
  obs: string;
  fix: string;
}

export interface ProjectGallery {
  img: string | null;
  tag: string;
  module: string;
  color?: string;
}

export interface Project {
  slug: string;
  title: string;
  img: string;
  desc: string;
  github: string;
  demo: string;
  cat: ProjectCategory;
  icon: string;
  color: string;
  tech: string;
  tier: string;
  
  metrics?: ProjectMetric[];
  matrix?: ProjectMatrix[];
  challenges?: ProjectChallenge[];
  gallery?: ProjectGallery[];
}

// ==========================================
// 2. DATA PROJECT (DATABASE)
// ==========================================

export const PROJECTS_DATA: Project[] = [
  {
    slug: "buoy-u-tews",
    title: "Buoy U-TEWS",
    img: "/projects/buoyy.png",
    desc: "Buoy U-TEWS is a real-time monitoring project, with the actual device implemented on Sebesi Island, Lampung Province, Indonesia. This web application is built using the PERN stack and retrieves sensor data via MQTT.",
    github: "https://github.com/rafsanjani21/FE_buoy",
    demo: "https://buoy-utews.c-greenproject.org/",
    cat: "iot",
    icon: "sensors",
    color: "#45eae6",
    tech: "PERN Stack, MQTT",
    tier: "DIAMOND TIER",
    metrics: [
      { label: 'TELEMETRY', icon: 'cell_tower', val: 'MQTT', desc: 'REAL-TIME BROKER', subL: 'LATENCY', subR: '< 50ms', color: 'text-secondary-fixed' },
      { label: 'DATABASE', icon: 'database', val: 'PostgreSQL', desc: 'RELATIONAL SENSOR DATA', subL: 'ORM', subR: 'SEQUELIZE', color: 'text-tertiary' },
      { label: 'UPTIME', icon: 'verified_user', val: '99.9%', desc: 'HARDWARE RELIABILITY', subL: 'LOCATION', subR: 'SEBESI ISLAND', color: 'text-primary' },
    ],
    matrix: [
      { name: "PG", sub: "Postgres", color: "text-tertiary" },
      { name: "EXP", sub: "Express.js", color: "text-outline" },
      { name: "RCT", sub: "React.js", color: "text-secondary-fixed" },
      { name: "NOD", sub: "Node.js", color: "text-primary" },
      { name: "MQT", sub: "MQTT Broker", color: "text-error" },
    ],
    challenges: [
      { title: "SENSOR NOISE", obs: "Sea wave turbulence caused erratic and noisy data spikes from the physical buoy sensors.", fix: "Implemented backend data smoothing algorithms and threshold filters before saving to Postgres." },
      { title: "CONNECTION DROPS", obs: "Unstable cellular networks in the middle of the sea caused MQTT disconnects.", fix: "Configured QoS (Quality of Service) level 1 and persistent sessions on the broker." }
    ],
    gallery: [
      { img: "/projects/buoy.png", tag: "BUOY_DASHBOARD.GUI", module: "REAL-TIME WAVE & PRESSURE DATA" }
    ]
  },
  {
    slug: "pumma-backend",
    title: "PUMMA (Backend)",
    img: "/projects/pumma.png",
    desc: "I created a backend for monitoring data from various sensors, including sea water pressure sensors, ultrasonic sensors, wind speed sensors, and others.",
    github: "https://github.com/rafsanjani21/BE_pumma",
    demo: "https://pummaubuoy.vercel.app/",
    cat: "backend",
    icon: "dns",
    color: "#80ff20",
    tech: "Node.js, Express, Sensors API",
    tier: "EMERALD TIER",
    metrics: [
      { label: 'ARCHITECTURE', icon: 'account_tree', val: 'REST API', desc: 'ENDPOINT ROUTING', subL: 'FRAMEWORK', subR: 'EXPRESS.JS', color: 'text-primary' },
      { label: 'PAYLOAD', icon: 'data_object', val: 'JSON', desc: 'HARDWARE DATA PARSING', subL: 'VALIDATION', subR: 'JOI / ZOD', color: 'text-secondary-fixed' },
    ],
    matrix: [
      { name: "NOD", sub: "Node.js", color: "text-primary" },
      { name: "EXP", sub: "Express.js", color: "text-outline" },
      { name: "API", sub: "RESTful", color: "text-tertiary-fixed" },
    ],
    challenges: [
      { title: "HIGH CONCURRENCY", obs: "Multiple sensors sending heavy packets simultaneously causing API bottlenecks.", fix: "Optimized Node.js event loop and utilized efficient database connection pooling." }
    ],
    gallery: [
      { img: "/projects/pumma.png", tag: "PUMMA_API_LOGS.GUI", module: "SENSOR DATA AGGREGATION" }
    ]
  },
  {
    slug: "jobtracker",
    title: "JobTracker",
    img: "/projects/jobtracker.png",
    desc: "I created a website to track the jobs we have listed, using Next.js and Supabase. We can add, edit, and delete jobs.",
    github: "https://github.com/rafsanjani21/JobTracker",
    demo: "https://apllog.vercel.app/",
    cat: "fullstack",
    icon: "work",
    color: "#ffbb1e",
    tech: "Next.js, Supabase",
    tier: "GOLD TIER",
    metrics: [
      { label: "DATABASE", icon: "database", val: "Supabase", desc: "POSTGRESQL RELATIONAL", subL: "AUTH", subR: "MAGIC LINK", color: "text-secondary-fixed" },
      { label: "FRAMEWORK", icon: "code", val: "Next.js 14", desc: "APP ROUTER & SSR", subL: "STYLING", subR: "TAILWIND CSS", color: "text-primary" },
      { label: "OPERATIONS", icon: "manage_accounts", val: "CRUD", desc: "DATA MUTATIONS", subL: "STATE", subR: "REACT HOOKS", color: "text-error" },
    ],
    matrix: [
      { name: "NEXT", sub: "v14 SSR", color: "text-primary" },
      { name: "S-BASE", sub: "BaaS", color: "text-secondary-fixed" },
      { name: "CSS", sub: "Tailwind", color: "text-secondary" },
    ],
    challenges: [
      { title: "DATA MUTATION", obs: "Ensuring UI updates instantly when a user adds/deletes jobs without full reload.", fix: "Implemented optimistic UI updates using React state before committing mutations." },
    ],
    gallery: [
      { img: "/projects/jobtracker.png", tag: "TRACKER_BOARD.GUI", module: "JOB LISTINGS KANBAN" }
    ]
  },
  {
    slug: "philantropy",
    title: "Philantropy",
    img: "/projects/filantropi.png",
    desc: "This philanthropy website is an innovative digital platform for charitable giving, designed to make it easy for the public to make donations and endowments securely, transparently, and conveniently—without the need to log in (Guest Checkout). Combining a meaningful charitable experience—through features that allow users to personalize their intentions and endowment pledges—with modern transaction technology based on QRIS and Virtual Accounts, this app ensures that every charitable contribution is distributed instantly and without hindrance. Additionally, the system is automatically integrated to immediately send payment receipts and reports to donors via WhatsApp or email, creating a highly trustworthy and professional ecosystem of goodwill.",
    github: "https://github.com/rafsanjani21/filantropi",
    demo: "https://filantropi.net/",
    cat: "frontend",
    icon: "volunteer_activism",
    color: "#ffbb1e", 
    tech: "Next.js, Payment Gateway, WA API",
    tier: "GOLD TIER",
    metrics: [
      { label: 'PAYMENT', icon: 'qr_code_scanner', val: 'QRIS & VA', desc: 'INSTANT TRANSACTIONS', subL: 'CHECKOUT', subR: 'GUEST MODE', color: 'text-primary' },
      { label: 'NOTIFICATIONS', icon: 'mark_email_read', val: 'Automated', desc: 'INSTANT RECEIPT', subL: 'CHANNEL', subR: 'WHATSAPP & EMAIL', color: 'text-secondary-fixed' },
    ],
    matrix: [
      { name: "NEXT", sub: "Framework", color: "text-primary" },
      { name: "QRIS", sub: "Payment", color: "text-secondary-fixed" },
      { name: "API", sub: "WhatsApp", color: "text-error" },
    ],
    challenges: [
      { title: "GUEST CHECKOUT", obs: "Users often abandon the donation process when forced to create an account and log in.", fix: "Implemented a frictionless guest checkout flow with session-based transaction tracking to ensure smooth conversions." },
      { title: "RECEIPT AUTOMATION", obs: "Donors required real-time confirmation for trust and transparency after a transaction.", fix: "Integrated payment webhooks with third-party WhatsApp and Email APIs to instantly dispatch digital receipts." }
    ],
    gallery: [
      { img: "/projects/filantropi.png", tag: "DONATION_PORTAL.GUI", module: "CHARITABLE GIVING PLATFORM" }
    ]
  },
  {
    slug: "dashboard-admin-philantropy",
    title: "Dashboard Admin Philantropy",
    img: "/projects/fimin.png",
    desc: "A philanthropy admin dashboard built with Next.js, featuring user verification, campaign management, and disbursement reporting.",
    github: "https://github.com/rafsanjani21/filantropi-admin",
    demo: "",
    cat: "fullstack",
    icon: "admin_panel_settings",
    color: "#ffb4ab",
    tech: "Next.js, Tailwind, Auth",
    tier: "REDSTONE TIER",
    metrics: [
      { label: 'ACCESS', icon: 'lock', val: 'JWT Auth', desc: 'SECURE VERIFICATION', subL: 'ROLE', subR: 'ADMIN ONLY', color: 'text-error' },
      { label: 'UI / UX', icon: 'dashboard', val: 'Tailwind', desc: 'RESPONSIVE DASHBOARD', subL: 'STATE', subR: 'GLOBAL CONTEXT', color: 'text-secondary-fixed' },
    ],
    matrix: [
      { name: "NEXT", sub: "Framework", color: "text-primary" },
      { name: "CSS", sub: "Tailwind", color: "text-secondary-fixed" },
      { name: "JWT", sub: "Security", color: "text-error" },
    ],
    challenges: [
      { title: "DATA PAGINATION", obs: "Fetching thousands of donation records froze the browser.", fix: "Implemented server-side pagination and skeleton loading states." }
    ],
    gallery: [
      { img: "/projects/fimin.png", tag: "ADMIN_CONSOLE.GUI", module: "CAMPAIGN MANAGEMENT SYSTEM" }
    ]
  },
  {
    slug: "gerai-web",
    title: "GERAI WEB",
    img: "/projects/webgerai.png",
    desc: "Cooperative outlet application with NEXTJS, with google login features, registration form, account management, and referral system.",
    github: "https://github.com/rafsanjani21/webgerai",
    demo: "https://app.gerai.org/",
    cat: "fullstack",
    icon: "shopping_cart",
    color: "#45eae6",
    tech: "Next.js, Google OAuth",
    tier: "DIAMOND TIER",
    metrics: [
      { label: 'AUTHENTICATION', icon: 'key', val: 'OAuth 2.0', desc: 'GOOGLE PROVIDER', subL: 'ONBOARDING', subR: '1-CLICK LOGIN', color: 'text-error' },
      { label: 'FEATURES', icon: 'group_add', val: 'Referrals', desc: 'AFFILIATE SYSTEM', subL: 'TRACKING', subR: 'DB RELATIONS', color: 'text-tertiary' },
    ],
    matrix: [
      { name: "NEXT", sub: "React/Next", color: "text-primary" },
      { name: "OAUTH", sub: "Google", color: "text-error" },
      { name: "DB", sub: "Relational", color: "text-secondary-fixed" },
    ],
    challenges: [
      { title: "REFERRAL LOGIC", obs: "Tracking complex multi-level referral codes during the registration process.", fix: "Stored referral hashes in cookies and validated them server-side during DB insert." }
    ],
    gallery: [
      { img: "/projects/webgerai.png", tag: "GERAI_STOREFRONT.GUI", module: "COOPERATIVE E-COMMERCE" }
    ]
  },
  {
    slug: "gerai-app",
    title: "GERAI APP",
    img: "/projects/gerai.jpg",
    desc: "Cooperative outlet application with kotlin programming language, with google login features, registration form, account management.",
    github: "https://github.com/rafsanjani21/koperasi",
    demo: "",
    cat: "mobile",
    icon: "smartphone",
    color: "#bef28a",
    tech: "Kotlin, Android Studio",
    tier: "SLIME TIER",
    metrics: [
      { label: 'NATIVE', icon: 'android', val: 'Kotlin', desc: 'ANDROID DEVELOPMENT', subL: 'IDE', subR: 'ANDROID STUDIO', color: 'text-primary' },
      { label: 'AUTH', icon: 'fingerprint', val: 'Google Auth', desc: 'FIREBASE INTEGRATION', subL: 'SYNC', subR: 'CLOUD', color: 'text-tertiary' },
    ],
    matrix: [
      { name: "KOT", sub: "Kotlin", color: "text-primary" },
      { name: "AND", sub: "Android SDK", color: "text-primary-fixed" },
      { name: "FB", sub: "Firebase", color: "text-tertiary" },
    ],
    challenges: [
      { title: "STATE MANAGEMENT", obs: "Managing user session state across multiple Android Activities.", fix: "Utilized Android Jetpack ViewModel and LiveData to persist state securely." }
    ],
    gallery: [
      { img: "/projects/gerai.jpg", tag: "MOBILE_APK.GUI", module: "ANDROID NATIVE INTERFACE" }
    ]
  },
  {
    slug: "amanku-insurance",
    title: "AmanKu Insurance",
    img: "/projects/asuransi.png",
    desc: "This project is a sample insurance company profile website built with Next.js, designed to demonstrate a trustworthy, user-friendly digital platform for policyholders and corporate clients.",
    github: "https://github.com/rafsanjani21/insurance",
    demo: "https://amanku-insurance.vercel.app/",
    cat: "frontend",
    icon: "health_and_safety",
    color: "#45eae6",
    tech: "Next.js, Tailwind",
    tier: "IRON TIER",
    matrix: [
      { name: "NEXT", sub: "Frontend", color: "text-primary" },
      { name: "CSS", sub: "Tailwind", color: "text-secondary-fixed" },
    ],
    gallery: [
      { img: "/projects/asuransi.png", tag: "CORPORATE_PROFILE.GUI", module: "INSURANCE LANDING PAGE" }
    ]
  },
  {
    slug: "tent-suki-restaurant",
    title: "Tent Suki Restaurant",
    img: "/projects/tent.png",
    desc: "This project is a concept and demo website for Tent Suki & Barbeque built with Next.js, designed to demonstrate a premium, user-friendly digital platform that showcases appetizing menus and streamlines table reservations for dining customers.",
    github: "https://github.com/rafsanjani21/resto-bbq-demo",
    demo: "https://tent-suki-demo.vercel.app/",
    cat: "frontend",
    icon: "restaurant",
    color: "#ffbb1e",
    tech: "Next.js, React",
    tier: "GOLD TIER",
    metrics: [
      { label: 'SEO', icon: 'search', val: '100/100', desc: 'SEARCH ENGINE OPTIMIZED', subL: 'INDEXING', subR: 'GOOGLE', color: 'text-tertiary' },
    ],
    matrix: [
      { name: "NEXT", sub: "Frontend", color: "text-primary" },
      { name: "RCT", sub: "React", color: "text-secondary-fixed" },
    ],
    gallery: [
      { img: "/projects/tent.png", tag: "RESTAURANT_MENU.GUI", module: "INTERACTIVE MENU & RESERVATION" }
    ]
  },
  {
    slug: "arena-jkt",
    title: "Arena JKT",
    img: "/projects/arena.png",
    desc: "This project is a concept and demo website for Arena JKT, a sports and entertainment venue, built with Next.js. It is designed to demonstrate a premium, user-friendly digital platform that showcases a wide range of sports and entertainment events and venue information for visitors.",
    github: "https://github.com/rafsanjani21/arena",
    demo: "https://arena-jkt.vercel.app/",
    cat: "frontend",
    icon: "sports_soccer",
    color: "#ffdea7",
    tech: "Next.js, UI/UX",
    tier: "IRON TIER",
    matrix: [
      { name: "NEXT", sub: "Frontend", color: "text-primary" },
      { name: "UI", sub: "Design System", color: "text-tertiary-fixed" },
    ],
    gallery: [
      { img: "/projects/arena.png", tag: "VENUE_PORTAL.GUI", module: "SPORTS VENUE SHOWCASE" }
    ]
  },
  {
    slug: "cms-kopi-lezat",
    title: "CMS Kopi Lezat",
    img: "/projects/kopi.png",
    desc: "Kopi Lezat is a WordPress-based coffee shop website designed to showcase brand identity, display full coffee and food menus, and allow online table reservations.",
    github: "https://github.com/rafsanjani21/",
    demo: "http://kopi-lezat.rf.gd/",
    cat: "cms",
    icon: "local_cafe",
    color: "#ffb4ab",
    tech: "WordPress, PHP, MySQL",
    tier: "WOOD TIER",
    metrics: [
      { label: 'PLATFORM', icon: 'web', val: 'WordPress', desc: 'CONTENT MANAGEMENT', subL: 'SERVER', subR: 'LARAGON', color: 'text-secondary-fixed' },
    ],
    matrix: [
      { name: "WP", sub: "WordPress", color: "text-secondary-fixed" },
      { name: "PHP", sub: "Backend", color: "text-outline" },
      { name: "SQL", sub: "MySQL", color: "text-tertiary" },
    ],
    gallery: [
      { img: "/projects/kopi.png", tag: "CAFE_STOREFRONT.GUI", module: "COFFEE SHOP CMS" }
    ]
  },
  {
    slug: "portofolio-vite-react",
    title: "Portofolio Vite+React",
    img: "/projects/porto2.png",
    desc: "This portfolio website was built using Vite, React, and Tailwind CSS to ensure a modern, responsive, and lightweight experience.",
    github: "https://github.com/rafsanjani21/FE_buoy",
    demo: "https://buoy-utews.c-greenproject.org/",
    cat: "frontend",
    icon: "web",
    color: "#61DAFB",
    tech: "Vite, React, Tailwind",
    tier: "LAPIS LAZULI TIER",
    metrics: [
      { label: 'BUNDLER', icon: 'bolt', val: 'Vite', desc: 'LIGHTNING FAST HMR', subL: 'BUILD', subR: 'ESBUILD', color: 'text-tertiary-fixed' },
    ],
    matrix: [
      { name: "VITE", sub: "Bundler", color: "text-tertiary-fixed" },
      { name: "RCT", sub: "React", color: "text-secondary-fixed" },
      { name: "CSS", sub: "Tailwind", color: "text-secondary" },
    ],
    gallery: [
      { img: "/projects/porto2.png", tag: "PORTFOLIO_V1.GUI", module: "MODERN REACT SHOWCASE" }
    ]
  },
  {
    slug: "portofolio-html-css",
    title: "Portofolio HTML CSS",
    img: "/projects/porto.png",
    desc: "This is a personal portfolio project, created using only HTML and CSS. The project was developed as both a personal portfolio and an assignment for the bootcamp at Dibimbing.id.",
    github: "https://github.com/rafsanjani21/potofolio",
    demo: "https://muhammadrafsanjani.vercel.app/",
    cat: "frontend",
    icon: "html",
    color: "#ffbb1e",
    tech: "HTML, CSS",
    tier: "STONE TIER",
    metrics: [
      { label: 'CORE', icon: 'html', val: 'Vanilla', desc: 'NO FRAMEWORKS', subL: 'PERF', subR: 'ULTRA LIGHT', color: 'text-error' },
    ],
    matrix: [
      { name: "HTML", sub: "Markup", color: "text-error" },
      { name: "CSS", sub: "Styling", color: "text-secondary-fixed" },
    ],
    challenges: [
      { title: "RESPONSIVENESS", obs: "Creating a mobile-friendly layout without CSS frameworks like Tailwind or Bootstrap.", fix: "Mastered CSS Flexbox, CSS Grid, and custom Media Queries for fluid layouts." }
    ],
    gallery: [
      { img: "/projects/porto.png", tag: "VANILLA_PORTFOLIO.GUI", module: "BOOTCAMP ASSIGNMENT" }
    ]
  }
];