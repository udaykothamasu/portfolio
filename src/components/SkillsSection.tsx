import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Cloud, Cpu, Code, Database, Server, LineChart, BarChart, TrendingUp, DollarSign } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "MERN Stack Development",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Programming Languages",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java Basics"]
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="w-5 h-5 text-primary" />,
      skills: ["AWS Services", "Serverless Architecture", "Cloud Deployment", "EC2", "S3"]
    },
    {
      title: "Stock Market & Trading",
      icon: <LineChart className="w-5 h-5 text-primary" />,
      skills: [
        "Technical Analysis",
        "Fundamental Analysis",
        "Risk Management",
        "Chart Patterns",
        "Market Trends",
        "Portfolio Management"
      ]
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover h-full border border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 h-full">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
            <TrendingUp className="w-4 h-4 mr-2" />
            Continuously expanding my skills in both technology and financial markets
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;