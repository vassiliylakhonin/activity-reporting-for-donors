
import React from 'react';
import { PSS_CASES } from '../data';
import { Heart, MessageCircle } from 'lucide-react';

const PsychologicalSupport: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-8">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Psychosocial Support Services</h2>
          <p className="text-gray-500 max-w-xl">Snapshot of transformative outcomes for participants facing significant personal hardships.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-2xl font-black text-indigo-600">31</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Total Consultations</p>
          </div>
          <div className="h-10 w-[1px] bg-gray-200"></div>
          <div className="text-right">
            <p className="text-2xl font-black text-pink-600">19</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Women Served</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PSS_CASES.map((item) => (
          <div key={item.id} className="bg-white flex flex-col p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform">
              <Heart className="w-32 h-32 text-indigo-900" />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.id}</span>
                <h3 className="font-bold text-gray-900">{item.issue}</h3>
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              <section>
                <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">Background</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.background}</p>
              </section>

              <section>
                <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">Intervention</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.intervention}</p>
              </section>

              <section className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-50">
                <h4 className="text-[10px] font-black text-indigo-700 uppercase tracking-widest mb-1">Outcome</h4>
                <p className="text-sm text-indigo-900 font-semibold leading-relaxed">{item.outcome}</p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50 italic text-gray-400 text-sm flex gap-2">
              <MessageCircle className="w-4 h-4 shrink-0 text-gray-300" />
              <p>"{item.quote}"</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-6">
          <h3 className="text-3xl font-black">Building Mental Resilience</h3>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Data from registration logs and journals of project psychologists, social workers, and lawyers 
            demonstrated positive changes in perceptions regarding community support and access to 
            mental health resources.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 skew-x-12 translate-x-20"></div>
      </div>
    </div>
  );
};

export default PsychologicalSupport;
