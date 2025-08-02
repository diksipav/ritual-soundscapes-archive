
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
      title: 'SET 1 - RITUAL FREQUENCIES',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/rxAe3xqyeSA/maxresdefault.jpg',
      duration: '45 MIN',
      youtubeId: 'rxAe3xqyeSA'
    },
    {
      id: '2',
      title: 'SET 2 - DAWN MEDITATION',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/b9Gi0JICt5Y/maxresdefault.jpg',
      duration: '42 MIN',
      youtubeId: 'b9Gi0JICt5Y'
    },
    {
      id: '3',
      title: 'SET 3 - FOREST RHYTHMS', 
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/0JjO27k8P44/maxresdefault.jpg',
      duration: '58 MIN',
      youtubeId: '0JjO27k8P44'
    },
    {
      id: '4',
      title: 'SET 4 - COASTAL FREQUENCIES',
      artist: 'RÖVE',
      image: 'https://img.youtube.com/vi/cHT2laQvAYI/maxresdefault.jpg',
      duration: '38 MIN',
      youtubeId: 'cHT2laQvAYI'
    }
  ];

  const ritualExperiences = [
    'SOUND HEALING',
    'ANIMAL FLOW',
    'YOGA',
    'CALISTHENICS',
    'SURFING',
    'ICE BATH',
    'BREATHWORK',
    'CONSCIOUS EATING',
    'HUMAN / AI COLLABORATION',
    'SKATE IN A BOWL',
    'PUMPTRACK'
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
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
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
        <VideoHero isLive={true}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="font-display text-4xl md:text-7xl mb-6 text-white tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              WHERE MUSIC BECOMES A RITUAL
            </motion.h1>
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
                      {/* Live session badge */}
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        LIVE SESSION
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

      {/* Ritual Experiences Section */}
      <motion.section 
        className="min-h-screen bg-muted/10 py-32 px-6 flex items-center"
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
              RITUAL EXPERIENCES
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide"
              variants={fadeInUpVariants}
            >
              WE OFFER TRANSFORMATIVE EXPERIENCES THAT INTEGRATE MUSIC WITH MOVEMENT, MINDFULNESS, AND NATURE
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
            variants={staggerContainer}
          >
            {ritualExperiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="bg-muted/50 rounded-sm p-4 text-center hover:bg-muted/70 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-body text-sm text-foreground tracking-wider">
                  {experience}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUpVariants}
              className="space-y-8"
            >
              <motion.p 
                className="font-body text-lg text-muted-foreground leading-relaxed tracking-wide"
                variants={fadeInUpVariants}
              >
                EACH RITUAL IS CAREFULLY DESIGNED TO CREATE SPACE FOR INTROSPECTION, MOVEMENT, AND CONNECTION WITH THE PRESENT MOMENT. COMBINING ANCIENT PRACTICES WITH MODERN WELLNESS APPROACHES.
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
            </motion.div>
            
            <motion.div
              variants={fadeInUpVariants}
              className="aspect-square overflow-hidden rounded-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
                alt="Skate Bowl Experience"
                className="w-full h-full object-cover"
              />
            </motion.div>
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
