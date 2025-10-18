import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectCategories = [
    {
      level: "Beginner",
      icon: Code2,
      color: "text-success",
      bgColor: "bg-success/10",
      projects: [
        {
          title: "Personal Portfolio",
          description: "Build your first portfolio website with HTML, CSS, and JavaScript",
          tech: ["HTML", "CSS", "JavaScript"],
          duration: "2-3 days"
        },
        {
          title: "Calculator App",
          description: "Create a functional calculator with basic arithmetic operations",
          tech: ["HTML", "CSS", "JavaScript"],
          duration: "1-2 days"
        },
        {
          title: "To-Do List",
          description: "Simple task manager with add, delete, and mark complete features",
          tech: ["React", "CSS"],
          duration: "2-3 days"
        }
      ]
    },
    {
      level: "Intermediate",
      icon: Rocket,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      projects: [
        {
          title: "Weather App",
          description: "Fetch and display weather data using OpenWeather API",
          tech: ["React", "API", "Tailwind"],
          duration: "3-5 days"
        },
        {
          title: "Chat Application",
          description: "Real-time messaging app with Firebase backend",
          tech: ["React", "Firebase", "CSS"],
          duration: "1 week"
        },
        {
          title: "Blog Platform",
          description: "Full CRUD blog with authentication and post management",
          tech: ["React", "Node.js", "MongoDB"],
          duration: "2 weeks"
        }
      ]
    },
    {
      level: "Advanced",
      icon: Sparkles,
      color: "text-highlight",
      bgColor: "bg-highlight/10",
      projects: [
        {
          title: "E-Commerce Store",
          description: "Complete shopping site with cart, payments, and admin panel",
          tech: ["Next.js", "Stripe", "PostgreSQL"],
          duration: "3-4 weeks"
        },
        {
          title: "AI Resume Builder",
          description: "Generate professional resumes using AI and export to PDF",
          tech: ["React", "OpenAI", "Node.js"],
          duration: "2-3 weeks"
        },
        {
          title: "Video Streaming Platform",
          description: "Netflix-like app with video upload, streaming, and recommendations",
          tech: ["React", "AWS", "Node.js"],
          duration: "1 month"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 p-2 gradient-hero rounded-lg mb-4">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build Real <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn by building — Step-by-step project guides from beginner to advanced
            </p>
          </div>

          <div className="space-y-12">
            {projectCategories.map((category, catIndex) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={catIndex}
                  className="animate-fade-in"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold">{category.level}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.projects.map((project, projectIndex) => {
                      const projectId = project.title.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <motion.div
                          key={projectIndex}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Card 
                            className="hover:shadow-xl transition-all group h-full rounded-2xl bg-white/30 backdrop-blur-lg border border-sky-200/40 shadow-md"
                          >
                            <CardHeader>
                              <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-blue-400 group-hover:to-red-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="min-h-[48px]">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                ⏱️ Duration: {project.duration}
                              </div>
                              <Link to={`/projects/${projectId}`}>
                                <Button 
                                  variant="hero" 
                                  className="w-full bg-gradient-to-r from-sky-400 via-blue-400 to-red-400 hover:opacity-90"
                                >
                                  Start Project
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
