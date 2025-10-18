import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Target, Calendar, TrendingUp, Award } from "lucide-react";
import { useState } from "react";
import { createGoal } from "@/services/api";

const GoalSetting = () => {
  const [goalTitle, setGoalTitle] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [category, setCategory] = useState("Academic");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!goalTitle || !goalDescription || !targetDate) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, we would get the user ID from authentication context
      // For now, we'll use a default user ID of 1
      const userId = 1;
      
      // Create the goal using our API service
      await createGoal(userId, {
        title: goalTitle,
        description: goalDescription,
        targetDate: targetDate,
        category: category
      });
      
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setGoalTitle("");
        setGoalDescription("");
        setTargetDate("");
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating goal:", error);
      alert("Failed to create goal. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Set New Goal</h1>
          <p className="text-muted-foreground text-lg">Define learning objectives for Emma's continued growth</p>
        </div>

        {isSubmitted ? (
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Goal Successfully Set!
              </CardTitle>
              <CardDescription>Your goal has been saved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Goal Created Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Emma will receive personalized recommendations and reminders to help achieve this goal.
                </p>
                <Link to="/profile">
                  <Button variant="hero">Back to Profile</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                New Learning Goal
              </CardTitle>
              <CardDescription>Create a personalized goal for Emma's development</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="goalTitle" className="text-sm font-medium">
                    Goal Title *
                  </label>
                  <Input
                    id="goalTitle"
                    placeholder="e.g., Improve math problem solving skills"
                    value={goalTitle}
                    onChange={(e) => setGoalTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="goalDescription" className="text-sm font-medium">
                    Description *
                  </label>
                  <Textarea
                    id="goalDescription"
                    placeholder="Describe the goal in detail..."
                    value={goalDescription}
                    onChange={(e) => setGoalDescription(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="targetDate" className="text-sm font-medium">
                      Target Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="targetDate"
                        type="date"
                        className="pl-10"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <div className="relative">
                      <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select
                        id="category"
                        className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="Academic">Academic</option>
                        <option value="Creative">Creative</option>
                        <option value="Physical">Physical</option>
                        <option value="Social">Social</option>
                        <option value="Personal">Personal Development</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="hero" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Setting Goal...
                      </>
                    ) : (
                      <>
                        <Target className="h-5 w-5 mr-2" />
                        Set Goal
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Goal Tips */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Goal Setting Tips
            </CardTitle>
            <CardDescription>Best practices for effective learning goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">Be Specific</h3>
                <p className="text-sm text-muted-foreground">
                  Clearly define what you want to achieve. Instead of "improve math," try "solve 10 algebra problems daily."
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">Set Realistic Targets</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure goals are challenging but achievable to maintain motivation and build confidence.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Regular check-ins help monitor advancement and make adjustments when needed.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-semibold mb-2">Celebrate Milestones</h3>
                <p className="text-sm text-muted-foreground">
                  Acknowledge small wins to maintain momentum and encourage continued effort.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoalSetting;