import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// We'll create these components next
import GradeDetails from "./pages/GradeDetails";
import AttendanceDetails from "./pages/AttendanceDetails";
import EventDetails from "./pages/EventDetails";
import Insights from "./pages/Insights";
import EngagementDetails from "./pages/EngagementDetails";
import AchievementsDetails from "./pages/AchievementsDetails";
import AchievementDetails from "./pages/AchievementDetails";
import StudyMaterials from "./pages/StudyMaterials";
import GoalSetting from "./pages/GoalSetting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/grade-details" element={<GradeDetails />} />
          <Route path="/attendance-details" element={<AttendanceDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/engagement-details" element={<EngagementDetails />} />
          <Route path="/achievements-details" element={<AchievementsDetails />} />
          <Route path="/achievement-details" element={<AchievementDetails />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/goal-setting" element={<GoalSetting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;