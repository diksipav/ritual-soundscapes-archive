
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

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className={`relative h-screen overflow-hidden ${className}`}>
      {/* Fallback background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
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
