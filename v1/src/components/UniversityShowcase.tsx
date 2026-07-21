import { useState } from 'react';
import { Landmark, Award, BookOpen, Calendar, MapPin, X, ExternalLink, ShieldCheck } from 'lucide-react';

interface University {
  id: string;
  name: string;
  shortName: string;
  logoBg: string;
  location: string;
  ranking: string;
  founded: string;
  image: string;
  programsCount: number;
  featuredPrograms: string[];
  description: string;
}

interface UniversityShowcaseProps {
  t: {
    title: string;
    subtitle: string;
    tags: {
      location: string;
      founded: string;
      programs: string;
      ranking: string;
    };
    list: University[];
  };
}

export default function UniversityShowcase({ t }: UniversityShowcaseProps) {
  const [selectedUni, setSelectedUni] = useState<University | null>(null);

  // Custom university stats/facts for interactive drawers
  const universityStats: Record<string, { labCount: string; ratio: string; researchBudget: string; motto: string }> = {
    nu: {
      labCount: "120+ High-Tech Labs",
      ratio: "1:9 Faculty-to-Student Ratio",
      researchBudget: "$45M+ Research Funding",
      motto: "Ad Astra (To the Stars via Excellence)"
    },
    kaznu: {
      labCount: "85 Research Centers",
      ratio: "1:12 Faculty-to-Student Ratio",
      researchBudget: "$20M+ Research Funding",
      motto: "Knowledge, Integrity, Progress"
    },
    aitu: {
      labCount: "Cybersecurity & AI Hubs",
      ratio: "1:15 Faculty-to-Student Ratio",
      researchBudget: "$12M+ Research Funding",
      motto: "Innovate, Integrate, Inspire"
    },
    kimep: {
      labCount: "Bloomberg Financial Terminals",
      ratio: "1:10 Faculty-to-Student Ratio",
      researchBudget: "$15M+ Research Funding",
      motto: "Education to Change Society"
    }
  };

  return (
    <div id="partner-universities" className="space-y-10">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.list.map((uni) => (
          <div
            key={uni.id}
            onClick={() => setSelectedUni(uni)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Photo Banner with subtle zoom */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                
                {/* Short logo bubble and metadata */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-100 text-slate-900 font-mono text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs">
                  {uni.shortName}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-white/80 text-[10px] uppercase font-semibold tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-kz-sky" />
                      {uni.location}
                    </p>
                    <h4 className="text-white font-display font-bold text-lg leading-tight mt-0.5">
                      {uni.name}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Badges and descriptions */}
              <div className="p-6 space-y-4">
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                  {uni.description}
                </p>

                <div className="grid grid-cols-2 gap-3.5 pt-3 border-t border-slate-100">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                      {t.tags.ranking}
                    </span>
                    <p className="text-xs font-bold text-slate-800 font-display flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-kz-gold" />
                      {uni.ranking}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                      {t.tags.programs}
                    </span>
                    <p className="text-xs font-bold text-slate-800 font-display flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-kz-sky" />
                      {uni.programsCount} Active
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* View details action strip */}
            <div className="bg-slate-50/50 px-6 py-3.5 border-t border-slate-100 flex justify-between items-center group-hover:bg-slate-50 transition-colors">
              <span className="text-[11px] font-bold text-kz-royal uppercase tracking-wider font-display">
                Explore Programs & Requirements
              </span>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform font-mono text-sm font-bold">
                →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Luxury Detail Overlay Modal */}
      {selectedUni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/45 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header image and dismiss */}
            <div className="relative h-48 sm:h-56">
              <img
                src={selectedUni.image}
                alt={selectedUni.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <button
                onClick={() => setSelectedUni(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full border border-white/25 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase font-mono font-bold text-kz-sky tracking-widest">
                  Official Partner Institution
                </span>
                <h3 className="text-white font-display text-xl sm:text-2xl font-bold leading-tight mt-1">
                  {selectedUni.name}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              
              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">
                  About the University
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedUni.description}
                </p>
              </div>

              {/* Research Metrics Bento Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                    Host Location
                  </span>
                  <p className="text-xs font-bold text-slate-700 mt-1 flex items-center gap-1.5 font-display">
                    <MapPin className="w-3.5 h-3.5 text-kz-royal" />
                    {selectedUni.location}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                    Established History
                  </span>
                  <p className="text-xs font-bold text-slate-700 mt-1 flex items-center gap-1.5 font-display">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    Year {selectedUni.founded}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                    QS Rank Prestige
                  </span>
                  <p className="text-xs font-bold text-slate-700 mt-1 flex items-center gap-1.5 font-display">
                    <Award className="w-3.5 h-3.5 text-kz-gold" />
                    {selectedUni.ranking}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                    Faculty Ratio
                  </span>
                  <p className="text-xs font-bold text-slate-700 mt-1 flex items-center gap-1.5 font-display">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {universityStats[selectedUni.id]?.ratio || "1:10 Ratio"}
                  </p>
                </div>
              </div>

              {/* Featured fully funded programs list */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">
                    Priority Fully Funded Fields
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                    {selectedUni.programsCount} English Tracks
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedUni.featuredPrograms.map((prog, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 font-medium text-xs px-3 py-1.5 rounded-xl border border-slate-200/40 font-display"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quality Seal */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex gap-3 items-center">
                <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-700 font-display">
                    Accredited Bologna Process Accord
                  </h5>
                  <p className="text-[11px] text-slate-500 font-sans leading-tight mt-0.5">
                    Degrees awarded by this university are fully transferable, accredited, and recognized across Europe and North America.
                  </p>
                </div>
              </div>

            </div>

            {/* Drawer Action Bar */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <span className="text-[11px] text-slate-400 font-medium text-center sm:text-left">
                Select this partner school during Phase 4 of the application wizard.
              </span>
              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedUni(null)}
                  className="flex-1 sm:flex-none border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#eligibility-evaluator"
                  onClick={() => setSelectedUni(null)}
                  className="flex-1 sm:flex-none bg-kz-royal text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-kz-royal/95 shadow-sm transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                >
                  Apply Here
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
