# Chilukuri Uma Reethika — Full Stack Developer Portfolio

A responsive web portfolio for **Chilukuri Uma Reethika**, featuring smooth interactive UI animations, video reel integration, dynamic credential vault with fullscreen preview modals, system architecture gallery, and responsive cross-device layouts.

## 🌟 Key Features

- **Dynamic Video Hero Section**: Video background with graceful poster fallback, play/pause reel controls, floating live metrics, and quick CTA links.
- **Water-Fill Preloader**: Preloader animation with branded typography.
- **Interactive Cursor Particles**: Cursor particle system with subtle glow effects.
- **Engineering Case Studies**: Showcase of verified projects including AI Research Assistant, BioFactor Pulse (Cerevyn Solutions), Insightful (Feedback Intelligence Platform), Parking Management System, and Hungry Hub.
- **Credential Vault**: Certificate gallery with readable thumbnails and modal lightboxes for 8 verified certifications (PurpleLane, Cerevyn, NPTEL IoT Elite, NIT Tiruchirappalli, SenNova Innovations, Great Learning).
- **Technical Architecture Evidence**: High-resolution system design diagrams and RAG workflow pipelines.
- **Career Timeline & Education**: Interactive experience timeline and academic background with language proficiencies.
- **Full Contact Suite**: Direct mailto trigger, phone link, LinkedIn and GitHub profiles, and persistent desktop/mobile social docks.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & AOS (Animate On Scroll)
- **Icons**: Custom SVG icons & Lucide-inspired designs
- **Fonts**: Inter & Dancing Script (via Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
git clone https://github.com/mdyusuf0/Reethika-portfolio.git
cd Reethika-portfolio
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── certificates/        # High-res certificate image assets
│   ├── evidence/            # Architecture & workflow diagrams
│   ├── hero-image.png       # Hero fallback portrait
│   ├── hero-video.mp4       # Hero background video reel
│   ├── favicon.svg          # Branded favicon
│   └── Reethika_Resume.pdf  # Downloadable client resume
├── src/
│   ├── components/          # Modular UI components
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorParticles.jsx
│   │   ├── Education.jsx
│   │   ├── EvidenceGallery.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── GrowthFunnel.jsx
│   │   ├── Hero.jsx
│   │   ├── ImpactControlRoom.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── SocialDock.jsx
│   │   └── TechnicalSkills.jsx
│   ├── data/
│   │   └── portfolioData.js # Centralized configuration & verified content
│   ├── App.jsx
│   ├── index.css            # Tailwind CSS v4 theme and styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 📄 License
Created for Chilukuri Uma Reethika.
