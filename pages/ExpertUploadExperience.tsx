import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import Navbar from '../components/Navbar';
type Tier = 'free' | 'pro' | 'unlimited';

const ExpertUploadExperience: React.FC<{ lang: Language; t: any; toggleLanguage: () => void }> = ({ lang, t, toggleLanguage }) => {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const actionRef = useRef<HTMLDivElement | null>(null);

  const ArrowBack = lang === 'en' ? ArrowLeft : ArrowRight;
  const ArrowForward = lang === 'en' ? ArrowRight : ArrowLeft;

  const handleSelect = (tier: Tier) => {
    setSelectedTier(tier);
    setTimeout(() => actionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
  };

  const handleProceed = () => {
    if (!selectedTier) return;
    navigate(`/login?role=expert&tier=${selectedTier}`);
  };

  const tierData =
    selectedTier === 'free'
      ? t.expertUpload.tiers.free
      : selectedTier === 'pro'
      ? t.expertUpload.tiers.pro
      : selectedTier === 'unlimited'
      ? t.expertUpload.tiers.unlimited
      : null;

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#0C1A3B]/95 text-[#F4F3EC] ${lang === 'ar' ? 'font-arabic' : ''}`}
    >
      <Navbar
        lang={lang}
        toggleLanguage={toggleLanguage}
        t={t.nav}
        variant="page"
      />

      <div className="pt-28">
        {/* باقي محتوى صفحة الباقات */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-24">
        {/* Intro */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t.expertUpload.title}
          </h1>
          <p className="text-[#E5D8C0] text-lg md:text-xl max-w-3xl mx-auto">
            {t.expertUpload.sub}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#0A0A0A]/40 border border-[#1E3A75] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold mb-2">
                {lang === 'en' ? 'Step 01' : 'الخطوة 01'}
              </p>
              <p className="text-[#F4F3EC] font-bold">{t.expertUpload.steps.s1Title}</p>
              <p className="text-sm text-[#F4F3EC]/60 mt-2">{t.expertUpload.steps.s1Desc}</p>
            </div>

            <div className="bg-[#0A0A0A]/40 border border-[#1E3A75] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold mb-2">
                {lang === 'en' ? 'Step 02' : 'الخطوة 02'}
              </p>
              <p className="text-[#F4F3EC] font-bold">{t.expertUpload.steps.s2Title}</p>
              <p className="text-sm text-[#F4F3EC]/60 mt-2">{t.expertUpload.steps.s2Desc}</p>
            </div>

            <div className="bg-[#0A0A0A]/40 border border-[#1E3A75] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold mb-2">
                {lang === 'en' ? 'Step 03' : 'الخطوة 03'}
              </p>
              <p className="text-[#F4F3EC] font-bold">{t.expertUpload.steps.s3Title}</p>
              <p className="text-sm text-[#F4F3EC]/60 mt-2">{t.expertUpload.steps.s3Desc}</p>
            </div>
          </div>
        </div>

        {/* Packages title */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-[#16285A]/60 w-full max-w-[120px]" />
          <h2 className="text-2xl font-bold text-[#D4A048] uppercase tracking-widest">
            {t.expertUpload.packagesTitle}
          </h2>
          <div className="h-px bg-[#16285A]/60 w-full max-w-[120px]" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free */}
          <div className="bg-[#0C1A3B]/80 border border-[#16285A] rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <div className="h-1 w-full bg-[#E5D8C0] rounded-full mb-6" />
            <h3 className="text-2xl font-bold mb-2">{t.expertUpload.tiers.free.name}</h3>
            <div className="text-4xl font-bold text-[#E5D8C0] mb-4">
              {t.expertUpload.tiers.free.price}
              <span className="text-lg font-normal text-[#9CA3AF]">{t.expertUpload.tiers.free.per}</span>
            </div>
            <p className="text-[#9CA3AF] mb-7 text-sm">{t.expertUpload.tiers.free.desc}</p>

            <ul className="space-y-3 mb-8">
              {t.expertUpload.tiers.free.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#E5D8C0]" /> {b}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelect('free')}
              className="w-full py-3 rounded-lg border border-[#E5D8C0] text-[#E5D8C0] font-bold hover:bg-[#E5D8C0] hover:text-[#0C1A3B] transition"
            >
              {t.expertUpload.tiers.free.cta}
            </button>
          </div>

          {/* Pro */}
          <div className="bg-[#1E3A75]/90 border border-[#1BC5FF] rounded-2xl p-8 backdrop-blur-md shadow-2xl shadow-[#1BC5FF]/20 relative overflow-hidden">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1BC5FF] text-[#0C1A3B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {t.expertUpload.mostPopular}
            </div>

            <h3 className="text-2xl font-bold mb-2 mt-2">{t.expertUpload.tiers.pro.name}</h3>
            <div className="text-4xl font-bold text-[#1BC5FF] mb-4">
              {t.expertUpload.tiers.pro.price}
              <span className="text-lg font-normal text-[#9CA3AF]">{t.expertUpload.tiers.pro.per}</span>
            </div>
            <p className="text-[#9CA3AF] mb-7 text-sm">{t.expertUpload.tiers.pro.desc}</p>

            <ul className="space-y-3 mb-8">
              {t.expertUpload.tiers.pro.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#1BC5FF]" /> {b}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelect('pro')}
              className="w-full py-3 rounded-lg bg-[#1BC5FF] text-[#0C1A3B] font-bold hover:shadow-[0_0_20px_rgba(27,197,255,0.4)] transition"
            >
              {t.expertUpload.tiers.pro.cta}
            </button>
          </div>

          {/* Unlimited */}
          <div className="bg-[#0C1A3B]/80 border border-[#D4A048] rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <div className="h-1 w-full bg-[#D4A048] rounded-full mb-6" />
            <h3 className="text-2xl font-bold mb-2">{t.expertUpload.tiers.unlimited.name}</h3>
            <div className="text-4xl font-bold text-[#D4A048] mb-4">
              {t.expertUpload.tiers.unlimited.price}
              <span className="text-lg font-normal text-[#9CA3AF]">{t.expertUpload.tiers.unlimited.per}</span>
            </div>
            <p className="text-[#9CA3AF] mb-7 text-sm">{t.expertUpload.tiers.unlimited.desc}</p>

            <ul className="space-y-3 mb-8">
              {t.expertUpload.tiers.unlimited.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D4A048]" /> {b}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelect('unlimited')}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A048] to-[#F59E0B] text-[#0C1A3B] font-bold hover:shadow-[0_0_20px_rgba(212,160,72,0.4)] transition"
            >
              {t.expertUpload.tiers.unlimited.cta}
            </button>
          </div>
        </div>

        {/* Selected action box */}
        {selectedTier && tierData && (
          <div ref={actionRef} className="mt-14 max-w-4xl mx-auto">
            <div className="rounded-3xl p-8 border border-[#1E3A75] bg-[#0A0A0A]/40 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold">
                    {t.expertUpload.selected}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black mt-2">{tierData.name}</h3>
                  <p className="text-[#E5D8C0] mt-3">{t.expertUpload.nextText}</p>
                </div>

                <button
                  onClick={handleProceed}
                  className="w-full md:w-auto px-7 py-3 rounded-2xl bg-[#1BC5FF] text-[#0C1A3B] font-black flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(27,197,255,0.35)] transition"
                >
                  {t.expertUpload.continue} <ArrowForward size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ExpertUploadExperience;

// ------------

//   return (
//     <div className="min-h-screen text-[#F4F3EC] overflow-x-hidden relative bg-[#0C1A3B]/95">
//       {/* Top bar */}
//       <Navbar
//         lang={lang}
//         toggleLanguage={toggleLanguage}
//         t={t.nav}
//         variant="page"
//       />
//         <div className="pt-28">

//       <div className="max-w-7xl mx-auto px-6 pt-14 pb-24">
//         {/* Intro */}
//         <div className="text-center mb-14">
//           <h1 className="text-4xl md:text-5xl font-black mb-4">
//             {t.expertUpload.title}
//           </h1>
//           <p className="text-[#E5D8C0] text-lg md:text-xl max-w-3xl mx-auto">
//             {t.expertUpload.sub}
//           </p>

//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             <div className="bg-[#0A0A0A]/40 border border-[#1E3A75] rounded-2xl p-6">
//               <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold mb-2">
//                 {lang === 'en' ? 'Step 01' : 'الخطوة 01'}
//               </p>
//               <p className="text-[#F4F3EC] font-bold">{t.expertUpload.steps.s1Title}</p>
//               <p className="text-sm text-[#F4F3EC]/60 mt-2">{t.expertUpload.steps.s1Desc}</p>
//             </div>

//             <div className="bg-[#0A0A0A]/40 border border-[#1E3A75] rounded-2xl p-6">
//               <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold mb-2">
//                 {lang === 'en' ? 'Step 02' : 'الخطوة 02'}
//               </p>
//               <p className="text-[#F4F3EC] font-bold">{t.expertUpload.steps.s2Title}</p>
//               <p className="text-sm text-[#F4F3EC]/60 mt-2">{t.expertUpload.steps.s2Desc}</p>
//             </div>

//             <div className="bg-[#0A0A0A]/40 border border-[#1E3A75] rounded-2xl p-6">
//               <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold mb-2">
//                 {lang === 'en' ? 'Step 03' : 'الخطوة 03'}
//               </p>
//               <p className="text-[#F4F3EC] font-bold">{t.expertUpload.steps.s3Title}</p>
//               <p className="text-sm text-[#F4F3EC]/60 mt-2">{t.expertUpload.steps.s3Desc}</p>
//             </div>
//           </div>
//         </div>

//         {/* Packages title */}
//         <div className="flex items-center justify-center gap-4 mb-10">
//           <div className="h-px bg-[#16285A]/60 w-full max-w-[120px]" />
//           <h2 className="text-2xl font-bold text-[#D4A048] uppercase tracking-widest">
//             {t.expertUpload.packagesTitle}
//           </h2>
//           <div className="h-px bg-[#16285A]/60 w-full max-w-[120px]" />
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Free */}
//           <div className="bg-[#0C1A3B]/80 border border-[#16285A] rounded-2xl p-8 backdrop-blur-md shadow-xl">
//             <div className="h-1 w-full bg-[#E5D8C0] rounded-full mb-6" />
//             <h3 className="text-2xl font-bold mb-2">{t.expertUpload.tiers.free.name}</h3>
//             <div className="text-4xl font-bold text-[#E5D8C0] mb-4">
//               {t.expertUpload.tiers.free.price}
//               <span className="text-lg font-normal text-[#9CA3AF]">{t.expertUpload.tiers.free.per}</span>
//             </div>
//             <p className="text-[#9CA3AF] mb-7 text-sm">{t.expertUpload.tiers.free.desc}</p>

//             <ul className="space-y-3 mb-8">
//               {t.expertUpload.tiers.free.bullets.map((b: string, i: number) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <CheckCircle2 size={18} className="text-[#E5D8C0]" /> {b}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => handleSelect('free')}
//               className="w-full py-3 rounded-lg border border-[#E5D8C0] text-[#E5D8C0] font-bold hover:bg-[#E5D8C0] hover:text-[#0C1A3B] transition"
//             >
//               {t.expertUpload.tiers.free.cta}
//             </button>
//           </div>

//           {/* Pro */}
//           <div className="bg-[#1E3A75]/90 border border-[#1BC5FF] rounded-2xl p-8 backdrop-blur-md shadow-2xl shadow-[#1BC5FF]/20 relative overflow-hidden">
//             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1BC5FF] text-[#0C1A3B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//               {t.expertUpload.mostPopular}
//             </div>

//             <h3 className="text-2xl font-bold mb-2 mt-2">{t.expertUpload.tiers.pro.name}</h3>
//             <div className="text-4xl font-bold text-[#1BC5FF] mb-4">
//               {t.expertUpload.tiers.pro.price}
//               <span className="text-lg font-normal text-[#9CA3AF]">{t.expertUpload.tiers.pro.per}</span>
//             </div>
//             <p className="text-[#9CA3AF] mb-7 text-sm">{t.expertUpload.tiers.pro.desc}</p>

//             <ul className="space-y-3 mb-8">
//               {t.expertUpload.tiers.pro.bullets.map((b: string, i: number) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <CheckCircle2 size={18} className="text-[#1BC5FF]" /> {b}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => handleSelect('pro')}
//               className="w-full py-3 rounded-lg bg-[#1BC5FF] text-[#0C1A3B] font-bold hover:shadow-[0_0_20px_rgba(27,197,255,0.4)] transition"
//             >
//               {t.expertUpload.tiers.pro.cta}
//             </button>
//           </div>

//           {/* Unlimited */}
//           <div className="bg-[#0C1A3B]/80 border border-[#D4A048] rounded-2xl p-8 backdrop-blur-md shadow-xl">
//             <div className="h-1 w-full bg-[#D4A048] rounded-full mb-6" />
//             <h3 className="text-2xl font-bold mb-2">{t.expertUpload.tiers.unlimited.name}</h3>
//             <div className="text-4xl font-bold text-[#D4A048] mb-4">
//               {t.expertUpload.tiers.unlimited.price}
//               <span className="text-lg font-normal text-[#9CA3AF]">{t.expertUpload.tiers.unlimited.per}</span>
//             </div>
//             <p className="text-[#9CA3AF] mb-7 text-sm">{t.expertUpload.tiers.unlimited.desc}</p>

//             <ul className="space-y-3 mb-8">
//               {t.expertUpload.tiers.unlimited.bullets.map((b: string, i: number) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <CheckCircle2 size={18} className="text-[#D4A048]" /> {b}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => handleSelect('unlimited')}
//               className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A048] to-[#F59E0B] text-[#0C1A3B] font-bold hover:shadow-[0_0_20px_rgba(212,160,72,0.4)] transition"
//             >
//               {t.expertUpload.tiers.unlimited.cta}
//             </button>
//           </div>
//         </div>

//         {/* Selected action box */}
//         {selectedTier && tierData && (
//           <div ref={actionRef} className="mt-14 max-w-4xl mx-auto">
//             <div className="rounded-3xl p-8 border border-[#1E3A75] bg-[#0A0A0A]/40 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
//               <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
//                 <div>
//                   <p className="text-xs uppercase tracking-[0.2em] text-[#F4F3EC]/40 font-bold">
//                     {t.expertUpload.selected}
//                   </p>
//                   <h3 className="text-2xl md:text-3xl font-black mt-2">{tierData.name}</h3>
//                   <p className="text-[#E5D8C0] mt-3">{t.expertUpload.nextText}</p>
//                 </div>

//                 <button
//                   onClick={handleProceed}
//                   className="w-full md:w-auto px-7 py-3 rounded-2xl bg-[#1BC5FF] text-[#0C1A3B] font-black flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(27,197,255,0.35)] transition"
//                 >
//                   {t.expertUpload.continue} <ArrowForward size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//         </div>
//     </div>
//   );
// };

// export default ExpertUploadExperience;
