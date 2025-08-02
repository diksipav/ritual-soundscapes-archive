import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoHeroProps {
  children: React.ReactNode;
  isLive?: boolean;
  className?: string;
}

export default function VideoHero({ children, isLive = false, className = "" }: VideoHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className={`relative h-screen overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
        <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        {children}
      </div>
      
      {/* Live indicator */}
      {isLive && (
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          LIVE
        </div>
      )}
      
      {/* Mute/Unmute button - positioned at bottom right */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
