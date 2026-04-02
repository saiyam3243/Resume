
export type AccentColor = "green" | "blue" | "yellow" | "purple" | "gray"

export interface ExperienceItem {
  role: string
  company: string
  period: string
  details: string[]
  tech: string[]
  link: string
  color: AccentColor
}

export interface ProjectItem {
  title: string
  role: string
  period: string
  details: string[]
  tech: string[]
  link: string
  color: AccentColor
}

// ─── Color helper ─────────────────────────────────────────────────────────────

export const accentClasses: Record<AccentColor, { border: string; text: string }> = {
  green:  { border: "border-green-600",  text: "text-green-600"  },
  blue:   { border: "border-blue-600",   text: "text-blue-600"   },
  yellow: { border: "border-yellow-600", text: "text-yellow-600" },
  purple: { border: "border-purple-600", text: "text-purple-600" },
  gray:   { border: "border-gray-400",   text: "text-gray-500"   },
}

// ─── Translations ─────────────────────────────────────────────────────────────

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    resume: "Resume",
    contact: "Contact",

    // Hero Section
    heroTitle: "Saiyam Jain",
    heroSubtitle: "Frontend & Fullstack Engineer",
    availableText: "Available · Munich",
    heroDescription:
      "Professional experience in Frontend, Backend, and Fullstack development & Data Visualization across startups, a Siemens subsidiary, and an internship team lead role — actively looking for new opportunities.",
    learnMore: "Learn More About Me",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Me",
    aboutDescription: "Get to know more about my journey, experiences, and what drives my passion for technology.",
    personalProfile: "Personal Profile",
    aboutText1:
      "I'm a Computer Science student at the Technical University of Munich with hands-on experience in both startups and large organisations. My journey has taken me from software development roles to co-founding a loyalty marketplace platform and leading a frontend team as an intern.",
    aboutText2:
      "Beyond academics and work, I actively contribute to community initiatives, give public talks on Jainism across Europe, and enjoy teaching, chess, and cricket.",
    interestsHobbies: "Interests & Hobbies",

    // Professional Experience
    experienceTitle: "Professional Experience",
    experience: [
      {
        role: "Intern, Frontend Team Lead & Developer",
        company: "Adtran, Munich",
        period: "Oct 2025 – Jan 2026",
        details: [
          "Led frontend development of a real-time fiber optic network monitoring portal (ALMO system) used by field engineers.",
          "Designed dashboards with live alarms, SLA countdown timers, and engineer activity feeds.",
          "Integrated REST APIs for alarm ingestion, ticket creation, and remote diagnostic workflows.",
          "Owned end-to-end frontend architecture decisions as the team's lead developer.",
        ],
        tech: ["React", "React Native", "TypeScript", "Vite", "Expo"],
        link: "https://www.adtran.com/",
        color: "purple",
      },
      {
        role: "Working Student, Software Development",
        company: "Yunex Traffic, Munich",
        period: "Jun 2024 – Present",
        details: [
          "Contribute to Intelligent Traffic Systems (ITS) and smart city mobility ecosystems at Yunex Traffic — a global leader in traffic infrastructure software.",
          "Develop and maintain Grafana dashboards to visualise real-time traffic data, system health, KPIs, and alerts.",
          "Work across frontend and backend modules in traffic management software (signal control, incident detection).",
          "Support EV charging infrastructure modules; Yunex is an EV service partner for ABB E-Mobility in Germany.",
        ],
        tech: ["React", "Java", "Kubernetes", "Kafka", "Spring-Boot"],
        link: "https://www.yunextraffic.com/",
        color: "green",
      },
      {
        role: "Co-Founder & CTO",
        company: "TreueGo, Munich",
        period: "Oct 2024 – May 2025",
        details: [
          "Co-founded a loyalty marketplace platform for local businesses to run digital rewards programs.",
          "Built a cross-platform prototype (React Native + Expo), including user management, rewards logic, and analytics.",
          "Designed modular architecture for payments, notifications, and dashboard to ensure scalability.",
          "Collaborated with business & marketing teams to align product vision with market needs.",
        ],
        tech: ["React Native", "Supabase", "Expo"],
        link: "https://www.treuego.de",
        color: "blue",
      },
      {
        role: "Working Student, Software Tools",
        company: "EcoG, Munich",
        period: "Mar 2024 – May 2024",
        details: [
          "Integrated multiple payment terminal providers into EcoG's backend for EV charging systems.",
          "Developed scripts to automate periodic renewal of EV charging certificates, ensuring compliance and uptime.",
          "Conducted integration and interoperability testing on SAP e-mobility platforms for certification.",
        ],
        tech: ["Express", "TypeScript", "C#"],
        link: "https://www.ecog.io",
        color: "yellow",
      },
      {
        role: "Junior Associate",
        company: "Projekt0708 (now p78), Munich",
        period: "Mar 2023 – Dec 2023",
        details: [
          "Worked at an IT consulting firm specialising in SAP / HR technology — now known as p78.",
          "Delivered client-facing digital solutions to streamline job application and HR workflows.",
          "Conducted full-cycle testing, deployment, and integration of web & SAP modules.",
        ],
        tech: ["Java", "SAPUI5", "SAP4HANA"],
        link: "https://www.projekt0708.com/",
        color: "gray",
      },
    ] as ExperienceItem[],

    // Resume Section
    resumeTitle: "Resume",
    resumeDescription: "A comprehensive overview of my education, skills, projects, and achievements.",
    education: "Education",
    examinationAchievements: "Examination Achievements",
    examinationDescription: "Standardized test scores and competitive exam results",
    technicalSkills: "Technical Skills",
    programmingLanguages: "Programming Languages",
    databaseTools: "Database & Tools",
    languages: "Languages",
    projects: "Projects",
    certificationsAwards: "Scholarships & Awards",
    certifications: "Scholarships",
    leadershipAwards: "Leadership & Other Achievements",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription:
      "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.",
    contactInformation: "Contact Information",
    contactChannels: "Feel free to reach out through any of these channels",
    email: "sjain3243@gmail.com",
    location: "Munich, Germany",
    connectOnline: "Connect Online",
    connectPlatforms: "Let's connect on professional platforms",
    githubProfile: "GitHub Profile",
    linkedinProfile: "LinkedIn Profile",
    collaborationText: "Interested in collaboration or have a project in mind? I'd love to hear from you!",
    sendEmail: "Send Email",
    downloadResume: "Download Resume",
    downloadDescription: "Get a professionally formatted PDF copy of my resume",
    downloadText:
      "Download my complete resume in PDF format, including all education, skills, projects, and achievements.",
    downloadPDF: "Download PDF Resume",
    downloading: "Downloading…",

    // Footer
    footerText: `© ${new Date().getFullYear()} Saiyam Jain. Built with passion for technology and innovation.`,

    // Skills and other content
    native: "Native",
    currentlyPursuing: "B.Sc. Informatik, Technical University of Munich",
    cgpa: "Thesis: Sustainable Tourism Recommendation Systems",
    born: "Born: 26/07/2004, Jabalpur, India",

    // Interests
    problemSolving: "Problem Solving",
    financialMarkets: "Sustainable Solutions & Innovation",
    leadership: "Leadership & Public Speaking",
    sports: "Chess & Cricket",
    mathematics: "Mathematics & Data Analysis",
    programming: "Programming",

    // Education details
    languageCertificate: "German Language Certificate (C1)",
    germanProficiency: "German Language Proficiency",
    bachelorTech: "Bachelor of Science",
    computerScience: "Computer Science",
    keySubjects: "Key Modules:",

    // Examination descriptions
    iitjeeDesc: "Passed one of India's most competitive exams among over a million candidates",
    ieltsDesc: "German language proficiency",
    testdafDesc: "Bachelor degree in Computer Science at TUM",
    testasDesc: "High school examination / Abitur Equivalent",

    projectList: [
      {
        title: "Jain Community Europe Website",
        role: "Fullstack Developer",
        period: "Aug 2025 – Present",
        details: [
          "Developing a community platform for the Jain community across Europe to foster connection, events, and cultural engagement.",
          "Built using Next.js, Vercel, and Supabase for serverless architecture and real-time data synchronisation.",
          "Implemented responsive UI design, authentication, and event-management modules.",
        ],
        tech: ["Next.js", "Vercel", "Supabase", "TailwindCSS"],
        link: "https://JainCommunityEurope.com",
        color: "green",
      },
      {
        title: "TravelGreen (Bachelor Thesis)",
        role: "Researcher & Fullstack Developer",
        period: "Oct 2024 – Jan 2025",
        details: [
          "Conducted academic research on balancing sustainability and user experience in digital tourism systems.",
          "Designed and implemented a sustainable tourism recommendation engine suggesting eco-friendly destinations.",
          "Applied Green UX principles to increase user engagement while promoting responsible travel.",
        ],
        tech: ["React", "Firebase", "OpenAI API", "Data Analysis"],
        link: "https://travelgreen.firebaseapp.com/",
        color: "blue",
      },
      {
        title: "La Famiglia Practicum",
        role: "Frontend / Fullstack Developer",
        period: "Oct 2023 – Mar 2024",
        details: [
          "Developed an AI-powered intelligence platform for tracking startups and emerging companies in Europe.",
          "Integrated data mining, analytics, and visualisation features for investment insights and reporting.",
          "Acted as a technical bridge between three teams, ensuring full-stack integration and reliable deployment.",
        ],
        tech: ["React", "Node.js", "Python", "AI / Data Mining"],
        link: "https://github.com/la-famiglia-jst2324",
        color: "yellow",
      },
      {
        title: "AirPingu",
        role: "Software Engineering College Project",
        period: "Mar 2022 – Jul 2022",
        details: [
          "Designed and implemented a flight management system using React and Spring Boot.",
          "Developed trip-planning, flight interaction, and feedback features improving usability and performance.",
          "Collaborated in an agile team with a focus on clean code and effective user testing.",
        ],
        tech: ["React", "Spring Boot", "REST API", "MySQL"],
        link: "https://github.com/Akshat125/Flight-Hub",
        color: "purple",
      },
      {
        title: "Hackathons",
        role: "HackUPC 2024, Start Hack 2024 & 2025 (St. Gallen)",
        period: "May 2024 – Mar 2025",
        details: [
          "Built an AI voice assistant for warehouse operations improving order management via voice commands.",
          "Created ESG-focused investment applications connecting sustainability-minded investors with ethical opportunities.",
          "Developed FarmSmart, an AI solution promoting sustainable agriculture and improved farm resource management.",
        ],
        tech: ["AI / NLP", "Voice Recognition", "ESG Tech", "Hackathon Innovation"],
        link: "https://www.yunextraffic.com/",
        color: "gray",
      },
    ] as ProjectItem[],

    skillsAndAchievements: "Skills & Achievements",
    codingSkills: "Programming & Coding",
    techStack: "Tech Stack",
    achievements: "Achievements & Scholarships",
    otherInterests: "Other Interests",
    coreModules: "Core Modules",
    languageSchool: "Language School",
    highSchool: "High School / Abitur Equivalent",

    tumUniversity: "Technical University of Munich",
    tumDegree: "B.Sc. Informatik (Computer Science)",
    tumLocation: "Munich, Germany",
    tumPeriod: "Oct 2021 – Oct 2025",
    coreModulesTitle: "Core Modules:",
    coreModulesList: [
      "Software Engineering",
      "Data Analysis",
      "Statistics",
      "Algorithms & Data Structures",
      "Operating Systems",
      "Databases",
      "Theory of Computation",
      "Mathematics",
      "Computer Architecture",
      "Networks & IT Security",
    ],
    tumDescription:
      "Developed strong foundations in multiple programming paradigms, algorithmic complexity analysis, and efficient data structure implementation. Gained hands-on experience through practical coursework and numerous project-based assignments.",

    languageSchoolName: "Eurasia Language School",
    languageSchoolCourse: "German Language (A1–C1)",
    languageSchoolLocation: "Berlin, Germany",
    languageSchoolPeriod: "Jan 2021 – Sep 2022",
    languageSchoolDescription:
      "Completed intensive German language training from beginner to advanced (C1) proficiency, focusing on academic and professional communication.",

    highSchoolName: "Delhi Public School",
    highSchoolCourse: "High School / Abitur Equivalent",
    highSchoolLocation: "Aligarh, India",
    highSchoolPeriod: "Apr 2017 – Apr 2019",
    highSchoolDescription1: "Majored in",
    highSchoolSubjects: "Mathematics, Physics, and Chemistry",
    highSchoolDescription2: "Graduated with",
    highSchoolScore: "92.2% (Note 1.2)",
    highSchoolOverallScoreText: "overall score.",
    achievementsList: [
      "Awarded a €220 monthly stipend from the Reemtsma Begabtenförderungswerk since March 2022.",
      "Successfully cleared the IIT-JEE Mains and Advanced — one of the world's most competitive exams, surpassing over a million candidates.",
    ],
    otherInterestsDescription:
      "Public speaker on Jainism, teaching 50+ people across Europe online. Enthusiastic about chess and cricket, combining strategic thinking with teamwork.",

    fileSize: "File size: ~400KB",
    viewCertificate: "View Certificate",
  },

  de: {
    // Navigation
    home: "Startseite",
    about: "Über mich",
    resume: "Lebenslauf",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Saiyam Jain",
    heroSubtitle: "Frontend & Fullstack Entwickler",
    availableText: "Verfügbar · München",
    heroDescription:
      "Berufserfahrung in Frontend-, Backend- und Fullstack-Entwicklung sowie Datenvisualisierung – in Startups, einem Siemens-Tochterunternehmen und als Praktikant in einer Teamleitungsrolle. Derzeit aktiv auf der Suche nach einer neuen beruflichen Herausforderung.",
    learnMore: "Mehr über mich",
    getInTouch: "Kontakt aufnehmen",

    // About Section
    aboutTitle: "Über mich",
    aboutDescription: "Erfahren Sie mehr über meinen Werdegang, meine Erfahrungen und meine Leidenschaft für Technologie.",
    personalProfile: "Persönliches Profil",
    aboutText1:
      "Ich bin Informatikstudent an der Technischen Universität München mit praktischer Erfahrung sowohl in Start-ups als auch in großen Unternehmen. Mein Weg führte mich von Werkstudentenstellen bis zur Mitgründung einer Treueplattform und der Leitung eines Frontend-Teams als Praktikant.",
    aboutText2:
      "Neben Studium und Beruf engagiere ich mich in Gemeinschaftsprojekten, halte Vorträge über den Jainismus in ganz Europa und unterrichte, spiele Schach und Cricket.",
    interestsHobbies: "Interessen & Hobbys",

    // Professional Experience
    experienceTitle: "Berufserfahrung",
    experience: [
      {
        role: "Praktikant, Frontend Team Lead & Entwickler",
        company: "Adtran, München",
        period: "Okt 2025 – Jan 2026",
        details: [
          "Leitete die Frontend-Entwicklung eines Echtzeit-Überwachungsportals für Glasfasernetze (ALMO-System), das von Feldingenieuren genutzt wird.",
          "Entwarf Dashboards mit Live-Alarmen, SLA-Countdowns und Ingenieurs-Aktivitätsfeeds.",
          "Integrierte REST-APIs für Alarmerfassung, Ticket-Erstellung und Ferndiagnose-Workflows.",
          "Verantwortete als leitender Entwickler die gesamte Frontend-Architektur.",
        ],
        tech: ["React", "React Native", "TypeScript", "Vite", "Expo"],
        link: "https://www.adtran.com/",
        color: "purple",
      },
      {
        role: "Werkstudent – Softwareentwicklung",
        company: "Yunex Traffic, München",
        period: "Jun 2024 – Gegenwart",
        details: [
          "Mitwirkung an Intelligent Traffic Systems (ITS) und Smart-City-Mobilitätslösungen bei Yunex Traffic.",
          "Entwicklung und Wartung von Grafana-Dashboards zur Visualisierung von Echtzeit-Verkehrsdaten, KPIs und Warnmeldungen.",
          "Arbeit an Frontend- und Backend-Modulen der Verkehrsmanagement-Software (Signalsteuerung, Ereigniserkennung).",
          "Unterstützung von EV-Ladeinfrastruktur-Modulen; Yunex ist EV-Servicepartner von ABB E-Mobility in Deutschland.",
        ],
        tech: ["React", "Java", "Kubernetes", "Kafka", "Spring Boot"],
        link: "https://www.yunextraffic.com/",
        color: "green",
      },
      {
        role: "Mitgründer & CTO",
        company: "TreueGo, München",
        period: "Okt 2024 – Mai 2025",
        details: [
          "Mitgründung einer Treueplattform für lokale Unternehmen zur Durchführung digitaler Bonusprogramme.",
          "Entwicklung eines plattformübergreifenden Prototyps (React Native + Expo) mit Benutzerverwaltung, Belohnungslogik und Analytik.",
          "Entwurf einer modularen Architektur für Zahlungen, Benachrichtigungen und Dashboard.",
          "Enge Zusammenarbeit mit Geschäfts- und Marketingteams für schnelle Produktiterationen.",
        ],
        tech: ["React Native", "Supabase", "Expo"],
        link: "https://www.treuego.de",
        color: "blue",
      },
      {
        role: "Werkstudent – Software Tools",
        company: "EcoG, München",
        period: "Mär 2024 – Mai 2024",
        details: [
          "Integration mehrerer Zahlungsdienstanbieter in die EcoG-Backend-Architektur für EV-Ladesysteme.",
          "Entwicklung von Skripten zur automatisierten Verlängerung von EV-Ladezertifikaten.",
          "Integrations- und Interoperabilitätstests auf SAP-E-Mobility-Plattformen zur Zertifizierung.",
        ],
        tech: ["Express", "TypeScript", "C#"],
        link: "https://www.ecog.io",
        color: "yellow",
      },
      {
        role: "Junior Associate",
        company: "Projekt0708 (heute p78), München",
        period: "Mär 2023 – Dez 2023",
        details: [
          "IT-Beratungsunternehmen mit Spezialisierung auf SAP- und HR-Technologien – heute bekannt als p78.",
          "Entwicklung kundenorientierter digitaler Lösungen zur Optimierung von Bewerbungs- und HR-Prozessen.",
          "Tests, Deployment und Integration von Web- und SAP-Modulen über den gesamten Entwicklungszyklus.",
        ],
        tech: ["Java", "SAPUI5", "SAP S/4HANA"],
        link: "https://www.projekt0708.com/",
        color: "gray",
      },
    ] as ExperienceItem[],

    // Resume Section
    resumeTitle: "Lebenslauf",
    resumeDescription: "Eine umfassende Übersicht über meine Ausbildung, Fähigkeiten, Projekte und Erfolge.",
    education: "Ausbildung",
    examinationAchievements: "Prüfungserfolge",
    examinationDescription: "Standardisierte Testergebnisse und Wettbewerbsergebnisse",
    technicalSkills: "Technische Fähigkeiten",
    programmingLanguages: "Programmiersprachen",
    databaseTools: "Datenbanken & Tools",
    languages: "Sprachen",
    projects: "Projekte",
    certificationsAwards: "Stipendien & Auszeichnungen",
    certifications: "Stipendien",
    leadershipAwards: "Führungs- & Weitere Leistungen",

    // Contact Section
    contactTitle: "Kontakt aufnehmen",
    contactDescription:
      "Ich bin offen für neue Möglichkeiten, Kooperationen oder ein Gespräch über Technologie.",
    contactInformation: "Kontaktinformationen",
    contactChannels: "Sie können mich über folgende Kanäle erreichen",
    email: "sjain3243@gmail.com",
    location: "München, Deutschland",
    connectOnline: "Online vernetzen",
    connectPlatforms: "Lassen Sie uns auf professionellen Plattformen vernetzen",
    githubProfile: "GitHub-Profil",
    linkedinProfile: "LinkedIn-Profil",
    collaborationText: "Interesse an einer Zusammenarbeit oder einem Projekt? Ich freue mich auf Ihre Nachricht!",
    sendEmail: "E-Mail senden",
    downloadResume: "Lebenslauf herunterladen",
    downloadDescription: "Laden Sie eine professionell formatierte PDF-Version meines Lebenslaufs herunter",
    downloadText:
      "Laden Sie meinen vollständigen Lebenslauf im PDF-Format herunter, einschließlich Ausbildung, Fähigkeiten, Projekte und Erfolge.",
    downloadPDF: "PDF-Lebenslauf herunterladen",
    downloading: "Wird heruntergeladen…",

    // Footer
    footerText: `© ${new Date().getFullYear()} Saiyam Jain. Erstellt mit Leidenschaft für Technologie und Innovation.`,

    // Skills and other content
    native: "Muttersprache",
    currentlyPursuing: "B.Sc. Informatik, Technische Universität München",
    cgpa: "Abschlussarbeit: Nachhaltige Tourismus-Empfehlungssysteme",
    born: "Geboren: 26.07.2004, Jabalpur, Indien",

    // Interests
    problemSolving: "Problemlösung",
    financialMarkets: "Nachhaltige Innovationen",
    leadership: "Führung & Öffentliches Reden",
    sports: "Schach & Cricket",
    mathematics: "Mathematik & Datenanalyse",
    programming: "Programmieren",

    // Education details
    languageCertificate: "Deutsch-Zertifikat (C1)",
    germanProficiency: "Deutschkenntnisse",
    bachelorTech: "Bachelor of Science",
    computerScience: "Informatik",
    keySubjects: "Kernmodule:",

    // Examination descriptions
    iitjeeDesc: "Bestanden unter mehr als einer Million Teilnehmern",
    ieltsDesc: "Deutschkenntnisse (C1)",
    testdafDesc: "Bachelorstudium Informatik an der TUM",
    testasDesc: "Abituräquivalent (High School)",

    projectList: [
      {
        title: "Jain Community Europe Website",
        role: "Fullstack-Entwickler",
        period: "Aug 2025 – Gegenwart",
        details: [
          "Entwicklung einer Community-Plattform für die Jain-Gemeinschaft in Europa für Vernetzung, Veranstaltungen und kulturellen Austausch.",
          "Erstellt mit Next.js, Vercel und Supabase für serverlose Architektur und Echtzeit-Datensynchronisierung.",
          "Responsives UI-Design, Authentifizierung und Event-Management-Module implementiert.",
        ],
        tech: ["Next.js", "Vercel", "Supabase", "TailwindCSS"],
        link: "https://JainCommunityEurope.com",
        color: "green",
      },
      {
        title: "TravelGreen (Bachelorarbeit)",
        role: "Forscher & Fullstack-Entwickler",
        period: "Okt 2024 – Jan 2025",
        details: [
          "Wissenschaftliche Forschung zur Balance zwischen Nachhaltigkeit und UX in digitalen Tourismussystemen.",
          "Implementierung einer nachhaltigen Tourismus-Empfehlungsplattform für umweltfreundliche Reiseziele.",
          "Green-UX-Prinzipien zur Steigerung der Nutzerbindung und Förderung verantwortungsvollen Reisens angewendet.",
        ],
        tech: ["React", "Firebase", "OpenAI API", "Datenanalyse"],
        link: "https://travelgreen.firebaseapp.com/",
        color: "blue",
      },
      {
        title: "La Famiglia Praktikum",
        role: "Frontend / Fullstack-Entwickler",
        period: "Okt 2023 – Mär 2024",
        details: [
          "KI-gestützte Analyseplattform zur Beobachtung von Start-ups in Europa entwickelt.",
          "Data-Mining-, Analyse- und Visualisierungsfunktionen für Investment-Einblicke integriert.",
          "Technische Schnittstelle zwischen drei Teams für Fullstack-Integration und stabiles Deployment.",
        ],
        tech: ["React", "Node.js", "Python", "KI / Data Mining"],
        link: "https://github.com/la-famiglia-jst2324",
        color: "yellow",
      },
      {
        title: "AirPingu",
        role: "Softwareentwicklungs-Hochschulprojekt",
        period: "Mär 2022 – Jul 2022",
        details: [
          "Flugmanagementsystem mit React und Spring Boot entworfen und implementiert.",
          "Reiseplanung, Fluginteraktion und Feedback-Funktionen zur Verbesserung von UX entwickelt.",
          "Agiles Team mit Fokus auf sauberen Code und effektives Benutzer-Testing.",
        ],
        tech: ["React", "Spring Boot", "REST API", "MySQL"],
        link: "https://github.com/Akshat125/Flight-Hub",
        color: "purple",
      },
      {
        title: "Hackathons",
        role: "HackUPC 2024, Start Hack 2024 & 2025 (St. Gallen)",
        period: "Mai 2024 – Mär 2025",
        details: [
          "KI-Sprachassistent für Lagerbetriebe zur Verbesserung der Auftragsabwicklung durch Sprachbefehle entwickelt.",
          "ESG-orientierte Investmentanwendungen für nachhaltig orientierte Investoren erstellt.",
          "FarmSmart entwickelt: KI-Lösung für nachhaltige Landwirtschaft und effiziente Ressourcennutzung.",
        ],
        tech: ["KI / NLP", "Spracherkennung", "ESG-Technologie", "Hackathon-Innovation"],
        link: "https://www.yunextraffic.com/",
        color: "gray",
      },
    ] as ProjectItem[],

    skillsAndAchievements: "Fähigkeiten & Erfolge",
    codingSkills: "Programmierung & Codierung",
    techStack: "Technologiestack",
    achievements: "Erfolge & Stipendien",
    otherInterests: "Weitere Interessen",
    coreModules: "Kernmodule",
    languageSchool: "Sprachschule",
    highSchool: "Gymnasium / Abitur-Äquivalent",

    tumUniversity: "Technische Universität München",
    tumDegree: "B.Sc. Informatik",
    tumLocation: "München, Deutschland",
    tumPeriod: "Okt 2021 – Okt 2025",
    coreModulesTitle: "Kernmodule:",
    coreModulesList: [
      "Software Engineering",
      "Datenanalyse",
      "Statistik",
      "Algorithmen & Datenstrukturen",
      "Betriebssysteme",
      "Datenbanken",
      "Theoretische Informatik",
      "Mathematik",
      "Rechnerarchitektur",
      "Netzwerke & IT-Sicherheit",
    ],
    tumDescription:
      "Fundierte Kenntnisse in verschiedenen Programmierparadigmen, algorithmischer Komplexitätsanalyse und effizienter Datenstruktur-Implementierung. Praktische Erfahrungen durch Projektarbeit und praxisnahe Lehrveranstaltungen.",

    languageSchoolName: "Eurasia Sprachschule",
    languageSchoolCourse: "Deutschsprachkurs (A1–C1)",
    languageSchoolLocation: "Berlin, Deutschland",
    languageSchoolPeriod: "Jan 2021 – Sep 2022",
    languageSchoolDescription:
      "Intensiver Deutschkurs von A1 bis C1 mit Schwerpunkt auf akademischer und beruflicher Kommunikation.",

    highSchoolName: "Delhi Public School",
    highSchoolCourse: "Abituräquivalent (High School)",
    highSchoolLocation: "Aligarh, Indien",
    highSchoolPeriod: "Apr 2017 – Apr 2019",
    highSchoolDescription1: "Leistungskurse in",
    highSchoolSubjects: "Mathematik, Physik und Chemie",
    highSchoolDescription2: "Abschluss mit",
    highSchoolScore: "92,2 % (Note 1,2)",
    highSchoolOverallScoreText: "Gesamtnote.",
    achievementsList: [
      "Seit März 2022 monatliches Stipendium von €220 durch das Reemtsma Begabtenförderungswerk.",
      "IIT-JEE Mains und Advanced bestanden – eine der anspruchsvollsten Prüfungen weltweit mit über einer Million Teilnehmenden.",
    ],
    otherInterestsDescription:
      "Öffentlicher Redner zum Thema Jainismus, unterrichtet über 50 Personen in ganz Europa online. Begeistert von Schach und Cricket.",

    fileSize: "Dateigröße: ~400KB",
    viewCertificate: "Zertifikat ansehen",
  },
}

// ─── Component ────────────────────────────────────────────────────────────────
