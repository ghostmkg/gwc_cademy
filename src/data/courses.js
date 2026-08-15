export const coursesData = [
  // ---------------------------------------------------------
  // 1. PYTHON
  // ---------------------------------------------------------
  {
    id: "python-foundation",
    category: "Programming Foundation",
    title: "Python Programming Foundation",
    heroSubtitle: "Go from complete beginner to confident Python programmer through live classes, hands-on projects, and guided practice.",
    image: "/assets/python-thumb.jpeg", 
    level: "Absolute Beginner",
    duration: "3 Months",
    mode: "Live + Recorded",
    price: "₹6,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Python&embedded=true",
    batchDetails: {
      nextCohort: "15 September 2026",
      classes: "Mon / Wed / Fri",
      time: "7:30 PM – 9:30 PM IST",
      mode: "Live Online",
      language: "English / Hindi",
      recordings: "Program duration + 1 Year"
    },
    cardOutcomes: ["Write clean, reusable Python code", "Master core data structures", "Build logical problem-solving skills"],
    whatYouWillLearn: ["Write Python programs confidently from scratch", "Understand programming logic and control flow", "Work with functions and Object-Oriented Programming (OOP)", "Automate repetitive computer tasks with Python scripts", "Work with external APIs and JSON data", "Build practical, real-world portfolio projects"],
    whoIsItFor: ["Students starting programming from zero", "College students preparing for IT careers", "Working professionals who want Python for automation", "Learners planning to move into development, data, cloud or cybersecurity"],
    prerequisites: ["Basic computer usage and internet navigation", "Willingness to attend live classes regularly", "Commitment to practice and complete assignments", "No prior coding experience required"],
    projects: [
      { title: "Weather Intelligence API", outcome: "Interact with live web APIs to fetch, process, and format real-time weather data.", skills: ["Python", "REST API", "JSON", "Error Handling"] },
      { title: "Automated File Organizer", outcome: "Write a script that traverses directories and automatically sorts files based on their extensions.", skills: ["OS Module", "Automation", "File Handling", "Logic"] }
    ],
    syllabus: [
      { title: "Module 1: Introduction & Basics", meta: "6 live sessions • 2 assignments", topics: ["Installing Python & VS Code", "Variables & Data Types", "Input/Output & String Formatting"] },
      { title: "Module 2: Control Flow", meta: "5 live sessions • 1 mini-project", topics: ["If/Else Statements", "For and While Loops", "Handling Exceptions (Try/Except)"] },
      { title: "Module 3: Functions & OOP", meta: "7 live sessions • 1 major project", topics: ["Writing reusable functions", "Classes and Objects", "Inheritance basics"] }
    ],
    faqs: {
      course: [{ q: "Do I need prior programming knowledge?", a: "No. We teach you programming logic from scratch." }],
      learning: [{ q: "What happens if I miss a live class?", a: "Every live class is recorded and made available in your student portal within 24 hours." }],
      career: [{ q: "How are students selected for the internship?", a: "Top-performing students may receive a direct interview opportunity for a paid internship with Vaptura Labs." }],
      enrollment: [{ q: "How do I enroll?", a: "Click 'Apply for Next Cohort', fill out the secure form, and complete the UPI payment." }]
    },
    crossSell: [{ title: "Full Stack Development", desc: "Use Python skills for backend API development.", link: "/courses/full-stack-web-dev" }]
  },

  // ---------------------------------------------------------
  // 2. JAVA
  // ---------------------------------------------------------
  {
    id: "java-foundation",
    category: "Programming Foundation",
    title: "Java Programming",
    heroSubtitle: "Master object-oriented programming and build robust enterprise applications with Java.",
    image: "/assets/java.jpeg", // Placeholder image, update later
    level: "Absolute Beginner",
    duration: "3 Months",
    mode: "Live + Recorded",
    price: "₹6,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Java&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Tue / Thu / Sat", time: "7:30 PM – 9:30 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Write enterprise Java code", "Master OOP Concepts", "Build logical problem-solving skills"],
    whatYouWillLearn: ["Write Java programs from scratch", "Deep dive into Object-Oriented Programming (OOP)", "Understand Java Collections Framework", "Build scalable backend logic"],
    whoIsItFor: ["Students starting programming from zero", "College students preparing for IT careers"],
    prerequisites: ["Basic computer usage and internet navigation", "Commitment to practice daily"],
    projects: [
      { title: "Bank Management System", outcome: "Build an OOP-based banking system handling accounts and transactions.", skills: ["Java", "OOP", "Logic"] }
    ],
    syllabus: [
      { title: "Module 1: Java Basics", meta: "6 live sessions", topics: ["JVM, JRE, JDK", "Variables & Data Types", "Control Flow"] },
      { title: "Module 2: Deep Dive OOP", meta: "8 live sessions", topics: ["Classes, Objects, Methods", "Inheritance & Polymorphism", "Abstraction & Encapsulation"] }
    ],
    faqs: {
      course: [{ q: "Do I need prior programming knowledge?", a: "No. We teach you from scratch." }],
      learning: [{ q: "Are classes recorded?", a: "Yes, available within 24 hours." }],
      career: [{ q: "Are there job opportunities?", a: "Java is the highest demanded language for enterprise roles." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill out the form below and complete payment." }]
    },
    crossSell: [{ title: "Back End Development", desc: "Use Java to build robust backend servers.", link: "/courses/backend-development" }]
  },

  // ---------------------------------------------------------
  // 3. FULL STACK WEB DEVELOPMENT
  // ---------------------------------------------------------
  {
    id: "full-stack-web-dev",
    category: "Development",
    title: "Full-Stack Web Development",
    heroSubtitle: "Build deployable, scalable web applications from scratch using modern frontend frameworks and robust backend architectures.",
    image: "/assets/fullstack.jpeg",
    level: "Beginner to Advanced",
    duration: "6 Months",
    mode: "Live + Recorded",
    price: "₹14,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Full+Stack+Development&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Tue / Thu / Fri", time: "7:30 PM – 9:30 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Deploy responsive React front-ends", "Design secure RESTful APIs", "Publish full portfolio projects"],
    whatYouWillLearn: ["Write modern HTML, CSS, and JavaScript", "Build dynamic SPAs using React.js", "Develop secure backend servers using Node.js", "Manage SQL and NoSQL databases", "Integrate JWT authentication"],
    whoIsItFor: ["Beginners wanting a complete roadmap", "IT professionals looking to switch into software engineering roles"],
    prerequisites: ["Willingness to write code daily", "No prior coding experience required"],
    projects: [
      { title: "Secure E-Commerce API", outcome: "Build a robust backend system handling products, users, authentication.", skills: ["Node.js", "Express", "MongoDB", "JWT Auth"] },
      { title: "Real-Time Dashboard UI", outcome: "Develop a complex, responsive React frontend that consumes live API data.", skills: ["React", "Tailwind CSS", "API Fetch"] }
    ],
    syllabus: [
      { title: "Module 1: Frontend Fundamentals", meta: "8 live sessions", topics: ["HTML5 & CSS3 Masterclass", "JavaScript ES6+ Deep Dive", "DOM Manipulation"] },
      { title: "Module 2: Advanced React.js", meta: "12 live sessions", topics: ["React Components & Hooks", "State Management", "Routing & API Integration"] },
      { title: "Module 3: Backend & Databases", meta: "10 live sessions", topics: ["Building REST APIs", "Database Design", "Authentication & Deployment"] }
    ],
    faqs: {
      course: [{ q: "Is this a MERN stack course?", a: "Yes, our primary stack focuses on MongoDB, Express, React, and Node.js." }],
      learning: [{ q: "What happens if I miss a live class?", a: "Every class is recorded and available in your portal." }],
      career: [{ q: "How are students selected for the internship?", a: "Top-performing students receive a direct interview for Vaptura Labs." }],
      enrollment: [{ q: "How do I enroll?", a: "Click Apply and verify payment instantly." }]
    },
    crossSell: [{ title: "Cloud Infrastructure", desc: "Learn to deploy your web apps to AWS.", link: "/courses/cloud-infrastructure" }]
  },

  // ---------------------------------------------------------
  // 4. WEB DEVELOPMENT (General)
  // ---------------------------------------------------------
  {
    id: "web-development",
    category: "Development",
    title: "Web Development",
    heroSubtitle: "Learn the core foundations of building websites and modern web applications.",
    image: "/assets/fullstack-thumb.webp",
    level: "Beginner",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹9,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Web+Development&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Mon / Wed", time: "6:00 PM – 8:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Master HTML, CSS & JS", "Build responsive layouts", "Understand web architecture"],
    whatYouWillLearn: ["Write semantic HTML and modern CSS", "Master JavaScript DOM manipulation", "Build responsive websites for mobile and desktop"],
    whoIsItFor: ["Beginners entering tech", "Designers wanting to learn code"],
    prerequisites: ["No prior coding required"],
    projects: [{ title: "Responsive Portfolio", outcome: "Build your own personal developer portfolio.", skills: ["HTML", "CSS", "JS"] }],
    syllabus: [{ title: "Module 1: Core Web Tech", meta: "10 sessions", topics: ["HTML5", "CSS Grid & Flexbox", "JavaScript Basics"] }],
    faqs: {
      course: [{ q: "Do I need experience?", a: "No, this is completely beginner friendly." }],
      learning: [{ q: "Are recordings provided?", a: "Yes, within 24 hours." }],
      career: [{ q: "Will I get a job?", a: "This builds the required foundation for developer roles." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill out the form below." }]
    },
    crossSell: [{ title: "Front End Development", desc: "Specialize in React.js.", link: "/courses/frontend-development" }]
  },

  // ---------------------------------------------------------
  // 5. FRONT END DEVELOPMENT
  // ---------------------------------------------------------
  {
    id: "frontend-development",
    category: "Development",
    title: "Front End Development",
    heroSubtitle: "Master React.js, Tailwind CSS, and state management to build stunning user interfaces.",
    image: "/assets/frontend.jpeg",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹10,499",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Front+End+Development&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "10:00 AM – 1:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Master React.js", "State Management (Redux)", "API Integration"],
    whatYouWillLearn: ["Build SPAs with React", "Style beautifully with Tailwind CSS", "Manage global state", "Fetch and render API data securely"],
    whoIsItFor: ["Web developers wanting to learn modern frameworks"],
    prerequisites: ["Basic knowledge of HTML, CSS, and JavaScript"],
    projects: [{ title: "Netflix Clone UI", outcome: "Rebuild the Netflix interface pulling data from TMDB.", skills: ["React", "API", "CSS"] }],
    syllabus: [{ title: "Module 1: Advanced UI", meta: "10 sessions", topics: ["React Hooks", "Redux Toolkit", "React Router"] }],
    faqs: {
      course: [{ q: "Is this React focused?", a: "Yes, we focus heavily on the React ecosystem." }],
      learning: [{ q: "Are recordings provided?", a: "Yes." }],
      career: [{ q: "Is frontend enough for a job?", a: "Yes, frontend developers are highly sought after." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill out the form below." }]
    },
    crossSell: [{ title: "Full Stack", desc: "Learn to build your own APIs.", link: "/courses/full-stack-web-dev" }]
  },

  // ---------------------------------------------------------
  // 6. BACK END DEVELOPMENT
  // ---------------------------------------------------------
  {
    id: "backend-development",
    category: "Development",
    title: "Back End Development",
    heroSubtitle: "Design scalable APIs, manage databases, and handle server security.",
    image: "/assets/backend.jpeg",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹10,499",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Back+End+Development&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "2:00 PM – 5:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Build REST APIs", "Database Architecture", "Server Security"],
    whatYouWillLearn: ["Build APIs with Node.js/Express", "Design SQL & NoSQL Databases", "Implement JWT Authentication", "Deploy servers to cloud"],
    whoIsItFor: ["Developers wanting to master server-side logic"],
    prerequisites: ["Basic programming knowledge in JS, Java, or Python"],
    projects: [{ title: "Auth & Payments API", outcome: "Build an API that handles user logins and Stripe payments.", skills: ["Node.js", "MongoDB", "Security"] }],
    syllabus: [{ title: "Module 1: Server Logic", meta: "12 sessions", topics: ["Node/Express", "Database Design", "Security Best Practices"] }],
    faqs: {
      course: [{ q: "Which database do we learn?", a: "Both MongoDB (NoSQL) and PostgreSQL (SQL)." }],
      learning: [{ q: "Are recordings provided?", a: "Yes." }],
      career: [{ q: "Are there backend specific roles?", a: "Yes, backend engineers command top salaries." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill out the form below." }]
    },
    crossSell: [{ title: "Cloud & DevOps", desc: "Learn to deploy your servers.", link: "/courses/cloud-infrastructure" }]
  },

  // ---------------------------------------------------------
  // 7. CLOUD & DEVOPS
  // ---------------------------------------------------------
  {
    id: "cloud-infrastructure",
    category: "Cloud",
    title: "Cloud Infrastructure & DevOps",
    heroSubtitle: "Architect, deploy, and scale enterprise applications on industry-leading cloud providers.",
    image: "/assets/cloud-thumb.webp",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹12,499",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=DevOps&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "2:00 PM – 5:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Deploy code to AWS and GCP", "Manage Cloud IAM", "Understand CI/CD pipelines"],
    whatYouWillLearn: ["Deploy VMs, storage, and networking", "Manage Identity and Access Management (IAM)", "Build automated CI/CD pipelines", "Monitor infrastructure health"],
    whoIsItFor: ["System Admins looking to move into DevOps", "Developers wanting to deploy apps"],
    prerequisites: ["Basic understanding of networking and Linux command line"],
    projects: [
      { title: "Highly Available Architecture", outcome: "Deploy scalable apps using Load Balancers.", skills: ["AWS EC2", "VPC", "Security"] },
      { title: "Automated CI/CD Pipeline", outcome: "Set up a pipeline that tests and deploys code to the cloud.", skills: ["GitHub Actions", "CI/CD"] }
    ],
    syllabus: [
      { title: "Module 1: Cloud Fundamentals", meta: "4 sessions", topics: ["Cloud Concepts", "IAM", "Networking"] },
      { title: "Module 2: DevOps & Automation", meta: "5 sessions", topics: ["CI/CD Pipelines", "IaC", "Monitoring"] }
    ],
    faqs: {
      course: [{ q: "Will I be charged by providers?", a: "We teach using Free Tier resources." }],
      learning: [{ q: "Are recordings available?", a: "Yes, within 24 hours." }],
      career: [{ q: "Are there job opportunities?", a: "Top performers are evaluated for Vaptura Labs internships." }],
      enrollment: [{ q: "How do I enroll?", a: "Scan the QR code below." }]
    },
    crossSell: [{ title: "Cyber Security", desc: "Secure the cloud infrastructure you built.", link: "/courses/vapt-beginner" }]
  },

  // ---------------------------------------------------------
  // 8. AWS (AMAZON WEB SERVICES)
  // ---------------------------------------------------------
  {
    id: "aws-cloud",
    category: "Cloud",
    title: "AWS (Amazon Web Services)",
    heroSubtitle: "Master the world's most popular cloud platform and prepare for AWS Certifications.",
    image: "/assets/aws.jpeg",
    level: "Intermediate",
    duration: "3 Months",
    mode: "Live + Recorded",
    price: "₹10,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=AWS&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "10:00 AM – 1:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Master EC2, S3, RDS", "VPC Networking", "AWS Security"],
    whatYouWillLearn: ["Deploy scalable architectures", "Configure VPCs and Subnets", "Manage AWS IAM securely"],
    whoIsItFor: ["IT Pros targeting AWS Solutions Architect roles"],
    prerequisites: ["Basic networking knowledge"],
    projects: [{ title: "AWS Web Tier", outcome: "Deploy a highly available web server network.", skills: ["EC2", "ALB", "Route53"] }],
    syllabus: [{ title: "Module 1: Core AWS Services", meta: "12 sessions", topics: ["EC2 & EBS", "S3 Storage", "VPC & Subnets"] }],
    faqs: {
      course: [{ q: "Does this prep for certs?", a: "Yes, aligns with Solutions Architect Associate." }],
      learning: [{ q: "Are recordings available?", a: "Yes." }],
      career: [{ q: "Is AWS in demand?", a: "AWS holds the largest market share in cloud." }],
      enrollment: [{ q: "How do I enroll?", a: "Use the form below." }]
    },
    crossSell: [{ title: "DevOps", desc: "Automate your AWS deployments.", link: "/courses/cloud-infrastructure" }]
  },

  // ---------------------------------------------------------
  // 9. AZURE
  // ---------------------------------------------------------
  {
    id: "azure-cloud",
    category: "Cloud",
    title: "Microsoft Azure",
    heroSubtitle: "Learn enterprise cloud solutions and prepare for Azure Administrator roles.",
    image: "/assets/azure.jpeg",
    level: "Intermediate",
    duration: "3 Months",
    mode: "Live + Recorded",
    price: "₹10,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Azure&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "6:00 PM – 9:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Manage Azure VMs", "Azure Active Directory", "Cloud Security"],
    whatYouWillLearn: ["Deploy Azure resources", "Manage enterprise identities with AAD", "Configure Virtual Networks"],
    whoIsItFor: ["Enterprise IT professionals"],
    prerequisites: ["Basic networking knowledge"],
    projects: [{ title: "Azure Enterprise Network", outcome: "Set up a secure corporate VNet.", skills: ["Azure VM", "VNet", "NSG"] }],
    syllabus: [{ title: "Module 1: Core Azure", meta: "12 sessions", topics: ["Azure Compute", "Networking", "Azure AD"] }],
    faqs: {
      course: [{ q: "Does this prep for certs?", a: "Yes, aligns with AZ-104." }],
      learning: [{ q: "Are recordings available?", a: "Yes." }],
      career: [{ q: "Is Azure in demand?", a: "Extremely popular in corporate/enterprise sectors." }],
      enrollment: [{ q: "How do I enroll?", a: "Use the form below." }]
    },
    crossSell: [{ title: "Cyber Security", desc: "Secure your Azure networks.", link: "/courses/vapt-beginner" }]
  },

  // ---------------------------------------------------------
  // 10. GOOGLE CLOUD
  // ---------------------------------------------------------
  {
    id: "google-cloud",
    category: "Cloud",
    title: "Google Cloud Platform",
    heroSubtitle: "Deploy and manage modern applications on Google's global infrastructure.",
    image: "/assets/gcp.jpeg",
    level: "Intermediate",
    duration: "3 Months",
    mode: "Live + Recorded",
    price: "₹10,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Google+Cloud&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Mon / Wed", time: "8:00 PM – 10:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["GCP Compute Engine", "Kubernetes Engine (GKE)", "Cloud IAM"],
    whatYouWillLearn: ["Deploy apps on GCP", "Use Google Kubernetes Engine", "Manage Cloud Storage"],
    whoIsItFor: ["Developers using Google ecosystem"],
    prerequisites: ["Basic networking knowledge"],
    projects: [{ title: "GCP Web Deployment", outcome: "Host a scalable app on GCP.", skills: ["Compute Engine", "Cloud SQL", "VPC"] }],
    syllabus: [{ title: "Module 1: Core GCP", meta: "12 sessions", topics: ["Compute & Storage", "Networking", "IAM"] }],
    faqs: {
      course: [{ q: "Does this prep for certs?", a: "Yes, aligns with Associate Cloud Engineer." }],
      learning: [{ q: "Are recordings available?", a: "Yes." }],
      career: [{ q: "Is GCP in demand?", a: "High demand for data and containerized apps." }],
      enrollment: [{ q: "How do I enroll?", a: "Use the form below." }]
    },
    crossSell: [{ title: "DevOps", desc: "Automate your GCP deployments.", link: "/courses/cloud-infrastructure" }]
  },

  // ---------------------------------------------------------
  // 11. CYBER SECURITY FUNDAMENTALS
  // ---------------------------------------------------------
  {
    id: "vapt-beginner",
    category: "Cyber Security",
    title: "Web VAPT & Cyber Security",
    heroSubtitle: "Master offensive security. Perform real-world penetration testing on web apps and document findings professionally.",
    image: "/assets/cyberfund.jpeg",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹10,499",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Cyber+Security+Fundamentals&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "10:00 AM – 1:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Perform web app pentesting", "Master Burp Suite & Nmap", "Write vulnerability reports"],
    whatYouWillLearn: ["Understand enterprise network vulnerabilities", "Master industry-standard tools (Burp Suite, Nmap)", "Exploit OWASP Top 10 safely", "Harden Linux servers"],
    whoIsItFor: ["Network engineers", "Developers wanting to write secure code", "Aspiring SOC Analysts"],
    prerequisites: ["Basic networking (IPs, Ports, HTTP)", "Linux command line basics"],
    projects: [
      { title: "Live Target Reconnaissance", outcome: "Map out attack surfaces of an enterprise app.", skills: ["Nmap", "OSINT"] },
      { title: "Exploiting OWASP Top 10", outcome: "Exploit SQLi and XSS in a controlled lab.", skills: ["Burp Suite", "SQLi", "XSS"] }
    ],
    syllabus: [
      { title: "Module 1: Recon & Scanning", meta: "4 live sessions", topics: ["Passive vs Active Recon", "Nmap mastery"] },
      { title: "Module 2: Web App Attacks", meta: "8 live sessions", topics: ["Burp Suite setup", "SQL Injection", "XSS"] },
      { title: "Module 3: Reporting", meta: "3 live sessions", topics: ["CVSS Scoring", "Remediation"] }
    ],
    faqs: {
      course: [{ q: "Is it legal to use these tools?", a: "We teach you to use them ethically in controlled labs." }],
      learning: [{ q: "What happens if I miss a class?", a: "Recordings are available within 24 hours." }],
      career: [{ q: "Are there job opportunities?", a: "Top performers are evaluated for Vaptura Labs internships." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill the form and submit UTR below." }]
    },
    crossSell: [{ title: "Cloud Security", desc: "Learn to secure cloud infrastructure.", link: "/courses/cloud-infrastructure" }]
  },

  // ---------------------------------------------------------
  // 12. CEH (Certified Ethical Hacker)
  // ---------------------------------------------------------
  {
    id: "ceh-certification",
    category: "Cyber Security",
    title: "CEH (Certified Ethical Hacker)",
    heroSubtitle: "Prepare for the industry's most recognized ethical hacking certification with hands-on labs.",
    image: "/assets/ceh.jpeg",
    level: "Intermediate",
    duration: "4 Months",
    mode: "Live + Recorded",
    price: "₹12,999",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=CEH+(Certified+Ethical+Hacker)&embedded=true",
    batchDetails: { nextCohort: "Coming Soon", classes: "Tue / Thu", time: "8:00 PM – 10:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["System Hacking", "Malware Threats", "Sniffing & Session Hijacking"],
    whatYouWillLearn: ["Master the CEH methodology", "Perform network sniffing and footprinting", "Bypass basic security controls"],
    whoIsItFor: ["Aspiring Pentesters and Security Auditors"],
    prerequisites: ["Solid networking knowledge and basic Linux"],
    projects: [{ title: "Network Compromise Lab", outcome: "Audit and compromise a dummy network.", skills: ["Metasploit", "Wireshark", "Nmap"] }],
    syllabus: [{ title: "Module 1: Ethical Hacking Core", meta: "15 sessions", topics: ["Footprinting", "Scanning", "System Hacking"] }],
    faqs: {
      course: [{ q: "Does this include the exam voucher?", a: "No, this is a training/prep course." }],
      learning: [{ q: "Are recordings available?", a: "Yes." }],
      career: [{ q: "Is CEH required for jobs?", a: "It is highly preferred by HR departments globally." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill out the secure form below." }]
    },
    crossSell: [{ title: "Tech Interview Prep", desc: "Pass your security technical rounds.", link: "/courses/interview-prep" }]
  },

  // ---------------------------------------------------------
  // 13. INTERVIEW PREP
  // ---------------------------------------------------------
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
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?embedded=true", 
    batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "6:00 PM – 9:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
    cardOutcomes: ["Crack coding rounds", "Build a tech resume", "Master communication"],
    whatYouWillLearn: ["Solve common DSA questions", "Format your resume to pass ATS", "Communicate technical concepts clearly", "Optimize LinkedIn and GitHub"],
    whoIsItFor: ["Final year students applying for jobs", "Self-taught developers struggling in interviews", "Professionals switching companies"],
    prerequisites: ["Basic programming knowledge", "A completed portfolio of projects"],
    projects: [
      { title: "The Ultimate Resume Build", outcome: "Create an ATS-friendly, metrics-driven resume.", skills: ["ATS Optimization", "Personal Branding"] },
      { title: "Mock Interview Gauntlet", outcome: "Simulated technical interviews with feedback.", skills: ["Communication", "Live Coding"] }
    ],
    syllabus: [
      { title: "Module 1: Resume & Branding", meta: "3 live sessions", topics: ["Beating ATS", "GitHub Portfolio", "LinkedIn"] },
      { title: "Module 2: Technical Problem Solving", meta: "8 live sessions", topics: ["Common DSA Patterns", "Live coding etiquette"] },
      { title: "Module 3: Behavioral & HR", meta: "4 live sessions", topics: ["Answering 'Tell me about yourself'", "Salary negotiation"] }
    ],
    faqs: {
      course: [{ q: "Do you guarantee placement?", a: "We guarantee you will be equipped with the exact strategies required to pass interviews." }],
      learning: [{ q: "Are there mock interviews?", a: "Yes, with mentor feedback." }],
      career: [{ q: "Is the Vaptura Labs internship included?", a: "Direct pipeline is reserved for core technical tracks, but exceptional candidates are noticed." }],
      enrollment: [{ q: "How do I enroll?", a: "Fill out the form below." }]
    },
    crossSell: [{ title: "Full Stack Development", desc: "Build stronger projects for your resume.", link: "/courses/full-stack-web-dev" }]
  }
];

export const categories = ["All", "Development", "Cyber Security", "Cloud", "Programming Foundation", "Professional Dev"];