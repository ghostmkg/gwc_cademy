import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  Mail, Phone, MapPin, MessageCircle, Clock, 
  ShieldCheck, Send, CheckCircle2, ChevronRight, HelpCircle
} from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Choosing a course',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend or an email service here.
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: "Where can I see course fees and offers?",
      a: "Visit our Courses page. Every career program has transparent pricing, what's included, and current batch schedules clearly listed."
    },
    {
      q: "How do I actually buy a course?",
      a: "Go to the specific course page and click 'Apply for Next Cohort'. You will fill out a secure Google Form to reserve your seat, and our team will send you an official payment link."
    },
    {
      q: "What if I need to change my batch timing after enrolling?",
      a: "Simply reach out to our support team via WhatsApp. As long as there are open seats in your requested batch, we will transfer you at no extra cost."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO 
        title="Contact Us | GWC Academy Support & Guidance"
        description="Need help choosing an IT career program? Contact GWC Academy for course guidance, batch timings, and technical support."
      />

      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Talk to GWC Academy</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Whether you are confused between Full-Stack and Cyber Security, or just want to know how our live training pipeline to Vaptura Labs works, we are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-blue-400">
            <span className="flex items-center gap-2"><Clock size={18}/> 24 Hour Response Time</span>
            <span className="flex items-center gap-2"><MessageCircle size={18}/> WhatsApp Support</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION (Two Columns) */}
      <section className="max-w-6xl mx-auto px-4 -mt-12 relative z-10 mb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Contact Info */}
          <div className="bg-slate-50 lg:w-2/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-8 flex-grow">
              <a href="mailto:growthwithcode@gmail.com" className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm group-hover:border-blue-300 transition">
                  <Mail className="text-blue-600" size={24}/>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition">Email Us</p>
                  <p className="text-slate-600 text-sm">contact@vapturalabs.com</p>
                  <p className="text-slate-500 text-xs mt-1">Best for technical or payment support.</p>
                </div>
              </a>

              <a href="https://wa.me/917304236866?text=Hi%20Vaptura%20Labs,%20I%20have%20an%20enquiry%20related%20to%20the%20courses." className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm group-hover:border-[#25D366] transition">
                  <MessageCircle className="text-[#25D366]" size={24}/>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 group-hover:text-[#25D366] transition">WhatsApp Chat</p>
                  <p className="text-slate-600 text-sm">+91 7304236866</p>
                  <p className="text-slate-500 text-xs mt-1">Fastest for course and batch inquiries.</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <MapPin className="text-blue-600" size={24}/>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Headquarters</p>
                  <p className="text-slate-600 text-sm">Mumbai, Maharashtra, India</p>
                  <p className="text-slate-500 text-xs mt-1">Online academy operating PAN India.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-2xl">
              <p className="font-bold text-blue-900 mb-2">Business Hours</p>
              <p className="text-blue-800 text-sm mb-1">Mon – Sat: 10:00 AM – 7:00 PM (IST)</p>
              <p className="text-blue-700 text-xs">For urgent class issues, enrolled students can use the Discord priority channel.</p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
                <p className="text-slate-600 text-lg max-w-md mb-8">
                  Thank you for reaching out. A mentor or support agent will reply to the email/number provided within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700">WhatsApp / Phone <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-slate-700">How can we help?</label>
                      <select 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-700 appearance-none"
                      >
                        <option value="Choosing a course">Guidance: Choosing a course</option>
                        <option value="Batch timing / schedule">Batch timings & schedules</option>
                        <option value="Fees & Enrollment">Fees, Payment & Enrollment</option>
                        <option value="Vaptura Internship Query">Vaptura Labs Internship</option>
                        <option value="Technical support">Technical Support</option>
                        <option value="Corporate / Other">Corporate Training / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Your Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      placeholder="Example: I'm a 3rd-year student and I'm confused between taking the Full-Stack or Cloud track. Could someone call me to discuss?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-lg"
                  >
                    Send Message <Send size={18} />
                  </button>

                  <div className="flex items-start gap-2 text-xs text-slate-500 mt-4">
                    <ShieldCheck size={16} className="shrink-0 text-slate-400" />
                    <p>Your information is protected and will strictly be used to respond to your inquiry. We do not spam. Read our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 3. MINI FAQ SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="text-blue-600"/> Quick Answers
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FUNNEL ROUTING CTA */}
      <section className="py-16 px-4 bg-slate-100 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Prefer browsing first?</h3>
          <p className="text-slate-600 mb-8">
            Explore our detailed curriculum, practical projects, and live batch schedules across all our industry tracks.
          </p>
          <Link 
            to="/courses" 
            className="inline-flex bg-white border border-slate-300 hover:border-blue-500 text-slate-900 font-bold py-3 px-8 rounded-xl shadow-sm transition items-center justify-center gap-2"
          >
            Explore Career Programs <ChevronRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Contact;