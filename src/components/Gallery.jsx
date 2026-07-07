import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronRight, ChevronLeft } from 'lucide-react'
import { usePortfolio } from '../context/PortfolioContext'

export default function Gallery() {
  const { galleryItems } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Collect unique categories (excluding All)
  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

  // Filter items
  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (id) => {
    const idx = galleryItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIdx) => (prevIdx + 1) % galleryItems.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIdx) => (prevIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="section-subtitle">Visual Logs</span>
        <h2 className="section-title">Training Gallery</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Real snap shots captured during local mock camps, academic seminars, and active flood response.
        </p>
        <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeFilter === cat
                ? "bg-rescue-600 text-white shadow-lg shadow-rescue-600/20"
                : "bg-gray-100 dark:bg-navy-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-md group aspect-square border border-gray-100 dark:border-navy-900/60 cursor-pointer"
              onClick={() => openLightbox(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="p-2 bg-rescue-600 rounded-lg text-white w-max absolute top-4 right-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
                
                <span className="text-[10px] uppercase tracking-widest text-rescue-400 font-black mb-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                
                <h4 className="font-heading font-extrabold text-white text-base leading-tight mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h4>
                
                <p className="text-gray-300 text-xs truncate leading-normal translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm px-4 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main content slider */}
            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full relative flex flex-col rounded-2xl overflow-hidden bg-navy-950 border border-white/10 shadow-2xl"
              >
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                  <img 
                    src={galleryItems[lightboxIndex].image} 
                    alt={galleryItems[lightboxIndex].title} 
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                
                {/* Details Footer */}
                <div className="p-6 bg-navy-900 border-t border-white/10 text-left">
                  <span className="text-xs uppercase tracking-widest text-rescue-400 font-extrabold mb-1 block">
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-heading font-black text-white text-lg sm:text-xl md:text-2xl leading-snug mb-2">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {galleryItems[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>
              
              {/* Pagination text */}
              <div className="text-gray-400 text-xs sm:text-sm font-semibold">
                Image {lightboxIndex + 1} of {galleryItems.length}
              </div>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile swipe info/indicators (visible on smaller screens) */}
            <div className="absolute bottom-4 left-0 w-full flex justify-between px-6 sm:hidden text-white/50 text-xs">
              <button onClick={prevSlide} className="font-bold py-2 px-4 bg-white/5 rounded-md hover:bg-white/10">Prev</button>
              <button onClick={nextSlide} className="font-bold py-2 px-4 bg-white/5 rounded-md hover:bg-white/10">Next</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
