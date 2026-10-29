/**
 * Central Portfolio Data Configuration for Abdul Rahman
 * 
 * 💡 HOW TO CUSTOMIZE:
 * Everything is organized here in one place. You can update your bio, social links,
 * phone number, project details, skills, and certifications directly in this file.
 */

export interface PersonalInfo {
  name: string;
  role: string;
  university: string;
  degree: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  linkedinUrl: string;
  githubUrl: string;
  cvUrl: string;
  profilePhoto: string;
  headline: string;
  subheadline: string;
  supportingText: string;
  aboutText: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  institutionAbbr: string;
  status: string;
  location: string;
  startYear: string;
  expectedGraduation: string;
  relevantCoursework: string[];
  description: string;
}

export type SkillLevel = 'Learning' | 'Practicing' | 'Familiar' | 'Hands-on Lab';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export type LearningStatus = 'Completed Course' | 'Practicing in Lab' | 'Currently Learning';

export interface CourseTrack {
  id: string;
  title: string;
  provider: string;
  status: LearningStatus;
  statusColor: string;
  completionDate?: string;
  isPrimary?: boolean;
  description: string;
  topics: { name: string; status: 'Completed' | 'Practicing' | 'Learning' }[];
  keyTakeaways: string[];
  certificateUrl?: string;
  certificateImage?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Cybersecurity' | 'Artificial Intelligence' | 'Data Analytics' | 'Graphic Design' | 'Web Development' | 'WordPress Websites';
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    objectives: string[];
    technicalDetails: string[];
    outcomes: string[];
  };
  isLive?: boolean;
  statusText?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  scope: string[];
  ethicalNote?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId?: string;
  verificationLink?: string;
  skillsCovered: string[];
  status: 'Verified' | 'In Progress' | 'Upcoming';
}

