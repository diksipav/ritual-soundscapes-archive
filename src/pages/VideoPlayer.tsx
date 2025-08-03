
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoSession {
  id: string;
  title: string;
  youtubeId: string;
  artist: string;
  description: string;
  duration: string;
}

const videoSessions: VideoSession[] = [
  {
    id: '1',
    title: 'What Happens When You DJ Outside? PumpTrack DJ SET',
    youtubeId: 'rxAe3xqyeSA',
    artist: 'RÖVE',
    description: 'An immersive journey through deep ambient textures and ethereal soundscapes.',
    duration: '58:22'
  },
  {
    id: '2',
    title: 'AFRO Evening DJ SET at the Turia Park',
    youtubeId: 'b9Gi0JICt5Y',
    artist: 'RÖVE',
    description: 'Early morning sound healing session captured at sunrise.',
    duration: '1:12:14'
  },
  {
    id: '3',
    title: 'Sunrise Espresso DJ SET',
    youtubeId: '0JjO27k8P44',
    artist: 'RÖVE',
    description: 'Organic beats and nature sounds blend in perfect harmony.',
    duration: '1:01:07'
  },
  {
    id: '4',
    title: 'Park and coffee AFRO HOUSE DJ SET',
    youtubeId: 'cHT2laQvAYI',
    artist: 'RÖVE',
    description: 'Ocean-inspired ambient compositions for deep listening.',
    duration: '1:03:05'
  }
];

export default function VideoPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const session = videoSessions.find(s => s.id === id);

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl sm:text-3xl text-foreground mb-4">SESSION NOT FOUND</h1>
          <button 
            onClick={() => navigate('/archive')}
            className="btn-animated-secondary"
          >
            BACK TO ARCHIVE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 relative overflow-hidden">
      {/* Warm earthy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-orange-100/60 to-red-200/40"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Return Button and Logo */}
        <motion.header 
          className="p-4 sm:p-6 backdrop-blur-md bg-white/10 border-b border-white/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/archive')}
              className="flex items-center gap-2 text-amber-900/80 hover:text-amber-900 transition-colors duration-300 font-body text-sm tracking-wider bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">BACK TO ARCHIVE</span>
              <span className="sm:hidden">BACK</span>
            </button>
            
            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
              <div className="font-display text-amber-900 tracking-[0.3em]">
                <div className="text-lg sm:text-xl text-center">LOWTIDE</div>
                <div className="text-lg sm:text-xl text-center">RITUAL</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-amber-800/60 text-xs sm:text-sm tracking-wider bg-white/20 px-3 py-1 rounded-full">{session.duration}</div>
            </div>
          </div>
        </motion.header>

        {/* Video Section */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-16 sm:pb-20">
          <motion.div 
            className="max-w-6xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Video Player */}
            <div className="aspect-video mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-2xl border border-white/30">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${session.youtubeId}?autoplay=1&rel=0`}
                title={session.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Session Info */}
            <motion.div 
              className="text-center space-y-4 sm:space-y-6 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/30 backdrop-blur-md rounded-lg p-6 sm:p-8 border border-white/40">
                <h1 className="font-display text-xl sm:text-2xl md:text-4xl text-amber-900 mb-3 sm:mb-4 tracking-wider font-bold leading-tight">
                  {session.title}
                </h1>
                <p className="font-body text-lg sm:text-xl text-amber-800 tracking-widest mb-2">
                  PERFORMED BY {session.artist}
                </p>
                <p className="font-body text-sm sm:text-lg text-amber-800/80 max-w-2xl mx-auto leading-relaxed px-2">
                  {session.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <a
                  href={`https://www.youtube.com/watch?v=${session.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center text-sm sm:text-base tracking-wider backdrop-blur-sm border border-amber-700"
                >
                  <Youtube size={18} />
                  EXPLORE MORE ON
                </a>
                <button 
                  onClick={() => navigate('/archive')}
                  className="bg-white/20 hover:bg-white/30 text-amber-900 border-2 border-amber-900/30 hover:border-amber-900/50 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base tracking-wider backdrop-blur-sm"
                >
                  EXPLORE MORE SESSIONS
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
