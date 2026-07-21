import React, { useState } from 'react';
import { Cpu, Terminal, Stethoscope, TrendingUp, Atom, Scale, Check, ChevronRight } from 'lucide-react';

interface Field {
  id: string;
  icon: string;
  name: string;
  desc: string;
  subfields: string[];
}

interface FieldsGridProps {
  t: {
    title: string;
    subtitle: string;
    list: Field[];
  };
}

export default function FieldsGrid({ t }: FieldsGridProps) {
  const [selectedId, setSelectedId] = useState<string>('eng');

  // Map string to Lucide Icons
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Stethoscope: <Stethoscope className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Atom: <Atom className="w-5 h-5" />,
    Scale: <Scale className="w-5 h-5" />,
  };

  // Specific additional statistics about each field of study under the government scholarship
  const fieldExtras: Record<string, { quota: string; salary: string; targetUni: string }> = {
    eng: {
      quota: "150 Annual Scholarships",
      salary: "High international employment index",
      targetUni: "Nazarbayev University, Satbayev University"
    },
    cs: {
      quota: "200 Annual Scholarships",
      salary: "Prestige global demand",
      targetUni: "Astana IT University, Nazarbayev University"
    },
    med: {
      quota: "100 Annual Scholarships",
      salary: "Direct clinical researcher placements",
      targetUni: "Nazarbayev University School of Medicine"
    },
    bus: {
      quota: "120 Annual Scholarships",
      salary: "Eurasian investment banking priority",
      targetUni: "KIMEP University, Al-Farabi National Uni"
    },
    nat: {
      quota: "80 Annual Scholarships",
      salary: "Direct global labs and CERN affiliations",
      targetUni: "Al-Farabi National Uni, Satbayev University"
    },
    law: {
      quota: "60 Annual Scholarships",
      salary: "Diplomatic and consulate priority tracks",
      targetUni: "Maqsut Narikbayev University"
    }
  };

  const activeField = t.list.find((f) => f.id === selectedId) || t.list[0];

  return (
    <div id="fields-of-study" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Category selector grid */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {t.list.map((field) => {
          const isSelected = field.id === selectedId;
          return (
            <button
              key={field.id}
              onClick={() => setSelectedId(field.id)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer group ${
                isSelected
                  ? 'bg-white border-kz-royal shadow-md ring-1 ring-kz-royal'
                  : 'bg-white/85 border-slate-100 hover:border-slate-200 hover:bg-white shadow-2xs'
              }`}
            >
              <div
                className={`p-2.5 rounded-xl border transition-colors ${
                  isSelected
                    ? 'bg-kz-royal border-kz-royal text-white'
                    : 'bg-slate-50 border-slate-100 text-slate-500 group-hover:bg-slate-100'
                }`}
              >
                {iconMap[field.icon] || <Cpu className="w-5 h-5" />}
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-kz-royal transition-colors">
                  {field.name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">
                  {field.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected category immersive details pane */}
      <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden h-full min-h-[420px] flex flex-col justify-between">
        {/* Ambient top gold flare */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-kz-gold/5 rounded-full blur-2xl" />

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
              {iconMap[activeField.icon]}
            </div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
              Discipline Profile
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight">
            {activeField.name}
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            {activeField.desc}
          </p>

          {/* Subfield Bullets */}
          <div className="space-y-2.5 pt-4 border-t border-slate-100">
            <h4 className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
              Specialized Electives Available:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeField.subfields.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="line-clamp-1">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ministry Metrics */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <h4 className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
              Scholarship Allocation Details:
            </h4>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1.5 font-sans text-slate-600">
              <div className="flex justify-between">
                <span>Annual Allocation Quota:</span>
                <span className="font-bold text-slate-800">{fieldExtras[activeField.id]?.quota}</span>
              </div>
              <div className="flex justify-between">
                <span>Preferred Universities:</span>
                <span className="font-bold text-slate-800">{fieldExtras[activeField.id]?.targetUni}</span>
              </div>
              <div className="flex justify-between">
                <span>Career Horizon:</span>
                <span className="font-bold text-slate-800">{fieldExtras[activeField.id]?.salary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-5 mt-auto">
          <a
            href="#eligibility-evaluator"
            className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl py-3 text-xs flex items-center justify-center gap-1 transition-all cursor-pointer shadow-xs"
          >
            Check My Eligibility for {activeField.name.split(' ')[0]}
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
