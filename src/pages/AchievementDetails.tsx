import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Brain, ArrowLeft, Award, TrendingUp, Calendar, Download, Target, BookOpen, Star } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AchievementDetails = () => {
  const location = useLocation();
  const achievement = location.state?.achievement || defaultAchievement;
  
  // Function to handle certificate download
  const handleDownloadCertificate = () => {
    // In a real app, this would generate and download a PDF certificate
    // For now, we'll simulate the download with an alert and text file generation
    alert("Downloading achievement certificate... In a real application, this would generate a PDF certificate.");
    
    // Simulate file download
    const certificateContent = `
ECHO-FIVE - Achievement Certificate
==================================

This certifies that

Emma Johnson

has been awarded the

${achievement.name}

achievement for

${achievement.description}

Awarded on: ${achievement.date}
Category: ${achievement.category}
Rarity: ${achievement.rarity}

Signature: _____________________
Date: ${new Date().toLocaleDateString()}

ECHO-FIVE - AI-powered student insights
    `;
    
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Emma_Johnson_${achievement.name.replace(/\s+/g, '_')}_Certificate_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Function to handle setting a new goal
  const handleSetNewGoal = () => {
    // In a real app, this would open a modal or form to set a goal
    // For now, we'll show an alert with information
    const goal = prompt("Set a new learning goal:", `Earn the "${achievement.name}" achievement`);
    
    if (goal) {
      alert(`New goal set: "${goal}"! You'll receive tips and reminders to help achieve this goal.`);
    }
  };
  
  // Generate progress data based on the achievement
  const generateProgressData = () => {
    const categories = [
      { month: "Aug", performance: Math.floor(Math.random() * 30) + 60 },
      { month: "Sep", performance: Math.floor(Math.random() * 30) + 65 },
      { month: "Oct", performance: Math.floor(Math.random() * 30) + 70 },
      { month: "Nov", performance: Math.floor(Math.random() * 30) + 75 },
    ];
    
    // Adjust the last month based on whether the achievement is earned
    if (achievement.earned) {
      categories[3].performance = Math.floor(Math.random() * 20) + 85;
    }
    
    return categories;
  };
  
  const progressData = generateProgressData();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/profile">
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
        <div className="mb-8 animate-fade-in text-center">
          <div className="text-8xl mb-4">{achievement.icon}</div>
          <h1 className="text-4xl font-bold mb-2">{achievement.name}</h1>
          <p className="text-muted-foreground text-lg">
            {achievement.earned ? achievement.description : `Unlock this achievement: ${achievement.description}`}
          </p>
        </div>

        {/* Achievement Details Card */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Achievement Details
            </CardTitle>
            <CardDescription>Information about this accomplishment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Achievement Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Earned On</p>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Category</p>
                        <p className="text-sm text-muted-foreground">{achievement.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Rarity</p>
                        <p className="text-sm text-muted-foreground">{achievement.rarity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Status</p>
                        <p className="text-sm text-muted-foreground">
                          {achievement.earned ? "Earned" : "Not yet earned"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Significance</h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Related Progress</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Category Performance</p>
                        <span className="font-semibold">
                          {achievement.earned ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 30) + 60}%
                        </span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full" 
                          style={{ 
                            width: `${achievement.earned ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 30) + 60}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Overall Growth</p>
                        <span className="font-semibold text-green-500">
                          +{achievement.earned ? Math.floor(Math.random() * 10) + 10 : Math.floor(Math.random() * 5) + 5}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Improvement in {achievement.category.toLowerCase()} skills
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">How to Earn</h3>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground">
                      {achievement.earned 
                        ? "Congratulations! You've already earned this achievement." 
                        : `To earn this achievement, focus on activities related to ${achievement.category.toLowerCase()}. 
                           Consistent effort and participation in relevant tasks will help you unlock this badge.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Visualization */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Progress Timeline
            </CardTitle>
            <CardDescription>How this achievement fits into Emma's journey</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--background))", 
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value) => [`${value}%`, "Performance"]}
                />
                <Bar dataKey="performance" name="Performance" fill="hsl(var(--accent))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Related Achievements */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Related Achievements
            </CardTitle>
            <CardDescription>Other accomplishments in this category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedAchievements
                .filter(a => a.category === achievement.category && a.name !== achievement.name)
                .map((related, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border bg-secondary/50 flex items-center gap-3"
                  >
                    <div className="text-3xl">{related.icon}</div>
                    <div>
                      <p className="font-medium text-sm">{related.name}</p>
                      <p className="text-xs text-muted-foreground">{related.date}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" className="gap-2" onClick={handleDownloadCertificate}>
            <Download className="h-5 w-5" />
            Download Certificate
          </Button>
          <Button 
            variant="outline" 
            className="gap-2 relative overflow-hidden group bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            onClick={handleSetNewGoal}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Target className="h-5 w-5 text-cyan-500 group-hover:animate-pulse" />
            <span className="relative z-10 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
              Set New Goal
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Default achievement data for when no state is passed
const defaultAchievement = {
  icon: "🏆",
  name: "Honor Roll",
  earned: true,
  date: "October 2023",
  description: "Achieved top 10% performance in all subjects for the semester",
  category: "Academic Excellence",
  rarity: "Rare"
};

const relatedAchievements = [
  {
    icon: "📚",
    name: "Bookworm",
    date: "November 2023",
    category: "Literacy"
  },
  {
    icon: "⭐",
    name: "Star Student",
    date: "September 2023",
    category: "Participation"
  },
  {
    icon: "🎯",
    name: "Goal Getter",
    date: "November 2023",
    category: "Goal Achievement"
  },
  {
    icon: "🤝",
    name: "Team Player",
    date: "October 2023",
    category: "Social Skills"
  },
  {
    icon: "💡",
    name: "Innovator",
    date: "Not earned",
    category: "Creativity"
  },
  {
    icon: "🎨",
    name: "Creative Mind",
    date: "September 2023",
    category: "Creativity"
  },
  {
    icon: "🔬",
    name: "Science Star",
    date: "Not earned",
    category: "STEM"
  },
  {
    icon: "✍️",
    name: "Writer",
    date: "October 2023",
    category: "Literacy"
  },
  {
    icon: "🎵",
    name: "Performer",
    date: "Not earned",
    category: "Arts"
  },
  {
    icon: "🌟",
    name: "Leader",
    date: "Not earned",
    category: "Leadership"
  },
  {
    icon: "🚀",
    name: "Explorer",
    date: "November 2023",
    category: "Curiosity"
  }
];

export default AchievementDetails;