import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Award, TrendingUp, Calendar, Download, Target } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AchievementsDetails = () => {
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

has earned 12 achievements this semester, including:

${allAchievements.slice(0, 5).map(achievement => `- ${achievement.title} (${achievement.date})`).join('\n')}

Total Achievements: 12
New this week: 3

Categories:
${achievementCategories.map(category => `- ${category.name}: ${category.value}`).join('\n')}

Signature: _____________________
Date: ${new Date().toLocaleDateString()}

ECHO-FIVE - AI-powered student insights
    `;
    
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Emma_Johnson_Achievements_Certificate_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Function to handle setting a new goal
  const handleSetNewGoal = () => {
    // In a real app, this would open a modal or form to set a goal
    // For now, we'll show an alert with information
    const goal = prompt("Set a new achievement goal:", "Earn 3 more achievements this month");
    
    if (goal) {
      alert(`New goal set: "${goal}"! You'll receive tips and reminders to help achieve this goal.`);
    }
  };

  // Achievement data
  const achievementsData = [
    {
      icon: "🏆",
      title: "Top Performer",
      description: "Ranked in top 10% of class for overall performance",
      date: "This week",
      category: "Academic",
      difficulty: "Advanced",
      significance: "This achievement recognizes Emma's exceptional academic performance and consistent dedication to her studies. It demonstrates her ability to excel across multiple subjects and maintain high standards.",
      performance: 92,
      growth: 15,
      skills: ["Analytical Thinking", "Problem Solving", "Time Management", "Discipline"],
      progressData: [
        { month: "Aug", performance: 75 },
        { month: "Sep", performance: 80 },
        { month: "Oct", performance: 85 },
        { month: "Nov", performance: 92 },
      ]
    },
    {
      icon: "📚",
      title: "Book Worm",
      description: "Read 5 books in one month",
      date: "2 days ago",
      category: "Academic",
      difficulty: "Intermediate",
      significance: "This achievement celebrates Emma's dedication to reading and expanding her knowledge through literature. Her consistent reading habit contributes to improved vocabulary, comprehension, and critical thinking skills.",
      performance: 85,
      growth: 25,
      skills: ["Reading Comprehension", "Vocabulary", "Critical Thinking", "Focus"],
      progressData: [
        { month: "Aug", performance: 60 },
        { month: "Sep", performance: 65 },
        { month: "Oct", performance: 75 },
        { month: "Nov", performance: 85 },
      ]
    },
    {
      icon: "⭐",
      title: "Perfect Attendance",
      description: "100% attendance for the month",
      date: "This month",
      category: "Participation",
      difficulty: "Basic",
      significance: "This achievement recognizes Emma's commitment to her education through perfect attendance. Regular attendance is crucial for academic success and demonstrates her dedication and responsibility.",
      performance: 98,
      growth: 5,
      skills: ["Discipline", "Responsibility", "Time Management", "Commitment"],
      progressData: [
        { month: "Aug", performance: 95 },
        { month: "Sep", performance: 96 },
        { month: "Oct", performance: 97 },
        { month: "Nov", performance: 98 },
      ]
    }
  ];

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
          <h1 className="text-4xl font-bold mb-2">Achievements</h1>
          <p className="text-muted-foreground text-lg">Emma's milestones and accomplishments</p>
        </div>

        {/* Overall Achievements Card */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Overall Achievements Summary
            </CardTitle>
            <CardDescription>Current achievements and recent milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-end gap-4 mb-6">
                  <div className="text-6xl font-bold">12</div>
                  <div className="flex items-center gap-2 text-green-500">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-medium">3 new this week</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Emma has earned 12 achievements this semester, with 3 new accomplishments this week. 
                  Her consistent effort and dedication to learning have resulted in recognition across 
                  multiple areas of academic and personal development.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground">This Semester</p>
                    <p className="font-semibold">12 achievements</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground">Last Semester</p>
                    <p className="font-semibold">8 achievements</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold mb-4">Achievements by Category</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={achievementCategories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {achievementCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}`, "Achievements"]}
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--background))", 
                        borderColor: "hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Recent Achievements
            </CardTitle>
            <CardDescription>Emma's latest accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievementsData.map((achievement, index) => (
                <Link 
                  key={index} 
                  to="/achievement-details" 
                  state={{ achievement }}
                  className="block"
                >
                  <div
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/10"
                  >
                    <div className="text-5xl mb-4">{achievement.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm mb-3">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto mt-2 text-white/80 relative overflow-hidden group"
                    >
                      <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-purple-200 transition-all duration-300">
                        View Details →
                      </span>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
                    </Button>
                  </div>

                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievement Timeline */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Achievement Timeline
            </CardTitle>
            <CardDescription>Progress throughout the semester</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={achievementTimeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--background))", 
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value) => [`${value}`, "Achievements"]}
                />
                <Bar dataKey="achievements" name="Achievements" fill="hsl(var(--accent))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* All Achievements */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              All Achievements
            </CardTitle>
            <CardDescription>Complete collection of Emma's accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {allAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-secondary/50 flex items-center gap-3"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" className="gap-2" onClick={handleDownloadCertificate}>
            <Download className="h-5 w-5" />
            Download Achievement Certificate
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

const achievementCategories = [
  { name: "Academic", value: 5, color: "#8884d8" },
  { name: "Participation", value: 3, color: "#82ca9d" },
  { name: "Leadership", value: 2, color: "#ffc658" },
  { name: "Creativity", value: 2, color: "#ff8042" },
];

const achievementTimeline = [
  { month: "Aug", achievements: 2 },
  { month: "Sep", achievements: 3 },
  { month: "Oct", achievements: 4 },
  { month: "Nov", achievements: 3 },
];

const allAchievements = [
  { icon: "🏆", title: "Honor Roll", date: "September 2023" },
  { icon: "📚", title: "Reading Champion", date: "October 2023" },
  { icon: "⭐", title: "Perfect Attendance", date: "October 2023" },
  { icon: "🤝", title: "Team Player", date: "September 2023" },
  { icon: "✍️", title: "Creative Writer", date: "November 2023" },
  { icon: "🔬", title: "Science Fair Winner", date: "August 2023" },
  { icon: "🎨", title: "Art Showcase", date: "September 2023" },
  { icon: "🎵", title: "Music Performance", date: "October 2023" },
  { icon: "🏅", title: "Math Competition", date: "November 2023" },
  { icon: "🌟", title: "Leadership Award", date: "October 2023" },
  { icon: "📖", title: "Literary Club", date: "September 2023" },
  { icon: "🚀", title: "Innovation Project", date: "November 2023" },
];

export default AchievementsDetails;