"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Code,
  User,
  GraduationCap,
  Briefcase,
  Star,
  Download,
} from "lucide-react"
import { Chatbot } from "@/components/chatbot"

// Localization content
const translations = {
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
        role: "Working Student, Software Development",
        company: "Yunex Traffic, Munich",
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
        role: "Werkstudent – Softwareentwicklung",
        company: "Yunex Traffic, München",
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
        company: "Projekt0708 (heute p78), München",
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

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [language, setLanguage] = useState<"en" | "de">("en")

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right",
    )
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume/CV.pdf"
    link.download = "CV.pdf"
    link.click()
  }

  const interestsList = [t.problemSolving, t.financialMarkets, t.leadership, t.sports, t.mathematics, t.programming]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-sm border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Saiyam Jain</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: t.home },
                { id: "about", label: t.about },
                { id: "resume", label: t.resume },
                { id: "contact", label: t.contact },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-blue-600 ${activeSection === item.id ? "text-blue-600 font-medium" : ""
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full">
                <span className="text-sm font-medium">{language === "en" ? "DE" : "EN"}</span>
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "hero", label: t.home },
                { id: "about", label: t.about },
                { id: "resume", label: t.resume },
                { id: "contact", label: t.contact },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${activeSection === item.id ? "text-blue-600 font-medium" : ""
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-& gradient-text animate-gradient">SAIYAM JAIN</h1>

            <p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 mt-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heroSubtitle}
            </p>
            <p
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {t.heroDescription}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button size="lg" onClick={() => scrollToSection("about")} className="btn-gradient text-white border-0">
                {t.learnMore}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hover:scale-105 transition-transform duration-300"
              >
                {t.getInTouch}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.aboutTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.aboutDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-on-scroll-left">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <img
                      src="/images/profile.jpeg"
                      alt="Saiyam Jain - Software developer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg animate-pulse">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll-right">
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-semibold">{t.personalProfile}</h3>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>{t.currentlyPursuing}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-600" />
                  <span>{t.cgpa}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText1}</p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText2}</p>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">{t.interestsHobbies}</h4>
                <div className="flex flex-wrap gap-2">
                  {interestsList.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-20 px-4 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.resumeTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.resumeDescription}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Work Experience */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 gradient-text">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <span>{t.experienceTitle}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {t.experience.map((e: any, index: number) => (
                  <div
                    key={index}
                    className={`border-l-2 pl-4 ${index === 0
                      ? "border-green-600"
                      : index === 1
                        ? "border-blue-600"
                        : index === 2
                          ? "border-yellow-600"
                          : "border-gray-400"
                      }`}
                  >
                    {/* Company & Role */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg">{e.company}</h4>
                      {e.link && (
                        <button
                          onClick={() => window.open(e.link, "_blank")}
                          aria-label={`Visit ${e.company}`}
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4 ml-2" />
                          <span className="sr-only">Open company link</span>
                        </button>
                      )}
                    </div>

                    <p
                      className={`font-medium ${index === 0
                        ? "text-green-600"
                        : index === 1
                          ? "text-blue-600"
                          : index === 2
                            ? "text-yellow-600"
                            : "text-gray-600"
                        }`}
                    >
                      {e.role}
                    </p>
                    <p className="text-sm text-gray-500">{e.period}</p>

                    {/* Details */}
                    <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {e.details.map((detail: string, i: number) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </div>

                    {/* Tech badges (optional, can be removed or customized later) */}
                    {e.tech && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {e.tech.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 gradient-text">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span>{t.projects}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {t.projectList.map((p: any, index: number) => (
                  <div
                    key={index}
                    className={`border-l-2 pl-4 ${index === 0
                      ? "border-green-600"
                      : index === 1
                        ? "border-blue-600"
                        : index === 2
                          ? "border-yellow-600"
                          : index === 3
                            ? "border-purple-600"
                            : "border-gray-400"
                      }`}
                  >
                    {/* Project Info */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                      {p.link && (
                        <button
                          onClick={() => window.open(p.link, "_blank")}
                          aria-label={`Visit ${p.title}`}
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4 ml-2" />
                          <span className="sr-only">Open project link</span>
                        </button>
                      )}
                    </div>
                    <p
                      className={`font-medium ${index === 0
                        ? "text-green-600"
                        : index === 1
                          ? "text-blue-600"
                          : index === 2
                            ? "text-yellow-600"
                            : "text-purple-600"
                        }`}
                    >
                      {p.role}
                    </p>
                    <p className="text-sm text-gray-500">{p.period}</p>

                    {/* Project Details */}
                    <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {p.details.map((detail: string, i: number) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </div>

                    {/* Tech badges (optional) */}
                    {p.tech && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {p.tech.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 gradient-text">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <span>{t.education}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technical University of Munich */}
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-lg">{t.tumUniversity}</h4>
                  <p className="text-blue-600 font-medium">{t.tumDegree}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.tumLocation}</p>
                  <p className="text-sm text-gray-500">{t.tumPeriod}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">{t.coreModulesTitle}</p>
                    <div className="flex flex-wrap gap-1">
                      {t.coreModulesList.map((subject: string) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {t.tumDescription}
                    </p>
                  </div>
                </div>
                {/* Language School */}
                <div className="border-l-2 border-green-600 pl-4">
                  <h4 className="font-semibold text-lg">{t.languageSchoolName}</h4>
                  <p className="text-green-600 font-medium">{t.languageSchoolCourse}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.languageSchoolLocation}</p>
                  <p className="text-sm text-gray-500">{t.languageSchoolPeriod}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {t.languageSchoolDescription}
                  </p>
                </div>
                {/* High School */}
                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-semibold text-lg">{t.highSchoolName}</h4>
                  <p className="text-gray-600 font-medium">{t.highSchoolCourse}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.highSchoolLocation}</p>
                  <p className="text-sm text-gray-500">{t.highSchoolPeriod}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {t.highSchoolDescription1} <span className="font-medium">{t.highSchoolSubjects}</span>.<br />
                    {t.highSchoolDescription2} <span className="font-medium">{t.highSchoolScore}</span> {t.highSchoolOverallScoreText}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 gradient-text">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span>{t.skillsAndAchievements}</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Programming & Coding */}
                  <div>
                    <h4 className="font-semibold mb-2">{t.codingSkills}</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java (3 yrs)",
                        "TypeScript / JavaScript (4 yrs)",
                        "Python (1 yr)",
                        "R (1 yr)",
                        "SQL (2 yrs)",
                        "React Native (1 yr)"
                      ].map((skill) => (
                        <Badge key={skill} className="bg-blue-600 hover:bg-blue-700 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-2">{t.techStack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "React Native",
                        "Express.js",
                        "Node.js",
                        "Firebase",
                        "Supabase",
                        "Grafana",
                        "GitHub Actions",
                        "MongoDB",
                        "Postgres",
                        "ArgoCD",
                        "Kubernetes",
                        "Docker",
                        "Vue.js",
                        "Kafka",
                        "TailwindCSS",
                        "Expo"
                      ].map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Spoken Languages */}
                  <div>
                    <h4 className="font-semibold mb-3">{t.languages}</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Deutsch", level: "C1" },
                        { name: "English", level: "C2" },
                        { name: "Hindi", level: "C2" }
                      ].map((lang) => (
                        <div key={lang.name} className="flex justify-between items-center">
                          <span className="font-medium">{lang.name}</span>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Achievements & Scholarships */}
                  <div>
                    <h4 className="font-semibold mb-2">{t.achievements}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {t.achievementsList.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t.otherInterests}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t.otherInterestsDescription}
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>

            {/* Examination Achievements */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 gradient-text">
                  <Award className="h-6 w-6 text-purple-600" />
                  <span>{t.examinationAchievements}</span>
                </CardTitle>
                <CardDescription>{t.examinationDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300">IIT-JEE MAINS & ADVANCED</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.iitjeeDesc}</p>
                    </div>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-center">96 Percentile</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div>
                      <h4 className="font-semibold text-green-700 dark:text-green-300">Goethe Zertifikat</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.ieltsDesc}</p>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">B2/C1</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div>
                      <h4 className="font-semibold text-orange-700 dark:text-orange-300">Bsc Informatik</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.testdafDesc}</p>
                    </div>
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-white">Note 2.8</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div>
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">Board examination</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.testasDesc}</p>
                    </div>
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white">92.2% (Note 1.2)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.contactTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.contactDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-on-scroll-left">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{t.contactInformation}</CardTitle>
                  <CardDescription>{t.contactChannels}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <a href="mailto:sjain3243@gmail.com" className="underline">
                        {t.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p>
                        {t.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{t.connectOnline}</CardTitle>
                  <CardDescription>{t.connectPlatforms}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://github.com/saiyam3243", "_blank")}
                  >
                    <Github className="h-5 w-5 mr-3" />
                    {t.githubProfile}
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://www.linkedin.com/in/saiyam3243/", "_blank")}
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    {t.linkedinProfile}
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </Button>

                  {/* <div className="pt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t.collaborationText}</p>
                    <Button
                      className="btn-gradient text-white border-0 w-full"
                      onClick={() => window.open("mailto:sjain3243@gmail.com", "_blank")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {t.sendEmail}
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2 mt-8 animate-on-scroll">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                    <span>{t.downloadResume}</span>
                  </CardTitle>
                  <CardDescription>{t.downloadDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t.downloadText}</p>
                      <p className="text-xs text-gray-500">{t.fileSize}</p>
                    </div>
                    <Button
                      size="lg"
                      className="btn-gradient text-white border-0 min-w-[200px]"
                      onClick={downloadResume}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t.downloadPDF}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">{t.footerText}</p>
        </div>
</footer>

{/* AI Chatbot */}
<Chatbot />
</div>
)
}
