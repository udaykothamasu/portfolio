
import React, { useEffect, useRef } from "react";
import { ArrowDown, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Adding animation classes after component mount
    const elements = [
      { ref: nameRef, classes: ["gradient-text"] },
      { ref: taglineRef, classes: ["animate-fade-in", "delay-300"] },
      { ref: buttonRef, classes: ["animate-fade-in", "delay-700"] },
      { ref: decorationRef, classes: ["animate-fade-in", "delay-200"] }
    ];
    
    elements.forEach(({ ref, classes }) => {
      if (ref.current) {
        classes.forEach(cls => ref.current?.classList.add(cls));
      }
    });
    
    // Add typing animation with slight delay
    setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.classList.add("animate-typing");
      }
    }, 300);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-background via-background to-secondary/20 relative overflow-hidden"
    >
      {/* Animated decorations */}
      <div ref={decorationRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/5 rounded-full animate-float blur-3xl delay-300"></div>
        <div className="absolute bottom-32 right-[15%] w-72 h-72 bg-purple-400/10 rounded-full animate-float blur-3xl delay-700"></div>
        
        {/* Code symbols decoration */}
        <div className="absolute top-[25%] left-[5%] opacity-20 text-primary animate-float delay-500">
          <Code size={48} />
        </div>
        <div className="absolute bottom-[30%] right-[10%] opacity-20 text-primary animate-float delay-800">
          <Zap size={42} />
        </div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 overflow-hidden whitespace-nowrap"
        >
          Kothamasu Uday
        </h1>
        <p
          ref={taglineRef}
          className="text-xl md:text-2xl text-muted-foreground mb-10 opacity-0"
        >
          Computer Science enthusiast with a strong foundation in core concepts
          and a passion for exploring emerging technologies.
        </p>
        <div ref={buttonRef} className="mt-8 opacity-0">
          <Button
            onClick={scrollToAbout}
            className="rounded-full px-8 py-6 flex items-center gap-3 group bg-gradient-to-r from-primary to-purple-500 hover:shadow-glow transition-all duration-300"
            variant="default"
            size="lg"
          >
            Discover More
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce transition-all" />
          </Button>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
