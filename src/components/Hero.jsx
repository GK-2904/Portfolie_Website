import React from 'react'
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { instructorInfo } from '../data/trainingData'

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1504150559414-a479378078f4?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/50" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Action Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-start justify-center z-10 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rescue-600/20 border border-rescue-500/30 text-rescue-400 font-semibold text-xs tracking-wider uppercase mb-6"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Disaster Management & Rescue Academy</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-none mb-4"
        >
          {instructorInfo.name}
        </motion.h1>

        {/* Role & Academy */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
        >
          <span className="text-rescue-500 font-bold uppercase tracking-widest text-lg sm:text-2xl">{instructorInfo.role}</span>
          <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-rescue-500" />
          <span className="text-gray-300 font-medium">{instructorInfo.academy}</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light"
        >
          "{instructorInfo.tagline}"
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-rescue text-base py-3.5 px-8 group font-semibold shadow-lg hover:shadow-rescue-600/40"
          >
            <span>Contact Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScroll('#subjects')}
            className="btn-navy bg-navy-800 hover:bg-navy-700/90 text-white font-semibold text-base py-3.5 px-8 border border-navy-700 hover:border-navy-600"
          >
            <Calendar className="w-5 h-5" />
            <span>View Trainings</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Skew */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 select-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 fill-gray-50 dark:fill-navy-950 transition-colors duration-300">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.5,123.6,1064.66,113.6,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  )
}
