import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import React from 'react';

export function Navigation({ navItems, activeSection, scrollToSection, isDark, toggleTheme, language, toggleLanguage, isMenuOpen, setIsMenuOpen }: any) {
  return (
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isDark ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Saiyam Jain</div>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600 font-medium" : ""
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
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === item.id ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
  );
}
