import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const engineeringStages = [
  {
    title: 'Architecture & Modeling',
    description: 'System Design, MongoDB Schemas & Requirements',
    metrics: 'Scalable Data Structures & Entity Relationships',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
  },
  {
    title: 'UI/UX Prototyping',
    description: 'Figma Wireframing & User-Centered Design',
    metrics: 'Intuitive Journeys & Component Tokens',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  {
    title: 'Frontend Engineering',
    description: 'Modular React.js, State & Responsive Design',
    metrics: 'Cross-Device Fluidity & Accessibility',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Backend & RBAC Integration',
    description: 'Node.js, Express REST APIs & Firebase Auth',
    metrics: 'Secure Role-Based Access & Clean Endpoints',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    title: 'Performance & Deployment',
    description: 'Load Time Optimization & Cloud Hosting',
    metrics: '18% Load Speedup & Automated Vercel CI/CD',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
];

const GrowthFunnel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[var(--color-brand-red)] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            From Concept To Production
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
            The <span className="font-cursive text-[var(--color-brand-red)] font-normal">Engineering</span> Funnel
          </h3>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-border-bright)] via-[var(--color-brand-red)] to-[var(--color-border-bright)] transform -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {engineeringStages.map((stage, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-red)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_15px_var(--color-brand-red-glow)] z-20 hidden md:block" />

                {/* Content Card */}
                <div 
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  className={`w-full md:w-[45%] glass-panel p-6 rounded-2xl relative group hover:border-[var(--color-brand-red)] transition-colors duration-300 ${
                    idx === engineeringStages.length - 1 ? 'border-[var(--color-brand-red)] shadow-[0_0_20px_var(--color-brand-red-glow)]' : ''
                  }`}
                  style={{
                    width: '100%',
                    maxWidth: `${100 - (idx * 5)}%`, // Funnel narrowing effect
                    margin: '0 auto'
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${idx === engineeringStages.length - 1 ? 'bg-[var(--color-brand-red)] text-white' : 'bg-black/50 text-[var(--color-brand-red)]'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stage.icon} />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[var(--color-text-primary)]">{stage.title}</h4>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                    {stage.description}
                  </p>

                  <div className="pt-4 border-t border-[var(--color-border-soft)]">
                    <span className="text-[var(--color-silver)] text-xs font-bold tracking-widest uppercase">
                      Output: <span className="text-[var(--color-text-primary)]">{stage.metrics}</span>
                    </span>
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

export default GrowthFunnel;
