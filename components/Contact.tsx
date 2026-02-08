import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
  t: any;
}

const arabicBlock = (lang: Language) =>
  lang === 'ar'
    ? ({
        direction: 'rtl' as const,
        textAlign: 'right' as const,
        fontFamily: `'Cairo', 'Tajawal', 'Segoe UI', sans-serif`,
      } as const)
    : undefined;

// ✅ keep emails/phones/addresses LTR even inside RTL containers
const ltrKeep = {
  direction: 'ltr' as const,
  unicodeBidi: 'isolate' as const,
  textAlign: 'left' as const,
  fontFamily: `'Segoe UI', Arial, sans-serif`,
};

const Contact: React.FC<ContactProps> = ({ lang, t }) => {
  return (
    <div className="py-24 px-6" style={arabicBlock(lang)}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT INFO */}
          <div style={arabicBlock(lang)}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F4F3EC]">
              {t.title}
            </h2>
            <p className="text-xl text-[#F4F3EC]/60 mb-12">{t.desc}</p>

            <div className="space-y-8">
              {/* EMAIL */}
              <div
                className="flex items-center gap-6"
                
              >
                <div className="w-12 h-12 rounded-full bg-[#1E3A75] flex items-center justify-center text-[#1BC5FF]">
                  <Mail size={20} />
                </div>

                <div style={arabicBlock(lang)}>
                  <p className="text-xs text-[#F4F3EC]/40 uppercase tracking-widest font-bold">
                    {t.info.email}
                  </p>
                  {/* ✅ keep value LTR */}
                  <p className="text-[#F4F3EC]" style={ltrKeep}>
                    support@queneu.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div
                className="flex items-center gap-6"
                
              >
                <div className="w-12 h-12 rounded-full bg-[#1E3A75] flex items-center justify-center text-[#D4A048]">
                  <Phone size={20} />
                </div>

                <div style={arabicBlock(lang)}>
                  <p className="text-xs text-[#F4F3EC]/40 uppercase tracking-widest font-bold">
                    {t.info.call}
                  </p>
                  {/* ✅ keep value LTR + not mirrored */}
                  <p className="text-[#F4F3EC]" style={ltrKeep}>
                    +971 52 243 5734
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div
                className="flex items-center gap-6"
                
              >
                <div className="w-12 h-12 rounded-full bg-[#1E3A75] flex items-center justify-center text-[#C69C98]">
                  <MapPin size={20} />
                </div>

                <div style={arabicBlock(lang)}>
                  <p className="text-xs text-[#F4F3EC]/40 uppercase tracking-widest font-bold">
                    {t.info.visit}
                  </p>
                  {/* ✅ keep value LTR */}
                  <p className="text-[#F4F3EC]" style={ltrKeep}>
                    Al Ain - Abu Dhabi, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0C1A3B] p-10 rounded-[2rem] border border-[#1E3A75] shadow-2xl">
            <form className="space-y-6" style={arabicBlock(lang)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#F4F3EC]/40 uppercase tracking-widest mb-2">
                    {t.labels.name}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-[#1E3A75] rounded-xl px-5 py-3 text-[#F4F3EC] focus:outline-none focus:border-[#1BC5FF]"
                    style={lang === 'ar' ? { textAlign: 'right' } : undefined}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#F4F3EC]/40 uppercase tracking-widest mb-2">
                    {t.labels.company}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-[#1E3A75] rounded-xl px-5 py-3 text-[#F4F3EC] focus:outline-none focus:border-[#1BC5FF]"
                    style={lang === 'ar' ? { textAlign: 'right' } : undefined}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#F4F3EC]/40 uppercase tracking-widest mb-2">
                  {t.labels.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-[#0A0A0A] border border-[#1E3A75] rounded-xl px-5 py-3 text-[#F4F3EC] focus:outline-none focus:border-[#1BC5FF]"
                  // ✅ email input remains LTR naturally
                  style={ltrKeep}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#F4F3EC]/40 uppercase tracking-widest mb-2">
                  {t.labels.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0A0A0A] border border-[#1E3A75] rounded-xl px-5 py-3 text-[#F4F3EC] focus:outline-none focus:border-[#1BC5FF]"
                  placeholder={t.placeholders.message}
                  style={lang === 'ar' ? { direction: 'rtl', textAlign: 'right' } : undefined}
                />
              </div>

              <button className="w-full bg-[#D4A048] hover:bg-[#D4A048]/80 text-[#0C1A3B] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                {t.labels.send}
                {/* ✅ arrow direction without rtl: */}
                <Send
                  size={18}
                  style={lang === 'ar' ? { transform: 'rotate(180deg)' } : undefined}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
