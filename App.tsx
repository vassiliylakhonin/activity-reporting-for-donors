
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  HeartPulse, 
  Lightbulb,
  Info,
  Presentation
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import IndicatorsView from './components/IndicatorsView';
import StoriesView from './components/StoriesView';
import PsychologicalSupport from './components/PsychologicalSupport';
import Recommendations from './components/Recommendations';
import { SUMMARY_DATA } from './data';

enum Tab {
  DASHBOARD = 'dashboard',
  INDICATORS = 'indicators',
  STORIES = 'stories',
  PSYCHOLOGY = 'psychology',
  LESSONS = 'lessons'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const { generateReportPPTX } = await import('./services/pptxService');
      await generateReportPPTX();
    } catch (error) {
      console.error("PPTX Generation failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const navItems = [
    { id: Tab.DASHBOARD, label: 'Overview', icon: LayoutDashboard },
    { id: Tab.INDICATORS, label: 'Indicators', icon: BarChart3 },
    { id: Tab.STORIES, label: 'Impact Stories', icon: Users },
    { id: Tab.PSYCHOLOGY, label: 'Support Cases', icon: HeartPulse },
    { id: Tab.LESSONS, label: 'Lessons', icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Info className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">{SUMMARY_DATA.title}</h1>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Impact Report</p>
              </div>
            </div>
            
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-100 transition-colors disabled:opacity-50"
            >
              {isExporting ? <div className="w-3 h-3 border-2 border-indigo-600 border-t-transparent animate-spin rounded-full"></div> : <Presentation className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar py-1">
            <nav className="flex gap-1 p-1 bg-gray-100 rounded-xl shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === item.id
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={handleExport}
              disabled={isExporting}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isExporting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Presentation className="w-4 h-4" />
                  <span>Export to PPTX</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {activeTab === Tab.DASHBOARD && <Dashboard onViewAnalysis={() => setActiveTab(Tab.INDICATORS)} />}
        {activeTab === Tab.INDICATORS && <IndicatorsView />}
        {activeTab === Tab.STORIES && <StoriesView />}
        {activeTab === Tab.PSYCHOLOGY && <PsychologicalSupport />}
        {activeTab === Tab.LESSONS && <Recommendations />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
              {SUMMARY_DATA.title} • {SUMMARY_DATA.period}
            </p>
            <p className="text-[10px] text-gray-400 italic">
              * All sensitive and personal information has been anonymized for demo purposes.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-400 font-medium">Report by Vassiliy Lakhonin</span>
            <span className="text-xs text-gray-300 font-medium">INTERNAL IMPACT DASHBOARD</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
