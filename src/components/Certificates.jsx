import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Credential Vault
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Professional <span className="font-cursive text-[var(--color-brand-red)] font-normal">Certifications</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Verified academic credentials, internship completion records, and domain specialization certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.featured.map((cert, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 80}
              className="glass-panel p-5 rounded-2xl flex flex-col h-full group hover:border-[var(--color-silver)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-[var(--color-brand-red)] rounded-full filter blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity" />
              
              {/* Certificate Thumbnail Preview */}
              {cert.link && (
                <div 
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-black/40 border border-[var(--color-border-soft)] cursor-pointer relative"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img 
                    src={cert.link} 
                    alt={cert.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-[var(--color-brand-red)] text-white text-[11px] font-bold tracking-wider uppercase">
                      Inspect Certificate
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl mt-0.5">{cert.icon}</div>
                <div>
                  <h4 className="text-base font-bold text-white leading-snug mb-1">{cert.name}</h4>
                  <p className="text-xs font-bold text-[var(--color-silver)] uppercase tracking-wider">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mb-4 flex-grow">
                {cert.desc}
              </p>

              <div className="mt-auto pt-3 border-t border-[var(--color-border-soft)]">
                {cert.link ? (
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-bold text-white hover:text-[var(--color-brand-red)] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    VIEW CREDENTIAL
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </button>
                ) : (
                  <span className="text-xs font-bold text-[var(--color-text-muted)] flex items-center gap-2">
                    RESUME-LISTED CREDENTIAL
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-2xl overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-[var(--color-border-soft)] bg-black/60">
              <div className="pr-4">
                <h3 className="text-white font-bold text-base md:text-lg">{selectedCert.name}</h3>
                <p className="text-xs text-[var(--color-silver)] font-medium">{selectedCert.issuer}</p>
              </div>
              <button 
                className="text-white hover:text-[var(--color-brand-red)] transition-colors p-1"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 w-full bg-black/80 flex items-center justify-center p-2 overflow-auto">
              <img 
                src={selectedCert.link} 
                alt={selectedCert.name} 
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            <div className="p-3 border-t border-[var(--color-border-soft)] bg-black/60 flex justify-between items-center text-xs">
              <span className="text-[var(--color-text-muted)]">Press ESC or click outside to close</span>
              <a 
                href={selectedCert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-brand-red)] hover:underline font-bold"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
