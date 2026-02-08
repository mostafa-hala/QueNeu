import React, { useState } from 'react';
import { PILLARS, COMPONENTS } from '../constants';
import { ArrowLeft, ArrowRight, Box } from 'lucide-react';
import { Language } from '../types';
import boardImg from '../assets/board.jpeg';

interface GameSystemProps {
  lang: Language;
  t: any;
}

const arabicStyle = {
  fontFamily: `'Cairo', 'Tajawal', 'Segoe UI', sans-serif`,
  direction: 'rtl' as const,
};

const rtlBlock = (lang: Language) =>
  lang === 'ar'
    ? ({ direction: 'rtl', textAlign: 'right' as const } as const)
    : undefined;

const GameSystem: React.FC<GameSystemProps> = ({ lang, t }) => {
  const [showPhysicalView, setShowPhysicalView] = useState(false);

  const translatedPillars = PILLARS.map((p, i) => ({
    ...p,
    title:
      lang === 'en'
        ? p.title
        : [
            'النشاط البدني',
            'الفضول والتخمين',
            'الغموض',
            'الاحتمالات المفتوحة',
            'التخصيص',
            'المنافسة والحوافز',
            'دليل التعلم',
            'القطع الملموسة',
            'استخدام الحواس',
            'الانغماس',
          ][i],
    description:
      lang === 'en'
        ? p.description
        : [
            'مهام قائمة على الحركة لتعزيز التجربة الفكرية.',
            'إشراك الرغبة الطبيعية للعقل في الكشف عن المجهول.',
            'سيناريوهات غامضة تتطلب تركيزاً عميقاً وحدساً.',
            'لا يوجد حل واحد؛ تشجيع التفكير المتشعب.',
            'مخصص لمستوى اللاعب وأهدافه وأسلوبه في التعلم.',
            'هياكل مكافآت لتحفيز اللاعبين.',
            'إرشاد مدعوم بالذكاء الاصطناعي يوجه برفق.',
            'قطع مطبوعة ثلاثية الأبعاد لسد الفجوة الرقمية.',
            'رحلة متعددة الحواس من الصوت إلى اللمس.',
            'سرد قصصي كامل يجعل اللاعب هو البطل.',
          ][i],
  }));

  const translatedComponents = COMPONENTS.map((c, i) => ({
    ...c,
    name:
      lang === 'en'
        ? c.name
        : ['التخصيص', 'تغيير الواقع المعزز', 'التحديات', 'قطع مطبوعة ثلاثية الأبعاد', 'نظام النقاط'][i],
    description:
      lang === 'en'
        ? c.description
        : [
            'حيث يقوم الذكاء الاصطناعي بتكييف اللوحة مع ملفك المهني الفريد.',
            'تراكبات ديناميكية تحول القطع الفيزيائية إلى قصص تفاعلية.',
            'الساحة الأساسية حيث تدب الحياة في سيناريوهات الخبراء.',
            'أدوات فيزيائية مخصصة تمثل وحدات محددة من الحكمة.',
            'مقياس تسجيل متعدد الأبعاد يتتبع اكتساب الحكمة.',
          ][i],
  }));

  if (!showPhysicalView) {
    return (
      <div className="py-32 px-6 bg-gradient-to-b from-[#0C1A3B] to-[#1E3A75] relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A048]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-in fade-in zoom-in duration-700">
          <h2
            className={`text-4xl md:text-6xl font-black mb-6 text-[#D4A048] uppercase tracking-tight ${
              lang === 'ar' ? 'font-arabic' : 'poppins-font'
            }`}
            style={lang === 'ar' ? arabicStyle : undefined}
          >
            {t.title}
          </h2>

          <p
            className="text-xl md:text-2xl text-[#F4F3EC]/70 max-w-2xl mx-auto leading-relaxed font-light mb-12"
            style={lang === 'ar' ? arabicStyle : undefined}
          >
            {t.desc}
          </p>

          <button
            onClick={() => setShowPhysicalView(true)}
            className="group relative inline-flex items-center gap-4 bg-transparent border-2 border-[#1BC5FF] text-[#1BC5FF] px-10 py-5 rounded-full font-black text-xl hover:bg-[#1BC5FF] hover:text-[#0C1A3B] transition-all duration-500 transform hover:scale-105 shadow-[0_0_30px_rgba(27,197,255,0.2)]"
          >
            <Box className="group-hover:rotate-12 transition-transform" size={28} />
            <span style={lang === 'ar' ? arabicStyle : undefined}>{t.turnBtn}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-1000">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setShowPhysicalView(false)}
          className="mb-12 flex items-center gap-2 text-[#D4A048]/60 hover:text-[#D4A048] transition-colors font-bold uppercase tracking-widest text-xs group"
          style={lang === 'ar' ? { ...arabicStyle, gap: 8 } : undefined}
        >
          {lang === 'en' ? (
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          ) : (
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          )}
          <span style={lang === 'ar' ? arabicStyle : undefined}>{t.backBtn}</span>
        </button>

        <div className="mb-20">
          <h2
            className={`text-4xl md:text-5xl font-black mb-12 text-[#D4A048] ${
              lang === 'ar' ? 'font-arabic' : 'poppins-font'
            }`}
            style={rtlBlock(lang)}
          >
            {t.physicalTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {translatedPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0C1A3B]/40 border border-[#1E3A75] hover:border-[#D4A048]/50 transition-all group"
                style={rtlBlock(lang)}
              >
                <div
                  className="mb-3 transform group-hover:scale-110 transition-transform flex"
                  style={lang === 'ar' ? { justifyContent: 'flex-end' } : undefined}
                >
                  {pillar.icon}
                </div>

                <h4
                  className={`
                    font-black mb-1 text-[#F4F3EC]
                    ${
                      lang === 'en'
                        ? 'text-[11px] uppercase tracking-wider'
                        : 'text-[18px] font-arabic tracking-normal'
                    }
                  `}
                  style={rtlBlock(lang)}
                >
                  {pillar.title}
                </h4>

                <p
                  className={`
                    text-[#F4F3EC]/40 leading-tight
                    ${lang === 'en' ? 'text-[9px]' : 'text-[12px] font-arabic'}
                  `}
                  style={rtlBlock(lang)}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative mx-auto max-w-md aspect-[4/5] rounded-[3.5rem] bg-[#0A0A0A] p-4 shadow-2xl">
            <div className="relative w-full h-full rounded-[3rem] border-2 border-white/20 bg-[#0C1A3B] flex flex-col items-center">
              <div className="relative w-full flex-1 m-4 rounded-[2.2rem] overflow-hidden border border-white/10 bg-[#0C1A3B]">
                <img
                  src={boardImg}
                  alt="Physical Board Prototype"
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700 p-6"
                />
              </div>

              <div className="relative h-20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-2 border-white/25 bg-white/5 backdrop-blur-md shadow-inner" />
                <div className="absolute w-7 h-7 rounded-full border border-white/20 opacity-70" />
              </div>
            </div>

            <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-[#1BC5FF]/20 to-[#D4A048]/20 blur-3xl -z-10" />
          </div>

          <div className="order-1 lg:order-2" style={rtlBlock(lang)}>
            <h3
              className={`text-3xl font-black mb-10 text-[#F4F3EC] ${
                lang === 'ar' ? 'font-arabic' : 'poppins-font'
              }`}
              style={rtlBlock(lang)}
            >
              {t.anatomyTitle}
            </h3>

            <div className="space-y-8">
              {translatedComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-start group"
                  style={{
                    ...(lang === 'ar' ? { direction: 'rtl', textAlign: 'right' as const } : {}),
                    gap: lang === 'ar' ? 16 : 24,
                    
                  }}
                >
                  <span
                    className={`font-black text-[#D4A048]/20 group-hover:text-[#D4A048] transition-colors ${
                      lang === 'ar' ? 'text-3xl font-arabic' : 'text-4xl poppins-font'
                    }`}
                    style={rtlBlock(lang)}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div style={rtlBlock(lang)}>
                    <h4
                      className={`font-bold text-[#F4F3EC] mb-1 ${
                        lang === 'ar' ? 'text-[20px] font-arabic' : 'text-xl poppins-font'
                      }`}
                      style={rtlBlock(lang)}
                    >
                      {comp.name}
                    </h4>

                    <p
                      className={`text-[#F4F3EC]/50 leading-relaxed ${
                        lang === 'ar' ? 'text-[14px] font-arabic' : 'text-sm'
                      }`}
                      style={rtlBlock(lang)}
                    >
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GameSystem;
