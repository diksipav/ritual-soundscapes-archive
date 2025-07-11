export default function Live() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="live-indicator mb-6 justify-center">
            <span>LIVE NOW</span>
          </div>
          <h1 className="font-display text-4xl text-foreground mb-4">Current Session</h1>
          <p className="font-body text-lg text-muted-foreground">
            Immerse yourself in the present moment
          </p>
        </div>

        <div className="card-elegant">
          <div className="aspect-video bg-muted rounded-sm mb-6 flex items-center justify-center">
            <p className="font-body text-muted-foreground">Live stream player would be integrated here</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-foreground">Ambient Dusk - Live from Big Sur</h2>
            <div className="flex items-center gap-4 font-body text-sm text-muted-foreground">
              <span>Started 2:34 PM PST</span>
              <span>•</span>
              <span>147 listeners</span>
            </div>
            <p className="font-body text-foreground leading-relaxed">
              Join us for an ambient journey as the sun sets over the Pacific Coast. 
              Today's session features ethereal soundscapes and field recordings from the California coast.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl text-foreground mb-6">Upcoming Sessions</h3>
          <div className="space-y-4">
            {[
              { time: '8:00 PM PST', title: 'Nocturnal Frequencies', host: 'Maya Chen' },
              { time: '10:30 PM PST', title: 'Minimal Techno Meditation', host: 'Alex Rivers' },
              { time: '12:00 AM PST', title: 'Late Night Ambient', host: 'Jordan Blake' }
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-sm hover:bg-muted/20 transition-colors duration-300">
                <div>
                  <h4 className="font-body-medium text-foreground">{session.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">with {session.host}</p>
                </div>
                <span className="font-body text-sm text-muted-foreground">{session.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}