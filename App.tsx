import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import GameSystem from './components/GameSystem';
import Technology from './components/Technology';
import Contact from './components/Contact';
import WisdomDemo from './components/WisdomDemo';

import ExpertUploadExperience from './pages/ExpertUploadExperience';

import { Section, Language } from './types';
import { translations } from './translations';
import cropedImg from "./assets/croped.png";
import StudentPricing from './pages/StudentPricing';

// Home Page as a component (clean routing)
const HomePage: React.FC<{
  lang: Language;
  toggleLanguage: () => void;
}> = ({ lang, toggleLanguage }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-queneu-gradient selection:bg-[#1BC5FF] selection:text-white ${lang === 'ar' ? 'font-arabic' : ''}`}
    >
      <Navbar
        activeSection={activeSection}
        lang={lang}
        toggleLanguage={toggleLanguage}
        t={t.nav}
        variant="home"
      />

      <main>
        <section id={Section.Home}>
          <Hero lang={lang} t={t.hero} />
        </section>

        <section id={Section.About}>
          <About lang={lang} t={t.about} />
        </section>

        <WisdomDemo lang={lang} t={t.demo} />

        <section id={Section.Solutions}>
          <Solutions lang={lang} t={t.solutions} />
        </section>

        <section id={Section.GameSystem}>
          <GameSystem lang={lang} t={t.gameSystem} />
        </section>

        {/* <section id={Section.Technology}>
          <Technology lang={lang} t={t.tech} />
        </section> */}

        <section id={Section.Contact}>
          <Contact lang={lang} t={t.contact} />
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-[#1E3A75] bg-[#0A0A0A] text-center">
        <div className="max-w-7xl mx-auto">
          <img src={cropedImg} alt="QueNeu" className="h-16 mx-auto mb-6 " />
          <p className="text-[#E5D8C0]/60 mb-4 italic">{t.footer.quote}</p>
          <p className="text-xs text-[#E5D8C0]/40">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const toggleLanguage = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));

  return (
    <Routes>
      <Route path="/" element={<HomePage lang={lang} toggleLanguage={toggleLanguage} />} />

      <Route
        path="/expert/upload"
        element={
          <ExpertUploadExperience
            lang={lang}
            t={translations[lang]}
            toggleLanguage={toggleLanguage}
          />
        }
      />
      <Route
  path="/student/pricing"
  element={<StudentPricing lang={lang} t={translations[lang]} toggleLanguage={toggleLanguage} />}
/>

    </Routes>
  );
};

export default App;
