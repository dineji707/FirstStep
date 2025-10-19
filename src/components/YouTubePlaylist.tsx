import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  // either a single videoId or a playlistId (YouTube playlist)
  videoId?: string;
  playlistId?: string;
}

interface YouTubePlaylistProps {
  videos: Video[];
}

const YouTubePlaylist = ({ videos }: YouTubePlaylistProps) => {
  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);
  const playlistRef = useRef<HTMLDivElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<Video | null>(null);
  // attention pulse state: when true, briefly hide the sidebar to create a show/hide attention effect
  const [attentionHidden, setAttentionHidden] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const prevFocusedRef = useRef<HTMLElement | null>(null);
  const [modalPulseVisible, setModalPulseVisible] = useState(false);

  const openPlaylistSidebar = () => {
    // Scroll the playlist into view and focus it so the user sees the list
    if (playlistRef.current) {
      playlistRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      // focus the container for keyboard users
      // @ts-ignore
      playlistRef.current.focus?.();
    }
  };

  const openModal = (v: Video) => {
    setModalVideo(v);
    setModalOpen(true);
  };

  const closeModal = () => {
    // clear modal video to stop playback
    setModalOpen(false);
    setModalVideo(null);
  };

  // show/hide pulses to draw attention to the playlist sidebar
  useEffect(() => {
    if (modalOpen) return; // pause pulses while modal is open

    // schedule 3 pulses within ~1 minute (at ~3s, 23s, 45s)
    const baseTimes = [3000, 23000, 45000];
    const timers: number[] = [];

    baseTimes.forEach((t) => {
      // add a subtle pulse (scale + opacity) instead of fully hiding
      timers.push(window.setTimeout(() => setAttentionHidden(true), t));
      timers.push(window.setTimeout(() => setAttentionHidden(false), t + 900));
    });

    return () => timers.forEach((id) => clearTimeout(id));
  }, [modalOpen]);

  const getSrc = (v: Video) => {
    const common = "&rel=0&modestbranding=1&iv_load_policy=3";
    if (v.playlistId) return `https://www.youtube.com/embed/videoseries?list=${v.playlistId}${common}`;
    if (v.videoId) return `https://www.youtube.com/embed/${v.videoId}?rel=0${common}`;
    return "";
  };

  // Manage focus trap & restore when modal opens/closes
  useEffect(() => {
    if (modalOpen) {
      // store previously focused element
      prevFocusedRef.current = document.activeElement as HTMLElement | null;

      // focus the modal container
      setTimeout(() => modalRef.current?.focus(), 50);

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          closeModal();
        }
        if (e.key === "Tab") {
          // simple focus trap
          const container = modalRef.current;
          if (!container) return;
          const focusable = container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    } else {
      // restore focus
      prevFocusedRef.current?.focus?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  // When modal opens, show a small right-side overlay that pulses (show/hide for ~2s) 2-3 times within 1 minute
  useEffect(() => {
    if (!modalOpen) {
      setModalPulseVisible(false);
      return;
    }

    const baseTimes = [1000, 21000, 42000]; // show at ~1s, 21s, 42s
    const timers: number[] = [];

    baseTimes.forEach((t) => {
      timers.push(window.setTimeout(() => setModalPulseVisible(true), t));
      timers.push(window.setTimeout(() => setModalPulseVisible(false), t + 2000));
    });

    return () => timers.forEach((id) => clearTimeout(id));
  }, [modalOpen]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Video Player */}
      <div className="lg:col-span-2 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-large bg-background/50 backdrop-blur-lg border border-secondary/20"
        >
          <iframe
            src={getSrc(currentVideo)}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* Overlay button (top-right) to open/scroll to playlist sidebar */}
        <div className="absolute right-4 top-4 z-20 inline-flex items-center gap-2">
          <button
            onClick={openPlaylistSidebar}
            aria-label="Open playlist sidebar"
            className="inline-flex items-center gap-2 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-md hover:bg-black/75 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 10h12v2H3v-2zm0-4h18v2H3V6zm0 8h18v2H3v-2z" />
            </svg>
            <span>Open playlist</span>
          </button>

          {/* Dynamic overlay label: current index / total */}
          <div className="ml-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-md">
            {videos.findIndex((v) => v.id === currentVideo.id) + 1} / {videos.length}
          </div>
        </div>
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
        <div
          ref={playlistRef}
          tabIndex={-1}
          className={`bg-background/30 backdrop-blur-lg border border-secondary/20 rounded-xl shadow-medium overflow-hidden transition-transform duration-500 ${
            attentionHidden ? "scale-95 opacity-70" : "scale-100 opacity-100"
          }`}
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-highlight p-4">
            <h3 className="text-white font-semibold">Playlist ({videos.length} items)</h3>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            {videos
              .filter((video) => {
                // if modal open, show only the selected/current modal video in the sidebar
                if (modalOpen && modalVideo) return video.id === modalVideo.id;
                return true;
              })
              .map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => {
                  setCurrentVideo(video);
                  openModal(video);
                }}
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
      {/* Modal overlay: when a playlist item is clicked it opens here centered and other items are hidden */}
      {modalOpen && modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="relative z-60 w-full max-w-5xl mx-4"
          >
            <div className="bg-background/10 backdrop-blur-lg rounded-xl overflow-hidden border border-secondary/20 shadow-2xl">
              <div className="relative aspect-video">
                <iframe
                  src={getSrc(modalVideo)}
                  title={modalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                {/* Modal-side pulse overlay: indicates the playlist list on the right inside modal */}
                <div
                  aria-hidden
                  className={`absolute right-0 top-0 h-full w-64 pointer-events-none transition-opacity duration-300 ${
                    modalPulseVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="h-full bg-gradient-to-l from-black/60 to-transparent flex items-start justify-center pr-4">
                    <div className="mt-6 p-2 bg-white/10 rounded-md text-white text-sm">Click items to navigate playlist</div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between bg-white/5">
                <h4 className="text-lg font-semibold text-foreground">{modalVideo.title}</h4>
                <div className="flex items-center gap-2">
                  <a
                    href={modalVideo.playlistId ? `https://www.youtube.com/playlist?list=${modalVideo.playlistId}` : modalVideo.videoId ? `https://www.youtube.com/watch?v=${modalVideo.videoId}` : '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Open on YouTube
                  </a>
                  <button
                    onClick={closeModal}
                    className="ml-2 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1 rounded-md"
                  >
                    Cut
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default YouTubePlaylist;

