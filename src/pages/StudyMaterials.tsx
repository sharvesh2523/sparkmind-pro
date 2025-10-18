import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Download, BookOpen, File, FileSpreadsheet } from "lucide-react";

const StudyMaterials = () => {
  // Sample study materials data
  const studyGuides = [
    {
      id: 1,
      title: "Algebra Basics",
      subject: "Mathematics",
      description: "Comprehensive guide covering fundamental algebra concepts",
      type: "PDF Guide",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Chemistry Formulas",
      subject: "Science",
      description: "Essential formulas and equations for chemistry",
      type: "Cheat Sheet",
      size: "1.1 MB"
    },
    {
      id: 3,
      title: "Historical Events Timeline",
      subject: "History",
      description: "Chronological timeline of major historical events",
      type: "PDF Guide",
      size: "3.7 MB"
    }
  ];

  const worksheets = [
    {
      id: 1,
      title: "Linear Equations Practice",
      subject: "Mathematics",
      description: "50 practice problems with answer key",
      type: "Worksheet",
      size: "1.8 MB"
    },
    {
      id: 2,
      title: "Grammar Exercises",
      subject: "English",
      description: "Comprehensive grammar exercises with solutions",
      type: "Worksheet",
      size: "2.2 MB"
    }
  ];

  const handleDownload = (title: string, type: string) => {
    // In a real app, this would download the actual file
    alert(`Downloading ${title} (${type})... In a real application, this would download the actual file.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ECHO-FIVE
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Study Materials</h1>
          <p className="text-muted-foreground text-lg">Access all study guides, worksheets, and resources</p>
        </div>

        {/* Study Guides Section */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Study Guides
            </CardTitle>
            <CardDescription>Comprehensive guides to help with learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {studyGuides.map((guide) => (
                <div key={guide.id} className="p-4 rounded-lg border border-border bg-secondary/50 hover:shadow-elevated transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <File className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{guide.title}</p>
                      <p className="text-xs text-muted-foreground">{guide.subject}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{guide.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-muted-foreground">{guide.size}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1"
                      onClick={() => handleDownload(guide.title, guide.type)}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Worksheets Section */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-accent" />
              Worksheets & Practice
            </CardTitle>
            <CardDescription>Practice materials to reinforce learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {worksheets.map((worksheet) => (
                <div key={worksheet.id} className="p-4 rounded-lg border border-border bg-secondary/50 hover:shadow-elevated transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileSpreadsheet className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{worksheet.title}</p>
                      <p className="text-xs text-muted-foreground">{worksheet.subject}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{worksheet.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-muted-foreground">{worksheet.size}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1"
                      onClick={() => handleDownload(worksheet.title, worksheet.type)}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" className="gap-2">
            <Download className="h-5 w-5" />
            Download All Materials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;