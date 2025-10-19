import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Code2 } from "lucide-react";
import YouTubePlaylist from "@/components/YouTubePlaylist";

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
              
              <div className="grid grid-cols-1 gap-6">
                <YouTubePlaylist
                  videos={[
                    { id: 'setup', title: 'Project Setup & Planning', playlistId: 'PLillGF-RfqbYeckUaD1z6nviTp31GLTH8' },
                    { id: 'frontend', title: 'Frontend Development', playlistId: 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d' },
                    { id: 'backend', title: 'Backend Integration', playlistId: 'PL55RiY5tL51q4D-B63KBnygU6opNPFk_q' },
                    { id: 'deploy', title: 'Deployment & Testing', playlistId: 'PLqnslRFeH2UqLwzS0AwKDKLrpYBKzLBy2' },
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
