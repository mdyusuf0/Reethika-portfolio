import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../data/portfolioData';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Engineering Case Studies
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            Featured <span className="font-cursive text-[var(--color-brand-red)] font-normal">Projects</span>
          </h3>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              data-aos="fade-up"
              className="glass-panel p-8 md:p-12 rounded-3xl relative group hover:border-[var(--color-brand-red)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="text-[100px] md:text-[120px] font-black leading-none text-white font-sans">{project.number}</span>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-[var(--color-brand-red)] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 shadow-[0_0_12px_var(--color-brand-red-glow)]">
                    {project.badge}
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4">{project.title}</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techTags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs font-bold px-3 py-1.5 rounded bg-white/5 border border-[var(--color-border-soft)] text-[var(--color-silver)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[var(--color-brand-red)] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_var(--color-brand-red-glow)]"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white/5 border border-[var(--color-border-bright)] text-white text-xs font-bold uppercase tracking-wider hover:border-[var(--color-brand-red)] hover:text-[var(--color-brand-red)] transition-all duration-300 flex items-center gap-2"
                      >
                        <span>GitHub</span>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
