import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, ExternalLink, GraduationCap, Loader2, Download } from "lucide-react";
import React from 'react';

export function Contact({ t, isDownloading, downloadResume }: any) {
  return (
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />

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
                    <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                    <a href="mailto:sjain3243@gmail.com" className="underline hover:text-blue-600 transition-colors">
                      {t.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">{t.location}</p>
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
                </CardContent>
              </Card>
            </div>

            {/* Download resume */}
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
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          {t.downloading}
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          {t.downloadPDF}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
}
