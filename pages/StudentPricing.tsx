import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Crown, Gem } from 'lucide-react';
import { Language } from '../types';
import Navbar from '../components/Navbar';

const StudentPricing: React.FC<{
  lang: Language;
  t: any;
  toggleLanguage: () => void;
}> = ({ lang, t, toggleLanguage }) => {
  const navigate = useNavigate();

  const [hasChosenFree, setHasChosenFree] = useState(false);
  const [showBoardPacks, setShowBoardPacks] = useState(false);
  const boardPacksRef = useRef<HTMLDivElement>(null);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login?role=student');
  };

  const handleShowBoardPacks = () => {
    if (hasChosenFree) return;
    setHasChosenFree(true);

    setTimeout(() => {
      setShowBoardPacks(true);
      setTimeout(() => {
        boardPacksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
    }, 900);
  };

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#0C1A3B]/95 text-[#F4F3EC] ${lang === 'ar' ? 'font-arabic' : ''}`}
    >
      <Navbar lang={lang} toggleLanguage={toggleLanguage} t={t.nav} variant="page" />

      <div className="pt-28 px-6 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t.studentPricing.title}
          </h1>
          <p className="text-[#E5D8C0] text-lg md:text-xl max-w-3xl mx-auto">
            {t.studentPricing.sub}
          </p>
        </div>

        {/* MAIN TIERS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {/* FREE EXPLORER */}
          <div
            className={`
              bg-[#0C1A3B]/80 border border-[#16285A] rounded-2xl p-8 
              backdrop-blur-md shadow-xl transition-all duration-500
              ${hasChosenFree ? 'move-to-center' : ''}
            `}
          >
            <h3 className="text-2xl font-bold mb-2">{t.studentPricing.free.name}</h3>
            <div className="text-4xl font-bold text-[#E5D8C0] mb-6">{t.studentPricing.free.price}</div>
            <p className="text-[#9CA3AF] mb-8 text-sm">{t.studentPricing.free.desc}</p>

            <ul className="space-y-4 mb-8">
              {t.studentPricing.free.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#E5D8C0]" /> {b}
                </li>
              ))}
            </ul>

            <button
              onClick={handleShowBoardPacks}
              className="w-full py-3 rounded-lg border border-[#E5D8C0] text-[#E5D8C0] font-bold hover:bg-[#E5D8C0] hover:text-[#0C1A3B] transition"
            >
              {t.studentPricing.free.cta}
            </button>
          </div>

          {/* PLAYER PLUS */}
          <div
            className={`
              bg-[#1E3A75]/90 border border-[#1BC5FF] rounded-2xl p-8 
              backdrop-blur-md shadow-2xl shadow-[#1BC5FF]/20 relative overflow-hidden
              transform transition-all duration-[900ms] ease-in-out
              ${hasChosenFree ? 'opacity-0 scale-95 translate-x-4 pointer-events-none' : 'opacity-100 scale-100 translate-x-0'}
            `}
          >
            <div className="absolute -right-12 top-6 bg-[#1BC5FF] text-[#0C1A3B] px-12 py-1 rotate-45 text-sm font-bold">
              {t.studentPricing.plus.badge}
            </div>

            <h3 className="text-2xl font-bold mb-2">{t.studentPricing.plus.name}</h3>
            <div className="text-4xl font-bold text-[#1BC5FF] mb-6">
              {t.studentPricing.plus.price}
              <span className="text-lg font-normal text-[#9CA3AF]">{t.studentPricing.plus.per}</span>
            </div>
            <p className="text-[#9CA3AF] mb-8 text-sm">{t.studentPricing.plus.desc}</p>

            <ul className="space-y-4 mb-8">
              {t.studentPricing.plus.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  {i === 0 ? <Crown size={18} className="text-[#1BC5FF]" /> : <CheckCircle2 size={18} className="text-[#1BC5FF]" />}
                  {b}
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-lg bg-[#1BC5FF] text-[#0C1A3B] font-bold hover:shadow-[0_0_20px_rgba(27,197,255,0.4)] transition">
              {t.studentPricing.plus.cta}
            </button>
          </div>
        </div>

        {/* BOARD PACKS */}
        <div
          ref={boardPacksRef}
          className={`
            max-w-5xl mx-auto w-full overflow-hidden
            transition-all duration-[1200ms] ease-in-out
            ${showBoardPacks ? 'max-h-[1500px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'}
          `}
        >
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px bg-[#16285A]/50 w-full max-w-[100px]" />
            <h3 className="text-2xl font-bold text-[#D4A048] uppercase tracking-widest text-center">
              {t.studentPricing.boardPacks.title}
            </h3>
            <div className="h-px bg-[#16285A]/50 w-full max-w-[100px]" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.studentPricing.boardPacks.packs.map((p: any, i: number) => (
              <div key={i} className="bg-[#0A0A0A]/80 border border-[#16285A] p-6 rounded-xl hover:border-[#D4A048] transition group cursor-pointer backdrop-blur-sm shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: p.gems }).map((_, j) => (
                      <Gem key={j} className="text-[#D4A048] group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <span className="bg-[#16285A] text-[#E5D8C0] px-2 py-1 rounded text-xs">{p.tag}</span>
                </div>
                <div className="text-3xl font-bold text-[#F4F3EC] mb-1">{p.price}</div>
                <div className="text-sm text-[#9CA3AF] mb-4">{p.desc}</div>
                <div className="text-xs text-[#E5D8C0] opacity-60">{p.note}</div>
              </div>
            ))}
          </div>

          {/* SIMPLE FORM */}
          <div className="max-w-4xl mx-auto w-full mt-14">
            <div className="rounded-3xl p-8 md:p-10 border border-[#1f2937] shadow-[0_30px_80px_rgba(0,0,0,0.65)] bg-[#0A0A0A]/40 backdrop-blur-xl">
              <h3 className="text-2xl md:text-3xl font-bold">{t.studentPricing.form.title}</h3>
              <p className="text-sm text-[#E5D8C0] mt-2">{t.studentPricing.form.sub}</p>

              <form className="grid md:grid-cols-2 gap-6 mt-6" onSubmit={handleProfileSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#E5D8C0]">{t.studentPricing.form.username}</label>
                  <input className="bg-[#0C1A3B] border border-[#16285A] rounded-xl px-4 py-2.5 text-sm" placeholder="eg. Player01" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#E5D8C0]">{t.studentPricing.form.email}</label>
                  <input type="email" className="bg-[#0C1A3B] border border-[#16285A] rounded-xl px-4 py-2.5 text-sm" placeholder="you@example.com" />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0b69f5] via-[#48b4d4] to-[#0b69f5] text-[#0C1A3B] font-bold text-sm tracking-wide"
                  >
                    {t.studentPricing.form.cta}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentPricing;
