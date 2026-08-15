export const programsData = {
  development: {
    id: "development",
    title: "Development Program – Full-Stack Web & App Careers",
    badge: "Engineering Career Track",
    subheading: "Learn front-end, back-end, full-stack, and mobile app development to build production-grade products and qualify for in-demand developer roles.",
    overview: "The Development Program is a structured path engineered to take you from foundational syntax to building scalable, full-stack architectures. You will build real-world web and mobile applications, design secure REST APIs, manage databases, practice version control, and prepare for technical interviews.",
    roles: [
      {
        title: "Front-End Developer",
        desc: "Build responsive, accessible, and high-performance user interfaces using React, JavaScript/TypeScript, and modern styling frameworks.",
        requirements: "HTML5/CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Git/GitHub, Responsive Design"
      },
      {
        title: "Back-End Developer",
        desc: "Architect server-side logic, database schemas, and secure API endpoints to power modern web and mobile applications.",
        requirements: "Node.js/Express or Python, SQL/NoSQL Databases, Authentication (JWT), RESTful API Design"
      },
      {
        title: "Full-Stack Developer",
        desc: "Own features end-to-end—from frontend state management and UX to database modeling and cloud deployment.",
        requirements: "MERN Stack / Full-Stack Python, API Integration, Database Optimization, CI/CD Basics"
      },
      {
        title: "Mobile App Developer",
        desc: "Develop cross-platform mobile apps for Android and iOS using modern frameworks and cloud backend services.",
        requirements: "Flutter / React Native, State Management, Mobile UI/UX, REST API Consumption"
      }
    ],
    salary: {
      entry: "₹4.0 – 7.0 LPA",
      mid: "₹7.0 – 14.0 LPA",
      senior: "₹14.0 – 22.0+ LPA",
      note: "Salary figures are indicative estimates based on current Indian tech market data. Actual compensation depends on practical portfolio quality, problem-solving ability, company tier, and location."
    },
    skills: [
      "HTML5, CSS3 & Modern JavaScript (ES6+)",
      "React.js Component Architecture & Hooks",
      "Node.js, Express & Server-Side APIs",
      "Relational (PostgreSQL/MySQL) & NoSQL (MongoDB) Databases",
      "Authentication, Authorization & Security Best Practices",
      "Git, GitHub & Team Workflow Etiquette"
    ],
    mappedCourses: [
      {
        id: "full-stack-web-dev",
        title: "Full-Stack Web Development",
        duration: "6 Months",
        level: "Beginner to Advanced",
        highlights: ["React.js & Node.js ecosystem", "4+ Industry portfolio projects", "Live mentor-led coding sessions"]
      },
      {
        id: "python-foundation",
        title: "Python Programming Foundation",
        duration: "3 Months",
        level: "Absolute Beginner",
        highlights: ["Core programming logic & OOP", "API automation & scripting", "Data structures fundamentals"]
      }
    ],
    faqs: [
      {
        q: "Do I need a Computer Science degree to land a developer role?",
        a: "No. Modern tech hiring focuses heavily on demonstrable skills, clean GitHub repositories, deployed projects, and problem-solving ability during technical rounds."
      },
      {
        q: "Which stack does GWC Academy prioritize?",
        a: "We focus on high-demand stacks including React, Node.js, Python, and SQL/NoSQL databases, aligned with real-world enterprise requirements."
      }
    ]
  },

  cybersecurity: {
    id: "cybersecurity",
    title: "Cyber Security & VAPT Program – Secure Systems & Threat Defense",
    badge: "Security & Defense Track",
    subheading: "Start your journey towards high-demand security roles like Cyber Security Analyst, SOC Engineer, or VAPT Specialist using hands-on labs and enterprise tools.",
    overview: "Cybersecurity is one of the fastest-growing technology sectors globally. This program equips you with offensive security skills (penetration testing, vulnerability assessment) and defensive security knowledge (SIEM monitoring, threat detection, Linux hardening) directly applicable to corporate security teams.",
    roles: [
      {
        title: "Cyber Security Analyst / SOC Analyst",
        desc: "Monitor security operations centers (SOC), triage alerts, investigate suspicious network activity, and mitigate active incidents.",
        requirements: "SIEM Tools (Microsoft Sentinel / QRadar), Networking (TCP/IP), Linux, Threat Analysis"
      },
      {
        title: "VAPT / Penetration Tester (Junior)",
        desc: "Perform authorized vulnerability assessments and penetration testing on web applications and infrastructure to discover security flaws.",
        requirements: "OWASP Top 10, Burp Suite, Nmap, Linux Command Line, CVSS Reporting"
      },
      {
        title: "Security Operations Engineer",
        desc: "Harden server infrastructure, configure firewall rules, enforce access policies, and implement automated security scripts.",
        requirements: "Linux Hardening, Cloud Security Basics, Scripting (Python/Bash), IAM Governance"
      }
    ],
    salary: {
      entry: "₹4.5 – 8.0 LPA",
      mid: "₹8.0 – 15.0 LPA",
      senior: "₹15.0 – 25.0+ LPA",
      note: "Security salaries in India reflect high demand and specialized skill shortages. Compensation scales rapidly with practical lab experience, certifications, and incident analysis capabilities."
    },
    skills: [
      "TCP/IP Networking, Protocols & Packet Analysis",
      "Linux System Administration & Security Hardening",
      "OWASP Top 10 Web Application Vulnerabilities",
      "Offensive Tools: Burp Suite, Nmap, Metasploit basics",
      "Defensive Tools: Microsoft Sentinel & QRadar SIEM",
      "Vulnerability Reporting & CVSS Scoring"
    ],
    mappedCourses: [
      {
        id: "vapt-beginner",
        title: "Web VAPT & Cyber Security",
        duration: "4 Months",
        level: "Intermediate",
        highlights: ["Hands-on OWASP exploitation", "Burp Suite & Nmap workflows", "Professional reporting practice"]
      },
      {
        id: "python-foundation",
        title: "Python Programming Foundation",
        duration: "3 Months",
        level: "Absolute Beginner",
        highlights: ["Scripting for security automation", "Custom network request scripts", "Logic & automation basics"]
      }
    ],
    faqs: [
      {
        q: "Is prior hacking knowledge required to enter this track?",
        a: "No. We start with networking, Linux fundamentals, and the core security concepts required to understand how vulnerabilities exist before attempting to find or patch them."
      },
      {
        q: "Does this program prepare me for industry certifications?",
        a: "Yes. The curriculum covers foundational skills relevant to certifications such as CEH (Certified Ethical Hacker) and Microsoft SC-200 (Security Operations Analyst)."
      }
    ]
  },

  cloud: {
    id: "cloud",
    title: "Cloud & DevOps Program – Deploy, Automate, Scale",
    badge: "Cloud Infrastructure Track",
    subheading: "Learn cloud infrastructure across AWS, Azure, and Google Cloud with practical CI/CD automation for modern engineering roles.",
    overview: "Every modern software product runs on the cloud. This program trains you to architect, deploy, and scale applications on leading cloud platforms, configure virtual private clouds (VPCs), manage Identity and Access Management (IAM), and automate deployment pipelines using DevOps principles.",
    roles: [
      {
        title: "Cloud Support / Cloud Associate",
        desc: "Manage day-to-day cloud operations, provision compute and storage resources, configure security groups, and troubleshoot downtime.",
        requirements: "AWS/GCP/Azure Core Services, IAM Policies, Virtual Machines, Cloud Storage, Basic Networking"
      },
      {
        title: "Cloud Engineer",
        desc: "Design and implement highly available, fault-tolerant cloud architectures and optimize infrastructure costs.",
        requirements: "VPC Architecture, Load Balancing, Auto-Scaling, Infrastructure Monitoring, Linux"
      },
      {
        title: "Junior DevOps Engineer",
        desc: "Automate build, test, and deployment workflows using CI/CD pipelines and containerization basics.",
        requirements: "Git/GitHub Actions, CI/CD Pipeline Configuration, Bash/Python Automation, Docker basics"
      }
    ],
    salary: {
      entry: "₹4.5 – 7.5 LPA",
      mid: "₹10.0 – 16.0 LPA",
      senior: "₹16.0 – 24.0+ LPA",
      note: "Cloud and DevOps roles command competitive compensation in India due to enterprise cloud migration. Real architecture experience and multi-cloud familiarity strongly boost offers."
    },
    skills: [
      "Core Cloud Computing (Compute, Storage, Networking, IAM)",
      "Multi-Cloud Fundamentals (AWS, Google Cloud & Azure)",
      "High Availability, Auto-Scaling & Load Balancing",
      "Automated CI/CD Pipelines with GitHub Actions",
      "Linux Server Administration & Bash Scripting",
      "Cloud Security Governance & Cost Optimization"
    ],
    mappedCourses: [
      {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure & DevOps",
        duration: "4 Months",
        level: "Intermediate",
        highlights: ["AWS & GCP deployment labs", "CI/CD automated pipelines", "Cost optimization & security groups"]
      },
      {
        id: "full-stack-web-dev",
        title: "Full-Stack Web Development",
        duration: "6 Months",
        level: "Beginner to Advanced",
        highlights: ["Build the applications you deploy", "API architecture", "Database integration"]
      }
    ],
    faqs: [
      {
        q: "Which cloud provider should I learn first?",
        a: "We emphasize core architectural concepts (compute, storage, IAM, networking) that apply across AWS, Azure, and Google Cloud, making it easy to adapt to any employer's stack."
      },
      {
        q: "Will I need to pay for cloud hosting during the course?",
        a: "No. All practical labs are conducted within standard Free Tier limits provided by cloud vendors, with strict monitoring guidelines."
      }
    ]
  },

  foundation: {
    id: "foundation",
    title: "Programming Basics Program – Your IT Foundation",
    badge: "Core Foundations Track",
    subheading: "Master core programming concepts, logic, and problem-solving across Python, Java, React, and Flutter to prepare for any advanced track.",
    overview: "Before diving into complex cloud infrastructure, full-stack frameworks, or cybersecurity exploits, you must master the fundamentals of programming logic, control structures, Object-Oriented Programming (OOP), and algorithmic problem-solving. This track serves as your primary gateway into specialized IT careers.",
    roles: [
      {
        title: "Junior Programmer / Automation Trainee",
        desc: "Write clean, reusable scripts to automate workflows, process data files, and assist development teams.",
        requirements: "Python / Java Fundamentals, Clean Code Practices, Problem-Solving Logic"
      },
      {
        title: "Foundation for Advanced Career Tracks",
        desc: "Seamlessly transition into Full-Stack Development, Cybersecurity Scripting, Cloud Automation, or Data Engineering.",
        requirements: "OOP Principles, Functions, Error Handling, Basic Data Structures"
      }
    ],
    salary: {
      entry: "Foundation Gateway",
      mid: "Leads to ₹4.0 – 14.0+ LPA Tracks",
      senior: "Career Acceleration",
      note: "The Programming Basics track is a stepping stone. Your ultimate salary outcome is determined by the specialized track you transition into (Development, Cyber Security, or Cloud)."
    },
    skills: [
      "Programming Logic, Conditionals & Loops",
      "Object-Oriented Programming (Classes, Objects, Inheritance)",
      "Functions, Scope & Modular Code Organization",
      "Error Handling, Debugging & Exception Management",
      "File I/O, OS Operations & Automation Scripting",
      "Basic Data Structures & Algorithm Patterns"
    ],
    mappedCourses: [
      {
        id: "python-foundation",
        title: "Python Programming Foundation",
        duration: "3 Months",
        level: "Absolute Beginner",
        highlights: ["Zero-prerequisite learning", "Live interactive coding", "Real-world automation scripts"]
      },
      {
        id: "interview-prep",
        title: "Tech Interview & Placement Prep",
        duration: "2 Months",
        level: "All Levels",
        highlights: ["DSA problem solving patterns", "ATS resume optimization", "Mock interview simulations"]
      }
    ],
    faqs: [
      {
        q: "I have never written a line of code. Can I join?",
        a: "Yes. This track is specifically designed for absolute beginners and non-technical backgrounds with zero prior coding experience."
      },
      {
        q: "Where should I go after finishing this foundation?",
        a: "Most graduates transition directly into our Full-Stack Web Development, Cyber Security & VAPT, or Cloud Infrastructure programs."
      }
    ]
  }
};