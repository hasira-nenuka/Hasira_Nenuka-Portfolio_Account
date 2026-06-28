export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/github", label: "GitHub" },
  { href: "/achievements", label: "Achievements" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Python"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"] },
  {
    group: "Engineering Practice",
    items: [
      "REST APIs",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Database Design",
      "Agile Development",
    ],
  },
];

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Academic" | "Mobile";

export const PROJECTS: {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory[];
  github?: string;
  demo?: string;
  gradient: string;
  image?: string;
}[] = [
  {
    title: "University Internship & Career Management System",
    description:
      "A complete platform for internships, career opportunities, applications, approvals, communication and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: ["Full Stack", "Academic"],
    github: "https://github.com/hasira-nenuka/university_internship_career_management_system",
    demo: "#",
    gradient: "from-teal-400/30 via-amber-300/20 to-rose-500/25",
    image: "/University%20internship%20and%20career%20management%20system.png",
  },
  {
    title: "Automated Language Conversion Tests",
    description:
      "Playwright UI automation suite for validating Singlish and Thanglish conversion flows into Sinhala and Tamil.",
    tech: ["Playwright", "TypeScript", "Node.js", "GitHub Actions"],
    category: ["Academic"],
    github: "https://github.com/hasira-nenuka/language-conversion-tests",
    gradient: "from-lime-400/25 via-teal-400/20 to-violet-500/25",
    image: "/Automated%20language%20conversion%20test.png",
  },
  {
    title: "Facilities Halls Booking System",
    description:
      "A campus facilities platform for hall bookings, maintenance requests, ticket tracking, approvals and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack", "Academic"],
    github: "https://github.com/GimaR03/facilities_booking_system",
    demo: "#",
    gradient: "from-emerald-400/25 via-orange-300/20 to-fuchsia-500/20",
    image: "/Facilities%20halls%20booking%20system.png",
  },
  {
    title: "Helpdesk Management System",
    description:
      "A support system with user/admin dashboards, ticket assignment, PDF exports and REST API endpoints.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: ["Full Stack"],
    github: "https://github.com/hasira-nenuka/HelpdeskManagementSystem",
    demo: "#",
    gradient: "from-rose-500/25 via-teal-400/20 to-lime-400/25",
    image: "/Helpdesk%20management%20system.png",
  },
  {
    title: "University Book Exchange System",
    description:
      "A MERN application for orders, inventory, finance, support/helpdesk workflows and navigation integrations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Full Stack"],
    github: "https://github.com/hasira-nenuka/Ama-MERN",
    demo: "#",
    gradient: "from-violet-500/22 via-orange-500/20 to-amber-300/25",
    image: "/MERN%20application.png",
  },
  {
    title: "Wellness Tracker App",
    description:
      "A mobile wellness tracking application for recording daily health habits, monitoring progress and supporting personal wellbeing routines.",
    tech: ["Mobile App", "Wellness Tracking", "Health"],
    category: ["Mobile", "Academic"],
    github: "https://github.com/hasira-nenuka/Wellness-_Tracker_App.git",
    gradient: "from-cyan-400/25 via-emerald-300/20 to-violet-500/25",
    image: "/1.png",
  },
  {
    title: "Test Automation Assignment",
    description:
      "Exploration of automation testing types - unit, integration, performance, regression, smoke and API testing.",
    tech: ["Selenium", "Java", "TestNG"],
    category: ["Academic"],
    github: "https://github.com/hasira-nenuka/it23698604_test_automation",
    gradient: "from-teal-400/25 via-lime-300/20 to-rose-500/22",
    image: "/Test%20Automation%20Assignment.jpg",
  },
];

export const PROJECT_FILTERS: (ProjectCategory | "All")[] = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Mobile",
  "Academic",
];

export const EDUCATION = {
  degree: "Bachelor of Science Honours in Information Technology",
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  gpa: "2.12",
  graduation: "Expected 2027",
  modules: [
    "Database Systems",
    "Software Engineering",
    "Web Application Development",
    "Data Structures & Algorithms",
    "Computer Networks",
    "Information Security",
  ],
};

