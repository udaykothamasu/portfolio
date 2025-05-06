
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, GraduationCap } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Tirumala Engineering College",
      duration: "2023 - 2026",
      location: "Narasaraopet, Andhra Pradesh, India",
      description: "Pursuing B.Tech in Computer Science Engineering with focus on core CS concepts, data structures, algorithms, and software engineering practices."
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Sir CR Reddy Polytechnic College",
      duration: "2020 - 2023",
      location: "Eluru, Andhra Pradesh, India",
      description: "Completed ECE diploma with 81.24%."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bhashyam High School",
      duration: "2019 - 2020",
      location: "Repalle, Andhra Pradesh",
      description: "Completed secondary education with 98%."
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-border before:opacity-30">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 md:px-8 px-4 flex md:justify-end">
                <div className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <Card className={`card-hover w-full max-w-md mx-auto md:mx-0 ${index === 0 ? "border-primary/30" : ""} relative z-10`}>
                    <CardContent className="p-6">
                      
                      
                      <h3 className="text-xl font-semibold mt-2 mb-1">{item.degree}</h3>
                      <h4 className="text-base text-primary">{item.institution}</h4>
                      
                      <div className="flex items-center space-x-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
