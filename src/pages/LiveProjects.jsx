import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  Code2, Shield, Cloud, GitMerge, CheckCircle2, 
  XCircle, Terminal, ExternalLink, Briefcase, 
  Github, FileText, Rocket, ArrowRight, ChevronRight 
} from 'lucide-react';

const LiveProjects = () => {
  const comparison = [
    {
      feature: "Running Environment",
      sandbox: "Works only on localhost",
      gwc: "Deployed to AWS / Vercel / GCP"
    },
    {
      feature: "Security & Auth",
      sandbox: "No authentication or basic hardcoded logins",
      gwc: "JWT, OAuth, and Role-Based Access Control (RBAC)"
    },
    {
      feature: "Code Quality",
      sandbox: "Spaghetti code pushed straight to main branch",
      gwc: "Agile sprints, Git branching, and PR code reviews"
    },
    {
      feature: "Database",
      sandbox: "Local SQLite or mock JSON files",
      gwc: "Production PostgreSQL / MongoDB clusters"
    },
    {
      feature: "Resume Value",
      sandbox: "Recruiters ignore it as a 'tutorial clone'",
      gwc: "Demonstrates actual enterprise engineering capability"
    }
  ];

  const projects = [
    {
      track: "Full-Stack Development",
      icon: <Code2 size={24} className="text-blue-600" />,
      title: "Multi-Tenant RBAC Dashboard",
      desc: "Build a complete B2B SaaS dashboard with Role-Based Access Control. Handle user provisioning, secure data isolation between tenants, and real-time metric visualization.",
      tech: ["React.js", "Node.js", "PostgreSQL", "JWT Auth", "Tailwind CSS"]
    },
    {
      track: "Cyber Security & VAPT",
      icon: <Shield size={24} className="text-emerald-600" />,
      title: "Enterprise Pentest & Executive Report",
      desc: "Perform a full offensive vulnerability assessment on a controlled dummy-banking application. Exploit OWASP Top 10 vulnerabilities and draft a professional CVSS remediation report.",
      tech: ["Burp Suite", "Nmap", "SQLmap", "CVSS Scoring", "OSINT Tools"]
    },
    {
      track: "Cloud Infrastructure",
      icon: <Cloud size={24} className="text-purple-600" />,
      title: "Highly Available Auto-Scaling Web Architecture",
      desc: "Architect a fault-tolerant cloud environment. Deploy applications across multiple availability zones behind a Load Balancer, secured by strict VPC rules and IAM policies.",
      tech: ["AWS EC2", "Load Balancing", "VPC Subnets", "GitHub Actions", "Linux"]
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Architecture & Planning",
      desc: "Before writing a single line of code, you will plan the database schema, API endpoints, and system architecture."
    },
    {
      step: "02",
      title: "Sprint Development",
      desc: "Write code using industry-standard Git workflows. Create feature branches, commit regularly, and handle merge conflicts."
    },
    {
      step: "03",
      title: "The PR Code Review",
      desc: "Submit a Pull Request (PR). Senior mentors act as your Tech Leads, reviewing your code for bugs and performance before approval."
    },
    {
      step: "04",
      title: "Live Cloud Deployment",
      desc: "Push your code to production. Configure environment variables, CI/CD pipelines, and secure your live URL."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO 
        title="Live Projects & Engineering | GWC Academy"
        description="Stop building generic tutorials. Build, secure, and deploy production-grade IT projects engineered to Vaptura Labs' industry standards."
      />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 border border-blue-500/30 tracking-widest uppercase">
            <Rocket size={16} /> The GWC Project Philosophy
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Don't Just Write Code. <br/> Ship Production-Grade Products.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            At GWC Academy, you won't build theoretical sandbox apps. You will architect, secure, and deploy live projects engineered to Vaptura Labs' strict industry standards.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm font-bold text-slate-200 mb-10">
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2"><Briefcase size={16} className="text-blue-400"/> Mentored by Senior Devs</span>
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2"><GitMerge size={16} className="text-emerald-400"/> PR Code Review Culture</span>
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2"><Cloud size={16} className="text-purple-400"/> Cloud Deployed</span>
          </div>

          <a href="#gallery" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition text-lg">
            View Project Gallery <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* 2. SANDBOX VS REAL WORLD COMPARISON */}
      <section className="py-20 px-4 max-w-5xl mx-auto -mt-10 relative z-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Tutorials vs. Reality</h2>
            <p className="text-slate-600 text-lg">Why recruiters ignore standard bootcamp projects, and why ours get you hired.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="py-4 px-4 font-bold text-slate-500 uppercase text-xs tracking-wider w-1/4">System Feature</th>
                  <th className="py-4 px-4 font-bold text-rose-500 uppercase text-xs tracking-wider w-1/3">Standard Bootcamps (Sandbox)</th>
                  <th className="py-4 px-4 font-bold text-emerald-600 uppercase text-xs tracking-wider w-2/5">GWC Academy (Real-World)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="py-5 px-4 font-bold text-slate-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-slate-600 text-sm flex items-start gap-2">
                      <XCircle size={18} className="text-rose-400 shrink-0 mt-0.5" /> {row.sandbox}
                    </td>
                    <td className="py-5 px-4 font-medium text-slate-800 text-sm bg-emerald-50/30">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" /> {row.gwc}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. PROJECT GALLERY */}
      <section id="gallery" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">The Tech Deliverables</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What You Will Actually Build</h2>
            <p className="text-slate-600 text-lg">Examples of the capstone deliverables required to graduate from our career tracks.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${idx === 0 ? 'bg-blue-50' : idx === 1 ? 'bg-emerald-50' : 'bg-purple-50'}`}>
                    {proj.icon}
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-500">{proj.track}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{proj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{proj.desc}</p>
                
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Enterprise Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-md border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ENGINEERING WORKFLOW */}
      <section className="py-20 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">How We Work</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">The Engineering Workflow</h2>
            <p className="text-slate-600 text-lg">You won't code alone in the dark. You will follow the exact agile methodology used by tech companies.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative">
                <div className="text-5xl font-black text-slate-200 absolute top-4 right-4 z-0">{item.step}</div>
                <div className="relative z-10 pt-8">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO OUTCOMES & VAPTURA PIPELINE */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">The Ultimate Deliverable: Your Resume Proof</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              When you complete a live project at GWC Academy, you walk away with assets that actively prove your competence to recruiters and hiring managers.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-lg shrink-0"><Github size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">A Green GitHub Graph</h4>
                  <p className="text-sm text-slate-600 mt-1">Show consistent, meaningful commits, branch management, and PR history.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-blue-100 text-blue-600 p-2.5 rounded-lg shrink-0"><ExternalLink size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Live URLs & Reports</h4>
                  <p className="text-sm text-slate-600 mt-1">Provide working links to deployed applications or verifiable VAPT executive summary reports.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-purple-100 text-purple-600 p-2.5 rounded-lg shrink-0"><FileText size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900">High-Impact Resume Bullets</h4>
                  <p className="text-sm text-slate-600 mt-1">Stop writing "Built a website". Start writing <i>"Architected a scalable API handling authenticated tenant requests."</i></p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Briefcase size={20} className="text-white"/>
            </div>
            <h3 className="text-2xl font-bold mb-4">The Vaptura Labs Connection</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Why do we push you so hard on project quality? Because the deliverables you build in these modules are the <strong>#1 deciding factor</strong> for your selection into the Vaptura Labs internship pipeline.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              We train you rigorously because we are looking to hire the top percentile of our own graduates to work on our client infrastructure.
            </p>
            <Link to="/internship" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition">
              Read Internship Details <ChevronRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BAND */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Build Your Engineering Portfolio?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose your career track today and start building the projects that will actually get you hired.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-xl shadow-2xl text-lg transition"
            >
              Explore Career Programs
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-800 border border-blue-500 hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-xl shadow-xl text-lg transition"
            >
              Talk to a Mentor
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LiveProjects;