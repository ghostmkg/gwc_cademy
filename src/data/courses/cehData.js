export const cehCourseData = {
  id: "ceh-certification",
  category: "Cyber Security",
  title: "CEH (Certified Ethical Hacker)",
  heroSubtitle: "Master the 20 core domains of ethical hacking. Prepare for the industry's most recognized security certification with live penetration testing labs and real-world exploit scenarios.",
  image: "/assets/ceh.jpeg",
  level: "Intermediate",
  duration: "4 Months",
  mode: "Live + Recorded",
  originalPrice: "₹14,999",
  price: "₹9,999 + GST",
  enrollmentLink: "https://payments.cashfree.com/forms/gwc-academy-ceh",
  syllabusPdf: "/syllabi/ceh-certified-ethical-hacker.pdf",
  enquiryLink: "/contact?course=CEH+(Certified+Ethical+Hacker)",
  batchDetails: {
    nextCohort: "Coming Soon",
    classes: "Tue / Thu",
    time: "8:00 PM – 10:00 PM IST",
    mode: "Live Online",
    language: "English / Hindi",
    recordings: "Program duration + 1 Year"
  },
  cardOutcomes: [
    "Master the 20 CEH Domains",
    "Exploit OWASP Top 10 Vulnerabilities",
    "Bypass IDS, Firewalls & Honeypots"
  ],
  whatYouWillLearn: [
    "Master the 5 phases of Ethical Hacking: Reconnaissance, Scanning, Gaining Access, Maintaining Access, and Covering Tracks",
    "Utilize the MITRE ATT&CK framework and threat intelligence to analyze advanced persistent threats (APTs)",
    "Perform in-depth network sniffing, enumeration, and vulnerability analysis using industry-standard tools (Nmap, Nessus, Wireshark)",
    "Execute advanced system hacking techniques including privilege escalation, hash cracking, and fileless malware deployment",
    "Exploit web applications and servers using SQL Injection (SQLi), Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF)",
    "Hack and secure Cloud infrastructures (AWS/Azure), IoT devices, OT/SCADA systems, and Wireless Networks (WPA3)",
    "Evade modern security perimeters including Intrusion Detection Systems (IDS), Firewalls, and endpoint antivirus solutions"
  ],
  whoIsItFor: [
    "Aspiring Penetration Testers and Vulnerability Assessment Analysts",
    "Network Engineers and System Administrators looking to transition into Cyber Security",
    "Security Auditors and Information Security Analysts wanting practical offensive skills",
    "Anyone preparing to pass the official EC-Council CEH certification exam"
  ],
  prerequisites: [
    "Solid understanding of networking concepts (TCP/IP, OSI Model, Subnetting)",
    "Basic familiarity with Linux command-line navigation and Windows OS architecture",
    "A capable computer (min 8GB RAM, 16GB preferred) to run Kali Linux virtualization labs",
    "Strict agreement to a White-Hat Ethical Code of Conduct"
  ],
  projects: [
    {
      title: "Mini Project 1: Automated Network Recon & Vulnerability Audit",
      outcome: "Utilize OSINT frameworks, Nmap, and Nessus to map an enterprise attack surface and generate a professional CVSS vulnerability report.",
      skills: ["OSINT", "Nmap", "Nessus", "Vulnerability Analysis"]
    },
    {
      title: "Mini Project 2: Web App Exploitation (OWASP Top 10)",
      outcome: "Intercept and manipulate web traffic using Burp Suite to successfully execute Stored XSS, CSRF, and SQL Injection attacks on a dummy server.",
      skills: ["Burp Suite", "SQLMap", "XSS", "SQLi"]
    },
    {
      title: "Major Project: Full-Scope Penetration Test",
      outcome: "Conduct an end-to-end Black Box penetration test against a provided target network. Gain root access, extract the flag, and submit a remediation executive summary.",
      skills: ["Metasploit", "Privilege Escalation", "Pivoting", "Reporting"]
    }
  ],
  syllabus: [
    {
      title: "Module 1: Introduction to Ethical Hacking",
      meta: "Foundation",
      topics: [
        "Information Security Fundamentals & Cyber Kill Chain",
        "Hacking concepts, methodology, and the 5 phases of hacking",
        "MITRE ATT&CK Framework and AI-driven Threat Intelligence",
        "Real-World Case Study: The NotPetya Ransomware Attack",
        "Cyber Laws and Ethics (PCI-DSS, HIPAA, GDPR)",
        "Hands-on Lab: Setting up a safe penetration testing lab (Kali Linux)"
      ]
    },
    {
      title: "Module 2: Footprinting and Reconnaissance",
      meta: "Phase 1: Recon",
      topics: [
        "Passive and Active Reconnaissance methodologies",
        "Search engine dorking and OSINT frameworks",
        "Website footprinting, DNS extraction, and email tracking",
        "Tools: Maltego, Shodan, Recon-ng, theHarvester",
        "Hands-on Lab: Gathering intelligence on a target domain"
      ]
    },
    {
      title: "Module 3: Scanning Networks",
      meta: "Phase 2: Scanning",
      topics: [
        "TCP/UDP scanning methods and packet crafting",
        "Banner grabbing and OS fingerprinting",
        "Vulnerability scanning architecture",
        "Tools: Nmap, Hping3, Masscan",
        "Hands-on Lab: Executing stealth scans and bypassing firewall rules"
      ]
    },
    {
      title: "Module 4: Enumeration",
      meta: "Data Extraction",
      topics: [
        "NetBIOS & SMB enumeration techniques",
        "SNMP, LDAP, and Active Directory interrogation",
        "NFS & NTP data extraction",
        "SMTP & DNS zone transfers",
        "Hands-on Lab: Automating protocol enumeration against a live target"
      ]
    },
    {
      title: "Module 5: Vulnerability Analysis",
      meta: "Assessment",
      topics: [
        "Vulnerability scoring models (CVSS v3/v4)",
        "Automated network scanners (Nessus, OpenVAS)",
        "Web proxy tools (Burp Suite, OWASP ZAP)",
        "Hands-on Lab: Conducting a comprehensive vulnerability scan and generating reports"
      ]
    },
    {
      title: "Module 6: System Hacking",
      meta: "Phase 3: Gaining Access",
      topics: [
        "Password cracking techniques (Dictionary, Brute-force, Rainbow Tables)",
        "Tools: Hashcat, John the Ripper, Hydra",
        "Windows and Linux Privilege Escalation vectors",
        "Maintaining Access: Backdoors and Rootkits",
        "Covering Tracks: Clearing logs and hiding files (Steganography)",
        "Hands-on Lab: Exploiting a vulnerable service and escalating to root"
      ]
    },
    {
      title: "Module 7: Malware Threats",
      meta: "Malicious Payloads",
      topics: [
        "Trojans, Viruses, Worms, and Ransomware architecture",
        "Fileless malware and Advanced Persistent Threats (APTs)",
        "Real-World Case Study: SolarWinds Supply Chain Attack",
        "Hands-on Lab: Static and dynamic malware analysis in a sandbox"
      ]
    },
    {
      title: "Module 8: Sniffing",
      meta: "Network Interception",
      topics: [
        "MAC flooding, DHCP starvation, and Switch Port Stealing",
        "ARP poisoning and DNS spoofing",
        "Tools: Wireshark, Ettercap, tcpdump, Responder",
        "Hands-on Lab: Intercepting plain-text credentials over a local network"
      ]
    },
    {
      title: "Module 9: Social Engineering",
      meta: "Human Exploitation",
      topics: [
        "Phishing, Spear-phishing, Whaling, and Vishing",
        "Physical security bypass techniques (Tailgating, Dumpster Diving)",
        "Social-Engineer Toolkit (SET)",
        "Hands-on Lab: Cloning a corporate login page and harvesting credentials"
      ]
    },
    {
      title: "Module 10: Denial-of-Service",
      meta: "Availability Attacks",
      topics: [
        "Volumetric, Protocol, and Application-layer attacks",
        "Botnets and amplification attacks (NTP/DNS)",
        "Hands-on Lab: Simulating a SYN Flood attack and implementing defense rules"
      ]
    },
    {
      title: "Module 11: Session Hijacking",
      meta: "Auth Bypass",
      topics: [
        "Network vs. Application level session hijacking",
        "Cross-Site Request Forgery (CSRF)",
        "Hands-on Lab: Hijacking an active HTTP session using stolen cookies"
      ]
    },
    {
      title: "Module 12: Evading IDS, Firewalls, and Honeypots",
      meta: "Perimeter Bypass",
      topics: [
        "Packet fragmentation, source routing, and IP address spoofing",
        "Intrusion Detection System (IDS) and Firewall evasion techniques",
        "Honeypot deployment architecture and detection",
        "Hands-on Lab: Evading Snort IDS rules during an active scan"
      ]
    },
    {
      title: "Module 13: Hacking Web Servers",
      meta: "Server Exploitation",
      topics: [
        "Web server misconfigurations and directory traversal",
        "Web application architecture and attack surfaces",
        "Tools: Metasploit Framework",
        "Hands-on Lab: Compromising an unpatched Apache/IIS web server"
      ]
    },
    {
      title: "Module 14: Hacking Web Applications",
      meta: "OWASP Top 10",
      topics: [
        "OWASP Top 10 vulnerabilities explained",
        "Cross-Site Scripting (XSS) variants (Reflected, Stored, DOM)",
        "Command Injection and Insecure Direct Object References (IDOR)",
        "Hands-on Lab: Identifying and exploiting a Stored XSS vulnerability"
      ]
    },
    {
      title: "Module 15: SQL Injection",
      meta: "Database Attacks",
      topics: [
        "In-band, Inferential (Blind), and Out-of-band SQLi",
        "Authentication bypass using SQL payloads",
        "Tools: SQLmap",
        "Hands-on Lab: Dumping a backend database using automated and manual queries"
      ]
    },
    {
      title: "Module 16: Hacking Wireless Networks",
      meta: "Wi-Fi Security",
      topics: [
        "WEP, WPA, WPA2, and WPA3 vulnerabilities",
        "Rogue access points, Evil Twins, and KRACK attacks",
        "Tools: Aircrack-ng suite, Wifite",
        "Hands-on Lab: Capturing and cracking a WPA2 4-way handshake"
      ]
    },
    {
      title: "Module 17: Hacking Mobile Platforms",
      meta: "Mobile Threats",
      topics: [
        "Mobile platform attack vectors and architecture",
        "Android rooting and iOS jailbreaking",
        "Mobile Device Management (MDM) bypass",
        "Hands-on Lab: Generating a malicious APK payload with MSFvenom"
      ]
    },
    {
      title: "Module 18: IoT and OT Hacking",
      meta: "Hardware Exploits",
      topics: [
        "Internet of Things (IoT) attack surface and default credential abuse",
        "Operational Technology (OT) and SCADA systems vulnerabilities",
        "Hands-on Lab: Utilizing Shodan to locate vulnerable IoT infrastructure"
      ]
    },
    {
      title: "Module 19: Cloud Computing",
      meta: "Cloud Pentesting",
      topics: [
        "AWS/Azure Shared Responsibility Model",
        "Serverless architecture and misconfiguration vulnerabilities",
        "Container security (Docker/Kubernetes) threats and escapes",
        "Hands-on Lab: Identifying and exploiting a publicly exposed AWS S3 bucket"
      ]
    },
    {
      title: "Module 20: Cryptography",
      meta: "Encryption Cracking",
      topics: [
        "Symmetric vs. Asymmetric encryption and PKI",
        "Hashing algorithms, Digital Signatures, and SSL/TLS",
        "Cryptanalysis and attacks on weak algorithms",
        "Hands-on Lab: Encrypting data streams and cracking weak hashes"
      ]
    }
  ],
  faqs: {
    course: [
      { q: "Does this course include the official EC-Council exam voucher?", a: "This is a comprehensive training and preparation course. The official EC-Council CEH exam voucher is not included in this fee, but we provide all the theoretical and practical knowledge required to pass the exam." },
      { q: "Is hacking legal to learn?", a: "Yes! We teach 'White-Hat' ethical hacking. You will learn these offensive techniques exclusively in controlled, authorized lab environments so you can help organizations defend against malicious actors." }
    ],
    learning: [
      { q: "Do I need to install Kali Linux?", a: "Yes. In the first module, our instructors will guide you step-by-step on how to install Kali Linux securely on a virtual machine (VirtualBox/VMware) on your computer." },
      { q: "Are recordings provided?", a: "Yes, every live class is recorded and made available in your portal within 24 hours." }
    ],
    career: [
      { q: "Is CEH required for jobs?", a: "CEH is one of the most globally recognized security certifications. It is highly preferred by HR departments, government agencies, and corporate security teams when hiring Pentesters and SOC Analysts." }
    ],
    enrollment: [
      { q: "How do I enroll?", a: "Click the Apply button, complete the secure checkout process on Cashfree, and your seat will be instantly confirmed." }
    ]
  },
  crossSell: [
    { title: "Tech Interview Prep", desc: "Pass your security technical rounds and scenario-based interviews.", link: "/courses/interview-prep" },
    { title: "Cloud Infrastructure & DevOps", desc: "Learn how to architect the cloud environments you are learning to hack.", link: "/courses/cloud-infrastructure" }
  ]
};