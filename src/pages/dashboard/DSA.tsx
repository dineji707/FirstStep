import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Binary, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import YouTubePlaylist from "@/components/YouTubePlaylist";

const DSA = () => {
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
              <Binary className="h-12 w-12 text-sky-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Data Structures & <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-red-400 bg-clip-text text-transparent">Algorithms</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <p className="text-muted-foreground mb-8 text-center">
                Master arrays, trees, graphs, and dynamic programming with these curated video tutorials.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <YouTubePlaylist
                  videos={[
                    { id: 'ds-full', title: 'Data Structures Full Course', playlistId: 'PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu' },
                    { id: 'alg-explained', title: 'Algorithms Explained', playlistId: 'PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU' },
                    { id: 'dp', title: 'Dynamic Programming', playlistId: 'PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y' },
                    { id: 'graphs', title: 'Graph Algorithms', playlistId: 'PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz' },
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

export default DSA;
