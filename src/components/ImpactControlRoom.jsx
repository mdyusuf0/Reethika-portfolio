import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { impactMetrics } from '../data/portfolioData';

const ImpactControlRoom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="impact" className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border-bright)] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Impact Control Room
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Engineering <span className="font-cursive text-[var(--color-brand-red)] font-normal">Outcomes</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {impactMetrics.map((metric, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-[var(--color-brand-red)] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-red-glow)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-silver)] mb-2 group-hover:text-[var(--color-brand-red)] transition-colors duration-300">
                {metric.value}
              </div>
              <div className="text-[var(--color-text-muted)] text-xs font-bold uppercase tracking-widest leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactControlRoom;
