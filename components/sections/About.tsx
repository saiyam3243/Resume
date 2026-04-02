import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Code, User, MapPin, GraduationCap, Star } from "lucide-react";
import React from 'react';

export function About({ t, interestsList }: any) {
  return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.aboutTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.aboutDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile photo */}
            <div className="flex justify-center animate-on-scroll-left">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <Image width={400} height={400}
                      src="/images/profile.jpeg"
                      alt="Saiyam Jain – Software Engineer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg animate-pulse">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Personal details */}
            <div className="space-y-6 animate-on-scroll-right">
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-semibold">{t.personalProfile}</h3>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>{t.currentlyPursuing}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>{t.cgpa}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText1}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText2}</p>

              <div className="pt-2">
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
  );
}
