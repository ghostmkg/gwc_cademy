import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  Briefcase, Mail, Rocket, Award, ShieldAlert, 
  ChevronRight, CheckCircle2, ChevronDown, ChevronUp, Clock, Code2
} from 'lucide-react';

const Internship = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Who can apply for the internship?",
      a: "Students, freshers, or professionals looking for practical IT experience. You do not need to be a GWC Academy student to apply, but GWC top performers get a fast-track interview."
    },
    {
      q: "Do I need to be enrolled in a GWC Academy course to apply?",
      a: "No. You can apply directly via email (Path 1). However, GWC Academy students who excel in their cohorts skip the initial CV screening phase."
    },
    {
      q: "Is the internship paid?",
      a: "Yes, interns may receive a performance-based stipend of up to ₹5,000 per month. This is strictly dependent on meeting monthly quality and delivery benchmarks."
    },
    {
      q: "Can I get a PPO or job offer after the internship?",
      a: "In exceptional cases, Vaptura Labs may extend a Pre-Placement Offer (PPO). However, this is not guaranteed and depends entirely on your performance and current business requirements."
    },
    {
      q: "Is the internship remote or on-site?",
      a: "Currently, our internship programs operate on a remote/online model, allowing you to collaborate with our engineering team virtually. Exact terms will be shared in your offer letter."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO 
        title="Vaptura Labs Internship Program | GWC Academy"
        description="Gain real-world IT experience. Apply for the 3-month live project internship at Vaptura Labs directly or through GWC Academy career tracks."
      />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 border border-blue-500/30 uppercase tracking-widest">
            <Briefcase size={16} /> Vaptura Labs Program
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            3-Month Live Project <br/> Internship Experience
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Gain real-world experience in Development, Cyber Security, Cloud, and more, working on production-level projects alongside the Vaptura Labs engineering team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-slate-200 mb-10">
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <Clock size={16} className="text-blue-400"/> 3-Month Duration
            </span>
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <Code2 size={16} className="text-blue-400"/> Live Vaptura Projects
            </span>
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <Award size={16} className="text-blue-400"/> Performance Stipend
            </span>
          </div>

          <a href="#apply" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition text-lg">
            See Eligibility & How to Apply
          </a>
        </div>
      </section>

      {/* 2. ABOUT THE INTERNSHIP */}
      <section className="py-16 px-4 max-w-5xl mx-auto -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-slate-100 pb-4">
            <Rocket className="text-blue-600"/> Program Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Duration & Mode</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                The internship duration is strictly <strong>3 months</strong>. Interns operate in a remote environment, following standard Vaptura Labs work hours and agile methodologies.
              </p>
              <h3 className="font-bold text-slate-900 mb-2">Nature of Work</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You will not be working on dummy tasks. Interns work on live, production-level internal tools, client deployments, or security assessments in sectors like Front-end, Back-end, Cyber Security, and Cloud.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4">Why this Internship?</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5"/> Direct mentorship from senior engineers.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5"/> Exposure to enterprise-grade tools and workflows.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5"/> Monthly stipend (up to ₹5,000) based on output.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5"/> Build a verifiable, real-world portfolio.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION PATHS */}
      <section id="apply" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Two Paths to Join</h2>
          <p className="text-slate-600 text-lg">Choose the application process that applies to your current status.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Path 1: Direct Application */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 font-bold text-xs px-4 py-1.5 rounded-bl-xl border-b border-l border-slate-200">
              Open to Public
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Path 1: Direct Application</h3>
            <p className="text-slate-600 mb-8 text-sm">For students and freshers who have not completed a GWC Academy program.</p>
            
            <div className="space-y-6 flex-grow">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-slate-900">Prepare your documents</h4>
                  <p className="text-sm text-slate-600">Ensure your CV is updated with relevant skills, projects, and your GitHub portfolio link.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-slate-900">Draft your email</h4>
                  <p className="text-sm text-slate-600">Write a brief cover note introducing yourself. The email subject line <span className="font-bold text-rose-600">MUST</span> be exactly:</p>
                  <div className="bg-slate-100 p-3 rounded-lg font-mono text-xs text-slate-800 mt-2 border border-slate-200 select-all">
                    Resume for Internship – [Sector Name]
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Example: Resume for Internship – Cyber Security</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-slate-900">Submit</h4>
                  <p className="text-sm text-slate-600">Send your application to <a href="mailto:contact@vapturalabs.com" className="text-blue-600 font-bold hover:underline">contact@vapturalabs.com</a>. Wait for our HR team to review and schedule an interview if shortlisted.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Path 2: GWC Fast-Track */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold text-xs px-4 py-1.5 rounded-bl-xl shadow-md">
              GWC Students Only
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Path 2: GWC Fast-Track</h3>
            <p className="text-slate-400 mb-8 text-sm">Exclusive pipeline for top performers enrolled in GWC Academy career programs.</p>
            
            <div className="space-y-6 flex-grow">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-white">Dominate your Cohort</h4>
                  <p className="text-sm text-slate-300">Enroll in and complete a GWC Academy course. Consistently demonstrate top-tier performance in assignments and live classes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-white">Internal Shortlisting</h4>
                  <p className="text-sm text-slate-300">Mentors evaluate your capstone projects. You <strong>skip the CV screening phase entirely.</strong> (Note: This is based on merit, not automatic for everyone enrolled).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-white">Direct Interview Invite</h4>
                  <p className="text-sm text-slate-300">Receive a direct invitation via email/WhatsApp for the final Vaptura Labs technical interview panel.</p>
                </div>
              </div>
            </div>
            
            <Link to="/courses" className="mt-8 w-full block text-center bg-white text-slate-900 hover:bg-slate-100 font-bold py-3 rounded-xl transition">
              Explore GWC Programs
            </Link>
          </div>
        </div>

        {/* Interview Disclaimer */}
        <div className="mt-8 bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
          <ShieldAlert className="text-amber-600 shrink-0" />
          <div>
            <h4 className="font-bold text-amber-900 mb-1">Important Note on Selections</h4>
            <p className="text-sm text-amber-800">
              All shortlisted candidates (both Path 1 and Path 2) must clear a technical interview with the Vaptura Labs panel. Selection decisions are final, based solely on interview performance, attitude, and technical capability, and are at the total discretion of Vaptura Labs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. POLICIES & PERKS */}
      <section className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Policies & Outcomes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="text-blue-600"/> Stipend & Performance</h3>
              <ul className="space-y-3 text-slate-600 text-sm list-disc pl-4">
                <li>Interns may receive a monthly stipend up to <strong>₹5,000</strong>.</li>
                <li>The stipend is <strong>purely performance-based</strong> and is not automatically guaranteed.</li>
                <li>It is awarded only if performance meets agreed benchmarks (code quality, deadlines, communication).</li>
                <li>Performance is reviewed monthly; failing to meet expectations may result in the stipend being withheld for that month.</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Briefcase className="text-blue-600"/> Completion, LOR & PPO</h3>
              <ul className="space-y-3 text-slate-600 text-sm list-disc pl-4">
                <li><strong>Certificate:</strong> Awarded upon successfully completing the full 3-month tenure and meeting minimum standards.</li>
                <li><strong>LOR:</strong> A formal Letter of Recommendation is provided for interns demonstrating good overall performance.</li>
                <li><strong>PPO (Pre-Placement Offer):</strong> In exceptional cases of outstanding performance, Vaptura Labs may extend a PPO. This depends entirely on performance and business requirements and is never guaranteed.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Program Terms & Conditions</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              All detailed terms, conditions, and policies (working hours, confidentiality, code ownership, leave, and stipend rules) are defined solely by Vaptura Labs. Selected interns will receive a formal handbook and must sign an NDA/Agreement before starting. Vaptura Labs reserves the right to modify program details without prior public notice.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
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

      {/* 6. FINAL CTA BAND */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Start Your Journey with Vaptura Labs?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a 
              href="mailto:contact@vapturalabs.com" 
              className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-8 rounded-xl shadow-xl transition flex items-center justify-center gap-2"
            >
              <Mail size={18}/> Apply Directly (Email)
            </a>
            <Link 
              to="/courses" 
              className="bg-blue-800 border border-blue-500 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition flex items-center justify-center gap-2"
            >
              See GWC Courses <ChevronRight size={18}/>
            </Link>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Have questions? <Link to="/contact" className="text-white hover:underline font-medium">Contact our support team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Internship;