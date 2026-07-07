import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { usePortfolio } from '../context/PortfolioContext'

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const steps = 30;
    const stepTime = duration / steps;
    const increment = Math.ceil(end / steps);
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-heading font-black text-4xl sm:text-5xl md:text-6xl tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  const { impactStats } = usePortfolio();
  return (
    <div className="bg-navy-900 dark:bg-navy-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-navy-800">
      {/* Decorative background lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-rescue-600/10 rounded-full blur-3xl -z-1" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-navy-500/10 rounded-full blur-3xl -z-1" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-rescue-500 uppercase tracking-widest font-bold text-xs">Empowering Communities</span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">Our Training Footprint & Impact</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-800/50 backdrop-blur-sm border border-navy-700/40 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-rescue-500/30 transition-all duration-300 group"
            >
              <div className={`mb-2 font-bold ${stat.color} group-hover:scale-105 transition-transform duration-200`}>
                <Counter value={stat.count} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 font-medium text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
