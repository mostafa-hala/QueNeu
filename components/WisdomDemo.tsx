
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Language } from '../types';

interface WisdomDemoProps {
  lang: Language;
  t: any;
}

const WisdomDemo: React.FC<WisdomDemoProps> = ({ lang, t }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = String(t?.comingSoon ?? (lang === 'ar' ? 'قريباً' : 'Coming Soon'));


  useEffect(() => {
  if (!showComingSoon) return;

  let index = 0;
  setDisplayText('');

  const interval = setInterval(() => {
    if (index < fullText.length) {
      setDisplayText((prev) => prev + fullText.charAt(index));
      index++;
    } else {
      clearInterval(interval);
    }
  }, 150);

  return () => clearInterval(interval);
}, [showComingSoon, fullText, lang]);



  const renderTitle = () => {
    if (lang === 'en') {
      return (
        <>
          Ready to Translate <br />
          <span className="text-[#D4A048]">Wisdom</span> into the <span className="text-[#1BC5FF]">Future</span>?
        </>
      );
    } else {
      return (
        <>
          هل أنت مستعد لترجمة <br />
          <span className="text-[#D4A048]">الحكمة</span> إلى <span className="text-[#1BC5FF]">المستقبل</span>؟
        </>
      );
    }
  };

  if (showComingSoon) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center bg-[#0C1A3B] relative transition-all duration-1000 animate-in fade-in">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1BC5FF]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#D4A048]/10 rounded-full blur-[80px]" />
        </div>

        <div className="text-center z-10">
          <h2
  className={`
    text-5xl md:text-7xl font-black text-[#D4A048]
    tracking-tight
    drop-shadow-[0_0_30px_rgba(212,160,72,0.3)]
    px-6
    leading-tight
    ${lang === 'ar' ? 'font-arabic' : 'poppins-font'}
  `}
>
  {displayText}
  <span className="animate-pulse">|</span>
</h2>


          <div className="mt-4 flex justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#1BC5FF] rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-1.5 h-1.5 bg-[#1BC5FF] rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-1.5 h-1.5 bg-[#1BC5FF] rounded-full animate-bounce" />
          </div>
          <button 
            onClick={() => setShowComingSoon(false)}
            className="mt-8 text-[#F4F3EC]/40 hover:text-[#1BC5FF] text-[10px] font-bold uppercase tracking-[0.3em] transition-colors"
          >
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 bg-[#0A0A0A]/50 border-y border-[#1E3A75] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-black mb-3 text-[#F4F3EC] poppins-font leading-tight">
          {renderTitle()}
        </h2>
        
        <p className="text-base md:text-lg text-[#F4F3EC]/60 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          {t.desc}
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={() => setShowComingSoon(true)}
            className="group relative flex items-center justify-center p-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1BC5FF] to-[#D4A048] rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            
            <div className="relative bg-[#0C1A3B] hover:bg-[#1E3A75] border border-[#D4A048]/30 rounded-full px-7 py-3 flex items-center gap-3 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95 shadow-xl">
              <span className="text-lg md:text-xl font-black text-[#F4F3EC] poppins-font tracking-tight uppercase">
                {t.btn}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#D4A048] flex items-center justify-center text-[#0C1A3B] group-hover:bg-[#1BC5FF] transition-colors duration-300">
                <Play fill="currentColor" size={16} className={`${lang === 'en' ? 'ml-0.5' : 'mr-0.5'}`} />
              </div>
            </div>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-30">
          {t.steps.map((step: string, i: number) => (
            <div key={i} className="text-center">
              <span className={`block text-lg font-black ${i === 1 ? 'text-[#D4A048]' : 'text-[#1BC5FF]'} poppins-font mb-0.5`}>0{i+1}</span>
              <span className="text-[8px] uppercase font-bold tracking-widest text-white/60">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WisdomDemo;
