import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';

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
    <section className="video-hero relative h-screen overflow-hidden pt-20">
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
      
      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors pointer-events-auto"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {isLive && (
          <Link to="/live" className="live-indicator-flashing mb-8 cursor-pointer hover:scale-105 transition-transform">
            <span>LIVE NOW</span>
          </Link>
        )}
        
        {children && (
          <div className="max-w-2xl">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}