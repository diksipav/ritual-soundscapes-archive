export default function Rituals() {
  const rituals = [
    {
      id: '1',
      title: 'Morning Intention',
      description: 'Begin each day with mindful awareness and clear intention setting.',
      duration: '10-15 min',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'Sunset Reflection',
      description: 'Release the day\'s energy and prepare for evening contemplation.',
      duration: '20-30 min',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      title: 'Nature Connection',
      description: 'Deepen your relationship with the natural world through mindful observation.',
      duration: '30-60 min',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
    },
    {
      id: '4',
      title: 'Sound Bath Journey',
      description: 'Immerse yourself in healing frequencies and vibrational therapy.',
      duration: '45-90 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl text-foreground mb-6">Rituals</h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated practices to cultivate presence, awareness, and connection in your daily life. 
            Each ritual is designed to create space for reflection and inner exploration.
          </p>
        </div>

        <div className="space-y-12">
          {rituals.map((ritual, index) => (
            <div 
              key={ritual.id}
              className={`flex flex-col lg:flex-row gap-8 items-center card-elegant ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-2/5">
                <img
                  src={ritual.image}
                  alt={ritual.title}
                  className="w-full h-48 lg:h-64 object-cover rounded-sm"
                />
              </div>
              
              <div className="lg:w-3/5 space-y-4">
                <div className="space-y-2">
                  <h2 className="font-display text-2xl text-foreground">{ritual.title}</h2>
                  <p className="font-body text-sm text-accent">{ritual.duration}</p>
                </div>
                
                <p className="font-body text-foreground leading-relaxed">
                  {ritual.description}
                </p>
                
                <button className="btn-primary">
                  Begin Ritual
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block p-8 border border-border rounded-sm bg-muted/20">
            <h3 className="font-display text-xl text-foreground mb-2">Create Your Own Ritual</h3>
            <p className="font-body text-muted-foreground mb-4">
              Combine elements from our practices to design a personal ritual that resonates with your journey.
            </p>
            <button className="btn-secondary">
              Ritual Builder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}