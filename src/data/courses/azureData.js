export const azureCourseData = {
  id: "azure-cloud",
  category: "Cloud",
  title: "Microsoft Azure Fundamentals",
  heroSubtitle: "Master enterprise cloud solutions. Prepare for the AZ-900 certification and build hands-on architectural skills for Azure Administrator roles.",
  image: "/assets/azure.jpeg",
  level: "Beginner to Intermediate",
  duration: "3 Months",
  mode: "Live + Recorded",
  originalPrice: "₹10,999",
  price: "₹5,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/azure-fundamentals-course",
  syllabusPdf: "/syllabi/microsoft-azure.pdf",
  enquiryLink: "/contact?course=Microsoft+Azure+Fundamentals",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Sat / Sun",
    time: "6:00 PM – 9:00 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Manage Azure VMs & Networks",
    "Master Microsoft Entra ID (Azure AD)",
    "Clear the AZ-900 Certification"
  ],
  whatYouWillLearn: [
    "Understand Core Cloud Concepts (IaaS, PaaS, SaaS) and Cloud Economics (CapEx vs OpEx)",
    "Navigate the Azure Global Infrastructure, Resource Groups, and Azure Resource Manager (ARM)",
    "Deploy, configure, and scale Azure Virtual Machines (VMs) and App Services",
    "Architect custom Azure Virtual Networks (VNets), Subnets, and Network Security Groups (NSGs)",
    "Manage enterprise identities, SSO, and Multi-Factor Authentication using Microsoft Entra ID",
    "Implement Zero-Trust Security models, Azure Policies, and Resource Locks for governance",
    "Monitor cloud health and manage costs with Azure Monitor, Budgets, and the Pricing Calculator"
  ],
  whoIsItFor: [
    "IT Professionals aiming to clear the Microsoft AZ-900 Azure Fundamentals certification",
    "System Administrators transitioning into Cloud Engineering and Azure Admin (AZ-104) roles",
    "Enterprise Developers wanting to learn how to host and scale applications on Microsoft Azure",
    "Tech enthusiasts wanting to build robust, secure, and compliant cloud infrastructure"
  ],
  prerequisites: [
    "Basic understanding of computers, operating systems, and networking concepts",
    "A computer with an internet connection",
    "A credit/debit card to create an Azure Free Account (No charges if used correctly)"
  ],
  projects: [
    {
      title: "Mini Project 1: Entra ID Setup & Serverless Static Site",
      outcome: "Configure secure Microsoft Entra ID users with custom RBAC roles, and deploy a globally available static website using Azure Blob Storage.",
      skills: ["Microsoft Entra ID", "RBAC", "Blob Storage", "Web Hosting"]
    },
    {
      title: "Mini Project 2: Secure Virtual Network Isolation",
      outcome: "Deploy Windows and Linux VMs into isolated Virtual Networks (VNets). Use Network Security Groups (NSGs) to strictly control inbound SSH and RDP traffic.",
      skills: ["Azure VMs", "Virtual Networks", "NSG Rules", "Security"]
    },
    {
      title: "Major Project: Foundational Enterprise Web Architecture",
      outcome: "Architect a multi-tier environment featuring an Azure App Service frontend connected to a secure, private Azure SQL Database, fully governed by Azure Policies.",
      skills: ["App Service", "Azure SQL", "Azure Policy", "Architecture"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Cloud Concepts & Economics",
      meta: "Foundation",
      topics: [
        "Principles of Cloud Computing (High availability, scalability, elasticity)",
        "Capital Expenditure (CapEx) vs. Operational Expenditure (OpEx)",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Public, Private, Hybrid, and Multi-Cloud models",
        "Hands-on Lab: Utilizing the Azure Pricing and TCO Calculators"
      ]
    },
    {
      title: "Module 2: Azure Architecture and Core Services",
      meta: "Infrastructure Core",
      topics: [
        "Geographies, Regions, Region Pairs, and Availability Zones",
        "Subscriptions and Management Groups",
        "Azure Resource Manager (ARM) hierarchy and Resource Groups",
        "Introduction to ARM Templates and Bicep basics",
        "Hands-on Lab: Navigating the portal and grouping resources"
      ]
    },
    {
      title: "Module 3: Azure Compute Services",
      meta: "Virtual Servers",
      topics: [
        "Azure Virtual Machines (Windows & Linux) and VM Scale Sets",
        "Platform as a Service: Azure App Services",
        "Serverless computing: Azure Functions and Logic Apps",
        "Containers: Azure Container Instances (ACI) & Azure Kubernetes Service (AKS)",
        "Hands-on Lab: Deploying a Windows VM and accessing it via RDP"
      ]
    },
    {
      title: "Module 4: Azure Virtual Networking",
      meta: "Cloud Networking",
      topics: [
        "Azure Virtual Networks (VNet) and Subnets",
        "Public vs. Private IP Addresses and Endpoints",
        "VNet Peering and Azure DNS",
        "Hybrid Connectivity: VPN Gateway and Azure ExpressRoute",
        "Hands-on Lab: Designing a custom VNet and configuring peering"
      ]
    },
    {
      title: "Module 5: Azure Storage Solutions",
      meta: "Data Management",
      topics: [
        "Storage Account types (Blob, Files, Queue, Table)",
        "Storage Access Tiers (Hot, Cool, Cold, Archive)",
        "Redundancy Options (LRS, ZRS, GRS, GZRS)",
        "Data Migration: AzCopy, Storage Explorer, and Azure File Sync",
        "Hands-on Lab: Hosting a static web app on Blob Storage using SAS Tokens"
      ]
    },
    {
      title: "Module 6: Azure Databases & Analytics",
      meta: "Persistent Data",
      topics: [
        "Relational Databases: Azure SQL Database and SQL Managed Instance",
        "Open-source databases: Azure Database for MySQL / PostgreSQL",
        "NoSQL Data: Azure Cosmos DB",
        "Big Data overview: Azure Synapse Analytics & Databricks",
        "Hands-on Lab: Provisioning and querying an Azure SQL Database"
      ]
    },
    {
      title: "Module 7: Identity, Access & Microsoft Entra ID",
      meta: "Security Core",
      topics: [
        "Introduction to Microsoft Entra ID (formerly Azure AD)",
        "Authentication methods (SSO, Passwordless, MFA)",
        "Role-Based Access Control (RBAC)",
        "Conditional Access and Zero-Trust methodologies",
        "Hands-on Lab: Creating Entra ID users and testing RBAC assignments"
      ]
    },
    {
      title: "Module 8: Azure Network Security",
      meta: "Defense",
      topics: [
        "Network Security Groups (NSGs) and Application Security Groups (ASGs)",
        "Azure Firewall and Azure DDoS Protection",
        "Microsoft Defender for Cloud basics",
        "Real-World Case Study: Securing an enterprise architecture",
        "Hands-on Lab: Configuring NSG rules to block/allow inbound SSH traffic"
      ]
    },
    {
      title: "Module 9: Azure Governance & Compliance",
      meta: "Cloud Rules",
      topics: [
        "Enforcing rules with Azure Policy and Initiatives",
        "Protecting resources with Resource Locks",
        "Microsoft Purview and the Service Trust Portal",
        "Management Tools: Azure Portal, Azure CLI, Azure PowerShell, Cloud Shell",
        "Hands-on Lab: Applying an Azure Policy to restrict VM deployment regions"
      ]
    },
    {
      title: "Module 10: Azure Monitoring, Cost Management & Support",
      meta: "Operations",
      topics: [
        "Azure Monitor, Application Insights, and Log Analytics",
        "Tracking outages with Azure Service Health",
        "Cost Management, Tags, and Azure Budgets",
        "Azure Advisor recommendations",
        "Azure support plans and calculating SLAs",
        "Hands-on Lab: Creating a billing alert and configuring Azure Monitor alerts"
      ]
    },
    {
      title: "Module 11: Capstone Execution & Certification Prep",
      meta: "Final Project",
      topics: [
        "Executing the Major Project: Foundational Web Architecture",
        "Entry-level cloud positioning and resume building",
        "Behavioral and technical interview Q&A mock sessions",
        "Exam strategies for AZ-900 Microsoft Azure Fundamentals"
      ]
    }
  ],
  faqs: {
    course: [
      { q: "Does this prepare me for an Azure Certification?", a: "Yes. The syllabus aligns perfectly with the AZ-900 Microsoft Azure Fundamentals exam objectives, and provides a highly practical foundation for the AZ-104 Azure Administrator exam." },
      { q: "Will I incur charges on my Azure account?", a: "We strictly guide you to use the Azure Free Account. In our labs, we proactively set up Billing Alerts to ensure you don't receive surprise charges." }
    ],
    learning: [
      { q: "Is this course mostly theoretical?", a: "No. Every module features hands-on portal navigation, instructor-guided implementation, and lab exercises ranging from spinning up VMs to applying enterprise policies." },
      { q: "Are recordings provided?", a: "Yes, every live class is recorded and made available in your portal within 24 hours." }
    ],
    career: [
      { q: "Is Azure in demand?", a: "Microsoft Azure is the cloud platform of choice for thousands of Fortune 500 enterprises. Skills in Entra ID, Azure VMs, and Azure Networking are highly demanded in corporate environments globally." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the Apply button, complete the secure checkout process on Cashfree, and your seat will be instantly confirmed." }
    ]
  },
  crossSell: [
    { title: "Cloud Infrastructure & DevOps", desc: "Learn to automate your Azure deployments using CI/CD pipelines.", link: "/courses/cloud-infrastructure" },
    { title: "Cyber Security & VAPT", desc: "Learn how to secure and audit enterprise cloud networks against hackers.", link: "/courses/vapt-beginner" }
  ]
};