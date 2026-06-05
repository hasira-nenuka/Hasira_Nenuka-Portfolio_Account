export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#certs", label: "Achievements" },
  { href: "#security", label: "Cyber Security" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Python"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"] },
  { group: "Other Knowledge", items: ["REST APIs", "OOP", "Data Structures", "Algorithms", "Database Design", "Agile Development"] },
];

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Academic";

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
    description: "A complete platform to manage internships, career opportunities, applications, approvals, communication and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: ["Full Stack", "Academic"],
    github: "https://github.com/hasira-nenuka/university_internship_career_management_system",
    demo: "#",
    gradient: "from-blue-500/30 to-purple-500/30",
    image: "/University%20internship%20and%20career%20management%20system.png",
  },
  {
    title: "Automated Language Conversion Tests",
    description: "Playwright UI automation suite for Singlish and Thanglish to Sinhala and Tamil language conversion testing.",
    tech: ["Playwright", "TypeScript", "Node.js", "GitHub Actions"],
    category: ["Academic"],
    github: "#",
    gradient: "from-emerald-500/30 to-cyan-500/30",
    image: "/Automated%20language%20conversion%20test.png",
  },
  {
    title: "Facilities Halls Booking System",
    description: "A campus facilities platform for hall bookings, maintenance requests, ticket tracking, approvals and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack", "Academic"],
    github: "#",
    demo: "#",
    gradient: "from-indigo-500/30 to-blue-500/30",
    image: "/Facilities%20halls%20booking%20system.png",
  },
  {
    title: "Helpdesk Management System",
    description: "A complete ticket support system with user and admin dashboards, ticket assignment, PDF exports and REST API endpoints.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: ["Full Stack"],
    github: "https://github.com/hasira-nenuka/HelpdeskManagementSystem",
    demo: "#",
    gradient: "from-violet-500/30 to-indigo-500/30",
    image: "/Helpdesk%20management%20system.png",
  },
  {
    title: "MERN Application",
    description: "A full-stack MERN application that manages orders, inventory, finance, support/helpdesk and navigation integrations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Full Stack"],
    github: "https://github.com/hasira-nenuka/Ama-MERN",
    demo: "#",
    gradient: "from-fuchsia-500/30 to-pink-500/30",
    image: "/MERN%20application.png",
  },
  {
    title: "Test Automation Assignment",
    description: "Exploration of automation testing types — unit, integration, performance, regression, smoke and API testing.",
    tech: ["Selenium", "Java", "TestNG"],
    category: ["Academic"],
    github: "#",
    gradient: "from-cyan-500/30 to-blue-500/30",
    image: "/Test%20Automation%20Assignment.jpg",
  },
];

export const PROJECT_FILTERS: (ProjectCategory | "All")[] = ["All", "Frontend", "Backend", "Full Stack", "Academic"];

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
  { title: "University Coursework Projects", org: "Software Engineering Department", year: "2023 – Present" },
  { title: "Programming Certifications", org: "Oracle / Microsoft Learn", year: "2024" },
  { title: "Online Learning Certificates", org: "Coursera • Udemy", year: "2023 – 2024" },
  { title: "Extra Skills", org: "Sports • Additional Skill Certificates", year: "2023 – 2024" },
  { title: "Workshops", org: "Industry Tech Talks", year: "2023 – 2024" },
];

export const SECURITY_INTERESTS = [
  {
    title: "Network Security",
    desc: "Network Security focuses on protecting computer networks, systems, and data from unauthorized access, cyber threats, and attacks. It involves firewalls, secure communication protocols, intrusion detection systems, and network monitoring techniques to maintain confidentiality, integrity, and availability.",
    keyAreas: [
      "TCP/IP & Networking Fundamentals",
      "Firewalls & VPN Configuration",
      "Intrusion Detection & Prevention Systems",
      "Secure Network Architecture",
      "Traffic Analysis & Monitoring",
    ],
  },
  {
    title: "Ethical Hacking Fundamentals",
    desc: "Ethical Hacking involves identifying vulnerabilities in systems and applications through authorized security testing. It helps organizations discover weaknesses before malicious attackers can exploit them, improving overall cybersecurity posture.",
    keyAreas: [
      "Reconnaissance & Information Gathering",
      "Vulnerability Assessment",
      "Penetration Testing Basics",
      "Security Testing Methodologies",
      "Responsible Disclosure Practices",
    ],
  },
  {
    title: "Secure Software Development",
    desc: "Secure Software Development integrates security principles throughout the Software Development Life Cycle. The goal is to design, develop, test, and maintain applications that are resilient against modern cyber threats and common vulnerabilities.",
    keyAreas: [
      "OWASP Top 10 Security Risks",
      "Secure Coding Standards",
      "Authentication & Authorization",
      "Input Validation & Data Protection",
      "Security Testing & Code Review",
    ],
  },
  {
    title: "Linux Administration",
    desc: "Linux Administration focuses on managing, configuring, and securing Linux-based systems and servers. It includes user management, system monitoring, permission handling, and server hardening to ensure reliable and secure operations.",
    keyAreas: [
      "Linux Commands & Shell Scripting",
      "User & Permission Management",
      "Server Configuration",
      "System Monitoring & Troubleshooting",
      "Security Hardening Techniques",
    ],
  },
  {
    title: "Web Application Security",
    desc: "Web Application Security involves protecting websites and web applications from common cyber threats and vulnerabilities. It focuses on secure coding practices and defensive mechanisms to safeguard user data and application functionality.",
    keyAreas: [
      "Cross-Site Scripting Prevention",
      "Cross-Site Request Forgery Protection",
      "SQL Injection Mitigation",
      "Secure Authentication & Session Management",
      "API & Application Security",
    ],
  },
];

export const STATS = [
  { value: "3+", label: "Years of Learning" },
  { value: "15+", label: "Completed Projects" },
  { value: "20+", label: "Technologies Learned" },
  { value: "10+", label: "Academic Achievements" },
];

export const SOCIALS = {
  github: "https://github.com/hasira-nenuka",
  linkedin: "https://linkedin.com/",
  email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=hasiranenuka20896@gmail.com",
};
