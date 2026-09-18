import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { capabilityMatrix } from '../data/portfolioData';

const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Capability Matrix
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Technical <span className="font-cursive text-[var(--color-brand-red)] font-normal">Ecosystem</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilityMatrix.categories.map((category, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="glass-panel p-8 rounded-2xl group hover:border-[var(--color-brand-red)] transition-colors duration-300"
            >
              <h4 className="text-xl font-bold text-[var(--color-silver)] mb-6 pb-4 border-b border-[var(--color-border-soft)] group-hover:text-white transition-colors">
                {category.title}
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-black/40 border border-[var(--color-border-bright)] rounded text-sm text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-brand-red)] hover:border-[var(--color-brand-red)] hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
