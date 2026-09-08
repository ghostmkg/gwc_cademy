import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  CheckCircle2, Users, BookOpen, Star, ChevronRight, 
  MessageCircle, Clock, Video, Briefcase, Award, ArrowRight, ShieldCheck
} from 'lucide-react';

const GwcHome = () => {
  // --- AEO / GEO SCHEMA DATA (Invisible to Humans, Read by AI) --- //
  const homepageFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is GWC Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GWC Academy is an elite IT training institute and the educational branch of Vaptura Labs. We provide practical, cohort-based certification training in Full-Stack Web Development, Cyber Security (CEH), and Cloud Infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "Who teaches the courses at GWC Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our curriculum is led by active industry practitioners and engineers from Vaptura Labs, bringing real-world SOC, DevSecOps, and Penetration Testing experience directly to the classroom."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior coding experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not for our Foundation tracks. We take you from absolute zero to deployable skills. Advanced Career Programs do require basic syntax knowledge."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get a certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every completed program includes an industry-recognized certificate of completion from GWC Academy."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Vaptura Labs internship work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top performers in our signature 6-month cohorts receive a direct interview for a 3-month paid internship at our IT services company, Vaptura Labs, working on live client projects."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable for working professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our live batches are scheduled on weekends and evenings specifically for upskilling professionals in India."
        }
      },
      {
        "@type": "Question",
        "name": "Are live classes recorded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All live mentorship sessions are recorded and available in your student portal within 24 hours so you never miss a concept."
        }
      }
    ]
  };

  // --- CONTENT DATA --- //
  const programs = [
    { 
      title: "Full-Stack & Web Dev", 
      desc: "Build deployable web and mobile apps with industry-standard stacks.", 
      level: "Beginner to Advanced",
      duration: "6 Months",
      mode: "Live + Recorded",
      projects: "4+ Industry Projects",
      outcomes: ["Deploy responsive front-ends in React", "Design secure APIs", "Publish portfolio projects"],
      link: "/courses/full-stack-web-dev"
    },
    { 
      title: "Cyber Security & VAPT", 
      desc: "Master offensive and defensive security for enterprise environments.", 
      level: "Intermediate to Advanced",
      duration: "4 Months",
      mode: "Live + Recorded",
      projects: "Live Target Environments",
      outcomes: ["Perform real-world VAPT", "Write vulnerability reports", "Harden Linux infrastructure"],
      link: "/courses/vapt-beginner"
    },
    { 
      title: "Cloud Infrastructure", 
      desc: "Architect, deploy, and scale applications on leading cloud providers.", 
      level: "Intermediate",
      duration: "4 Months",
      mode: "Live + Recorded",
      projects: "3+ Cloud Deployments",
      outcomes: ["Deploy code to AWS/Azure/GCP", "Manage IAM and security", "Build CI/CD pipelines"],
      link: "/courses/cloud-infrastructure"
    },
    { 
      title: "Programming Foundations", 
      desc: "Master the core logic required to become a top-tier developer.", 
      level: "Absolute Beginner",
      duration: "3 Months",
      mode: "Live + Recorded",
      projects: "Logic & Algorithm Challenges",
      outcomes: ["Write clean, reusable Python/Java", "Master core data structures", "Build logical problem-solving skills"],
      link: "/courses/python-foundation"
    }
  ];

  const faqs = [
    { q: "What is GWC Academy?", a: "GWC Academy is an elite IT training institute and the educational branch of Vaptura Labs. We provide practical, cohort-based certification training in Full-Stack Web Development, Cyber Security, and Cloud Infrastructure." },
    { q: "Who teaches the courses?", a: "Our curriculum is led by active industry practitioners and engineers from Vaptura Labs, bringing real-world SOC, DevSecOps, and Penetration Testing experience directly to the classroom." },
    { q: "Do I need prior coding experience?", a: "Not for our Foundation tracks. We take you from absolute zero to deployable skills. Advanced Career Programs do require basic syntax knowledge." },
    { q: "Will I get a certificate?", a: "Yes, every completed program includes an industry-recognized certificate of completion from GWC Academy." },
    { q: "How does the Vaptura Labs internship work?", a: "Top performers in our signature 6-month cohorts receive a direct interview for a 3-month paid internship at our IT services company, Vaptura Labs, working on live client projects." },
    { q: "Is this suitable for working professionals?", a: "Absolutely. Our live batches are scheduled on weekends and evenings specifically for upskilling professionals in India." },
    { q: "Are live classes recorded?", a: "Yes. All live mentorship sessions are recorded and available in your student portal within 24 hours so you never miss a concept." }
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 w-full">
      
      {/* --- SEO CONFIGURATION (Now with injected Schema) --- */}
      <SEO 
        title="GWC Academy | Live IT Courses, Projects, Cybersecurity & Cloud Training"
        description="Learn Full Stack Development, Python, Java, Cybersecurity, VAPT, SOC and Cloud through live classes, recorded lessons, projects, industry exposure and career-focused training."
        schemaMarkup={homepageFAQSchema}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Admissions Open for Next Cohort
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Go Beyond Theory. Train Like a Real Engineer.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Live instructor-led training in Development, Cybersecurity & Cloud — with recorded lessons, hands-on projects, industry exposure, and internship opportunities through the <span className="text-blue-400 font-bold">Vaptura Labs</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
              <Link to="/courses" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-900/50 text-lg transition flex items-center justify-center gap-2">
                View Career Programs <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition flex items-center justify-center gap-2">
                Book Free Counselling
              </Link>
            </div>

            {/* Micro Social Proof */}
            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2 text-white"><Video size={18} className="text-blue-400"/> Live Classes</span>
              <span className="flex items-center gap-2 text-white"><Clock size={18} className="text-blue-400"/> Recorded Access</span>
              <span className="flex items-center gap-2 text-white"><Briefcase size={18} className="text-blue-400"/> 3-Month Internship*</span>
            </div>
          </div>

          {/* Hero YouTube Video */}
          <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/egdn_8UaFJQ" 
              title="GWC Academy Introduction" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* 2. AUDIENCE FIT SECTION */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Is GWC Academy Right For You?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">This is perfect for:</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> College students wanting a job-ready IT portfolio</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Working professionals switching to Cyber Security or Cloud</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Developers leveling up their practical coding skills</li>
              </ul>
            </div>
            <div className="bg-rose-50/50 p-8 rounded-2xl border border-rose-100">
               <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">✕</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">GWC is NOT for you if you want:</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3"><span className="text-rose-400 font-bold">✕</span> A shortcut to a "guaranteed job" without doing the work</li>
                <li className="flex gap-3"><span className="text-rose-400 font-bold">✕</span> A printed certificate without practical project execution</li>
                <li className="flex gap-3"><span className="text-rose-400 font-bold">✕</span> Completely self-paced learning with zero live interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAREER PROGRAMS OVERVIEW */}
      <section id="courses" className="py-24 bg-slate-50 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Career Programs</h2>
            <p className="text-lg text-slate-600">Build job-ready skills in a structured learning journey—from fundamentals to real-world projects.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-6 h-12">{program.desc}</p>
                
                {/* Program Metadata */}
                <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2"><Award size={16} className="text-blue-600"/> {program.level}</div>
                  <div className="flex items-center gap-2"><Clock size={16} className="text-blue-600"/> {program.duration}</div>
                  <div className="flex items-center gap-2"><Video size={16} className="text-blue-600"/> {program.mode}</div>
                  <div className="flex items-center gap-2"><Briefcase size={16} className="text-blue-600"/> {program.projects}</div>
                </div>
                
                <div className="flex-grow">
                  <p className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Capabilities:</p>
                  <ul className="space-y-3 mb-8 text-slate-600 text-sm">
                    {program.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start gap-2">
                         <CheckCircle2 className="text-emerald-500 shrink-0 w-4 h-4 mt-0.5" /> {out}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={program.link} className="w-full py-3 px-4 rounded-xl font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors mt-auto border border-blue-100 flex items-center justify-center gap-2">
                  View Program <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VAPTURA LABS INTERNSHIP - MASSIVE SECTION */}
      <section className="py-24 bg-blue-700 text-white px-4 relative overflow-hidden">
        {/* Background abstract element */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Don't Finish With a Certificate.<br className="hidden md:block" /> Finish With Experience.
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              GWC Academy is the educational branch of <a href="https://vapturalabs.com/" target="_blank" rel="noreferrer" className="underline font-bold hover:text-white underline-offset-4">Vaptura Labs</a>. Top performers enter our 3-Month Industry-Oriented Internship pipeline immediately after their cohort ends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-600 p-8 rounded-2xl relative">
              <div className="text-5xl font-extrabold text-blue-500/20 absolute top-4 right-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-white">Month 1: Onboarding</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Transition from student to employee. Learn enterprise tools, corporate communication, agile methodologies, and deep dive into the fundamentals of your assigned tech stack.
              </p>
            </div>
            
            <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-600 p-8 rounded-2xl relative">
              <div className="text-5xl font-extrabold text-blue-500/20 absolute top-4 right-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-white">Month 2: Execution</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Work on live, internal Vaptura Labs project scenarios. Write production code, conduct real security audits, or deploy cloud infrastructure alongside senior engineers.
              </p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-600 p-8 rounded-2xl relative">
              <div className="text-5xl font-extrabold text-blue-500/20 absolute top-4 right-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-white">Month 3: Delivery</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Deliver your project to management, undergo formal evaluation, and build an undeniable portfolio. Successful interns may receive pre-placement offers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about" className="inline-block bg-white text-blue-800 font-extrabold py-4 px-10 rounded-xl shadow-2xl hover:bg-slate-50 transition-all hover:scale-105 text-lg">
              Explore The Internship Pipeline
            </Link>
            <p className="text-blue-200 text-sm mt-4">*Selection based on cohort performance and internal mock interviews.</p>
          </div>
        </div>
      </section>

      {/* 5. LIVE TRAINING STRUCTURE */}
      <section id="live-training" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Live Training Designed for True Understanding</h2>
            <p className="text-lg text-slate-600 mb-8">
              We keep cohorts small. We write code live. We tailor the pace to Indian learners, ensuring you actually understand the architecture rather than just copying syntax from a screen.
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-bold text-slate-700">Live Sessions</span>
                <span className="text-slate-900 font-medium">3 Days / Week</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-bold text-slate-700">Class Duration</span>
                <span className="text-slate-900 font-medium">2 Hours / Session</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-bold text-slate-700">Recordings</span>
                <span className="text-slate-900 font-medium">Available within 24 Hrs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">Language</span>
                <span className="text-slate-900 font-medium">English & Hindi mix</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
              Enrolling Now
            </div>
            <h3 className="text-2xl font-bold mb-8">Upcoming Live Batches</h3>
            
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold">Full-Stack Bootcamp</h4>
                    <p className="text-slate-400 text-sm mt-1">Weekend Live Sessions</p>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30">Starts Sept 1</span>
                </div>
                <Link to="/courses/full-stack-web-dev" className="block text-center w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 transition">Reserve Your Seat</Link>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold">Cyber Security & VAPT</h4>
                    <p className="text-slate-400 text-sm mt-1">Evening Weekday Batch</p>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30">Starts Sept 15</span>
                </div>
                <Link to="/courses/vapt-beginner" className="block text-center w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 transition">Reserve Your Seat</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTRUCTOR CREDIBILITY */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Learn From Industry Practitioners</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 text-left flex flex-col md:flex-row gap-10 items-center relative">
            <div className="w-40 h-40 bg-slate-200 rounded-full shrink-0 border-4 border-white shadow-lg overflow-hidden">
                <img src="/images/manish.png" alt="Manish Goswami" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">Manish Goswami</h3>
              <p className="text-blue-700 font-bold mb-4 text-lg">
                Founder & CEO — Vaptura Labs | Founder — GWC Academy
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed max-w-2xl">
                Former DevSecOps Engineer at Archlynk and seasoned SOC Analyst. Manish founded GWC Academy to bridge the massive gap between academic theory and the rigorous, hands-on demands of real-world IT service companies. 
              </p>
              
              <div className="mb-6">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Industry Certifications:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold border border-slate-200 shadow-sm flex items-center gap-2"><ShieldCheck size={16} className="text-blue-600"/> GCP Professional Cloud Architect</span>
                  <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold border border-slate-200 shadow-sm flex items-center gap-2"><ShieldCheck size={16} className="text-blue-600"/> Microsoft SC-200</span>
                  <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold border border-slate-200 shadow-sm flex items-center gap-2"><ShieldCheck size={16} className="text-blue-600"/> Certified Ethical Hacker (CEH)</span>
                </div>
              </div>

              <Link to="/about" className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-1 w-max">
                View Full Profile <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY & SUPPORT (Revised) */}
      <section id="community" className="py-20 bg-[#5865F2]/10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-[#5865F2] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">24x7 Doubt Submission & Active Community</h2>
          <p className="text-slate-700 mb-10 text-lg max-w-2xl mx-auto">
            Submit your questions anytime through the GWC support system and get mentor assistance. Join our Discord for peer networking, code reviews, and job updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://discord.gg/tqegPmHCy" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-3"
            >
              Join Discord Community
            </a>
            <a 
              href="https://whatsapp.com/channel/0029ValnoT1CBtxNi4lt8h1s" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-3"
            >
              Join WhatsApp Updates
            </a>
          </div>
        </div>
      </section>

      {/* 8. RISK REVERSAL & FAQ (Visual FAQ) */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing & Clear Policies</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
              <span className="bg-slate-100 px-4 py-2 rounded-full flex items-center gap-2">🔒 Secure online payment</span>
              <span className="bg-slate-100 px-4 py-2 rounded-full flex items-center gap-2">📄 GST invoice available</span>
              <span className="bg-slate-100 px-4 py-2 rounded-full flex items-center gap-2">💬 Support via WhatsApp</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg">
                  {faq.q}
                  <span className="transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="bg-blue-700 text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Build Your IT Career?</h2>
          <p className="text-xl text-blue-100 mb-12">Take the first step toward industry-ready skills and real-world experience.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/courses" className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-xl shadow-2xl text-lg transition">
              Explore All Programs
            </Link>
             <Link to="/contact" className="inline-flex items-center justify-center bg-blue-800 border border-blue-600 hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-xl shadow-xl text-lg transition">
              Book Free Counselling
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default GwcHome;