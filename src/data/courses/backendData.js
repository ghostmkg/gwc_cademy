export const backendCourseData = {
  id: "backend-development",
  category: "Development",
  title: "Back End Web Development",
  heroSubtitle: "Design scalable RESTful APIs, master both SQL & NoSQL databases, and implement enterprise-grade server security using Node.js and Express.",
  image: "/assets/backend.jpeg",
  level: "Intermediate",
  duration: "4 Months",
  mode: "Live + Recorded",
  originalPrice: "₹10,499",
  price: "₹4,999 + 18% GST",
  enrollmentLink: "https://payments.cashfree.com/forms/backend-course",
  syllabusPdf: "/syllabi/backend-development.pdf",
  enquiryLink: "/contact?course=Back+End+Development",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Sat / Sun",
    time: "2:00 PM – 5:00 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Build Secure RESTful APIs",
    "Master SQL & NoSQL Databases",
    "Implement JWT Authentication"
  ],
  whatYouWillLearn: [
    "Architect and build robust backend servers from scratch using Node.js and Express.js",
    "Design both Relational (PostgreSQL) and Non-Relational (MongoDB) database schemas",
    "Test, document, and debug endpoints professionally using Postman",
    "Implement secure user authentication and authorization using JWT and Bcrypt",
    "Manage server code effectively using Git and collaborate via GitHub",
    "Handle advanced server tasks like file uploads, error handling, and middleware",
    "Deploy backend services and databases live to cloud hosting platforms"
  ],
  whoIsItFor: [
    "Frontend Developers wanting to master server-side logic and become Full-Stack",
    "Students aiming for specialized Backend Engineer or API Developer roles",
    "Developers transitioning from PHP/Java to modern JavaScript-based backends",
    "Tech professionals wanting to understand database architecture and server security"
  ],
  prerequisites: [
    "Basic knowledge of JavaScript (Variables, Functions, ES6+ Arrays/Objects)",
    "Understanding of basic web concepts (HTTP, JSON, Client vs Server)",
    "A computer with at least 8GB RAM and an internet connection"
  ],
  projects: [
    {
      title: "Mini Project 1: RESTful Task Manager API",
      outcome: "Build a complete CRUD API using Express.js and test every endpoint thoroughly using Postman environments and collections.",
      skills: ["Node.js", "Express", "Postman", "API Routing"]
    },
    {
      title: "Mini Project 2: Secure User Authentication Service",
      outcome: "Develop a secure login and registration system. Hash passwords securely and issue JSON Web Tokens (JWT) to protect private API routes.",
      skills: ["JWT", "Bcrypt", "Middleware", "Security"]
    },
    {
      title: "Capstone: E-Commerce Inventory & Payment API",
      outcome: "Architect a complex backend connecting to both MongoDB and PostgreSQL, featuring product queries, user roles, file uploads, and simulated Stripe payment logic.",
      skills: ["Databases", "Architecture", "File Uploads", "Git/GitHub"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Backend Architecture & Node.js Core",
      meta: "4 Hours • Server Foundations",
      topics: [
        "Client-Server Architecture and the Request/Response Cycle",
        "Introduction to Node.js and the V8 JavaScript Engine",
        "The Node.js Event Loop and Non-Blocking I/O",
        "NPM (Node Package Manager) and package.json management",
        "Core Node Modules: fs, path, os, and http",
        "Building a raw HTTP server without frameworks"
      ]
    },
    {
      title: "Module 2: Git, GitHub & Version Control",
      meta: "4 Hours • Code Management",
      topics: [
        "Git Fundamentals: git init, add, commit, status, and log",
        "Setting up GitHub and managing Remote Repositories",
        "Branching strategies and resolving Merge Conflicts",
        "Writing effective commit messages and .gitignore files",
        "Collaborative workflows via Pull Requests (PRs)"
      ]
    },
    {
      title: "Module 3: Express.js & REST API Design",
      meta: "8 Hours • Web Frameworks",
      topics: [
        "Introduction to Express.js and Server Setup",
        "Routing: GET, POST, PUT, PATCH, DELETE methods",
        "Handling Request Objects (req.params, req.query, req.body)",
        "Designing Clean, RESTful API Endpoints",
        "Understanding HTTP Status Codes (200, 201, 400, 404, 500)"
      ]
    },
    {
      title: "Module 4: API Testing with Postman",
      meta: "4 Hours • Quality Assurance",
      topics: [
        "Postman Workspace Setup and Interface Overview",
        "Executing CRUD requests and analyzing API responses",
        "Managing Postman Environments and Global Variables",
        "Passing Authorization Headers and Tokens in Postman",
        "Saving Collections and Documenting APIs for Frontend Teams"
      ]
    },
    {
      title: "Module 5: NoSQL Databases with MongoDB",
      meta: "8 Hours • Flexible Data",
      topics: [
        "Relational vs Non-Relational Databases",
        "Setting up MongoDB Atlas (Cloud Database)",
        "Introduction to Mongoose ODM (Object Data Modeling)",
        "Defining Schemas and Models in Mongoose",
        "Performing NoSQL CRUD operations and querying data",
        "Connecting Express APIs to MongoDB"
      ]
    },
    {
      title: "Module 6: Relational Databases with PostgreSQL",
      meta: "8 Hours • Structured Data",
      topics: [
        "Introduction to SQL and Relational Data Modeling",
        "Setting up PostgreSQL and pgAdmin",
        "Core SQL Commands (SELECT, INSERT, UPDATE, DELETE)",
        "Primary Keys, Foreign Keys, and Table Relationships",
        "Connecting Node.js to PostgreSQL using pg-pool",
        "Executing raw queries vs using an ORM (Prisma/Sequelize basics)"
      ]
    },
    {
      title: "Module 7: Middleware & Advanced Express",
      meta: "6 Hours • Server Logic",
      topics: [
        "Understanding the Middleware pipeline (next())",
        "Application-level vs Router-level Middleware",
        "Implementing Custom Error Handling Middleware",
        "Environment Variables (.env) for securing secrets",
        "CORS (Cross-Origin Resource Sharing) configuration"
      ]
    },
    {
      title: "Module 8: Security & Authentication",
      meta: "8 Hours • Protecting APIs",
      topics: [
        "Authentication vs Authorization concepts",
        "Password Hashing and Salting using Bcrypt.js",
        "JSON Web Tokens (JWT) Architecture and Implementation",
        "Creating Login and Registration API endpoints",
        "Building Auth Middleware to protect private routes",
        "Role-Based Access Control (Admin vs User permissions)"
      ]
    },
    {
      title: "Module 9: File Uploads & External Services",
      meta: "6 Hours • Advanced Features",
      topics: [
        "Handling Multipart/Form-Data in Node.js",
        "Implementing Image/File Uploads using Multer",
        "Serving static files through Express",
        "Integrating Third-Party APIs (e.g., Stripe/Razorpay basics)",
        "Sending automated emails from the server (Nodemailer)"
      ]
    },
    {
      title: "Module 10: Deployment & Capstone",
      meta: "8 Hours • Production Live",
      topics: [
        "Preparing the Node.js application for Production",
        "Basic Docker concepts for Backend Apps",
        "Deploying the API to cloud providers (Render/Heroku/AWS EC2)",
        "Deploying and securing production databases",
        "Final Capstone Architecture presentation and Code Review"
      ]
    }
  ],
  faqs: {
    course: [
      { q: "Which database do we learn?", a: "To make you a well-rounded engineer, you will learn BOTH. We cover NoSQL using MongoDB (Mongoose) and Relational SQL using PostgreSQL." },
      { q: "Do I need to know Frontend (React/HTML)?", a: "No. This course focuses entirely on the server side. You will interact with your code using Postman, so no frontend knowledge is required to succeed here." }
    ],
    learning: [
      { q: "Are recordings provided?", a: "Yes, every live session is recorded and uploaded to your dashboard within 24 hours." },
      { q: "Will we use Git?", a: "Yes, Git and GitHub are deeply integrated into the course. You will learn to commit code, branch, and push your backend projects to GitHub just like in a real tech job." }
    ],
    career: [
      { q: "Are there backend-specific roles?", a: "Absolutely. Backend Engineers are highly specialized and often command some of the highest salaries in web development because they handle data, security, and server logic." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the Apply button and complete your checkout via the secure Cashfree gateway." }
    ]
  },
  crossSell: [
    { title: "Cloud Infrastructure & DevOps", desc: "Learn to deploy, scale, and monitor your backend servers.", link: "/courses/cloud-infrastructure" },
    { title: "Web VAPT & Cyber Security", desc: "Learn how hackers attack servers, so you can build stronger APIs.", link: "/courses/vapt-beginner" }
  ]
};