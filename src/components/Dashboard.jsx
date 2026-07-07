import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Users, GraduationCap, MapPin, CheckCircle } from 'lucide-react'
import { usePortfolio } from '../context/PortfolioContext'

export default function Dashboard() {
  const { districtStats } = usePortfolio();
  const [activeDistrict, setActiveDistrict] = useState(null);

  // Compute metrics
  const totalTrainings = districtStats.reduce((sum, d) => sum + d.trainings, 0);
  const totalBoys = districtStats.reduce((sum, d) => sum + d.boys, 0);
  const totalGirls = districtStats.reduce((sum, d) => sum + d.girls, 0);
  const totalTrainees = totalBoys + totalGirls;

  const summaryCards = [
    { label: "Total Trainees", value: totalTrainees, sub: "Boys & Girls combined", icon: Users, color: "text-rescue-600 dark:text-rescue-400" },
    { label: "Trainings Conducted", value: totalTrainings, sub: "Across all districts", icon: GraduationCap, color: "text-navy-500" },
    { label: "Total Boys", value: totalBoys, sub: "Male participants", icon: CheckCircle, color: "text-blue-500" },
    { label: "Total Girls", value: totalGirls, sub: "Female participants", icon: CheckCircle, color: "text-pink-500" }
  ];

  // Custom tooltips for Recharts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 p-4 rounded-xl shadow-xl">
          <h4 className="font-heading font-bold text-navy-900 dark:text-white mb-2 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-rescue-600" />
            <span>{label}</span>
          </h4>
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-gray-600 dark:text-gray-300">
              Trainings: <span className="font-bold text-navy-800 dark:text-white">{payload[0].payload.trainings}</span>
            </p>
            <p className="text-blue-600 dark:text-blue-400">
              Boys: <span className="font-bold">{payload[0].payload.boys}</span>
            </p>
            <p className="text-pink-600 dark:text-pink-400">
              Girls: <span className="font-bold">{payload[0].payload.girls}</span>
            </p>
            <p className="text-rescue-600 dark:text-rescue-400 font-semibold border-t border-gray-100 dark:border-navy-800 pt-1.5 mt-1.5">
              Total: <span className="font-bold">{payload[0].payload.totalTrainees}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-100/30 dark:bg-navy-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Data & Metrics</span>
          <h2 className="section-title">District Training Statistics</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Quantifiable rescue impact showcasing youth involvement, gender ratios, and geographic distributions.
          </p>
          <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {summaryCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl flex items-center justify-between hover:shadow-xl transition-all duration-300">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{card.label}</span>
                  <div className={`text-2xl sm:text-3xl font-black ${card.color}`}>
                    {card.value.toLocaleString()}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">{card.sub}</span>
                </div>
                <div className="p-3 bg-gray-100 dark:bg-navy-800 rounded-xl text-gray-700 dark:text-gray-300">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            )
          })}
        </div>

        {/* 2. Grid Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Chart Wrapper */}
          <div className="lg:col-span-7 glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-800 dark:text-white mb-2">
                Trainees Demographics
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Comparative visual distribution between Boys and Girls trainees across target districts.
              </p>
            </div>

            <div className="w-full h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={districtStats}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" className="dark:opacity-10" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: '#64748B', fontSize: 11 }} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(239, 68, 68, 0.05)' }} />
                  <Legend 
                    verticalAlign="top" 
                    height={36} 
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}
                  />
                  
                  <Bar dataKey="boys" name="Boys Trained" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                    {districtStats.map((entry, index) => (
                      <Cell 
                        key={`cell-boys-${index}`} 
                        fill={activeDistrict === index ? '#2563eb' : '#3b82f6'} 
                        className="transition-colors duration-200"
                      />
                    ))}
                  </Bar>
                  
                  <Bar dataKey="girls" name="Girls Trained" fill="#ec4899" radius={[4, 4, 0, 0]}>
                    {districtStats.map((entry, index) => (
                      <Cell 
                        key={`cell-girls-${index}`} 
                        fill={activeDistrict === index ? '#db2777' : '#ec4899'} 
                        className="transition-colors duration-200"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table Wrapper */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-800 dark:text-white mb-2">
                Detailed Training Ledger
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Hover over the chart bars or table rows to inspect local stats.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-navy-800 text-gray-400 dark:text-gray-500 font-bold">
                    <th className="pb-3 font-semibold">District</th>
                    <th className="pb-3 text-center font-semibold">Trainings</th>
                    <th className="pb-3 text-right font-semibold">Boys</th>
                    <th className="pb-3 text-right font-semibold">Girls</th>
                    <th className="pb-3 text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {districtStats.map((stat, idx) => (
                    <tr 
                      key={stat.name}
                      onMouseEnter={() => setActiveDistrict(idx)}
                      onMouseLeave={() => setActiveDistrict(null)}
                      className={`border-b border-gray-100 dark:border-navy-800/50 hover:bg-gray-50 dark:hover:bg-navy-800/40 transition-colors duration-200 cursor-pointer ${
                        activeDistrict === idx ? "bg-gray-100/50 dark:bg-navy-800/50" : ""
                      }`}
                    >
                      <td className="py-3.5 font-bold text-navy-800 dark:text-white flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stat.girls > 0 ? "bg-pink-500" : "bg-blue-500"}`} />
                        {stat.name}
                      </td>
                      <td className="py-3.5 text-center font-semibold text-gray-600 dark:text-gray-300">{stat.trainings}</td>
                      <td className="py-3.5 text-right font-medium text-blue-600 dark:text-blue-400">{stat.boys}</td>
                      <td className="py-3.5 text-right font-medium text-pink-600 dark:text-pink-400">{stat.girls}</td>
                      <td className="py-3.5 text-right font-black text-navy-900 dark:text-gray-100">{stat.totalTrainees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
