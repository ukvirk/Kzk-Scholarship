import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  t: {
    title: string;
    subtitle: string;
    list: FaqItem[];
  };
}

export default function FaqAccordion({ t }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="space-y-6">
      <div className="space-y-4">
        {t.list.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xs hover:shadow-sm"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-hidden"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-1.5 bg-slate-50 text-slate-400 rounded-lg group-hover:text-slate-600">
                    <HelpCircle className="w-4 h-4 text-kz-sky" />
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base text-slate-800 leading-snug">
                    {item.q}
                  </span>
                </div>
                <span className="text-slate-400">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-kz-royal" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[300px] border-t border-slate-50' : 'max-h-0'
                }`}
              >
                <div className="p-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans bg-slate-50/40">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
