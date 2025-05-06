import React, { useEffect, useRef } from "react";
import { Code, Globe, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: JSX.Element;
  file: string;
}

const certifications: Certification[] = [
  {
    title: "Python Programming",
    issuer: "GYAN Academy",
    description: "Learned Python fundamentals including data structures and algorithms.",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    file: "K.Uday Cert.pdf",
  },
  {
    title: "JAVA Programming Fundamentals",
    issuer: "EdX",
    description: "Covered core Java, OOP principles, and basic application building.",
    icon: <Code className="h-6 w-6 text-orange-500" />,
    file: "Kothamasu Uday venkata pandu ranga krishna (1).pdf",
  },
  {
    title: "Web Development",
    issuer: "OCTANET",
    description: "Built responsive UIs with HTML, CSS, JavaScript and React.",
    icon: <Globe className="h-6 w-6 text-green-500" />,
    file: "Octanet.pdf",
  },
  {
    title: "AWS Cloud Computing",
    issuer: "APSSDC",
    description: "Hands-on experience with AWS EC2, S3, and Lambda.",
    icon: <Cloud className="h-6 w-6 text-purple-500" />,
    file: "KOTHAMASU UDAY VENKATA PANDU RANGA KRISHNA (2).pdf",
  },
];

const CertificationsSection: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
          }
        }),
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleViewCertificate = (file: string) => {
    const url = `/${file}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          window.open(url, "_blank");
        } else {
          alert("Certificate not found.");
        }
      })
      .catch(() => {
        alert("Error accessing certificate.");
      });
  };

  return (
    <section id="certifications" className="py-16 bg-secondary/10 dark:bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="opacity-0 transform transition-all duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="flex flex-col items-start p-6 border border-border bg-white dark:bg-muted dark:border-border/40 hover:shadow-lg transition-shadow hover:scale-[1.03] duration-300 rounded-lg">
                <div className="mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <Button
                  onClick={() => handleViewCertificate(cert.file)}
                  className="mt-auto w-full"
                  variant="outline"
                >
                  View Certificate
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
