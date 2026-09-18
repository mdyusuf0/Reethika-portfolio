import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { experienceList } from '../data/portfolioData';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="experience" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Professional Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Career <span className="font-cursive text-[var(--color-brand-red)] font-normal">Timeline</span>
          </h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border-bright)] transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {experienceList.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-bg-primary)] border-[3px] border-[var(--color-silver)] transform -translate-x-1/2 mt-1.5 z-10" />

                <div 
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12"
                >
                  <div className={`glass-panel p-6 rounded-2xl relative group hover:border-[var(--color-silver)] transition-all ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    
                    <span className="text-[var(--color-brand-red)] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {exp.duration} | {exp.location}
                    </span>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                      {exp.role}
                    </h4>
                    
                    <h5 className="text-[var(--color-silver)] font-medium mb-4">
                      {exp.organization}
                    </h5>

                    <ul className={`text-[var(--color-text-secondary)] text-sm space-y-2 mb-6 ${idx % 2 === 0 ? 'list-disc pl-4' : 'md:list-none md:pl-0 list-disc pl-4'}`}>
                      {exp.responsibilities.map((task, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">{task}</li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 text-[10px] font-bold rounded bg-white/5 border border-[var(--color-border-soft)] text-white uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
