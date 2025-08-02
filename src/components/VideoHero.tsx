
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoHeroProps {
  children: React.ReactNode;
  isLive?: boolean;
  className?: string;
  videoUrl?: string;
}

export default function VideoHero({ children, isLive = false, className = "", videoUrl }: VideoHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (iframeRef.current && videoId) {
      const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${!isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&vq=hd1080`;
      iframeRef.current.src = newSrc;
    }
  };

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = videoUrl ? getYouTubeVideoId(videoUrl) : null;

  return (
    <div className={`relative h-screen overflow-hidden ${className}`}>
      {/* Background Video */}
      {videoId ? (
        <div className="absolute inset-0">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&vq=hd1080`}
            title="Background Video"
            className="w-full h-full object-cover"
            style={{ 
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              pointerEvents: 'none'
            }}
            allow="autoplay; encrypted-media"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>
        </div>
      ) : (
        /* Fallback background */
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      )}
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 z-10">
        {children}
      </div>
      
      {/* Mute/Unmute button - positioned at bottom right */}
      {videoUrl && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </div>
  );
}
