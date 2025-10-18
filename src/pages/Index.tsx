import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import {
  BookOpen,
  Code2,
  Users,
  Target,
  Trophy,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Guided Learning Paths",
      description: "Structured roadmaps for DSA, Web Dev, AI, and Core CS with step-by-step guidance.",
    },
    {
      icon: Code2,
      title: "Interactive Practice",
      description: "Code editor with AI feedback, daily challenges, and direct LeetCode/GFG integration.",
      gradient: "hero" as const,
    },
    {
      icon: Sparkles,
      title: "AI Learning Mentor",
      description: "StepMate helps you understand concepts, suggests resources, and recommends problems.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with seniors, ask doubts, get mentored, and share your journey.",
      gradient: "hero" as const,
    },
    {
      icon: Trophy,
      title: "Progress & Gamification",
      description: "Earn XP, badges, and maintain learning streaks. Track your growth journey.",
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Curated playlists, projects, roadmaps, and guides for every skill level.",
      gradient: "hero" as const,
    },
  ];

  const benefits = [
    "Clear roadmap from confusion to confidence",
    "Learn at your own pace with structured content",
    "Practice with real coding challenges",
    "Get mentored by experienced seniors",
    "Build projects that matter",
    "Track progress with motivating rewards",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 gradient-subtle" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-6 border border-secondary/30">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">
                A guide I wish I had when I was a beginner
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Take Your{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent animate-glow">
                FirstStep
              </span>
              <br />
              Toward Becoming an Engineer
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              From Confusion to Clarity — Learn Smarter, Not Harder.
              Your beginner-friendly platform for mastering Computer Science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="group px-8">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg" className="px-8">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Learning Resources</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-success mb-2">1000+</div>
              <div className="text-muted-foreground">Practice Problems</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-muted-foreground">Active Mentors</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-highlight mb-2">50+</div>
              <div className="text-muted-foreground">Project Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources designed for your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FirstStep Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
                  FirstStep?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Every coder starts somewhere. Start here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background shadow-soft hover:shadow-medium transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center gradient-hero rounded-3xl p-12 shadow-large animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who are transforming confusion into clarity
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 text-lg font-semibold">
                Begin Your FirstStep
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">
            <span className="font-semibold text-foreground">FirstStep</span> — Your guide to becoming an Engineer
          </p>
          <p className="text-sm">
            Made with 💙 for Computer Science students everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
