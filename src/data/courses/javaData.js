export const javaCourseData = {
  id: "java-foundation",
  category: "Programming Foundation",
  title: "Java Programming & OOP",
  heroSubtitle: "Go from fundamentals to enterprise-ready Java developer. Master OOP, Collections, Multithreading, JDBC, MySQL, and build production-grade applications.",
  image: "/assets/java.jpeg",
  level: "Absolute Beginner",
  duration: "3 Months",
  mode: "Live + Recorded",
  originalPrice: "₹10,999",
  price: "₹6,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/java-course",
  syllabusPdf: "/syllabi/java-programming-syllabus.pdf",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Tue / Thu / Sat",
    time: "7:30 PM – 9:30 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Master Object-Oriented Architecture",
    "Build Database-Driven Apps with JDBC & MySQL",
    "Crack Core Java & DSA Technical Rounds"
  ],
  whatYouWillLearn: [
    "Write clean, modular Java code applying core OOP principles",
    "Master Java Collections Framework, Generics, and Memory Management",
    "Handle multi-threaded concurrent workloads and robust exception flows",
    "Perform full CRUD operations using JDBC connected to MySQL databases",
    "Leverage Modern Java 8+ features including Streams and Lambdas",
    "Manage dependencies with Maven and version control code using Git & GitHub"
  ],
  whoIsItFor: [
    "College students and freshers targeting IT service and product company roles",
    "Beginners starting programming from scratch with a strongly typed language",
    "Professionals seeking a solid foundation for Spring Boot / Backend Development",
    "Learners preparing for Java-focused competitive programming and technical interviews"
  ],
  prerequisites: [
    "Basic computer usage and internet navigation",
    "Willingness to write code and practice logic daily",
    "A computer (Windows, Mac, or Linux) with at least 4GB RAM",
    "No prior programming experience required"
  ],
  projects: [
    {
      title: "Mini Project 1: Banking & Transaction System",
      outcome: "Develop a robust console banking application managing accounts, secure fund transfers, exception handling, and persistent data logging using Java I/O.",
      skills: ["OOP", "Exception Handling", "File I/O", "Collections"]
    },
    {
      title: "Mini Project 2: Multithreaded Task Scheduler",
      outcome: "Build a concurrent order processing or batch processing engine simulating multi-threaded execution, synchronization locks, and thread-safe collections.",
      skills: ["Multithreading", "Concurrency", "Synchronization", "Generics"]
    },
    {
      title: "Capstone Project: Enterprise Inventory & User Management System",
      outcome: "Architect a complete database-driven business management system with authentication, parameterized queries, relational database schema, and automated Maven build pipelines.",
      skills: ["JDBC", "MySQL", "Maven", "Git & GitHub", "Clean Code"]
    },
    {
      title: "Final Capstone Evaluation: Industry Assessment Deliverable",
      outcome: "Receive a live business scenario problem statement from senior instructors, implement the complete architecture independently, and undergo formal code review.",
      skills: ["System Design", "Code Review", "Production Debugging", "Interview Defense"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Introduction to Programming & Java",
      meta: "2 Hours • Core Architecture",
      topics: [
        "Introduction to Programming and Problem Solving",
        "What is Java? History, Evolution, and Enterprise Applications",
        "Java Features & Platform Independence (WORA)",
        "JDK, JRE, and JVM Architecture Explained",
        "How Java Programs Compile and Run (Bytecode & JIT)",
        "Java Versions and the LTS Support Concept",
        "Installing JDK and Environment Variables / PATH Setup"
      ]
    },
    {
      title: "Module 2: Java Development Environment",
      meta: "2 Hours • Setup & Tooling",
      topics: [
        "Introduction to Java IDEs (IntelliJ IDEA & Eclipse Setup)",
        "Creating a Java Project & Source File Structure",
        "Packages and Project Organization",
        "Compiling and Running via CLI vs IDE",
        "Understanding Syntax, Semantic, and Runtime Errors",
        "Introduction to Debugging and Using Breakpoints"
      ]
    },
    {
      title: "Module 3: Java Fundamentals",
      meta: "5 Hours • Syntax & Operators",
      topics: [
        "Java Program Structure & Hello World Breakdown",
        "Keywords, Identifiers, and Standard Naming Conventions",
        "Variables, Constants, Primitive vs Reference Types",
        "Type Conversion and Explicit Type Casting",
        "Arithmetic, Relational, Logical, Assignment, and Unary Operators",
        "Ternary Operator and Operator Precedence",
        "User Input using Scanner & BufferedReader",
        "Working with Command-Line Arguments"
      ]
    },
    {
      title: "Module 4: Control Flow & Problem Solving",
      meta: "5 Hours • Logic Building",
      topics: [
        "Conditional Logic: if, if-else, nested if-else statements",
        "Traditional switch and Modern Switch Expressions",
        "Loops: for, while, do-while, and Enhanced for-each Loop",
        "Loop Control: break, continue, and return statements",
        "Logic Building Exercises & Pattern Programs",
        "Basic Algorithmic Problem Solving Techniques"
      ]
    },
    {
      title: "Module 5: Arrays & Strings",
      meta: "5 Hours • Data Handling",
      topics: [
        "Array Declaration, Allocation, Initialization, and Traversal",
        "Single-Dimensional vs Multi-Dimensional Arrays",
        "Common Array Algorithms (Searching, Sorting, Max/Min)",
        "String In-Memory Architecture & String Immutability",
        "String Constant Pool (SCP) vs Heap Allocation",
        "Core String Methods, Comparison, and Text Processing",
        "StringBuilder vs StringBuffer for High-Performance Mutation"
      ]
    },
    {
      title: "Module 6: Methods, Scope & Recursion",
      meta: "4 Hours • Modular Code",
      topics: [
        "Method Declaration, Signature, Parameters, and Return Types",
        "Method Overloading & Compile-Time Binding",
        "Static vs Instance Methods",
        "Variable Scope and Variable Lifetime",
        "Pass-by-Value Mechanics in Java",
        "Introduction to Recursion and Recursive Problem Solving"
      ]
    },
    {
      title: "Module 7: Object-Oriented Programming Fundamentals",
      meta: "6 Hours • Core OOP",
      topics: [
        "Procedural vs Object-Oriented Programming",
        "Classes and Objects (State & Behavior)",
        "Instance Variables and Instance Methods",
        "Constructors: Default, Parameterized, and Constructor Chaining",
        "The this and super Keywords",
        "Access Modifiers: private, default, protected, public",
        "Encapsulation, Data Hiding, and Getter/Setter Standards",
        "Modeling Real-World Systems in Code"
      ]
    },
    {
      title: "Module 8: Advanced OOP Concepts",
      meta: "6 Hours • Inheritance & Polymorphism",
      topics: [
        "Inheritance: Single, Multilevel, and Hierarchical Patterns",
        "Method Overriding and Dynamic Method Dispatch",
        "Polymorphism: Compile-Time vs Runtime Polymorphism",
        "Abstraction: Abstract Classes vs Interfaces",
        "Multiple Interface Implementation & Default Methods",
        "Object Relationships: Association, Aggregation, and Composition",
        "The final Keyword: Variables, Methods, and Classes"
      ]
    },
    {
      title: "Module 9: Packages, Inner Classes & Java Core APIs",
      meta: "3 Hours • Core APIs",
      topics: [
        "Creating, Organizing, and Importing Custom Packages",
        "Understanding the Classpath",
        "The java.lang.Object Class (toString, equals, hashCode)",
        "Wrapper Classes, Autoboxing, and Unboxing",
        "Math and Random Utility Classes",
        "Inner Classes, Static Nested Classes, and Anonymous Classes"
      ]
    },
    {
      title: "Module 10: Exception Handling & Debugging",
      meta: "4 Hours • Fault Tolerance",
      topics: [
        "Error vs Exception Hierarchy in Java",
        "Checked vs Unchecked Exceptions",
        "try, catch, and finally Block Workflows",
        "Multiple catch Blocks and Pipe Operator (|)",
        "throw and throws Declarations",
        "Creating Custom / User-Defined Exceptions",
        "Automatic Resource Management using try-with-resources",
        "Production Exception Handling Best Practices"
      ]
    },
    {
      title: "Module 11: File Handling & Input/Output",
      meta: "4 Hours • Streams & Files",
      topics: [
        "Java I/O Fundamentals & File Class Operations",
        "Byte Streams: FileInputStream and FileOutputStream",
        "Character Streams: FileReader and FileWriter",
        "Buffered I/O: BufferedReader and BufferedWriter",
        "Reading, Writing, Updating, and Deleting Files",
        "Object Serialization and Deserialization (transient keyword)"
      ]
    },
    {
      title: "Module 12: Collections & Generics",
      meta: "6 Hours • Data Structures",
      topics: [
        "Java Collections Framework Architecture & Generics Type Safety",
        "List Implementations: ArrayList, LinkedList, Vector, Stack",
        "Set Implementations: HashSet, LinkedHashSet, TreeSet",
        "Map Implementations: HashMap, LinkedHashMap, TreeMap, Hashtable",
        "Queue & Deque Implementations: PriorityQueue, ArrayDeque",
        "Iterators: Iterator, ListIterator, and for-each Traversal",
        "Sorting with Comparable and Comparator Interfaces",
        "Collections Utility Class Methods (sort, reverse, binarySearch)"
      ]
    },
    {
      title: "Module 13: Multithreading & Concurrency Basics",
      meta: "4 Hours • Concurrency",
      topics: [
        "Process vs Thread Architecture",
        "Thread Life Cycle & States",
        "Creating Threads via Thread Class and Runnable Interface",
        "Thread Synchronization & Resolving Race Conditions",
        "Inter-Thread Communication (wait, notify, notifyAll)",
        "Deadlocks, Deadlock Prevention, and Thread Safety",
        "Introduction to Thread Pools and ExecutorService"
      ]
    },
    {
      title: "Module 14: JDBC & MySQL Integration",
      meta: "5 Hours • Database Connectivity",
      topics: [
        "Relational Database Concepts & MySQL Server Setup",
        "JDBC Architecture and Driver Configuration",
        "Establishing Database Connections (DriverManager & Connection)",
        "Statement vs PreparedStatement (Preventing SQL Injections)",
        "Executing SQL Queries & Processing ResultSets",
        "Full CRUD Operations (Create, Read, Update, Delete)",
        "Transaction Management (commit & rollback) and Batch Processing",
        "Building a Database-Backed User Authentication System"
      ]
    },
    {
      title: "Module 15: Modern Java Essentials",
      meta: "3 Hours • Java 8+",
      topics: [
        "Java 8+ Feature Overview & Functional Programming Concepts",
        "Lambda Expressions and Functional Interfaces (@FunctionalInterface)",
        "Method References (:: syntax)",
        "Working with the Optional Class to Prevent NullPointerExceptions",
        "Stream API: filter(), map(), sorted(), collect(), and reduce()",
        "Modern Date and Time API (java.time package)",
        "Writing Clean, Declarative Modern Java Code"
      ]
    },
    {
      title: "Module 16: Maven, Git & Capstone Project",
      meta: "6 Hours • Production Delivery",
      topics: [
        "Introduction to Apache Maven (POM.xml & Dependency Management)",
        "Standard Maven Directory Architecture & Build Lifecycle",
        "Git Fundamentals: git init, add, commit, push, branch, and merge",
        "GitHub Account Setup & Repository Management",
        "Architecting the End-to-End Capstone Application",
        "Code Review Standards, Project Presentation, and Industry Q&A",
        "Core Java, OOP, Collections, Multithreading, and JDBC Interview Drills"
      ]
    }
  ],
  faqs: {
    course: [
      {
        q: "Do I need prior programming knowledge?",
        a: "No. This program starts from the very basics of programming logic and syntax before progressing to object-oriented programming, multithreading, and databases."
      },
      {
        q: "Which version of Java is taught?",
        a: "We train on modern Long-Term Support (LTS) releases (Java 17 / Java 21) while ensuring backwards compatibility with legacy enterprise standards."
      }
    ],
    learning: [
      {
        q: "What happens if I miss a live class?",
        a: "Every live class is recorded and uploaded to your dashboard within 24 hours. You retain access for the entire program duration plus 1 year."
      },
      {
        q: "How do assignments and code reviews work?",
        a: "Assignments are pushed to GitHub repositories. Instructors review code, suggest optimizations, and ensure clean coding conventions."
      }
    ],
    career: [
      {
        q: "How does the Vaptura Labs internship selection work?",
        a: "Top cohort performers who successfully complete the mini projects and capstone deliverable are invited for an interview evaluation for internship opportunities."
      }
    ],
    enrollment: [
      {
        q: "How do I secure my seat?",
        a: "Click 'Apply for Next Cohort', complete the secure payment through Cashfree using UPI, Card, or Net Banking, and your enrollment confirmation will be issued immediately."
      }
    ]
  },
  crossSell: [
    {
      title: "Back End Development",
      desc: "Apply your core Java knowledge to build scalable Spring Boot microservices.",
      link: "/courses/backend-development"
    },
    {
      title: "Cloud Infrastructure",
      desc: "Learn how to package Java applications in Docker containers and deploy to AWS.",
      link: "/courses/cloud-infrastructure"
    }
  ]
};