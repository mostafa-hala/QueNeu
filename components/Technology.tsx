
import React from 'react';
import { Cpu, Layers, Camera } from 'lucide-react';
import { Language } from '../types';

interface TechnologyProps {
  lang: Language;
  t: any;
}

const Technology: React.FC<TechnologyProps> = ({ lang, t }) => {
  const techs = [
    {
      title: t.capture.title,
      desc: t.capture.desc,
      icon: <Cpu className="w-8 h-8 text-[#1BC5FF]" />
    },
    {
      title: t.synthesis.title,
      desc: t.synthesis.desc,
      icon: <Layers className="w-8 h-8 text-[#D4A048]" />
    },
    {
      title: t.ar.title,
      desc: t.ar.desc,
      icon: <Camera className="w-8 h-8 text-[#1BC5FF]" />
    }
  ];

  return (
    <div className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1BC5FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl rtl:text-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F4F3EC]">{t.title}</h2>
            <p className="text-xl text-[#F4F3EC]/60 italic">{t.sub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techs.map((tech, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1BC5FF] to-[#D4A048] rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
              <div className="relative bg-[#0C1A3B] border border-[#1E3A75] p-10 rounded-2xl rtl:text-right">
                <div className="mb-6 flex rtl:justify-end">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#F4F3EC]">{tech.title}</h3>
                <p className="text-[#F4F3EC]/60 leading-relaxed text-sm">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
