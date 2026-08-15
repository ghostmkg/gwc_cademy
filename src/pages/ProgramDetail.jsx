import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { programsData } from '../data/programs';
import { 
  Briefcase, CheckCircle2, ChevronRight, ArrowRight, 
  TrendingUp, Layers, HelpCircle, ShieldCheck, ChevronDown, 
  ChevronUp, Award, Code2, Server, Shield
} from 'lucide-react';

const ProgramDetail = () => {
  const { track } = useParams();
  const program = programsData[track];
  const [openFaq, setOpenFaq] = useState(null);

  // If track doesn't exist, redirect to courses catalog
  if (!program) {
    return <Navigate to="/courses" replace />;
  }

  const trackLinks = [
    { id: 'development', label: 'Development', icon: <Code2 size={16}/> },
    { id: 'cybersecurity', label: 'Cyber Security & VAPT', icon: <Shield size={16}/> },
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Server size={16}/> },
    { id: 'foundation', label: 'Programming Basics', icon: <Layers size={16}/> }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO 
        title={`${program.title} | GWC Academy`}
        description={program.subheading}
      />

      {/* 1. TRACK SELECTOR & HERO */}
      <section className="bg-slate-900 text-white pt-10 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-400">Programs</span>
            <ChevronRight size={14} />
            <span className="text-blue-400">{program.badge}</span>
          </div>

          {/* Quick Track Switcher Pills */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-6">
            {trackLinks.map((item) => (
              <Link
                key={item.id}
                to={`/programs/${item.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  track === item.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md mb-4">
                {program.badge}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                {program.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                {program.subheading}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#courses" 
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  See Matching Courses <ArrowRight size={16} />
                </a>
                <Link 
                  to="/contact" 
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-3.5 px-8 rounded-xl transition"
                >
                  Talk to a Mentor
                </Link>
              </div>
            </div>

            {/* Micro Highlights Box */}
            <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Why This Program?</h4>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Job-ready hands-on portfolio projects</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Live mentor sessions + 1 year recording access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Fast-track pathway to Vaptura Labs internship</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROGRAM OVERVIEW */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Track Blueprint</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What this Program Is</h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            {program.overview}
          </p>
        </div>
      </section>

      {/* 3. TARGET CAREER ROLES */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Career Outcomes</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Roles You Can Target</h2>
          <p className="text-slate-600">The industry positions this program prepares you to interview and execute for.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {program.roles.map((role, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{role.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{role.desc}</p>
              </div>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Key Tech / Focus:</p>
                <p className="text-xs font-semibold text-slate-700">{role.requirements}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SALARY OVERVIEW (INDIA MARKET) */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-800 pb-6">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">Market Insights</span>
              <h3 className="text-2xl md:text-3xl font-bold">Indicative Salary Ranges (India)</h3>
            </div>
            <span className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-lg">
              Fresher to Senior Level
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Entry Level (0–2 Yrs)</p>
              <p className="text-3xl font-extrabold text-white">{program.salary.entry}</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mid Level (2–5 Yrs)</p>
              <p className="text-3xl font-extrabold text-blue-400">{program.salary.mid}</p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Senior / Specialist (5+ Yrs)</p>
              <p className="text-3xl font-extrabold text-emerald-400">{program.salary.senior}</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic text-center max-w-3xl mx-auto">
            * {program.salary.note}
          </p>
        </div>
      </section>

      {/* 5. SKILLS & TOOLS COVERAGE */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Technical Capabilities</span>
            <h2 className="text-2xl md:text-3xl font-bold">Skills You Will Build</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {program.skills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MAPPED COURSES UNDER THIS TRACK */}
      <section id="courses" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Curriculum Mapping</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Courses in this Program</h2>
          <p className="text-slate-600">Select a course to view detailed syllabus modules, live batch schedules, and pricing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {program.mappedCourses.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-md border border-blue-100">
                    {c.level}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{c.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{c.title}</h3>
                <ul className="space-y-2 mb-8">
                  {c.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {h}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to={`/courses/${c.id}`} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 text-sm"
              >
                Open Course Page <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VAPTURA LABS INTERNSHIP BRIDGE */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="bg-blue-600 text-white p-5 rounded-2xl shrink-0">
            <Briefcase size={36} />
          </div>
          <div className="flex-grow">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest block mb-1">Experience Pipeline</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Vaptura Labs Internship Pathway</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Top performers enrolled in this program receive fast-track interview consideration for a 3-month paid internship with Vaptura Labs, working on live client deliverables and production toolchains.
            </p>
            <Link to="/internship" className="text-blue-700 font-bold text-sm hover:underline inline-flex items-center gap-1">
              Read Internship Handbook & Selection Terms <ChevronRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="text-blue-600" /> Program FAQs
        </h2>
        <div className="space-y-4">
          {program.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                {faq.q}
                {openFaq === idx ? <ChevronUp className="text-slate-500 shrink-0"/> : <ChevronDown className="text-slate-500 shrink-0"/>}
              </button>
              {openFaq === idx && (
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Build Your Career in {program.badge}?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
            Choose a course under this program or schedule a free counselling call with a mentor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-8 rounded-xl shadow-xl transition"
            >
              Browse All Courses
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-800 border border-blue-500 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition"
            >
              Request Career Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramDetail;