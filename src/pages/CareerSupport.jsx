import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  Calendar, CheckCircle2, ShieldCheck, Crosshair, 
  TrendingUp, Users, Video, Briefcase, FileText, 
  MessageSquare, ChevronDown, ChevronUp, PlayCircle,
  ChevronRight // <-- Added this missing import
} from 'lucide-react';

const CareerSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Is the first consultation really free?",
      a: "Yes, 100% free with zero financial obligation. We want to give you a clear roadmap first. Whether you choose to self-study using that roadmap or join our academy is completely up to you."
    },
    {
      q: "Who conducts the session?",
      a: "You will speak with experienced engineers and mentors from GWC Academy and Vaptura Labs, not commission-based sales telecallers."
    },
    {
      q: "Do I have to enroll in a course after the call?",
      a: "No. The 6-month action plan and roadmap are yours to keep. We only invite students into our cohorts if we genuinely believe our program fits their goals."
    },
    {
      q: "How many mock interviews do enrolled students get?",
      a: "Enrolled students in our full career tracks undergo multiple simulated technical and behavioral rounds before graduation, complete with personalized feedback on coding logic and communication."
    }
  ];

  const roadmaps = [
    {
      title: "Full-Stack Web Development",
      videoId: "egdn_8UaFJQ",
      desc: "The complete roadmap to becoming a full-stack developer in 2026."
    },
    {
      title: "Cyber Security & VAPT",
      videoId: "Wz_RqrxKZqY",
      desc: "How to transition into security operations and penetration testing."
    },
    {
      title: "Competitive Programming",
      videoId: "EJr8mPQWPn4",
      desc: "Cracking tech interviews and mastering logic and data structures."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO 
        title="Career Support & Mentorship | GWC Academy"
        description="Book your free 1-on-1 IT career consultation. Get a customized 6-month roadmap for Development, Cyber Security, or Cloud roles."
      />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 border border-blue-500/30">
            <Calendar size={16} /> Free 1-on-1 Consultation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Navigate Your IT Career <br/> With Absolute Clarity.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Stop guessing your career roadmap. Get objective, technical advice directly from working industry practitioners—not pushy sales agents.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-slate-300 mb-10">
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">100% Free 1st Call</span>
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">30-Min Custom Roadmap</span>
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">Direct Practitioner Advice</span>
          </div>

          <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition text-lg">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* 2. YOUTUBE ROADMAPS (PRE-CONSULTATION) */}
      <section className="py-20 px-4 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Pre-Call Resources</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Explore Our Industry Roadmaps</h2>
            <p className="text-slate-600">
              Not sure where to start? Watch our comprehensive career roadmaps below to understand the landscape. Once you know which path excites you, book your free consultation to get a personalized execution plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roadmaps.map((video, idx) => (
              <div key={idx} className="flex flex-col bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-video bg-slate-900 relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&showinfo=0`} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{video.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{video.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-slate-500">
              The roadmap gives you the destination. GWC Academy gives you the mentorship to actually get there.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS IN THE CONSULTATION? */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Inside Your Free Session</h2>
          <p className="text-slate-600 text-lg">We remove the friction and give you a structured path forward in just 30 minutes.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <Crosshair size={24}/>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">1. Background Audit</h4>
            <p className="text-sm text-slate-600">We evaluate your current degree, background, and existing skill set.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <TrendingUp size={24}/>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">2. Track Matching</h4>
            <p className="text-sm text-slate-600">Objective analysis of whether Dev, Cyber Security, or Cloud fits your aptitude.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <FileText size={24}/>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">3. Action Plan</h4>
            <p className="text-sm text-slate-600">A step-by-step 6-month roadmap of tools to learn and projects to build.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <MessageSquare size={24}/>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">4. Open Q&A</h4>
            <p className="text-sm text-slate-600">Direct answers regarding batch timings, internships, and work-life balance.</p>
          </div>
        </div>
      </section>

      {/* 4. WHO IS THIS FOR? */}
      <section className="py-16 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Who Should Book a Call?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-3">College Students</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wanting to bypass mass-recruiter aptitude traps and target core developer or security analyst roles right out of college.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Career Switchers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professionals in Non-IT, Operations, or Banking looking for a safe, structured transition plan into tech without quitting their current job.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Working IT Pros</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stuck in low-paying support, BPO, or manual testing roles looking to pivot into high-leverage Cloud or DevSecOps positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 4 PILLARS OF SUPPORT (FOR ENROLLED STUDENTS) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">For Enrolled Learners</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">The 4 Pillars of Career Support</h2>
          <p className="text-slate-600 text-lg">Beyond the syllabus, this is how we prepare you to actually land the job.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-slate-200 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><FileText size={24}/></div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">1. ATS Resume & GitHub Audit</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Line-by-line optimization of your resume to bypass recruiter ATS filters, plus GitHub profile structuring to showcase demonstrable code quality.</p>
            </div>
          </div>
          <div className="border border-slate-200 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><Video size={24}/></div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">2. Mock Interview Gauntlet</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Simulated live coding and incident response rounds with direct feedback on communication, technical logic, and salary negotiation.</p>
            </div>
          </div>
          <div className="border border-slate-200 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><Users size={24}/></div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">3. LinkedIn Strategy</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Profile optimization strategies designed to attract technical recruiters and frameworks for outbound networking with hiring managers.</p>
            </div>
          </div>
          <div className="border border-slate-200 rounded-2xl p-8 flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><Briefcase size={24}/></div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">4. Vaptura Labs Internship</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Fast-track technical interview opportunities for top cohort performers to work on live enterprise deliverables before they even graduate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE NO FAKE GUARANTEES DISCLAIMER (High Trust) */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-blue-600/20 p-5 rounded-full border border-blue-500/30 shrink-0">
            <ShieldCheck size={48} className="text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold mb-3">Our Stance: No Fake Placement Guarantees</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              We do not sell unbacked <i>"100% Guaranteed Placement"</i> gimmicks with hidden terms and conditions. Companies do not hire certificates; they hire problem solvers with deployed portfolios, strong fundamentals, and clear communication.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We provide you with the exact ecosystem, rigorous training, and industry opportunities (via Vaptura Labs) to build that proof. <strong>We forge engineers who clear interviews on merit.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 7. HOW TO BOOK FLOW */}
      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">How to Book Your Session</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-slate-50 border border-slate-200 w-full md:w-1/3 p-6 rounded-2xl">
              <p className="text-blue-600 font-extrabold text-xl mb-2">01</p>
              <h4 className="font-bold text-slate-900 mb-2">Submit Request</h4>
              <p className="text-xs text-slate-600">Fill out our quick contact form.</p>
            </div>
            <div className="hidden md:block text-slate-300"><ChevronRight size={32}/></div>
            <div className="bg-slate-50 border border-slate-200 w-full md:w-1/3 p-6 rounded-2xl">
              <p className="text-blue-600 font-extrabold text-xl mb-2">02</p>
              <h4 className="font-bold text-slate-900 mb-2">Lock in Time</h4>
              <p className="text-xs text-slate-600">Get a WhatsApp message to pick your slot.</p>
            </div>
            <div className="hidden md:block text-slate-300"><ChevronRight size={32}/></div>
            <div className="bg-slate-50 border border-slate-200 w-full md:w-1/3 p-6 rounded-2xl">
              <p className="text-blue-600 font-extrabold text-xl mb-2">03</p>
              <h4 className="font-bold text-slate-900 mb-2">Join Video Call</h4>
              <p className="text-xs text-slate-600">Hop on Google Meet with your mentor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                {faq.q}
                {openFaq === i ? <ChevronUp className="text-slate-500 shrink-0"/> : <ChevronDown className="text-slate-500 shrink-0"/>}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 pt-2 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Get Clear on Your Next Career Move Today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link 
              to="/contact" 
              className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-xl shadow-xl transition text-lg flex items-center justify-center gap-2"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/courses" 
              className="bg-blue-800 border border-blue-500 hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition text-lg flex items-center justify-center gap-2"
            >
              Explore Career Programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerSupport;