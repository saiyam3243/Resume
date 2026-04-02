import { Button } from "@/components/ui/button";
import React from 'react';

export function Hero({ t, scrollToSection }: any) {
  return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-gradient">
              SAIYAM JAIN
            </h1>

            {/* Subtitle + available badge */}
            <div
              className="flex flex-wrap items-center justify-center gap-3 mb-6 mt-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                {t.heroSubtitle}
              </p>
              <span className="flex items-center gap-1.5 text-sm font-medium px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full border border-green-200 dark:border-green-700">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {t.availableText}
              </span>
            </div>

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
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="btn-gradient text-white border-0"
              >
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
  );
}
