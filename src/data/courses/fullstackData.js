export const fullstackCourseData = {
  id: "full-stack-web-dev",
  category: "Development",
  title: "Full-Stack Web Development",
  heroSubtitle: "A 90-hour job-oriented program covering modern frontend, backend, databases, and DevOps. Build production-grade web applications with React, TypeScript, Node.js, Express, PostgreSQL, and Docker.",
  image: "/assets/fullstack.jpeg",
  level: "Beginner to Advanced",
  duration: "90 Hours (4-5 Months)",
  mode: "Live + Recorded",
  originalPrice: "₹14,999",
  price: "₹7,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/fullstack-webdevelopment-course",
  syllabusPdf: "/syllabi/full-stack-web-development.pdf",
  enquiryLink: "/contact?course=Full-Stack+Web+Development",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Tue / Thu / Fri",
    time: "7:30 PM – 9:30 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Build Full-Stack Apps with React, TypeScript & Node.js",
    "Design Relational Databases with PostgreSQL & SQL",
    "Containerize & Deploy with Docker, Git & Cloud"
  ],
  whatYouWillLearn: [
    "Write semantic HTML5, modern CSS3, Flexbox, Grid, and responsive UI with Tailwind CSS",
    "Master JavaScript (ES6+), DOM manipulation, Event Handling, and Asynchronous programming",
    "Develop robust, type-safe web applications using TypeScript interfaces and generics",
    "Build dynamic Single Page Applications (SPAs) using React Hooks and React Router",
    "Design and architect RESTful APIs using Node.js, Express.js, and MVC architecture",
    "Model relational database schemas and execute complex queries using PostgreSQL & SQL",
    "Implement secure JWT authentication, password hashing, and role-based authorization",
    "Containerize full-stack applications with Docker and deploy to production cloud hosting"
  ],
  whoIsItFor: [
    "College students and freshers seeking high-demand Full-Stack Developer roles",
    "Beginners looking for a structured, end-to-end web development career roadmap",
    "Frontend developers wanting to master backend architecture, SQL databases, and DevOps",
    "Professionals transitioning from non-tech or legacy IT roles into software engineering"
  ],
  prerequisites: [
    "Basic computer literacy and web navigation skills",
    "A laptop or desktop (Windows, Mac, or Linux) with at least 8GB RAM recommended",
    "Commitment to write code daily, attend live classes, and complete project assignments",
    "No prior programming or coding knowledge required"
  ],
  projects: [
    {
      title: "Mini Project 1: Type-Safe Real-Time API Dashboard",
      outcome: "Build an interactive, responsive frontend application consuming live third-party REST APIs with comprehensive state management, TypeScript type-safety, and client-side routing.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Fetch API", "React Router"]
    },
    {
      title: "Mini Project 2: Secure Multi-User RESTful API Service",
      outcome: "Architect and build a scalable backend service featuring JWT authentication, Bcrypt password hashing, relational PostgreSQL database integration, and thorough Postman API documentation.",
      skills: ["Node.js", "Express.js", "PostgreSQL", "JWT Auth", "Postman"]
    },
    {
      title: "Capstone Project: Production Enterprise Full-Stack Application",
      outcome: "Develop an end-to-end full-stack web platform combining a TypeScript/React frontend, Express backend, PostgreSQL database, Docker containerization, and cloud deployment pipelines.",
      skills: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "CI/CD"]
    },
    {
      title: "Final Capstone Evaluation: Industry Assessment Deliverable",
      outcome: "Independently implement a complex business-use-case feature specification assigned by senior instructors, followed by a formal production code review and viva defense.",
      skills: ["System Architecture", "Production Debugging", "Code Review", "Clean Code"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Web Development Fundamentals",
      meta: "3 Hours • Core Architecture",
      topics: [
        "How the Internet and Web Work (DNS, IP, Hosting, Domains)",
        "Client vs Server Architecture Breakdown",
        "HTTP / HTTPS Protocol Basics, Headers & Status Codes",
        "Browser Internals & Chrome Developer Tools Mastery",
        "VS Code Setup, Extensions & Productivity Shortcuts",
        "Basic Command Line & Terminal Navigation",
        "Introduction to Git & Local Version Control"
      ]
    },
    {
      title: "Module 2: HTML5 & Semantic Web",
      meta: "5 Hours • Structure & SEO",
      topics: [
        "HTML Document Structure, DOCTYPE, and Metadata",
        "Headings, Paragraphs, Text Formatting & Hierarchy",
        "Tags vs Elements and Block vs Inline Display Rules",
        "Lists, Hyperlinks, and Anchor Tag Best Practices",
        "Images, Audio, Video, iframe, and Responsive Media",
        "Semantic HTML Elements (header, nav, main, section, article, footer)",
        "Tables, Complex HTML Forms, Input Types & Form Attributes",
        "HTML Validation, Accessibility (a11y) Standards & Core SEO"
      ]
    },
    {
      title: "Module 3: CSS3 & Responsive Design",
      meta: "10 Hours • Styling & Layouts",
      topics: [
        "CSS Syntax, Selectors, Colors, Fonts & Typography",
        "The Cascade, Specificity, and Inheritance Rules",
        "CSS Box Model (Margin, Padding, Border, Content, box-sizing)",
        "Display Properties, Positioning (static, relative, absolute, fixed, sticky)",
        "Pseudo-classes (:hover, :focus, :nth-child) & Pseudo-elements (::before, ::after)",
        "CSS Flexbox: Parent vs Child properties, alignment & layouts",
        "CSS Grid: Columns, Rows, Gap, Template Areas & Responsive Grids",
        "Units (px, rem, em, %, vh, vw), Transforms, Transitions & Animations",
        "Media Queries, Breakpoints, Mobile-First Design & CSS Variables",
        "UI Frameworks: Bootstrap Grid & Components, Introduction to Tailwind CSS"
      ]
    },
    {
      title: "Module 4: JavaScript Fundamentals",
      meta: "15 Hours • Core Logic",
      topics: [
        "JavaScript Introduction, Execution Context & Call Stack",
        "Variables (var, let, const), Data Types & Type Conversion",
        "Arithmetic, Relational, Logical, and Ternary Operators",
        "Control Flow: if/else, switch, and conditional execution",
        "Loops: for, while, do-while, for...in, for...of, and forEach",
        "Arrays, Objects, and Deep vs Shallow Copying",
        "Higher-Order Array Methods: map(), filter(), reduce(), find(), some(), every()",
        "Functions: Declarations, Expressions, Parameters, Arguments & Return Values",
        "Scope (Block, Function, Global), Lexical Scope, and Closures",
        "Callbacks, Arrow Functions, Template Literals, Destructuring, Spread & Rest"
      ]
    },
    {
      title: "Module 5: DOM & Browser Programming",
      meta: "8 Hours • Interactive UI",
      topics: [
        "Understanding the Document Object Model (DOM) Tree",
        "Selecting Elements (getElementById, querySelector, querySelectorAll)",
        "Modifying Content, Attributes, and Manipulating CSS Classes",
        "Creating, Appending, and Removing Dynamic Elements",
        "Event Handlers, Event Listeners (addEventListener), and Event Objects",
        "Event Bubbling, Event Capturing, and Event Delegation",
        "JavaScript Form Handling, Validation & Custom Error States",
        "Client-Side Storage: LocalStorage, SessionStorage & Cookie Basics",
        "Practical Projects: Building dynamic DOM-based interactive applications"
      ]
    },
    {
      title: "Module 6: Asynchronous JavaScript & APIs",
      meta: "7 Hours • Networking",
      topics: [
        "Synchronous vs Asynchronous JavaScript & Event Loop Explained",
        "Callback Hell and Managing Async Workflows",
        "Promises Architecture: States, Chaining, catch(), and finally()",
        "Modern Asynchronous Code using async / await and Error Handling",
        "The Fetch API & Making HTTP Network Requests",
        "JSON Formatting, Parsing (JSON.parse) & Serialization (JSON.stringify)",
        "REST API Concepts, HTTP Methods (GET, POST, PUT, DELETE) & Status Codes",
        "CORS (Cross-Origin Resource Sharing) Fundamentals & API Integration",
        "Practical: Build an interactive application consuming live production APIs"
      ]
    },
    {
      title: "Module 7: TypeScript Fundamentals",
      meta: "5 Hours • Type Safety",
      topics: [
        "Why TypeScript? Static vs Dynamic Typing Benefits",
        "TypeScript Compiler (tsc), tsconfig.json & Environment Setup",
        "Primitive Types, Type Inference, Any, Unknown, and Never",
        "Typed Arrays, Tuples, and Object Type Annotations",
        "Interfaces vs Type Aliases and Extending Types",
        "Union Types, Literal Types, and Type Narrowing",
        "Typing Functions, Optional Parameters, and Return Types",
        "Introduction to TypeScript Generics for Reusable Components",
        "Integrating TypeScript with Modern JavaScript Web Projects"
      ]
    },
    {
      title: "Module 8: React Development",
      meta: "12 Hours • Frontend Framework",
      topics: [
        "React Philosophy, Virtual DOM & React Project Setup with Vite",
        "Functional Components, JSX Syntax, and Rendering Dynamics",
        "Props, State Management, and Component Lifecycle",
        "Event Handling, Conditional Rendering, Lists & Keys Best Practices",
        "Controlled Forms, Multi-Input Handling & Form State",
        "Core React Hooks: useState, useEffect, useRef, and Custom Hook Basics",
        "Component Composition, Prop Drilling & Context API for Global State",
        "Consuming REST APIs inside React applications using useEffect",
        "Multi-Page Navigation using React Router v6 & Protected Routes",
        "React DevTools, Debugging Techniques & Performance Optimization",
        "Practical: Build a complete React + TypeScript + API frontend application"
      ]
    },
    {
      title: "Module 9: Node.js & Express Backend",
      meta: "10 Hours • Server Architecture",
      topics: [
        "Introduction to Node.js, V8 Engine & Non-Blocking I/O",
        "npm Package Manager, package.json, and Dependency Management",
        "CommonJS vs ES Modules and Built-in Modules (fs, path, os)",
        "Environment Variables and Secure Configuration with dotenv",
        "Express.js Architecture, Server Initialization & Port Binding",
        "Express Routing, Request (req) & Response (res) Object Handling",
        "Middleware Architecture: Built-in, Custom, Third-Party & Error Handlers",
        "Designing Clean RESTful APIs following the MVC Controller Pattern",
        "Building Full CRUD API Endpoints with Data Validation",
        "API Testing and Automated Workflows using Postman Collections"
      ]
    },
    {
      title: "Module 10: Database & Authentication",
      meta: "8 Hours • Data & Security",
      topics: [
        "Relational Database Fundamentals (RDBMS vs NoSQL)",
        "Tables, Primary Keys, Foreign Keys, Unique & Check Constraints",
        "Core SQL Commands: SELECT, INSERT, UPDATE, DELETE",
        "Filtering & Aggregation: WHERE, ORDER BY, GROUP BY, HAVING, COUNT, SUM",
        "Mastering SQL Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
        "PostgreSQL Server Setup & Graphical Management (pgAdmin)",
        "Connecting Node.js/Express to PostgreSQL using pg Driver / Connection Pools",
        "Authentication vs Authorization and Password Hashing with Bcrypt",
        "JSON Web Tokens (JWT): Generating, Signing, Verifying & Protected Routes",
        "Building User Registration, Login Flows & Role-Based Access Control (RBAC)"
      ]
    },
    {
      title: "Module 11: Git, GitHub, Docker & Deployment",
      meta: "5 Hours • DevOps & Cloud",
      topics: [
        "Git Workflows: git init, add, commit, push, pull, log & status",
        "Branching Strategies, Merge Conflicts, and Pull Request (PR) Workflows",
        "Managing Environment Variables across Development vs Production",
        "Docker Fundamentals: Images, Containers & Daemon Architecture",
        "Writing a Custom Dockerfile for Node.js and React Applications",
        "Docker Compose Awareness for Multi-Container (App + DB) Environments",
        "Production Build Optimization (Vite build, Node clustering basics)",
        "Deploying Full-Stack Applications to Cloud Hosting Platforms"
      ]
    },
    {
      title: "Module 12: Full Stack Project & Industry Preparation",
      meta: "2 Hours Guided + Independent Capstone",
      topics: [
        "Integrating Frontend (React + TypeScript) with Backend (Express + PostgreSQL)",
        "End-to-End Authentication & Persistent Session Management",
        "Dockerizing the Entire Full-Stack Architecture for Deployment",
        "Full-Stack Debugging, Error Logging & Clean Code Standards",
        "Technical Project Presentation & Architecture Walkthrough",
        "Frontend, Backend, Database, and System Design Interview Question Drills",
        "GitHub Portfolio Optimization & Production Resume Formatting"
      ]
    }
  ],
  faqs: {
    course: [
      {
        q: "Do I need prior coding knowledge for this 90-hour program?",
        a: "No. The course starts with basic web fundamentals and HTML/CSS before advancing into JavaScript, TypeScript, React, Node.js, and PostgreSQL."
      },
      {
        q: "Why does this course teach PostgreSQL instead of MongoDB?",
        a: "PostgreSQL is currently the industry standard for enterprise applications requiring strict relational data integrity, complex transactions, and scalability. Learning SQL provides a stronger career foundation for developer roles."
      }
    ],
    learning: [
      {
        q: "What happens if I miss a live class?",
        a: "Every live class is recorded and made available in your student portal within 24 hours. You have access to all recordings for the program duration plus 1 full year."
      },
      {
        q: "How are assignments and projects evaluated?",
        a: "All assignments are submitted through GitHub repositories. Instructors review your commits, code structure, and best practices to provide constructive feedback."
      }
    ],
    career: [
      {
        q: "How does the Vaptura Labs internship pipeline work?",
        a: "Top-performing students who complete all mini projects, the major capstone, and pass internal evaluations will be invited for an interview evaluation for internship opportunities with Vaptura Labs."
      }
    ],
    enrollment: [
      {
        q: "How do I secure my seat?",
        a: "Click 'Apply for Next Cohort', complete the payment on Cashfree (₹7,999 + 18% GST), and your enrollment confirmation and batch details will be delivered immediately."
      }
    ]
  },
  crossSell: [
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Learn to deploy, scale, and automate your full-stack applications using AWS, GCP, and CI/CD pipelines.",
      link: "/courses/cloud-infrastructure"
    },
    {
      title: "Web VAPT & Cyber Security",
      desc: "Learn offensive penetration testing techniques to secure the web applications and APIs you build.",
      link: "/courses/vapt-beginner"
    }
  ]
};