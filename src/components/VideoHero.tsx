interface VideoHeroProps {
  videoSrc?: string;
  isLive?: boolean;
  children?: React.ReactNode;
}

export default function VideoHero({ 
  videoSrc = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a29452&profile_id=139&oauth2_token_id=57447761",
  isLive = false,
  children 
}: VideoHeroProps) {
  return (
    <section className="video-hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {isLive && (
          <div className="live-indicator mb-8">
            <span>LIVE NOW</span>
          </div>
        )}
        
        {children && (
          <div className="max-w-2xl">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}