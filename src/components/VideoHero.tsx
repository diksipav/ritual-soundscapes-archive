
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
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Mute button - positioned lower */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-6 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 pointer-events-auto backdrop-blur-sm hover:scale-110"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {isLive && (
          <Link to="/live" className="live-indicator-flashing mb-8 cursor-pointer hover:scale-105 transition-transform duration-300">
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
