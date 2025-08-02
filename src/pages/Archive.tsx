import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArchiveSession {
  id: string;
  title: string;
  artist: string;
  date: string;
  duration: string;
  image: string;
  tags: string[];
  youtubeId?: string;
  thumbnail?: string;
}

export default function Archive() {
  const sessions: ArchiveSession[] = [
    {
      id: '1',
      title: 'SET 1 - RITUAL FREQUENCIES',
      artist: 'RÖVE',
      date: 'March 12, 2024',
      duration: '45 min',
      image: 'https://img.youtube.com/vi/rxAe3xqyeSA/maxresdefault.jpg',
      youtubeId: 'rxAe3xqyeSA',
      tags: ['Ritual', 'Meditation', 'Deep']
    },
    {
      id: '2',
      title: 'SET 2 - DAWN MEDITATION',
      artist: 'RÖVE',
      date: 'March 10, 2024',
      duration: '42 min',
      image: 'https://img.youtube.com/vi/b9Gi0JICt5Y/maxresdefault.jpg',
      youtubeId: 'b9Gi0JICt5Y',
      tags: ['Ambient', 'Meditation', 'Dawn']
    },
    {
      id: '3',
      title: 'SET 3 - FOREST RHYTHMS',
      artist: 'RÖVE',
      date: 'March 8, 2024',
      duration: '58 min',
      image: 'https://img.youtube.com/vi/0JjO27k8P44/maxresdefault.jpg',
      youtubeId: '0JjO27k8P44',
      tags: ['Field Recording', 'Nature', 'Organic']
    },
    {
      id: '4',
      title: 'SET 4 - COASTAL FREQUENCIES',
      artist: 'RÖVE',
      date: 'March 5, 2024',
      duration: '38 min',
      image: 'https://img.youtube.com/vi/cHT2laQvAYI/maxresdefault.jpg',
      youtubeId: 'cHT2laQvAYI',
      tags: ['Electronic', 'Coastal', 'Ambient']
    },
    {
      id: '5',
      title: 'Urban Tranquility',
      artist: 'City Zen',
      date: 'March 3, 2024',
      duration: '54 min',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop',
      tags: ['Urban', 'Minimal', 'Evening']
    },
    {
      id: '6',
      title: 'Mountain Echo',
      artist: 'Alpine Sessions',
      date: 'March 1, 2024',
      duration: '71 min',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      tags: ['Mountain', 'Echo', 'Spatial']
    },
    {
      id: '7',
      title: 'Nocturnal Garden',
      artist: 'Midnight Bloom',
      date: 'February 28, 2024',
      duration: '43 min',
      image: 'https://images.unsplash.com/photo-1502780402662-acc01917ae64?w=300&h=300&fit=crop',
      tags: ['Night', 'Botanical', 'Dreamy']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-display text-5xl text-foreground mb-6 tracking-wider">ARCHIVE</h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide">
            REVISIT PAST SESSIONS AND DISCOVER NEW SOUNDS. EACH RECORDING CAPTURES A UNIQUE MOMENT IN TIME AND PLACE.
          </p>
        </motion.div>

        <motion.div 
          className="grid-elegant"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {sessions.map((session) => (
            <motion.div 
              key={session.id} 
              className="card-elegant group cursor-pointer hover:shadow-lg relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {session.youtubeId ? (
                <Link to={`/video/${session.id}`}>
                  <div className="aspect-video overflow-hidden rounded-sm mb-4 relative">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-black ml-1" size={24} fill="currentColor" />
                      </div>
                    </div>
                    {/* Live session badge */}
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      LIVE SESSION
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="aspect-square overflow-hidden rounded-sm mb-4">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1 tracking-wide group-hover:text-accent transition-colors duration-300">
                    {session.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground tracking-wide">BY {session.artist}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm font-body text-muted-foreground">
                  <span>{session.date}</span>
                  <span>{session.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {session.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <button className="btn-animated-secondary tracking-wider">
            LOAD MORE SESSIONS
          </button>
        </motion.div>
      </div>
    </div>
  );
}
