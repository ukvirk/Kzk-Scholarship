import { useState } from 'react';
import { Check, Info, FileCheck, ArrowRight, Video, Medal, Landmark } from 'lucide-react';

interface JourneySliderProps {
  t: {
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
      docRequired?: string;
    }[];
  };
}

export default function JourneySlider({ t }: JourneySliderProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Custom step icons mapped to each state
  const stepIcons = [
    <Info key="0" className="w-5 h-5 text-kz-sky" />,
    <FileCheck key="1" className="w-5 h-5 text-kz-royal" />,
    <FileCheck key="2" className="w-5 h-5 text-indigo-500" />,
    <Landmark key="3" className="w-5 h-5 text-emerald-600" />,
    <FileCheck key="4" className="w-5 h-5 text-cyan-600" />,
    <Video key="5" className="w-5 h-5 text-purple-600" />,
    <Medal key="6" className="w-5 h-5 text-kz-gold" />,
    <Landmark key="7" className="w-5 h-5 text-slate-700" />,
  ];

  // Specific high-value detailed tips for Kazakh scholarships based on step
  const stepDetails = [
    {
      tip: "Ensure your primary passport has at least 18 months of remaining validity before starting.",
      timeline: "Done instantly via our portal",
      urgency: "Prerequisite"
    },
    {
      tip: "Provide a stable institutional email address. University servers occasionally block free domains.",
      timeline: "Takes ~2 minutes",
      urgency: "Immediate"
    },
    {
      tip: "All transcripts must be certified by your home institution. Translate to English or Kazakh with official notary stamp.",
      timeline: "Takes ~5 days to prepare",
      urgency: "Highly Critical"
    },
    {
      tip: "Research separate programs at Nazarbayev University or Al-Farabi carefully to match your research proposal with existing department projects.",
      timeline: "Takes ~1 day of reading",
      urgency: "Important"
    },
    {
      tip: "Brush up on analytical logic and basic quantitative statistics. Our exam is entirely remote and strictly proctored by AI camera systems.",
      timeline: "45 minutes duration",
      urgency: "Pre-Exam"
    },
    {
      tip: "Present your research or academic plans with confidence. Explain how studying in Kazakhstan helps you connect your region to the Caspian Sea markets.",
      timeline: "15 minutes via Zoom/Teams",
      urgency: "Pre-Interview"
    },
    {
      tip: "Official physical certificates will be dispatched to your nearest embassy of Kazakhstan in your home country.",
      timeline: "Delivered via diplomatic bag",
      urgency: "Final Step"
    },
    {
      tip: "Ministry letters fast-track your visa. Complete safety checks at your local Kazakh consulate inside 72 hours of receiving invite.",
      timeline: "Takes ~10 days",
      urgency: "Arrival Prep"
    }
  ];

  return (
    <div id="application-matrix" className="space-y-8">
      {/* Dynamic Steps Header Track */}
      <div className="relative flex items-center justify-between overflow-x-auto pb-4 pt-2 -mx-4 px-4 scrollbar-none">
        {/* Horizontal Progress Line behind */}
        <div className="absolute top-[28px] left-8 right-8 h-[2px] bg-slate-100 -z-10 hidden md:block" />
        
        {t.steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;

          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="flex-1 min-w-[120px] flex flex-col items-center text-center focus:outline-hidden cursor-pointer group px-2"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isActive
                    ? 'bg-kz-royal border-kz-royal text-white shadow-md shadow-kz-royal/20 scale-110'
                    : isCompleted
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600'
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <span className="font-mono text-xs font-bold">{step.step}</span>}
              </div>

              <span
                className={`text-[11px] font-semibold mt-2.5 tracking-tight font-display transition-colors line-clamp-1 ${
                  isActive ? 'text-kz-royal font-bold' : 'text-slate-400 group-hover:text-slate-600'
                }`}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detailed View Card */}
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
        {/* Ambient background decoration */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-kz-sky/5 rounded-full blur-3xl" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* Icon and metadata column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest bg-white border border-slate-100 px-3 py-1.5 rounded-lg shadow-2xs">
              Phase {t.steps[activeStep].step}
            </span>
            
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-2xl shadow-xs border border-slate-100">
                {stepIcons[activeStep]}
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 leading-tight">
                {t.steps[activeStep].title}
              </h4>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Critical Requirement:</span>
                <span className="font-mono text-slate-700 font-bold bg-white px-2 py-0.5 rounded border border-slate-100">
                  {t.steps[activeStep].docRequired || 'N/A'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Time Horizon:</span>
                <span className="text-slate-700 font-semibold">{stepDetails[activeStep].timeline}</span>
              </div>
            </div>
          </div>

          {/* Description and Expert Guidelines column */}
          <div className="md:col-span-8 flex flex-col justify-between space-y-6 md:pl-6 md:border-l border-slate-200/50">
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {t.steps[activeStep].desc}
              </p>

              <div className="bg-white/80 rounded-2xl p-4 border border-slate-100 flex gap-3 items-start">
                <div className="bg-kz-gold/10 p-1.5 rounded-lg text-amber-600 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                    Ministry Advisory ({stepDetails[activeStep].urgency})
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {stepDetails[activeStep].tip}
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="flex justify-between items-center pt-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => prev - 1)}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 disabled:opacity-30 cursor-pointer"
              >
                Previous Stage
              </button>
              
              <div className="flex items-center gap-1.5">
                {t.steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeStep ? 'w-5 bg-kz-royal' : 'w-1.5 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              {activeStep < t.steps.length - 1 ? (
                <button
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 transition-all shadow-xs cursor-pointer"
                >
                  Next Phase
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href="#eligibility-evaluator"
                  className="bg-kz-royal text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 transition-all shadow-xs cursor-pointer"
                >
                  Start Applying
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
