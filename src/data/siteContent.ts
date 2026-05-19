export interface NavItem {
  id: string;
  label: string;
}

export type SocialIcon = "linkedin" | "github" | "behance";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  year: string;
  description: string;
  repoUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
}

export interface ActivityItem {
  title: string;
  period: string;
  description: string;
}

export const siteContent = {
  meta: {
    siteTitle: "Avashik Ahamed | Portfolio",
  },

  /** Set to true after adding `public/cv/Avashik-Ahamed-CV.pdf` */
  cvDownloadEnabled: true as boolean,
  /** Resolves correctly with Vite `base: "./"` (e.g. GitHub Pages under a subpath). */
  cvPdfPath: `${import.meta.env.BASE_URL}cv/Avashik-Ahamed-CV.pdf`,

  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ] satisfies NavItem[],

  hero: {
    name: "Avashik Ahamed",
    title: "Software Engineering Undergraduate",
    location: "Rajagiriya, Sri Lanka",
    profileImage: `${import.meta.env.BASE_URL}images/profile.png`,
  },

  summary:
    "A motivated Software Engineering undergraduate with a strong interest in SAP Basis administration, system support, and root cause analysis. Skilled in Linux environments, SQL databases, troubleshooting, deployment workflows, and analytical problem-solving. Experienced in identifying system issues, validating data, and supporting operational workflows through academic and personal projects. Eager to contribute to enterprise system reliability, incident resolution, and IT operations.",

  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/avashik",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/kishava",
      icon: "github",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/avashikahamed",
      icon: "behance",
    },
  ] satisfies SocialLink[],

  skills: [
    {
      title: "Programming & Development",
      items: [
        "C#",
        "Python",
        "JavaScript",
        "Node.js",
        "HTML/CSS",
        "Java (Basics)",
        "REST APIs",
      ],
    },
    {
      title: "Databases",
      items: ["MySQL", "SQL Server"],
    },
    {
      title: "Data & Analytics",
      items: [
        "Python (pandas, scikit-learn)",
        "Power BI",
        "Data Analysis",
        "Excel",
      ],
    },
    {
      title: "Tools & Technologies",
      items: [
        "Selenium",
        "Playwright",
        "Git",
        "Jupyter Notebook",
        "Office 365",
        "Linux",
      ],
    },
    {
      title: "Security & Networking",
      items: [
        "Networking Fundamentals",
        "Basic Cyber Security Concepts",
        "System Troubleshooting",
        "Data Protection",
        "Vulnerability Awareness",
        "Secure Development Practices",
        "Monitoring",
      ],
    },
    {
      title: "Core Competencies",
      items: [
        "Analytical Thinking",
        "Problem Solving",
        "Attention to Detail",
        "Communication Skills",
        "Team Collaboration",
        "Project Planning",
      ],
    },
  ] satisfies SkillCategory[],

  projects: [
    {
      title: "Used Car Price Prediction for ikman.lk",
      year: "2025",
      description:
        "Engineered a regression pipeline for real-time price suggestions with a Mean Absolute Error of approximately LKR 130,000. Implemented data preprocessing and diagnostic visualizations to optimize model performance.",
      repoUrl: "https://github.com/kishava/CarPrice-PredictionModel",
    },
    {
      title: "EcoRide Bicycle Rentals Website",
      year: "2025",
      description:
        "Full-stack web application with RESTful APIs and a MySQL backend. Deployed using InfinityZero, handling build configuration, deployment, and basic troubleshooting in a live environment.",
      repoUrl: "https://github.com/kishava/EcoRide-BikeRental",
    },
    {
      title: "North Sussex Judo Fee Calculator",
      year: "2024",
      description:
        "Fee calculator enforcing business rules and generating PDF reports. Modular algorithm design, input validation, and testing.",
      repoUrl: "https://github.com/kishava/FeeCalculator-for-JUDO",
    },
    {
      title: "Student Management System — Skills International",
      year: "2023",
      description:
        "Secure C# Windows Forms application integrated with SQL Server. Full CRUD operations and automated reporting for administrative use.",
      repoUrl: "https://github.com/kishava/Skills-International-",
    },
  ] satisfies Project[],

  experience: [
    {
      role: "Data Entry Operator",
      company: "Marjans Marketing",
      period: "August 2022 – December 2023",
      highlights: [
        "Maintained and validated operational datasets to ensure data accuracy.",
        "Assisted in preparing structured reports for management decision-making.",
        "Identified inconsistencies and supported resolution of data-related issues.",
        "Collaborated with cross-functional teams to improve workflow efficiency.",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      qualification: "BTEC Higher National Diploma in Computing",
      institution: "Saegis Campus",
      period: "June 2024 – December 2025 (Expected)",
    },
    {
      qualification: "Advanced Certificate in HRM (Human Resource Management)",
      institution: "Open University of Sri Lanka",
      period: "2023 – 2024",
    },
    {
      qualification: "Diploma in Information Technology",
      institution: "Esoft Metro Campus",
      period: "2023 – 2024",
    },
  ] satisfies EducationItem[],

  certifications: [
    "SoloLearn SQL Certificate",
    "AWS Academy Cloud Programme (In Progress)",
  ],

  activities: [
    {
      title: "Assistant Secretary, Rotaract Club of Saegis Campus",
      period: "2025 – Present",
      description:
        "Coordinated team activities, managed communications, and supported event planning and execution.",
    },
    {
      title: "Chief Editor, Lingua Lounge (English Club)",
      period: "2025 – Present",
      description:
        "Led content planning, managed deadlines, and coordinated with multiple contributors to ensure timely delivery.",
    },
    {
      title: "Chief Editor, ICT Club of Saegis Campus",
      period: "2025 – Present",
      description:
        "Editorial leadership for ICT club communications and publications.",
    },
    {
      title: "Member, AIESEC, Saegis Campus",
      period: "2025 – Present",
      description:
        "Active member contributing to campus initiatives and programmes.",
    },
    {
      title: "Certified Sharpshooter, Academic Air Arms Association",
      period: "2025",
      description: "Recognized proficiency in academic shooting sports.",
    },
  ] satisfies ActivityItem[],

  languages: ["English", "Tamil", "Sinhala"],

  contact: {
    email: "avashik529@gmail.com",
    phoneDisplay: "+94 75 278 7835",
    phoneHref: "tel:+94752787835",
  },

  refereesNote: "Available upon request.",
} as const;
