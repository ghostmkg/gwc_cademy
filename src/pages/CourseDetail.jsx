import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { coursesData } from '../data/courses';
import { 
  CheckCircle2, Clock, Award, Video, FileText, ChevronDown, 
  ChevronUp, ShieldCheck, Target, Briefcase, Calendar, 
  MonitorPlay, MessageSquare, Code2, Presentation, ChevronRight, Send
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id);
  const [openModule, setOpenModule] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState('course');
  const [showSticky, setShowSticky] = useState(false);
  const [showForm, setShowForm] = useState(false); // Controls the Cashfree Form visibility
  const [enquirySent, setEnquirySent] = useState(false); // Controls Enquiry Form status

  // Scroll listener for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero (approx 600px)
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to handle opening Cashfree form & scrolling smoothly
  const handleApplyClick = (e) => {
    e.preventDefault();
    setShowForm(true);
    const enrollSection = document.getElementById('enroll');
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle native enquiry form submission
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your email or backend.
    // For now, it shows a success message to the user.
    setEnquirySent(true);
  };

  if (!course) return <Navigate to="/courses" />;

  return (
    <div className="bg-slate-50 min-h-screen pb-32 font-sans text-slate-900 relative">
      <SEO 
        title={`${course.title} Course | Live Classes | GWC Academy`} 
        description={`Learn ${course.title} through live instructor-led classes, hands-on projects, recorded lessons and mentor support with GWC Academy.`} 
      />

      {/* 1. BREADCRUMBS & HERO */}
      <section className="bg-slate-900 text-white pt-8 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14}/>
            <Link to="/courses" className="hover:text-white transition">Courses</Link>
            <ChevronRight size={14}/>
            <span className="text-blue-400">{course.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">
                {course.category} Track
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">{course.title}</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">{course.heroSubtitle}</p>
              
              <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-200 mb-10">
                <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">{course.level}</span>
                <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">{course.duration}</span>
                <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">{course.mode}</span>
                <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">Projects Included</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleApplyClick}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition text-center text-lg"
                >
                  Apply for Next Cohort
                </button>
                
                {/* FIXED: Changed to <a> tag for actual PDF download */}
                {course.syllabusPdf && (
                  <a 
                    href={course.syllabusPdf}
                    download 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold py-4 px-8 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <FileText size={18}/> Syllabus PDF
                  </a>
                )}
              </div>
              <p className="text-slate-400 text-sm mt-4">2-minute application • Secure Payment via Cashfree.</p>
            </div>

            <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE BATCH DETAILS (Critical Info) */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-x divide-slate-100">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Next Cohort</p>
            <p className="font-extrabold text-slate-900">{course.batchDetails.nextCohort}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Classes</p>
            <p className="font-extrabold text-slate-900">{course.batchDetails.classes}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Timing (IST)</p>
            <p className="font-extrabold text-slate-900">{course.batchDetails.time}</p>
          </div>
          <div className="hidden lg:block">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Mode</p>
            <p className="font-extrabold text-slate-900">{course.batchDetails.mode}</p>
          </div>
          <div className="hidden lg:block">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Language</p>
            <p className="font-extrabold text-slate-900">{course.batchDetails.language}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Recordings</p>
            <p className="font-extrabold text-slate-900">{course.batchDetails.recordings}</p>
          </div>
        </div>
      </section>

      {/* 3. TARGET AUDIENCE & PREREQUISITES */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target className="text-blue-600"/> This is for:</h3>
          <ul className="space-y-4 text-slate-600">
            {course.whoIsItFor.map((item, i) => (
              <li key={i} className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-blue-600"/> Prerequisites</h3>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <p className="font-bold text-amber-900 mb-4">You should be willing to:</p>
            <ul className="space-y-3 text-amber-800 text-sm">
              {course.prerequisites.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. VAPTURA LABS PIPELINE */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl border border-slate-800">
          <div className="bg-blue-600/20 border border-blue-500/30 text-blue-400 p-6 rounded-2xl shrink-0">
             <Briefcase size={48} />
          </div>
          <div>
            <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-2 block">Career Opportunity</span>
            <h3 className="text-3xl font-extrabold text-white mb-4">The Vaptura Labs Internship</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Top-performing students may receive a direct interview opportunity for a 3-month paid internship with <a href="https://vapturalabs.com/" target="_blank" rel="noreferrer" className="text-blue-400 font-bold underline hover:text-blue-300">Vaptura Labs</a>, subject to eligibility and selection.
            </p>
            <p className="text-slate-500 text-sm italic">
              *Selection is strictly based on cohort performance, project quality, attendance, and internal technical evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW YOUR LEARNING WORKS */}
      <section className="py-20 px-4 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How Your Learning Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <MonitorPlay className="text-blue-600 mb-4" size={32}/>
              <h4 className="font-bold text-lg mb-2">01. Attend Live</h4>
              <p className="text-sm text-slate-600">Join instructor-led interactive sessions to learn core concepts.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <Code2 className="text-blue-600 mb-4" size={32}/>
              <h4 className="font-bold text-lg mb-2">02. Practice</h4>
              <p className="text-sm text-slate-600">Complete assignments and coding exercises between classes.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <MessageSquare className="text-blue-600 mb-4" size={32}/>
              <h4 className="font-bold text-lg mb-2">03. Ask Doubts</h4>
              <p className="text-sm text-slate-600">Submit questions 24x7 via our support system whenever stuck.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <Presentation className="text-blue-600 mb-4" size={32}/>
              <h4 className="font-bold text-lg mb-2">04. Build & Evaluate</h4>
              <p className="text-sm text-slate-600">Build portfolio projects and get evaluated for the internship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU WILL LEARN */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What You Will Learn</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {course.whatYouWillLearn.map((outcome, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 bg-blue-100 text-blue-600 rounded-full p-1"><CheckCircle2 size={16}/></div>
              <p className="text-slate-700 font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROJECTS SHOWCASE */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects You Will Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {course.projects.map((proj, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Project 0{i + 1}</div>
                <h4 className="font-bold text-2xl mb-4 pr-12">{proj.title}</h4>
                <p className="text-slate-300 mb-6 leading-relaxed">{proj.outcome}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.skills.map((skill, j) => (
                    <span key={j} className="bg-slate-900 text-blue-300 border border-blue-900/50 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SYLLABUS ACCORDION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold">Detailed Curriculum</h2>
            
            {/* FIXED: Changed to <a> tag for actual PDF download */}
            {course.syllabusPdf && (
              <a 
                href={course.syllabusPdf}
                download 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline flex items-center gap-2"
              >
                <FileText size={18}/> Full PDF
              </a>
            )}
          </div>

          <div className="space-y-4">
            {course.syllabus.map((mod, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition text-left"
                >
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{mod.title}</h4>
                    {mod.meta && <p className="text-sm text-slate-500 mt-1 font-medium">{mod.meta}</p>}
                  </div>
                  {openModule === i ? <ChevronUp className="text-slate-500 shrink-0"/> : <ChevronDown className="text-slate-500 shrink-0"/>}
                </button>
                {openModule === i && (
                  <div className="p-6 bg-white border-t border-slate-200">
                    <ul className="space-y-4">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING & BUY FLOW (Cashfree Expansion Fix) */}
      <section id="enroll" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col lg:flex-row gap-12 items-start transition-all duration-500">
          
          <div className={`w-full ${showForm ? 'max-w-4xl mx-auto text-center' : 'flex-1 text-center lg:text-left'}`}>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Program Fee</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">{course.price}</h2>
            <p className="text-slate-600 mb-8 font-medium">Transparent pricing. Secure checkout via Cashfree.</p>
            
            {/* Conditional Rendering of Button vs Cashfree Form */}
            {!showForm ? (
              <>
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition text-lg mb-4 text-center"
                >
                  Apply for Next Cohort
                </button>
                <p className="text-sm text-slate-500">Clicking apply opens secure checkout.</p>
              </>
            ) : (
              <div className="w-full mt-4 animate-in fade-in zoom-in duration-300">
                {/* Form Header */}
                <div className="flex justify-between items-center bg-slate-100 border border-slate-200 border-b-0 rounded-t-xl px-4 py-3">
                  <span className="font-bold text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Secure Cashfree Checkout
                  </span>
                  <button 
                    onClick={() => setShowForm(false)} 
                    className="text-slate-500 hover:text-rose-600 text-sm font-bold transition flex items-center gap-1"
                  >
                    Close ✕
                  </button>
                </div>
                
                {/* FIXED: Massive Width Cashfree Iframe */}
                <div className="w-full bg-white border border-slate-200 rounded-b-xl overflow-hidden shadow-inner">
                  <iframe 
                    src={course.enrollmentLink} 
                    width="100%" 
                    height="800" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    title={`${course.title} Checkout`}
                    className="w-full bg-slate-50"
                  >
                    Loading secure checkout...
                  </iframe>
                </div>
              </div>
            )}
          </div>

          {/* FIXED: Hides the sidebar when form opens so the form gets 100% width! */}
          {!showForm && (
            <div className="flex-1 w-full bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-24">
              <h4 className="font-bold text-lg mb-6">What's Included:</h4>
              <ul className="space-y-4 text-slate-700 font-medium">
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> {course.duration} live program</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> Recording access ({course.batchDetails.recordings})</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> Practical assignments & projects</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> 24x7 Doubt Submission system</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> GWC Certificate of Completion</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> Internship evaluation opportunity*</li>
              </ul>
            </div>
          )}

        </div>
      </section>

      {/* 10. TABBED FAQs */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.keys(course.faqs).map(category => (
            <button 
              key={category}
              onClick={() => setActiveFaqTab(category)}
              className={`px-6 py-2 rounded-full font-bold text-sm capitalize transition ${activeFaqTab === category ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="space-y-4">
          {course.faqs[activeFaqTab].map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. ENQUIRY NATIVE FORM SECTION */}
      <section className="py-24 px-4 bg-blue-50 border-t border-blue-100 mt-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Still Have Questions About This Course?</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Drop your details below. Our academic counseling team will reach out via WhatsApp/Call to clear your doubts and help you decide if this track is right for you.
            </p>
            <div className="flex items-center gap-4 text-slate-700 font-medium">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200">
                <MessageSquare className="text-blue-600" size={24} />
              </div>
              <p>Replies within 24 working hours.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            {enquirySent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Sent!</h4>
                <p className="text-slate-600">Thank you. Our counselor will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Enquiring About</label>
                  <input 
                    type="text" 
                    value={course.title} 
                    readOnly 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 font-medium outline-none cursor-not-allowed" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your full name" 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 00000 00000" 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 mt-4"
                >
                  Submit Enquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 12. CROSS-SELL (Where to go next) */}
      <section className="py-20 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Where Can You Go After This?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {course.crossSell.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                <Link to={item.link} className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                  Explore <ChevronRight size={14}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. STICKY MOBILE CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] p-4 transform transition-transform duration-300 z-50 flex items-center justify-between md:justify-center md:gap-12 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="hidden md:block">
          <p className="text-xs text-slate-500 font-bold uppercase">{course.title}</p>
          <p className="font-extrabold text-xl text-slate-900">{course.price}</p>
        </div>
        <div className="md:hidden">
          <p className="font-extrabold text-xl text-slate-900">{course.price}</p>
        </div>
        <button 
          onClick={handleApplyClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition"
        >
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default CourseDetail;