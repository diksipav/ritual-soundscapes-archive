
import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  videoSrc?: string;
  isLive?: boolean;
  children?: React.ReactNode;
}

export default function VideoHero({ 
  videoSrc = "https://www.youtube.com/embed/rxAe3xqyeSA?autoplay=1&mute=1&controls=0&loop=1&playlist=rxAe3xqyeSA&disablekb=1&modestbranding=1&rel=0&showinfo=0",
  isLive = false,
  children 
}: VideoHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      const iframe = videoRef.current;
      const currentSrc = iframe.src;
      if (isMuted) {
        iframe.src = currentSrc.replace('mute=1', 'mute=0');
      } else {
        iframe.src = currentSrc.replace('mute=0', 'mute=1');
      }
    }
  };

  return (
    <section className="video-hero relative h-screen overflow-hidden">
      <iframe
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-[120%] object-cover pointer-events-none"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ transform: 'scale(1.2) translateY(-10%)' }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Mute button - positioned lower to avoid header overlap */}
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors pointer-events-auto backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </motion.button>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {isLive && (
          <motion.div
            className="live-indicator-flashing mb-12 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="tracking-widest">LIVE NOW</span>
          </motion.div>
        )}
        
        {children && (
          <div className="max-w-4xl">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
