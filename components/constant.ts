export const siteContent = `
Saiyam Jain is a web developer and designer based in Germany.
He builds modern, minimalistic websites using Next.js, React, and Tailwind.
He focuses on UX, speed, and responsive design.
Portfolio projects include personal websites, startups, and web apps.
Contact: saiyamjain.de/contact
`;


export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    resume: "Resume",
    contact: "Contact",

    // Hero Section
    heroTitle: "Saiyam Jain",
    heroSubtitle: "Computer Science Undergraduate",
    heroDescription:
      "Professional experience in Frontend-, Backend-, Fullstack development & Data Visualization, actively looking for a new professional experience.",
    learnMore: "Learn More About Me",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Me",
    aboutDescription: "Get to know more about my journey, experiences, and what drives my passion for technology.",
    personalProfile: "Personal Profile",
    aboutText1:
      "I'm a Computer Science undergraduate at the Technical University of Munich with hands-on experience in both startups and large organizations. My journey has taken me from software development internships to co-founding a loyalty marketplace platform.",
    aboutText2:
      "Beyond my academic and professional pursuits, I actively contribute to community initiatives, have experience in public speaking on Jainism, and enjoy teaching, chess, and cricket.",
    interestsHobbies: "Interests & Hobbies",

    // Professional Experience
    experienceTitle: "Professional Experience",
    experience: [
      {
        role: "Intern, Frontend Team Lead & Developer",
        company: "Adtran, Munich",
        period: "Oct 2025 – Jan 2026",
        details: [
          "Built a responsive web portal for real-time monitoring and fault management in fiber optic networks (ALMO system).",
          "Designed intuitive dashboards displaying live alarms, SLA timers, and engineer activity using interactive maps and charts.",
          "Integrated REST APIs for alarm ingestion, ticket creation, and diagnostic workflows to streamline network operations.",
          "Developed role-based interfaces for Admins, Managers, and Field Engineers with secure authentication and workflow management."
        ],
        tech: ["React", "React Native", "Vite", "Expo", "TypeScript"],
        link: "https://www.adtran.com/en"
      },
      {
        role: "Working Student, Software Development",
        company: "Yunex Traffic, Munich (Siemens Traffic)",
        period: "Jun 2024 – Present",
        details: [
          "Contribute to Intelligent Traffic Systems (ITS) and smart city mobility ecosystems at Yunex Traffic — a global leader in traffic infrastructure and software.",
          "Develop and maintain Grafana dashboards to visualize real-time traffic data, system health, KPIs, and alerts.",
          "Work across frontend and backend modules in traffic management software (e.g. signal control, incident detection).",
          "Support modules for EV charging infrastructure, including service partnerships; Yunex is an EV service partner for ABB E-Mobility in Germany.",
          "Assist in remote monitoring, diagnostics, and optimization of ITS systems as part of maintenance and operations."
        ],
        tech: ["React", "Java", "Kubernetes", "Kafka", "Spring-Boot"],
        link: "https://www.yunextraffic.com/"
      },
      {
        role: "Co-Founder & CTO",
        company: "TreueGo, Munich",
        period: "Oct 2024 – May 2025",
        details: [
          "Co-founded a loyalty marketplace platform for local businesses to run digital rewards programs.",
          "Built a cross-platform prototype (React Native + Expo), including user management, rewards logic, and analytics.",
          "Designed architecture for modular integrations (e.g. payment, notifications, dashboard) to ensure scalability.",
          "Collaborated with business & marketing teams to align product vision with market needs and iterate rapidly."
        ],
        tech: ["React Native", "Supabase", "Expo"],
        link: "https://www.treuego.de"
      },
      {
        role: "Working Student, Software Tools",
        company: "EcoG, Munich",
        period: "Mar 2024 – May 2024",
        details: [
          "Integrated multiple payment terminal providers into EcoG’s backend architecture for EV charging systems.",
          "Developed scripts to automate the periodic renewal of EV charging certificates, ensuring compliance and uptime.",
          "Conducted integration and interoperability testing using EV simulators on SAP e-mobility platforms for certification."
        ],
        tech: ["Express", "Typescript", "C#"],
        link: "https://www.ecog.io"
      },
      {
        role: "Junior Associate",
        company: "Projekt0708 (now p78), Munich",
        period: "Mar 2023 – Dec 2023",
        details: [
          "Worked at an IT consulting firm specializing in SAP / HR technology — now known as p78.",
          "Delivered client-facing digital solutions to streamline job application and HR workflows.",
          "Conducted full-cycle testing, deployment, and integration of web & SAP modules.",
          "Engaged in cross-team collaboration (consultants, developers, clients) to deliver HR tech enhancements."
        ],
        tech: ["Java", "SAPUI5", "SAP4HANA"],
        link: "https://www.projekt0708.com/"
      }
    ],

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
    phone: "+49 15175929432",
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

    // Footer
    footerText: "© 2024 Saiyam Jain. Built with passion for technology and innovation.",

    // Skills and other content
    native: "Native",
    currentlyPursuing: "B.Sc. Computer Science, Technical University of Munich",
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
    // achievements: "Achievements:",

    // Examination descriptions
    iitjeeDesc: "Passed second most competitive exam in India among over a million candidates",
    ieltsDesc: "German language proficiency",
    testdafDesc: "Bachelor degree in Computer science at TUM",
    testasDesc: "High school examination / Abitur Equivalent",

    // Projects
    jainCommunityTitle: "JainCommunityEurope.com",
    jainCommunityDesc:
      "Built a voluntary community website using Vercel AI and Supabase for connecting people across Europe.",
    laFamigliaTitle: "La Famiglia Practicum",
    laFamigliaDesc:
      "Developed secure app infrastructure with authentication, access control, and third-party integrations.",
    eistProjectTitle: "Eist Project",
    eistProjectDesc:
      "Flight management application using React and Spring, enabling trip planning and user interactions.",

    // Certifications / Scholarships
    scholarshipTitle: "Reemtsma Begabtenförderungswerk",
    scholarshipDesc: "Scholarship recipient since March 2022",
    hackathonTitle: "Hackathon Participation",
    hackathonDesc: "HackUPC24, Start Hack25 & Hack24 St. Gallen with innovative AI and ESG-focused projects",

    // Awards
    publicSpeaking: "Public Speaking & Teaching",
    publicSpeakingDesc1: "Conducted talks on Jainism across Europe",
    publicSpeakingDesc2: "Taught 50+ learners in community sessions",
    publicSpeakingDesc3: "Active community engagement and leadership",
    publicSpeakingDesc4: "Hackathon achievements",

    // File info
    fileSize: "File size: ~400KB",
    viewCertificate: "View Certificate",

    projectList: [
      {
        title: "Jain Community Europe Website",
        role: "Fullstack Developer",
        period: "Aug 2025 – Present",
        details: [
          "Developing a community platform for the Jain community across Europe to foster connection, events, and cultural engagement.",
          "Built using Next.js, Vercel v0, and Supabase for serverless architecture and real-time data synchronization.",
          "Implemented responsive UI design, authentication, and event-management modules to ensure accessibility and scalability."
        ],
        tech: ["Next.js", "Vercel", "Supabase", "TailwindCSS"],
        link: "https://JainCommunityEurope.com"
      },
      {
        title: "TravelGreen (Bachelor Thesis)",
        role: "Researcher & Fullstack Developer",
        period: "Oct 2024 – Jan 2025",
        details: [
          "Conducted academic research on balancing sustainability and user experience in digital tourism systems.",
          "Designed and implemented a sustainable tourism recommendation engine suggesting eco-friendly destinations.",
          "Applied green UX principles to increase user engagement while promoting responsible travel behaviors."
        ],
        tech: ["React", "Firebase", "OpenAI API", "Data Analysis"],
        link: "https://travelgreen.firebaseapp.com/"
      },
      {
        title: "La Famiglia Practicum",
        role: "Frontend / Fullstack Developer",
        period: "Oct 2023 – Mar 2024",
        details: [
          "Developed an AI-powered intelligence platform for tracking startups and emerging companies in Europe.",
          "Integrated data mining, analytics, and visualization features for investment insights and reporting.",
          "Acted as a technical bridge between three teams, ensuring full-stack integration and reliable deployment."
        ],
        tech: ["React", "Node.js", "Python", "AI / Data Mining"],
        link: "https://github.com/la-famiglia-jst2324"
      },
      {
        title: "AirPingu",
        role: "Software Engineering College Project",
        period: "Mar 2022 – Jul 2022",
        details: [
          "Designed and implemented a flight management system using React and Spring Boot.",
          "Developed trip-planning, flight interaction, and feedback features improving usability and performance.",
          "Collaborated in an agile team setting, ensuring clean code and effective user testing."
        ],
        tech: ["React", "Spring Boot", "REST API", "MySQL"],
        link: "https://github.com/Akshat125/Flight-Hub"
      },
      {
        title: "Hackathons",
        role: "HackUPC 2024, Start Hack 2024 & 2025 (St. Gallen)",
        period: "May 2024 – Mar 2025",
        details: [
          "Built an AI voice assistant for warehouse operations improving order management efficiency through voice commands.",
          "Created ESG-focused investment applications connecting sustainability-minded investors with ethical opportunities.",
          "Developed FarmSmart, an AI solution promoting sustainable agriculture and improved farm resource management."
        ],
        tech: ["AI / NLP", "Voice Recognition", "ESG Tech", "Hackathon Innovation"],
        link: "https://www.yunextraffic.com/"
      }
    ],

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
      "Networks & IT Security"
    ],
    tumDescription:
      "Developed strong foundations in multiple programming paradigms (object-oriented and functional), algorithmic complexity analysis, and efficient data structure implementation. Gained hands-on experience through practical coursework and numerous project-based assignments.",

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
      "Successfully cleared the IIT-JEE Mains and Advanced — one of the world’s most competitive exams, surpassing over a million candidates."
    ],
    otherInterestsDescription:
      "Public speaker on Jainism, teaching 50+ people across Europe online. Enthusiastic about chess and cricket, combining strategic thinking with teamwork."

  },

  de: {
    // Navigation
    home: "Startseite",
    about: "Über mich",
    resume: "Lebenslauf",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Saiyam Jain",
    heroSubtitle: "Informatiker",
    heroDescription:
      "Berufserfahrung in Frontend-, Backend-, Fullstack-Entwicklung und Datenvisualisierung, derzeit aktiv auf der Suche nach einer neuen beruflichen Herausforderung.",
    learnMore: "Mehr über mich",
    getInTouch: "Kontakt aufnehmen",

    // About Section
    aboutTitle: "Über mich",
    aboutDescription: "Erfahren Sie mehr über meinen Werdegang, meine Erfahrungen und meine Leidenschaft für Technologie.",
    personalProfile: "Persönliches Profil",
    aboutText1:
      "Ich bin Informatikstudent an der Technischen Universität München mit praktischer Erfahrung sowohl in Start-ups als auch in großen Unternehmen. Mein Weg führte mich von Werkstudententätigkeiten bis zur Mitgründung einer Loyalty-Marktplatzplattform.",
    aboutText2:
      "Neben Studium und Beruf engagiere ich mich in Gemeinschaftsprojekten, halte Vorträge über den Jainismus und habe Freude am Unterrichten, Schach und Cricket.",
    interestsHobbies: "Interessen & Hobbys",

    // Professional Experience
    experienceTitle: "Berufserfahrung",
    experience: [
      {
        role: "Praktikant, Frontend Team Lead & Entwickler",
        company: "Adtran, München",
        period: "Okt 2025 – Jan 2026",
        details: [
          "Entwicklung eines responsiven Webportals zur Echtzeitüberwachung und Fehlerverwaltung in Glasfasernetzwerken (ALMO-System).",
          "Gestaltung intuitiver Dashboards mit Live-Alarmen, SLA-Timern und Ingenieuraktivitäten auf interaktiven Karten und Diagrammen.",
          "Integration von REST-APIs zur Alarmverarbeitung, Ticket-Erstellung und Unterstützung diagnostischer Workflows zur Optimierung des Netzbetriebs.",
          "Entwicklung rollenbasierter Benutzeroberflächen für Administratoren, Manager und Servicetechniker mit sicherer Authentifizierung und effizientem Workflow-Management."
        ],
        tech: ["React", "React Native", "Vite", "Expo", "TypeScript"],
        link: "https://www.adtran.com/en"
      },      
      {
        role: "Werkstudent – Softwareentwicklung",
        company: "Yunex Traffic, München (Siemens Traffic)",
        period: "Jun 2024 – Gegenwart",
        details: [
          "Mitwirkung an Intelligent Traffic Systems (ITS) und Smart-City-Mobilitätslösungen bei Yunex Traffic – einem weltweit führenden Anbieter von Verkehrsinfrastruktur und Software.",
          "Entwicklung und Wartung von Grafana-Dashboards zur Visualisierung von Echtzeit-Verkehrsdaten, Systemzustand, KPIs und Warnmeldungen.",
          "Arbeit an Frontend- und Backend-Modulen der Verkehrsmanagement-Software (z. B. Signalsteuerung, Ereigniserkennung).",
          "Unterstützung von Modulen für Ladeinfrastruktur von Elektrofahrzeugen, einschließlich Servicepartnerschaften; Yunex ist EV-Servicepartner von ABB E-Mobility in Deutschland.",
          "Unterstützung bei der Fernüberwachung, Diagnose und Optimierung von ITS-Systemen im Rahmen von Betrieb und Wartung."
        ],
        tech: ["React", "Java", "Kubernetes", "Kafka", "Spring Boot"],
        link: "https://www.yunextraffic.com/"
      },
      {
        role: "Mitgründer & CTO",
        company: "TreueGo, München",
        period: "Okt 2024 – Mai 2025",
        details: [
          "Mitgründung einer Treueplattform für lokale Unternehmen zur Durchführung digitaler Bonus- und Belohnungsprogramme.",
          "Entwicklung eines plattformübergreifenden Prototyps (React Native + Expo) mit Benutzerverwaltung, Belohnungslogik und Analytik.",
          "Entwurf einer modularen Architektur für Erweiterungen wie Zahlung, Benachrichtigungen und Dashboard zur Gewährleistung von Skalierbarkeit.",
          "Enge Zusammenarbeit mit Geschäfts- und Marketingteams, um Produktvision und Marktanforderungen aufeinander abzustimmen und schnelle Iterationen zu ermöglichen."
        ],
        tech: ["React Native", "Supabase", "Expo"],
        link: "https://www.treuego.de"
      },
      {
        role: "Werkstudent – Software Tools",
        company: "EcoG, München",
        period: "Mär 2024 – Mai 2024",
        details: [
          "Integration mehrerer Zahlungsdienstanbieter in die Backend-Architektur von EcoG für Ladeinfrastruktursysteme von Elektrofahrzeugen.",
          "Entwicklung von Skripten zur automatisierten Verlängerung von EV-Ladezertifikaten, um Compliance und Systemverfügbarkeit sicherzustellen.",
          "Durchführung von Integrations- und Interoperabilitätstests mit EV-Simulatoren auf SAP-E-Mobility-Plattformen zur Zertifizierung."
        ],
        tech: ["Express", "TypeScript", "C#"],
        link: "https://www.ecog.io"
      },
      {
        role: "Junior Associate",
        company: "Projekt0708 (p78), München",
        period: "Mär 2023 – Dez 2023",
        details: [
          "Mitarbeit in einem IT-Beratungsunternehmen mit Spezialisierung auf SAP- und HR-Technologien – heute bekannt als p78.",
          "Entwicklung kundenorientierter digitaler Lösungen zur Optimierung von Bewerbungs- und HR-Prozessen.",
          "Durchführung von Tests, Deployment und Integration von Web- und SAP-Modulen über den gesamten Entwicklungszyklus.",
          "Zusammenarbeit mit Beratern, Entwicklern und Kunden zur Umsetzung von HR-Tech-Innovationen."
        ],
        tech: ["Java", "SAPUI5", "SAP S/4HANA"],
        link: "https://www.projekt0708.com/"
      }
    ],

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
    phone: "+49 15175929432",
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

    // Footer
    footerText: "© 2024 Saiyam Jain. Erstellt mit Leidenschaft für Technologie und Innovation.",

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
    achievements: "Erfolge:",

    // Examination descriptions
    iitjeeDesc: "Bestanden IIT-JEE Mains & Advanced unter mehr als einer Million Teilnehmern",
    ieltsDesc: "Englischkenntnisse (C2)",
    testdafDesc: "Deutschkenntnisse (C1)",
    testasDesc: "Akademischer Eignungstest (Studienkolleg-äquivalent)",

    // Projects
    jainCommunityTitle: "JainCommunityEurope.com",
    jainCommunityDesc:
      "Freiwillige Entwicklung einer Community-Website mit Vercel AI und Supabase zur Vernetzung in Europa.",
    laFamigliaTitle: "La Famiglia Practicum",
    laFamigliaDesc:
      "Entwicklung einer sicheren App-Infrastruktur mit Authentifizierung, Zugriffskontrolle und Drittanbieter-Integration.",
    eistProjectTitle: "Eist Project",
    eistProjectDesc:
      "Flugmanagement-App mit React und Spring, die Reiseplanung und Nutzerinteraktion ermöglicht.",

    // Certifications / Scholarships
    scholarshipTitle: "Reemtsma Begabtenförderungswerk",
    scholarshipDesc: "Stipendiat seit März 2022",
    hackathonTitle: "Hackathon-Teilnahme",
    hackathonDesc: "HackUPC24, Start Hack25 & Hack24 St. Gallen mit innovativen KI- und ESG-Projekten",

    // Awards
    publicSpeaking: "Öffentliches Reden & Lehre",
    publicSpeakingDesc1: "Vorträge über den Jainismus in ganz Europa",
    publicSpeakingDesc2: "Unterricht für 50+ Lernende in Gemeinschaftskursen",
    publicSpeakingDesc3: "Aktives Gemeinschaftsengagement und Führung",
    publicSpeakingDesc4: "Hackathon-Erfolge",

    // File info
    fileSize: "Dateigröße: ~400KB",
    viewCertificate: "Zertifikat ansehen",

    projectList: [
      {
        title: "Jain Community Europe Website",
        role: "Fullstack-Entwickler",
        period: "Aug 2025 – Gegenwart",
        details: [
          "Entwicklung einer Community-Plattform für die Jain-Gemeinschaft in ganz Europa zur Förderung von Vernetzung, Veranstaltungen und kulturellem Austausch.",
          "Erstellt mit Next.js, Vercel v0 und Supabase für eine serverlose Architektur und Echtzeit-Datensynchronisierung.",
          "Implementierung eines responsiven UI-Designs, Authentifizierung und Event-Management-Modulen zur Gewährleistung von Zugänglichkeit und Skalierbarkeit."
        ],
        tech: ["Next.js", "Vercel", "Supabase", "TailwindCSS"],
        link: "https://JainCommunityEurope.com"
      },
      {
        title: "TravelGreen (Bachelorarbeit)",
        role: "Forscher & Fullstack-Entwickler",
        period: "Okt 2024 – Jan 2025",
        details: [
          "Wissenschaftliche Forschung über die Balance zwischen Nachhaltigkeit und Benutzererfahrung in digitalen Tourismussystemen.",
          "Entwicklung und Implementierung einer nachhaltigen Tourismus-Empfehlungsplattform, die umweltfreundliche Reiseziele vorschlägt.",
          "Anwendung von Green-UX-Prinzipien zur Steigerung der Nutzerbindung und Förderung verantwortungsvollen Reiseverhaltens."
        ],
        tech: ["React", "Firebase", "OpenAI API", "Datenanalyse"],
        link: "https://travelgreen.firebaseapp.com/"
      },
      {
        title: "La Famiglia Praktikum",
        role: "Frontend / Fullstack-Entwickler",
        period: "Okt 2023 – Mär 2024",
        details: [
          "Entwicklung einer KI-gestützten Analyseplattform zur Beobachtung von Start-ups und aufstrebenden Unternehmen in Europa.",
          "Integration von Data-Mining-, Analyse- und Visualisierungsfunktionen für Investment-Einblicke und Berichterstattung.",
          "Agierte als technische Schnittstelle zwischen drei Teams und stellte eine vollständige Fullstack-Integration sowie stabile Bereitstellung sicher."
        ],
        tech: ["React", "Node.js", "Python", "KI / Data Mining"],
        link: "https://github.com/la-famiglia-jst2324"
      },
      {
        title: "AirPingu",
        role: "Softwareentwicklungs-Hochschulprojekt",
        period: "Mär 2022 – Jul 2022",
        details: [
          "Entwurf und Implementierung eines Flugmanagementsystems mit React und Spring Boot.",
          "Entwicklung von Funktionen für Reiseplanung, Fluginteraktion und Feedback, um Benutzerfreundlichkeit und Leistung zu verbessern.",
          "Zusammenarbeit in einem agilen Team mit Fokus auf sauberen Code und effektives Benutzer-Testing."
        ],
        tech: ["React", "Spring Boot", "REST API", "MySQL"],
        link: "https://github.com/Akshat125/Flight-Hub"
      },
      {
        title: "Hackathons",
        role: "HackUPC 2024, Start Hack 2024 & 2025 (St. Gallen)",
        period: "Mai 2024 – Mär 2025",
        details: [
          "Entwicklung eines KI-Sprachassistenten für Lagerbetriebe zur Verbesserung der Auftragsabwicklung durch Sprachbefehle.",
          "Erstellung von ESG-orientierten Investmentanwendungen, die nachhaltig orientierte Investoren mit ethischen Möglichkeiten verbinden.",
          "Entwicklung von FarmSmart, einer KI-Lösung zur Förderung nachhaltiger Landwirtschaft und effizienter Ressourcennutzung."
        ],
        tech: ["KI / NLP", "Spracherkennung", "ESG-Technologie", "Hackathon-Innovation"],
        link: "https://www.yunextraffic.com/"
      }
    ],
    skillsAndAchievements: "Fähigkeiten & Erfolge",
    codingSkills: "Programmierung & Codierung",
    techStack: "Technologiestack",
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
      "Netzwerke & IT-Sicherheit"
    ],
    tumDescription:
      "Erwarb fundierte Kenntnisse in verschiedenen Programmierparadigmen (objektorientiert und funktional), in der Analyse von algorithmischer Komplexität sowie in der effizienten Implementierung von Datenstrukturen. Praktische Erfahrungen wurden durch Projektarbeit und praxisnahe Lehrveranstaltungen vertieft.",

    languageSchoolName: "Eurasia Sprachschule",
    languageSchoolCourse: "Deutschsprachkurs (A1–C1)",
    languageSchoolLocation: "Berlin, Deutschland",
    languageSchoolPeriod: "Jan 2021 – Sep 2022",
    languageSchoolDescription:
      "Absolvierte einen intensiven Deutschkurs von der Anfänger- bis zur C1-Stufe mit Schwerpunkt auf akademischer und beruflicher Kommunikation.",

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
      "Seit März 2022 mit einem monatlichen Stipendium von 220 € durch das Reemtsma Begabtenförderungswerk ausgezeichnet.",
      "Erfolgreich die IIT-JEE Mains und Advanced bestanden – eine der anspruchsvollsten Prüfungen weltweit, mit über einer Million Teilnehmenden."
    ],
    otherInterestsDescription:
      "Öffentlicher Redner zum Thema Jainismus, unterrichtet über 50 Personen in ganz Europa online. Begeistert von Schach und Cricket, mit Fokus auf strategisches Denken und Teamarbeit.",


  }
}