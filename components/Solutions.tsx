import React from 'react';
import { Briefcase, UserCheck, Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface SolutionsProps {
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

const Solutions: React.FC<SolutionsProps> = ({ lang, t }) => {
  const navigate = useNavigate();

  const solutions = [
    {
      key: 'companies',
      title: t.companies.title,
      subtitle: t.companies.subtitle,
      desc: t.companies.desc,
      icon: <Briefcase className="w-10 h-10" />,
      color: 'bg-[#1E3A75]',
      accent: 'text-[#1BC5FF]',
    },
    {
      key: 'experts',
      title: t.experts.title,
      subtitle: t.experts.subtitle,
      desc: t.experts.desc,
      icon: <UserCheck className="w-10 h-10" />,
      color: 'bg-[#0C1A3B]',
      accent: 'text-[#D4A048]',
    },
    {
      key: 'families',
      title: t.families.title,
      subtitle: t.families.subtitle,
      desc: t.families.desc,
      icon: <Home className="w-10 h-10" />,
      color: 'bg-[#0A0A0A]',
      accent: 'text-[#C69C98]',
    },
  ];

  const ArrowForward = lang === 'en' ? ArrowRight : ArrowLeft;
  const ArrowBack = lang === 'en' ? ArrowLeft : ArrowRight;

  return (
    <div className="py-24 px-6" style={rtlBlock(lang)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-[#F4F3EC] ${
              lang === 'ar' ? 'font-arabic' : 'poppins-font'
            }`}
            style={lang === 'ar' ? arabicStyle : undefined}
          >
            {t.title}
          </h2>

          <p
            className="text-xl text-[#F4F3EC]/60"
            style={lang === 'ar' ? arabicStyle : undefined}
          >
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, idx) => {
            const isExpert = s.key === 'experts';

            return (
              <div
                key={idx}
                className={`group p-10 rounded-[3rem] ${s.color} border border-[#1E3A75] hover:border-[#1BC5FF]/50 transition-all duration-500 hover:-translate-y-4`}
                style={rtlBlock(lang)}
              >
                <div
                  className={`mb-8 ${s.accent} transition-transform group-hover:scale-110 duration-500 flex`}
                  style={lang === 'ar' ? { justifyContent: 'flex-end' } : undefined}
                >
                  {s.icon}
                </div>

                <h3
                  className={`text-2xl font-bold mb-2 text-[#F4F3EC] ${
                    lang === 'ar' ? 'font-arabic' : 'poppins-font'
                  }`}
                  style={lang === 'ar' ? arabicStyle : undefined}
                >
                  {s.title}
                </h3>

                <p
                  className={`text-sm font-bold uppercase tracking-widest mb-6 ${s.accent}`}
                  style={lang === 'ar' ? { ...arabicStyle, textTransform: 'none' } : undefined}
                >
                  {s.subtitle}
                </p>

                <p
                  className="text-[#F4F3EC]/70 leading-relaxed mb-8"
                  style={lang === 'ar' ? arabicStyle : undefined}
                >
                  {s.desc}
                </p>

                {/* FOOTER ACTIONS */}
                {!isExpert ? (
                  <button
                    className={`flex items-center gap-2 font-bold text-sm ${s.accent} transition-transform`}
                    style={{
                      ...(lang === 'ar' ? { flexDirection: 'row-reverse' as const } : {}),
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        lang === 'ar' ? 'translateX(-8px)' : 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(0px)';
                    }}
                  >
                    {t.learnMore} <ArrowForward size={16} />
                  </button>
                ) : (
                  <div
                    className="flex items-center justify-between gap-4"
                    style={lang === 'ar' ? { flexDirection: 'row-reverse' } : undefined}
                  >
                    <button
                      onClick={() => navigate('/expert/upload')}
                      className={`flex items-center gap-2 font-bold text-sm ${s.accent} hover:opacity-90 transition`}
                      style={lang === 'ar' ? { flexDirection: 'row-reverse' } : undefined}
                    >
                      {t.uploadExperience} <ArrowForward size={16} />
                    </button>

                    <button
                      onClick={() => navigate('/student/pricing')}
                      className="flex items-center gap-2 font-bold text-sm text-[#F4F3EC]/70 hover:text-[#F4F3EC] transition"
                      style={lang === 'ar' ? { flexDirection: 'row-reverse' } : undefined}
                    >
                      {t.earnExperience} <ArrowBack size={16} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
