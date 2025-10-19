import { useState } from "react";
import Navbar from "@/components/Navbar";
import LearningPathCard from "@/components/LearningPathCard";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Binary,
  Globe,
  Brain,
  BookOpen,
  Trophy,
  Flame,
  Target,
} from "lucide-react";

const Dashboard = () => {
  const learningPaths = [
    {
      icon: Binary,
      title: "Data Structures & Algorithms",
      description: "Master problem-solving with arrays, trees, graphs, and dynamic programming.",
     
      progress: 100,
      difficulty: "Intermediate" as const,
      colorClass: "gradient-primary",
      route: "/dashboard/dsa",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build modern web apps with HTML, CSS, JavaScript, React, and Node.js.",
     
      progress: 100,
      difficulty: "Beginner" as const,
      colorClass: "gradient-hero",
      route: "/dashboard/webdev",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Explore machine learning, neural networks, and AI model deployment.",
  
      progress: 100,
      difficulty: "Advanced" as const,
      colorClass: "bg-success",
      route: "/dashboard/ai-ml",
    },
    {
      icon: BookOpen,
      title: "Core CS Subjects",
      description: "Operating Systems, DBMS, Computer Networks, and System Design fundamentals.",
      progress: 100,
      difficulty: "Intermediate" as const,
      colorClass: "bg-highlight",
      route: "/dashboard/corecs",
    },
  ];

 

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Welcome Section */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Welcome back, <span className="text-primary">Learner</span>! 👋
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your learning path and take your first step today
            </p>
          </div>

          
          {/* Learning Paths */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-bold mb-2">Your Learning Paths</h2>
            <p className="text-muted-foreground mb-8">
              Select a path to begin your journey or continue where you left off
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <LearningPathCard {...path} />
                </div>
              ))}
            </div>
          </div>

          {/* Motivational Quote */}
          <Card className="p-8 text-center gradient-hero animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-2xl font-semibold text-white mb-2">
              "Every expert was once a beginner"
            </p>
            <p className="text-white/80">
              Your journey starts with a single step. Let's make it count! 🚀
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
