import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, impactMetrics } from '../data/portfolioData';

const Hero = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleVideoLoad = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 2) { 
        handleVideoLoad();
      }
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay or play was blocked:", err);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-deep)]">
      {/* Background Poster */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('/hero-image.png')`,
          backgroundPosition: 'center'
        }}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient mask for monochrome depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent z-10" />

      {/* Floating Live Engineering Signals */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
        {impactMetrics.map((metric, idx) => {
          const isWhiteText = ['Load Time Optimization', 'NPTEL Elite IoT Score'].includes(metric.label);
          return (
            <div 
              key={idx}
              className={`absolute glass-panel px-3 py-1.5 rounded-full flex flex-col items-center justify-center animate-float shadow-lg border ${isWhiteText ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/10'}`}
              style={{
                top: `${15 + (idx * 15)}%`,
                right: `${5 + (idx % 2 === 0 ? 10 : 25)}%`,
                animationDelay: `${idx * 1.5}s`
              }}
            >
              <span className={`${isWhiteText ? 'text-white' : 'text-black'} font-black text-base md:text-lg`}>{metric.value}</span>
              <span className={`${isWhiteText ? 'text-white/70' : 'text-black/70'} text-[8px] md:text-[10px] tracking-widest uppercase font-bold`}>{metric.label}</span>
            </div>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 pl-4 pr-6 pt-28 md:pt-36 pb-12 md:pb-12 md:pl-8 md:pr-12 w-full h-full flex flex-col justify-between items-start text-left">
        
        {/* Top/Left Side */}
        <div className="flex flex-col items-start text-left max-w-xl w-full">
          <h1 
            data-aos="fade-up"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight leading-[1.1] font-sans"
          >
            Hi, I'm
            <span className="font-cursive text-[var(--color-brand-red)] block mt-1 text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
              {personalInfo.name}
            </span>
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-black/85 text-xs md:text-sm font-bold max-w-lg drop-shadow-md leading-relaxed"
          >
            {heroContent.subtitle}
          </p>
        </div>

        {/* Bottom Buttons Container */}
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-row flex-wrap items-center gap-2 w-full mt-auto"
        >
          <a 
            href={heroContent.ctaPrimary.href}
            className="px-4 py-2 text-[10px] md:text-xs rounded-full bg-[var(--color-brand-red)] text-white font-bold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_var(--color-brand-red-glow)]"
          >
            {heroContent.ctaPrimary.text}
          </a>
          
          <a 
            href={heroContent.ctaSecondary.href}
            className="px-4 py-2 text-[10px] md:text-xs rounded-full bg-transparent border border-white/60 text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            {heroContent.ctaSecondary.text}
          </a>

          <a 
            href={heroContent.ctaResume.href}
            download="Chilukuri_Uma_Reethika_Resume.pdf"
            className="px-4 py-2 text-[10px] md:text-xs rounded-full bg-transparent border border-white/60 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {heroContent.ctaResume.text}
          </a>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="absolute bottom-12 right-6 md:bottom-[12%] md:right-12 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group z-20"
          onClick={toggleVideo}
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-[var(--color-border-bright)] bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[var(--color-brand-red)] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_40px_var(--color-brand-red-glow)]">
            {!isPlaying || isMuted ? (
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-[var(--color-silver)] text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity group-hover:text-white">
            {!isPlaying || isMuted ? "Play Reel" : "Pause"}
          </span>
        </div>
      </div>

      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-lg" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
