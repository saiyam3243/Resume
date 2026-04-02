import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Briefcase, Code, GraduationCap, Award } from "lucide-react";
import { accentClasses, type ExperienceItem, type ProjectItem } from "@/components/resume-data";
import React from 'react';

export function Resume({ t }: any) {
  return (
      <section id="resume" className={`py-20 px-4 \${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
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
                {t.experience.map((e: ExperienceItem) => {
                  const accent = accentClasses[e.color]
                  return (
                    <div key={e.company} className={`border-l-2 pl-4 \${accent.border}`}>
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{e.company}</h4>
                        {e.link && (
                          <button
                            onClick={() => window.open(e.link, "_blank")}
                            aria-label={`Visit \${e.company}`}
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4 ml-2" />
                            <span className="sr-only">Open company link</span>
                          </button>
                        )}
                      </div>
                      <p className={`font-medium \${accent.text}`}>{e.role}</p>
                      <p className="text-sm text-gray-500">{e.period}</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {e.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1 shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {e.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {e.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
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
                {t.projectList.map((p: ProjectItem) => {
                  const accent = accentClasses[p.color]
                  return (
                    <div key={p.title} className={`border-l-2 pl-4 \${accent.border}`}>
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{p.title}</h4>
                        {p.link && (
                          <button
                            onClick={() => window.open(p.link, "_blank")}
                            aria-label={`Visit \${p.title}`}
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4 ml-2" />
                            <span className="sr-only">Open project link</span>
                          </button>
                        )}
                      </div>
                      <p className={`font-medium \${accent.text}`}>{p.role}</p>
                      <p className="text-sm text-gray-500">{p.period}</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {p.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1 shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {p.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {p.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
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
                {/* TU Munich */}
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-lg">{t.tumUniversity}</h4>
                  <p className="text-blue-600 font-medium">{t.tumDegree}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.tumLocation}</p>
                  <p className="text-sm text-gray-500">{t.tumPeriod}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">{t.coreModulesTitle}</p>
                    <div className="flex flex-wrap gap-1">
                      {t.coreModulesList.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t.tumDescription}</p>
                  </div>
                </div>
                {/* Language school */}
                <div className="border-l-2 border-green-600 pl-4">
                  <h4 className="font-semibold text-lg">{t.languageSchoolName}</h4>
                  <p className="text-green-600 font-medium">{t.languageSchoolCourse}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.languageSchoolLocation}</p>
                  <p className="text-sm text-gray-500">{t.languageSchoolPeriod}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.languageSchoolDescription}</p>
                </div>
                {/* High school */}
                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-semibold text-lg">{t.highSchoolName}</h4>
                  <p className="text-gray-600 font-medium">{t.highSchoolCourse}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.highSchoolLocation}</p>
                  <p className="text-sm text-gray-500">{t.highSchoolPeriod}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {t.highSchoolDescription1}{" "}
                    <span className="font-medium">{t.highSchoolSubjects}</span>.{" "}
                    {t.highSchoolDescription2}{" "}
                    <span className="font-medium">{t.highSchoolScore}</span>{" "}
                    {t.highSchoolOverallScoreText}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Achievements */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 gradient-text">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span>{t.skillsAndAchievements}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t.codingSkills}</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java (3 yrs)",
                        "TypeScript / JavaScript (4 yrs)",
                        "Python (1 yr)",
                        "R (1 yr)",
                        "SQL (2 yrs)",
                        "React Native (1 yr)",
                      ].map((skill) => (
                        <Badge key={skill} className="bg-blue-600 hover:bg-blue-700 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t.techStack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React", "Next.js", "React Native", "Express.js", "Node.js",
                        "Firebase", "Supabase", "Grafana", "GitHub Actions", "MongoDB",
                        "Postgres", "ArgoCD", "Kubernetes", "Docker", "Vue.js",
                        "Kafka", "TailwindCSS", "Expo",
                      ].map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t.languages}</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Deutsch", level: "C1" },
                        { name: "English", level: "C2" },
                        { name: "Hindi",   level: "C2" },
                      ].map((lang) => (
                        <div key={lang.name} className="flex justify-between items-center">
                          <span className="font-medium">{lang.name}</span>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">{t.achievements}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {t.achievementsList.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-blue-600 mt-1 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t.otherInterests}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.otherInterestsDescription}</p>
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
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300">IIT-JEE Mains & Advanced</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.iitjeeDesc}</p>
                    </div>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">96 Percentile</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div>
                      <h4 className="font-semibold text-green-700 dark:text-green-300">Goethe Zertifikat</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.ieltsDesc}</p>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700 text-white shrink-0">B2/C1</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div>
                      <h4 className="font-semibold text-orange-700 dark:text-orange-300">B.Sc. Informatik</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.testdafDesc}</p>
                    </div>
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-white shrink-0">Note 2.8</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div>
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">Board Examination</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.testasDesc}</p>
                    </div>
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white shrink-0">92.2% (Note 1.2)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
  );
}
