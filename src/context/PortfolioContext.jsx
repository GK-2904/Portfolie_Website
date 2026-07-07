import React, { createContext, useContext, useState } from 'react';
import initialData from '../data/trainingData.json';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('sapar_portfolio_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading portfolio data from localStorage:', e);
    }
    return {
      instructorInfo: initialData.instructorInfo,
      impactStats: initialData.impactStats,
      subjects: initialData.subjects,
      activities: initialData.activities,
      districtStats: initialData.districtStats,
      galleryItems: initialData.galleryItems,
      certifications: initialData.certifications,
      testimonials: initialData.testimonials,
      contactDetails: initialData.contactDetails,
    };
  });

  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem('sapar_portfolio_data', JSON.stringify(newData));
  };

  const resetData = () => {
    const raw = {
      instructorInfo: initialData.instructorInfo,
      impactStats: initialData.impactStats,
      subjects: initialData.subjects,
      activities: initialData.activities,
      districtStats: initialData.districtStats,
      galleryItems: initialData.galleryItems,
      certifications: initialData.certifications,
      testimonials: initialData.testimonials,
      contactDetails: initialData.contactDetails,
    };
    setData(raw);
    localStorage.removeItem('sapar_portfolio_data');
  };

  return (
    <PortfolioContext.Provider value={{ ...data, rawData: data, updateData, resetData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
