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
      setLogoTransformed(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const recentSessions = [
    {
      id: '1',
      title: 'Ritual Frequencies',
      artist: 'Lowtide Collective',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      duration: '45 min',
      videoUrl: 'https://youtu.be/rxAe3xqyeSA'
    },
    {
      id: '2',
      title: 'Coastal Meditation',
      artist: 'Ocean Collective',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      duration: '42 min'
    },
    {
      id: '3',
      title: 'Forest Frequencies', 
      artist: 'Nature Lab',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      duration: '58 min'
    },
    {
      id: '4',
      title: 'Urban Tranquility',
      artist: 'City Zen',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
      duration: '36 min'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Sunset Sessions Vol. 3',
      date: 'March 15',
      location: 'Malibu Beach'
    },
    {
      id: '2',
      title: 'Forest Ritual',
      date: 'April 22',
      location: 'Muir Woods'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Logo */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transition-all duration-1000 ease-out"
           style={{
             transform: logoTransformed 
               ? `translate(-50%, -50%) translate(${-50 + scrollY * 0.1}vw, ${-50 + scrollY * 0.05}vh) scale(0.6)` 
               : 'translate(-50%, -50%) scale(1)',
             opacity: logoTransformed ? 0.9 : 1
           }}>
        <h1 className={`font-display text-white transition-all duration-1000 ${
          logoTransformed 
            ? 'text-2xl text-accent' 
            : 'text-6xl md:text-8xl'
        }`}>
          {logoTransformed ? 'LTY' : 'LOWTIDE RITUAL'}
        </h1>
      </div>

      {/* Hero Video Section */}
      <VideoHero isLive={true}>
        <div className="mt-32 md:mt-48">
          <h2 className="font-display text-2xl md:text-4xl mb-4 text-white animate-fade-in">
            WHERE MUSIC BECOMES A RITUAL
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in delay-300">
            IMMERSIVE AUDIO EXPERIENCES CRAFTED FOR MINDFUL LISTENING AND DEEP CONNECTION
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Link to="/live" className="btn-animated-primary">
              JOIN LIVE SESSION
            </Link>
            <Link to="/archive" className="btn-animated-ghost">
              EXPLORE ARCHIVE
            </Link>
          </div>
        </div>
      </VideoHero>

      {/* Recent Sessions Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 tracking-wide">RECENT SESSIONS</h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DISCOVER OUR LATEST AUDIO JOURNEYS, EACH CRAFTED TO TRANSPORT YOU TO A DIFFERENT STATE OF CONSCIOUSNESS
            </p>
          </div>

          <div className="grid-elegant">
            {recentSessions.map((session) => (
              <Link key={session.id} to="/archive" className="group">
                <div className="card-elegant">
                  <div className="aspect-video overflow-hidden rounded-sm mb-4">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
            <Link to="/archive" className="btn-animated-secondary">
              VIEW ALL SESSIONS
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-32 px-6 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in">
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8 tracking-wide">EXPERIENCES</h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                BEYOND THE SESSIONS, WE CREATE IMMERSIVE EXPERIENCES THAT CONNECT YOU WITH NATURE, COMMUNITY, AND YOURSELF. FROM SUNRISE CEREMONIES TO OCEAN-SIDE RITUALS.
              </p>
              <Link to="/events" className="btn-animated-primary">
                EXPLORE EXPERIENCES
              </Link>
            </div>
            <div className="scroll-fade-in delay-300">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                alt="Surfing experience"
                className="w-full h-[500px] object-cover rounded-sm shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 tracking-wide">UPCOMING EVENTS</h2>
            <p className="font-body text-xl text-muted-foreground">
              JOIN US FOR INTIMATE GATHERINGS WHERE MUSIC AND NATURE CONVERGE
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card-elegant">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1 uppercase tracking-wide">{event.title}</h3>
                    <p className="font-body text-muted-foreground uppercase">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-body-medium text-accent uppercase">{event.date}</span>
                    <Link to="/events" className="btn-animated-primary">
                      GET TICKETS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/events" className="btn-animated-secondary">
              VIEW ALL EVENTS
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-muted/10">
        <div className="max-w-4xl mx-auto text-center scroll-fade-in">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12 tracking-wide">OUR PHILOSOPHY</h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed mb-12">
            AT LOWTIDE RITUAL, WE BELIEVE IN THE TRANSFORMATIVE POWER OF MINDFUL LISTENING. 
            EACH SESSION IS CAREFULLY CURATED TO CREATE SPACE FOR INTROSPECTION, CONNECTION, 
            AND THE REDISCOVERY OF WONDER IN THE EVERYDAY.
          </p>
          <Link to="/rituals" className="btn-animated-primary">
            EXPLORE RITUALS
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
