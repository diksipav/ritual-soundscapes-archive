
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoHero from '@/components/VideoHero';
import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const recentSessions = [
    {
      id: '1',
      title: 'RÖVE - swedish house mafia (remix) wait so long (2) agents of time',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/rxAe3xqyeSA/maxresdefault.jpg',
      duration: '58:22',
      youtubeId: 'rxAe3xqyeSA'
    },
    {
      id: '2',
      title: 'RÖVE - wait so long (remix) swedish house mafia',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/b9Gi0JICt5Y/maxresdefault.jpg',
      duration: '1:12:14',
      youtubeId: 'b9Gi0JICt5Y'
    },
    {
      id: '3',
      title: 'RÖVE - agents of time', 
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/0JjO27k8P44/maxresdefault.jpg',
      duration: '1:01:07',
      youtubeId: '0JjO27k8P44'
    },
    {
      id: '4',
      title: 'RÖVE - house session',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/cHT2laQvAYI/maxresdefault.jpg',
      duration: '1:03:05',
      youtubeId: 'cHT2laQvAYI'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'SUNSET SESSION VOL. 2',
      date: 'TODAY - AUGUST 2',
      location: 'RUZAFA TERRACE'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Video Section */}
      <motion.section 
        className="h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VideoHero isLive={false}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Creative Typography inspired by Swedish House Mafia cover */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="font-display text-6xl md:text-8xl text-white tracking-[0.3em] mb-4">
                <div className="flex justify-center items-center gap-8 mb-2">
                  <span className="transform -rotate-12">L</span>
                  <span className="transform rotate-6">O</span>
                  <span className="transform -rotate-3">W</span>
                </div>
                <div className="flex justify-center items-center gap-8 mb-2">
                  <span className="transform rotate-12">T</span>
                  <span className="transform -rotate-6">I</span>
                  <span className="transform rotate-3">D</span>
                  <span className="transform -rotate-12">E</span>
                </div>
                <div className="flex justify-center items-center gap-8">
                  <span className="transform rotate-6">R</span>
                  <span className="transform -rotate-3">I</span>
                  <span className="transform rotate-12">T</span>
                  <span className="transform -rotate-6">U</span>
                  <span className="transform rotate-3">A</span>
                  <span className="transform -rotate-12">L</span>
                </div>
              </div>
            </motion.div>

            <motion.p 
              className="font-body text-lg md:text-xl text-white/90 mb-12 leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              IMMERSIVE AUDIO EXPERIENCES CRAFTED FOR MINDFUL LISTENING AND DEEP CONNECTION
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link to="/live">
                <motion.button 
                  className="btn-animated-primary tracking-widest"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  JOIN LIVE SESSION
                </motion.button>
              </Link>
              <Link to="/archive">
                <motion.button 
                  className="btn-animated-ghost tracking-widest text-white border-white hover:bg-white hover:text-foreground"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  EXPLORE ARCHIVE
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </VideoHero>
      </motion.section>

      {/* Recent Sessions Section */}
      <motion.section 
        className="min-h-screen py-32 px-6 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUpVariants}
          >
            <motion.h2 
              className="font-display text-5xl md:text-7xl text-foreground mb-8 tracking-wider"
              whileHover={{ 
                fontFamily: '"Crimson Text", serif',
                transition: { duration: 0.3 }
              }}
            >
              RECENT SESSIONS
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide"
              variants={fadeInUpVariants}
            >
              DISCOVER OUR LATEST LIVE SESSIONS PERFORMED BY RÖVE, EACH CRAFTED TO TRANSPORT YOU TO A DIFFERENT STATE OF CONSCIOUSNESS
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid-elegant"
            variants={staggerContainer}
          >
            {recentSessions.map((session, index) => (
              <motion.div
                key={session.id}
                variants={fadeInUpVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/video/${session.id}`} className="group block">
                  <div className="card-elegant overflow-hidden relative">
                    <motion.div 
                      className="aspect-video overflow-hidden rounded-sm mb-6 relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
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
                    </motion.div>
                    <div className="space-y-3">
                      <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300 tracking-wide">
                        {session.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="font-body text-sm text-muted-foreground tracking-wide">BY {session.artist}</p>
                        <span className="font-body text-xs text-muted-foreground tracking-wider">{session.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={fadeInUpVariants}
          >
            <Link to="/archive">
              <motion.button 
                className="btn-animated-secondary tracking-widest"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW ALL SESSIONS
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section 
        className="min-h-screen py-32 px-6 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUpVariants}
          >
            <motion.h2 
              className="font-display text-5xl md:text-7xl text-foreground mb-8 tracking-wider"
              whileHover={{ 
                fontFamily: '"Crimson Text", serif',
                transition: { duration: 0.3 }
              }}
            >
              UPCOMING EVENTS
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-muted-foreground tracking-wide"
              variants={fadeInUpVariants}
            >
              JOIN US FOR INTIMATE GATHERINGS WHERE MUSIC AND NATURE CONVERGE
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            {upcomingEvents.map((event) => (
              <motion.div 
                key={event.id} 
                className="card-elegant"
                variants={fadeInUpVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">{event.title}</h3>
                    <p className="font-body text-muted-foreground tracking-wide">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-body-medium text-xl text-accent tracking-wider">{event.date}</span>
                    <motion.button 
                      className="btn-animated-primary tracking-widest"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.target.textContent = 'IT IS FREE :)';
                      }}
                    >
                      GET TICKETS
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={fadeInUpVariants}
          >
            <Link to="/events">
              <motion.button 
                className="btn-animated-secondary tracking-widest"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW ALL EVENTS
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        className="min-h-screen bg-muted/10 py-32 px-6 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center w-full">
          <motion.h2 
            className="font-display text-5xl md:text-7xl text-foreground mb-12 tracking-wider"
            variants={fadeInUpVariants}
            whileHover={{ 
              fontFamily: '"Crimson Text", serif',
              transition: { duration: 0.3 }
            }}
          >
            OUR PHILOSOPHY
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground leading-relaxed mb-12 tracking-wide"
            variants={fadeInUpVariants}
          >
            AT LOWTIDE RITUAL, WE BELIEVE IN THE TRANSFORMATIVE POWER OF MINDFUL LISTENING. 
            EACH SESSION IS CAREFULLY CURATED TO CREATE SPACE FOR INTROSPECTION, CONNECTION, 
            AND THE REDISCOVERY OF WONDER IN THE EVERYDAY.
          </motion.p>
          <motion.div variants={fadeInUpVariants}>
            <Link to="/rituals">
              <motion.button 
                className="btn-animated-primary tracking-widest"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORE RITUALS
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
