import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Code2 } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // Convert URL-friendly projectId back to display name
  const projectName = projectId
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Project';

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/30 backdrop-blur-lg border border-sky-200/40 shadow-md mb-6">
              <Code2 className="h-12 w-12 text-sky-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                {projectName}
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <p className="text-muted-foreground mb-8 text-center">
                Learn to build {projectName} from scratch with these step-by-step video tutorials.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'PLillGF-RfqbYeckUaD1z6nviTp31GLTH8', title: 'Project Setup & Planning' },
                  { id: 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d', title: 'Frontend Development' },
                  { id: 'PL55RiY5tL51q4D-B63KBnygU6opNPFk_q', title: 'Backend Integration' },
                  { id: 'PLqnslRFeH2UqLwzS0AwKDKLrpYBKzLBy2', title: 'Deployment & Testing' }
                ].map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl overflow-hidden backdrop-blur-lg border border-sky-200/40 shadow-lg group relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(147, 197, 253, 0.15) 50%, rgba(248, 113, 113, 0.15) 100%)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-blue-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    <div className="relative">
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/videoseries?list=${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-t-2xl"
                        />
                      </div>
                      <div className="p-4 bg-white/20 backdrop-blur-sm">
                        <h3 className="font-semibold text-foreground">{video.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
