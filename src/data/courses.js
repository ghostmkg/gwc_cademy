// ============================================================================
// COURSE DATA AGGREGATOR
// As you build separate files for each course, import them here.
// ============================================================================
import { pythonCourseData } from './courses/pythonData';
import { javaCourseData } from './courses/javaData';
import { fullstackCourseData } from './courses/fullstackData';
import { webDevCourseData } from './courses/webdevData';
import { frontendCourseData } from './courses/frontendData';
import { backendCourseData } from './courses/backendData';
import { awsCourseData } from './courses/awsData';
import { azureCourseData } from './courses/azureData';
import { cehCourseData } from './courses/cehData';



export const coursesData = [
  // ---------------------------------------------------------
  // MODULARIZED COURSES (Imported from src/data/courses/)
  // ---------------------------------------------------------
  pythonCourseData,
  javaCourseData,
  fullstackCourseData,
  webDevCourseData,
  frontendCourseData,
  backendCourseData,
  awsCourseData,
  azureCourseData,
  cehCourseData,
  // ---------------------------------------------------------
  // 7. CLOUD & DEVOPS
  // ---------------------------------------------------------
  // {
  //   id: "cloud-infrastructure",
  //   category: "Cloud",
  //   title: "Cloud Infrastructure & DevOps",
  //   heroSubtitle: "Architect, deploy, and scale enterprise applications on industry-leading cloud providers.",
  //   image: "/assets/cloud-thumb.jpeg",
  //   level: "Intermediate",
  //   duration: "4 Months",
  //   mode: "Live + Recorded",
  //   price: "₹12,499",
  //   enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=DevOps&embedded=true",
  //   batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "2:00 PM – 5:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
  //   cardOutcomes: ["Deploy code to AWS and GCP", "Manage Cloud IAM", "Understand CI/CD pipelines"],
  //   whatYouWillLearn: ["Deploy VMs, storage, and networking", "Manage Identity and Access Management (IAM)", "Build automated CI/CD pipelines", "Monitor infrastructure health"],
  //   whoIsItFor: ["System Admins looking to move into DevOps", "Developers wanting to deploy apps"],
  //   prerequisites: ["Basic understanding of networking and Linux command line"],
  //   projects: [
  //     { title: "Highly Available Architecture", outcome: "Deploy scalable apps using Load Balancers.", skills: ["AWS EC2", "VPC", "Security"] },
  //     { title: "Automated CI/CD Pipeline", outcome: "Set up a pipeline that tests and deploys code to the cloud.", skills: ["GitHub Actions", "CI/CD"] }
  //   ],
  //   syllabus: [
  //     { title: "Module 1: Cloud Fundamentals", meta: "4 sessions", topics: ["Cloud Concepts", "IAM", "Networking"] },
  //     { title: "Module 2: DevOps & Automation", meta: "5 sessions", topics: ["CI/CD Pipelines", "IaC", "Monitoring"] }
  //   ],
  //   faqs: {
  //     course: [{ q: "Will I be charged by providers?", a: "We teach using Free Tier resources." }],
  //     learning: [{ q: "Are recordings available?", a: "Yes, within 24 hours." }],
  //     career: [{ q: "Are there job opportunities?", a: "Top performers are evaluated for Vaptura Labs internships." }],
  //     enrollment: [{ q: "How do I enroll?", a: "Scan the QR code below." }]
  //   },
  //   crossSell: [{ title: "Cyber Security", desc: "Secure the cloud infrastructure you built.", link: "/courses/vapt-beginner" }]
  // },



  

  // ---------------------------------------------------------
  // 10. GOOGLE CLOUD
  // ---------------------------------------------------------
  // {
  //   id: "google-cloud",
  //   category: "Cloud",
  //   title: "Google Cloud Platform",
  //   heroSubtitle: "Deploy and manage modern applications on Google's global infrastructure.",
  //   image: "/assets/gcp.jpeg",
  //   level: "Intermediate",
  //   duration: "3 Months",
  //   mode: "Live + Recorded",
  //   price: "₹10,999",
  //   enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Google+Cloud&embedded=true",
  //   batchDetails: { nextCohort: "Coming Soon", classes: "Mon / Wed", time: "8:00 PM – 10:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
  //   cardOutcomes: ["GCP Compute Engine", "Kubernetes Engine (GKE)", "Cloud IAM"],
  //   whatYouWillLearn: ["Deploy apps on GCP", "Use Google Kubernetes Engine", "Manage Cloud Storage"],
  //   whoIsItFor: ["Developers using Google ecosystem"],
  //   prerequisites: ["Basic networking knowledge"],
  //   projects: [{ title: "GCP Web Deployment", outcome: "Host a scalable app on GCP.", skills: ["Compute Engine", "Cloud SQL", "VPC"] }],
  //   syllabus: [{ title: "Module 1: Core GCP", meta: "12 sessions", topics: ["Compute & Storage", "Networking", "IAM"] }],
  //   faqs: {
  //     course: [{ q: "Does this prep for certs?", a: "Yes, aligns with Associate Cloud Engineer." }],
  //     learning: [{ q: "Are recordings available?", a: "Yes." }],
  //     career: [{ q: "Is GCP in demand?", a: "High demand for data and containerized apps." }],
  //     enrollment: [{ q: "How do I enroll?", a: "Use the form below." }]
  //   },
  //   crossSell: [{ title: "DevOps", desc: "Automate your GCP deployments.", link: "/courses/cloud-infrastructure" }]
  // },

  // ---------------------------------------------------------
  // 11. CYBER SECURITY FUNDAMENTALS
  // ---------------------------------------------------------
  // {
  //   id: "vapt-beginner",
  //   category: "Cyber Security",
  //   title: "Web VAPT & Cyber Security",
  //   heroSubtitle: "Master offensive security. Perform real-world penetration testing on web apps and document findings professionally.",
  //   image: "/assets/cyberfund.jpeg",
  //   level: "Intermediate",
  //   duration: "4 Months",
  //   mode: "Live + Recorded",
  //   price: "₹10,499",
  //   enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_AGN1Ybor3kiLwMjLlGiepaz7XvFSCl6PZFGFDzu9_dzYeA/viewform?usp=pp_url&entry.1234684545=Cyber+Security+Fundamentals&embedded=true",
  //   batchDetails: { nextCohort: "Coming Soon", classes: "Sat / Sun", time: "10:00 AM – 1:00 PM IST", mode: "Live Online", language: "English / Hindi", recordings: "Program duration + 1 Year" },
  //   cardOutcomes: ["Perform web app pentesting", "Master Burp Suite & Nmap", "Write vulnerability reports"],
  //   whatYouWillLearn: ["Understand enterprise network vulnerabilities", "Master industry-standard tools (Burp Suite, Nmap)", "Exploit OWASP Top 10 safely", "Harden Linux servers"],
  //   whoIsItFor: ["Network engineers", "Developers wanting to write secure code", "Aspiring SOC Analysts"],
  //   prerequisites: ["Basic networking (IPs, Ports, HTTP)", "Linux command line basics"],
  //   projects: [
  //     { title: "Live Target Reconnaissance", outcome: "Map out attack surfaces of an enterprise app.", skills: ["Nmap", "OSINT"] },
  //     { title: "Exploiting OWASP Top 10", outcome: "Exploit SQLi and XSS in a controlled lab.", skills: ["Burp Suite", "SQLi", "XSS"] }
  //   ],
  //   syllabus: [
  //     { title: "Module 1: Recon & Scanning", meta: "4 live sessions", topics: ["Passive vs Active Recon", "Nmap mastery"] },
  //     { title: "Module 2: Web App Attacks", meta: "8 live sessions", topics: ["Burp Suite setup", "SQL Injection", "XSS"] },
  //     { title: "Module 3: Reporting", meta: "3 live sessions", topics: ["CVSS Scoring", "Remediation"] }
  //   ],
  //   faqs: {
  //     course: [{ q: "Is it legal to use these tools?", a: "We teach you to use them ethically in controlled labs." }],
  //     learning: [{ q: "What happens if I miss a class?", a: "Recordings are available within 24 hours." }],
  //     career: [{ q: "Are there job opportunities?", a: "Top performers are evaluated for Vaptura Labs internships." }],
  //     enrollment: [{ q: "How do I enroll?", a: "Fill the form and submit UTR below." }]
  //   },
  //   crossSell: [{ title: "Cloud Security", desc: "Learn to secure cloud infrastructure.", link: "/courses/cloud-infrastructure" }]
  // },


];

export const categories = [
  "All", 
  "Development", 
  "Cyber Security", 
  "Cloud", 
  "Programming Foundation", 
  // "Professional Dev"
];