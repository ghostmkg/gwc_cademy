export const frontendCourseData = {
  id: "frontend-development",
  category: "Development",
  title: "Front End Web Development",
  heroSubtitle: "Master React.js, Tailwind CSS, and advanced state management to build stunning, high-performance Single Page Applications (SPAs).",
  image: "/assets/frontend.jpeg",
  level: "Intermediate",
  duration: "4 Months",
  mode: "Live + Recorded",
  originalPrice: "₹8,999",
  price: "₹4,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/frontend-course",
  syllabusPdf: "/syllabi/frontend-development.pdf",
  enquiryLink: "/contact?course=Front+End+Development",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Sat / Sun",
    time: "10:00 AM – 1:00 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Master React.js & Hooks",
    "State Management (Redux Toolkit)",
    "Secure API Integrations"
  ],
  whatYouWillLearn: [
    "Master Advanced JavaScript (ES6+) concepts essential for modern frameworks",
    "Build lightning-fast Single Page Applications (SPAs) with React.js",
    "Style beautiful, responsive interfaces rapidly using Tailwind CSS",
    "Manage complex global application state using Redux Toolkit and Context API",
    "Fetch, render, and cache live data from external REST APIs using Axios",
    "Implement seamless client-side routing using React Router v6",
    "Optimize React app performance and deploy live builds to Vercel/Netlify"
  ],
  whoIsItFor: [
    "Web Developers looking to upgrade from plain HTML/JS to modern frameworks",
    "UI/UX Designers who want to bring their web designs to life using code",
    "IT Professionals aiming for specialized Frontend Software Engineering roles",
    "Students looking to build highly interactive portfolio projects"
  ],
  prerequisites: [
    "Solid understanding of HTML5 and CSS3",
    "Basic knowledge of JavaScript (Variables, Loops, Functions)",
    "A computer with at least 8GB RAM recommended for running Node/React servers"
  ],
  projects: [
    {
      title: "Mini Project 1: Interactive Task Dashboard",
      outcome: "Build a dynamic React application utilizing local state (useState), side effects (useEffect), and custom components.",
      skills: ["React Components", "Hooks", "Event Handling"]
    },
    {
      title: "Mini Project 2: E-Commerce Product Listing",
      outcome: "Develop a responsive storefront styled entirely with Tailwind CSS, featuring product filtering and live API data fetching.",
      skills: ["Tailwind CSS", "Axios", "Context API", "API Fetch"]
    },
    {
      title: "Capstone: Netflix Clone UI",
      outcome: "Rebuild the Netflix web interface from scratch. Pull live movie data from TMDB APIs, implement video trailers, and manage user watchlists using Redux Toolkit.",
      skills: ["React Router", "Redux Toolkit", "Advanced APIs", "Deployment"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Advanced JavaScript (ES6+) Refresher",
      meta: "4 Hours • Pre-React Fundamentals",
      topics: [
        "Arrow Functions, Template Literals, and Let/Const",
        "Destructuring, Spread, and Rest Operators",
        "Higher-Order Array Methods (map, filter, reduce)",
        "Promises, Async/Await, and Fetch API basics",
        "ES Modules (Import / Export syntax)"
      ]
    },
    {
      title: "Module 2: React Core Fundamentals",
      meta: "8 Hours • Component Architecture",
      topics: [
        "Understanding the Virtual DOM and React Philosophy",
        "Project Initialization with Vite",
        "JSX Syntax, Expressions, and Conditional Rendering",
        "Functional Components vs Class Components",
        "Passing Data using Props and Prop Drilling concepts"
      ]
    },
    {
      title: "Module 3: React Hooks & Component State",
      meta: "8 Hours • Interactive UIs",
      topics: [
        "Managing local state with the useState Hook",
        "Handling events and controlled form inputs",
        "Managing side effects and lifecycle with useEffect",
        "Dependency Arrays and Cleanup functions",
        "Building and integrating Custom Hooks"
      ]
    },
    {
      title: "Module 4: Styling in React with Tailwind CSS",
      meta: "6 Hours • Modern UI Design",
      topics: [
        "Introduction to Utility-First CSS",
        "Setting up Tailwind CSS in a React/Vite Project",
        "Building Responsive Layouts without custom CSS files",
        "Styling dynamic components based on React State",
        "Tailwind Configuration and Custom Themes"
      ]
    },
    {
      title: "Module 5: React Router & SPAs",
      meta: "6 Hours • Navigation",
      topics: [
        "Client-Side Routing Concepts",
        "React Router v6 Setup and BrowserRouter",
        "Route Configuration, Links, and NavLinks",
        "Dynamic URL Parameters (useParams)",
        "Programmatic Navigation (useNavigate) and Protected Routes"
      ]
    },
    {
      title: "Module 6: Advanced Hooks & Optimization",
      meta: "6 Hours • Performance",
      topics: [
        "Accessing DOM elements with useRef",
        "Memoization techniques using useMemo",
        "Optimizing function passing with useCallback",
        "React.memo for preventing unnecessary re-renders",
        "Identifying and fixing performance bottlenecks"
      ]
    },
    {
      title: "Module 7: API Integration & Data Fetching",
      meta: "8 Hours • Backend Communication",
      topics: [
        "HTTP Methods and RESTful Architecture principles",
        "Making API Calls using Axios vs Fetch",
        "Handling loading states, success data, and API errors",
        "Environment variables in React (hiding API Keys)",
        "Introduction to React Query for advanced data caching"
      ]
    },
    {
      title: "Module 8: Global State Management",
      meta: "10 Hours • Redux & Context",
      topics: [
        "The State Management problem (Prop Drilling)",
        "Using Context API and useReducer for medium apps",
        "Introduction to Redux Architecture (Store, Actions, Reducers)",
        "Setting up Redux Toolkit (RTK) and Slices",
        "Reading and Dispatching state with useSelector and useDispatch"
      ]
    },
    {
      title: "Module 9: Production & Deployment",
      meta: "4 Hours • Going Live",
      topics: [
        "Code splitting and lazy loading components",
        "Preparing a production build (npm run build)",
        "Deploying React Applications to Vercel and Netlify",
        "Handling client-side routing on static servers (_redirects)",
        "GitHub repository management for React projects"
      ]
    },
    {
      title: "Module 10: Capstone Project Implementation",
      meta: "8 Hours • Final Deliverable",
      topics: [
        "End-to-End Application Architecture Planning",
        "Integrating TMDB APIs and Authentication workflows",
        "Final Code Review, Refactoring, and Cleanup",
        "Resume and GitHub Portfolio preparation",
        "Frontend Developer Technical Interview Q&A"
      ]
    }
  ],
  faqs: {
    course: [
      { q: "Is this a MERN stack course?", a: "This course covers the 'R' (React) in MERN. It is an intensive, specialized frontend program. If you want to learn backend databases and servers as well, check out our Full-Stack Web Development track." },
      { q: "Is this React focused?", a: "Yes, we focus heavily on the React ecosystem, as it is the most demanded frontend framework in the global job market." }
    ],
    learning: [
      { q: "Do I need to know JavaScript before joining?", a: "Yes. You must have a basic understanding of variables, arrays, and functions. However, Module 1 is a dedicated ES6+ JavaScript refresher to get you up to speed for React." },
      { q: "Are recordings provided?", a: "Yes, every live session is recorded and uploaded to your dashboard within 24 hours." }
    ],
    career: [
      { q: "Is frontend enough for a job?", a: "Yes, frontend developers are highly sought after. Companies need specialized React engineers to build complex user interfaces separately from their backend teams." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the Apply button and complete your checkout via the secure Cashfree gateway." }
    ]
  },
  crossSell: [
    { title: "Full Stack Web Development", desc: "Learn to build your own Node.js backend APIs to power your React frontend.", link: "/courses/full-stack-web-dev" },
    { title: "Tech Interview Prep", desc: "Prepare for your Frontend Developer technical interviews.", link: "/courses/interview-prep" }
  ]
};