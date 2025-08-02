
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lineup: string[];
  description: string;
  image: string;
  locationUrl?: string;
  isFree?: boolean;
}

export default function Events() {
  const [ticketStates, setTicketStates] = useState<{[key: string]: boolean}>({});

  const handleTicketClick = (eventId: string) => {
    setTicketStates(prev => ({
      ...prev,
      [eventId]: true
    }));
  };

  const events: Event[] = [
    {
      id: '1',
      title: 'SUNSET SESSION VOL. 2',
      date: 'August 2, 2025',
      location: 'Ruzafa Terrace, Valencia',
      lineup: ['RÖVE'],
      description: 'An evening of ambient electronic music as the sun meets the Mediterranean. Join us for an intimate session on the beautiful Ruzafa terrace.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
      locationUrl: 'https://maps.app.goo.gl/ibDYUh1ih46rPzSL6?g_st=iw',
      isFree: true
    },
    {
      id: '2',
      title: 'SUNSET SESSIONS VOL. 3',
      date: 'March 15, 2024',
      location: 'Malibu Beach, CA',
      lineup: ['Kiasmos', 'Nils Frahm', 'Ólafur Arnalds'],
      description: 'An evening of ambient electronic music as the sun meets the Pacific.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'FOREST RITUAL',
      date: 'April 22, 2024',
      location: 'Muir Woods, CA',
      lineup: ['Max Richter', 'Emilie Simon', 'GoGo Penguin'],
      description: 'Immersive sound experience among the ancient redwoods.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'DESERT FREQUENCIES',
      date: 'May 18, 2024',
      location: 'Joshua Tree, CA',
      lineup: ['Bonobo', 'Tycho', 'Yann Tiersen'],
      description: 'Electronic meditation under the desert stars.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.3
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
          <h1 className="font-display text-5xl text-foreground mb-6 tracking-wider">EVENTS</h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide">
            JOIN US FOR INTIMATE GATHERINGS WHERE MUSIC MEETS NATURE. EACH EVENT IS CRAFTED TO CREATE DEEP CONNECTIONS THROUGH SHARED EXPERIENCE.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="lg:w-1/2">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <h2 className="font-display text-3xl text-foreground tracking-wider">{event.title}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-body text-muted-foreground">
                    <span>{event.date}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="font-body text-foreground leading-relaxed tracking-wide">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-body-medium text-sm text-muted-foreground uppercase tracking-wider">
                    LINEUP
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.lineup.map((artist) => (
                      <span
                        key={artist}
                        className="font-body text-sm px-3 py-1 bg-muted rounded-full text-foreground"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-primary tracking-wider"
                    onClick={() => handleTicketClick(event.id)}
                  >
                    {ticketStates[event.id] ? 'IT IS FREE :)' : 'GET TICKETS'}
                  </Button>
                  
                  {event.locationUrl && (
                    <Button 
                      className="btn-secondary tracking-wider"
                      onClick={() => window.open(event.locationUrl, '_blank')}
                    >
                      <MapPin size={16} className="mr-2" />
                      LOCATION
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="inline-block p-8 border border-border rounded-sm bg-muted/20">
            <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">STAY UPDATED</h3>
            <p className="font-body text-muted-foreground mb-4 tracking-wide">
              BE THE FIRST TO KNOW ABOUT UPCOMING EVENTS AND EXCLUSIVE EXPERIENCES.
            </p>
            <Button className="btn-secondary tracking-wider">
              JOIN OUR MAILING LIST
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
