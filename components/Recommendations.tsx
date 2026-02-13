
import React from 'react';
import { LESSONS } from '../data';
import { Lightbulb, CheckCircle2, ArrowUpRight, GraduationCap, Briefcase, Globe, Rocket } from 'lucide-react';

const Recommendations: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-black text-gray-900">Future Sustainability</h2>
        <p className="text-gray-500">Key lessons from implementation and strategic recommendations to amplify long-term impact.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {LESSONS.map((lesson, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-2xl ${idx === 0 ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                {idx === 0 ? <Lightbulb className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
              </div>
              <h3 className="text-2xl font-black text-gray-900">{lesson.category}</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {lesson.points.map((point, pIdx) => (
                <div key={pIdx} className="group p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all flex gap-4">
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2 ${idx === 0 ? 'border-amber-200 text-amber-500' : 'border-blue-200 text-blue-500'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <IconFeature 
          icon={<GraduationCap className="w-6 h-6" />}
          title="Portfolio Creation"
          desc="Assist participants in documenting progress with professional certifications."
          color="bg-purple-50 text-purple-600"
        />
        <IconFeature 
          icon={<Briefcase className="w-6 h-6" />}
          title="Job Partnerships"
          desc="Collaborate with local businesses for structured internships and placements."
          color="bg-emerald-50 text-emerald-600"
        />
        <IconFeature 
          icon={<Globe className="w-6 h-6" />}
          title="Regional Exchange"
          desc="Continue cross-regional interaction for best-practice sharing."
          color="bg-indigo-50 text-indigo-600"
        />
      </div>

      {/* Expanded Strategic Roadmap Section */}
      <div className="bg-gray-900 text-white rounded-[2.5rem] p-10 space-y-10 shadow-2xl shadow-gray-200">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 border-b border-gray-800 pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/30 flex w-fit items-center gap-2">
              <Rocket className="w-3 h-3" />
              Next Phase Proposal
            </span>
            <h3 className="text-3xl font-black">EYI 2.0: Economic Resilience</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Building on the <span className="text-white font-bold">138% reach efficiency</span> and strong psychosocial outcomes of the pilot, the next phase will transition from capacity building to economic application.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-3xl border border-gray-700/50 w-full md:w-auto min-w-[300px]">
            <h4 className="font-bold text-gray-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Strategic Goals (2025)
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> 
                <span>20 Micro-grants for youth startups</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> 
                <span>Establish Alumni Mentorship Network</span>
              </li>
               <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> 
                <span>Achieve 60% Job Placement Rate</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
             <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white mb-4 shadow-lg shadow-indigo-900/50">1</div>
             <h4 className="font-bold text-xl mb-2 text-indigo-100">Incubation</h4>
             <p className="text-sm text-gray-400 leading-relaxed">Advanced vocational training paired with psychological resilience coaching specifically tailored for high-stress work environments.</p>
           </div>
           <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
             <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white mb-4 shadow-lg shadow-purple-900/50">2</div>
             <h4 className="font-bold text-xl mb-2 text-purple-100">Acceleration</h4>
             <p className="text-sm text-gray-400 leading-relaxed">Launch of a "Resilience Fund" providing seed capital ($500-$2000) to top 5 community impact projects led by graduates.</p>
           </div>
           <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
             <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white mb-4 shadow-lg shadow-emerald-900/50">3</div>
             <h4 className="font-bold text-xl mb-2 text-emerald-100">Sustainability</h4>
             <p className="text-sm text-gray-400 leading-relaxed">Establishment of a formally registered youth-led NGO chapter to take over operational management of the community hubs.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const IconFeature: React.FC<{ icon: React.ReactNode; title: string; desc: string; color: string }> = ({
  icon, title, desc, color
}) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:translate-y-[-4px] transition-transform">
    <div className={`p-4 rounded-2xl w-fit mb-6 ${color}`}>
      {icon}
    </div>
    <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Recommendations;
