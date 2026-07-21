import { useState } from 'react';
import {
  Landmark,
  ShieldCheck,
  Globe,
  Award,
  BookOpen,
  HeartHandshake,
  MapPin,
  Sparkles,
  Compass,
  ArrowUpRight,
  Check,
  Building2,
  Phone,
  Mail,
  Scale
} from 'lucide-react';

import { translations, Language } from './data/scholarshipData';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import StatsShowcase from './components/StatsShowcase';
import EligibilityChecker from './components/EligibilityChecker';
import JourneySlider from './components/JourneySlider';
import UniversityShowcase from './components/UniversityShowcase';
import FieldsGrid from './components/FieldsGrid';
import SuccessCarousel from './components/SuccessCarousel';
import FaqAccordion from './components/FaqAccordion';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const t = translations[lang];

  return (
    <div id="home" className="min-h-screen bg-slate-50 text-slate-900 selection:bg-kz-sky/20 scroll-smooth">
      {/* Premium Header Nav */}
      <Header currentLang={lang} onLangChange={setLang} t={t.header} />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-12 sm:pb-16 overflow-hidden">
        {/* Immersive background with Nur-Sultan architecture and warm natural lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?auto=format&fit=crop&q=80&w=1600"
            alt="Astana Bayterek Monument Kazakhstan"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-102 brightness-[0.88] contrast-[1.02]"
          />
          {/* Elegant geometric premium gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-950/45" />
          
          {/* Subtle slow pulsing sun flare accent */}
          <div className="absolute top-[15%] left-[45%] w-96 h-96 bg-kz-sky/15 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Content Container */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Mission Statement & Typography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-white">
              {/* Official Gold Government Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md animate-fadeIn">
                <Landmark className="w-4 h-4 text-kz-gold" />
                <span className="font-display font-bold text-[10px] sm:text-xs tracking-wider uppercase text-kz-sky">
                  {t.hero.badge}
                </span>
              </div>

              {/* Large editorial typography */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                  {t.hero.titleFirst}
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-kz-sky via-sky-300 to-kz-gold mt-1">
                    {t.hero.titleSecond}
                  </span>
                </h1>
                
                <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#eligibility-evaluator"
                  className="bg-linear-to-r from-kz-sky to-kz-royal hover:brightness-105 hover:shadow-lg text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-4 rounded-xl text-center cursor-pointer transition-all active:scale-[0.98]"
                >
                  {t.hero.ctaPrimary}
                </a>
                
                <a
                  href="#partner-universities"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-4 rounded-xl text-center cursor-pointer transition-all"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Right Column: Floating Premium Details Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel-dark rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden text-white">
                {/* Floating shine effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                <div className="space-y-5">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-display font-extrabold text-sm tracking-tight text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-kz-sky" />
                      {t.hero.coverageTitle}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {t.hero.deadlineStatusOpen}
                    </span>
                  </div>

                  {/* Bullet Benefits list */}
                  <ul className="space-y-2.5">
                    {t.hero.coverageItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="p-0.5 bg-kz-sky/20 border border-kz-sky/35 text-kz-sky rounded-full mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-sans font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Countdown Timer Area */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-display">
                        {t.hero.deadlineTitle}
                      </span>
                    </div>

                    {/* Interactive Countdown */}
                    <CountdownTimer
                      labels={{
                        days: t.hero.days,
                        hours: t.hero.hours,
                        minutes: t.hero.minutes,
                        seconds: t.hero.seconds
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar below hero */}
      <section className="relative z-20 -mt-10 max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100 flex flex-wrap gap-y-4 justify-between items-center">
          {/* Ministry Seal */}
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl text-slate-700">
              <Landmark className="w-5 h-5 text-kz-royal animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase leading-none">
                Official Authority
              </p>
              <h3 className="font-display font-black text-xs sm:text-sm text-slate-800 tracking-tight mt-1 leading-tight">
                {t.trustBar.ministry}
              </h3>
            </div>
          </div>

          {/* Key Trust Flags */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] text-slate-500 font-semibold font-display">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {t.trustBar.program}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-kz-sky" />
              {t.trustBar.welcome}
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-kz-gold" />
              {t.trustBar.transparent}
            </span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <StatsShowcase stats={t.stats} />
      </section>

      {/* Eligibility Checker Immersive tool (Stripe design system inspired) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Pitch column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kz-sky/10 border border-kz-sky/20 text-[10px] font-mono font-bold text-kz-royal uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Pre-admission audit
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A transparent start.
              <span className="block text-kz-royal mt-1">Know your standing instantly.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              Unlike legacy government systems with complex bureaucratic barriers, our digital platform filters candidates meritocratically. Check your preliminary criteria rating before compiling documents.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <div className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center text-[10px] font-mono font-extrabold">1</div>
                <span>Free and non-binding evaluation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <div className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center text-[10px] font-mono font-extrabold">2</div>
                <span>Aligned with Bologna Process rules</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator column */}
          <div className="lg:col-span-7">
            <EligibilityChecker t={t.eligibilityChecker} />
          </div>
        </div>
      </section>

      {/* Why Study in Kazakhstan layout with large photography */}
      <section id="why-kazakhstan" className="bg-slate-100 border-y border-slate-200/40 py-20 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          
          {/* Section Header */}
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest">
              Explore Eurasia's Hub
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.whyKazakhstan.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t.whyKazakhstan.subtitle}
            </p>
          </div>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left side: Large photography */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] lg:min-h-auto shadow-sm">
              <img
                src="https://i.postimg.cc/8chfgZby/unnamed-(1).jpg"
                alt="Big Almaty Lake Kazakhstan"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Bottom tag overlays */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-kz-sky uppercase">
                  <Compass className="w-3.5 h-3.5" />
                  Big Almaty Lake, Tien Shan
                </div>
                <h4 className="font-display font-bold text-lg leading-tight">
                  Europe meets Asia under blue sky.
                </h4>
              </div>
            </div>

            {/* Right side: Bento cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.whyKazakhstan.reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/50 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="text-[9px] font-mono font-extrabold text-kz-royal uppercase tracking-widest bg-slate-100 border border-slate-200/35 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <h3 className="font-display font-bold text-sm text-slate-800 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Scholarship Benefits (Glass cards) */}
      <section id="benefits" className="max-w-[1320px] mx-auto px-4 sm:px-6 py-20 sm:py-24 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest">
            Elite Package
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.benefits.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.benefits.items.map((benefit, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card top border beam */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-linear-to-r from-transparent via-slate-100 to-transparent group-hover:via-kz-sky/40 transition-all" />

              <div className="space-y-4">
                {/* Custom glowing icons container */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-kz-royal group-hover:text-white transition-all duration-300">
                  <HeartHandshake className="w-5 h-5 group-hover:scale-105 transition-transform" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-800 text-sm sm:text-base leading-tight group-hover:text-kz-royal transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>

              {/* Card Bottom status detail */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-mono font-bold text-slate-400">
                <span>STIPEND MATRIX</span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {benefit.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Journey Section (Horizontal timeline) */}
      <section className="bg-slate-950 text-white py-20 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold text-kz-sky uppercase tracking-widest">
              Digital Admissions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              {t.journey.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.journey.subtitle}
            </p>
          </div>

          {/* Interactive Horizontal Timeline Slider */}
          <JourneySlider t={t.journey} />
        </div>
      </section>

      {/* Partner Universities section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 py-20 sm:py-24 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest">
            Zenith Academies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.universities.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {t.universities.subtitle}
          </p>
        </div>

        {/* Showcase Cards list with interactive overlay drawers */}
        <UniversityShowcase t={t.universities} />
      </section>

      {/* Fields of Study section */}
      <section className="bg-slate-100 border-y border-slate-200/40 py-20 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest">
              Academic Curriculums
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.fields.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t.fields.subtitle}
            </p>
          </div>

          {/* Interactive fields grid */}
          <FieldsGrid t={t.fields} />
        </div>
      </section>

      {/* Success Stories section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 py-20 sm:py-24 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest">
            Scholar Alumni
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.successStories.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {t.successStories.subtitle}
          </p>
        </div>

        {/* Carousel testmionial list */}
        <SuccessCarousel t={t.successStories} />
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-100 border-y border-slate-200/45 py-20 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold text-kz-royal uppercase tracking-widest">
              Direct Support
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.faqs.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t.faqs.subtitle}
            </p>
          </div>

          {/* Collapsible accordion list */}
          <FaqAccordion t={t.faqs} />
        </div>
      </section>

      {/* Final CTA (Large emotional section) */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-slate-950 text-white border-b border-white/5">
        {/* Subtle background city skyline */}
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan%2C_Kazakhstan.jpg"
            alt="Mausoleum of Khoja Ahmed Yasawi Turkestan Kazakhstan"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        
        {/* Glow vector circle */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-kz-royal/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono font-bold text-kz-sky uppercase tracking-widest">
            Academic Term 2026/2027
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
            {t.cta.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#eligibility-evaluator"
              className="w-full sm:w-auto bg-linear-to-r from-kz-sky to-kz-royal hover:brightness-105 hover:shadow-lg text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl cursor-pointer transition-all text-center"
            >
              {t.cta.btn}
            </a>
            
            <a
              href="#faq-section"
              className="w-full sm:w-auto text-slate-300 hover:text-white font-bold text-xs sm:text-sm px-6 py-4 border border-white/15 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-center"
            >
              Review Deadlines
            </a>
          </div>

          <p className="text-[10px] sm:text-xs text-slate-500 font-sans mt-2.5">
            {t.cta.subtext}
          </p>
        </div>
      </section>

      {/* Official Government Footer */}
      <footer className="bg-slate-950 text-white pt-16 pb-12 relative overflow-hidden">
        {/* Subtle decorative line separating sections */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Government seal description */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-kz-gold" />
                </div>
                <span className="font-display font-black text-xs uppercase tracking-widest text-slate-100">
                  {t.header.title}
                </span>
              </div>
              
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                Official digital academic clearing house of the Republic of Kazakhstan. Empowered under legislative decree to administer global scholarships, Bologna credits, and fast-track student visas.
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 pt-2 font-display">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-kz-sky" />
                  <span>{t.footer.emergency}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-kz-sky" />
                  <span>admissions@highereducation.gov.kz</span>
                </div>
              </div>
            </div>

            {/* Quick Link categories */}
            {t.footer.links.map((category, idx) => (
              <div key={idx} className="lg:col-span-2.5 space-y-3.5">
                <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">
                  {category.title}
                </h4>
                <ul className="space-y-2 text-[11px] font-sans">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="text-slate-400 hover:text-white transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Trademark and policies bar */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-sans">
          <div className="text-center sm:text-left">
            <p>{t.footer.copyright}</p>
            <p className="mt-0.5">{t.footer.dept}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            <a href="#" className="hover:text-slate-400 transition-colors">{t.footer.privacy}</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-slate-400 transition-colors">{t.footer.terms}</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-slate-400 transition-colors">{t.footer.accessibility}</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-slate-400 transition-colors">{t.footer.support}</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
