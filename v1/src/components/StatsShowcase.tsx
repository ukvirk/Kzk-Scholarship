import { useState, useEffect } from 'react';
import { Globe, FileText, Landmark, Award } from 'lucide-react';

interface StatsShowcaseProps {
  stats: {
    countries: string;
    countriesSub: string;
    applications: string;
    applicationsSub: string;
    universities: string;
    universitiesSub: string;
    successRate: string;
    successRateSub: string;
  };
}

export default function StatsShowcase({ stats }: StatsShowcaseProps) {
  // Simple simulation of animated counter values
  const [countriesCount, setCountriesCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);

  useEffect(() => {
    const duration = 1200; // ms
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing out function
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountriesCount(Math.floor(ease * 110));
      setAppsCount(Math.floor(ease * 42000));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const metricCards = [
    {
      icon: <Globe className="w-5 h-5 text-kz-sky" />,
      value: `${countriesCount}+`,
      title: stats.countriesSub,
      detail: "Top origins: Germany, Japan, Turkey, Poland, Nigeria",
      barFill: "w-[85%]"
    },
    {
      icon: <FileText className="w-5 h-5 text-kz-royal" />,
      value: `${appsCount.toLocaleString()}`,
      title: stats.applicationsSub,
      detail: "Global pool processed completely online",
      barFill: "w-[92%]"
    },
    {
      icon: <Landmark className="w-5 h-5 text-emerald-600" />,
      value: stats.universities,
      title: stats.universitiesSub,
      detail: "All offering internationally certified courses",
      barFill: "w-[75%]"
    },
    {
      icon: <Award className="w-5 h-5 text-kz-gold" />,
      value: stats.successRate,
      title: stats.successRateSub,
      detail: "Rigorous standards filtering elite potential",
      barFill: "w-[15%]"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricCards.map((card, i) => (
        <div
          key={i}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-slate-200"
        >
          {/* Subtle indicator beam */}
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-linear-to-r from-transparent via-slate-100 to-transparent group-hover:via-kz-sky/40 transition-all" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-all duration-300">
              {card.icon}
            </div>
            <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 bg-slate-100/50 px-2.5 py-1 rounded-full uppercase">
              Official Data
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-mono text-3xl font-bold text-slate-900 tracking-tight">
              {card.value}
            </h3>
            <p className="text-sm font-semibold text-slate-700 font-display">
              {card.title}
            </p>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              {card.detail}
            </p>
          </div>

          {/* Sparkline-like progress bar below */}
          <div className="mt-5 pt-4 border-t border-slate-50">
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full bg-linear-to-r from-kz-sky to-kz-royal rounded-full ${card.barFill} transition-all duration-1000 ease-out`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
