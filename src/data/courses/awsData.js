export const awsCourseData = {
  id: "aws-cloud",
  category: "Cloud",
  title: "AWS (Amazon Web Services)",
  heroSubtitle: "Master the world's most popular cloud platform. From Cloud Practitioner fundamentals to building highly available 3-Tier architectures.",
  image: "/assets/aws.jpeg",
  level: "Beginner to Intermediate",
  duration: "3 Months",
  mode: "Live + Recorded",
  originalPrice: "₹10,999",
  price: "₹5,999 + 18% GST",
  enrollmentLink: "https://payments.cashfree.com/forms/aws-fundamental-course",
  syllabusPdf: "/syllabi/aws-amazon-web-services.pdf",
  enquiryLink: "/contact?course=AWS+(Amazon+Web+Services)",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Sat / Sun",
    time: "10:00 AM – 1:00 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Master Core AWS Services (EC2, S3, RDS)",
    "Design 3-Tier VPC Architectures",
    "Prepare for AWS Certifications"
  ],
  whatYouWillLearn: [
    "Understand the 6 advantages of Cloud Computing and the AWS Global Infrastructure",
    "Secure environments using the AWS Shared Responsibility Model and IAM roles",
    "Launch and scale compute resources using EC2, Auto Scaling, and Load Balancers",
    "Design custom virtual networks (VPCs) with public and private subnets",
    "Deploy relational (RDS) and NoSQL (DynamoDB) cloud databases",
    "Go Serverless with AWS Lambda and Amazon API Gateway",
    "Monitor costs, set zero-dollar budget alerts, and understand AWS pricing models"
  ],
  whoIsItFor: [
    "IT Professionals aiming to clear AWS Cloud Practitioner & Solutions Architect exams",
    "System Administrators transitioning into Cloud Engineering and DevOps roles",
    "Software Developers wanting to learn how to deploy and scale their applications",
    "Tech enthusiasts wanting to build robust, fault-tolerant infrastructure"
  ],
  prerequisites: [
    "Basic understanding of computers, internet browsing, and networking concepts",
    "A computer with an internet connection",
    "A credit/debit card to create an AWS Free Tier account (No charges if used correctly)"
  ],
  projects: [
    {
      title: "Mini Project 1: IAM Setup & Serverless Static Website",
      outcome: "Configure secure IAM users with MFA, and serve a globally available, highly performant static website directly from an Amazon S3 bucket.",
      skills: ["IAM Policies", "Amazon S3", "Website Hosting", "Security"]
    },
    {
      title: "Mini Project 2: High Availability Web Cluster",
      outcome: "Deploy a fleet of EC2 web servers spread across multiple Availability Zones, balanced dynamically by an Application Load Balancer.",
      skills: ["EC2", "Auto Scaling", "Load Balancing", "High Availability"]
    },
    {
      title: "Major Project: Complete 3-Tier Enterprise Architecture",
      outcome: "Architect a production-grade VPC featuring public load balancers, private application servers, and an isolated multi-AZ RDS database.",
      skills: ["VPC", "Public/Private Subnets", "RDS", "Security Groups"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: AWS Cloud Concepts & Global Infrastructure",
      meta: "Foundation",
      topics: [
        "The 6 advantages of Cloud Computing",
        "Cloud Deployment Models (Public, Private, Hybrid)",
        "AWS Well-Architected Framework (6 Pillars)",
        "AWS Global Infrastructure (Regions, Availability Zones, Edge Locations)",
        "Hands-on Lab: Navigating the AWS Console and setting up MFA"
      ]
    },
    {
      title: "Module 2: Identity & Access Management (IAM)",
      meta: "Security Core",
      topics: [
        "AWS Shared Responsibility Model",
        "AWS IAM (Users, Groups, Roles, Policies)",
        "Root Account vs IAM User best practices",
        "Understanding JSON Policy Documents",
        "Hands-on Lab: Creating IAM users, assigning roles, and simulating access denial"
      ]
    },
    {
      title: "Module 3: Amazon EC2 & Compute Services",
      meta: "Virtual Servers",
      topics: [
        "Introduction to Amazon EC2 and Amazon Machine Images (AMIs)",
        "EC2 instance types and purchasing options (On-Demand, Spot, Reserved)",
        "Elastic Block Store (EBS) and Instance Store volumes",
        "Creating and applying Security Groups (Virtual Firewalls)",
        "Hands-on Lab: Launching an EC2 web server (Apache/Nginx)"
      ]
    },
    {
      title: "Module 4: Storage Solutions",
      meta: "Data Management",
      topics: [
        "Amazon S3 (Simple Storage Service) overview and Storage Classes",
        "S3 Versioning, Encryption, and Bucket Policies",
        "Amazon EFS (Elastic File System) vs EBS vs S3",
        "AWS Storage Gateway basics",
        "Hands-on Lab: Serving a static website from Amazon S3"
      ]
    },
    {
      title: "Module 5: Virtual Private Cloud (VPC) & Networking",
      meta: "Cloud Networking",
      topics: [
        "Introduction to Amazon VPC and CIDR blocks",
        "Public vs Private Subnets and Route Tables",
        "Internet Gateways (IGW) and NAT Gateways",
        "Network Access Control Lists (NACLs) vs Security Groups",
        "Hands-on Lab: Designing a custom VPC from scratch"
      ]
    },
    {
      title: "Module 6: High Availability & Scaling",
      meta: "Fault Tolerance",
      topics: [
        "Elastic Load Balancing (ALB, NLB, GLB)",
        "Target Groups and Health Checks",
        "EC2 Auto Scaling Groups (ASG) and Launch Templates",
        "Scaling Policies (Dynamic, Predictive, Scheduled)",
        "Hands-on Lab: Testing Auto Scaling by stressing server CPU"
      ]
    },
    {
      title: "Module 7: AWS Databases",
      meta: "Persistent Data",
      topics: [
        "Amazon RDS (Relational Database Service) overview",
        "Multi-AZ deployments and Read Replicas",
        "Introduction to Amazon Aurora",
        "Amazon DynamoDB (NoSQL) architecture and use cases",
        "Hands-on Lab: Deploying a secure RDS MySQL instance"
      ]
    },
    {
      title: "Module 8: Serverless Computing & Integration",
      meta: "Modern Architecture",
      topics: [
        "AWS Lambda and Serverless concepts",
        "Amazon API Gateway basics",
        "Decoupling applications with Amazon SQS (Simple Queue Service)",
        "Publish/Subscribe messaging with Amazon SNS (Simple Notification Service)"
      ]
    },
    {
      title: "Module 9: Security, Compliance & Monitoring",
      meta: "Governance",
      topics: [
        "Monitoring metrics with Amazon CloudWatch",
        "Auditing API calls with AWS CloudTrail",
        "AWS Artifact for compliance reports",
        "DDoS protection with AWS WAF and AWS Shield",
        "Hands-on Lab: Setting up CloudWatch CPU alarms"
      ]
    },
    {
      title: "Module 10: Billing, Pricing, and Support",
      meta: "Cost Management",
      topics: [
        "Pay-as-you-go, Reserved Instances, and Savings Plans",
        "Consolidated billing and AWS Organizations",
        "AWS Support Plans (Basic, Developer, Business, Enterprise)",
        "AWS Cost Explorer and AWS Pricing Calculator",
        "Hands-on Lab: Configuring Cost Explorer and setting zero-dollar budget alerts"
      ]
    },
    {
      title: "Module 11: Capstone Execution & Certification Prep",
      meta: "Final Project",
      topics: [
        "Executing the Major Project: 3-Tier Web Architecture Design",
        "Entry-level cloud positioning and resume building",
        "Behavioral and technical interview Q&A mock sessions",
        "Exam strategies for AWS Certified Cloud Practitioner / Solutions Architect"
      ]
    }
  ],
  faqs: {
    course: [
      { q: "Does this prepare me for an AWS Certification?", a: "Yes. The syllabus thoroughly covers 100% of the topics required for the AWS Certified Cloud Practitioner exam, and lays a very strong foundation for the Solutions Architect Associate exam." },
      { q: "Will I incur charges on my AWS account?", a: "We strictly guide you to use the AWS Free Tier. We also have a dedicated lab where we set up 'Zero-Dollar Budget Alerts' to ensure you don't get surprise bills." }
    ],
    learning: [
      { q: "Is this course mostly theoretical?", a: "No. While cloud concepts require some theory, every module is paired with hands-on console execution, assignments, and architectural design labs." },
      { q: "Are recordings provided?", a: "Yes, every live class is recorded and made available in your portal within 24 hours." }
    ],
    career: [
      { q: "Is AWS in demand?", a: "AWS currently holds the largest market share globally in cloud computing. Cloud Engineers and Solutions Architects are among the highest-paid professionals in IT." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the Apply button, complete the secure checkout process on Cashfree, and your seat will be instantly confirmed." }
    ]
  },
  crossSell: [
    { title: "Cloud Infrastructure & DevOps", desc: "Take your AWS skills further by automating deployments using CI/CD pipelines.", link: "/courses/cloud-infrastructure" },
    { title: "Web VAPT & Cyber Security", desc: "Learn how to secure and audit enterprise cloud networks against hackers.", link: "/courses/vapt-beginner" }
  ]
};