export const portfolioData = {
  personal: {
    name: "Abdul Rahman",
    role: "BS Information Technology Student | Cybersecurity Learner | AI Enthusiast | Data Analytics & Web Development",
    university: "Government College University Faisalabad (GCUF)",
    degree: "BS Information Technology",
    location: "Faisalabad, Pakistan",
    email: "abdulrahman245441@gmail.com",
    phone: "+92 300 0000000", // EDIT_ME: Replace with your actual phone number
    whatsappNumber: "+92 300 0000000", // EDIT_ME: Replace with your WhatsApp number
    whatsappLink: "https://wa.me/923000000000?text=Hi%20Abdul%20Rahman,%20I%20saw%20your%20portfolio",
    linkedinUrl: "https://linkedin.com/in/abdul-rahman", // EDIT_ME: Add your LinkedIn profile URL
    githubUrl: "https://github.com/abdulrahman", // EDIT_ME: Add your GitHub profile URL
    cvUrl: "/assets/Abdul_Rahman_CV.pdf", // EDIT_ME: Place your actual CV PDF in the public folder
    profilePhoto: "/assets/aistudio/sky_blue_61a97fd8.jpg",
    headline: "Building a Smarter, Safer Digital Future.",
    subheadline: "I'm Abdul Rahman, a BS Information Technology student passionate about Cybersecurity, Artificial Intelligence, Data Analytics, Graphic Design, and Modern Web Development.",
    supportingText: "I explore technology, develop practical digital solutions, and continuously improve my skills to help individuals and businesses grow in the digital world.",
    aboutText: [
      "I am an undergraduate Information Technology student at Government College University Faisalabad (GCUF) driven by a genuine passion for digital security, artificial intelligence, and modern web systems.",
      "Rather than claiming unverified enterprise titles, I focus on disciplined learning, hands-on lab experimentation, and building tangible digital assets. My journey combines technical rigor—such as networking topologies, Linux fundamentals, and defensive ethical hacking concepts—with practical creator skills like custom WordPress design, responsive frontend development, and data-driven reporting.",
      "I am actively seeking internship opportunities, collaborative freelance projects, and mentorship where I can contribute my enthusiasm, fast learning ability, and dedication to building reliable digital solutions."
    ]
  } as PersonalInfo,

  education: {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Government College University Faisalabad (GCUF)",
    institutionAbbr: "GCUF",
    status: "Currently Studying (Undergraduate)",
    location: "Faisalabad, Punjab, Pakistan",
    startYear: "2023",
    expectedGraduation: "2027",
    relevantCoursework: [
      "Computer Networks & Data Communications",
      "Operating Systems (Windows & Linux)",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Web Technologies & Systems",
      "Information Security Fundamentals"
    ],
    description: "Pursuing a comprehensive curriculum encompassing foundational computing, modern systems administration, networking protocols, and application design with an emphasis on practical lab exercises and academic discipline."
  } as EducationInfo,

  learningTracks: [
    {
      id: "cybersecurity",
      title: "Cyber Security & Ethical Hacking",
      provider: "Academic Labs & Hands-on Cybersecurity Curriculum",
      status: "Practicing in Lab",
      statusColor: "emerald",
      isPrimary: true,
      description: "My primary technical focus. Exploring defensive security protocols, network vulnerability discovery in controlled virtual environments, and secure systems administration.",
      topics: [
        { name: "Cybersecurity Fundamentals & Threat Landscapes", status: "Completed" },
        { name: "Networking Fundamentals & OSI/TCP-IP Protocols", status: "Completed" },
        { name: "Operating Systems, Linux Command Line & Windows Administration", status: "Practicing" },
        { name: "Ethical Hacking Concepts & Reconnaissance", status: "Practicing" },
        { name: "Vulnerability Awareness & OWASP Top 10 Security Risks", status: "Learning" },
        { name: "Defensive Security & Safe Virtual Lab Practice", status: "Practicing" }
      ],
      keyTakeaways: [
        "Strict adherence to legal, authorized, and defensive lab experimentation.",
        "Deep familiarity with Wireshark packet capture, Nmap scanning, and Linux permissions.",
        "Committed to security-first practices across websites and server infrastructure."
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence & Prompt Engineering",
      provider: "Self-Paced Specialization & Applied AI Workshops",
      status: "Practicing in Lab",
      statusColor: "indigo",
      description: "Harnessing cutting-edge generative AI models, smart productivity workflows, and AI-assisted engineering to solve real problems faster.",
      topics: [
        { name: "Artificial Intelligence Fundamentals & Model Architecture Concepts", status: "Completed" },
        { name: "AI-Powered Productivity Tools & Automation Workflows", status: "Completed" },
        { name: "Generative AI Fundamentals & Multimodal Prompts", status: "Practicing" },
        { name: "AI-Assisted Web & Software Development", status: "Practicing" },
        { name: "AI Applications for Content, Business & Daily Productivity", status: "Learning" }
      ],
      keyTakeaways: [
        "Prompt engineering for coding, research synthesis, and rapid prototype generation.",
        "Automating repetitive workflows using modern LLM APIs and tools."
      ]
    },
    {
      id: "analytics",
      title: "Data Analytics & Business Intelligence",
      provider: "Applied Business Computing & Data Visualization",
      status: "Practicing in Lab",
      statusColor: "blue",
      description: "Transforming raw data into clear, actionable business insights through structured data cleaning, dynamic PivotTables, and visual dashboarding.",
      topics: [
        { name: "Microsoft Excel: Advanced Formulas & Data Cleaning", status: "Completed" },
        { name: "Data Organization, Filtering & Sorting Best Practices", status: "Completed" },
        { name: "PivotTables, Dynamic Ranges & Summary Reports", status: "Practicing" },
        { name: "Data Visualization & Executive KPI Charting", status: "Practicing" },
        { name: "Business Intelligence Fundamentals & Decision Support", status: "Learning" }
      ],
      keyTakeaways: [
        "Structured spreadsheets that prevent data validation errors.",
        "Visual storytelling through clean charts that guide executive decisions."
      ]
    },
    {
      id: "graphic-design",
      title: "Graphic Designing & Visual Branding",
      provider: "Creative Studio Practice & Digital Media",
      status: "Completed Course",
      statusColor: "purple",
      description: "Crafting modern visual communication, brand collateral, social media creative assets, and crisp marketing visuals.",
      topics: [
        { name: "Visual Design Hierarchy, Spacing & Composition", status: "Completed" },
        { name: "Social Media Graphics & Campaign Templates", status: "Completed" },
        { name: "Branding Concepts, Color Theory & Typographic Harmony", status: "Completed" },
        { name: "Marketing Collateral & Promotional Banners", status: "Practicing" }
      ],
      keyTakeaways: [
        "Design consistency across multiple digital and print channels.",
        "Balance of readability, aesthetics, and clear call-to-actions."
      ]
    },
    {
      id: "web-dev",
      title: "Web Development & Frontend Engineering",
      provider: "Modern Web Standards & Interactive Coding",
      status: "Practicing in Lab",
      statusColor: "sky",
      description: "Building responsive, fast, and accessible user interfaces using clean semantic HTML5, modern CSS/Tailwind, and JavaScript basics.",
      topics: [
        { name: "Semantic HTML5 Structure & Accessibility (a11y)", status: "Completed" },
        { name: "CSS3 Flexbox, Grid & Responsive Mobile Design", status: "Completed" },
        { name: "Modern Styling Frameworks (Tailwind CSS)", status: "Completed" },
        { name: "JavaScript Fundamentals & DOM Manipulation", status: "Practicing" },
        { name: "Component-Driven Architecture & SPA Integration", status: "Learning" }
      ],
      keyTakeaways: [
        "Mobile-first responsive layouts that adapt smoothly to any viewport.",
        "Performance optimization, fast load times, and clean modular code."
      ]
    },
    {
      id: "wordpress",
      title: "WordPress & AI Website Building",
      provider: "CMS Architecture & Rapid Site Deployment",
      status: "Completed Course",
      statusColor: "violet",
      description: "Deploying high-converting business websites, portfolios, and landing pages with custom themes, plugins, and AI-accelerated workflows.",
      topics: [
        { name: "WordPress CMS Setup, Hosting & Security Hardening", status: "Completed" },
        { name: "Theme Customization & Responsive Page Builders", status: "Completed" },
        { name: "AI-Assisted Content Strategy & Site Layouts", status: "Completed" },
        { name: "High-Converting Landing Pages & Lead Capture Forms", status: "Practicing" },
        { name: "SEO Basics, Speed Optimization & Site Backups", status: "Practicing" }
      ],
      keyTakeaways: [
        "Quick turn-around for functional, client-ready business portals.",
        "Security-conscious plugin selection and site maintenance routines."
      ]
    }
  ] as CourseTrack[],

  skills: [
    {
      category: "Cybersecurity",
      description: "Defensive concepts, network analysis, and secure configurations in virtual labs.",
      skills: [
        { name: "Cybersecurity Fundamentals", level: "Practicing", highlight: true },
        { name: "Ethical Hacking Concepts", level: "Practicing", highlight: true },
        { name: "Networking (TCP/IP, OSI, DNS, Subnetting)", level: "Practicing" },
        { name: "Linux Basics & Terminal Administration", level: "Practicing" },
        { name: "Virtual Lab Setup (VMware / VirtualBox)", level: "Hands-on Lab" },
        { name: "Vulnerability Scanning Awareness", level: "Learning" }
      ]
    },
    {
      category: "Artificial Intelligence",
      description: "Modern AI utilities, prompt techniques, and developer automation.",
      skills: [
        { name: "Generative AI Tools & LLM Workflows", level: "Practicing", highlight: true },
        { name: "AI-Assisted Coding & Problem Solving", level: "Practicing" },
        { name: "Prompt Engineering & Task Orchestration", level: "Practicing" },
        { name: "AI Productivity & Automation", level: "Familiar" }
      ]
    },
    {
      category: "Data Analytics",
      description: "Spreadsheet mastery, data tidying, and business reporting.",
      skills: [
        { name: "Microsoft Excel (Formulas, PivotTables)", level: "Practicing", highlight: true },
        { name: "Data Cleaning & Organization", level: "Practicing" },
        { name: "Data Visualization & KPI Charts", level: "Practicing" },
        { name: "Business Intelligence Fundamentals", level: "Learning" }
      ]
    },
    {
      category: "Design",
      description: "Visual identity, creative layouts, and marketing assets.",
      skills: [
        { name: "Graphic Design & Composition", level: "Familiar", highlight: true },
        { name: "Visual Communication & Layouts", level: "Practicing" },
        { name: "Social Media Creative Templates", level: "Practicing" },
        { name: "Branding Concepts & Color Schemes", level: "Familiar" }
      ]
    },
    {
      category: "Web Development",
      description: "Modern frontend web technologies and responsive coding.",
      skills: [
        { name: "HTML5 Semantic Architecture", level: "Practicing", highlight: true },
        { name: "CSS3 / Modern Tailwind CSS", level: "Practicing", highlight: true },
        { name: "Responsive Mobile-First Design", level: "Practicing" },
        { name: "JavaScript Fundamentals", level: "Learning" }
      ]
    },
    {
      category: "WordPress & AI Websites",
      description: "Content management systems, custom landing pages, and rapid builds.",
      skills: [
        { name: "WordPress CMS Deployment", level: "Practicing", highlight: true },
        { name: "Website Customization & Theming", level: "Practicing" },
        { name: "AI-Assisted Website Building", level: "Practicing" },
        { name: "Landing Page Structure & UX", level: "Practicing" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-portfolio",
      title: "Personal Professional Portfolio",
      category: "Web Development",
      description: "A fast, fully responsive, dark-mode personal branding web platform crafted with React, TypeScript, and modern Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      image: "/assets/aistudio/sky_blue_61a97fd8.jpg",
      isLive: true,
      statusText: "Current Live Site",
      demoUrl: "#",
      githubUrl: "https://github.com/abdulrahman/personal-portfolio",
      caseStudy: {
        overview: "Designed and engineered as a central digital hub for academic and professional branding, showcasing projects, verifiable coursework, and contact channels.",
        objectives: [
          "Provide zero-pill, human-crafted clean typography and responsive layout.",
          "Centralize all personal data into one easily maintainable configuration.",
          "Offer dark/light mode toggle and interactive project case study modals.",
          "Ensure high accessibility, fast rendering, and clean presentation for recruiters."
        ],
        technicalDetails: [
          "Engineered using React 19, TypeScript strict mode, and Tailwind CSS v4.",
          "Client-side photo upload simulation with local storage persistence.",
          "Single-source data flow powering dynamic filters and case studies.",
          "Accessible semantic landmarking and responsive touch controls."
        ],
        outcomes: [
          "High performance with instantaneous page interactions.",
          "Direct contact links with validated email dispatch workflows.",
          "Scalable structure ready for future project additions."
        ]
      }
    },
    {
      id: "project-cybersecurity",
      title: "Cybersecurity Learning Lab & Defense Practice",
      category: "Cybersecurity",
      description: "Virtual lab setup simulating enterprise networking, defensive vulnerability scanning, and secure Linux server hardening.",
      technologies: ["Linux Terminal", "Wireshark", "Nmap", "VirtualBox", "Bash Scripting"],
      image: "/src/assets/images/project_cybersecurity_lab_1793249837159.jpg",
      statusText: "Hands-on Lab Simulation",
      demoUrl: "#",
      githubUrl: "https://github.com/abdulrahman/cybersecurity-lab-notes",
      caseStudy: {
        overview: "A dedicated hands-on virtualized laboratory environment created to practice ethical hacking concepts, port mapping, and defensive security measures under strict authorization.",
        objectives: [
          "Configure isolated virtual local area networks with vulnerable test nodes.",
          "Conduct detailed network reconnaissance using Nmap service and OS detection.",
          "Analyze packet traces using Wireshark to understand cleartext protocol hazards.",
          "Implement defensive firewall rules and restrict root access on Linux systems."
        ],
        technicalDetails: [
          "Host-only network topology isolating target machine from internet access.",
          "Command-line analysis of system authorization logs (/var/log/auth.log).",
          "Verification of SSH key-based authentication replacing weak passwords.",
          "Documented playbooks detailing common configuration weaknesses."
        ],
        outcomes: [
          "Solidified foundational knowledge of TCP/IP handshakes and common port services.",
          "Strict adherence to safe, defensive, non-intrusive computing guidelines."
        ]
      }
    },
    {
      id: "project-analytics",
      title: "Business Intelligence & Sales Analytics Dashboard",
      category: "Data Analytics",
      description: "Interactive Excel-based data intelligence model featuring automated PivotTables, KPI tracking, and dynamic visual graphs.",
      technologies: ["Microsoft Excel", "PivotTables", "Data Modeling", "KPI Visualization"],
      image: "/src/assets/images/project_analytics_dashboard_1793249837839.jpg",
      statusText: "Completed Analytical Model",
      demoUrl: "#",
      githubUrl: "https://github.com/abdulrahman/excel-bi-dashboard",
      caseStudy: {
        overview: "Created a structured analytical dashboard model to clean over 5,000 raw sales and revenue records, organizing them into executive summary cards and interactive charts.",
        objectives: [
          "Standardize disparate dates, product categories, and currency values.",
          "Build reusable PivotTables tracking monthly revenue growth and region performance.",
          "Design high-contrast visual charts that convey insights in under 5 seconds.",
          "Eliminate manual calculations through dynamic formulas (INDEX/MATCH, XLOOKUP)."
        ],
        technicalDetails: [
          "Multi-sheet architecture separating raw data, calculation grids, and display UI.",
          "Data validation rules preventing incorrect data entry formats.",
          "Conditional formatting alerting managers to sub-target regional performance.",
          "Custom visual theme harmonized with corporate color palettes."
        ],
        outcomes: [
          "Transformed unorganized spreadsheet records into a cohesive executive view.",
          "Demonstrated practical competence in business-focused data analysis."
        ]
      }
    },
    {
      id: "project-wordpress",
      title: "Modern WordPress Business & Agency Website",
      category: "WordPress Websites",
      description: "A clean, high-converting business portal with structured service landing pages, contact inquiry pipelines, and mobile optimization.",
      technologies: ["WordPress CMS", "Page Builders", "Responsive CSS", "SEO Basics"],
      image: "/src/assets/images/project_wordpress_business_1793249836906.jpg",
      statusText: "Client Prototype Template",
      demoUrl: "#",
      githubUrl: "https://github.com/abdulrahman/wordpress-business-theme",
      caseStudy: {
        overview: "Designed and developed a corporate website prototype for an IT consultancy, prioritizing lightning-fast loading speeds, clear call-to-actions, and modern aesthetics.",
        objectives: [
          "Deliver an intuitive navigation structure for services, about, and quotation requests.",
          "Ensure flawless layout responsiveness across smartphones, tablets, and desktops.",
          "Integrate contact lead forms with server-side validation and anti-spam measures.",
          "Apply on-page SEO best practices (meta descriptions, image alt tags, heading hierarchy)."
        ],
        technicalDetails: [
          "Custom styling overrides applied to modern lightweight WordPress themes.",
          "Asset optimization resulting in quick first-contentful-paint times.",
          "Secure user privilege management and automated backup scheduling.",
          "Mobile touch-friendly menus and readable typography."
        ],
        outcomes: [
          "Provides a turnkey, professional template ready for business deployment.",
          "Hands-on demonstration of practical CMS client delivery."
        ]
      }
    },
    {
      id: "project-graphic",
      title: "Visual Brand Identity & Social Media Creative Suite",
      category: "Graphic Design",
      description: "Comprehensive creative package featuring minimalist logo concepts, promotional social media banners, and cohesive brand collateral.",
      technologies: ["Graphic Design", "Typography", "Visual Branding", "Color Theory"],
      image: "/src/assets/images/project_graphic_branding_1793249837746.jpg",
      statusText: "Design Portfolio Showcase",
      demoUrl: "#",
      caseStudy: {
        overview: "Curated brand identity design system established for a modern sustainable goods startup, establishing consistent visual guidelines across print and digital media.",
        objectives: [
          "Create a memorable, versatile geometric brand mark with clean typography.",
          "Define an accessible color palette and systematic typography hierarchy.",
          "Design ready-to-post social media templates optimized for Instagram and LinkedIn.",
          "Produce high-fidelity stationery mockups for client presentations."
        ],
        technicalDetails: [
          "Harmonious 60-30-10 color balance utilizing natural earthy tones and gold accents.",
          "Export specifications tailored for high-DPI print and compressed web media.",
          "Grid-based layout templates providing reusable structure for social posts."
        ],
        outcomes: [
          "Complete brand guideline document ready for real-world marketing campaigns.",
          "Demonstrated aesthetic sensibility and attention to visual detail."
        ]
      }
    },
    {
      id: "project-ai",
      title: "AI-Assisted Workflow & Automation Prototype",
      category: "Artificial Intelligence",
      description: "Productivity system leveraging structured prompt engineering and automated text processing to assist research and content synthesis.",
      technologies: ["Prompt Engineering", "Large Language Models", "Workflow Automation", "Markdown"],
      image: "/src/assets/images/project_analytics_dashboard_1793249837839.jpg",
      statusText: "Automation Prototype",
      demoUrl: "#",
      githubUrl: "https://github.com/abdulrahman/ai-workflow-scripts",
      caseStudy: {
        overview: "Developed a series of structured prompt templates and automation routines designed to parse technical documentation, summarize security bulletins, and draft executive digests.",
        objectives: [
          "Engineer multi-step prompt chains that minimize hallucinations and improve accuracy.",
          "Automate repetitive document summarization for IT coursework and technology articles.",
          "Generate structured JSON data outputs from unstructured text feeds."
        ],
        technicalDetails: [
          "Few-shot prompt formatting with explicit boundaries and constraints.",
          "Temperature and token tuning for analytical precision versus creative drafting.",
          "Markdown report output formatting ready for immediate sharing."
        ],
        outcomes: [
          "Significantly accelerated research synthesis speed for technical coursework.",
          "Deepened practical understanding of modern LLM capabilities and limits."
        ]
      }
    }
  ] as ProjectItem[],

  services: [
    {
      id: "service-wordpress",
      title: "WordPress Website Creation",
      category: "Web Development",
      description: "End-to-end setup of professional WordPress websites tailored for businesses, agencies, and personal brands with clean responsive layouts.",
      scope: [
        "Domain & hosting configuration guidance",
        "Clean theme selection and responsive customization",
        "Essential plugin integration (security, forms, caching)",
        "Mobile-first responsive optimization"
      ]
    },
    {
      id: "service-ai-web",
      title: "AI-Assisted Website Building",
      category: "Web & AI",
      description: "Accelerated website production leveraging modern AI tools for rapid layout prototyping, copywriting enhancement, and clean code generation.",
      scope: [
        "Rapid prototyping and wireframe iteration",
        "AI-assisted code generation & styling refinement",
        "Structured content generation and optimization",
        "Deployment to modern web hosting platforms"
      ]
    },
    {
      id: "service-business-portfolio",
      title: "Business & Portfolio Websites",
      category: "Web Development",
      description: "Custom portfolios and corporate landing sites designed to establish a memorable online presence and convert visitors into clients.",
      scope: [
        "Modern dark or light aesthetic with high legibility",
        "Project showcase galleries and case study modals",
        "Interactive contact forms and social links",
        "Fast loading speeds with zero bloat"
      ]
    },
    {
      id: "service-landing-page",
      title: "Landing Page Design",
      category: "Design & Web",
      description: "Focused, high-impact single-page designs crafted specifically for marketing campaigns, service launches, or product announcements.",
      scope: [
        "Clear value proposition headlines and hero layouts",
        "Structured feature breakdowns and social proof sections",
        "Prominent call-to-action buttons and inquiry triggers",
        "Cross-browser testing across desktop and mobile"
      ]
    },
    {
      id: "service-graphics",
      title: "Graphic Design & Social Media Creatives",
      category: "Creative Design",
      description: "Eye-catching visual designs for social media campaigns, brand logos, promotional banners, and marketing materials.",
      scope: [
        "Custom Instagram, LinkedIn, and Facebook post templates",
        "Minimalist logo concepts and brand guidelines",
        "Promotional digital banners and flyer graphics",
        "Consistent typographic and color styling"
      ]
    },
    {
      id: "service-excel",
      title: "Excel Data Organization & Basic Reporting",
      category: "Data Analytics",
      description: "Transforming disorganized spreadsheets into clean, structured datasets with automated summaries, formulas, and visual charts.",
      scope: [
        "Data cleaning, deduplication, and formatting",
        "Automated PivotTables and summary matrices",
        "Visual bar, trend, and distribution charts",
        "Easy-to-use template structure for non-technical teams"
      ]
    },
    {
      id: "service-ai-tools",
      title: "AI Tools Setup & Productivity Workflows",
      category: "Artificial Intelligence",
      description: "Practical consultation and setup of everyday AI tools to help students and small businesses automate routine tasks and write better content.",
      scope: [
        "Effective prompt engineering templates for your field",
        "Integration of AI writing and coding assistants",
        "Document summarization and research workflows",
        "Responsible and ethical AI usage guidelines"
      ]
    }
  ] as ServiceItem[],

  certifications: [
    {
      id: "cert-cyber",
      title: "Cybersecurity & Ethical Hacking Lab Certification",
      issuingOrganization: "Hands-on Academic Coursework / Lab Training",
      issueDate: "2024 (In Progress)",
      credentialId: "AR-SEC-LAB-2024",
      skillsCovered: ["Network Security", "Linux Terminal", "Nmap Scanning", "Defense in Depth"],
      status: "In Progress"
    },
    {
      id: "cert-analytics",
      title: "Data Analytics & Excel Spreadsheet Specialization",
      issuingOrganization: "Practical Business Computing Coursework",
      issueDate: "2024",
      credentialId: "AR-DATA-EXCEL-01",
      skillsCovered: ["Microsoft Excel", "PivotTables", "Data Cleaning", "Data Visualization"],
      status: "Verified"
    }
  ] as CertificateItem[]
};
