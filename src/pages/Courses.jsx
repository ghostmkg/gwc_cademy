import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { coursesData, categories } from '../data/courses';
import { Clock, Award, Video, CheckCircle2, ArrowRight } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses = activeTab === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title="All Courses & Programs | GWC Academy"
        description="Browse our IT career programs in Full-Stack, Cyber Security, Cloud, and Programming. Live training, real projects, and internship opportunities."
      />

      {/* Catalog Header */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Explore Our Career Programs</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Choose your track in Development, Cyber Security, Cloud and more. Built by the engineers at Vaptura Labs.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeTab === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
            
            {/* 16:9 Image Area (Safe Zone rule applied) */}
            <div className="aspect-video bg-slate-800 relative">
              {/* Badge UI safely in top right */}
              <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Live Batch Open
              </div>
              <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-90" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              {/* Metadata */}
              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">
                <span className="flex items-center gap-1.5"><Award size={14} className="text-blue-600"/> {course.level}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-600"/> {course.duration}</span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-slate-900">{course.title}</h3>
              <p className="text-slate-600 text-sm mb-6 h-10 line-clamp-2">{course.heroSubtitle}</p>
              
              {/* Outcomes */}
              <div className="flex-grow mb-6">
                <ul className="space-y-2">
                  {course.cardOutcomes.map((out, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> {out}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 block mb-1 uppercase tracking-wider">Program Fee</span>
                    <span className="text-2xl font-extrabold text-slate-900">{course.price}</span>
                  </div>
                </div>
                
                <Link to={`/courses/${course.id}`} className="w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  View Program <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;