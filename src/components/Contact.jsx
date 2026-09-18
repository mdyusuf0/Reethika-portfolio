import React, { useRef, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Reethika,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    try {
      await navigator.clipboard.writeText(`Hi Reethika,\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setSubmitStatus('Message copied! Opening your email client...');
      setTimeout(() => {
        setIsSubmitting(false);
        form.current.reset();
        window.location.href = mailtoUrl;
      }, 1000);
    } catch {
      setIsSubmitting(false);
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-deep)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Info */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-sm font-bold text-[var(--color-brand-red)] tracking-[0.2em] uppercase mb-4">
            Connect
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tight mb-6">
            Let's <span className="font-cursive text-[var(--color-brand-red)] font-normal">Collaborate</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-md leading-relaxed">
            Have a project in mind or an opportunity in full stack engineering? Reach out directly via email, phone, or LinkedIn.
          </p>

          <div className="space-y-6">
            <a href={socialLinks.email} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">
                {personalInfo.emails.primary}
              </span>
            </a>

            <a href={socialLinks.phone} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">
                {personalInfo.phone}
              </span>
            </a>

            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">
                  LinkedIn Profile
                </span>
              </a>
            )}

            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[var(--color-brand-red)] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <span className="text-[var(--color-text-primary)] font-bold group-hover:text-[var(--color-brand-red)] transition-colors">
                  GitHub Profile
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
            <div>
              <label className="block text-[var(--color-silver)] text-xs font-bold uppercase tracking-widest mb-2">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full bg-black/40 border border-[var(--color-border-soft)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-[var(--color-silver)] text-xs font-bold uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full bg-black/40 border border-[var(--color-border-soft)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-red)] transition-colors"
                placeholder="your.email@domain.com"
              />
            </div>
            <div>
              <label className="block text-[var(--color-silver)] text-xs font-bold uppercase tracking-widest mb-2">Message</label>
              <textarea 
                name="message" 
                required 
                rows="4" 
                className="w-full bg-black/40 border border-[var(--color-border-soft)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-red)] transition-colors resize-none"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            
            {submitStatus && (
              <div className="p-4 rounded-lg text-sm font-bold bg-green-900/40 text-green-400 border border-green-500/30">
                {submitStatus}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-[var(--color-brand-red)] text-white font-bold rounded-lg hover:bg-white hover:text-[var(--color-brand-red)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_var(--color-brand-red-glow)] cursor-pointer"
            >
              {isSubmitting ? 'PREPARING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
