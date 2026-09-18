import React from 'react';
import { footerContent, socialLinks, personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-black py-12 relative border-t border-[var(--color-border-soft)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-cursive text-3xl text-white mb-2">{personalInfo.name}</span>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
             {footerContent.taglines.map((tag, idx) => (
                <span key={idx} className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest hidden md:inline-block">
                  {tag} {idx < footerContent.taglines.length - 1 && '|'}
                </span>
             ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
           {socialLinks.linkedin && (
             <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-colors">
                LinkedIn
             </a>
           )}
           {socialLinks.github && (
             <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-colors">
                GitHub
             </a>
           )}
           <a href={socialLinks.email} className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-colors">
              Email
           </a>
           <a href={socialLinks.phone} className="text-[var(--color-silver)] hover:text-[var(--color-brand-red)] transition-colors">
              Phone
           </a>
        </div>

      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="text-[var(--color-text-muted)] text-xs">{footerContent.copyright}</p>
         <p className="text-[var(--color-text-muted)] text-xs font-bold">{footerContent.credential}</p>
      </div>
    </footer>
  );
};

export default Footer;
