import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';

interface EligibilityCheckerProps {
  t: {
    title: string;
    subtitle: string;
    countryLabel: string;
    degreeLabel: string;
    gpaLabel: string;
    ieltsLabel: string;
    checkBtn: string;
    resultEligible: string;
    resultIneligible: string;
    resultTitle: string;
    coverageDetails: string;
    requirementsTitle: string;
  };
}

export default function EligibilityChecker({ t }: EligibilityCheckerProps) {
  const [country, setCountry] = useState('Germany');
  const [degree, setDegree] = useState('Master');
  const [gpa, setGpa] = useState('3.7');
  const [ielts, setIelts] = useState('7.0');
  const [result, setResult] = useState<{
    evaluated: boolean;
    eligible: boolean;
    score: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const gpaNum = parseFloat(gpa);
      const ieltsNum = parseFloat(ielts);
      
      // Eligibility criteria logic
      const isGpaEligible = gpaNum >= 3.0;
      const isIeltsEligible = ieltsNum >= 5.5;
      const isEligible = isGpaEligible && isIeltsEligible;
      
      let matchScore = 100;
      if (gpaNum < 3.5) matchScore -= 15;
      if (gpaNum < 3.0) matchScore -= 30;
      if (ieltsNum < 6.5) matchScore -= 15;
      if (ieltsNum < 5.5) matchScore -= 30;

      setResult({
        evaluated: true,
        eligible: isEligible,
        score: Math.max(matchScore, 20),
      });
      setLoading(false);
    }, 600);
  };

  const countriesList = [
    'Germany', 'Japan', 'United States', 'United Kingdom', 'Canada', 
    'Turkey', 'Poland', 'Nigeria', 'South Korea', 'China', 'France',
    'Italy', 'Brazil', 'India', 'Egypt', 'Singapore', 'Other'
  ];

  return (
    <div id="eligibility-evaluator" className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl glow-subtle">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-kz-sky/10 rounded-xl text-kz-royal">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight">
            {t.title}
          </h3>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            {t.subtitle}
          </p>
        </div>
      </div>

      {!result ? (
        <form onSubmit={handleEvaluate} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Country */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 font-display">
                {t.countryLabel}
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 text-slate-800 text-sm font-medium rounded-xl px-4 py-3 focus:outline-hidden focus:border-kz-sky focus:bg-white transition-all cursor-pointer"
              >
                {countriesList.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Target Degree */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 font-display">
                {t.degreeLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Bachelor', 'Master', 'PhD'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDegree(d)}
                    className={`text-xs py-3 font-semibold rounded-xl border transition-all ${
                      degree === d
                        ? 'bg-kz-royal border-kz-royal text-white shadow-xs'
                        : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100/50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* GPA Scale */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 font-display">
                {t.gpaLabel} (4.0 scale)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2.0"
                  max="4.0"
                  step="0.1"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  className="w-full accent-kz-royal cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                />
                <span className="font-mono text-sm font-bold bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg min-w-[50px] text-center">
                  {gpa}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-sans">
                Minimum required GPA is 3.0 / 4.0 (or 75% equivalent)
              </p>
            </div>

            {/* Language proficiency */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 font-display">
                {t.ieltsLabel} (or equivalent)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="4.5"
                  max="9.0"
                  step="0.5"
                  value={ielts}
                  onChange={(e) => setIelts(e.target.value)}
                  className="w-full accent-kz-sky cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                />
                <span className="font-mono text-sm font-bold bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg min-w-[50px] text-center">
                  {ielts}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-sans">
                Minimum recommended IELTS Academic band is 5.5
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-linear-to-r from-kz-sky to-kz-royal hover:shadow-lg text-white font-semibold rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-105 active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Calculating Portfolio Scores...
              </>
            ) : (
              <>
                {t.checkBtn}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="space-y-6 animate-fadeIn">
          {/* Result Banner */}
          <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
            result.eligible 
              ? 'bg-emerald-50/50 border-emerald-100 text-emerald-800' 
              : 'bg-amber-50/50 border-amber-100 text-amber-800'
          }`}>
            <div className={`p-2 rounded-xl mt-0.5 ${
              result.eligible ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {result.eligible ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider opacity-80">
                {t.resultTitle}
              </span>
              <h4 className="font-display font-bold text-lg leading-snug">
                {result.eligible ? t.resultEligible : t.resultIneligible}
              </h4>
              <p className="text-xs opacity-90 leading-relaxed max-w-lg">
                {result.eligible ? t.coverageDetails : "Your scores are slightly below recommended parameters. Don't worry! Kazakhstan looks for diverse profiles; check requirements of humanities or prepare language support programs."}
              </p>
            </div>
          </div>

          {/* Detailed requirements */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
            <h5 className="text-xs font-bold text-slate-700 font-display">
              PROFILE STRENGTH METER:
            </h5>
            <div className="flex items-center gap-3">
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    result.score >= 80 ? 'bg-emerald-500' : 'bg-amber-500'
                  }`} 
                  style={{ width: `${result.score}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-slate-600 min-w-[35px]">
                {result.score}%
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              {result.eligible ? t.requirementsTitle : "We recommend checking Al-Farabi University foundation years which waive strict language profiles initially, or applying for corporate pathways."}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setResult(null)}
              className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Re-evaluate
            </button>
            {result.eligible && (
              <a
                href="#application-matrix"
                className="flex-2 bg-kz-royal text-white text-xs font-bold py-3 rounded-xl hover:bg-kz-royal/95 hover:shadow-md transition-all text-center flex items-center justify-center gap-1"
              >
                Proceed to Journey
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
