import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutContent } from '../data/portfolioData';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-24 bg-[var(--color-bg-deep)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <h2 
          data-aos="fade-up"
          className="text-[var(--color-brand-red)] font-cursive text-5xl md:text-6xl mb-6 tracking-wide drop-shadow-md"
        >
          {aboutContent.heading}
        </h2>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-[var(--color-text-secondary)] text-lg md:text-2xl leading-relaxed mb-10 font-medium max-w-3xl mx-auto drop-shadow-sm"
          dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
        />

        <div 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8"
        >
          {aboutContent.techStack.map((tech, idx) => (
            <span 
              key={idx}
              className="px-5 py-2.5 rounded-full border border-[var(--color-border-bright)] bg-white/5 backdrop-blur-md text-[var(--color-silver)] font-bold text-xs md:text-sm shadow-lg hover:border-[var(--color-brand-red)] hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
