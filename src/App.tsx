import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Mentor from "./pages/Mentor";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import DSA from "./pages/dashboard/DSA";
import WebDev from "./pages/dashboard/WebDev";
import AIML from "./pages/dashboard/AIML";
import CoreCS from "./pages/dashboard/CoreCS";
import ProjectDetail from "./pages/ProjectDetail";
import Languages from "./pages/Languages";
import C from "./pages/languages/C";
import Cpp from "./pages/languages/Cpp";
import Java from "./pages/languages/Java";
import Python from "./pages/languages/Python";
import Events from "./pages/Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/dsa" element={<DSA />} />
          <Route path="/dashboard/webdev" element={<WebDev />} />
          <Route path="/dashboard/ai-ml" element={<AIML />} />
          <Route path="/dashboard/corecs" element={<CoreCS />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/languages/c" element={<C />} />
          <Route path="/languages/cpp" element={<Cpp />} />
          <Route path="/languages/java" element={<Java />} />
          <Route path="/languages/python" element={<Python />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
