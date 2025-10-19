import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import YouTubePlaylist from "@/components/YouTubePlaylist";

const CoreCS = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/30 backdrop-blur-lg border border-sky-200/40 shadow-md mb-6">
              <BookOpen className="h-12 w-12 text-sky-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-red-400 bg-clip-text text-transparent">CS Subjects</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <p className="text-muted-foreground mb-8 text-center">
                Master Operating Systems, DBMS, Computer Networks, and System Design with these courses.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <YouTubePlaylist
                  videos={[
                    { id: 'os', title: 'Operating Systems', playlistId: 'PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O' },
                    { id: 'dbms', title: 'Database Management Systems', playlistId: 'PLrjkTql3jnm-CLxHftqLgkrZbM8fUt0vn' },
                    { id: 'networks', title: 'Computer Networks', playlistId: 'PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx' },
                    { id: 'system-design', title: 'System Design', playlistId: 'PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a' },
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

export default CoreCS;
