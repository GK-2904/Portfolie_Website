import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ImpactStats from './components/ImpactStats'
import Subjects from './components/Subjects'
import FieldActivities from './components/FieldActivities'
import Dashboard from './components/Dashboard'
import Gallery from './components/Gallery'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { PortfolioProvider } from './context/PortfolioContext'
import Customizer from './components/Customizer'

function MainLandingPage() {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="impact">
        <ImpactStats />
      </div>
      <div id="subjects">
        <Subjects />
      </div>
      <div id="activities">
        <FieldActivities />
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preferences
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <PortfolioProvider>
        <div className="min-h-screen font-sans bg-gray-50 text-gray-900 dark:bg-navy-950 dark:text-gray-100 transition-colors duration-300 bg-mesh-pattern bg-no-repeat bg-cover">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <main className="relative pt-16">
            <Routes>
              <Route path="/" element={<MainLandingPage />} />
            </Routes>
          </main>
          
          <Footer />
          <Customizer />
        </div>
      </PortfolioProvider>
    </Router>
  )
}

export default App
