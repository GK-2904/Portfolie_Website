import React from 'react'
import { CheckCircle2, Award, Calendar, ShieldCheck, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { instructorInfo } from '../data/trainingData'

export default function About() {
  const cardData = [
    { icon: Award, label: "Experience", value: "8+ Years Active" },
    { icon: Users, label: "Trainees", value: "24K+ Trained" },
    { icon: Calendar, label: "Conducted", value: "650+ Programs" }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="section-subtitle">Instructor profile</span>
        <h2 className="section-title">About The Instructor</h2>
        <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Avatar & Experience Cards */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative">
            {/* Background Blob decoration */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rescue-600 to-navy-500 opacity-20 blur-2xl -z-10 animate-pulse-slow" />
            
            {/* Avatar Image Frame */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-navy-900 shadow-2xl relative">
              <img 
                src={instructorInfo.avatar} 
                alt={instructorInfo.name} 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"; // fallback placeholder
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-white font-heading font-bold text-lg leading-tight">{instructorInfo.name}</h3>
                  <p className="text-rescue-400 text-xs font-medium uppercase tracking-wider">{instructorInfo.role}</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-rescue-600 text-white py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2 border border-rescue-500">
              <ShieldCheck className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-rescue-100 leading-none">Status</span>
                <span className="text-sm font-extrabold leading-none">Govt Accredited</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 w-full mt-10 max-w-sm">
            {cardData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-rescue-600 mb-2" />
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-medium">{item.label}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-navy-800 dark:text-white mt-0.5">{item.value}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Side: Narrative & Skills */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 dark:text-white">
            Developing Preparedness, response, and Resilience in Crisis Scenarios.
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            {instructorInfo.bio}
          </p>
          
          <div className="border-t border-gray-200 dark:border-navy-800 pt-6">
            <h4 className="font-heading font-semibold text-lg text-navy-800 dark:text-white mb-4">
              Core Training Specializations:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {instructorInfo.skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-rescue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
