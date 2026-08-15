import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  ShieldCheck, Terminal, Users, ArrowRight, 
  Briefcase, Code2, Server, CheckCircle2, MessageCircle, PlayCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Terminal className="text-blue-500" size={28} />,
      title: "Hands-On Over Passive Theory",
      desc: "Syntax is easy to look up; systems architecture and debugging are not. Every concept is accompanied by real code and live terminal practice."
    },
    {
      icon: <Users className="text-blue-500" size={28} />,
      title: "Practitioner-Led Mentorship",
      desc: "Our curriculum is created and taught by working engineers from Vaptura Labs who solve production and security challenges daily."
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={28} />,
      title: "Radical Transparency",
      desc: "We don't sell 'miracle job shortcuts' or unbacked guarantees. We provide structured roadmaps, rigorous evaluation, and realistic career guidance."
    },
    {
      icon: <Briefcase className="text-blue-500" size={28} />,
      title: "Direct Industry Pipeline",
      desc: "Top performers in our signature cohorts aren't left with just a certificate—they get direct interview opportunities for internships at Vaptura Labs."
    }
  ];

  const milestones = [
    {
      number: "5,000+",
      label: "Udemy Learners",
      detail: "Enrolled across specialized cloud and cybersecurity practice tracks."
    },
    {
      number: "1,600+",
      label: "YouTube Community",
      detail: "Subscribers learning practical development and security fundamentals."
    },
    {
      number: "3 Core",
      label: "Engineering Pillars",
      detail: "Focused solely on Development, Cybersecurity/VAPT, and Cloud Infrastructure."
    }
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
      <SEO 
        title="About Us | GWC Academy - Practical IT Training by Vaptura Labs"
        description="Learn about GWC Academy, the educational branch of Vaptura Labs. Practical, cohort-based IT training in Full-Stack, Cybersecurity, and Cloud."
      />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
            <ShieldCheck size={16} className="text-blue-400" />
            The Educational Branch of Vaptura Labs
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 max-w-4xl mx-auto">
            Built by Engineers.<br />Forged for the Modern IT Industry.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            GWC Academy was founded to bridge the massive disconnect between textbook academic theory and the daily realities of production environments. We train candidates the way industry service firms actually want them trained.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-900/50 text-lg transition flex items-center justify-center gap-2"
            >
              Explore Career Programs <ArrowRight size={18} />
            </Link>
            <a 
              href="https://vapturalabs.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition flex items-center justify-center gap-2"
            >
              Visit Vaptura Labs
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS & SOCIAL PROOF STRIP */}
      <section className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {milestones.map((m, idx) => (
            <div key={idx} className="pt-4 md:pt-0">
              <p className="text-4xl font-extrabold text-blue-600 mb-1">{m.number}</p>
              <p className="text-lg font-bold text-slate-900 mb-1">{m.label}</p>
              <p className="text-sm text-slate-500 max-w-xs mx-auto">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ORIGIN STORY */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Our Origin Story</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Why We Started GWC Academy
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Working across high-stakes DevSecOps pipelines and Security Operations Centers (SOC), our engineering team at <strong className="text-slate-900">Vaptura Labs</strong> continually noticed a repeating pattern: aspiring developers and analysts understood syntax on paper, but struggled to deploy, troubleshoot, or secure a live enterprise application.
              </p>
              <p>
                Traditional courses focused heavily on static slides, rote memorization, and multiple-choice quizzes that had almost zero resemblance to how engineering teams solve daily production tickets.
              </p>
              <p>
                GWC Academy began with open tutorials on YouTube and targeted Udemy practice modules. Following overwhelming feedback from thousands of learners seeking mentorship, we formalized GWC into a dedicated live-cohort academy designed to forge real, battle-tested skills.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="text-blue-400" /> The GWC Philosophy
            </h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={18} />
                <span><strong>No Fluff:</strong> Focus exclusively on the toolchains, workflows, and debugging steps used in real IT environments.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={18} />
                <span><strong>Live Interaction:</strong> Small batch cohorts with direct instructor communication and 24x7 doubt submission.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={18} />
                <span><strong>Portfolio First:</strong> Graduate with deployed repositories and verifiable projects, not just another certificate.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Teaching Pillars</h2>
            <p className="text-slate-600 text-lg">Every syllabus, assignment, and live mentoring session is built on four core principles.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col">
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-xl border border-blue-100">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET YOUR MENTOR */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Leadership & Mentorship</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Meet the Lead Instructor</h2>
          <p className="text-slate-600 text-lg">Training created by active practitioners, not theoretical academics.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-44 h-44 bg-slate-200 rounded-full shrink-0 border-4 border-blue-100 shadow-md flex items-center justify-center text-slate-500 font-bold text-sm text-center p-4">
            Mentor Photo
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-1">Manish Goswami</h3>
            <p className="text-blue-600 font-bold text-lg mb-4">Founder & CEO — Vaptura Labs | Founder — GWC Academy</p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Experienced SOC Analyst and former DevSecOps Engineer at Archlynk. Manish specializes in cloud-native security automation, penetration testing (VAPT), and defensive SIEM architecture. He established GWC Academy to forge candidates with real-world troubleshooting capabilities.
            </p>
            
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Professional Certifications:</p>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-200">
                GCP Professional Cloud Architect
              </span>
              <span className="bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-200">
                Microsoft SC-200
              </span>
              <span className="bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-200">
                Certified Ethical Hacker (CEH)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE VAPTURA LABS PIPELINE */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-3 block">The Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            How GWC Feeds Directly into Vaptura Labs
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            Most bootcamps finish when the course ends. Because GWC Academy is part of <a href="https://vapturalabs.com/" target="_blank" rel="noreferrer" className="text-blue-400 font-bold underline hover:text-blue-300">Vaptura Labs</a>, we provide top performers an avenue to gain real industry exposure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-blue-400 font-bold text-sm mb-2">Step 01</p>
              <h4 className="font-bold text-xl mb-2">Cohort Mastery</h4>
              <p className="text-slate-400 text-sm">Complete live sessions, finish weekly assignments, and build production-level capstone projects.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-blue-400 font-bold text-sm mb-2">Step 02</p>
              <h4 className="font-bold text-xl mb-2">Technical Evaluation</h4>
              <p className="text-slate-400 text-sm">Undergo internal mock reviews and performance audits assessed by Vaptura Labs engineering leads.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-blue-400 font-bold text-sm mb-2">Step 03</p>
              <h4 className="font-bold text-xl mb-2">Internship Opportunity</h4>
              <p className="text-slate-400 text-sm">Top candidates receive a direct interview for a 3-month paid internship working on real client projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BAND */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Build Real-World IT Capabilities?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore our structured career tracks or submit your details to consult with a mentor on the right path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-xl shadow-2xl text-lg transition"
            >
              View All Programs
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-800 border border-blue-500 hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-xl shadow-xl text-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;