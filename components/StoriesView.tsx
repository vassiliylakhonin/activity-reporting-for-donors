
import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { Quote, Briefcase, GraduationCap, Award, CheckCircle, Filter, X } from 'lucide-react';

const StoriesView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique tags for filter pills
  const allTags = ['All', ...Array.from(new Set(CASE_STUDIES.flatMap(s => s.tags)))];

  const filteredStudies = activeFilter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.tags.includes(activeFilter));

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
        <div className="text-left space-y-2">
          <h2 className="text-3xl font-black text-gray-900">Transformation Stories</h2>
          <p className="text-gray-500">Qualitative impact journeys.</p>
        </div>
        
        {/* Filter Bar */}
        <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-2">
           {allTags.map(tag => (
             <button
               key={tag}
               onClick={() => setActiveFilter(tag)}
               className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                 activeFilter === tag 
                   ? 'bg-indigo-600 text-white shadow-md' 
                   : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
               }`}
             >
               {tag}
             </button>
           ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {filteredStudies.map((study, idx) => (
          <div key={study.id} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both" style={{ animationDelay: `${idx * 150}ms` }}>
            {/* Header Section */}
            <div className="bg-gray-50/50 px-8 lg:px-12 py-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-[1.25rem] flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-100 group-hover:rotate-3 transition-transform">
                  {study.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-black text-gray-900">{study.name}</h3>
                    <span className="bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                      {study.id}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.15em]">{study.age} Years Old • {study.gender}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex gap-2 mr-4">
                  {study.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-bold text-indigo-400 border border-indigo-100 px-2 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-green-600 font-black bg-green-50 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest border border-green-100 shadow-sm">
                  <CheckCircle className="w-4 h-4" />
                  Impact Verified
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 lg:p-12 space-y-12">
              {/* Prominent Quote */}
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 w-16 h-16 text-indigo-50/80 -z-0" />
                <p className="relative z-10 text-2xl lg:text-3xl font-medium text-gray-800 italic leading-relaxed pl-8 border-l-4 border-indigo-500 py-2">
                  "{study.quote}"
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Context & Results */}
                <div className="space-y-10">
                  <section className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Contextual Background</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">{study.background}</p>
                  </section>

                  <section className="bg-indigo-900 p-8 rounded-[2rem] text-white shadow-lg relative overflow-hidden group/card">
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md">
                          <Briefcase className="text-indigo-300 w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-indigo-200">The Transformation</h4>
                      </div>
                      <p className="text-indigo-50 font-medium leading-relaxed text-lg italic">
                        {study.transformation}
                      </p>
                    </div>
                    {/* Abstract design decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover/card:scale-150 transition-transform duration-700"></div>
                  </section>
                </div>

                {/* Right Column: Steps & Achievements */}
                <div className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-xl">
                        <GraduationCap className="text-indigo-600 w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-gray-900">Project Support</h4>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                      {study.intervention.map((item, i) => (
                        <li key={i} className="flex gap-4 text-gray-700 items-start">
                          <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5 text-indigo-600 font-bold text-[10px] border border-gray-100">
                            {i + 1}
                          </div>
                          <span className="font-semibold text-sm leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 px-2">
                      <Award className="text-indigo-600 w-5 h-5" />
                      <h4 className="text-sm font-black uppercase tracking-widest text-gray-900">Milestones</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {study.achievements.map((item, i) => (
                        <span key={i} className="bg-white text-gray-700 px-4 py-2.5 rounded-2xl text-xs font-bold border border-gray-100 shadow-sm flex items-center gap-2 hover:border-indigo-200 hover:text-indigo-700 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredStudies.length === 0 && (
           <div className="text-center py-20 text-gray-400">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No stories found matching this filter.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default StoriesView;
