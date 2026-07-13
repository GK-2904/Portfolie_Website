import React, { createContext, useContext, useState } from 'react';
import initialData from '../data/trainingData.json';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    const isEditMode = typeof window !== 'undefined' && window.location.search.includes('edit=true');
    if (isEditMode) {
      try {
        const saved = localStorage.getItem('sapar_portfolio_data');
        if (saved) {
          const parsed = JSON.parse(saved);
          // If the JSON file has a newer timestamp than the one saved in local storage,
          // it means the owner deployed an update. Use the fresh JSON data.
          if (!parsed.updatedAt || (initialData.updatedAt && initialData.updatedAt > parsed.updatedAt)) {
            localStorage.setItem('sapar_portfolio_data', JSON.stringify(initialData));
            return initialData;
          }
          return parsed;
        }
      } catch (e) {
        console.error('Error loading portfolio data from localStorage:', e);
      }
    }
    return initialData;
  });

  const updateData = (newData) => {
    const dataWithTimestamp = {
      ...newData,
      updatedAt: Date.now()
    };
    setData(dataWithTimestamp);
    localStorage.setItem('sapar_portfolio_data', JSON.stringify(dataWithTimestamp));
  };

  const resetData = () => {
    setData(initialData);
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
