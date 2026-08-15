import React from 'react';
import SEO from '../components/seo/SEO';
import { CreditCard, AlertCircle } from 'lucide-react';

const Refunds = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
      <SEO title="Refund Policy | GWC Academy" description="Transparent refund and cancellation policies for GWC Academy." />
      
      <section className="bg-slate-900 text-white pt-16 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <CreditCard className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Cancellation & Refund Policy</h1>
          <p className="text-slate-300">Fair, transparent, and structured for our live cohorts.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10">
            <h3 className="text-lg font-bold text-slate-900 mb-2">The Standard 15-Day Guarantee</h3>
            <p className="text-slate-700">
              We offer a baseline <strong>15-day refund policy</strong> from the date of your payment. However, because our courses are live and seat-limited, refunds requested after the course has officially started are subject to prorated calculations based on the syllabus covered.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Refund Calculation (If the batch has started)</h2>
            <p className="text-slate-600 mb-4">
              If you request a refund after your live training cohort has commenced, your refund will not be 100%. The refunded amount will be calculated on a <strong>pro-rated basis</strong> considering:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2 font-medium">
              <li>The remaining duration of the course.</li>
              <li>The number of live classes and practical modules that are still pending.</li>
              <li>Administrative overhead for vacating a locked seat.</li>
            </ul>

            <div className="bg-rose-50 border border-rose-100 p-5 rounded-xl flex items-start gap-4 mb-8">
              <AlertCircle className="text-rose-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-rose-900 mb-1">Strict 1-Week Rule</h4>
                <p className="text-rose-800 text-sm">
                  If there is only <strong>1 week of training remaining</strong> in your batch at the time of your request, <strong>no refund will be issued under any circumstances.</strong>
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Request a Refund</h2>
            <p className="text-slate-600 mb-4">
              To initiate a refund, you must send an email to our official billing department. Requests sent via WhatsApp or Discord will not be considered formal refund requests.
            </p>

            <div className="bg-slate-900 text-slate-300 p-6 rounded-xl mb-6 font-mono text-sm shadow-inner">
              <p className="mb-2"><span className="text-blue-400 font-bold">To:</span> contact@vapturalabs.com</p>
              <p className="mb-4"><span className="text-blue-400 font-bold">Subject Line:</span> Refund &#123;Course Name&#125; - &#123;Your Name&#125; and [Batch Details]</p>
              <p className="text-white font-bold mb-2">Required Email Body Content:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Your Full Name</li>
                <li>Enrollment Email Address</li>
                <li>Phone / WhatsApp Number</li>
                <li>Batch Details (Timing/Days)</li>
                <li>Total Course Fee Paid</li>
                <li>Reason for Refund</li>
                <li><strong>* Mandatory:</strong> Attach your original payment receipt screenshot.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Processing Time</h2>
            <p className="text-slate-600 leading-relaxed">
              Once your email is received, our team will review the remaining course duration and calculate your eligible pro-rated amount. Please allow <strong>7 to 10 business days</strong> for the review and for the credited amount to reflect in your original payment source.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refunds;