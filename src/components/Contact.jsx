import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageSquareCode, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolio } from '../context/PortfolioContext'

export default function Contact() {
  const { contactDetails } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, message: '' });

    // Validate inputs
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill in Name, Mobile Number, and Message.'
      });
      return;
    }

    // Simulate API request
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Your inquiry has been successfully sent! We will contact you shortly.'
      });
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const contactCards = [
    { 
      icon: Phone, 
      title: "Call/WhatsApp", 
      value: contactDetails.phone, 
      actionHref: `tel:${contactDetails.phone.replace(/\s+/g, '')}`,
      actionLabel: "Call Now"
    },
    { 
      icon: Mail, 
      title: "Email Address", 
      value: contactDetails.email, 
      actionHref: `mailto:${contactDetails.email}`,
      actionLabel: "Send Email"
    },
    { 
      icon: MapPin, 
      title: "Academy Location", 
      value: contactDetails.address, 
      actionHref: `https://maps.google.com/?q=${encodeURIComponent(contactDetails.address)}`,
      actionLabel: "Open Maps"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="section-subtitle">Reach Us</span>
        <h2 className="section-title">Contact & Inquiry</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Get in touch to coordinate special training camps, disaster response audits, or general training admissions.
        </p>
        <div className="w-16 h-1 bg-rescue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-heading font-black text-2xl text-navy-800 dark:text-white">
            Get in Touch Directly
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Whether representing a school, college, corporate company, police unit, or local administrative council, we provide customized training structures tailored to your team's requirements.
          </p>

          <div className="space-y-4 pt-4">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="glass-card p-5 rounded-2xl flex gap-4 items-start hover:border-rescue-500/20 transition-all duration-300">
                  <div className="p-3 bg-rescue-50 dark:bg-navy-800 text-rescue-600 dark:text-rescue-400 rounded-xl shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-navy-800 dark:text-white">{card.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium">{card.value}</p>
                    <a 
                      href={card.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-rescue-600 dark:text-rescue-400 hover:text-rescue-700 dark:hover:text-rescue-300 font-extrabold flex items-center gap-1 group mt-2 pt-1 border-t border-gray-150 dark:border-navy-850"
                    >
                      <span>{card.actionLabel}</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl relative">
          <h3 className="font-heading font-black text-2xl text-navy-800 dark:text-white mb-6 flex items-center gap-2">
            <MessageSquareCode className="w-6 h-6 text-rescue-600" />
            <span>Send Admission / Event Inquiry</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Om Nagnath Sapar"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700/50 rounded-xl text-sm focus:outline-none focus:border-rescue-600 focus:ring-1 focus:ring-rescue-600 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="mobile" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mobile Number *</label>
                <input 
                  type="tel" 
                  id="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700/50 rounded-xl text-sm focus:outline-none focus:border-rescue-600 focus:ring-1 focus:ring-rescue-600 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email Address (Optional)</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700/50 rounded-xl text-sm focus:outline-none focus:border-rescue-600 focus:ring-1 focus:ring-rescue-600 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Inquiry details / Message *</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="State your training requirements, number of students/trainees, and proposed camp duration..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700/50 rounded-xl text-sm focus:outline-none focus:border-rescue-600 focus:ring-1 focus:ring-rescue-600 transition-colors resize-none"
              />
            </div>

            {/* Error/Success Feedbacks */}
            <AnimatePresence>
              {formStatus.success && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 rounded-xl flex items-start gap-2 text-xs sm:text-sm font-semibold border border-green-200/50 dark:border-green-800/30"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{formStatus.message}</span>
                </motion.div>
              )}
              {formStatus.error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 rounded-xl flex items-start gap-2 text-xs sm:text-sm font-semibold border border-red-200/50 dark:border-red-800/30"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{formStatus.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="btn-rescue text-sm py-3 px-6 flex-1 shadow-lg hover:shadow-rescue-600/30 disabled:opacity-50"
              >
                {formStatus.submitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                className="btn-outline text-sm py-3 px-6 flex-1 text-center font-bold"
              >
                <span>Call Directly Now</span>
              </a>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
