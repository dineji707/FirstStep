import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { useState } from "react";

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
            // User-provided video URL
            videoUrl: "https://www.youtube.com/watch?v=Tkp3FDgOueM",
          duration: "2-3 days"
        },
        {
          title: "Calculator App",
          description: "Create a functional calculator with basic arithmetic operations",
          tech: ["HTML", "CSS", "JavaScript"],
           videoUrl: "https://www.youtube.com/watch?v=LX8_z1nvqk4",
          duration: "1-2 days"
        },
        {
          title: "To-Do List",
          description: "Simple task manager with add, delete, and mark complete features",
          tech: ["React", "CSS"],
          videoUrl: "https://www.youtube.com/watch?v=zQFzFsbRiB8",
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
          videoUrl: "https://www.youtube.com/watch?v=zs1Nq2s_uy4",
          duration: "3-5 days"
        },
        {
          title: "Chat Application",
          description: "Real-time messaging app with Firebase backend",
          tech: ["React", "Firebase", "CSS"],
          videoUrl: "https://www.youtube.com/watch?v=domt_Sx-wTY",
          duration: "1 week"
        },
        {
          title: "Blog Platform",
          description: "Full CRUD blog with authentication and post management",
          tech: ["React", "Node.js", "MongoDB"],
          videoUrl: "https://www.youtube.com/watch?v=Ny4AUX-z2bU",
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
          videoUrl: "https://www.youtube.com/watch?v=3JUsg-WsU9o",
          duration: "3-4 weeks"
        },
        {
          title: "AI Resume Builder",
          description: "Generate professional resumes using AI and export to PDF",
          tech: ["React", "OpenAI", "Node.js"],
          videoUrl: "https://www.youtube.com/watch?v=RwSAODlohSY",
          duration: "2-3 weeks"
        },
        {
          title: "Video Streaming Platform",
          description: "Netflix-like app with video upload, streaming, and recommendations",
          tech: ["React", "AWS", "Node.js"],
          videoUrl: "https://www.youtube.com/watch?v=1cvaPMDUXVQ",
          duration: "1 month"
        }
      ]
    }
  ];

  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [playlistVideos, setPlaylistVideos] = useState<any[]>([]);

  const projectPlaylists: Record<string, string> = {
    'personal-portfolio': 'PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw',
    'calculator-app': 'PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc',
    'to-do-list': 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d',
    'weather-app': 'PL55RiY5tL51q4D-B63KBnygU6opNPFk_q',
  };

  // Helper: extract YouTube video ID from various URL forms or plain ID
  const extractYouTubeVideoId = (input?: string) => {
    if (!input) return '';
    // If it's already an ID-like string (11 chars), return
    const idLike = input.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(idLike)) return idLike;

    try {
      const u = new URL(idLike);
      if (u.hostname.includes('youtu.be')) {
        return u.pathname.slice(1);
      }
      if (u.searchParams.has('v')) return u.searchParams.get('v') || '';
      // some embeds use /embed/VIDEOID
      const embedMatch = u.pathname.match(/\/embed\/([-_a-zA-Z0-9]+)/);
      if (embedMatch) return embedMatch[1];
    } catch (e) {
      // not a URL — fallthrough
    }
    return '';
  };

  // Helper: extract playlist ID from YouTube playlist URL or plain ID
  const extractYouTubePlaylistId = (input?: string) => {
    if (!input) return '';
    const v = input.trim();
    // basic id pattern for playlist: usually starts with PL
    if (/^[A-Za-z0-9_-]+$/.test(v) && v.length > 8) return v;
    try {
      const u = new URL(v);
      if (u.searchParams.has('list')) return u.searchParams.get('list') || '';
      // path-based playlist urls are uncommon, so return '' otherwise
    } catch (e) {
      // not a URL
    }
    return '';
  };

  // Accept optional playlistId or videoId provided on the project object.
  // Priority: videoId (single video) -> project.playlistId -> internal mapping -> none
  const openProjectTutorials = (
    projectId: string,
    title: string,
    playlistIdProp?: string,
    videoIdProp?: string,
    // accept url variants too
    playlistUrlProp?: string,
    videoUrlProp?: string
  ) => {
    const fallbackPlaylistId = projectPlaylists[projectId] || '';

    // prefer explicit videoId/url
    const explicitVideoId = videoIdProp || extractYouTubeVideoId(videoUrlProp);
    const explicitPlaylistId = playlistIdProp || extractYouTubePlaylistId(playlistUrlProp) || fallbackPlaylistId;

    let videos: any[] = [];
    if (explicitVideoId) {
      videos = [{ id: projectId, title: `${title} Tutorial`, videoId: explicitVideoId }];
    } else if (explicitPlaylistId) {
      videos = [{ id: projectId, title: `${title} Tutorials`, playlistId: explicitPlaylistId }];
    }

    setPlaylistVideos(videos);
    setPlaylistOpen(true);
  };

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
                              <div className="flex gap-3">
                                <Link to={`/projects/${projectId}`} className="flex-1">
                                  <Button 
                                    variant="hero" 
                                    className="w-full bg-gradient-to-r from-sky-400 via-blue-400 to-red-400 hover:opacity-90"
                                  >
                                    Start Project
                                  </Button>
                                </Link>
                                <Button
                                  variant="outline"
                                  onClick={() => openProjectTutorials(
                                    projectId,
                                    project.title,
                                    // pass optional playlistId or videoId if the project object contains them
                                    // can also pass full URLs via playlistUrl/videoUrl
                                    // @ts-ignore - project may be loosely typed in this file
                                    project.playlistId,
                                    // @ts-ignore
                                    project.videoId,
                                    // @ts-ignore
                                    project.playlistUrl,
                                    // @ts-ignore
                                    project.videoUrl
                                  )}
                                  className="w-44"
                                >
                                  View Tutorials
                                </Button>
                              </div>
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

          {/* Playlist Dialog */}
          <Dialog open={playlistOpen} onOpenChange={setPlaylistOpen}>
            <DialogContent className="max-w-6xl bg-background/90">
              <DialogHeader>
                <DialogTitle>Tutorials</DialogTitle>
              </DialogHeader>
              {playlistVideos.length > 0 ? (
                <YouTubePlaylist videos={playlistVideos} />
              ) : (
                <p className="p-6">No tutorials available for this project.</p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
};

export default Projects;
