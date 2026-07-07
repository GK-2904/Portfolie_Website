import React from 'react'
import { Award, Landmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../context/PortfolioContext'

export default function Certifications() {
  const { certifications } = usePortfolio();
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-100/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Instructor Certifications</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Official rescue accreditations and safety instruction authorizations verified by national and state panels.
          </p>
          <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col justify-between overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-navy-850 relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Float Icon */}
                <div className="absolute top-4 left-4 p-2.5 bg-rescue-600 rounded-lg text-white shadow-md">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* Text content details */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  {/* Organization name badge */}
                  <div className="flex items-center gap-1.5 text-xs text-rescue-600 dark:text-rescue-400 font-bold uppercase tracking-wider">
                    <Landmark className="w-4 h-4 shrink-0" />
                    <span className="truncate">{cert.organization}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-navy-800 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-gray-100 dark:border-navy-850 pt-4 mt-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
