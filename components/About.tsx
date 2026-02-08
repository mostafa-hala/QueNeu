
import React, { useEffect, useState } from 'react';
import { AlertCircle, Zap, ArrowUpRight, TrendingDown, ArrowUpLeft } from 'lucide-react';
import { Language } from '../types';

interface CircularStatProps {
  label: string;
  value: number;
  color: string;
  delay: number;
}

const CircularStat: React.FC<CircularStatProps> = ({ label, value, color, delay }) => {
  const [progress, setProgress] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-[2000ms] ease-out drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-black text-white poppins-font">
            {progress}%
          </span>
        </div>
      </div>
      <span className="text-[14px]  font-bold uppercase tracking-widest text-[#F4F3EC]/60 text-center px-2 group-hover:text-white transition-colors">
        {label}
      </span>
    </div>
  );
};

interface AboutProps {
  lang: Language;
  t: any;
}

const About: React.FC<AboutProps> = ({ lang, t }) => {
  const stats = [
    { label: t.stats.somewhat, value: 42, color: '#F4F3EC', delay: 200 },
    { label: t.stats.minimally, value: 37, color: '#C69C98', delay: 400 },
    { label: t.stats.uneffective, value: 18, color: '#D4A048', delay: 600 },
    { label: t.stats.extremely, value: 3, color: '#1BC5FF', delay: 800 }
  ];

  return (
    <div className="py-24 px-6 relative bg-[#0C1A3B]/50 border-y border-[#1E3A75]/30 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#1E3A75]/10 to-transparent pointer-events-none" />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left rtl:slide-in-from-right duration-1000">
            <div className="inline-block py-1 px-4 mb-6 rounded-full bg-[#D4A048]/10 border border-[#D4A048]/30">
              <span className="text-[#D4A048] text-xs font-black uppercase tracking-widest">{t.tag}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-10 text-white leading-[1.1] poppins-font">
              {lang === 'en' ? 'Why ' : 'لماذا توجد '}<span className="text-[#D4A048]">QueNeu</span>{lang === 'en' ? ' Exists' : ''}
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="relative pl-8 rtl:pl-0 rtl:pr-8 border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#1BC5FF]">
                <p className="text-2xl md:text-3xl text-[#F4F3EC] leading-tight font-bold poppins-font mb-4">
                  {t.crisisTitle}
                </p>
                <p className="text-lg md:text-xl text-[#F4F3EC]/70 leading-relaxed font-light">
                  {t.crisisDesc}
                </p>
              </div>

              <div className="bg-[#1E3A75]/20 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <AlertCircle size={60} className="text-[#D4A048]" />
                </div>
                <p className="text-lg text-[#F4F3EC]/80 leading-relaxed relative z-10">
                  {t.failText}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-4 text-[#1BC5FF] font-black text-xl hover:translate-x-4 rtl:hover:-translate-x-4 transition-all group poppins-font">
              {t.methodology} 
              {lang === 'en' ? <ArrowUpRight className="group-hover:rotate-45 transition-transform" /> : <ArrowUpLeft className="group-hover:-rotate-45 transition-transform" />}
            </button>
          </div>
          
          <div className="lg:col-span-7 bg-[#0A0A0A]/40 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-[#1E3A75]/40 shadow-2xl relative">
            <div className="mb-12 flex items-center justify-between rtl:flex-row-reverse">
              <div className="rtl:text-right">
                <h3 className="text-2xl font-bold text-white mb-2 poppins-font">{t.chartTitle}</h3>
                <p className="text-sm text-[#F4F3EC]/40 uppercase tracking-[0.2em] font-bold">{t.chartSub}</p>
              </div>
              <TrendingDown className="text-[#D4A048] w-10 h-10 hidden md:block opacity-40" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <CircularStat 
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  color={stat.color}
                  delay={stat.delay}
                />
              ))}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-br from-[#1BC5FF]/5 to-transparent rounded-3xl border border-[#1BC5FF]/10">
              <div className="flex flex-col md:flex-row items-center gap-6 rtl:flex-row-reverse">
                <div className="w-16 h-16 bg-[#1BC5FF] rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(27,197,255,0.4)] animate-pulse">
                  <Zap className="text-[#0C1A3B] w-8 h-8" />
                </div>
                <div className="rtl:text-right">
                  <h4 className="text-xl font-bold text-[#1BC5FF] mb-2 poppins-font">{t.impactTitle}</h4>
                  <p className="text-sm text-[#F4F3EC]/60 leading-relaxed">
                    {t.impactDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-10 rtl:right-auto rtl:left-10 text-[8px] font-mono text-white/10 uppercase tracking-[1em]">
              Data Analysis Mode: Active
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default About;
