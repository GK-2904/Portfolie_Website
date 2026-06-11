import React from 'react'
import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { subjects } from '../data/trainingData'

// Helper to dynamic-map Lucide Icons
function IconRenderer({ iconName, className }) {
  // Map custom overrides
  let IconComponent;
  if (iconName === 'Fingerprint') {
    IconComponent = Icons.Anchor; // Anchor works beautifully for knots
  } else {
    IconComponent = Icons[iconName] || Icons.HelpCircle;
  }
  return <IconComponent className={className} />;
}

export default function Subjects() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-100/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">What We Train</span>
          <h2 className="section-title">Core Training Subjects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Professional modules designed to turn students, volunteers, and officers into highly skilled emergency responders.
          </p>
          <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-start hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-rescue-600/10 to-transparent rounded-bl-full group-hover:scale-110 transition-transform duration-300" />
              
              {/* Icon Container */}
              <div className="p-3 bg-rescue-50 dark:bg-navy-800/80 rounded-xl text-rescue-600 dark:text-rescue-400 mb-5 shadow-sm group-hover:bg-rescue-600 group-hover:text-white transition-all duration-300">
                <IconRenderer iconName={subject.icon} className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-navy-800 dark:text-white mb-3 group-hover:text-rescue-600 dark:group-hover:text-rescue-400 transition-colors">
                {subject.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                {subject.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
