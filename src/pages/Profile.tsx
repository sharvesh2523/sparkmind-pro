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
  Target,
  ArrowLeft,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { getUserGoals } from "@/services/api";

const Profile = () => {
  // State for goals
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch goals from backend when component mounts
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        // In a real app, we would get the user ID from authentication context
        // For now, we'll use a default user ID of 1
        const userId = 1;
        const userGoals = await getUserGoals(userId);
        setGoals(userGoals);
      } catch (error) {
        console.error("Error fetching goals:", error);
        // Fallback to static data if API call fails
        setGoals([
          { title: "Improve Math Problem Speed", progress: 65 },
          { title: "Read 2 Books This Month", progress: 50 },
          { title: "Science Project Excellence", progress: 80 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  // Achievement data for navigation
  const achievementsData = [
    {
      icon: "🏆",
      name: "Honor Roll",
      earned: true,
      date: "October 2023",
      description: "Achieved top 10% performance in all subjects for the semester",
      category: "Academic Excellence",
      rarity: "Rare"
    },
    {
      icon: "📚",
      name: "Bookworm",
      earned: true,
      date: "November 2023",
      description: "Read 10 books in one month, exceeding the monthly goal",
      category: "Literacy",
      rarity: "Common"
    },
    {
      icon: "⭐",
      name: "Star Student",
      earned: true,
      date: "September 2023",
      description: "Consistently demonstrated outstanding classroom participation",
      category: "Participation",
      rarity: "Uncommon"
    },
    {
      icon: "🎯",
      name: "Goal Getter",
      earned: true,
      date: "November 2023",
      description: "Successfully completed 5 personal learning goals this semester",
      category: "Goal Achievement",
      rarity: "Uncommon"
    },
    {
      icon: "🤝",
      name: "Team Player",
      earned: true,
      date: "October 2023",
      description: "Demonstrated exceptional collaboration skills in group projects",
      category: "Social Skills",
      rarity: "Common"
    },
    {
      icon: "💡",
      name: "Innovator",
      earned: false,
      date: "Not earned",
      description: "Propose and implement a creative solution to a classroom challenge",
      category: "Creativity",
      rarity: "Rare"
    },
    {
      icon: "🎨",
      name: "Creative Mind",
      earned: true,
      date: "September 2023",
      description: "Produced outstanding creative work in art or writing assignments",
      category: "Creativity",
      rarity: "Common"
    },
    {
      icon: "🔬",
      name: "Science Star",
      earned: false,
      date: "Not earned",
      description: "Achieve excellence in a science project or experiment",
      category: "STEM",
      rarity: "Uncommon"
    },
    {
      icon: "✍️",
      name: "Writer",
      earned: true,
      date: "October 2023",
      description: "Produced exceptional written work that was recognized by teachers",
      category: "Literacy",
      rarity: "Common"
    },
    {
      icon: "🎵",
      name: "Performer",
      earned: false,
      date: "Not earned",
      description: "Deliver an outstanding performance in music, drama, or presentation",
      category: "Arts",
      rarity: "Uncommon"
    },
    {
      icon: "🌟",
      name: "Leader",
      earned: false,
      date: "Not earned",
      description: "Take initiative to lead a group project or classroom activity",
      category: "Leadership",
      rarity: "Rare"
    },
    {
      icon: "🚀",
      name: "Explorer",
      earned: true,
      date: "November 2023",
      description: "Show curiosity and initiative in exploring new learning topics",
      category: "Curiosity",
      rarity: "Common"
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
        {/* Student Header */}
        <div className="flex items-center gap-6 mb-8 animate-fade-in">
          <div className="h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold">
            E
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Emma Johnson</h1>
            <p className="text-muted-foreground text-lg">Grade 8 • Spring Valley School</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cognitive Skills Radar */}
          <Card className="lg:col-span-2 animate-slide-in">
            <CardHeader>
              <CardTitle>Cognitive Skills Analysis</CardTitle>
              <CardDescription>AI-powered assessment of learning strengths</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={cognitiveData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(var(--foreground))" }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Emma"
                    dataKey="value"
                    stroke="hsl(var(--accent))"
                    fill="hsl(var(--accent))"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="animate-slide-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>This week's highlights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{stat.label}</span>
                    <span className="text-muted-foreground">{stat.value}</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievement Badges */}
          <Card className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Achievement Showcase
              </CardTitle>
              <CardDescription>Earned badges and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {achievementsData.map((badge, index) => (
                  <Link 
                    key={index} 
                    to="/achievement-details" 
                    state={{ achievement: badge }}
                    className="block"
                  >
                    <div
                      className={`relative group ${
                        badge.earned ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <div
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center p-4 transition-all duration-300 ${
                          badge.earned
                            ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-500/50 hover:scale-105 shadow-lg shadow-cyan-500/10 cursor-pointer"
                            : "bg-secondary border border-border"
                        }`}
                      >
                        <span className="text-4xl mb-2">{badge.icon}</span>
                        <p className="text-xs font-medium text-center">{badge.name}</p>
                      </div>
                      {badge.earned && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse pointer-events-none" />
                      )}
                      <Button 
                        variant="link" 
                        className="p-0 h-auto mt-2 text-xs relative overflow-hidden group/btn"
                      >
                        <span className="relative z-10 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent group-hover/btn:from-cyan-400 group-hover/btn:to-purple-400 transition-all duration-300">
                          View Details →
                        </span>
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-0 group-hover/btn:w-full transition-all duration-300"></div>
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Style */}
          <Card className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Learning Style Profile</CardTitle>
              <CardDescription>AI-identified learning preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-primary text-white">
                <h3 className="text-2xl font-bold mb-2">Visual & Analytical Learner</h3>
                <p className="opacity-90">
                  Emma thrives with visual aids, diagrams, and structured problem-solving approaches.
                  She benefits from color-coded notes and mind maps.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {learningTraits.map((trait, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border bg-secondary/50"
                  >
                    <p className="font-medium mb-1">{trait.label}</p>
                    <p className="text-sm text-muted-foreground">{trait.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <CardHeader>
              <CardTitle>Current Goals</CardTitle>
              <CardDescription>Active learning objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading ? (
                <div className="flex justify-center items-center h-24">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                </div>
              ) : goals.length > 0 ? (
                goals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-medium text-sm">{goal.title}</p>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{goal.progress}% complete</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-sm">No active goals set yet.</p>
              )}
              <Link to="/goal-setting">
                <Button variant="hero" className="w-full mt-4">
                  <Target className="h-5 w-5 mr-2" />
                  Set New Goal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const cognitiveData = [
  { skill: "Logic", value: 92 },
  { skill: "Memory", value: 85 },
  { skill: "Creativity", value: 88 },
  { skill: "Analysis", value: 95 },
  { skill: "Verbal", value: 82 },
  { skill: "Spatial", value: 90 },
];

const weeklyStats = [
  { label: "Homework Completion", value: "95%", progress: 95 },
  { label: "Class Participation", value: "88%", progress: 88 },
  { label: "Focus Score", value: "92%", progress: 92 },
  { label: "Collaboration", value: "85%", progress: 85 },
];

const learningTraits = [
  { label: "Preferred Time", value: "Morning" },
  { label: "Study Environment", value: "Quiet & Organized" },
  { label: "Learning Pace", value: "Self-paced" },
  { label: "Feedback Style", value: "Detailed & Written" },
];

export default Profile;