
import { Link } from 'react-router-dom';
import VideoHero from '@/components/VideoHero';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [logoTransformed, setLogoTransformed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setLogoTransformed(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const recentSessions = [
    {
      id: '1',
      title: 'RITUAL FREQUENCIES',
      artist: 'LOWTIDE COLLECTIVE',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      duration: '45 MIN',
      videoUrl: 'https://youtu.be/rxAe3xqyeSA'
    },
    {
      id: '2',
      title: 'COASTAL MEDITATION',
      artist: 'OCEAN COLLECTIVE',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      duration: '42 MIN'
    },
    {
      id: '3',
      title: 'FOREST FREQUENCIES', 
      artist: 'NATURE LAB',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      duration: '58 MIN'
    },
    {
      id: '4',
      title: 'URBAN TRANQUILITY',
      artist: 'CITY ZEN',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
      duration: '36 MIN'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'SUNSET SESSIONS VOL. 3',
      date: 'MARCH 15',
      location: 'MALIBU BEACH'
    },
    {
      id: '2',
      title: 'FOREST RITUAL',
      date: 'APRIL 22',
      location: 'MUIR WOODS'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Logo - Fixed positioning */}
      <div 
        className="fixed top-1/2 left-1/2 z-50 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          transform: logoTransformed 
            ? `translate(-50%, -50px) scale(0.3)` 
            : 'translate(-50%, -50%) scale(1)',
          opacity: logoTransformed ? 0.95 : 1
        }}
      >
        <h1 className={`font-display text-white transition-all duration-1000 tracking-[0.2em] ${
          logoTransformed 
            ? 'text-xl text-accent font-bold' 
            : 'text-5xl md:text-7xl'
        }`}>
          {logoTransformed ? 'LTY' : 'LOWTIDE RITUAL'}
        </h1>
      </div>

      {/* Hero Video Section */}
      <VideoHero isLive={true}>
        <div className="mt-32 md:mt-48 space-y-8">
          <h2 className="font-display text-2xl md:text-4xl mb-4 text-white animate-fade-in tracking-wide">
            WHERE MUSIC BECOMES A RITUAL
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in delay-300 max-w-2xl mx-auto">
            IMMERSIVE AUDIO EXPERIENCES CRAFTED FOR MINDFUL LISTENING AND DEEP CONNECTION
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-500">
            <Link 
              to="/live" 
              className="inline-flex items-center justify-center px-8 py-4 font-body-medium text-sm text-primary-foreground bg-primary rounded-sm shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 uppercase tracking-wide"
            >
              JOIN LIVE SESSION
            </Link>
            <Link 
              to="/archive" 
              className="inline-flex items-center justify-center px-8 py-4 font-body-medium text-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 border border-white/30 rounded-sm uppercase tracking-wide text-white"
            >
              EXPLORE ARCHIVE
            </Link>
          </div>
        </div>
      </VideoHero>

      {/* DJ Sets Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 tracking-wide">RECENT SESSIONS</h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DISCOVER OUR LATEST AUDIO JOURNEYS, EACH CRAFTED TO TRANSPORT YOU TO A DIFFERENT STATE OF CONSCIOUSNESS
            </p>
          </div>

          <div className="grid-elegant">
            {recentSessions.map((session, index) => (
              <Link key={session.id} to="/archive" className="group">
                <div className={`card-elegant scroll-fade-in transform transition-all duration-700 hover:scale-105`} style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="aspect-video overflow-hidden rounded-sm mb-4">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
                      {session.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-body text-sm text-muted-foreground uppercase">BY {session.artist}</p>
                      <span className="font-body text-xs text-muted-foreground">{session.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/archive" 
              className="inline-flex items-center justify-center px-8 py-3 font-body-medium text-sm text-foreground bg-background border border-border rounded-sm shadow-sm transition-all duration-300 hover:bg-muted hover:scale-105 uppercase tracking-wide"
            >
              VIEW ALL SESSIONS
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-32 px-6 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in transform transition-all duration-1000">
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8 tracking-wide">EXPERIENCES</h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                BEYOND THE SESSIONS, WE CREATE IMMERSIVE EXPERIENCES THAT CONNECT YOU WITH NATURE, COMMUNITY, AND YOURSELF. FROM SUNRISE CEREMONIES TO OCEAN-SIDE RITUALS.
              </p>
              <Link 
                to="/events" 
                className="inline-flex items-center justify-center px-8 py-3 font-body-medium text-sm text-primary-foreground bg-primary rounded-sm shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 uppercase tracking-wide"
              >
                EXPLORE EXPERIENCES
              </Link>
            </div>
            <div className="scroll-fade-in transform transition-all duration-1000 delay-300">
              <img 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop"
                alt="Epic landscape experience"
                className="w-full h-[500px] object-cover rounded-sm shadow-lg transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surfing/Ocean Philosophy Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in transform transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                alt="Ocean ritual and connection"
                className="w-full h-[500px] object-cover rounded-sm shadow-lg transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="scroll-fade-in transform transition-all duration-1000 delay-300">
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8 tracking-wide">PHILOSOPHY</h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                AT LOWTIDE RITUAL, WE BELIEVE IN THE TRANSFORMATIVE POWER OF MINDFUL LISTENING. 
                EACH SESSION IS CAREFULLY CURATED TO CREATE SPACE FOR INTROSPECTION, CONNECTION, 
                AND THE REDISCOVERY OF WONDER IN THE EVERYDAY.
              </p>
              <Link 
                to="/rituals" 
                className="inline-flex items-center justify-center px-8 py-3 font-body-medium text-sm text-primary-foreground bg-primary rounded-sm shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 uppercase tracking-wide"
              >
                EXPLORE RITUALS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-32 px-6 bg-muted/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 tracking-wide">UPCOMING EVENTS</h2>
            <p className="font-body text-xl text-muted-foreground">
              JOIN US FOR INTIMATE GATHERINGS WHERE MUSIC AND NATURE CONVERGE
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className={`card-elegant scroll-fade-in transform transition-all duration-700 hover:scale-102`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1 uppercase tracking-wide">{event.title}</h3>
                    <p className="font-body text-muted-foreground uppercase">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-body-medium text-accent uppercase">{event.date}</span>
                    <Link 
                      to="/events" 
                      className="inline-flex items-center justify-center px-6 py-2 font-body-medium text-sm text-primary-foreground bg-primary rounded-sm shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 uppercase tracking-wide"
                    >
                      GET TICKETS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/events" 
              className="inline-flex items-center justify-center px-8 py-3 font-body-medium text-sm text-foreground bg-background border border-border rounded-sm shadow-sm transition-all duration-300 hover:bg-muted hover:scale-105 uppercase tracking-wide"
            >
              VIEW ALL EVENTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
