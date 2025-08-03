
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoHero from '@/components/VideoHero';
import { useEffect, useRef } from 'react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const recentSessions = [
    {
      id: '1',
      title: 'What Happens When You DJ Outside? PumpTrack DJ SET',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/rxAe3xqyeSA/maxresdefault.jpg',
      duration: '58:22',
      youtubeId: 'rxAe3xqyeSA'
    },
    {
      id: '2',
      title: 'AFRO Evening DJ SET at the Turia Park',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/b9Gi0JICt5Y/maxresdefault.jpg',
      duration: '1:12:14',
      youtubeId: 'b9Gi0JICt5Y'
    },
    {
      id: '3',
      title: 'Sunrise Espresso DJ SET',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/0JjO27k8P44/maxresdefault.jpg',
      duration: '1:01:07',
      youtubeId: '0JjO27k8P44'
    },
    {
      id: '4',
      title: 'Park and coffee AFRO HOUSE DJ SET',
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

  // Custom Play Button Component
  const CustomPlayButton = () => (
    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/20">
      <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-black border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1 transition-all duration-300"></div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Video Section */}
      <motion.section 
        className="h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VideoHero 
          isLive={false} 
          videoUrl="https://www.youtube.com/watch?v=rxAe3xqyeSA"
          className="h-screen"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6"
          >
            {/* Centered Logo */}
            <motion.div 
              className="mb-12 sm:mb-16 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="font-display text-white tracking-[0.3em] text-2xl sm:text-3xl md:text-4xl text-center">
                  <div className="text-center">LOWTIDE</div>
                  <div className="text-center">RITUAL</div>
                </div>
              </div>
            </motion.div>

            {/* Main Heading with Creative Typography */}
            <motion.h2 
              className="text-3xl sm:text-5xl md:text-7xl text-white mb-6 sm:mb-8 tracking-wider leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ fontFamily: '"Crimson Text", serif' }}
            >
              WHERE MUSIC BECOMES A RITUAL
            </motion.h2>

            <motion.p 
              className="font-body text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed tracking-wide px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              IMMERSIVE AUDIO EXPERIENCES CRAFTED FOR MINDFUL LISTENING AND DEEP CONNECTION
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Link to="/shop">
                <motion.button 
                  className="btn-animated-primary tracking-widest w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  JOIN THE TRIBE
                </motion.button>
              </Link>
              <Link to="/archive">
                <motion.button 
                  className="btn-animated-ghost tracking-widest text-white border-white hover:bg-white hover:text-foreground w-full sm:w-auto"
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
        className="min-h-screen py-16 sm:py-32 px-4 sm:px-6 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-12 sm:mb-20" variants={fadeInUpVariants}>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-6 sm:mb-8 tracking-wider"
              whileHover={{ 
                fontFamily: '"Playfair Display", serif',
                transition: { duration: 0.3 }
              }}
            >
              RECENT SESSIONS
            </motion.h2>
            <motion.p 
              className="font-body text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide px-4"
              variants={fadeInUpVariants}
            >
              DISCOVER OUR LATEST SESSIONS PERFORMED BY RÖVE, EACH CRAFTED TO TRANSPORT YOU TO A DIFFERENT STATE OF CONSCIOUSNESS
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
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
                      className="aspect-video overflow-hidden rounded-sm mb-4 sm:mb-6 relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={session.image}
                        alt={session.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Custom Play button overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
                        <CustomPlayButton />
                      </div>
                    </motion.div>
                    <div className="space-y-2 sm:space-y-3 px-2">
                      <h3 className="font-display text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors duration-300 tracking-wide">
                        {session.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <p className="font-body text-muted-foreground tracking-wide">BY {session.artist}</p>
                        <span className="font-body text-xs text-muted-foreground tracking-wider">{session.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12 sm:mt-16" variants={fadeInUpVariants}>
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
        className="min-h-screen py-16 sm:py-32 px-4 sm:px-6 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.div className="text-center mb-12 sm:mb-20" variants={fadeInUpVariants}>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-7xl text-foreground mb-6 sm:mb-8 tracking-wider"
              variants={fadeInUpVariants}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              UPCOMING EVENTS
            </motion.h2>
            <motion.p 
              className="font-body text-base sm:text-lg text-muted-foreground tracking-wide px-4"
              variants={fadeInUpVariants}
            >
              JOIN US FOR INTIMATE GATHERINGS WHERE MUSIC AND NATURE CONVERGE
            </motion.p>
          </motion.div>

          <motion.div className="space-y-6 sm:space-y-8" variants={staggerContainer}>
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                className="card-elegant"
                variants={fadeInUpVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2 tracking-wide">{event.title}</h3>
                    <p className="font-body text-muted-foreground tracking-wide">{event.location}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <span className="font-body-medium text-lg sm:text-xl text-accent tracking-wider">{event.date}</span>
                    <motion.button 
                      className="btn-animated-primary tracking-widest w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.textContent = 'IT IS FREE :)';
                      }}
                    >
                      GET TICKETS
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12 sm:mt-16" variants={fadeInUpVariants}>
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
        className="min-h-screen bg-muted/10 py-16 sm:py-32 px-4 sm:px-6 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center w-full">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl text-foreground mb-8 sm:mb-12 tracking-wider"
            variants={fadeInUpVariants}
            style={{ fontFamily: '"Crimson Text", serif' }}
          >
            OUR PHILOSOPHY
          </motion.h2>
          <motion.p 
            className="font-body text-base sm:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-12 tracking-wide px-4"
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
                EXPLORE BODY AND MIND
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
