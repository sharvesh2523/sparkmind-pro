import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Brain, ArrowLeft, Calendar, Clock, MapPin, User, Bell, FileText, Video, File, Link as LinkIcon } from "lucide-react";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.event || defaultEvent;
  
  // Function to handle resource download/view
  const handleResourceClick = (title: string, type: string) => {
    switch (type) {
      case "PDF Guide":
        // In a real app, this would download or open the PDF
        alert(`Opening ${title} PDF... In a real application, this would open the actual PDF file.`);
        break;
      case "Worksheet":
        // In a real app, this would download the worksheet
        alert(`Downloading ${title} worksheet... In a real application, this would download the actual worksheet file.`);
        break;
      case "Video":
        // In a real app, this would open the video player
        alert(`Playing ${title} video... In a real application, this would open the video player.`);
        break;
      case "Cheat Sheet":
        // In a real app, this would download or open the cheat sheet
        alert(`Opening ${title}... In a real application, this would open the actual cheat sheet.`);
        break;
      case "Practice Test":
        // In a real app, this would download or open the practice test
        alert(`Opening ${title}... In a real application, this would open the actual practice test.`);
        break;
      case "Meeting Link":
        // In a real app, this would open the meeting link
        alert(`Joining ${title}... In a real application, this would open the meeting link.`);
        break;
      default:
        alert(`Opening ${title}...`);
    }
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
              <Brain className="h-8 w-8 text-accent" />
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
          <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
          <p className="text-muted-foreground text-lg">Detailed information about the upcoming event</p>
        </div>

        {/* Event Details Card */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Event Details
            </CardTitle>
            <CardDescription>All the information you need about this event</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Event Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{event.date}</p>
                        <p className="text-sm text-muted-foreground">{event.day}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{event.time}</p>
                        <p className="text-sm text-muted-foreground">{event.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{event.location}</p>
                        <p className="text-sm text-muted-foreground">{event.building}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">{event.teacher}</p>
                        <p className="text-sm text-muted-foreground">{event.subject}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Preparation Tips</h3>
                  <ul className="space-y-2">
                    {event.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Topics Covered</h3>
                  <div className="space-y-3">
                    {event.topics.map((topic, index) => (
                      <div key={index} className="p-4 rounded-lg bg-secondary/50">
                        <p className="font-medium">{topic.title}</p>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Performance Insights</h3>
                  <div className="p-4 rounded-lg bg-gradient-primary/10 border border-accent/20">
                    <p className="font-medium text-accent">Emma's Readiness: {event.readiness.level}</p>
                    <p className="text-sm mt-2">
                      {event.readiness.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Materials and Resources */}
        {event.resources && event.resources.length > 0 && (
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Study Materials
              </CardTitle>
              <CardDescription>Resources to help prepare for the event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.resources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border border-border bg-secondary/50 hover:shadow-elevated transition-all duration-200 cursor-pointer"
                    onClick={() => handleResourceClick(resource.title, resource.type)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        {getResourceIcon(resource.type)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{resource.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" className="gap-2">
            <Bell className="h-5 w-5" />
            Set Reminder
          </Button>
          <Link to="/study-materials">
            <Button variant="outline" className="gap-2">
              <FileText className="h-5 w-5" />
              Download Study Guide
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Function to get the appropriate icon for each resource type
const getResourceIcon = (type: string) => {
  switch (type) {
    case "PDF Guide":
    case "Cheat Sheet":
      return <File className="h-5 w-5 text-accent" />;
    case "Worksheet":
    case "Practice Test":
      return <FileText className="h-5 w-5 text-accent" />;
    case "Video":
      return <Video className="h-5 w-5 text-accent" />;
    case "Meeting Link":
      return <LinkIcon className="h-5 w-5 text-accent" />;
    default:
      return <FileText className="h-5 w-5 text-accent" />;
  }
};

// Default event data for when no state is passed
const defaultEvent = {
  title: "Math Quiz",
  date: "Monday, November 15",
  day: "Next Week",
  time: "10:00 AM - 11:30 AM",
  duration: "90 minutes",
  location: "Room 204 - Mathematics Department",
  building: "Main Building",
  teacher: "Mrs. Anderson",
  subject: "Mathematics Teacher",
  tips: [
    "Review chapters 3-5 on algebraic expressions",
    "Practice solving linear equations",
    "Bring calculator and pencils",
    "Arrive 10 minutes early"
  ],
  topics: [
    {
      title: "Algebraic Expressions",
      description: "Simplifying and evaluating expressions"
    },
    {
      title: "Linear Equations",
      description: "Solving one and two-step equations"
    },
    {
      title: "Word Problems",
      description: "Translating word problems to equations"
    }
  ],
  readiness: {
    level: "High",
    description: "Based on recent homework and class participation, Emma is well-prepared for this quiz. Her strong performance in algebraic expressions suggests she will excel."
  },
  resources: [
    {
      title: "Algebra Basics",
      type: "PDF Guide",
      description: "Comprehensive guide covering fundamental algebra concepts"
    },
    {
      title: "Practice Problems",
      type: "Worksheet",
      description: "50 practice problems with answer key"
    },
    {
      title: "Video Tutorial",
      type: "Video",
      description: "15-minute tutorial on solving linear equations"
    },
    {
      title: "Formula Sheet",
      type: "Cheat Sheet",
      description: "Essential formulas for the quiz"
    },
    {
      title: "Previous Quiz",
      type: "Practice Test",
      description: "Sample quiz from last semester"
    },
    {
      title: "Study Group",
      type: "Meeting Link",
      description: "Join Emma's study group session"
    }
  ]
};

export default EventDetails;