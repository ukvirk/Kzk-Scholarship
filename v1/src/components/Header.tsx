import { useState, useEffect } from 'react';
import { Menu, X, Landmark, Globe, ChevronDown, User } from 'lucide-react';
import { Language } from '../data/scholarshipData';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  t: {
    title: string;
    navHome: string;
    navScholarships: string;
    navUniversities: string;
    navPrograms: string;
    navEligibility: string;
    navJourney: string;
    navFaqs: string;
    navAbout: string;
    login: string;
    register: string;
    langLabel: string;
  };
}

export default function Header({ currentLang, onLangChange, t }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navHome, href: "#home" },
    { label: t.navScholarships, href: "#benefits" },
    { label: t.navUniversities, href: "#partner-universities" },
    { label: t.navPrograms, href: "#fields-of-study" },
    { label: t.navEligibility, href: "#eligibility-evaluator" },
    { label: t.navJourney, href: "#application-matrix" },
    { label: t.navFaqs, href: "#faq-section" },
    { label: t.navAbout, href: "#why-kazakhstan" }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'EN', label: 'English' },
    { code: 'KK', label: 'Қазақша' },
    { code: 'RU', label: 'Русский' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-sm py-3.5 border-b border-slate-200/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-kz-sky to-kz-royal flex items-center justify-center text-white font-bold shadow-sm shadow-kz-sky/20 group-hover:brightness-105 transition-all">
              <Landmark className="w-5 h-5 text-kz-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xs uppercase tracking-widest text-slate-800 leading-none">
                {t.title}
              </span>
              <span className="font-display font-medium text-[11px] text-kz-royal tracking-tight mt-0.5 leading-none">
                Government Scholarship
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Stripe Style) */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-slate-100/50 hover:bg-slate-100 border border-slate-200/45 p-1 rounded-full transition-colors">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs font-semibold px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/90 transition-all font-display"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Controls */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Lang Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-3 py-2 rounded-xl transition-all shadow-2xs cursor-pointer focus:outline-hidden"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                {languages.find((l) => l.code === currentLang)?.label}
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-white border border-slate-100 rounded-xl shadow-lg py-1.5 z-50 animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLangChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left text-xs font-medium px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between ${
                        currentLang === lang.code ? 'text-kz-royal font-bold bg-slate-50' : 'text-slate-600'
                      }`}
                    >
                      {lang.label}
                      {currentLang === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-kz-royal" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#login"
                className="text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                {t.login}
              </a>
              
              <a
                href="#eligibility-evaluator"
                className="text-xs font-bold bg-kz-royal text-white hover:brightness-105 active:scale-[0.98] px-4 py-2.5 rounded-xl transition-all shadow-sm shadow-kz-royal/20 cursor-pointer"
              >
                {t.register}
              </a>
            </div>

          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Lang switcher icon direct toggle for quick access in mobile */}
            <button
              onClick={() => {
                const nextLang: Record<Language, Language> = { EN: 'KK', KK: 'RU', RU: 'EN' };
                onLangChange(nextLang[currentLang]);
              }}
              className="p-2 border border-slate-200 rounded-xl bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              title="Toggle Language"
            >
              <span className="font-mono text-xs font-extrabold">{currentLang}</span>
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 border border-slate-200 rounded-xl bg-white text-slate-700 hover:text-slate-900 focus:outline-hidden cursor-pointer"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-slate-950/20 backdrop-blur-md animate-fadeIn">
          <div className="absolute top-[65px] left-4 right-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-3.5 py-2.5 rounded-xl transition-all font-display"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Lang and Auth Area */}
            <div className="pt-5 border-t border-slate-100 flex flex-col gap-3">
              {/* Language Selection */}
              <div className="flex justify-between items-center px-3.5 py-1.5">
                <span className="text-xs text-slate-400 font-semibold">{t.langLabel}</span>
                <div className="flex gap-1.5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onLangChange(l.code);
                        setIsMobileOpen(false);
                      }}
                      className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        currentLang === l.code
                          ? 'bg-kz-royal border-kz-royal text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      {l.code}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href="#login"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex-1 text-center font-bold text-slate-700 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5" />
                  {t.login}
                </a>
                
                <a
                  href="#eligibility-evaluator"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex-1 text-center font-bold bg-kz-royal text-white py-3 rounded-xl hover:bg-kz-royal/95 text-xs transition-all shadow-sm"
                >
                  {t.register}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
