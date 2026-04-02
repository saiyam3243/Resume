"use client"
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

import { useState, useEffect } from "react"
import { Chatbot } from "@/components/chatbot"

// ─── TypeScript interfaces ────────────────────────────────────────────────────
import { type AccentColor, type ExperienceItem, type ProjectItem, accentClasses, translations } from '@/components/resume-data';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [language, setLanguage] = useState<"en" | "de">("en")
  const [isDownloading, setIsDownloading] = useState(false)

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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

    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right",
    )
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
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
    setIsDownloading(true)
    const link = document.createElement("a")
    link.href = "/resume/CV.pdf"
    link.download = "CV.pdf"
    link.click()
    setTimeout(() => setIsDownloading(false), 2500)
  }

  const interestsList = [t.problemSolving, t.financialMarkets, t.leadership, t.sports, t.mathematics, t.programming]

  const navItems = [
    { id: "hero",    label: t.home    },
    { id: "about",   label: t.about   },
    { id: "resume",  label: t.resume  },
    { id: "contact", label: t.contact },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navigation navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} isDark={isDark} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Hero t={t} scrollToSection={scrollToSection} />

      <About t={t} interestsList={interestsList} />

      <Resume t={t}/>

      <Contact t={t} isDownloading={isDownloading} downloadResume={downloadResume} />

      {/* ── Footer ── */}
      <footer className={`py-8 px-4 border-t ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">{t.footerText}</p>
        </div>
      </footer>

      {/* ── AI Chatbot ── */}
      <Chatbot />
    </div>
  )
}
