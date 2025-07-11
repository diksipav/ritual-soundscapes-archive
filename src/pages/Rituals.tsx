
export default function Rituals() {
  const rituals = [
    {
      id: '1',
      title: 'MORNING INTENTION',
      description: 'BEGIN EACH DAY WITH MINDFUL AWARENESS AND CLEAR INTENTION SETTING.',
      duration: '10-15 MIN',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'SUNSET REFLECTION',
      description: 'RELEASE THE DAY\'S ENERGY AND PREPARE FOR EVENING CONTEMPLATION.',
      duration: '20-30 MIN',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      title: 'NATURE CONNECTION',
      description: 'DEEPEN YOUR RELATIONSHIP WITH THE NATURAL WORLD THROUGH MINDFUL OBSERVATION.',
      duration: '30-60 MIN',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
    },
    {
      id: '4',
      title: 'SOUND BATH JOURNEY',
      description: 'IMMERSE YOURSELF IN HEALING FREQUENCIES AND VIBRATIONAL THERAPY.',
      duration: '45-90 MIN',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner - Smaller */}
      <section className="relative h-[40vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&h=800&fit=crop"
          alt="Ritual landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl mb-4 tracking-wide animate-fade-in">RITUALS</h1>
            <p className="font-body text-lg md:text-xl animate-fade-in delay-300 leading-relaxed">
              CURATED PRACTICES TO CULTIVATE PRESENCE, AWARENESS, AND CONNECTION IN YOUR DAILY LIFE
            </p>
          </div>
        </div>
      </section>

      {/* Rituals Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {rituals.map((ritual, index) => (
              <div 
                key={ritual.id}
                className={`flex flex-col lg:flex-row gap-8 items-center card-elegant scroll-fade-in ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
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
                    <h2 className="font-display text-2xl text-foreground uppercase tracking-wide">{ritual.title}</h2>
                    <p className="font-body text-sm text-accent uppercase">{ritual.duration}</p>
                  </div>
                  
                  <p className="font-body text-foreground leading-relaxed">
                    {ritual.description}
                  </p>
                  
                  <button className="btn-animated-primary">
                    BEGIN RITUAL
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="inline-block p-8 border border-border rounded-sm bg-muted/20">
              <h3 className="font-display text-xl text-foreground mb-2 uppercase">CREATE YOUR OWN RITUAL</h3>
              <p className="font-body text-muted-foreground mb-4">
                COMBINE ELEMENTS FROM OUR PRACTICES TO DESIGN A PERSONAL RITUAL THAT RESONATES WITH YOUR JOURNEY.
              </p>
              <button className="btn-animated-secondary">
                RITUAL BUILDER
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
