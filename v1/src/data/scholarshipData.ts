// Professional data structure for the Kazakhstan Government Scholarship Portal

export type Language = 'EN' | 'KK' | 'RU';

export interface TranslationSet {
  header: {
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
  hero: {
    badge: string;
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    coverageTitle: string;
    coverageItems: string[];
    deadlineTitle: string;
    deadlineStatus: string;
    deadlineStatusOpen: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  eligibilityChecker: {
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
  trustBar: {
    ministry: string;
    program: string;
    welcome: string;
    transparent: string;
  };
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
  whyKazakhstan: {
    title: string;
    subtitle: string;
    reasons: {
      title: string;
      description: string;
      tag: string;
    }[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      detail: string;
    }[];
  };
  journey: {
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
      docRequired?: string;
    }[];
  };
  universities: {
    title: string;
    subtitle: string;
    tags: {
      location: string;
      founded: string;
      programs: string;
      ranking: string;
    };
    list: {
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
    }[];
  };
  fields: {
    title: string;
    subtitle: string;
    list: {
      id: string;
      icon: string;
      name: string;
      desc: string;
      subfields: string[];
    }[];
  };
  successStories: {
    title: string;
    subtitle: string;
    stories: {
      name: string;
      country: string;
      flag: string;
      university: string;
      degree: string;
      quote: string;
      avatar: string;
      currentRole: string;
    }[];
  };
  faqs: {
    title: string;
    subtitle: string;
    list: {
      q: string;
      a: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    btn: string;
    subtext: string;
  };
  footer: {
    dept: string;
    copyright: string;
    privacy: string;
    terms: string;
    accessibility: string;
    support: string;
    emergency: string;
    links: {
      title: string;
      items: { label: string; href: string }[];
    }[];
  };
}

export const translations: Record<Language, TranslationSet> = {
  EN: {
    header: {
      title: "Republic of Kazakhstan",
      navHome: "Home",
      navScholarships: "Scholarships",
      navUniversities: "Universities",
      navPrograms: "Programs",
      navEligibility: "Eligibility",
      navJourney: "Process",
      navFaqs: "FAQs",
      navAbout: "About KZ",
      login: "Sign In",
      register: "Apply Now",
      langLabel: "Language",
    },
    hero: {
      badge: "Government of Kazakhstan Official Scholarship 2026/2027",
      titleFirst: "Study in Kazakhstan.",
      titleSecond: "Shape the Future.",
      subtitle: "Full Government-funded scholarships for exceptional international students pursuing Bachelor's, Master's, and PhD degrees at leading research universities across Kazakhstan.",
      ctaPrimary: "Begin Application",
      ctaSecondary: "Check Eligibility",
      coverageTitle: "Scholarship Coverage",
      coverageItems: [
        "100% Tuition Fees Waived",
        "Generous Monthly Stipend",
        "Free Academic Accommodation",
        "Comprehensive Medical Insurance",
        "Annual Travel Allowance Support"
      ],
      deadlineTitle: "Application Window Closes",
      deadlineStatus: "Status",
      deadlineStatusOpen: "OPEN",
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec"
    },
    eligibilityChecker: {
      title: "Instant Eligibility Evaluator",
      subtitle: "Enter your profile details below to check if you qualify for the scholarship in less than 30 seconds.",
      countryLabel: "Country of Citizenship",
      degreeLabel: "Target Degree",
      gpaLabel: "Academic Grade / GPA",
      ieltsLabel: "English Proficiency (IELTS/Equivalent)",
      checkBtn: "Evaluate My Eligibility",
      resultEligible: "Highly Eligible",
      resultIneligible: "Requires Review",
      resultTitle: "Evaluation Complete",
      coverageDetails: "Congratulations! Your profile matches the primary criteria. You are eligible for a 100% full tuition waiver, monthly stipend, and academic housing.",
      requirementsTitle: "Next steps: Prepare certified copies of your academic transcripts, valid passport, motivational essay, and two reference letters."
    },
    trustBar: {
      ministry: "Ministry of Science and Higher Education",
      program: "Official Government Program",
      welcome: "International Cohorts Welcome",
      transparent: "100% Merit-Based Meritocratic Selection"
    },
    stats: {
      countries: "110+",
      countriesSub: "Global Student Origins",
      applications: "42,000+",
      applicationsSub: "Processed Applications",
      universities: "24",
      universitiesSub: "Elite Host Institutions",
      successRate: "2.4%",
      successRateSub: "Acceptance Prestige Rate"
    },
    whyKazakhstan: {
      title: "Why Kazakhstan?",
      subtitle: "A modern Eurasian technological superpower blending rich historical traditions with elite global research excellence.",
      reasons: [
        {
          title: "Pinnacle Eurasian Tech Hub",
          description: "Kazakhstan is the leading economy of Central Asia. Nur-Sultan (Astana) and Almaty serve as modern epicenters for global finance, technology, and commercial logistics.",
          tag: "Innovation",
        },
        {
          title: "World-Class Academic Quality",
          description: "Home to Nazarbayev University and highly ranked national research universities built on internationally accredited curriculums and instruction entirely in English.",
          tag: "Education",
        },
        {
          title: "Strategic Continental Gateway",
          description: "Positioned at the geographical heart of Eurasia. Living and studying here connects you directly with European, Asian, and Middle Eastern networks.",
          tag: "Geography",
        },
        {
          title: "Unparalleled Natural Splendor",
          description: "From Almaty's snowy alpine peaks and world-famous ski resorts to Charyn Canyon, wild steppes, and pristine lakes. Outdoor beauty is always at your doorstep.",
          tag: "Nature",
        },
        {
          title: "Safe, Welcoming, Multicultural",
          description: "An incredibly stable, secure, and hospitable nation. A peaceful, secular culture where diverse religions, languages, and cultures live in complete harmony.",
          tag: "Society",
        },
        {
          title: "Affordable Cost of Living",
          description: "While cities are ultra-modern, the cost of living is highly affordable, ensuring scholarship stipends comfortably cover all social and lifestyle desires.",
          tag: "Lifestyle",
        }
      ]
    },
    benefits: {
      title: "Unrivaled Scholar Benefits",
      subtitle: "Our program is built to support you completely so you can focus entirely on creating breakthrough academic work.",
      items: [
        {
          title: "100% Free Tuition",
          desc: "Full coverage of all registration, lecture, laboratory, and library fees at your host university.",
          detail: "Zero hidden fees."
        },
        {
          title: "Monthly Cash Stipend",
          desc: "Receive a substantial cash stipend every month to comfortably cover meals, transport, and personal expenses.",
          detail: "Direct deposit monthly."
        },
        {
          title: "Premium Housing",
          desc: "Guaranteed complimentary room in the university's modern residence halls, equipped with full utilities.",
          detail: "Shared or private suites."
        },
        {
          title: "Medical Protection",
          desc: "Comprehensive health insurance covering emergencies, medical consultations, prescriptions, and dental care.",
          detail: "Full year round."
        },
        {
          title: "Eurasian Flight Allowance",
          desc: "Receive annual travel grant assistance to help offset costs of traveling back home during summer breaks.",
          detail: "Eco-class round-trip."
        },
        {
          title: "Post-Graduate Visa Support",
          desc: "Receive automatic fast-tracked residence permits and job search assistance for high-tech sectors in KZ.",
          detail: "1-year extension."
        }
      ]
    },
    journey: {
      title: "The Scholar Journey",
      subtitle: "A transparent, standardized digital admissions process designed to respect and elevate your time.",
      steps: [
        {
          step: "01",
          title: "Evaluate & Filter",
          desc: "Confirm your citizenship, minimum GPA (usually 3.0+ on a 4.0 scale), and target programs.",
          docRequired: "Interactive Check"
        },
        {
          step: "02",
          title: "Digital Registration",
          desc: "Create your official applicant profile on our secure government cloud infrastructure.",
          docRequired: "Email & Passport"
        },
        {
          step: "03",
          title: "Document Upload",
          desc: "Provide electronic scans of verified diplomas, official academic records, and recommendation letters.",
          docRequired: "PDF Documents Only"
        },
        {
          step: "04",
          title: "Select Universities",
          desc: "Choose up to 3 preferred higher education institutions and programs in order of priority.",
          docRequired: "Program Matrix"
        },
        {
          step: "05",
          title: "Academic Assessment",
          desc: "Participate in a short online standardized test assessing analytical thinking and field proficiency.",
          docRequired: "Digital Portal"
        },
        {
          step: "06",
          title: "Expert Panel Interview",
          desc: "Engage in a 15-minute video interview with leading university professors and Ministry representatives.",
          docRequired: "Online Video Call"
        },
        {
          step: "07",
          title: "Prestige Decision",
          desc: "Receive your final official evaluation. Award letters are digitally signed by the Ministry.",
          docRequired: "Official Certificate"
        },
        {
          step: "08",
          title: "Embassy Enrollment",
          desc: "Obtain fast-track premium student visa, assign flight arrangements, and begin your Eurasian dream.",
          docRequired: "Visa Invitation"
        }
      ]
    },
    universities: {
      title: "Premier Partner Universities",
      subtitle: "Study at the absolute zenith of Central Asian academia, offering cutting-edge modern laboratories and global professors.",
      tags: {
        location: "Location",
        founded: "Founded",
        programs: "English Programs",
        ranking: "QS World Rank"
      },
      list: [
        {
          id: "nu",
          name: "Nazarbayev University",
          shortName: "NU",
          logoBg: "bg-blue-900 text-gold",
          location: "Astana (Capital City)",
          ranking: "#1 in Central Asia",
          founded: "2010",
          image: "https://i.postimg.cc/LXVhyJ4v/628dbc09b98c4-118257uu.jpg",
          programsCount: 42,
          featuredPrograms: ["Computer Science", "Artificial Intelligence", "Robotics Engineering", "Public Policy", "Medicine"],
          description: "The crown jewel of Kazakhstani higher education. Established as a world-class research university, operating in partnership with elite Western institutions (Cambridge, Penn, Duke) with state-of-the-art facilities and top-tier global faculty."
        },
        {
          id: "kaznu",
          name: "Al-Farabi Kazakh National University",
          shortName: "KazNU",
          logoBg: "bg-emerald-800 text-white",
          location: "Almaty (Southern Metropolis)",
          ranking: "#230 globally (QS)",
          founded: "1934",
          image: "https://i.postimg.cc/HkGckDNY/Z.webp",
          programsCount: 56,
          featuredPrograms: ["International Relations", "Chemistry & Biotechnology", "Oriental Studies", "Theoretical Physics"],
          description: "One of the oldest and largest universities in Central Asia. Combining rich traditional scientific foundations with aggressive modern advancements in nano-technology, space research, and physical sciences."
        },
        {
          id: "aitu",
          name: "Astana IT University",
          shortName: "AITU",
          logoBg: "bg-cyan-900 text-cyan-400",
          location: "Astana (EXPO District)",
          ranking: "Top Tech University",
          founded: "2019",
          image: "https://i.postimg.cc/50SkZS1g/2.png",
          programsCount: 18,
          featuredPrograms: ["Software Engineering", "Cybersecurity", "Data Science", "Digital Logistics", "FinTech"],
          description: "The digital powerhouse of Kazakhstan, situated in the futuristic EXPO complex. Designed to train elite architects of the global IT economy, offering close industrial ties with tech giants."
        },
        {
          id: "kimep",
          name: "KIMEP University",
          shortName: "KIMEP",
          logoBg: "bg-yellow-800 text-yellow-100",
          location: "Almaty (Financial District)",
          ranking: "Best Business School",
          founded: "1992",
          image: "https://i.postimg.cc/wy3VNJ1y/1.png",
          programsCount: 22,
          featuredPrograms: ["MBA", "Executive Finance", "Business Administration", "Global Economics", "International Law"],
          description: "The premier Western-style university in Central Asia. All programs are taught strictly in English under North American academic standards, boasting unmatched alumni employment rates in global advisory firms."
        }
      ]
    },
    fields: {
      title: "Explore Elite Disciplines",
      subtitle: "Apply for fully funded positions across critical scientific, technological, and humanitarian vectors.",
      list: [
        {
          id: "eng",
          icon: "Cpu",
          name: "Engineering & Advanced Tech",
          desc: "Robotics, aerospace, civil engineering, mineral resource extraction, and advanced nanotechnology systems.",
          subfields: ["Robotics Engineering", "Aerospace Systems", "Material Science", "Petroleum Engineering"]
        },
        {
          id: "cs",
          icon: "Terminal",
          name: "Computer Science & AI",
          desc: "Machine learning, quantum computing, cybersecurity, software architecture, and distributed ledger systems.",
          subfields: ["Machine Learning & AI", "Cybersecurity", "Blockchain Engineering", "Human-Computer Interaction"]
        },
        {
          id: "med",
          icon: "Stethoscope",
          name: "Medicine & Health Sciences",
          desc: "Biomedical research, genomic therapy, molecular biology, public health management, and surgical sciences.",
          subfields: ["Genomic Medicine", "Biomedical Engineering", "Virology", "Global Healthcare Systems"]
        },
        {
          id: "bus",
          icon: "TrendingUp",
          name: "Business, Finance & Economics",
          desc: "Eurasian trade, risk management, FinTech, quantitative economics, and corporate governance models.",
          subfields: ["FinTech & Blockchain", "Quantitative Economics", "Global Supply Chains", "Strategic Management"]
        },
        {
          id: "nat",
          icon: "Atom",
          name: "Natural Sciences",
          desc: "Theoretical physics, organic chemistry, climate mathematics, geological mapping, and astrophysics.",
          subfields: ["Astrophysics", "Quantum Mechanics", "Organic Synthesis", "Renewable Energy Tech"]
        },
        {
          id: "law",
          icon: "Scale",
          name: "International Law & Relations",
          desc: "Global diplomacy, Eurasian trade legislation, human rights frameworks, and modern public administration.",
          subfields: ["Eurasian Geopolitics", "Corporate Law", "Diplomatic Protocol", "Public Governance"]
        }
      ]
    },
    successStories: {
      title: "The Legacy of Excellence",
      subtitle: "Meet our global alumni who came to study under the scholarship and are now shaping world industries.",
      stories: [
        {
          name: "Amara Okoye",
          country: "Nigeria",
          flag: "🇳🇬",
          university: "Nazarbayev University",
          degree: "M.Sc. in Machine Learning",
          quote: "The computational facilities at NU rivaled any Ivy League lab I visited. Being fully funded enabled me to publish multiple papers at NeurIPS without financial worry.",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
          currentRole: "AI Research Scientist at Google, Zurich"
        },
        {
          name: "Sebastian Müller",
          country: "Germany",
          flag: "🇩🇪",
          university: "KIMEP University",
          degree: "Bachelor of Business Administration",
          quote: "Kazakhstan is the modern silk road. Studying finance in Almaty placed me right at the intersection of European capital and Asian supply chain networks. Absolutely life-changing.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
          currentRole: "Emerging Markets Partner at McKinsey & Co."
        },
        {
          name: "Yuki Tanaka",
          country: "Japan",
          flag: "🇯🇵",
          university: "Al-Farabi Kazakh National University",
          degree: "Ph.D. in Theoretical Physics",
          quote: "The academic rigor is phenomenal. Central Asia has a deep, proud history of mathematics and physics. My professors were world authorities who helped me secure my postdoctoral work.",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
          currentRole: "Postdoc Fellow at CERN, Geneva"
        }
      ]
    },
    faqs: {
      title: "Frequently Answered Inquiries",
      subtitle: "All your structural, procedural, and logistical concerns addressed with total precision.",
      list: [
        {
          q: "What does the Government Scholarship fully cover?",
          a: "The scholarship covers 100% of tuition fees, provides free university dormitory housing, comprehensive annual medical insurance, and a monthly cash allowance (stipend) directly deposited to your Kazakh bank account. It also includes academic travel grants for qualifying students."
        },
        {
          q: "Are programs taught in English?",
          a: "Yes, all partner universities in this premium selection program offer comprehensive curriculum tracks taught entirely in English. You do not need prior knowledge of Kazakh or Russian to apply, although free introductory language courses are provided to enrich your cultural experience."
        },
        {
          q: "Is there an age limit for applicants?",
          a: "There is no strict age limit, but applicants must hold relevant prior qualifications: a high school diploma for Bachelor's programs, a recognized Bachelor's degree for Master's programs, and a recognized Master's degree with a solid research proposal for PhD candidates."
        },
        {
          q: "What are the minimum GPA and language requirements?",
          a: "We look for academic excellence. Typically, a GPA of 3.0 out of 4.0 (or 80% equivalent) is required. For English-medium programs, an IELTS score of 6.0 (or equivalent TOEFL score) is recommended, although this may be waived if your prior education was conducted completely in English."
        },
        {
          q: "How competitive is the selection process?",
          a: "The selection is highly competitive and meritocratic, with a historical acceptance rate of around 2.4%. We evaluate applicants holistically, focusing on academic performance, research potential, leadership attributes, and the alignment of your goals with Kazakhstan's modern scientific landscape."
        }
      ]
    },
    cta: {
      title: "Ready to Begin Your Academic Journey?",
      subtitle: "Submit your preliminary digital application today and become part of Kazakhstan's next elite generation of global scholars.",
      btn: "Start Official Application",
      subtext: "Takes ~15 minutes. Official digital award letters will be issued starting October 2026."
    },
    footer: {
      dept: "Ministry of Science and Higher Education of the Republic of Kazakhstan",
      copyright: "© 2026 Republic of Kazakhstan. All official government rights reserved.",
      privacy: "Data Confidentiality Policy",
      terms: "Eurasian Academic Terms",
      accessibility: "Digital Accessibility Statement",
      support: "Support Hub",
      emergency: "Emergency Line: 112 (KZ)",
      links: [
        {
          title: "Legal & Access",
          items: [
            { label: "Ministry Portal", href: "#" },
            { label: "Anti-Corruption Policy", href: "#" },
            { label: "Personal Data Protection", href: "#" },
            { label: "Platform Statistics", href: "#" }
          ]
        },
        {
          title: "Applicant Services",
          items: [
            { label: "Interactive Portal", href: "#" },
            { label: "Visa Facilitation", href: "#" },
            { label: "Embassy Network", href: "#" },
            { label: "Pre-departure Webinars", href: "#" }
          ]
        },
        {
          title: "Eurasian Partners",
          items: [
            { label: "Bologna Process Office", href: "#" },
            { label: "Eurasian Tech Alliance", href: "#" },
            { label: "UNESCO KZ Commission", href: "#" },
            { label: "Alumni Network Portal", href: "#" }
          ]
        }
      ]
    }
  },
  KK: {
    header: {
      title: "Қазақстан Республикасы",
      navHome: "Басты бет",
      navScholarships: "Шәкіртақылар",
      navUniversities: "Университеттер",
      navPrograms: "Бағдарламалар",
      navEligibility: "Сәйкестік",
      navJourney: "Үдеріс",
      navFaqs: "Сұрақтар",
      navAbout: "Қазақстан туралы",
      login: "Кіру",
      register: "Өтінім беру",
      langLabel: "Тіл",
    },
    hero: {
      badge: "Қазақстан Республикасы Үкіметінің ресми шәкіртақысы 2026/2027",
      titleFirst: "Қазақстанда оқыңыз.",
      titleSecond: "Болашақты бірге жасайық.",
      subtitle: "Қазақстанның жетекші зерттеу университеттерінде Бакалавриат, Магистратура және PhD бағдарламалары бойынша білім алатын шетелдік үздік студенттерге арналған толық үкіметтік шәкіртақы.",
      ctaPrimary: "Өтінімді бастау",
      ctaSecondary: "Сәйкестікті тексеру",
      coverageTitle: "Шәкіртақы нені өтейді",
      coverageItems: [
        "Оқу ақысын 100% толық өтеу",
        "Ай сайынғы жоғары шәкіртақы",
        "Тегін академиялық жатақхана",
        "Толық медициналық сақтандыру",
        "Жыл сайынғы авиабилет жеңілдіктері"
      ],
      deadlineTitle: "Қабылдау терезесінің жабылуы",
      deadlineStatus: "Күйі",
      deadlineStatusOpen: "АШЫҚ",
      days: "Күн",
      hours: "Сағат",
      minutes: "Минут",
      seconds: "Секунд"
    },
    eligibilityChecker: {
      title: "Сәйкестікті жылдам бағалау тесті",
      subtitle: "30 секундтан аз уақыт ішінде шәкіртақыға сәйкестігіңізді тексеру үшін төмендегі деректерді енгізіңіз.",
      countryLabel: "Азаматтығы",
      degreeLabel: "Қалаған дәрежеңіз",
      gpaLabel: "Академиялық үлгерім / GPA",
      ieltsLabel: "Ағылшын тілін меңгеру (IELTS/баламасы)",
      checkBtn: "Сәйкестігімді бағалау",
      resultEligible: "Толықтай сәйкес келесіз",
      resultIneligible: "Қосымша қарау қажет",
      resultTitle: "Бағалау аяқталды",
      coverageDetails: "Құттықтаймыз! Сіздің профиліңіз басты талаптарға сәйкес келеді. Оқу ақысы 100% тегін, ай сайынғы шәкіртақы мен тегін баспанаға үміткер бола аласыз.",
      requirementsTitle: "Келесі қадамдар: Академиялық транскрипттер, төлқұжат, уәждемелік хат пен екі ұсыныс хат дайындаңыз."
    },
    trustBar: {
      ministry: "Ғылым және жоғары білім министрлігі",
      program: "Ресми мемлекеттік бағдарлама",
      welcome: "Шетелдік студенттерді қабылдау",
      transparent: "100% ашық, әділ іріктеу үдерісі"
    },
    stats: {
      countries: "110+",
      countriesSub: "Жаһандық елдер саны",
      applications: "42,000+",
      applicationsSub: "Өңделген өтінімдер",
      universities: "24",
      universitiesSub: "Элиталық университеттер",
      successRate: "2.4%",
      successRateSub: "Қабылдау көрсеткіші"
    },
    whyKazakhstan: {
      title: "Неліктен Қазақстан?",
      subtitle: "Бай тарихи мұра мен әлемдік деңгейдегі ғылыми жетістіктерді ұштастырған заманауи Еуразиялық технологиялық мемлекет.",
      reasons: [
        {
          title: "Еуразияның технологиялық хабы",
          description: "Орталық Азияның жетекші экономикасы. Нұр-Сұлтан (Астана) мен Алматы - қаржы, технология мен логистиканың заманауи орталықтары.",
          tag: "Инновация",
        },
        {
          title: "Әлемдік деңгейдегі білім",
          description: "Назарбаев Университеті мен халықаралық аккредиттеуден өткен, толық ағылшын тілінде білім беретін жетекші ұлттық зерттеу университеттері.",
          tag: "Білім",
        },
        {
          title: "Еуразия қақпасы",
          description: "Географиялық тұрғыдан Еуразия жүрегінде орналасқан. Мұнда оқу сізді Еуропа, Азия және Таяу Шығыс желілерімен тікелей байланыстырады.",
          tag: "География",
        },
        {
          title: "Ғажайып табиғат",
          description: "Алматының асқар таулары мен атақты тау-шаңғы курорттарынан бастап, Шарын шатқалы, кең дала мен мөлдір көлдерге дейін.",
          tag: "Табиғат",
        },
        {
          title: "Қауіпсіз әрі қонақжай",
          description: "Өте тұрақты, қауіпсіз және қонақжай мемлекет. Түрлі діндер, тілдер мен мәдениеттер толық татулықта өмір сүретін бейбіт зайырлы ел.",
          tag: "Қоғам",
        },
        {
          title: "Тиімді өмір сүру құны",
          description: "Қалалар өте заманауи болғанымен, өмір сүру шығындары қолжетімді, бұл берілетін шәкіртақының жеткілікті болуын қамтамасыз етеді.",
          tag: "Өмір салты",
        }
      ]
    },
    benefits: {
      title: "Үміткерлерге арналған жеңілдіктер",
      subtitle: "Біздің бағдарлама сіздің алаңсыз білім алып, тек қана ғылыми жетістіктерге жетуіңізге жағдай жасайды.",
      items: [
        {
          title: "100% Тегін оқу",
          desc: "Таңдалған университеттегі барлық тіркеу, дәріс, зертхана және кітапханалық төлемдерді толық өтеу.",
          detail: "Жасырын төлемдер жоқ."
        },
        {
          title: "Ай сайынғы шәкіртақы",
          desc: "Жеке шығындарыңызды, тамақтану мен көлік шығындарын толық өтеуге жеткілікті қаржылай шәкіртақы.",
          detail: "Ай сайын тікелей аударым."
        },
        {
          title: "Элиталық жатақхана",
          desc: "Университеттің барлық жағдайы жасалған заманауи жатақханасынан тегін орын алу кепілдігі.",
          detail: "Ыңғайлы бөлмелер."
        },
        {
          title: "Медициналық қорғаныс",
          desc: "Шұғыл көмекті, дәрігерлік кеңестер мен дәрі-дәрмектерді қамтитын толық медициналық сақтандыру.",
          detail: "Жыл бойы белсенді."
        },
        {
          title: "Ұшу жеңілдіктері",
          desc: "Жазғы демалыста өз еліңізге барып қайту үшін жыл сайынғы авиабилет құнына бөлінетін қаржылай қолдау.",
          detail: "Бару-қайту билеті."
        },
        {
          title: "Мансаптық қолдау",
          desc: "Оқу бітірген соң Қазақстанның жоғары технологиялық салаларында жұмыс істеуге ықтиярхат пен көмек алу.",
          detail: "1 жылдық жеңілдік."
        }
      ]
    },
    journey: {
      title: "Шәкіртақы иегерінің жолы",
      subtitle: "Сіздің уақытыңызды үнемдеуге арналған ашық, стандартталған цифрлық қабылдау үдерісі.",
      steps: [
        {
          step: "01",
          title: "Бағалау және іріктеу",
          desc: "Азаматтығыңызды, ең төменгі GPA (әдетте 4.0-ден 3.0+) және бағдарламаларды тексеріңіз.",
          docRequired: "Интерактивті тест"
        },
        {
          step: "02",
          title: "Тіркелу",
          desc: "Ресми қауіпсіз үкіметтік бұлтты инфрақұрылымында өзіңіздің үміткер профиліңізді жасаңыз.",
          docRequired: "Пошта және төлқұжат"
        },
        {
          step: "03",
          title: "Құжаттарды жүктеу",
          desc: "Расталған дипломдардың, академиялық транскрипттердің және ұсыныс хаттардың көшірмелерін жүктеңіз.",
          docRequired: "Тек PDF нұсқалары"
        },
        {
          step: "04",
          title: "Университет таңдау",
          desc: "Басымдылығы бойынша 3 қалаулы жоғары оқу орны мен бағдарламасын таңдаңыз.",
          docRequired: "Бағдарламалар кестесі"
        },
        {
          step: "05",
          title: "Академиялық тестілеу",
          desc: "Аналитикалық ойлау мен бейінді пән деңгейін анықтайтын онлайн тестілеуге қатысыңыз.",
          docRequired: "Цифрлық портал"
        },
        {
          step: "06",
          title: "Ресми сұхбат",
          desc: "Жетекші профессорлар мен Министрлік өкілдерімен 15 минуттық бейне-сұхбаттан өтіңіз.",
          docRequired: "Бейне қоңырау"
        },
        {
          step: "07",
          title: "Шешім қабылдау",
          desc: "Қорытынды бағалауды алыңыз. Шәкіртақы тағайындау хаттары Министрлікпен цифрлық түрде қол қойылады.",
          docRequired: "Ресми сертификат"
        },
        {
          step: "08",
          title: "Виза және оқуға келу",
          desc: "Студенттік визаны жылдам рәсімдеп, ұшу билетін брондап, өз Еуразиялық арманыңызды бастаңыз.",
          docRequired: "Визалық шақыру"
        }
      ]
    },
    universities: {
      title: "Серіктес жетекші университеттер",
      subtitle: "Заманауи зертханалары мен халықаралық профессорлары бар Орталық Азияның ең үздік оқу орындарында оқыңыз.",
      tags: {
        location: "Орналасқан жері",
        founded: "Құрылған жылы",
        programs: "Ағылшын тіліндегі бағдарламалар",
        ranking: "QS әлемдік рейтингі"
      },
      list: [
        {
          id: "nu",
          name: "Назарбаев Университеті",
          shortName: "NU",
          logoBg: "bg-blue-900 text-gold",
          location: "Астана (Елорда)",
          ranking: "Орталық Азияда #1",
          founded: "2010",
          image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
          programsCount: 42,
          featuredPrograms: ["Компьютерлік ғылымдар", "Жасанды интеллект", "Робототехника", "Мемлекеттік саясат", "Медицина"],
          description: "Қазақстан білімінің бас тәжі. Әлемдік деңгейдегі зерттеу университеті ретінде құрылған, Кембридж, Пенн, Дьюк сияқты үздік Батыс университеттерімен серіктес болып жұмыс істейді."
        },
        {
          id: "kaznu",
          name: "Әл-Фараби атындағы Қазақ ұлттық университеті",
          shortName: "ҚазҰУ",
          logoBg: "bg-emerald-800 text-white",
          location: "Алматы (Оңтүстік мегаполис)",
          ranking: "Әлемде #230 (QS)",
          founded: "1934",
          image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600",
          programsCount: 56,
          featuredPrograms: ["Халықаралық қатынастар", "Химия және биотехнология", "Шығыстану", "Теориялық физика"],
          description: "Орталық Азиядағы ең көне және ең ірі университеттердің бірі. Нанотехнология, ғарыш зерттеулері және физика ғылымдарындағы заманауи жетістіктерді біріктіреді."
        },
        {
          id: "aitu",
          name: "Astana IT University",
          shortName: "AITU",
          logoBg: "bg-cyan-900 text-cyan-400",
          location: "Астана (EXPO ауданы)",
          ranking: "Үздік технологиялық ЖОО",
          founded: "2019",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
          programsCount: 18,
          featuredPrograms: ["Бағдарламалық инженерия", "Киберқауіпсіздік", "Деректер туралы ғылым", "Цифрлық логистика"],
          description: "Футуристік ЭКСПО кешенінде орналасқан Қазақстанның цифрлық флагманы. Жаһандық IT саласына арналған элиталық мамандарды дайындайды."
        },
        {
          id: "kimep",
          name: "КИМЭП Университеті",
          shortName: "КИМЭП",
          logoBg: "bg-yellow-800 text-yellow-100",
          location: "Алматы (Қаржы ауданы)",
          ranking: "Үздік бизнес мектебі",
          founded: "1992",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
          programsCount: 22,
          featuredPrograms: ["MBA", "Қаржы", "Бизнесті басқару", "Жаһандық экономика", "Халықаралық құқық"],
          description: "Орталық Азиядағы жетекші батыстық үлгідегі университет. Барлық бағдарламалар Солтүстік Америка білім беру стандарттарына сәйкес толықтай ағылшын тілінде жүргізіледі."
        }
      ]
    },
    fields: {
      title: "Элиталық мамандықтар",
      subtitle: "Маңызды ғылыми, технологиялық және гуманитарлық бағыттар бойынша толық қаржыландырылатын шәкіртақыға ие болыңыз.",
      list: [
        {
          id: "eng",
          icon: "Cpu",
          name: "Инженерия және жаңа технологиялар",
          desc: "Робототехника, аэроғарыш, құрылыс инженериясы және озық нанотехнологиялық жүйелер.",
          subfields: ["Робототехника", "Аэроғарыштық жүйелер", "Материалтану", "Мұнай инженериясы"]
        },
        {
          id: "cs",
          icon: "Terminal",
          name: "Компьютерлік ғылымдар және ЖИ",
          desc: "Машиналық оқыту, кванттық есептеулер, киберқауіпсіздік және бағдарламалық қамтамасыз ету архитектурасы.",
          subfields: ["Машиналық оқыту және ЖИ", "Киберқауіпсіздік", "Блокчейн инженериясы", "Ақпараттық жүйелер"]
        },
        {
          id: "med",
          icon: "Stethoscope",
          name: "Медицина және денсаулық сақтау",
          desc: "Биомедициналық зерттеулер, геномдық терапия, молекулалық биология және денсаулық сақтауды басқару.",
          subfields: ["Геномдық медицина", "Биомедициналық инженерия", "Вирусология", "Денсаулық сақтау жүйелері"]
        },
        {
          id: "bus",
          icon: "TrendingUp",
          name: "Бизнес, қаржы және экономика",
          desc: "Еуразиялық сауда, тәуекелдерді басқару, FinTech, сандық экономика және корпоративтік басқару.",
          subfields: ["FinTech", "Сандық экономика", "Логистика және жеткізу тізбегі", "Стратегиялық менеджмент"]
        },
        {
          id: "nat",
          icon: "Atom",
          name: "Жаратылыстану ғылымдары",
          desc: "Теориялық физика, органикалық химия, климаттық математика, геология және астрофизика.",
          subfields: ["Астрофизика", "Кванттық механика", "Органикалық химия", "Жаңартылатын энергия көздері"]
        },
        {
          id: "law",
          icon: "Scale",
          name: "Халықаралық құқық және қатынастар",
          desc: "Жаһандық дипломатия, Еуразиялық сауда заңнамасы және заманауи мемлекеттік басқару.",
          subfields: ["Еуразия геосаясаты", "Корпоративтік құқық", "Дипломатиялық хаттама", "Мемлекеттік басқару"]
        }
      ]
    },
    successStories: {
      title: "Табыс тарихы мен мұра",
      subtitle: "Шәкіртақы бойынша оқуын аяқтап, қазіргі уақытта жаһандық индустрияларды дамытып жатқан түлектерімізбен танысыңыз.",
      stories: [
        {
          name: "Амара Окойе",
          country: "Нигерия",
          flag: "🇳🇬",
          university: "Назарбаев Университеті",
          degree: "Машиналық оқыту магистрі",
          quote: "Назарбаев Университетіндегі есептеу құрылғылары мен зертханалар кез келген әлемдік деңгейдегі орталықтармен бәсекелесе алады. Шәкіртақы маған алаңсыз тек зерттеумен айналысуға мүмкіндік берді.",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
          currentRole: "Google, Цюрих филиалының ЖИ зерттеуші-ғалымы"
        },
        {
          name: "Себастьян Мюллер",
          country: "Германия",
          flag: "🇩🇪",
          university: "КИМЭП Университеті",
          degree: "Бизнесті басқару бакалавры",
          quote: "Қазақстан - заманауи Жібек жолы. Алматыда қаржыны оқу маған Еуропалық капитал мен Азиялық өндірістік желілердің қиылысында тәжірибе жинауға мүмкіндік берді.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
          currentRole: "McKinsey & Co. Еуразиялық нарықтар бойынша серіктесі"
        },
        {
          name: "Юки Танака",
          country: "Жапония",
          flag: "🇯🇵",
          university: "Әл-Фараби атындағы ҚазҰУ",
          degree: "Теориялық физика PhD докторы",
          quote: "Академиялық талап өте жоғары. Менің жетекшілерім маған CERN-де докторлықтан кейінгі зерттеу жұмыстарымды жалғастыруға көмектескен әлемдік беделді ғалымдар болды.",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
          currentRole: "CERN, Женева ғылыми қызметкері"
        }
      ]
    },
    faqs: {
      title: "Жиі қойылатын сұрақтар",
      subtitle: "Ұйымдастырушылық, процедуралық және логистикалық мәселелер бойынша барлық сұрақтарға нақты жауаптар.",
      list: [
        {
          q: "Шәкіртақы толықтай нені өтейді?",
          a: "Шәкіртақы оқу ақысын 100% толық өтейді, университет жатақханасынан тегін бөлме береді, медициналық сақтандыруды қамтиды және ай сайын тікелей Қазақстандық банк картаңызға қолма-қол шәкіртақы төлейді."
        },
        {
          q: "Оқу ағылшын тілінде жүргізіле ме?",
          a: "Иә, бағдарламаға қатысатын барлық серіктес университеттерде пәндер толықтай ағылшын тілінде оқытылады. Өтінім беру үшін қазақ немесе орыс тілдерін білу міндетті емес."
        },
        {
          q: "Үміткерлерге жас шектеуі бар ма?",
          a: "Қатаң жас шектеуі жоқ, алайда үміткерлер тиісті дәрежелерге сәйкес келуі тиіс: бакалавриат үшін орта білім туралы аттестат, магистратура үшін бакалавр дипломы, PhD үшін магистр дәрежесі мен зерттеу жұмысының жоспары."
        },
        {
          q: "Ең төменгі GPA және тілдік талаптар қандай?",
          a: "Әдетте GPA 4.0-ден кемінде 3.0 (немесе 80% баламасы) болуы қажет. Тілдік бағдарламалар үшін IELTS 6.0-ден төмен емес ұсынылады (егер алдыңғы біліміңіз ағылшын тілінде болса, бұл талап алынып тасталуы мүмкін)."
        },
        {
          q: "Іріктеу үдерісі қаншалықты қиын?",
          a: "Іріктеу өте қатаң және тек қана үлгерім мен жетістікке негізделген. Орташа қабылдау көрсеткіші шамамен 2.4%-ды құрайды. Біз академиялық үлгерімді, зерттеу әлеуетін және көшбасшылық қасиеттерді бағалаймыз."
        }
      ]
    },
    cta: {
      title: "Академиялық болашағыңызды бастауға дайынсыз ба?",
      subtitle: "Бүгін алдын ала цифрлық өтінімді жіберіңіз және Қазақстанның жаңа элиталық жаһандық ғалымдар тобына қосылыңыз.",
      btn: "Ресми өтінімді бастау",
      subtext: "Өтінім беру ~15 минут уақыт алады. Ресми шәкіртақы тағайындау хаттары 2026 жылдың қазан айында жолданады."
    },
    footer: {
      dept: "Қазақстан Республикасы Ғылым және жоғары білім министрлігі",
      copyright: "© 2026 Қазақстан Республикасы. Барлық құқықтар қорғалған.",
      privacy: "Деректердің құпиялылығы саясаты",
      terms: "Академиялық ережелер мен шарттар",
      accessibility: "Цифрлық қолжетімділік мәлімдемесі",
      support: "Қолдау көрсету орталығы",
      emergency: "Шұғыл қызмет: 112 (ҚР)",
      links: [
        {
          title: "Заңдық ақпарат",
          items: [
            { label: "Министрлік порталы", href: "#" },
            { label: "Сыбайлас жемқорлыққа қарсы саясат", href: "#" },
            { label: "Деректерді қорғау", href: "#" },
            { label: "Платформа статистикасы", href: "#" }
          ]
        },
        {
          title: "Үміткерлерге көмек",
          items: [
            { label: "Интерактивті портал", href: "#" },
            { label: "Визалық қолдау", href: "#" },
            { label: "Елшіліктер желісі", href: "#" },
            { label: "Түсіндіру вебинарлары", href: "#" }
          ]
        },
        {
          title: "Серіктестер",
          items: [
            { label: "Болонья процесі кеңсесі", href: "#" },
            { label: "Еуразиялық технологиялық альянс", href: "#" },
            { label: "ЮНЕСКО комиссиясы", href: "#" },
            { label: "Түлектер қауымдастығы", href: "#" }
          ]
        }
      ]
    }
  },
  RU: {
    header: {
      title: "Республика Казахстан",
      navHome: "Главная",
      navScholarships: "Стипендии",
      navUniversities: "Университеты",
      navPrograms: "Программы",
      navEligibility: "Соответствие",
      navJourney: "Процесс",
      navFaqs: "Вопросы",
      navAbout: "О Казахстане",
      login: "Войти",
      register: "Подать заявку",
      langLabel: "Язык",
    },
    hero: {
      badge: "Официальная правительственная стипендия Республики Казахстан 2026/2027",
      titleFirst: "Учитесь в Казахстане.",
      titleSecond: "Создавайте будущее.",
      subtitle: "Полные государственные стипендии для выдающихся иностранных студентов для обучения в Бакалавриате, Магистратуре и PhD в ведущих исследовательских университетах Казахстана.",
      ctaPrimary: "Начать подачу заявки",
      ctaSecondary: "Проверить соответствие",
      coverageTitle: "Что покрывает стипендия",
      coverageItems: [
        "100% покрытие стоимости обучения",
        "Ежемесячная денежная стипендия",
        "Бесплатное проживание в общежитии",
        "Полное медицинское страхование",
        "Ежегодные гранты на авиаперелеты"
      ],
      deadlineTitle: "Окно подачи закрывается через",
      deadlineStatus: "Статус",
      deadlineStatusOpen: "ОТКРЫТ",
      days: "Дней",
      hours: "Часов",
      minutes: "Минут",
      seconds: "Секунд"
    },
    eligibilityChecker: {
      title: "Быстрая оценка соответствия",
      subtitle: "Введите параметры вашего профиля ниже, чтобы узнать, подходите ли вы под критерии отбора, менее чем за 30 секунд.",
      countryLabel: "Гражданство",
      degreeLabel: "Желаемая степень",
      gpaLabel: "Академическая успеваемость / GPA",
      ieltsLabel: "Владение английским (IELTS/эквивалент)",
      checkBtn: "Оценить мои шансы",
      resultEligible: "Отличное соответствие",
      resultIneligible: "Требуется доп. проверка",
      resultTitle: "Оценка завершена",
      coverageDetails: "Поздравляем! Ваш профиль полностью соответствует основным критериям. Вы имеете право на 100% покрытие стоимости обучения, ежемесячную стипендию и проживание.",
      requirementsTitle: "Следующие шаги: Подготовьте сертифицированные копии дипломов, паспорт, мотивационное эссе и два рекомендательных письма."
    },
    trustBar: {
      ministry: "Министерство науки и высшего образования",
      program: "Официальная госпрограмма",
      welcome: "Прием иностранных студентов",
      transparent: "100% прозрачный меритократический отбор"
    },
    stats: {
      countries: "110+",
      countriesSub: "Стран происхождения студентов",
      applications: "42,000+",
      applicationsSub: "Обработанных заявок",
      universities: "24",
      universitiesSub: "Элитных вузов-партнеров",
      successRate: "2.4%",
      successRateSub: "Процент зачисления"
    },
    whyKazakhstan: {
      title: "Почему Казахстан?",
      subtitle: "Современное евразийское технологическое государство, сочетающее богатое культурное наследие с передовыми стандартами науки.",
      reasons: [
        {
          title: "Технологический центр Евразии",
          description: "Ведущая экономика Центральной Азии. Нур-Султан (Астана) и Алматы являются современными центрами финансов, технологий и глобальной логистики.",
          tag: "Инновации",
        },
        {
          title: "Мировое качество образования",
          description: "Назарбаев Университет и ведущие национальные исследовательские вузы с аккредитованными учебными планами и обучением полностью на английском языке.",
          tag: "Образование",
        },
        {
          title: "Ворота Евразии",
          description: "Географический центр Евразии. Обучение здесь открывает прямые каналы взаимодействия с европейскими, азиатскими и ближневосточными сетями.",
          tag: "География",
        },
        {
          title: "Невероятная природа",
          description: "От заснеженных альпийских вершин и горнолыжных курортов Алматы до Чарынского каньона, бескрайних степей и чистейших озер.",
          tag: "Природа",
        },
        {
          title: "Безопасность и гостеприимство",
          description: "Стабильное, безопасное и светское государство, где представители сотен этносов и вероисповеданий живут в полной гармонии и дружбе.",
          tag: "Общество",
        },
        {
          title: "Доступная стоимость жизни",
          description: "При ультрасовременной городской инфраструктуре расходы на жизнь остаются очень доступными, что позволяет стипендии покрывать все нужды.",
          tag: "Стиль жизни",
        }
      ]
    },
    benefits: {
      title: "Привилегии стипендиатов",
      subtitle: "Наша программа создана для вашей полной академической поддержки, чтобы вы могли сфокусироваться исключительно на научном поиске.",
      items: [
        {
          title: "100% Бесплатное обучение",
          desc: "Полное покрытие всех академических, регистрационных, лабораторных и библиотечных сборов в выбранном вузе.",
          detail: "Никаких скрытых платежей."
        },
        {
          title: "Ежемесячное пособие",
          desc: "Существенная денежная выплата каждый месяц, комфортно покрывающая расходы на питание, транспорт и личные нужды.",
          detail: "Прямое начисление ежемесячно."
        },
        {
          title: "Элитное жилье",
          desc: "Гарантированное бесплатное место в современном студенческом общежитии с полным коммунальным обеспечением.",
          detail: "Комфортные комнаты."
        },
        {
          title: "Медицинская страховка",
          desc: "Всестороннее медицинское страхование, включая экстренную помощь, консультации врачей и медикаменты.",
          detail: "Действует круглый год."
        },
        {
          title: "Транспортный грант",
          desc: "Ежегодная финансовая поддержка для авиаперелетов домой в период летних академических каникул.",
          detail: "Билет в обе стороны."
        },
        {
          title: "Карьерная интеграция",
          desc: "Упрощенное получение вида на жительство и поддержка в трудоустройстве в технологических секторах Казахстана.",
          detail: "Продление на 1 год."
        }
      ]
    },
    journey: {
      title: "Путь стипендиата",
      subtitle: "Прозрачный, полностью цифровой процесс поступления, разработанный для уважения и экономии вашего времени.",
      steps: [
        {
          step: "01",
          title: "Фильтрация критериев",
          desc: "Проверьте свое гражданство, минимальный балл успеваемости GPA (обычно от 3.0+ из 4.0) и программы.",
          docRequired: "Интерактивный тест"
        },
        {
          step: "02",
          title: "Регистрация профиля",
          desc: "Создайте учетную запись на защищенном правительственном облачном портале.",
          docRequired: "Email и паспорт"
        },
        {
          step: "03",
          title: "Загрузка документов",
          desc: "Предоставьте электронные сканы дипломов, академических транскриптов и рекомендательных писем.",
          docRequired: "Только PDF формат"
        },
        {
          step: "04",
          title: "Выбор университетов",
          desc: "Выберите до 3-х предпочтительных высших учебных заведений и программ в порядке приоритета.",
          docRequired: "Матрица программ"
        },
        {
          step: "05",
          title: "Академическая оценка",
          desc: "Пройдите короткое стандартизированное онлайн-тестирование на логическое мышление и профильные знания.",
          docRequired: "Цифровой портал"
        },
        {
          step: "06",
          title: "Панельное интервью",
          desc: "Пройдите 15-минутное видеособеседование с ведущими профессорами вузов и представителями Министерства.",
          docRequired: "Видеозвонок онлайн"
        },
        {
          step: "07",
          title: "Решение о зачислении",
          desc: "Получите итоговую оценку. Наградные письма подписываются Министерством в цифровом формате.",
          docRequired: "Официальный сертификат"
        },
        {
          step: "08",
          title: "Виза и прибытие",
          desc: "Получите учебную визу в ускоренном режиме, забронируйте авиабилет и начните свой евразийский путь.",
          docRequired: "Визовое приглашение"
        }
      ]
    },
    universities: {
      title: "Ведущие вузы-партнеры",
      subtitle: "Учитесь в лучших университетах Центральной Азии с передовыми лабораториями и международным профессорским составом.",
      tags: {
        location: "Местоположение",
        founded: "Основан",
        programs: "Программы на англ. языке",
        ranking: "Мировой рейтинг QS"
      },
      list: [
        {
          id: "nu",
          name: "Назарбаев Университет",
          shortName: "NU",
          logoBg: "bg-blue-900 text-gold",
          location: "Астана (Столица)",
          ranking: "#1 в Центральной Азии",
          founded: "2010",
          image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
          programsCount: 42,
          featuredPrograms: ["Компьютерные науки", "Искусственный интеллект", "Робототехника", "Государственная политика", "Медицина"],
          description: "Жемчужина казахстанского образования. Исследовательский университет мирового уровня, работающий в партнерстве с элитными западными институтами (Кембридж, Пенн, Дьюк)."
        },
        {
          id: "kaznu",
          name: "Казахский национальный университет им. аль-Фараби",
          shortName: "КазНУ",
          logoBg: "bg-emerald-800 text-white",
          location: "Алматы (Южный мегаполис)",
          ranking: "#230 в мире (QS)",
          founded: "1934",
          image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600",
          programsCount: 56,
          featuredPrograms: ["Международные отношения", "Химия и биотехнология", "Востоковедение", "Теоретическая физика"],
          description: "Один из старейших и крупнейших вузов Центральной Азии. Сочетает глубокие научные традиции с инновационными прорывами в нанотехнологиях и космических исследованиях."
        },
        {
          id: "aitu",
          name: "Astana IT University",
          shortName: "AITU",
          logoBg: "bg-cyan-900 text-cyan-400",
          location: "Астана (Район EXPO)",
          ranking: "Лучший технический вуз",
          founded: "2019",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
          programsCount: 18,
          featuredPrograms: ["Программная инженерия", "Кибербезопасность", "Наука о данных", "Цифровая логистика"],
          description: "Цифровой флагман Казахстана, расположенный в футуристическом комплексе EXPO. Создан для подготовки элиты глобальной цифровой экономики."
        },
        {
          id: "kimep",
          name: "Университет КИМЭП",
          shortName: "КИМЭП",
          logoBg: "bg-yellow-800 text-yellow-100",
          location: "Алматы (Финансовый район)",
          ranking: "Лучшая бизнес-школа",
          founded: "1992",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
          programsCount: 22,
          featuredPrograms: ["MBA", "Корпоративные финансы", "Бизнес-администрирование", "Глобальная экономика"],
          description: "Ведущий университет западного типа в Центральной Азии. Все предметы преподаются исключительно на английском по североамериканским академическим стандартам."
        }
      ]
    },
    fields: {
      title: "Элитные направления обучения",
      subtitle: "Подавайте заявку на полностью финансируемые места в важнейших научно-технологических и гуманитарных областях.",
      list: [
        {
          id: "eng",
          icon: "Cpu",
          name: "Инженерия и высокие технологии",
          desc: "Робототехника, аэрокосмические системы, гражданское строительство и передовые нанотехнологии.",
          subfields: ["Робототехника", "Аэрокосмические системы", "Материаловедение", "Нефтяная инженерия"]
        },
        {
          id: "cs",
          icon: "Terminal",
          name: "Компьютерные науки и ИИ",
          desc: "Машинное обучение, квантовые вычисления, кибербезопасность и архитектура распределенных систем.",
          subfields: ["Машинное обучение и ИИ", "Кибербезопасность", "Блокчейн-инженерия", "Системная архитектура"]
        },
        {
          id: "med",
          icon: "Stethoscope",
          name: "Медицина и науки о здоровье",
          desc: "Биомедицинские исследования, геномная терапия, молекулярная биология и глобальное здравоохранение.",
          subfields: ["Геномная медицина", "Биомедицинская инженерия", "Вирусология", "Управление здравоохранением"]
        },
        {
          id: "bus",
          icon: "TrendingUp",
          name: "Бизнес, финансы и экономика",
          desc: "Евразийская торговля, управление рисками, FinTech, количественная экономика и корпоративное управление.",
          subfields: ["FinTech и блокчейн", "Количественная экономика", "Управление цепочками поставок", "Стратегический менеджмент"]
        },
        {
          id: "nat",
          icon: "Atom",
          name: "Естественные науки",
          desc: "Теоретическая физика, органический синтез, климатическая математика, геология и астрофизика.",
          subfields: ["Астрофизика", "Квантовая механика", "Органический синтез", "Альтернативная энергетика"]
        },
        {
          id: "law",
          icon: "Scale",
          name: "Международное право и отношения",
          desc: "Глобальная дипломатия, торговое законодательство Евразии, права человека и госуправление.",
          subfields: ["Геополитика Евразии", "Корпоративное право", "Дипломатический протокол", "Госуправление"]
        }
      ]
    },
    successStories: {
      title: "Истории выдающихся успехов",
      subtitle: "Познакомьтесь с нашими выпускниками, получившими стипендию и формирующими глобальную повестку сегодня.",
      stories: [
        {
          name: "Амара Окойе",
          country: "Нигерия",
          flag: "🇳🇬",
          university: "Назарбаев Университет",
          degree: "Магистр машинного обучения",
          quote: "Вычислительные лаборатории NU превосходили многие лаборатории Лиги Плюща. Полное финансирование позволило мне сосредоточиться исключительно на публикациях в NeurIPS.",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
          currentRole: "Scientist в сфере ИИ в Google, Цюрих"
        },
        {
          name: "Себастьян Мюллер",
          country: "Германия",
          flag: "🇩🇪",
          university: "Университет КИМЭП",
          degree: "Бакалавр делового администрирования",
          quote: "Казахстан - это новый Шелковый путь. Обучение финансам в Алматы поставило меня в центр пересечения европейского капитала и азиатских цепочек поставок. Это изменило жизнь.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
          currentRole: "Партнер по развивающимся рынкам в McKinsey & Co."
        },
        {
          name: "Юки Танака",
          country: "Япония",
          flag: "🇯🇵",
          university: "КазНУ им. аль-Фараби",
          degree: "PhD по теоретической физике",
          quote: "Академическая строгость великолепна. Центральная Азия имеет глубокую математическую историю. Мои профессора помогли мне получить приглашение на постдок в CERN.",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
          currentRole: "Научный сотрудник в CERN, Женева"
        }
      ]
    },
    faqs: {
      title: "Часто задаваемые вопросы",
      subtitle: "Все ваши вопросы касательно процедур, требований и логистики, разобранные в деталях.",
      list: [
        {
          q: "Что полностью покрывает стипендия?",
          a: "Государственная стипендия полностью покрывает 100% стоимости обучения, гарантирует бесплатное проживание в общежитиях вузов, медицинскую страховку на год и ежемесячные денежные выплаты на карту."
        },
        {
          q: "Преподаются ли программы на английском языке?",
          a: "Да, все программы в представленных элитных вузах-партнерах ведутся полностью на английском языке. Знание казахского или русского при поступлении не обязательно."
        },
        {
          q: "Есть ли возрастное ограничение для подачи заявки?",
          a: "Строгих возрастных ограничений нет. Главное иметь подтвержденное предыдущее образование: школьный аттестат для бакалавриата, диплом бакалавра для магистратуры, степень магистра для докторантуры."
        },
        {
          q: "Каковы минимальные требования по GPA и языку?",
          a: "Мы нацелены на лучших. Обычно требуется средний балл GPA от 3.0 из 4.0. Для англоязычных программ рекомендуется балл IELTS не ниже 6.0 (или эквивалент)."
        },
        {
          q: "Каков конкурс на получение стипендии?",
          a: "Отбор крайне строгий и основан исключительно на меритократии. Исторический процент одобрения составляет около 2.4% от поданных заявок."
        }
      ]
    },
    cta: {
      title: "Готовы начать свое академическое приключение?",
      subtitle: "Отправьте предварительную цифровую заявку сегодня и станьте частью нового элитного поколения мировых ученых.",
      btn: "Начать официальное оформление",
      subtext: "Занимает ~15 минут. Официальные приглашения будут рассылаться в октябре 2026."
    },
    footer: {
      dept: "Министерство науки и высшего образования Республики Казахстан",
      copyright: "© 2026 Республика Казахстан. Все официальные государственные права защищены.",
      privacy: "Политика конфиденциальности данных",
      terms: "Академические правила и условия",
      accessibility: "Заявление о цифровой доступности",
      support: "Центр поддержки поступающих",
      emergency: "Экстренная линия: 112 (РК)",
      links: [
        {
          title: "Правовая информация",
          items: [
            { label: "Портал Министерства", href: "#" },
            { label: "Антикоррупционная политика", href: "#" },
            { label: "Защита персональных данных", href: "#" },
            { label: "Статистика платформы", href: "#" }
          ]
        },
        {
          title: "Услуги для абитуриентов",
          items: [
            { label: "Интерактивный портал", href: "#" },
            { label: "Визовая поддержка", href: "#" },
            { label: "Сеть посольств РК", href: "#" },
            { label: "Разъяснительные вебинары", href: "#" }
          ]
        },
        {
          title: "Партнерские связи",
          items: [
            { label: "Офис Болонского процесса", href: "#" },
            { label: "Евразийский техно-альянс", href: "#" },
            { label: "Комиссия ЮНЕСКО в РК", href: "#" },
            { label: "Ассоциация выпускников", href: "#" }
          ]
        }
      ]
    }
  }
};
