import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { educationList } from '../data/portfolioData';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="education" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Education & Languages
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Academic <span className="font-cursive text-[var(--color-brand-red)] font-normal">Foundation</span>
          </h3>
        </div>

        <div className="space-y-8 mb-16">
          {educationList.map((edu, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-[var(--color-brand-red)] transition-colors"
            >
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-[var(--color-silver)] font-medium mb-1">{edu.institution}</p>
                <p className="text-[var(--color-text-muted)] text-sm">{edu.gpa}</p>
              </div>
              
              <div className="text-left md:text-right">
                <span className="inline-block px-3 py-1 bg-black/40 border border-[var(--color-border-soft)] rounded text-xs font-bold text-[var(--color-text-primary)] tracking-wider mb-2">
                  {edu.duration}
                </span>
                <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Languages block */}
        <div className="glass-panel p-8 rounded-2xl text-center" data-aos="fade-up">
           <h4 className="text-lg font-bold text-[var(--color-silver)] mb-6 uppercase tracking-widest">Languages</h4>
           <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                 <span className="text-white font-black text-xl mb-1">English</span>
                 <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">Professional</span>
              </div>
              <div className="w-px h-8 bg-[var(--color-border-bright)] hidden md:block"></div>
              <div className="flex flex-col items-center">
                 <span className="text-white font-black text-xl mb-1">Telugu</span>
                 <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">Native</span>
              </div>
              <div className="w-px h-8 bg-[var(--color-border-bright)] hidden md:block"></div>
              <div className="flex flex-col items-center">
                 <span className="text-white font-black text-xl mb-1">Hindi</span>
                 <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">Conversational</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
