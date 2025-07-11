import { Link } from 'react-router-dom';
import VideoHero from '@/components/VideoHero';
import { Button } from '@/components/ui/button';

const Index = () => {
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
    <div className="min-h-screen bg-background">
      {/* Hero Video Section */}
      <VideoHero isLive={true}>
        <h1 className="font-display text-4xl md:text-6xl mb-4 text-white animate-fade-in">
          where music becomes a ritual
        </h1>
        <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in delay-300">
          immersive audio experiences crafted for mindful listening and deep connection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Link to="/live">
            <button className="btn-animated-primary">
              join live session
            </button>
          </Link>
          <Link to="/archive">
            <button className="btn-animated-ghost">
              explore archive
            </button>
          </Link>
        </div>
      </VideoHero>

      {/* Recent Sessions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-foreground mb-4">recent sessions</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              discover our latest audio journeys, each crafted to transport you to a different state of consciousness
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
                    <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                      {session.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="font-body text-sm text-muted-foreground">by {session.artist}</p>
                      <span className="font-body text-xs text-muted-foreground">{session.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/archive">
              <button className="btn-animated-secondary">
                view all sessions
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-foreground mb-4">upcoming events</h2>
            <p className="font-body text-lg text-muted-foreground">
              join us for intimate gatherings where music and nature converge
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card-elegant">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1">{event.title}</h3>
                    <p className="font-body text-muted-foreground">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-body-medium text-accent">{event.date}</span>
                    <button className="btn-animated-primary">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <button className="btn-animated-secondary">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-foreground mb-8">our philosophy</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            at lowtide ritual, we believe in the transformative power of mindful listening. 
            each session is carefully curated to create space for introspection, connection, 
            and the rediscovery of wonder in the everyday.
          </p>
            <Link to="/rituals">
              <button className="btn-animated-primary">
                explore rituals
              </button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
