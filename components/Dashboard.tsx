
import React, { useState } from 'react';
import { SUMMARY_DATA, LOCATIONS, MILESTONES } from '../data';
import { Target, Users, MapPin, Calendar, CheckCircle2, TrendingUp, Info, X, Clock, ArrowRight } from 'lucide-react';

interface DashboardProps {
  onViewAnalysis?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewAnalysis }) => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
              Project Summary
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Building Resilience in {SUMMARY_DATA.location}
            </h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
              {SUMMARY_DATA.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{SUMMARY_DATA.period}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{SUMMARY_DATA.location}</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 w-full md:w-72">
            <p className="text-sm font-medium text-indigo-200 mb-4 flex items-center gap-2 uppercase tracking-wide">
              <Target className="w-4 h-4" /> Reach Target
            </p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black">138%</span>
              <span className="text-indigo-200 font-medium pb-1">Efficiency</span>
            </div>
            <div className="mt-4 w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div className="bg-white h-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Users className="w-6 h-6 text-blue-600" />}
          label="Total Reach"
          value="481"
          sub="Session Participants"
          trend="+220%"
          progress={100}
        />
        <StatCard 
          icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
          label="Graduates"
          value="69"
          sub="Regular Beneficiaries"
          trend="138%"
          progress={100}
        />
        <StatCard 
          icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
          label="Female Inclusion"
          value="78.8%"
          sub="Participation Rate"
          trend="High"
          progress={78.8}
        />
        <StatCard 
          icon={<MapPin className="w-6 h-6 text-orange-600" />}
          label="Locations"
          value={`${LOCATIONS.length}`}
          sub="Active Hubs"
          trend="Active"
          progress={100}
          onClick={() => setShowLocations(true)}
          isInteractive
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Clock className="text-indigo-600 w-5 h-5" /> 
            Implementation Journey
          </h3>
          <div className="relative pl-4">
            <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-gray-100"></div>
            <div className="space-y-8">
              {MILESTONES.map((milestone, idx) => (
                <div key={idx} className="relative flex gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-indigo-50 shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:border-indigo-100 group-hover:scale-110 transition-all">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded-md">
                      {milestone.date}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{milestone.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-indigo-900 p-8 rounded-3xl shadow-sm border border-indigo-800 text-white flex flex-col">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Info className="text-indigo-300 w-5 h-5" /> 
            Key Highlights
          </h3>
          <div className="space-y-6 flex-grow">
             {SUMMARY_DATA.keyHighlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-indigo-300 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-indigo-50 font-medium leading-relaxed border-b border-indigo-800/50 pb-4 w-full">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-indigo-800">
             <button 
                onClick={onViewAnalysis}
                className="w-full flex items-center justify-between text-indigo-200 text-sm font-medium hover:text-white transition-colors group cursor-pointer"
             >
                <span>View Full Analysis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>

      {/* Locations Modal */}
      {showLocations && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-indigo-50/50">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 p-2 rounded-xl">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Project Hubs</h3>
                  <p className="text-sm text-indigo-600 font-medium">6 Active Locations</p>
                </div>
              </div>
              <button 
                onClick={() => setShowLocations(false)}
                className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600 shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 space-y-3">
              {LOCATIONS.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-400 border border-gray-100 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
                    0{idx + 1}
                  </div>
                  <span className="text-gray-700 font-semibold">{loc}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
              <button 
                onClick={() => setShowLocations(false)}
                className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Close Locations View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  sub: string; 
  trend: string;
  progress: number;
  onClick?: () => void;
  isInteractive?: boolean;
}> = ({
  icon, label, value, sub, trend, progress, onClick, isInteractive
}) => (
  <div 
    onClick={onClick}
    className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group relative overflow-hidden ${isInteractive ? 'cursor-pointer hover:border-indigo-100 ring-indigo-600/0 hover:ring-4 ring-offset-2 transition-all duration-300' : ''}`}
  >
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div className={`p-3 bg-gray-50 rounded-2xl transition-transform ${isInteractive ? 'group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-12' : 'group-hover:scale-110'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${isInteractive ? 'bg-indigo-100 text-indigo-700' : 'text-indigo-600 bg-indigo-50'}`}>
        {trend}
      </span>
    </div>
    <div className="space-y-1 relative z-10">
      <h4 className="text-gray-500 text-sm font-medium">{label}</h4>
      <p className="text-3xl font-black text-gray-900">{value}</p>
      <p className="text-gray-400 text-xs font-medium">{sub}</p>
    </div>
    
    {/* Progress Bar Background */}
    <div className="absolute bottom-0 left-0 h-1 bg-indigo-500/10 w-full">
       <div className="h-full bg-indigo-500" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export default Dashboard;
