export const pythonCourseData = {
  id: "python-foundation",
  category: "Programming Foundation",
  title: "Python Programming Foundation",
  heroSubtitle: "Go from complete beginner to confident Python developer. Master core logic, OOP, APIs with FastAPI, database integration, and automation.",
  image: "/assets/python-thumb.jpeg", 
  level: "Absolute Beginner",
  duration: "3 Months",
  mode: "Live + Recorded",
  originalPrice: "₹10,999",
  price: "₹6,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/python-ourse", // Fixed typo in URL
  syllabusPdf: "/syllabi/python-programming-syllabus.pdf",
  batchDetails: {
    nextCohort: "15 September 2026",
    classes: "Mon / Wed / Fri",
    time: "7:30 PM – 9:30 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Write clean, modular Python scripts",
    "Build RESTful APIs with FastAPI & Flask",
    "Perform Database CRUD operations"
  ],
  whatYouWillLearn: [
    "Write Python programs confidently from scratch using clean code principles",
    "Understand deep programming logic, iterators, and generators",
    "Work with Object-Oriented Programming (OOP) and Magic Methods",
    "Develop high-performance REST APIs using FastAPI and Flask frameworks",
    "Automate repetitive computer tasks, file sorting, and system operations",
    "Integrate Python with MySQL and SQLite databases for persistent storage",
    "Utilize Git/GitHub for version control and industry-standard deployment"
  ],
  whoIsItFor: [
    "Students and freshers starting programming from zero",
    "IT professionals transitioning into DevSecOps, Cloud, or Cybersecurity",
    "Working professionals who want to automate manual daily tasks",
    "Learners planning to master backend development and API architecture"
  ],
  prerequisites: [
    "Basic computer usage and internet navigation",
    "Willingness to attend live classes regularly and write code",
    "Commitment to practice logic building and complete assignments",
    "No prior coding experience required"
  ],
  projects: [
    { 
      title: "Automated System Utility Script", 
      outcome: "Write an automation playbook that traverses directories, sorts files by extension, and logs activities securely.",
      skills: ["OS Module", "Automation", "File Handling", "Logging"] 
    },
    { 
      title: "Real-Time Service Backend API", 
      outcome: "Build a robust backend system using FastAPI to handle live user requests, complete with routing and Pydantic data validation.",
      skills: ["FastAPI", "REST APIs", "JSON", "Routing"] 
    },
    { 
      title: "Capstone: Database-Driven Application", 
      outcome: "Develop a complete Python application that connects to a MySQL database to perform secure CRUD operations with parameterized queries.",
      skills: ["Python OOP", "MySQL", "Exception Handling", "Git"] 
    }
  ],
  syllabus: [
    { 
      title: "Module 1: Introduction & Environment", 
      meta: "Setup & Tooling", 
      topics: ["Python Architecture & Execution", "VS Code / PyCharm Setup", "Virtual Environments & pip", "Jupyter Notebooks"] 
    },
    { 
      title: "Module 2: Fundamentals & Syntax", 
      meta: "Core Basics", 
      topics: ["Variables, Identifiers & Keywords", "Data Types & Type Casting", "Arithmetic & Logical Operators", "Input/Output Formatting"] 
    },
    { 
      title: "Module 3: Control Flow & Decisions", 
      meta: "Logic Building", 
      topics: ["if-elif-else & match-case", "for and while loops", "break, continue, pass", "Practical Logic Exercises"] 
    },
    { 
      title: "Module 4: Data Structures", 
      meta: "Memory Management", 
      topics: ["Lists & Tuples", "Sets & Dictionaries", "Stack & Queue Basics", "collections Module (deque, Counter)"] 
    },
    { 
      title: "Module 5: Strings & Manipulation", 
      meta: "Text Processing", 
      topics: ["String Slicing & Immutability", "f-Strings & Formatting", "Searching & Replacing Text", "Splitting and Joining"] 
    },
    { 
      title: "Module 6: Functions & Functional Programming", 
      meta: "Code Reusability", 
      topics: ["Parameters (*args, **kwargs)", "Local vs Global Scope", "Recursive Functions", "Lambda, map(), filter(), reduce()"] 
    },
    { 
      title: "Module 7: Comprehensions & Generators", 
      meta: "Advanced Iteration", 
      topics: ["List & Dict Comprehensions", "Iterators (iter, next)", "Generators & yield Keyword", "Memory-Efficient Programming"] 
    },
    { 
      title: "Module 8: Object-Oriented Programming", 
      meta: "OOP Paradigm", 
      topics: ["Classes, Objects, & self", "Constructors & Encapsulation", "Inheritance & Polymorphism", "Special / Magic Methods"] 
    },
    { 
      title: "Module 9: Modules & Standard Library", 
      meta: "Extending Python", 
      topics: ["Creating Custom Packages", "os, sys, and pathlib", "math, random, and datetime", "subprocess & Command-Line Args"] 
    },
    { 
      title: "Module 10: Exception Handling & Logging", 
      meta: "Error Management", 
      topics: ["try, except, else, finally", "Raising Custom Exceptions", "Exception Best Practices", "Application Logging Levels"] 
    },
    { 
      title: "Module 11: File Handling & Formats", 
      meta: "Persistent Data", 
      topics: ["File Modes & Context Managers (with)", "Reading/Writing Text Files", "Working with CSV and JSON", "Handling ZIP Files"] 
    },
    { 
      title: "Module 12: Regular Expressions", 
      meta: "Pattern Matching", 
      topics: ["re Module Basics", "Character Classes & Quantifiers", "search(), match(), findall()", "Practical Data Validation"] 
    },
    { 
      title: "Module 13: Database Programming", 
      meta: "SQL Integration", 
      topics: ["SQLite Basics", "MySQL Connectivity", "Secure CRUD Operations", "Parameterized Queries & Rollbacks"] 
    },
    { 
      title: "Module 14: API Development & Consumption", 
      meta: "Web Services", 
      topics: ["HTTP Methods & Status Codes", "Consuming APIs with requests", "Flask Routing Basics", "Building APIs with FastAPI & Pydantic"] 
    },
    { 
      title: "Module 15: Django Web Fundamentals", 
      meta: "Web Frameworks", 
      topics: ["Django Architecture & Apps", "URLs, Views, & Templates", "Django ORM & Migrations", "Admin Panel & Auth Basics"] 
    },
    { 
      title: "Module 16: Multithreading & Dates", 
      meta: "Concurrency", 
      topics: ["Process vs Thread", "threading Module Lifecycle", "Thread Synchronization", "Advanced datetime manipulation"] 
    },
    { 
      title: "Module 17: Data Analysis Essentials", 
      meta: "Data Science Prep", 
      topics: ["NumPy Arrays & Operations", "Pandas DataFrames", "Data Cleaning Basics", "Visualizations with Matplotlib"] 
    },
    { 
      title: "Module 18: Tools & Version Control", 
      meta: "Industry Standards", 
      topics: ["Requirements & Virtual Envs", "Testing with pytest & unittest", "Git Fundamentals (add, commit, push)", "GitHub Repository Management"] 
    },
    { 
      title: "Module 19: Capstone Implementation", 
      meta: "Final Assessment", 
      topics: ["End-to-End Project Architecture", "Code Quality Review", "Debugging Sessions", "Final Evaluation Deliverable"] 
    }
  ],
  faqs: {
    course: [
      { q: "Do I need prior programming knowledge?", a: "No. We teach you programming logic completely from scratch." },
      { q: "Is this course focused on Data Science or Web Development?", a: "This is a core foundational course. However, it explicitly introduces both backend web frameworks (FastAPI/Django) and data tools (Pandas) so you can choose your specialization later." }
    ],
    learning: [
      { q: "What happens if I miss a live class?", a: "Every live class is recorded and made available in your student portal within 24 hours." },
      { q: "Will we learn modern tools like FastAPI?", a: "Yes, you will learn to build high-performance APIs using FastAPI and Pydantic models." }
    ],
    career: [
      { q: "How are students selected for the internship?", a: "Top-performing students may receive a direct interview opportunity for a paid internship with Vaptura Labs based on their capstone API and automation projects." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the 'Apply' button, complete your payment via the secure Cashfree gateway, and your seat will be instantly confirmed." }
    ]
  },
  crossSell: [
    { title: "Full Stack Development", desc: "Pair your Python API skills with React to build full web applications.", link: "/courses/full-stack-web-dev" },
    { title: "Cyber Security & VAPT", desc: "Use your Python knowledge to write custom exploit scripts.", link: "/courses/vapt-beginner" }
  ]
};