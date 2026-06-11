import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/trainingData'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 6000); // rotate every 6s
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <span className="section-subtitle">Reviews</span>
        <h2 className="section-title">Testimonials & Feedback</h2>
        <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative glass-card p-8 sm:p-12 md:p-16 rounded-3xl shadow-xl flex flex-col items-center">
        {/* Quote watermark icon */}
        <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 text-gray-200/50 dark:text-navy-800/40 select-none pointer-events-none" />

        {/* Slidewrapper */}
        <div className="w-full relative min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-6"
            >
              {/* Feedback paragraph */}
              <p className="text-gray-650 dark:text-gray-200 text-base sm:text-lg md:text-xl font-medium italic leading-relaxed max-w-3xl mx-auto">
                "{testimonials[activeIndex].feedback}"
              </p>

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Author name and role */}
              <div className="space-y-1">
                <h4 className="font-heading font-black text-lg text-navy-800 dark:text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-rescue-600 dark:text-rescue-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Slider Controls */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-gray-750 dark:text-gray-250 rounded-full transition-colors border border-transparent dark:border-navy-700 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Bullet dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? "w-8 bg-rescue-600" 
                    : "w-2.5 bg-gray-300 dark:bg-navy-750"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-gray-750 dark:text-gray-250 rounded-full transition-colors border border-transparent dark:border-navy-700 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
