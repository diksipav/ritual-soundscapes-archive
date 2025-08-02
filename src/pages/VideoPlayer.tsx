
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">SESSION NOT FOUND</h1>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Return Button and Logo */}
        <motion.header 
          className="p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/archive')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 font-body text-sm tracking-wider"
            >
              <ArrowLeft size={16} />
              BACK TO ARCHIVE
            </button>
            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="font-display text-white tracking-[0.3em] text-center">
                <div className="text-xl">LOWTIDE</div>
                <div className="text-xl">RITUAL</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white/60 text-sm tracking-wider">{session.duration}</div>
            </div>
          </div>
        </motion.header>

        {/* Video Section */}
        <div className="flex-1 flex items-center justify-center px-6 pb-20">
          <motion.div 
            className="max-w-6xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Video Player */}
            <div className="aspect-video mb-8 rounded-lg overflow-hidden shadow-2xl">
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
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h1 className="font-display text-2xl md:text-4xl text-white mb-4 tracking-wider font-bold">
                  {session.title}
                </h1>
                <p className="font-body text-xl text-purple-200 tracking-widest mb-2">
                  PERFORMED BY {session.artist}
                </p>
                <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                  {session.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://www.youtube.com/watch?v=${session.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-animated-primary flex items-center gap-2 justify-center"
                >
                  <Youtube size={20} />
                  EXPLORE MORE ON
                </a>
                <button 
                  onClick={() => navigate('/archive')}
                  className="btn-animated-ghost text-white border-white hover:bg-white hover:text-slate-900"
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
