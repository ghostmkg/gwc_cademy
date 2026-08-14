export const coursesData = [
  {
    id: "python-foundation",
    category: "Programming Foundation",
    title: "Python Programming Foundation",
    heroSubtitle: "Go from complete beginner to confident Python programmer through live classes, hands-on projects, and guided practice.",
    image: "/assets/python-thumb.jpeg", // Ensure this is a 16:9 optimized WebP/JPEG
    level: "Absolute Beginner",
    duration: "3 Months",
    mode: "Live + Recorded",
    price: "₹6,999",
    batchDetails: {
      nextCohort: "15 September 2026",
      classes: "Mon / Wed / Fri",
      time: "7:30 PM – 9:30 PM IST",
      mode: "Live Online",
      language: "English / Hindi",
      recordings: "Program duration + 1 Year"
    },
    cardOutcomes: [
      "Write clean, reusable Python code",
      "Master core data structures",
      "Build logical problem-solving skills"
    ],
    whatYouWillLearn: [
      "Write Python programs confidently from scratch",
      "Understand programming logic and control flow",
      "Work with functions and Object-Oriented Programming (OOP)",
      "Automate repetitive computer tasks with Python scripts",
      "Work with external APIs and JSON data",
      "Build practical, real-world portfolio projects"
    ],
    whoIsItFor: [
      "Students starting programming from zero",
      "College students preparing for IT careers",
      "Working professionals who want Python for automation",
      "Learners planning to move into development, data, cloud or cybersecurity"
    ],
    prerequisites: [
      "Basic computer usage and internet navigation",
      "Willingness to attend live classes regularly",
      "Commitment to practice and complete assignments",
      "No prior coding experience required"
    ],
    projects: [
      { 
        title: "Weather Intelligence API", 
        outcome: "Interact with live web APIs to fetch, process, and format real-time weather data.",
        skills: ["Python", "REST API", "JSON", "Error Handling"]
      },
      { 
        title: "Automated File Organizer", 
        outcome: "Write a script that traverses directories and automatically sorts files based on their extensions.",
        skills: ["OS Module", "Automation", "File Handling", "Logic"]
      }
    ],
    syllabus: [
      { title: "Module 1: Introduction & Basics", meta: "6 live sessions • 2 assignments", topics: ["Installing Python & VS Code", "Variables & Data Types", "Input/Output & String Formatting"] },
      { title: "Module 2: Control Flow", meta: "5 live sessions • 1 mini-project", topics: ["If/Else Statements", "For and While Loops", "Handling Exceptions (Try/Except)"] },
      { title: "Module 3: Functions & OOP", meta: "7 live sessions • 1 major project", topics: ["Writing reusable functions", "Classes and Objects", "Inheritance basics"] }
    ],
    faqs: {
      course: [
        { q: "Do I need prior programming knowledge?", a: "No. Python is highly readable and perfect as a first language. We teach you programming logic from scratch." },
        { q: "What language are classes taught in?", a: "Classes are taught in a mix of English and Hindi to ensure maximum conceptual clarity for Indian learners." }
      ],
      learning: [
        { q: "What happens if I miss a live class?", a: "Every live class is recorded and made available in your student portal within 24 hours. You have access to recordings for the program duration plus 1 full year." },
        { q: "How do I submit doubts?", a: "You can submit your questions 24x7 through our dedicated support system and Discord community. Mentors will assist you during designated working hours." }
      ],
      career: [
        { q: "How are students selected for the internship?", a: "Top-performing students may receive a direct interview opportunity for a paid internship with Vaptura Labs. Selection is strictly based on performance, project quality, attendance, and technical evaluation." }
      ],
      enrollment: [
        { q: "How do I enroll?", a: "Click 'Apply for Next Cohort', fill out the secure Google Form, and our team will send you an official payment link via Email/WhatsApp to confirm your seat." }
      ]
    },
    crossSell: [
      { title: "Full Stack Development", desc: "Use your new Python skills for backend API development.", link: "/courses/full-stack-web-dev" },
      { title: "Cyber Security & VAPT", desc: "Use Python for security automation and exploit scripting.", link: "/courses/vapt-beginner" },
      { title: "Cloud Infrastructure", desc: "Use Python to automate deployments on AWS and Azure.", link: "/courses/cloud-infrastructure" }
    ]
  },
  {
    id: "vapt-beginner",
    category: "Cyber Security",
    title: "Web VAPT & Cyber Security",
    heroSubtitle: "Master offensive security. Perform real-world penetration testing on web apps and document findings professionally.",
    image: "/assets/vapt-thumb.webp",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹10,499",
    batchDetails: {
      nextCohort: "Coming Soon",
      classes: "Sat / Sun",
      time: "10:00 AM – 1:00 PM IST",
      mode: "Live Online",
      language: "English / Hindi",
      recordings: "Program duration + 1 Year"
    },
    cardOutcomes: [
      "Perform basic web app penetration testing",
      "Master tools like Burp Suite & Nmap",
      "Write professional vulnerability reports"
    ],
    whatYouWillLearn: [
      "Understand enterprise network vulnerabilities",
      "Master industry-standard tools (Burp Suite, Nmap, Metasploit)",
      "Exploit OWASP Top 10 vulnerabilities safely",
      "Write executive-level security and remediation reports",
      "Harden Linux servers against common attacks"
    ],
    whoIsItFor: [
      "Network engineers looking to shift to security",
      "Developers wanting to learn how to write secure code",
      "IT students aiming for SOC analyst or Pentester roles"
    ],
    prerequisites: [
      "Basic understanding of networking (IPs, Ports, HTTP)",
      "Comfortable with Linux command line basics",
      "Willingness to practice in authorized lab environments only"
    ],
    projects: [
      { 
        title: "Live Target Reconnaissance", 
        outcome: "Map out the complete attack surface of a provided dummy enterprise application.",
        skills: ["Nmap", "Directory Enumeration", "OSINT"]
      },
      { 
        title: "Exploiting OWASP Top 10", 
        outcome: "Identify and exploit SQL injection and XSS vulnerabilities in a controlled lab environment.",
        skills: ["Burp Suite", "SQLi", "XSS", "Payloads"]
      }
    ],
    syllabus: [
      { title: "Module 1: Recon & Scanning", meta: "4 live sessions", topics: ["Passive vs Active Recon", "Nmap mastery", "Directory enumeration"] },
      { title: "Module 2: Web Application Attacks", meta: "8 live sessions • 2 labs", topics: ["Burp Suite setup", "SQL Injection", "Cross-Site Scripting (XSS)"] },
      { title: "Module 3: Reporting & Remediation", meta: "3 live sessions", topics: ["CVSS Scoring", "Writing executive summaries", "Remediation recommendations"] }
    ],
    faqs: {
      course: [
        { q: "Will this prepare me for CEH?", a: "This course covers the practical application of many CEH concepts, focusing heavily on hands-on penetration testing skills rather than just exam theory." },
        { q: "Is it legal to use these tools?", a: "We teach you to use these tools safely and ethically in controlled, dummy lab environments provided by GWC Academy." }
      ],
      learning: [
        { q: "What happens if I miss a live class?", a: "Every class is recorded and available in your portal within 24 hours. You keep access for the program duration plus 1 year." }
      ],
      career: [
        { q: "Are there job opportunities?", a: "Top performers undergo evaluation for a direct 3-month paid internship interview at Vaptura Labs." }
      ],
      enrollment: [
        { q: "Do you offer EMIs?", a: "Please contact our counseling team via WhatsApp to discuss available flexible payment options." }
      ]
    },
    crossSell: [
      { title: "Cloud Infrastructure", desc: "Learn to secure and deploy infrastructure on AWS/Azure.", link: "/courses/cloud-infrastructure" }
    ]
  },
  {
    id: "full-stack-web-dev",
    category: "Development",
    title: "Full-Stack Web Development",
    heroSubtitle: "Build deployable, scalable web applications from scratch using modern frontend frameworks and robust backend architectures.",
    image: "/assets/fullstack-thumb.webp",
    level: "Beginner to Advanced",
    duration: "6 Months",
    mode: "Live + Recorded",
    price: "₹14,999",
    batchDetails: {
      nextCohort: "Coming Soon",
      classes: "Tue / Thu / Fri",
      time: "7:30 PM – 9:30 PM IST",
      mode: "Live Online",
      language: "English / Hindi",
      recordings: "Program duration + 1 Year"
    },
    cardOutcomes: [
      "Deploy responsive React front-ends",
      "Design secure RESTful APIs",
      "Publish full portfolio projects"
    ],
    whatYouWillLearn: [
      "Write modern, responsive HTML, CSS, and JavaScript",
      "Build dynamic single-page applications using React.js",
      "Develop secure backend servers using Node.js/Python",
      "Manage relational (SQL) and non-relational databases",
      "Integrate user authentication and security best practices",
      "Deploy applications live to cloud hosting platforms"
    ],
    whoIsItFor: [
      "Beginners wanting a complete roadmap to becoming a developer",
      "Frontend developers wanting to learn backend API architecture",
      "IT professionals looking to switch into software engineering roles"
    ],
    prerequisites: [
      "Basic computer usage and internet navigation",
      "Willingness to write code daily and complete assignments",
      "No prior coding experience required (we start from HTML/CSS)"
    ],
    projects: [
      { 
        title: "Secure E-Commerce API", 
        outcome: "Build a robust backend system handling products, users, authentication, and secure cart transactions.",
        skills: ["Node.js", "Express", "MongoDB", "JWT Auth"]
      },
      { 
        title: "Real-Time Dashboard UI", 
        outcome: "Develop a complex, responsive React frontend that consumes live API data and visualizes metrics.",
        skills: ["React", "Tailwind CSS", "State Management", "API Fetch"]
      }
    ],
    syllabus: [
      { title: "Module 1: Frontend Fundamentals", meta: "8 live sessions", topics: ["HTML5 & CSS3 Masterclass", "JavaScript ES6+ Deep Dive", "DOM Manipulation"] },
      { title: "Module 2: Advanced React.js", meta: "12 live sessions • 2 projects", topics: ["React Components & Hooks", "State Management", "Routing & API Integration"] },
      { title: "Module 3: Backend & Databases", meta: "10 live sessions • 1 major project", topics: ["Building REST APIs", "Database Design", "Authentication & Deployment"] }
    ],
    faqs: {
      course: [
        { q: "Is this a MERN stack course?", a: "Yes, our primary stack focuses on MongoDB, Express, React, and Node.js, which is the most demanded stack in the current industry." },
        { q: "Do I need to buy any software?", a: "No. We use industry-standard free and open-source tools like VS Code, Node.js, and free cloud database tiers." }
      ],
      learning: [
        { q: "What happens if I miss a live class?", a: "Every class is recorded and available in your portal within 24 hours. You keep access for the program duration plus 1 year." }
      ],
      career: [
        { q: "How are students selected for the internship?", a: "Top-performing students may receive a direct interview opportunity for a paid internship with Vaptura Labs based on their capstone project quality and technical evaluation." }
      ],
      enrollment: [
        { q: "How do I enroll?", a: "Click 'Apply for Next Cohort', fill out the secure Google Form, and our team will verify your seat and send the payment link." }
      ]
    },
    crossSell: [
      { title: "Cloud Infrastructure", desc: "Learn to deploy your web apps to AWS and Azure at scale.", link: "/courses/cloud-infrastructure" },
      { title: "Cyber Security & VAPT", desc: "Learn how hackers attack the web apps you just built.", link: "/courses/vapt-beginner" }
    ]
  },
  {
    id: "cloud-infrastructure",
    category: "Cloud",
    title: "Cloud Infrastructure & DevOps",
    heroSubtitle: "Architect, deploy, and scale enterprise applications on industry-leading cloud providers like AWS and Google Cloud.",
    image: "/assets/cloud-thumb.webp",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹12,499",
    batchDetails: {
      nextCohort: "Coming Soon",
      classes: "Sat / Sun",
      time: "2:00 PM – 5:00 PM IST",
      mode: "Live Online",
      language: "English / Hindi",
      recordings: "Program duration + 1 Year"
    },
    cardOutcomes: [
      "Deploy code to AWS and GCP",
      "Manage Cloud IAM and security",
      "Understand DevOps CI/CD pipelines"
    ],
    whatYouWillLearn: [
      "Understand core cloud computing concepts (IaaS, PaaS, SaaS)",
      "Deploy virtual machines, storage, and networking on AWS/GCP",
      "Manage Identity and Access Management (IAM) securely",
      "Build automated CI/CD pipelines for software deployment",
      "Monitor infrastructure health and optimize cloud costs"
    ],
    whoIsItFor: [
      "System Administrators looking to move into Cloud/DevOps",
      "Developers wanting to learn how to deploy and scale their apps",
      "IT professionals preparing for AWS or GCP certifications"
    ],
    prerequisites: [
      "Basic understanding of networking and web architecture",
      "Comfortable with Linux command line basics",
      "A credit/debit card (to create free-tier cloud accounts)"
    ],
    projects: [
      { 
        title: "Highly Available Web Architecture", 
        outcome: "Deploy a scalable web application across multiple availability zones using Load Balancers and Auto-Scaling.",
        skills: ["AWS EC2", "Load Balancing", "VPC", "Security Groups"]
      },
      { 
        title: "Automated CI/CD Pipeline", 
        outcome: "Set up a pipeline that automatically tests and deploys code to the cloud whenever a developer pushes to GitHub.",
        skills: ["GitHub Actions", "CI/CD", "Cloud Deployments"]
      }
    ],
    syllabus: [
      { title: "Module 1: Cloud Fundamentals", meta: "4 live sessions", topics: ["Cloud Concepts", "Global Infrastructure", "Identity & Access Management (IAM)"] },
      { title: "Module 2: Compute & Networking", meta: "6 live sessions • 2 labs", topics: ["Virtual Machines (EC2)", "Virtual Private Cloud (VPC)", "Load Balancing & Scaling"] },
      { title: "Module 3: DevOps & Automation", meta: "5 live sessions • 1 major project", topics: ["CI/CD Pipelines", "Infrastructure as Code Basics", "Cloud Monitoring"] }
    ],
    faqs: {
      course: [
        { q: "Will this prepare me for certification?", a: "Yes, the practical skills learned here strongly align with the AWS Solutions Architect Associate and GCP Cloud Engineer exams." },
        { q: "Will I be charged by the cloud providers?", a: "We teach you using Free Tier resources. However, you are responsible for monitoring your own cloud usage to avoid unexpected billing." }
      ],
      learning: [
        { q: "What happens if I miss a live class?", a: "Every class is recorded and available in your portal within 24 hours. You keep access for the program duration plus 1 year." }
      ],
      career: [
        { q: "Are there job opportunities?", a: "Top performers undergo evaluation for a direct 3-month paid internship interview at Vaptura Labs." }
      ],
      enrollment: [
        { q: "Do you offer EMIs?", a: "Please contact our counseling team via WhatsApp to discuss available flexible payment options." }
      ]
    },
    crossSell: [
      { title: "Full Stack Development", desc: "Learn to write the applications you are deploying to the cloud.", link: "/courses/full-stack-web-dev" },
      { title: "Cyber Security & VAPT", desc: "Learn how to audit and secure cloud enterprise environments.", link: "/courses/vapt-beginner" }
    ]
  },
  {
    id: "interview-prep",
    category: "Professional Dev",
    title: "Tech Interview & Placement Prep",
    heroSubtitle: "Bridge the gap between knowing how to code and getting hired. Master technical rounds, system design, and resume building.",
    image: "/assets/interview-thumb.webp",
    level: "All Levels",
    duration: "2 Months",
    mode: "Live + Recorded",
    price: "₹4,999",
    batchDetails: {
      nextCohort: "Coming Soon",
      classes: "Sat / Sun",
      time: "6:00 PM – 9:00 PM IST",
      mode: "Live Online",
      language: "English / Hindi",
      recordings: "Program duration + 1 Year"
    },
    cardOutcomes: [
      "Crack competitive coding rounds",
      "Build an undeniable tech resume",
      "Master technical communication"
    ],
    whatYouWillLearn: [
      "Solve common Data Structures and Algorithms (DSA) interview questions",
      "Format your resume to pass ATS (Applicant Tracking Systems)",
      "Communicate technical concepts clearly to interviewers",
      "Understand the basics of System Design for scalable applications",
      "Optimize your LinkedIn and GitHub profiles to attract recruiters"
    ],
    whoIsItFor: [
      "Final year students applying for their first IT jobs",
      "Self-taught developers struggling to pass technical screening rounds",
      "Professionals preparing to switch companies for higher packages"
    ],
    prerequisites: [
      "Basic programming knowledge in at least one language (Python/Java/C++)",
      "A completed or partially completed portfolio of projects"
    ],
    projects: [
      { 
        title: "The Ultimate Resume Build", 
        outcome: "Create an ATS-friendly, metrics-driven resume that highlights your projects and capabilities.",
        skills: ["ATS Optimization", "Copywriting", "Personal Branding"]
      },
      { 
        title: "Mock Interview Gauntlet", 
        outcome: "Participate in live, simulated technical interviews with industry professionals and receive feedback.",
        skills: ["Communication", "Live Coding", "Problem Solving"]
      }
    ],
    syllabus: [
      { title: "Module 1: Resume & Branding", meta: "3 live sessions", topics: ["Beating ATS", "GitHub Portfolio Optimization", "LinkedIn Strategies"] },
      { title: "Module 2: Technical Problem Solving", meta: "8 live sessions • Coding practice", topics: ["Common DSA Patterns", "Approaching unknown problems", "Live coding etiquette"] },
      { title: "Module 3: Behavioral & HR", meta: "4 live sessions", topics: ["Answering 'Tell me about yourself'", "Salary negotiation", "Mock Interviews"] }
    ],
    faqs: {
      course: [
        { q: "Do you guarantee placement?", a: "No academy can guarantee a job. We guarantee that you will be equipped with the exact strategies and communication skills required to pass standard industry interviews." },
        { q: "Which language will the coding questions be in?", a: "The focus is on logic and problem-solving. You can implement the solutions in Python, Java, or JavaScript during practice." }
      ],
      learning: [
        { q: "Are there mock interviews?", a: "Yes, the program includes simulated interview rounds with peer and mentor feedback." }
      ],
      career: [
        { q: "Is the Vaptura Labs internship included here?", a: "The direct internship pipeline is primarily reserved for the technical foundation tracks (Full-Stack, Cloud, Cyber). However, exceptional candidates here are always noticed by our team." }
      ],
      enrollment: [
        { q: "How do I enroll?", a: "Click 'Apply for Next Cohort', fill out the secure Google Form, and our team will verify your seat." }
      ]
    },
    crossSell: [
      { title: "Python Programming Foundation", desc: "Need to brush up on your core logic before interviews?", link: "/courses/python-foundation" },
      { title: "Full Stack Development", desc: "Need stronger projects for your resume? Build them here.", link: "/courses/full-stack-web-dev" }
    ]
  }
];

export const categories = ["All", "Development", "Cyber Security", "Cloud", "Programming Foundation", "Professional Dev"];