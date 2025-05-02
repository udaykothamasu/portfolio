import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, X, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const resumePath = "/uday resume.pdf"; // Path to your resume in public folder

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const downloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Uday_Resume.pdf'; // The filename you want for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="min-h-screen flex items-center bg-background py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">My Resume</h2>
        
        <Card className="card-hover border border-border/50">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-8 h-8" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold">Uday's Resume</h3>
                <p className="text-muted-foreground">Software Engineer & Developer</p>
              </div>
            </div>
            
            <div className="border-t border-border my-6"></div>
            
            <div className="text-center mb-8">
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                My resume highlights my technical skills, project experiences, and achievements in software development. Download it for a comprehensive overview of my qualifications.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <a 
                    href={resumePath} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Resume
                  </a>
                </Button>
                <Button
                  onClick={downloadResume}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Preview Modal */}
        {isPreviewOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto shadow-xl border border-border">
              <div className="sticky top-0 bg-background z-10 flex justify-between items-center px-6 py-4 border-b">
                <h3 className="font-semibold text-lg">Resume Preview</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closePreview}
                  className="rounded-full hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="h-[80vh]">
                <iframe 
                  src={resumePath} 
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;