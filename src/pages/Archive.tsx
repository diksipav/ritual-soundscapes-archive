interface ArchiveSession {
  id: string;
  title: string;
  artist: string;
  date: string;
  duration: string;
  image: string;
  tags: string[];
}

export default function Archive() {
  const sessions: ArchiveSession[] = [
    {
      id: '1',
      title: 'Ritual Frequencies',
      artist: 'Lowtide Collective',
      date: 'March 12, 2024',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      tags: ['Ritual', 'Meditation', 'Deep']
    },
    {
      id: '2',
      title: 'Dawn Meditation',
      artist: 'Luna Collective',
      date: 'March 10, 2024',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      tags: ['Ambient', 'Meditation', 'Dawn']
    },
    {
      id: '3',
      title: 'Forest Rhythms',
      artist: 'Nature Sound Lab',
      date: 'March 8, 2024',
      duration: '62 min',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop',
      tags: ['Field Recording', 'Nature', 'Organic']
    },
    {
      id: '4',
      title: 'Coastal Frequencies',
      artist: 'Wave Theory',
      date: 'March 5, 2024',
      duration: '38 min',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop',
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

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl text-foreground mb-6">Archive</h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Revisit past sessions and discover new sounds. Each recording captures a unique moment in time and place.
          </p>
        </div>

        <div className="grid-elegant">
          {sessions.map((session) => (
            <div key={session.id} className="card-elegant group cursor-pointer hover:shadow-lg">
              <div className="aspect-square overflow-hidden rounded-sm mb-4">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">{session.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">by {session.artist}</p>
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-animated-secondary">
            Load More Sessions
          </button>
        </div>
      </div>
    </div>
  );
}