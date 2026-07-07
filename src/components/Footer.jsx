import React from 'react'
import { ShieldAlert, Facebook, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react'
import { contactDetails, subjects, instructorInfo } from '../data/trainingData'

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
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

  // Get first 5 subjects for quick links
  const quickSubjects = subjects.slice(0, 5);

  return (
    <footer className="bg-navy-950 text-gray-400 border-t border-navy-900 pt-16 pb-8 relative overflow-hidden select-none">
      {/* Wave bottom decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rescue-600 via-navy-800 to-rescue-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-rescue-600 rounded-lg text-white shadow-md">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-tight text-lg text-white leading-none">
                Om Naganath Sapar
              </span>
              <span className="font-sans text-[9px] tracking-widest text-rescue-500 font-bold uppercase mt-0.5">
                Rescue Trainer
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
            Empowering youths, disaster units, civil response volunteers, and student cadres with standard incident control, survival readiness, and crisis evacuation training.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-2">
            <a href={contactDetails.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-900 hover:bg-rescue-600 hover:text-white rounded-lg transition-colors" aria-label="Facebook Link">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={contactDetails.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-900 hover:bg-rescue-600 hover:text-white rounded-lg transition-colors" aria-label="Twitter Link">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={contactDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-900 hover:bg-rescue-600 hover:text-white rounded-lg transition-colors" aria-label="LinkedIn Link">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={contactDetails.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-900 hover:bg-rescue-600 hover:text-white rounded-lg transition-colors" aria-label="YouTube Link">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Sitemap Navigation */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-rescue-400 transition-colors">Bio Profile</a></li>
            <li><a href="#subjects" onClick={(e) => handleNavClick(e, '#subjects')} className="hover:text-rescue-400 transition-colors">Syllabus Subjects</a></li>
            <li><a href="#activities" onClick={(e) => handleNavClick(e, '#activities')} className="hover:text-rescue-400 transition-colors">Field Demos</a></li>
            <li><a href="#dashboard" onClick={(e) => handleNavClick(e, '#dashboard')} className="hover:text-rescue-400 transition-colors">Impact & Stats</a></li>
            <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-rescue-400 transition-colors">Media Logs</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-rescue-400 transition-colors font-bold text-rescue-500">Admissions</a></li>
          </ul>
        </div>

        {/* Column 3: Subjects Quick Links */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider">Training Programs</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
            {quickSubjects.map((subject) => (
              <li key={subject.id}>
                <a href="#subjects" onClick={(e) => handleNavClick(e, '#subjects')} className="hover:text-rescue-400 transition-colors truncate block max-w-[220px]">
                  {subject.title} Training
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Address Info */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider">Contact Info</h4>
          <div className="space-y-3 text-xs sm:text-sm text-gray-500">
            <p className="leading-relaxed">
              {contactDetails.address}
            </p>
            <div className="space-y-1 font-semibold">
              <p className="text-white">Tel: <a href={`tel:${contactDetails.phone}`} className="hover:text-rescue-400">{contactDetails.phone}</a></p>
              <p className="text-white">Mail: <a href={`mailto:${contactDetails.email}`} className="hover:text-rescue-400">{contactDetails.email}</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Border Footer Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-navy-900 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
        <p className="text-gray-650">
          © {new Date().getFullYear()} {instructorInfo.name}. All rights reserved.
        </p>
        
        {/* Scroll back up anchor */}
        <a 
          href="#" 
          onClick={handleScrollTop}
          className="p-2.5 bg-navy-900 hover:bg-rescue-600 text-white rounded-lg transition-colors border border-navy-850 hover:border-transparent flex items-center gap-1 group shadow-md"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  )
}
