import React from 'react';
import SEO from '../components/seo/SEO';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO title="Terms of Service | GWC Academy" description="Terms and Conditions for enrolling in GWC Academy programs." />
      
      <section className="bg-slate-900 text-white pt-16 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-slate-300">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            By accessing GWC Academy's website, enrolling in our courses, or joining our community channels, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Course Access & Intellectual Property</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Upon enrollment, you are granted a non-exclusive, non-transferable license to access the live sessions and recorded materials. <strong>All course content, syllabus structures, code repositories, and videos are the intellectual property of GWC Academy.</strong> Sharing, downloading, reselling, or distributing this content is strictly prohibited and will result in immediate termination of your account without a refund.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Code of Conduct</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We maintain a professional, harassment-free environment. Any form of abuse, spam, or unprofessional behavior in our live classes, Discord, or WhatsApp groups will lead to immediate expulsion.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Internships & Placements</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            While GWC Academy provides career guidance and evaluates top performers for internships at Vaptura Labs, <strong>we do not guarantee job placements</strong>. Internship selection is strictly based on your individual performance, project quality, attendance, and technical interview clearance.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed">
            GWC Academy and Vaptura Labs are not liable for any indirect, incidental, or consequential damages resulting from the use of our educational services. We provide knowledge and tools; your career outcome depends on your own effort and application.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;