export const CERTIFICATIONS = [
  {
    title: "Training Certificates",
    org: "Oracle / Microsoft Learn",
    year: "2019 - Present",
    image: "/Training%20Certificates.jpeg",
  },
  {
    title: "Online Certifications",
    org: "Coursera / Udemy",
    year: "2019 - Present",
    image: "/Online%20Certifications.jpg",
  },
  {
    title: "Extra Skills Certificates",
    org: "Sports / Additional Skill Certificates",
    year: "2019 - Present",
    image: "/Extra%20Skills%20Certificates.jpg",
  },
  {
    title: "Workshop Certificates",
    org: "Industry Tech Talks",
    year: "2019 - Present",
    image: "/Workshop%20Certificates.jpg",
  },
];

export const SECURITY_INTERESTS = [
  {
    title: "Network Security",
    desc: "Protecting computer networks, systems and data from unauthorized access through firewalls, secure protocols, intrusion detection and active monitoring.",
    keyAreas: [
      "TCP/IP & Networking Fundamentals",
      "Firewalls & VPN Configuration",
      "Intrusion Detection Systems",
      "Secure Network Architecture",
      "Traffic Analysis & Monitoring",
    ],
  },
  {
    title: "Ethical Hacking Fundamentals",
    desc: "Identifying vulnerabilities through authorized security testing so weaknesses can be discovered and fixed before they become real risks.",
    keyAreas: [
      "Reconnaissance",
      "Vulnerability Assessment",
      "Penetration Testing Basics",
      "Testing Methodologies",
      "Responsible Disclosure",
    ],
  },
  {
    title: "Secure Software Development",
    desc: "Building security into the software development life cycle so applications are designed, tested and maintained with resilience in mind.",
    keyAreas: [
      "OWASP Top 10",
      "Secure Coding Standards",
      "Authentication & Authorization",
      "Input Validation",
      "Security Code Review",
    ],
  },
  {
    title: "Linux Administration",
    desc: "Managing, configuring and securing Linux-based systems through permissions, monitoring, troubleshooting and server hardening.",
    keyAreas: [
      "Shell Scripting",
      "User & Permission Management",
      "Server Configuration",
      "System Monitoring",
      "Security Hardening",
    ],
  },
  {
    title: "Web Application Security",
    desc: "Protecting websites and APIs from common vulnerabilities through secure coding practices, defensive controls and careful testing.",
    keyAreas: [
      "XSS Prevention",
      "CSRF Protection",
      "SQL Injection Mitigation",
      "Session Management",
      "API Security",
    ],
  },
];

export const STATS = [
  { value: "3+", label: "Years of Learning" },
  { value: "15+", label: "Completed Projects" },
  { value: "20+", label: "Technologies Learned" },
  { value: "10+", label: "Academic Achievements" },
];

export const HIGHLIGHTS = [
  "Full-stack web applications",
  "Secure software practices",
  "Automation and testing",
  "Academic project leadership",
];

export const CAPABILITIES = [
  {
    title: "Product-Focused Web Apps",
    desc: "Designing and building responsive dashboards, portals and workflow tools with clean user journeys.",
    points: ["Interface architecture", "Reusable React components", "Responsive delivery"],
  },
  {
    title: "Reliable Backend Systems",
    desc: "Creating practical APIs, data models and authentication flows that support real application needs.",
    points: ["REST API design", "MongoDB and SQL models", "Role-based access"],
  },
  {
    title: "Security-Aware Delivery",
    desc: "Applying secure development habits across forms, sessions, validation and deployment thinking.",
    points: ["OWASP awareness", "Input validation", "Testing mindset"],
  },
];

export const SOCIALS = {
  github: "https://github.com/hasira-nenuka",
  linkedin: "https://www.linkedin.com/in/hasira-nenuka",
  email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=hasiranenuka20896@gmail.com",
};
