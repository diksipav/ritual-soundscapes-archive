import { Button } from '@/components/ui/button';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lineup: string[];
  description: string;
  image: string;
}

export default function Events() {
  const events: Event[] = [
    {
      id: '1',
      title: 'Sunset Sessions Vol. 3',
      date: 'March 15, 2024',
      location: 'Malibu Beach, CA',
      lineup: ['Kiasmos', 'Nils Frahm', 'Ólafur Arnalds'],
      description: 'An evening of ambient electronic music as the sun meets the Pacific.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Forest Ritual',
      date: 'April 22, 2024',
      location: 'Muir Woods, CA',
      lineup: ['Max Richter', 'Emilie Simon', 'GoGo Penguin'],
      description: 'Immersive sound experience among the ancient redwoods.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Desert Frequencies',
      date: 'May 18, 2024',
      location: 'Joshua Tree, CA',
      lineup: ['Bonobo', 'Tycho', 'Yann Tiersen'],
      description: 'Electronic meditation under the desert stars.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl text-foreground mb-6">Events</h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for intimate gatherings where music meets nature. Each event is crafted to create deep connections through shared experience.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-sm"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <h2 className="font-display text-3xl text-foreground">{event.title}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-body text-muted-foreground">
                    <span>{event.date}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="font-body text-foreground leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-body-medium text-sm text-muted-foreground uppercase tracking-wider">
                    Lineup
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
                
                <Button className="btn-primary">
                  Get Tickets
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block p-8 border border-border rounded-sm bg-muted/20">
            <h3 className="font-display text-xl text-foreground mb-2">Stay Updated</h3>
            <p className="font-body text-muted-foreground mb-4">
              Be the first to know about upcoming events and exclusive experiences.
            </p>
            <Button className="btn-secondary">
              Join Our Mailing List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}