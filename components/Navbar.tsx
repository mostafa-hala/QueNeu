import React, { useEffect, useState } from 'react';
import { Section, Language } from '../types';
import { Menu, X, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import cropedImg from '../assets/croped.png';

interface NavbarProps {
  activeSection?: Section;
  lang: Language;
  toggleLanguage: () => void;
  t: any;
  variant?: 'home' | 'page';
}

const NAVBAR_OFFSET = 90; // height used for scroll offset

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  lang,
  toggleLanguage,
  t,
  variant = 'home',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: t.home, id: Section.Home },
    { name: t.about, id: Section.About },
    { name: t.solutions, id: Section.Solutions },
    { name: t.system, id: Section.GameSystem },
    // { name: t.tech, id: Section.Technology },
    { name: t.contact, id: Section.Contact },
  ];

  // ✅ Show border only after leaving hero (slick effect)
  useEffect(() => {
    const HERO_THRESHOLD = window.innerHeight * 0.8; // after ~80% of hero height

    const onScroll = () => {
      setShowBorder(window.scrollY > HERO_THRESHOLD);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /** Smooth scroll with offset */
  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  /** Unified nav click handler (works from pages too) */
  const handleNavClick = (id: Section) => {
    setIsOpen(false);

    // If already in home -> just scroll
    if (location.pathname === '/') {
      smoothScrollTo(id);
      return;
    }

    // If in another page -> go home then scroll
    navigate('/');
    setTimeout(() => smoothScrollTo(id), 120);
  };

  return (
    <nav
      className={`
        fixed w-full z-50
        bg-[#0C1A3B]/80 backdrop-blur-md
        transition-all duration-500
        ${showBorder ? 'border-b border-[#1E3A75]' : 'border-b border-transparent'}
        ${showBorder ? 'shadow-[0_2px_20px_rgba(0,0,0,0.25)]' : 'shadow-none'}
      `}
    >
      {/* ✅ Fancy border line (fade + slide in) */}
      <div
        className={`
          absolute bottom-0 left-0 w-full h-[1px]
          bg-gradient-to-r from-transparent via-[#1BC5FF]/70 to-transparent
          transition-all duration-700
          ${showBorder ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        `}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* LOGO */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick(Section.Home)}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={cropedImg} alt="QueNeu" className="h-12 w-auto" />
              <span className="text-xl font-bold tracking-wider text-[#D4A048]">
                QueNeu
              </span>
            </button>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-md font-medium transition-colors hover:text-[#1BC5FF]
                  ${
                    variant === 'home' && activeSection === item.id
                      ? 'text-[#1BC5FF]'
                      : 'text-[#F4F3EC]'
                  }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold bg-[#1E3A75] hover:bg-[#1E3A75]/80 text-[#1BC5FF] px-3 py-1.5 rounded-lg border border-[#1BC5FF]/30 transition-all"
            >
              <Globe size={14} />
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* <button className="bg-[#D4A048] hover:bg-[#D4A048]/80 text-[#0C1A3B] px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105">
              {t.bookDemo}
            </button> */}
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-[#1BC5FF] font-bold text-sm"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-[#F4F3EC]">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#0C1A3B] border-t border-[#1E3A75] px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-lg font-medium text-[#F4F3EC] hover:text-[#1BC5FF]"
            >
              {item.name}
            </button>
          ))}
          <button className="w-full bg-[#D4A048] text-[#0C1A3B] py-3 rounded-full font-bold">
            {t.bookDemo}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
