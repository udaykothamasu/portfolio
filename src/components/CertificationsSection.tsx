import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Globe, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: JSX.Element;
  color: string;
  link: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Python Programming",
      issuer: "GYAN Academy",
      date: "2023",
      description: "Comprehensive training in Python programming including data structures, algorithms, and application development.",
      icon: <Code className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-500 to-sky-400",
      link: "K.Uday Cert.pdf" // Relative to public/ directory
    },
    {
      title: "JAVA Programming Fundamentals",
      issuer: "EdX",
      date: "2023",
      description: "Fundamental understanding of Java programming language, OOP concepts, and application development.",
      icon: <Code className="h-6 w-6" />,
      color: "bg-gradient-to-br from-orange-500 to-amber-400",
      link: "Kothamasu Uday venkata pandu ranga krishna (1).pdf"
    },
    {
      title: "Web Development",
      issuer: "OCTANET",
      date: "2023",
      description: "Full stack web development training covering HTML, CSS, JavaScript, and modern frameworks.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-400",
      link: "Octanet.pdf"
    },
    {
      title: "AWS Cloud Computing",
      issuer: "APSSDC",
      date: "2023",
      description: "Cloud infrastructure management using AWS services including EC2, S3, and Lambda functions.",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-500 to-violet-400",
      link: "KOTHAMASU UDAY VENKATA PANDU RANGA KRISHNA (2).pdf"
    }
  ];

  // Refs for the certificates to implement animation
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    certRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      certRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleViewCertificate = (link: string) => {
    if (!link) {
      alert("Certificate link is unavailable.");
      return;
    }
    try {
      // Use PUBLIC_URL for base path (works with CRA, Vite, etc.)
      const baseUrl = process.env.PUBLIC_URL || "";
      // Remove 'public/' prefix if present, as files in public/ are served from root
      const normalizedLink = link.startsWith("public/") ? link.replace("public/", "") : link;
      const fullUrl = link.startsWith("http") ? link : `${baseUrl}/${normalizedLink}`;
      window.open(fullUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Failed to open certificate:", error);
      alert("Failed to open certificate. Please try again later.");
    }
  };

  return (
    <section id="certifications" className="section-padding bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certRefs.current[index] = el)}
              className="opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="certificate-card h-full border border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0 h-full">
                  <div className={`${cert.color} h-3`}></div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {cert.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full">{cert.date}</span>
                    </div>
                    
                    <p className="text-muted-foreground flex-grow">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;