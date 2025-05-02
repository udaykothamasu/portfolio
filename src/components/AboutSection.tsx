
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Building, Languages, GraduationCap, Layers, Mail, Award } from "lucide-react";

const AboutSection = () => {
  const details = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      content: "+91 70755 29722"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "Repalle, Andhra Pradesh, India"
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "College",
      content: "Tirumala Engineering College"
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: "Languages",
      content: "Telugu (Mother Tongue), English, Hindi"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Degree",
      content: "Bachelor of Technology"
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Branch",
      content: "Computer Science and Engineering (CSE)"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "uday2012.in@gmail.com"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Certifications",
      content: "AWS, Python, Web Development"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/60 blur-lg animate-pulse"></div>
              <img 
                src="public/profile.jpg" 
                alt="Kothamasu Uday" 
                className="rounded-full w-full h-full object-cover border-4 border-background relative z-10"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Hello 👋</h3>
            <p className="text-lg leading-relaxed mb-6">
              I am Kothamasu Uday Venkata Pandu Ranga Krishna, a B.Tech student, Computer Science and Engineering (CSE) branch.
            </p>
            <p className="text-muted-foreground">
              Passionate about technology and constantly learning new skills to stay at the forefront of the rapidly evolving tech landscape.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-border/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {detail.icon}
                </div>
                <h3 className="font-medium text-lg mb-1">{detail.title}</h3>
                <p className="text-muted-foreground">{detail.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
