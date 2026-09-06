export const webDevCourseData = {
  id: "web-development",
  category: "Development",
  title: "Complete Web Development",
  heroSubtitle: "Learn both frontend and backend foundations. Build responsive websites and robust server-side APIs from scratch using HTML, CSS, JavaScript, Node.js, and databases.",
  image: "/assets/web-dev.jpeg",
  level: "Beginner",
  duration: "4 Months",
  mode: "Live + Recorded",
  originalPrice: "₹9,999",
  price: "₹5,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/web-development-cources",
  syllabusPdf: "/syllabi/web-development.pdf",
  enquiryLink: "/contact?course=Complete+Web+Development",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Mon / Wed / Fri",
    time: "6:00 PM – 8:00 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Master HTML5, CSS3 & JavaScript",
    "Build Backend APIs with Node & Express",
    "Connect to Real Databases (SQL/NoSQL)"
  ],
  whatYouWillLearn: [
    "Write clean, semantic HTML5 structure for SEO and accessibility",
    "Style modern, responsive layouts using CSS3 Flexbox, Grid, and Bootstrap",
    "Write foundational JavaScript to add logic, form validation, and DOM interactivity",
    "Understand Client-Server architecture and how the internet functions",
    "Build backend servers and RESTful APIs using Node.js and Express.js",
    "Design and connect to databases (MongoDB/MySQL) to perform CRUD operations",
    "Manage project code using Git/GitHub and deploy full web apps live to the internet"
  ],
  whoIsItFor: [
    "Absolute beginners looking to learn end-to-end web development",
    "Designers who want to learn how to code their designs and build backends",
    "College students building their first full-stack technical portfolio",
    "Professionals who want a cost-effective, comprehensive introduction to full web dev"
  ],
  prerequisites: [
    "Basic computer literacy and web navigation skills",
    "A laptop or desktop (Windows, Mac, or Linux)",
    "No prior programming or coding knowledge required – we start from zero"
  ],
  projects: [
    {
      title: "Mini Project 1: Responsive Agency UI",
      outcome: "Build a responsive, multi-section website using HTML5, modern CSS3 Flexbox, and Bootstrap.",
      skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Mini Project 2: Dynamic Task Manager",
      outcome: "Develop an interactive web app using JavaScript to manipulate the DOM, handle events, and store data in LocalStorage.",
      skills: ["JavaScript", "DOM Manipulation", "Event Listeners"]
    },
    {
      title: "Capstone: Database-Driven Web Application",
      outcome: "Design a complete web application with a frontend UI that communicates with your own custom Node.js/Express backend and a live database.",
      skills: ["Node.js", "Express", "Databases", "Full-Stack Deployment"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Web Fundamentals & HTML5",
      meta: "8 Hours • Web Structure",
      topics: [
        "How the Internet, Clients, and Servers Work",
        "VS Code Setup & Basic Command Line",
        "HTML Document Structure, Headings, and Formatting",
        "Semantic HTML5 Elements (header, nav, main, footer)",
        "Images, Media, Tables, and Complex HTML Forms",
        "Native Form Validation and Basic Accessibility (a11y)"
      ]
    },
    {
      title: "Module 2: CSS3 Fundamentals & Styling",
      meta: "8 Hours • Design & Typography",
      topics: [
        "CSS Selectors, Colors, Fonts, and Typography",
        "The CSS Box Model (Margin, Padding, Border)",
        "Understanding The Cascade, Specificity, and Inheritance",
        "Display Properties & Positioning (Relative, Absolute, Fixed)",
        "CSS Transitions, Transforms, and Visual Effects"
      ]
    },
    {
      title: "Module 3: Modern Layouts & Responsive Design",
      meta: "8 Hours • Flexbox & Grid",
      topics: [
        "CSS Flexbox: Containers, Alignment, and Spacing",
        "CSS Grid Layouts and Grid Areas",
        "Responsive Design Principles & Viewport Meta Tag",
        "Media Queries and Mobile-First Breakpoints",
        "Introduction to the Bootstrap Grid and Components"
      ]
    },
    {
      title: "Module 4: Git & GitHub for Developers",
      meta: "4 Hours • Version Control",
      topics: [
        "Git Installation and Core Workflow (init, add, commit)",
        "Branching, Merging, and Resolving Conflicts",
        "Setting up Remote Repositories on GitHub",
        "Pushing, Pulling, and Collaborating on Code"
      ]
    },
    {
      title: "Module 5: JavaScript Fundamentals",
      meta: "10 Hours • Core Logic",
      topics: [
        "JavaScript Syntax, Variables (let, const), and Data Types",
        "Operators, Conditional Logic (If/Else), and Loops",
        "Functions, Arrays, and Object Basics",
        "The Document Object Model (DOM) and Element Selection",
        "Event Listeners, Form Validation, and DOM Manipulation"
      ]
    },
    {
      title: "Module 6: Advanced JavaScript & Async Programming",
      meta: "6 Hours • API Integration",
      topics: [
        "ES6+ Features (Arrow Functions, Destructuring, Spread)",
        "Synchronous vs Asynchronous JavaScript",
        "Promises, Async / Await, and Error Handling",
        "Making HTTP Requests with the Fetch API",
        "JSON Data Parsing and Serialization"
      ]
    },
    {
      title: "Module 7: Backend Basics & Node.js",
      meta: "8 Hours • Server-Side Intro",
      topics: [
        "Introduction to Backend Development",
        "Node.js Architecture and the V8 Engine",
        "NPM (Node Package Manager) and package.json",
        "Core Node Modules (fs, path, http)",
        "Building a Basic HTTP Server from Scratch"
      ]
    },
    {
      title: "Module 8: Express.js & RESTful APIs",
      meta: "10 Hours • API Development",
      topics: [
        "Introduction to the Express.js Framework",
        "Routing, Requests, and Responses",
        "Middleware Concepts and Error Handling",
        "Designing RESTful APIs (GET, POST, PUT, DELETE)",
        "Testing APIs using Postman"
      ]
    },
    {
      title: "Module 9: Databases & Data Modeling",
      meta: "8 Hours • Persistent Storage",
      topics: [
        "Relational (SQL) vs Non-Relational (NoSQL) Databases",
        "Database Setup and Connection via Node.js",
        "Performing CRUD Operations (Create, Read, Update, Delete)",
        "Basic Data Modeling and Schemas",
        "Connecting the Frontend Application to the Database"
      ]
    },
    {
      title: "Module 10: Full-Stack Deployment & Portfolio",
      meta: "5 Hours • Going Live",
      topics: [
        "Preparing Frontend and Backend code for Production",
        "Deploying Frontend to Netlify/Vercel",
        "Deploying Backend Servers to Render/Heroku",
        "Database Cloud Hosting Integrations",
        "Final Capstone Project Presentation and Code Review"
      ]
    }
  ],
  faqs: {
    course: [
      { q: "Is this course for Frontend or Backend?", a: "Both! This is a complete Web Development foundation course. You will learn how to design the visual frontend and code the backend server that powers it." },
      { q: "Do I need any previous coding experience?", a: "Absolutely not. This course is designed from ground zero. We will teach you how the internet works before writing a single line of code." }
    ],
    learning: [
      { q: "Will I build my own website?", a: "Yes! Your final project will be a fully functional database-driven web application that you will code from scratch and deploy live on the internet." },
      { q: "Are recordings provided if I miss a live session?", a: "Yes, every live class is recorded and available within 24 hours on your student dashboard." }
    ],
    career: [
      { q: "What is the difference between this and the Full-Stack React Course?", a: "This course is the perfect starting point and covers Vanilla JavaScript, HTML/CSS, and backend basics. The advanced Full-Stack course dives into complex enterprise frameworks like React.js, TypeScript, and Docker." },
      { q: "Does this qualify for the Vaptura Labs internship?", a: "Yes, top performers who build exceptional database-driven capstone projects will be evaluated for Junior Web Developer internship roles." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the Apply button, complete the secure checkout process on Cashfree, and your seat will be instantly confirmed via email and WhatsApp." }
    ]
  },
  crossSell: [
    { title: "Front End Development", desc: "Take your UI skills to the next level by mastering React.js and advanced State Management.", link: "/courses/frontend-development" },
    { title: "Cloud Infrastructure & DevOps", desc: "Learn to scale and automate the servers you just learned how to build.", link: "/courses/cloud-infrastructure" }
  ]
};