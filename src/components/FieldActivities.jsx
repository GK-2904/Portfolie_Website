import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { usePortfolio } from '../context/PortfolioContext'

export default function FieldActivities() {
  const { activities } = usePortfolio();
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <span className="section-subtitle">Tactical Demos</span>
        <h2 className="section-title">Field Training Activities</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Interactive practical drills designed to simulate real-life crisis parameters.
        </p>
        <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="space-y-24 md:space-y-32">
        {activities.map((activity, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={activity.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`col-span-1 lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative group">
                  {/* Decorative glowing backplate */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-rescue-600 to-navy-700 opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-300" />
                  
                  {/* Image wrapper */}
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] border border-gray-200 dark:border-navy-800 shadow-2xl">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-sm font-semibold tracking-wider bg-rescue-600 px-3 py-1 rounded-md">
                        {activity.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`col-span-1 lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-rescue-50 dark:bg-navy-900 text-rescue-600 dark:text-rescue-400 font-bold text-xs uppercase tracking-widest rounded-md">
                    Module {index + 1}
                  </div>
                  
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-navy-800 dark:text-white">
                    {activity.title}
                  </h3>
                  
                  <h4 className="font-sans font-bold text-rescue-600 dark:text-rescue-400 text-base sm:text-lg">
                    {activity.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-navy-700 dark:text-gray-300 font-semibold text-xs sm:text-sm">
                    <CheckCircle className="w-5 h-5 text-rescue-600" />
                    <span>Certified Training Standards Program</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
