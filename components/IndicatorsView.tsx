
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { INDICATORS } from '../data';
import { AlertCircle } from 'lucide-react';
import { calculatePerformancePercent, getIndicatorTarget } from '../utils/indicatorMetrics';

const IndicatorsView: React.FC = () => {
  const chartData = INDICATORS.map(ind => ({
    name: ind.name,
    Target: getIndicatorTarget(ind.target, ind.achieved),
    Achieved: ind.achieved,
    unit: ind.unit
  }));

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Performance Indicators</h2>
          <p className="text-gray-500">Target vs. Achieved Results (March - Nov 2024)</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                angle={-15} 
                textAnchor="end" 
                interval={0} 
                tick={{ fontSize: 11, fontWeight: 500 }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                cursor={{ fill: '#f8fafc' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="Target" fill="#cbd5e1" radius={[4, 4, 0, 0]} name="Baseline Target" barSize={40} />
              <Bar dataKey="Achieved" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Actual Achieved" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INDICATORS.map((indicator) => {
          const performance = calculatePerformancePercent(indicator.achieved, indicator.target);
          return (
            <div key={indicator.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID: {indicator.id}</span>
                <div className="flex gap-2">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">Goal: {indicator.target}</span>
                  <span className="text-xs font-bold bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">Hit: {indicator.achieved}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{indicator.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {indicator.analysis}
              </p>
              <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                Performance: {performance === null ? 'N/A' : `${performance}%`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndicatorsView;
