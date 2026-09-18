import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const HIRE_ME_MESSAGE = `Hello ${personalInfo.firstName}, I came across your portfolio and would like to connect with you regarding a full-stack developer opportunity.`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Impact', 'Projects', 'Experience', 'Process', 'Contact'];

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleHireMe = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(HIRE_ME_MESSAGE);
      showToast('✅ Message copied! Opening LinkedIn…');
      setTimeout(() => {
        window.open(socialLinks.linkedin, '_blank', 'noopener,noreferrer');
      }, 700);
    } catch {
      setFallbackVisible(true);
    }
  };

  return (
    <>
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3 rounded-full bg-[var(--color-brand-red)] text-white text-sm font-bold shadow-[0_8px_30px_var(--color-brand-red-glow)] transition-all duration-500 pointer-events-none whitespace-nowrap ${
          toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {toastMessage}
      </div>

      {fallbackVisible && (
        <div
          className="fixed inset-0 z-[99998] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFallbackVisible(false)}
        >
          <div
            className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-bright)] rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-xl font-black mb-3">Copy this message to LinkedIn</h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-5 font-medium">
              Your browser blocked auto-copy. Please copy the message below and paste it on LinkedIn.
            </p>
            <div className="bg-black border border-[var(--color-border-soft)] rounded-xl p-4 mb-6 font-mono text-sm text-[var(--color-silver)] leading-relaxed select-all">
              {HIRE_ME_MESSAGE}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setFallbackVisible(false)}
                className="flex-1 text-center px-5 py-3 rounded-full bg-[var(--color-brand-red)] text-white font-bold hover:bg-white hover:text-[var(--color-brand-red)] transition-all"
              >
                Open LinkedIn
              </a>
              <button
                onClick={() => setFallbackVisible(false)}
                className="px-5 py-3 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 border border-[var(--color-border-soft)] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isOpen
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-black/10'
            : isScrolled
              ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/10 shadow-sm'
              : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          <div className="flex items-center">
            <a 
              href="#" 
              className={`text-black text-2xl font-black tracking-tight whitespace-nowrap font-cursive transition-all duration-500 ${
                isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              {personalInfo.name}<span className="text-[var(--color-brand-red)] text-3xl">.</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                className={`${['Impact', 'Projects'].includes(link) ? 'text-[var(--color-brand-red)]' : 'text-black'} hover:text-[var(--color-brand-red)] font-bold text-sm tracking-widest uppercase relative group transition-colors duration-300`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-brand-red)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleHireMe}
              className="px-6 py-2.5 rounded-full bg-[var(--color-brand-red)] text-white font-bold hover:bg-black hover:text-white hover:shadow-[0_0_15px_var(--color-brand-red-glow)] transition-all duration-300 shadow-md cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none p-2"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 py-4 opacity-100 bg-white shadow-2xl border-b border-black/10' : 'max-h-0 opacity-0 bg-transparent'
          }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`${['Impact', 'Projects'].includes(link) ? 'text-[var(--color-brand-red)]' : 'text-black'} hover:text-[var(--color-brand-red)] font-bold text-sm tracking-widest uppercase border-b border-black/10 pb-2 transition-colors`}
              >
                {link}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <button
                onClick={(e) => { setIsOpen(false); handleHireMe(e); }}
                className="inline-block px-6 py-3 rounded-full bg-[var(--color-brand-red)] text-white font-black hover:bg-black transition-colors w-full text-center shadow-lg cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
