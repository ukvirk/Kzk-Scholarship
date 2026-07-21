import { useState } from 'react';
import { Quote, Landmark, Award, ArrowLeft, ArrowRight } from 'lucide-react';

interface Story {
  name: string;
  country: string;
  flag: string;
  university: string;
  degree: string;
  quote: string;
  avatar: string;
  currentRole: string;
}

interface SuccessCarouselProps {
  t: {
    title: string;
    subtitle: string;
    stories: Story[];
  };
}

export default function SuccessCarousel({ t }: SuccessCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % t.stories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + t.stories.length) % t.stories.length);
  };

  const activeStory = t.stories[activeIndex];

  return (
    <div id="success-stories" className="space-y-8">
      {/* Immersive Testimonial Layout */}
      <div className="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden min-h-[380px] flex flex-col justify-between">
        {/* Quote symbol mark in background */}
        <Quote className="absolute -right-6 -top-6 w-40 h-40 text-slate-100/50 -z-0 select-none pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Portrait bubble / avatar Column */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-linear-to-r from-kz-sky via-kz-gold to-kz-royal shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-50">
                <img
                  src={activeStory.avatar}
                  alt={activeStory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-2 right-2 text-2xl sm:text-3xl bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center border border-slate-100 select-none">
                {activeStory.flag}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-slate-900 text-lg sm:text-xl mt-4 leading-tight">
              {activeStory.name}
            </h4>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Alumnus from {activeStory.country}
            </p>
          </div>

          {/* Core quote text and details column */}
          <div className="md:col-span-8 space-y-6 md:pl-6 md:border-l border-slate-200/50">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/40 text-[10px] font-mono font-bold text-slate-500 uppercase">
                <Award className="w-3 h-3 text-kz-gold" />
                Global Career Placement
              </span>

              <p className="text-sm sm:text-base font-medium text-slate-700 italic leading-relaxed font-sans">
                "{activeStory.quote}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-bold">
                  Host Academy
                </span>
                <p className="text-xs font-bold text-slate-800 flex items-center gap-1 font-display">
                  <Landmark className="w-3.5 h-3.5 text-kz-royal" />
                  {activeStory.university}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  {activeStory.degree}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-bold">
                  Current Position
                </span>
                <p className="text-xs font-bold text-slate-800 font-display">
                  {activeStory.currentRole}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">
                  Active Professional
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel slide controls */}
        <div className="flex justify-between items-center pt-8 mt-6 border-t border-slate-100 relative z-10">
          <div className="flex gap-2.5">
            {t.stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === activeIndex ? 'w-8 bg-kz-royal' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
