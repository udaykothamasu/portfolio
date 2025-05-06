import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Rover",
      description: "An autonomous rover built with Arduino and sensors for obstacle avoidance and environment mapping. Implemented path-finding algorithms and real-time data processing.",
      image: "/Project_1.png",
      tags: ["Electronics", "Embedded Systems", "Arduino", "IoT"],
      reports: "Project_1_Report.pdf",
    },
    {
      title: "Serverless Image Generation using AWS",
      description: "A project leveraging AWS services to create a serverless architecture for image generation and processing. Utilized Lambda, S3, and API Gateway for efficient image manipulation.",
      image: "/Project_2.jpg",
      tags: ["AWS", "Cloud Computing", "Serverless", "API Development"],
      reports: "Project_2_Report.docx",
    },
  ];

  const handleViewReport = (reportUrl: string) => {
    window.open(reportUrl, '_blank');
  };

  return (
    <section id="projects" className="min-h-screen flex items-center bg-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical implementations of my skills and knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300 border border-border/50 h-full flex flex-col group"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    onClick={() => handleViewReport(project.reports)}
                  >
                    <FileText className="h-4 w-4" />
                    Project Report
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;