import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  Calendar,
  Heart,
  Award,
  BookOpen,
  LogOut,
  User,
} from "lucide-react";

const Dashboard = () => {
  // Event data for navigation
  const events = {
    mathQuiz: {
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
    },
    scienceProject: {
      title: "Science Project Due",
      date: "Wednesday, November 17",
      day: "This Week",
      time: "2:00 PM",
      duration: "Project Submission",
      location: "Online - Science Portal",
      building: "Virtual",
      teacher: "Mr. Thompson",
      subject: "Science Teacher",
      tips: [
        "Ensure all sections of the report are complete",
        "Double-check calculations and data analysis",
        "Review presentation slides for clarity",
        "Practice presenting for 5-7 minutes"
      ],
      topics: [
        {
          title: "Chemical Reactions",
          description: "Understanding reaction types and balancing equations"
        },
        {
          title: "Data Analysis",
          description: "Interpreting experimental results and drawing conclusions"
        },
        {
          title: "Scientific Method",
          description: "Following proper experimental procedure and documentation"
        }
      ],
      readiness: {
        level: "Good",
        description: "Emma has shown strong engagement with the project. Her research is thorough, but she should review her presentation materials for clarity."
      },
      resources: [
        {
          title: "Project Rubric",
          type: "PDF Guide",
          description: "Detailed grading criteria for the project"
        },
        {
          title: "Presentation Template",
          type: "Worksheet",
          description: "Slide template for project presentation"
        },
        {
          title: "Lab Report Guide",
          type: "PDF Guide",
          description: "Instructions for writing comprehensive lab reports"
        }
      ]
    },
    parentTeacher: {
      title: "Parent-Teacher Meeting",
      date: "Friday, November 19",
      day: "This Week",
      time: "4:00 PM",
      duration: "30 minutes",
      location: "Room 105 - Conference Room",
      building: "Main Building",
      teacher: "Mrs. Johnson",
      subject: "Homeroom Teacher",
      tips: [
        "Prepare questions about Emma's progress",
        "Bring notebook to jot down important points",
        "Discuss both academic and social development",
        "Schedule follow-up if needed"
      ],
      topics: [
        {
          title: "Academic Progress",
          description: "Review of grades and performance across subjects"
        },
        {
          title: "Behavior and Social Skills",
          description: "Classroom behavior and peer interactions"
        },
        {
          title: "Goals for Next Quarter",
          description: "Setting academic and personal development goals"
        }
      ],
      readiness: {
        level: "N/A",
        description: "This is a discussion meeting to review Emma's progress and set goals for the future."
      },
      resources: []
    }
  };

  // Achievement data for navigation
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
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ECHO-FIVE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground text-lg">Here's Emma's progress this week</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Modified Overall Grade Card to be clickable */}
          <Link to="/grade-details" className="block">
            <Card className="animate-slide-in hover:shadow-elevated transition-all duration-200 cursor-pointer h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Overall Grade
                </CardTitle>
                <BookOpen className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold">A-</div>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">+0.3 from last week</span>
                </div>
                <Button variant="link" className="p-0 h-auto mt-4 text-accent">
                  View Details →
                </Button>
              </CardContent>
            </Card>
          </Link>
          
          {/* Modified Attendance Card to be clickable */}
          <Link to="/attendance-details" className="block">
            <Card className="animate-slide-in hover:shadow-elevated transition-all duration-200 cursor-pointer h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Attendance
                </CardTitle>
                <Calendar className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold">98%</div>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Perfect this month</span>
                </div>
                <Button variant="link" className="p-0 h-auto mt-4 text-accent">
                  View Details →
                </Button>
              </CardContent>
            </Card>
          </Link>
          
          {/* Modified Engagement Card to be clickable */}
          <Link to="/engagement-details" className="block">
            <Card className="animate-slide-in hover:shadow-elevated transition-all duration-200 cursor-pointer h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Engagement
                </CardTitle>
                <Heart className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold">High</div>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">+12% improvement</span>
                </div>
                <Button variant="link" className="p-0 h-auto mt-4 text-accent">
                  View Details →
                </Button>
              </CardContent>
            </Card>
          </Link>
          
          {/* Modified Achievements Card to be clickable */}
          <Link to="/achievements-details" className="block">
            <Card className="animate-slide-in hover:shadow-elevated transition-all duration-200 cursor-pointer h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Achievements
                </CardTitle>
                <Award className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold">12</div>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">3 new this week</span>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto mt-4 text-accent relative overflow-hidden group"
                >
                  <span className="relative z-10 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300">
                    View Details →
                  </span>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Subject Progress */}
          <Card className="lg:col-span-2 animate-fade-in">
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
              <CardDescription>Weekly progress across all subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg ${subject.color} flex items-center justify-center`}>
                        <subject.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{subject.name}</p>
                        <p className="text-sm text-muted-foreground">Grade: {subject.grade}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-lg">{subject.score}%</span>
                  </div>
                  <Progress value={subject.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-accent" />
                AI Insights
              </CardTitle>
              <CardDescription>Personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary/50 border border-border space-y-2"
                >
                  <p className="font-medium text-sm">{insight.title}</p>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              ))}
              {/* Modified View All Insights button to be clickable */}
              <Link to="/insights">
                <Button variant="hero" className="w-full mt-4">
                  View All Insights
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Upcoming Activities */}
          <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Upcoming
              </CardTitle>
              <CardDescription>This week's schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Modified Math Quiz to be clickable */}
              <Link to="/event-details" state={{ event: events.mathQuiz }} className="block">
                <div className="flex gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-medium">MON</span>
                    <span className="text-lg font-bold">15</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Math Quiz</p>
                    <p className="text-xs text-muted-foreground">10:00 AM</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    View Details →
                  </Button>
                </div>
              </Link>
              
              {/* Modified Science Project Due to be clickable */}
              <Link to="/event-details" state={{ event: events.scienceProject }} className="block">
                <div className="flex gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-medium">WED</span>
                    <span className="text-lg font-bold">17</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Science Project Due</p>
                    <p className="text-xs text-muted-foreground">2:00 PM</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    View Details →
                  </Button>
                </div>
              </Link>
              
              {/* Modified Parent-Teacher Meeting to be clickable */}
              <Link to="/event-details" state={{ event: events.parentTeacher }} className="block">
                <div className="flex gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-medium">FRI</span>
                    <span className="text-lg font-bold">19</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Parent-Teacher Meet</p>
                    <p className="text-xs text-muted-foreground">4:00 PM</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    View Details →
                  </Button>
                </div>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Emma's latest milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {/* Modified each achievement to be clickable */}
                {achievementsData.map((achievement, index) => (
                  <Link 
                    key={index} 
                    to="/achievement-details" 
                    state={{ achievement }}
                    className="block"
                  >
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/10">
                      <div className="text-4xl mb-2">{achievement.icon}</div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
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
        </div>
      </div>
    </div>
  );
};

const quickStats = [
  { label: "Overall Grade", value: "A-", change: "+0.3 from last week", icon: BookOpen },
  { label: "Attendance", value: "98%", change: "Perfect this month", icon: Calendar },
  { label: "Engagement", value: "High", change: "+12% improvement", icon: Heart },
  { label: "Achievements", value: "12", change: "3 new this week", icon: Award },
];

const subjects = [
  { name: "Mathematics", grade: "A", score: 92, icon: Brain, color: "bg-blue-500" },
  { name: "Science", grade: "A-", score: 88, icon: BookOpen, color: "bg-green-500" },
  { name: "English", grade: "B+", score: 85, icon: BookOpen, color: "bg-purple-500" },
  { name: "History", grade: "A", score: 90, icon: BookOpen, color: "bg-orange-500" },
];

const insights = [
  {
    title: "Strong in Problem Solving",
    description: "Emma excels in analytical thinking. Consider advanced math challenges.",
  },
  {
    title: "Reading Engagement Up",
    description: "30% more time spent on literature. Great progress!",
  },
  {
    title: "Group Work Skills",
    description: "Shows excellent collaboration in team projects.",
  },
];

export default Dashboard;