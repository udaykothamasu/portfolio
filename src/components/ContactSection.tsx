import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Instagram, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/uday-kothamasu-b180452a2/",
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/udaykothamasu",
      color: "hover:bg-[#333] hover:border-[#333]"
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:uday2012.in@gmail.com",
      color: "hover:bg-[#EA4335] hover:border-[#EA4335]"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://www.instagram.com/mr_uday_.20",
      color: "hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:border-[#833AB4]"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="card-hover border border-border/50 mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Connect With Me</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className={`w-full h-full aspect-square flex flex-col items-center justify-center gap-2 border-2 transition-colors ${link.color} hover:text-white`}
                      >
                        <span>{link.icon}</span>
                        <span className="text-xs font-medium">{link.name}</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border border-border/50">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-center">Location</h3>
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <a 
                      href="https://www.google.com/maps/place/Repalle/@16.0157795,80.8274939,15z/data=!4m6!3m5!1s0x3a49f599c55d9cd9:0x5b61f6538568395b!8m2!3d16.0195438!4d80.8287301!16s%2Fm%2F0wzt755?hl=en&entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:underline text-center"
                    >
                      Repalle, Andhra Pradesh, India
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Open for opportunities
                    </span>
                    <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;