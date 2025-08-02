
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Rituals() {
  const [hoveredRitual, setHoveredRitual] = useState<string | null>(null);

  const rituals = [
    {
      id: '1',
      title: 'SOUND HEALING',
      description: 'Immerse yourself in healing frequencies and vibrational therapy that harmonize mind, body, and spirit.',
      duration: '45-90 MIN',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      videoId: 'hxNz128vvPs'
    },
    {
      id: '2',
      title: 'YOGA',
      description: 'Ancient practice combining breath, movement, and mindfulness to cultivate inner peace and physical harmony.',
      duration: '60-90 MIN',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      videoId: 'jJ3WxrOlQls'
    },
    {
      id: '3',
      title: 'SURFING',
      description: 'Connect with the ocean\'s rhythm and flow, finding balance between power and grace on the waves.',
      duration: '60-120 MIN',
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&h=300&fit=crop',
      videoId: 'Wo4Z-pfiT-4'
    },
    {
      id: '4',
      title: 'ICE BATH',
      description: 'Cold immersion therapy to activate the body\'s natural healing response and build mental resilience.',
      duration: '15-30 MIN',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      videoId: 'qpoUg_WPdPE'
    }
  ];

  const ritualExperiences = [
    'SOUND HEALING', 'ANIMAL FLOW', 'YOGA', 'CALISTHENICS',
    'SURFING', 'ICE BATH', 'BREATHWORK', 'CONSCIOUS EATING',
    'HUMAN / AI COLLABORATION', 'SKATE IN A BOWL', 'PUMPTRACK'
  ];

  const fadeInUp = {
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
    <div className="min-h-screen bg-background pt-16 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 sm:mb-6 tracking-wider">BODY AND MIND</h1>
          <p className="font-body text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide">
            TRANSFORMATIVE EXPERIENCES THAT INTEGRATE MUSIC WITH MOVEMENT, MINDFULNESS, AND NATURE
          </p>
        </motion.div>

        {/* Featured Rituals */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 sm:mb-20"
        >
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3 sm:mb-4 tracking-wider">FEATURED RITUALS</h2>
            <p className="font-body text-muted-foreground tracking-wide text-sm sm:text-base">
              CORE PRACTICES FOR DEEP TRANSFORMATION
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {rituals.map((ritual, index) => (
              <motion.div 
                key={ritual.id}
                className={`flex flex-col lg:flex-row gap-6 sm:gap-8 items-center card-elegant ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredRitual(ritual.id)}
                onMouseLeave={() => setHoveredRitual(null)}
              >
                <div className="w-full lg:w-2/5">
                  <motion.div
                    className="w-full h-48 sm:h-56 lg:h-64 rounded-sm overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    {hoveredRitual === ritual.id ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${ritual.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${ritual.videoId}`}
                        title={ritual.title}
                        allow="autoplay; encrypted-media"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={ritual.image}
                        alt={ritual.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                </div>
                
                <div className="w-full lg:w-3/5 space-y-3 sm:space-y-4 text-center lg:text-left">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl text-foreground tracking-wider">{ritual.title}</h3>
                    <p className="font-body text-xs sm:text-sm text-accent tracking-wider">{ritual.duration}</p>
                  </div>
                  
                  <p className="font-body text-sm sm:text-base text-foreground leading-relaxed tracking-wide">
                    {ritual.description}
                  </p>
                  
                  <motion.button 
                    className="btn-primary tracking-wider text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    BEGIN RITUAL
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Ritual Experiences Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3 sm:mb-4 tracking-wider">ALL EXPERIENCES</h2>
            <p className="font-body text-muted-foreground tracking-wide text-sm sm:text-base">
              EXPLORE OUR COMPLETE RANGE OF TRANSFORMATIVE PRACTICES
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
            variants={staggerContainer}
          >
            {ritualExperiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-muted/50 rounded-sm p-3 sm:p-4 text-center hover:bg-muted/70 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-body text-xs sm:text-sm text-foreground tracking-wider">
                  {experience}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.div 
          className="text-center mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="inline-block p-6 sm:p-8 border border-border rounded-sm bg-muted/20">
            <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 tracking-wider">CREATE YOUR OWN RITUAL</h3>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 tracking-wide">
              COMBINE ELEMENTS FROM OUR PRACTICES TO DESIGN A PERSONAL RITUAL THAT RESONATES WITH YOUR JOURNEY.
            </p>
            <motion.button 
              className="btn-secondary tracking-wider text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              RITUAL BUILDER
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
