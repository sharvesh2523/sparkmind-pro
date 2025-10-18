import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, BarChart3, TrendingUp, Award, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ECHO-FIVE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Understand Your Child's{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                AI-powered insights into academic progress, emotional wellness, and personal growth.
                Not just grades, but the complete story of your child's development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button variant="hero" size="lg" className="gap-2">
                    <Sparkles className="h-5 w-5" />
                    Start Free Trial
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="animate-slide-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-30 rounded-full" />
                <img
                  src={heroImage}
                  alt="AI-powered dashboard showing student progress"
                  className="relative rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything Parents Need to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Support Their Child
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time insights powered by AI to help you understand not just what your child is learning,
              but how they're feeling and growing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-elevated transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white shadow-elevated">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Understanding?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of parents who are gaining deeper insights into their child's
              academic and emotional journey.
            </p>
            <Link to="/register">
              <Button variant="glass" size="lg" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 ECHO-FIVE. Empowering parents through AI-driven insights.</p>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: BarChart3,
    title: "Academic Analytics",
    description: "Track grades, attendance, and subject performance with interactive visualizations and trend analysis.",
  },
  {
    icon: Brain,
    title: "Cognitive Insights",
    description: "AI-powered analysis of learning patterns, strengths, and areas for growth across different skills.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Weekly summaries and milestone tracking to celebrate achievements and identify support needs.",
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Gamified badges and rewards that motivate students and recognize their accomplishments.",
  },
  {
    icon: Users,
    title: "Teacher Collaboration",
    description: "Seamless communication with teachers and access to classroom insights and feedback.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Personalized tips and strategies to support your child's learning journey at home.",
  },
];

export default Landing;