import React from 'react';
import SEO from '../components/seo/SEO';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO title="Privacy Policy | GWC Academy" description="Privacy Policy and data protection guidelines for GWC Academy students." />
      
      <section className="bg-slate-900 text-white pt-16 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            When you enroll in a course, fill out a Google Form, or contact us, we collect personal information such as your name, email address, phone number, and educational/professional background. We do not store sensitive payment gateway information (like credit card numbers) on our servers; these are handled directly by secure third-party payment processors.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Your data is used strictly to provide you with our educational services. This includes granting you access to course materials, communicating batch schedules, processing payments, and evaluating your profile for the Vaptura Labs internship pipeline.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Sharing and Protection</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. Your data may be shared internally with our parent company, <strong>Vaptura Labs</strong>, solely for the purpose of internship evaluation and recruitment. We implement standard security measures to protect your data against unauthorized access.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Communications</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            By enrolling or submitting an inquiry, you consent to receive communications from us via Email, WhatsApp, and phone regarding your course, batch updates, and career opportunities. You may opt out of marketing communications at any time.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions regarding this Privacy Policy, please contact us at <strong>contact@vapturalabs.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;