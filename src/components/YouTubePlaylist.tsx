import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  videoId: string;
}

interface YouTubePlaylistProps {
  videos: Video[];
}

const YouTubePlaylist = ({ videos }: YouTubePlaylistProps) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Video Player */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-large bg-background/50 backdrop-blur-lg border border-secondary/20"
        >
          <iframe
            src={`https://www.youtube.com/embed/${currentVideo.videoId}?rel=0`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4"
        >
          <h3 className="text-xl font-semibold text-foreground">{currentVideo.title}</h3>
        </motion.div>
      </div>

      {/* Playlist Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-background/30 backdrop-blur-lg border border-secondary/20 rounded-xl shadow-medium overflow-hidden">
          <div className="bg-gradient-to-r from-primary via-secondary to-highlight p-4">
            <h3 className="text-white font-semibold">Playlist ({videos.length} videos)</h3>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            {videos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                whileHover={{ scale: 1.02 }}
                className={`w-full p-4 flex items-start gap-3 border-b border-border/50 transition-all ${
                  currentVideo.id === video.id
                    ? "bg-primary/10 border-l-4 border-l-primary"
                    : "hover:bg-accent/5"
                }`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-semibold">
                  {currentVideo.id === video.id ? <Play className="h-4 w-4" /> : index + 1}
                </div>
                <div className="flex-1 text-left">
                  <p className={`text-sm font-medium ${currentVideo.id === video.id ? "text-primary" : "text-foreground"}`}>
                    {video.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlaylist;
