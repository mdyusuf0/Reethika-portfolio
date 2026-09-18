import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { technicalEvidence } from '../data/portfolioData';

const EvidenceGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="evidence" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Engineering Evidence
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Technical <span className="font-cursive text-[var(--color-brand-red)] font-normal">Architecture</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4 text-sm md:text-base">
            System diagrams, RAG vector pipelines, and full-stack workflow blueprints from production and workshop engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {technicalEvidence.map((item, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="glass-panel p-2 rounded-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--color-brand-red)] group-hover:shadow-[0_10px_30px_var(--color-brand-red-glow)]">
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-black">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                  
                  {/* Category tag badge */}
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full backdrop-blur-md bg-black/60 border border-white/10 text-[10px] text-white/80 font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-white/30 rounded-full text-white text-xs font-bold tracking-widest backdrop-blur-md">
                      VIEW DIAGRAM
                    </span>
                  </div>
                </div>
                <div className="mt-4 mb-2 text-center px-2">
                  <span className="text-[var(--color-text-primary)] font-bold text-sm tracking-wide line-clamp-1">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] glass-panel p-4 rounded-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 w-10 h-10 bg-[var(--color-brand-red)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="relative w-full h-full overflow-hidden rounded-xl bg-black">
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.alt} 
                 className="w-full h-auto object-contain max-h-[80vh] mx-auto"
               />
            </div>
            <p className="text-white font-bold tracking-wide mt-4 pb-2 text-center text-base">{selectedImage.label}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EvidenceGallery;
